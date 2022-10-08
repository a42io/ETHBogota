/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ProxyRegistry,
  ProxyRegistryInterface,
} from "../../../contracts/MockERC721.sol/ProxyRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxies",
    outputs: [
      {
        internalType: "contract OwnableDelegateProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061019e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c455279114610030575b600080fd5b61004a600480360381019061004591906100a8565b610060565b60405161005791906100e0565b60405180910390f35b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506100a281610151565b92915050565b6000602082840312156100ba57600080fd5b60006100c884828501610093565b91505092915050565b6100da8161012d565b82525050565b60006020820190506100f560008301846100d1565b92915050565b60006101068261010d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101388261013f565b9050919050565b600061014a8261010d565b9050919050565b61015a816100fb565b811461016557600080fd5b5056fea26469706673582212203ec03bf85a9abc48f8b2eb4d282caf5f6ef680554f2a39509700c67b11ba231664736f6c63430008040033";

type ProxyRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyRegistry__factory extends ContractFactory {
  constructor(...args: ProxyRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxyRegistry> {
    return super.deploy(overrides || {}) as Promise<ProxyRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxyRegistry {
    return super.attach(address) as ProxyRegistry;
  }
  override connect(signer: Signer): ProxyRegistry__factory {
    return super.connect(signer) as ProxyRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyRegistryInterface {
    return new utils.Interface(_abi) as ProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as ProxyRegistry;
  }
}
