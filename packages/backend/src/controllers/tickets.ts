import express from "express";
import { DateTime } from "luxon";
import {
  badRequestException,
  notFoundException,
  unknownException,
} from "~/middlewares/ErrorHandler";

import { TICKET_API_ERRORS } from "~/entities/error";
import { Condition, OrderBy } from "~/entities/query";
import {
  getTicket,
  getAccountTickets,
  createTicket,
} from "~/repositories/ticket";
import { getEvent } from "~/repositories/event";
import { isAllowListIncluded, isOwner, lookupAddress } from "~/libs/nft";
import { createTicketingLog } from "~/repositories/ticketingLog";
import { ENSTicket, NFTTicket } from "~/entities/ticket";
import { getProvider, mainnetProvider } from "~/libs/web3providers";

import { Zmorpheus__factory as ZmorpheusFactory } from "~/libs/contractMock";
import getContractAddress from "~/libs/contract";

function isValidMessage(message: {
  eventId?: string;
  nonce?: string;
  nft?: {
    chainId: string;
    tokenType: string;
    contractAddress: string;
    tokenId?: string;
  };
  ens?: string;
}): boolean {
  return !(
    !message.eventId ||
    !message.nonce ||
    (!message.ens &&
      (!message.nft ||
        !message.nft.tokenType ||
        !message.nft.chainId ||
        !message.nft.contractAddress ||
        !message.nft.tokenId))
  );
}

export const list: express.RequestHandler = async (req, res, next) => {
  const account = req.context.account;
  try {
    const cursor = req.query.cursor || undefined;
    const validated = req.query.validated || false;
    const eventId = req.query.eventId || undefined;

    const l = Number(req.query.limit);
    const limit: number = !isNaN(l) ? l : 10;

    let operator = req.query.operator;
    if (operator !== "desc" && operator !== "asc") operator = "desc";

    const orderBy: OrderBy = {
      target: "created_at",
      operator: operator as "desc" | "asc",
    };

    const condition: Condition[] = [];
    if (eventId) {
      condition.push({
        target: "event_id",
        operator: "==",
        value: eventId,
      });
    }

    if (validated) {
      condition.push({
        target: "validated",
        operator: "==",
        value: true,
      });
    }

    const proofs = await getAccountTickets(
      account.id,
      condition,
      orderBy,
      cursor as string,
      limit
    );

    return res.json({ proofs });
  } catch (e) {
    return next(
      unknownException(TICKET_API_ERRORS.TICKET_UNKNOWN_ERROR, e as Error)
    );
  }
};

export const get: express.RequestHandler = async (req, res, next) => {
  const proofId = req.params.proofId;
  try {
    const proof = await getTicket(proofId);
    if (!proof) {
      return next(notFoundException(TICKET_API_ERRORS.TICKET_NOT_FOUND));
    }
    const event = await getEvent(proof.eventId);
    if (!event) {
      return next(notFoundException(TICKET_API_ERRORS.EVENT_NOT_FOUND));
    }
    return res.json({
      ...proof,
    });
  } catch (e) {
    return next(
      unknownException(TICKET_API_ERRORS.TICKET_UNKNOWN_ERROR, e as Error)
    );
  }
};

