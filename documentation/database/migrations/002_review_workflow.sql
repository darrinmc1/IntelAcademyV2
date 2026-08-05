-- Migration 002: Content review workflow
-- Safe to run multiple times (idempotent).
-- Depends on 001 (users.role). Content is stored on the submission itself
-- because the live content store is currently in-memory (app/actions/content-manager.ts).

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS content_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL,              -- 'topics', 'learning-paths', 'glossary', 'lesson'
  content_id TEXT NOT NULL,        -- slug/id within the type
  title TEXT,                      -- extracted from content for display
  content TEXT NOT NULL,           -- the proposed markdown (applied on approval)
  status TEXT NOT NULL DEFAULT 'submitted', -- draft, submitted, approved, rejected
  submitted_by TEXT REFERENCES users(id) ON DELETE SET NULL,
  reviewer_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  reviewer_comments TEXT,
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- One open submission per content item; enforced in app logic by upserting the
-- latest submission. Index (not unique) so history of resubmissions is allowed.
CREATE INDEX IF NOT EXISTS idx_submissions_status ON content_submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_reviewer ON content_submissions(reviewer_id);
CREATE INDEX IF NOT EXISTS idx_submissions_content ON content_submissions(type, content_id);

CREATE TABLE IF NOT EXISTS review_audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID REFERENCES content_submissions(id) ON DELETE CASCADE,
  actor_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,           -- submitted, approved, rejected, published_directly, returned
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_submission ON review_audit_log(submission_id);
