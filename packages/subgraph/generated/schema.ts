// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PseudonymParty extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PseudonymParty entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PseudonymParty must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PseudonymParty", id.toString(), this);
    }
  }

  static load(id: string): PseudonymParty | null {
    return changetype<PseudonymParty | null>(store.get("PseudonymParty", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get eventId(): BigInt {
    let value = this.get("eventId");
    return value!.toBigInt();
  }

  set eventId(value: BigInt) {
    this.set("eventId", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value!.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get hostAddress(): Bytes {
    let value = this.get("hostAddress");
    return value!.toBytes();
  }

  set hostAddress(value: Bytes) {
    this.set("hostAddress", Value.fromBytes(value));
  }

  get depth(): i32 {
    let value = this.get("depth");
    return value!.toI32();
  }

  set depth(value: i32) {
    this.set("depth", Value.fromI32(value));
  }

  get members(): Array<BigInt> {
    let value = this.get("members");
    return value!.toBigIntArray();
  }

  set members(value: Array<BigInt>) {
    this.set("members", Value.fromBigIntArray(value));
  }

  get currentRoot(): BigInt | null {
    let value = this.get("currentRoot");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set currentRoot(value: BigInt | null) {
    if (!value) {
      this.unset("currentRoot");
    } else {
      this.set("currentRoot", Value.fromBigInt(<BigInt>value));
    }
  }
}
