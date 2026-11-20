/**
 * Free-account gate.
 *
 * Stays off unless a Postgres URL is set in the environment, that URL is not
 * the blocked Supabase project, and ACCOUNTS_GATE=1.
 * Signup that already exists keeps using the same env vars. This module does
 * not embed a project id to connect to, and it does not open a connection.
 */

const DB_ENV_KEYS = [
  "POSTGRES_URL",
  "POSTGRES_PRISMA_URL",
  "POSTGRES_URL_NON_POOLING",
  "DATABASE_URL",
] as const

/** Supabase project ref that must not receive new tables or new account writes. */
export const BLOCKED_SUPABASE_PROJECT = "radlwbqfzrzmgdldyifi"

export function accountsDatabaseConfigured(): boolean {
  return DB_ENV_KEYS.some((key) => Boolean(process.env[key]?.trim()))
}

export function postgresTargetsBlockedProject(): boolean {
  const blob = DB_ENV_KEYS.map((key) => process.env[key] || "").join(" ")
  return blob.includes(BLOCKED_SUPABASE_PROJECT)
}

/**
 * New account tables and new entitlement/usage writes.
 * False when the database env is missing or names the blocked project.
 */
export function newAccountWritesAllowed(): boolean {
  return accountsDatabaseConfigured() && !postgresTargetsBlockedProject()
}

export function isAccountsGateEnabled(): boolean {
  if (!newAccountWritesAllowed()) return false
  return process.env.ACCOUNTS_GATE === "1"
}
