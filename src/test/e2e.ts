import { handlers } from '@/services/mocks/handlers'
import { createNetworkFixture, type NetworkFixture } from '@msw/playwright'
import { test as base, expect } from '@playwright/test'

interface Fixtures {
  msw: NetworkFixture
}

const test = base.extend<Fixtures>({
  // msw: createNetworkFixture({
  //   initialHandlers: handlers,
  // }),
})

export { expect, test }
