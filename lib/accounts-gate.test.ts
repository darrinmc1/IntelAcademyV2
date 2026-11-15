import { afterEach, describe, expect, it } from "vitest"
import { isAccountsGateEnabled } from "@/lib/accounts-gate"

const keys = ["ACCOUNTS_GATE", "POSTGRES_URL", "POSTGRES_PRISMA_URL", "POSTGRES_URL_NON_POOLING", "DATABASE_URL"] as const
const saved: Record<string, string | undefined> = {}

function remember() {
  for (const key of keys) saved[key] = process.env[key]
}

function restore() {
  for (const key of keys) {
    if (saved[key] === undefined) delete process.env[key]
    else process.env[key] = saved[key]
  }
}

describe("accounts gate", () => {
  afterEach(restore)

  it("stays off until the database exists and ACCOUNTS_GATE=1", () => {
    remember()
    for (const key of keys) delete process.env[key]
    expect(isAccountsGateEnabled()).toBe(false)
    process.env.POSTGRES_URL = "postgres://example"
    expect(isAccountsGateEnabled()).toBe(false)
    process.env.ACCOUNTS_GATE = "1"
    expect(isAccountsGateEnabled()).toBe(true)
    process.env.ACCOUNTS_GATE = "0"
    expect(isAccountsGateEnabled()).toBe(false)
  })
})
