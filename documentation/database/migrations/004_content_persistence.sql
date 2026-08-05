-- Migration 004: Persist approved content durably
-- When a reviewer approves a submission, the content is written here.
-- The content-manager reads from both in-memory (drafts) and this table (published).

CREATE TABLE IF NOT EXISTS content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,              -- topics, learning-paths, glossary, lessons
  content_id TEXT NOT NULL,        -- slug/id within the type
  title TEXT,
  content TEXT NOT NULL,           -- the markdown
  published_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(type, content_id)
);

CREATE INDEX IF NOT EXISTS idx_content_type ON content(type);
CREATE INDEX IF NOT EXISTS idx_content_published_at ON content(published_at DESC);
