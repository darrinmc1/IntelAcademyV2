-- Migration 003: Feedback and topic request tracking
-- Unifies two disparate systems (EmailJS + Supabase) into a single Postgres-backed workflow.

CREATE TABLE IF NOT EXISTS feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,              -- Bug, Suggestion, Content Request, Other
  rating INTEGER,                      -- 1-5 star rating (optional)
  message TEXT NOT NULL,
  page TEXT,                           -- URL/page where feedback came from
  email TEXT,                          -- user's email (optional)
  ip_address TEXT,                     -- for abuse tracking
  status TEXT DEFAULT 'new',           -- new, reviewed, responded, archived
  admin_notes TEXT,                    -- admin's response or notes
  created_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS topic_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_title TEXT NOT NULL,
  category TEXT,                       -- Foundations, OSINT, Analyst's Notebook, etc.
  description TEXT NOT NULL,
  experience_level TEXT,               -- beginner, intermediate, advanced
  email TEXT,                          -- user's email for notification
  status TEXT DEFAULT 'new',           -- new, reviewed, planned, completed, archived
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_topic_requests_status ON topic_requests(status);
CREATE INDEX IF NOT EXISTS idx_topic_requests_created_at ON topic_requests(created_at DESC);
