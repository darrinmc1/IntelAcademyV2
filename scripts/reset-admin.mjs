// scripts/reset-admin.mjs
// One-off: make darrinmc1@yahoo.com the ONLY admin, and DELETE every other
// admin account. Destructive and irreversible for the deleted rows.
//
// Run from the project root:
//   node scripts/reset-admin.mjs
//
// Requires POSTGRES_URL (auto-loaded from .env.local / .env below) and the
// bcryptjs dependency (already used by the app).

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import bcrypt from "bcryptjs"

const EMAIL = "darrinmc1@yahoo.com"
const PASSWORD = "AdminPassword69"

// --- Load DB connection from local env files if not already set -------------
const ENV_FILES = [
  ".env.local",
  ".env.development.local",
  ".env.development",
  ".env",
]
// @vercel/postgres wants POSTGRES_URL; accept common aliases.
const URL_ALIASES = [
  "POSTGRES_URL",
  "POSTGRES_PRISMA_URL",
  "POSTGRES_URL_NON_POOLING",
  "DATABASE_URL",
  "POSTGRES_URL_NO_SSL",
]

const foundFiles = []
function loadEnv() {
  for (const file of ENV_FILES) {
    const p = path.join(process.cwd(), file)
    if (!fs.existsSync(p)) continue
    foundFiles.push(file)
    for (const line of fs.readFileSync(p, "utf8").split("\n")) {
      const m = line.match(/^\s*(?:export\s+)?([\w.]+)\s*=\s*(.*)\s*$/)
      if (!m) continue
      const key = m[1]
      const val = m[2].replace(/^["']|["']$/g, "")
      if (!process.env[key]) process.env[key] = val
    }
  }
  // Alias the first available connection var to POSTGRES_URL.
  if (!process.env.POSTGRES_URL) {
    const alias = URL_ALIASES.find((k) => process.env[k])
    if (alias) process.env.POSTGRES_URL = process.env[alias]
  }
}
loadEnv()

if (!process.env.POSTGRES_URL) {
  const postgresKeys = Object.keys(process.env).filter((k) =>
    /POSTGRES|DATABASE|NEON|SUPABASE/i.test(k)
  )
  console.error("No Postgres connection string found.")
  console.error("Env files detected: " + (foundFiles.join(", ") || "none in project root"))
  console.error(
    "DB-related env keys present: " +
      (postgresKeys.length ? postgresKeys.join(", ") : "none")
  )
  console.error(
    "Fix: ensure one of [" +
      URL_ALIASES.join(", ") +
      "] is defined in .env.local, or run:\n" +
      '  POSTGRES_URL="..." node scripts/reset-admin.mjs'
  )
  process.exit(1)
}

const { sql } = await import("@vercel/postgres")

async function main() {
  // Ensure the role column exists (safe if already run).
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user'`

  const passwordHash = await bcrypt.hash(PASSWORD, 12)

  // 1) Upsert the sole admin FIRST, so it survives the delete step.
  const existing = await sql`SELECT id FROM users WHERE email = ${EMAIL}`
  if (existing.rows[0]) {
    await sql`
      UPDATE users
      SET password_hash = ${passwordHash}, role = 'admin', updated_at = NOW()
      WHERE email = ${EMAIL}
    `
    console.log(`Updated existing account -> admin: ${EMAIL}`)
  } else {
    const id = crypto.randomUUID()
    await sql`
      INSERT INTO users (id, email, password_hash, codename, role)
      VALUES (${id}, ${EMAIL}, ${passwordHash}, 'Administrator', 'admin')
    `
    console.log(`Created new admin account: ${EMAIL}`)
  }

  // 2) Delete every OTHER admin account.
  const deleted = await sql`
    DELETE FROM users
    WHERE role = 'admin' AND email <> ${EMAIL}
    RETURNING email
  `
  console.log(
    `Deleted ${deleted.rowCount} other admin account(s): ` +
      JSON.stringify(deleted.rows.map((r) => r.email))
  )

  // 3) Report final state.
  const admins = await sql`SELECT email, codename, role FROM users WHERE role = 'admin'`
  console.log("Remaining admins:", admins.rows)
  console.log("Done. Log in at /login with the email above.")
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("reset-admin failed:", err)
    process.exit(1)
  })
