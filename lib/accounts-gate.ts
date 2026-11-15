/**
 * Free-account gate.
 *
 * Stays off unless both of these are true:
 * - POSTGRES_URL (or DATABASE_URL) is set
 * - ACCOUNTS_GATE=1
 *
 * Signup and sign-in still work when the database is set and the gate is off.
 * That keeps a merge from locking the public catalog before Darrin turns the gate on.
 */
export function accountsDatabaseConfigured(): boolean {
  return Boolean(
    process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.DATABASE_URL,
  )
}

export function isAccountsGateEnabled(): boolean {
  if (!accountsDatabaseConfigured()) return false
  return process.env.ACCOUNTS_GATE === "1"
}
