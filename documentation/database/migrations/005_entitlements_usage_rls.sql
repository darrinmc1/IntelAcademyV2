-- Entitlements and per-user usage.
-- Keep this file in the repo. The app does not run it.
-- Do not run it against Supabase project radlwbqfzrzmgdldyifi (empire-hq).
-- Run it only in the Postgres database named by POSTGRES_URL (or DATABASE_URL),
-- and only when that database is not the blocked project.
-- The app connects as the database owner, which bypasses row level security.
-- Server routes still check the session. These policies apply to any non-owner role.
-- Do not put SUPABASE_SERVICE_ROLE_KEY or POSTGRES_URL in a NEXT_PUBLIC_ variable.
--
-- Users-table RLS is intentionally NOT enabled here. Enabling it on the owner-used
-- table can block signup if the connection role does not bypass RLS.
-- Usage events are protected below.
--
-- entitlement is free or normal. entitlement_packs is a comma-separated list of
-- cheatsheets, templates, and guides. There is no path-pack or written-library tier.
-- early, pro, and video plans keep lesson access via the normal entitlement.

ALTER TABLE users ADD COLUMN IF NOT EXISTS entitlement TEXT DEFAULT 'free';
ALTER TABLE users ADD COLUMN IF NOT EXISTS entitlement_packs TEXT DEFAULT '';

UPDATE users
SET entitlement = 'normal'
WHERE plan IN ('pro', 'early', 'video')
  AND COALESCE(entitlement, 'free') = 'free';

UPDATE users SET entitlement = 'free' WHERE entitlement IS NULL;
UPDATE users SET entitlement_packs = '' WHERE entitlement_packs IS NULL;

CREATE TABLE IF NOT EXISTS usage_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('lesson_view', 'read_time', 'download')),
  resource TEXT NOT NULL,
  seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_usage_events_user ON usage_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_usage_events_type ON usage_events(event_type, created_at DESC);

ALTER TABLE usage_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS usage_events_select_own ON usage_events;
CREATE POLICY usage_events_select_own ON usage_events
  FOR SELECT USING (user_id = current_setting('app.user_id', true));

DROP POLICY IF EXISTS usage_events_insert_own ON usage_events;
CREATE POLICY usage_events_insert_own ON usage_events
  FOR INSERT WITH CHECK (user_id = current_setting('app.user_id', true));

DROP POLICY IF EXISTS usage_events_admin_all ON usage_events;
CREATE POLICY usage_events_admin_all ON usage_events
  FOR ALL
  USING (current_setting('app.user_role', true) = 'admin')
  WITH CHECK (current_setting('app.user_role', true) = 'admin');
