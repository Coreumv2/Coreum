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
  reward: bigint
): ApplyReward {
  const applyRewardEvent = changetype<ApplyReward>(newMockEvent())

  applyRewardEvent.parameters = []

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
  value: bigint
): Approval {
  const approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = []

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
  const ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = []

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
  const setCommunityAccountEvent = changetype<SetCommunityAccount>(newMockEvent())

  setCommunityAccountEvent.parameters = []

  setCommunityAccountEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return setCommunityAccountEvent
}

export function createSetDBankEvent(account: Address): SetDBank {
  const setDBankEvent = changetype<SetDBank>(newMockEvent())

  setDBankEvent.parameters = []

  setDBankEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return setDBankEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: bigint
): Transfer {
  const transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = []

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
  const updatePairsEvent = changetype<UpdatePairs>(newMockEvent())

  updatePairsEvent.parameters = []

  updatePairsEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  updatePairsEvent.parameters.push(
    new ethereum.EventParam("enable", ethereum.Value.fromBoolean(enable))
  )

  return updatePairsEvent
}
