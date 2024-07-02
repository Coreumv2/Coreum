import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ApplyReward } from "../generated/schema"
import { ApplyReward as ApplyRewardEvent } from "../generated/coreumv2/coreumv2"
import { handleApplyReward } from "../src/coreumv-2"
import { createApplyRewardEvent } from "./coreumv-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    const account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    const reward = BigInt.fromI32(234)
    const newApplyRewardEvent = createApplyRewardEvent(account, reward)
    handleApplyReward(newApplyRewardEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApplyReward created and stored", () => {
    assert.entityCount("ApplyReward", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApplyReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ApplyReward",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reward",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
