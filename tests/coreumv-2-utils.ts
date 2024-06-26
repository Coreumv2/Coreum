import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApplyReward,
  Approval,
  OwnershipTransferred,
  SetCommunityAccount,
  SetDBank,
  Transfer,
  UpdatePairs
} from "../generated/coreumv2/coreumv2"

export function createApplyRewardEvent(
  account: Address,
  reward: BigInt
): ApplyReward {
  let applyRewardEvent = changetype<ApplyReward>(newMockEvent())

  applyRewardEvent.parameters = new Array()

  applyRewardEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  applyRewardEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return applyRewardEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetCommunityAccountEvent(
  account: Address
): SetCommunityAccount {
  let setCommunityAccountEvent = changetype<SetCommunityAccount>(newMockEvent())

  setCommunityAccountEvent.parameters = new Array()

  setCommunityAccountEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return setCommunityAccountEvent
}

export function createSetDBankEvent(account: Address): SetDBank {
  let setDBankEvent = changetype<SetDBank>(newMockEvent())

  setDBankEvent.parameters = new Array()

  setDBankEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return setDBankEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUpdatePairsEvent(
  account: Address,
  enable: boolean
): UpdatePairs {
  let updatePairsEvent = changetype<UpdatePairs>(newMockEvent())

  updatePairsEvent.parameters = new Array()

  updatePairsEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  updatePairsEvent.parameters.push(
    new ethereum.EventParam("enable", ethereum.Value.fromBoolean(enable))
  )

  return updatePairsEvent
}
