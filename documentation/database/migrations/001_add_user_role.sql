-- Migration 001: Add RBAC role to users table
-- Safe to run multiple times (idempotent).
-- NOTE: auth runs on the `users` table (lib/db.ts), NOT `user_profiles`.

ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Bootstrap the first admin. Replace the email with the real owner account,
-- then run this line once. Without this, NOBODY can reach /admin after deploy.
-- UPDATE users SET role = 'admin' WHERE email = 'darrinmc1@yahoo.com';