//TODO not issue, but join event actually here
export const issue: express.RequestHandler = async (req, res, next) => {
  const { message, signature } = req.body;
  const { eventId, nft, ens, nonce } = message;
  if (!signature) {
    return next(badRequestException(TICKET_API_ERRORS.INVALID_BODY));
  }
  if (!isValidMessage(message)) {
    return next(badRequestException(TICKET_API_ERRORS.INVALID_MESSAGE_JSON));
  }

  const account = req.context.account;
  try {
    // check if the event exists
    const event = await getEvent(eventId);
    if (!event) {
      return next(notFoundException(TICKET_API_ERRORS.EVENT_NOT_FOUND));
    }

    // check if event is not ended
    if (DateTime.fromJSDate(event.endAt as Date) < DateTime.now()) {
      return next(badRequestException(TICKET_API_ERRORS.EVENT_INVALID_TERM));
    }

    // check if ticket is issued and remains valid ticket
    const accountTickets = await getAccountTickets(account.id, [
      { target: "event_id", operator: "==", value: event.id },
    ]);
    if (
      accountTickets &&
      accountTickets.length !== 0 &&
      accountTickets.some((r) => !r.invalidated)
    ) {
      return next(badRequestException(TICKET_API_ERRORS.VALID_TICKET_EXITS));
    }

    if (nft) {
      // check if the account NFT is included in the allow list.
      const { isIncluded } = isAllowListIncluded(nft, event.allowList);
      if (!isIncluded) {
        return next(badRequestException(TICKET_API_ERRORS.TOKEN_NOT_INCLUDED));
      }
      const isTokenOwner = await isOwner(
        account.id,
        nft.chainId,
        nft.tokenType,
        nft.contractAddress,
        nft.tokenId
      );
      // check if the account has the token
      if (!isTokenOwner) {
        return next(badRequestException(TICKET_API_ERRORS.NOT_TOKEN_OWNER));
      }
    } else if (ens) {
      const { isIncluded } = isAllowListIncluded(
        { tokenType: "ENS", ens },
        event.allowList
      );
      // check if the account's ens is included in the allow list
      if (!isIncluded) {
        return next(badRequestException(TICKET_API_ERRORS.ENS_NOT_INCLUDED));
      }
      // check if the account has the ens
      const addressInfo = await lookupAddress(ens);
      if (addressInfo.address !== account.id) {
        return next(badRequestException(TICKET_API_ERRORS.NOT_ENS_OWNER));
      }
    }

    // ticket 生成
    let ticket;
    if (ens) {
      ticket = await createTicket(account.id, {
        nonce,
        account: account.id,
        eventId: event.id,
        invalidated: false,
        ens: ens as string,
        signature,
        event: {
          host: event.host,
          title: event.title,
          description: event.description,
          cover: event.cover,
          startAt: event.startAt,
          endAt: event.endAt,
        },
      } as ENSTicket);
    } else {
      ticket = await createTicket(account.id, {
        nonce,
        account: account.id,
        eventId: event.id,
        invalidated: false,
        nft,
        signature,
        event: {
          host: event.host,
          title: event.title,
          description: event.description,
          cover: event.cover,
          startAt: event.startAt,
          endAt: event.endAt,
        },
      } as NFTTicket);
    }

    // ticketing log 生成
    await createTicketingLog(event.id, {
      account: account.id,
      ens: (ticket as ENSTicket)?.ens,
      nft: (ticket as NFTTicket)?.nft,
      ticketId: ticket.id,
    });

    return res.json(ticket);
  } catch (e) {
    return next(
      unknownException(TICKET_API_ERRORS.TICKET_UNKNOWN_ERROR, e as Error)
    );
  }
};

export const verify: express.RequestHandler = async (req, res, next) => {
  const { eventId, proof } = req.body;

  console.log(proof);

  const manager = req.context.account;

  try {
    const event = await getEvent(eventId);
    // check if the event exists
    if (!event) {
      return next(badRequestException(TICKET_API_ERRORS.EVENT_NOT_FOUND));
    }

    // check if the account can manage the events
    const ensName = await mainnetProvider.lookupAddress(manager.id);
    if (
      event.host.addressOrEns !== ensName &&
      event.host.addressOrEns !== manager.id &&
      !event.managers.some((r) => r.address === manager.id)
    ) {
      return next(badRequestException(TICKET_API_ERRORS.UNAUTHORIZED_ACCOUNT));
    }

    // check if the event already ended
    if (DateTime.fromJSDate(event.endAt as Date) < DateTime.now()) {
      return next(badRequestException(TICKET_API_ERRORS.EVENT_INVALID_TERM));
    }

    const provider =
      event.verificationNetworkOption === "scroll"
        ? getProvider("534354")
        : getProvider("137");

    const contractAddress = getContractAddress(event.verificationNetworkOption);

    const contract = ZmorpheusFactory.connect(contractAddress, provider);

    try {
      await contract.verifyMembership(
        eventId,
        proof.signal,
        proof.nullifierHash,
        proof.externalNullifier,
        proof.proof
      );
    } catch (e) {
      console.log(e);
      return next(
        unknownException(TICKET_API_ERRORS.ZKP_VERIFICATION_ERROR, e as Error)
      );
    }

    return res.json({ message: "ok" });
  } catch (e) {
    return next(
      unknownException(TICKET_API_ERRORS.TICKET_UNKNOWN_ERROR, e as Error)
    );
  }
};
