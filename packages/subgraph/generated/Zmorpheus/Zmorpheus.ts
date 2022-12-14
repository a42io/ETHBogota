// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EventCreated extends ethereum.Event {
  get params(): EventCreated__Params {
    return new EventCreated__Params(this);
  }
}

export class EventCreated__Params {
  _event: EventCreated;

  constructor(event: EventCreated) {
    this._event = event;
  }

  get eventId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get depth(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get zeroValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get hostAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class GroupCreated extends ethereum.Event {
  get params(): GroupCreated__Params {
    return new GroupCreated__Params(this);
  }
}

export class GroupCreated__Params {
  _event: GroupCreated;

  constructor(event: GroupCreated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get merkleTreeDepth(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get zeroValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MemberAdded extends ethereum.Event {
  get params(): MemberAdded__Params {
    return new MemberAdded__Params(this);
  }
}

export class MemberAdded__Params {
  _event: MemberAdded;

  constructor(event: MemberAdded) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MemberRemoved extends ethereum.Event {
  get params(): MemberRemoved__Params {
    return new MemberRemoved__Params(this);
  }
}

export class MemberRemoved__Params {
  _event: MemberRemoved;

  constructor(event: MemberRemoved) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MemberUpdated extends ethereum.Event {
  get params(): MemberUpdated__Params {
    return new MemberUpdated__Params(this);
  }
}

export class MemberUpdated__Params {
  _event: MemberUpdated;

  constructor(event: MemberUpdated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newIdentityCommitment(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NullifierHashAdded extends ethereum.Event {
  get params(): NullifierHashAdded__Params {
    return new NullifierHashAdded__Params(this);
  }
}

export class NullifierHashAdded__Params {
  _event: NullifierHashAdded;

  constructor(event: NullifierHashAdded) {
    this._event = event;
  }

  get nullifierHash(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RelayerAdded extends ethereum.Event {
  get params(): RelayerAdded__Params {
    return new RelayerAdded__Params(this);
  }
}

export class RelayerAdded__Params {
  _event: RelayerAdded;

  constructor(event: RelayerAdded) {
    this._event = event;
  }

  get relayerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RelayerRemoved extends ethereum.Event {
  get params(): RelayerRemoved__Params {
    return new RelayerRemoved__Params(this);
  }
}

export class RelayerRemoved__Params {
  _event: RelayerRemoved;

  constructor(event: RelayerRemoved) {
    this._event = event;
  }

  get relayerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VerifierAdded extends ethereum.Event {
  get params(): VerifierAdded__Params {
    return new VerifierAdded__Params(this);
  }
}

export class VerifierAdded__Params {
  _event: VerifierAdded;

  constructor(event: VerifierAdded) {
    this._event = event;
  }

  get verifier(): VerifierAddedVerifierStruct {
    return changetype<VerifierAddedVerifierStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class VerifierAddedVerifierStruct extends ethereum.Tuple {
  get contractAddress(): Address {
    return this[0].toAddress();
  }

  get merkleTreeDepth(): i32 {
    return this[1].toI32();
  }
}

export class VerifierRemoved extends ethereum.Event {
  get params(): VerifierRemoved__Params {
    return new VerifierRemoved__Params(this);
  }
}

export class VerifierRemoved__Params {
  _event: VerifierRemoved;

  constructor(event: VerifierRemoved) {
    this._event = event;
  }

  get verifier(): VerifierRemovedVerifierStruct {
    return changetype<VerifierRemovedVerifierStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class VerifierRemovedVerifierStruct extends ethereum.Tuple {
  get contractAddress(): Address {
    return this[0].toAddress();
  }

  get merkleTreeDepth(): i32 {
    return this[1].toI32();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Zmorpheus__eventsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;

  constructor(value0: Address, value1: Address, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getHostAddress(): Address {
    return this.value0;
  }

  getContractAddress(): Address {
    return this.value1;
  }

  getCreatedAt(): BigInt {
    return this.value2;
  }
}

export class Zmorpheus extends ethereum.SmartContract {
  static bind(address: Address): Zmorpheus {
    return new Zmorpheus("Zmorpheus", address);
  }

  events(param0: BigInt): Zmorpheus__eventsResult {
    let result = super.call(
      "events",
      "events(uint256):(address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Zmorpheus__eventsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt()
    );
  }

  try_events(param0: BigInt): ethereum.CallResult<Zmorpheus__eventsResult> {
    let result = super.tryCall(
      "events",
      "events(uint256):(address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Zmorpheus__eventsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt()
      )
    );
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMerkleTreeDepth(groupId: BigInt): BigInt {
    let result = super.call(
      "getMerkleTreeDepth",
      "getMerkleTreeDepth(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getMerkleTreeDepth(groupId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMerkleTreeDepth",
      "getMerkleTreeDepth(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMerkleTreeRoot(groupId: BigInt): BigInt {
    let result = super.call(
      "getMerkleTreeRoot",
      "getMerkleTreeRoot(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getMerkleTreeRoot(groupId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMerkleTreeRoot",
      "getMerkleTreeRoot(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNumberOfMerkleTreeLeaves(groupId: BigInt): BigInt {
    let result = super.call(
      "getNumberOfMerkleTreeLeaves",
      "getNumberOfMerkleTreeLeaves(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getNumberOfMerkleTreeLeaves(
    groupId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfMerkleTreeLeaves",
      "getNumberOfMerkleTreeLeaves(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  relayers(param0: Address): boolean {
    let result = super.call("relayers", "relayers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_relayers(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("relayers", "relayers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  verifiers(param0: BigInt): Address {
    let result = super.call("verifiers", "verifiers(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_verifiers(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("verifiers", "verifiers(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyMembership(
    _eventId: BigInt,
    _signal: Bytes,
    _nullifierHash: BigInt,
    _externalNullifier: BigInt,
    _proof: Array<BigInt>
  ): boolean {
    let result = super.call(
      "verifyMembership",
      "verifyMembership(uint256,bytes32,uint256,uint256,uint256[8]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_eventId),
        ethereum.Value.fromFixedBytes(_signal),
        ethereum.Value.fromUnsignedBigInt(_nullifierHash),
        ethereum.Value.fromUnsignedBigInt(_externalNullifier),
        ethereum.Value.fromUnsignedBigIntArray(_proof)
      ]
    );

    return result[0].toBoolean();
  }

  try_verifyMembership(
    _eventId: BigInt,
    _signal: Bytes,
    _nullifierHash: BigInt,
    _externalNullifier: BigInt,
    _proof: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyMembership",
      "verifyMembership(uint256,bytes32,uint256,uint256,uint256[8]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_eventId),
        ethereum.Value.fromFixedBytes(_signal),
        ethereum.Value.fromUnsignedBigInt(_nullifierHash),
        ethereum.Value.fromUnsignedBigInt(_externalNullifier),
        ethereum.Value.fromUnsignedBigIntArray(_proof)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _verifiers(): Array<ConstructorCall_verifiersStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      ConstructorCall_verifiersStruct
    >();
  }

  get _relayers(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _fee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall_verifiersStruct extends ethereum.Tuple {
  get contractAddress(): Address {
    return this[0].toAddress();
  }

  get merkleTreeDepth(): i32 {
    return this[1].toI32();
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddMemberCall extends ethereum.Call {
  get inputs(): AddMemberCall__Inputs {
    return new AddMemberCall__Inputs(this);
  }

  get outputs(): AddMemberCall__Outputs {
    return new AddMemberCall__Outputs(this);
  }
}

export class AddMemberCall__Inputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }

  get _eventId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _identityCommitment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddMemberCall__Outputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }
}

export class AddRelayerCall extends ethereum.Call {
  get inputs(): AddRelayerCall__Inputs {
    return new AddRelayerCall__Inputs(this);
  }

  get outputs(): AddRelayerCall__Outputs {
    return new AddRelayerCall__Outputs(this);
  }
}

export class AddRelayerCall__Inputs {
  _call: AddRelayerCall;

  constructor(call: AddRelayerCall) {
    this._call = call;
  }

  get _relayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddRelayerCall__Outputs {
  _call: AddRelayerCall;

  constructor(call: AddRelayerCall) {
    this._call = call;
  }
}

export class AddVerifierCall extends ethereum.Call {
  get inputs(): AddVerifierCall__Inputs {
    return new AddVerifierCall__Inputs(this);
  }

  get outputs(): AddVerifierCall__Outputs {
    return new AddVerifierCall__Outputs(this);
  }
}

export class AddVerifierCall__Inputs {
  _call: AddVerifierCall;

  constructor(call: AddVerifierCall) {
    this._call = call;
  }

  get _verifier(): AddVerifierCall_verifierStruct {
    return changetype<AddVerifierCall_verifierStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class AddVerifierCall__Outputs {
  _call: AddVerifierCall;

  constructor(call: AddVerifierCall) {
    this._call = call;
  }
}

export class AddVerifierCall_verifierStruct extends ethereum.Tuple {
  get contractAddress(): Address {
    return this[0].toAddress();
  }

  get merkleTreeDepth(): i32 {
    return this[1].toI32();
  }
}

export class CreateEventCall extends ethereum.Call {
  get inputs(): CreateEventCall__Inputs {
    return new CreateEventCall__Inputs(this);
  }

  get outputs(): CreateEventCall__Outputs {
    return new CreateEventCall__Outputs(this);
  }
}

export class CreateEventCall__Inputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }

  get _eventId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _depth(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _zeroValue(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _contractAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateEventCall__Outputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }
}

export class RemoveMemberCall extends ethereum.Call {
  get inputs(): RemoveMemberCall__Inputs {
    return new RemoveMemberCall__Inputs(this);
  }

  get outputs(): RemoveMemberCall__Outputs {
    return new RemoveMemberCall__Outputs(this);
  }
}

export class RemoveMemberCall__Inputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }

  get _eventId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _identityCommitment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _proofSiblings(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _proofPathIndices(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }
}

export class RemoveMemberCall__Outputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }
}

export class RemoveRelayerCall extends ethereum.Call {
  get inputs(): RemoveRelayerCall__Inputs {
    return new RemoveRelayerCall__Inputs(this);
  }

  get outputs(): RemoveRelayerCall__Outputs {
    return new RemoveRelayerCall__Outputs(this);
  }
}

export class RemoveRelayerCall__Inputs {
  _call: RemoveRelayerCall;

  constructor(call: RemoveRelayerCall) {
    this._call = call;
  }

  get _relayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveRelayerCall__Outputs {
  _call: RemoveRelayerCall;

  constructor(call: RemoveRelayerCall) {
    this._call = call;
  }
}

export class RemoveVerifierCall extends ethereum.Call {
  get inputs(): RemoveVerifierCall__Inputs {
    return new RemoveVerifierCall__Inputs(this);
  }

  get outputs(): RemoveVerifierCall__Outputs {
    return new RemoveVerifierCall__Outputs(this);
  }
}

export class RemoveVerifierCall__Inputs {
  _call: RemoveVerifierCall;

  constructor(call: RemoveVerifierCall) {
    this._call = call;
  }

  get _verifier(): RemoveVerifierCall_verifierStruct {
    return changetype<RemoveVerifierCall_verifierStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class RemoveVerifierCall__Outputs {
  _call: RemoveVerifierCall;

  constructor(call: RemoveVerifierCall) {
    this._call = call;
  }
}

export class RemoveVerifierCall_verifierStruct extends ethereum.Tuple {
  get contractAddress(): Address {
    return this[0].toAddress();
  }

  get merkleTreeDepth(): i32 {
    return this[1].toI32();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VerifyMembershipOnlyOnceCall extends ethereum.Call {
  get inputs(): VerifyMembershipOnlyOnceCall__Inputs {
    return new VerifyMembershipOnlyOnceCall__Inputs(this);
  }

  get outputs(): VerifyMembershipOnlyOnceCall__Outputs {
    return new VerifyMembershipOnlyOnceCall__Outputs(this);
  }
}

export class VerifyMembershipOnlyOnceCall__Inputs {
  _call: VerifyMembershipOnlyOnceCall;

  constructor(call: VerifyMembershipOnlyOnceCall) {
    this._call = call;
  }

  get _eventId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _signal(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _nullifierHash(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _externalNullifier(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _proof(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }
}

export class VerifyMembershipOnlyOnceCall__Outputs {
  _call: VerifyMembershipOnlyOnceCall;

  constructor(call: VerifyMembershipOnlyOnceCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
