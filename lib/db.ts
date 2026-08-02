import { sql } from '@vercel/postgres'

/**
 * Initialize the database tables (run once)
 */
export async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      codename TEXT NOT NULL,
      xp INTEGER DEFAULT 0,
      badges TEXT DEFAULT '[]',
      lessons_completed TEXT DEFAULT '[]',
      lessons_viewed TEXT DEFAULT '[]',
      streak_days INTEGER DEFAULT 0,
      best_streak INTEGER DEFAULT 0,
      last_visit_date TEXT,
      access_tier TEXT DEFAULT 'free',
      role TEXT DEFAULT 'user',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `
  // Idempotent migration: add role to pre-existing users tables
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user'`

  // PIN auth, lockout, and PIN-reset migrations.
  // password_hash now stores the bcrypt hash of the 4-digit PIN.
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS failed_attempts INTEGER DEFAULT 0`
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS locked BOOLEAN DEFAULT FALSE`
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token TEXT`
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token_expiry TIMESTAMP`
  // Case-insensitive uniqueness for codenames, since login keys off them.
  // Non-fatal: legacy duplicate codenames shouldn't break auth.
  try {
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS users_codename_lower_idx ON users (LOWER(codename))`
  } catch (err) {
    console.warn('Could not create unique codename index (likely pre-existing duplicates):', err)
  }

  // Content review workflow tables (migration 002)
  await sql`
    CREATE TABLE IF NOT EXISTS content_submissions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      type TEXT NOT NULL,
      content_id TEXT NOT NULL,
      title TEXT,
      content TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'submitted',
      submitted_by TEXT,
      reviewer_id TEXT,
      reviewer_comments TEXT,
      reviewed_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_submissions_status ON content_submissions(status)`
  await sql`CREATE INDEX IF NOT EXISTS idx_submissions_content ON content_submissions(type, content_id)`
  await sql`
    CREATE TABLE IF NOT EXISTS review_audit_log (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      submission_id UUID,
      actor_id TEXT,
      action TEXT NOT NULL,
      comment TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_audit_log_submission ON review_audit_log(submission_id)`

  // Feedback and topic request tracking (migration 003)
  await sql`
    CREATE TABLE IF NOT EXISTS feedback (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      category TEXT NOT NULL,
      rating INTEGER,
      message TEXT NOT NULL,
      page TEXT,
      email TEXT,
      ip_address TEXT,
      status TEXT DEFAULT 'new',
      admin_notes TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      reviewed_at TIMESTAMP
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status)`
  await sql`CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC)`
  
  await sql`
    CREATE TABLE IF NOT EXISTS topic_requests (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      topic_title TEXT NOT NULL,
      category TEXT,
      description TEXT NOT NULL,
      experience_level TEXT,
      email TEXT,
      status TEXT DEFAULT 'new',
      admin_notes TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      reviewed_at TIMESTAMP
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_topic_requests_status ON topic_requests(status)`
  await sql`CREATE INDEX IF NOT EXISTS idx_topic_requests_created_at ON topic_requests(created_at DESC)`

  // Published content (migration 004)
  await sql`
    CREATE TABLE IF NOT EXISTS content (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      type TEXT NOT NULL,
      content_id TEXT NOT NULL,
      title TEXT,
      content TEXT NOT NULL,
      published_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(type, content_id)
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_content_type ON content(type)`
  await sql`CREATE INDEX IF NOT EXISTS idx_content_published_at ON content(published_at DESC)`
}

/**
 * Valid roles for RBAC (keep in sync with lib/rbac.ts)
 */
export type UserRole = 'admin' | 'moderator' | 'editor' | 'viewer' | 'user'

/**
 * Set a user's role by email. Use to bootstrap the first admin.
 */
export async function setUserRole(email: string, role: UserRole) {
  await sql`UPDATE users SET role = ${role}, updated_at = NOW() WHERE email = ${email.toLowerCase()}`
}

/**
 * Get a user's role by ID. Returns 'user' if unset.
 */
export async function getUserRole(id: string): Promise<UserRole> {
  const result = await sql`SELECT role FROM users WHERE id = ${id}`
  return (result.rows[0]?.role as UserRole) || 'user'
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string) {
  const result = await sql`SELECT * FROM users WHERE email = ${email}`
  return result.rows[0] || null
}

/**
 * Get user by ID
 */
export async function getUserById(id: string) {
  const result = await sql`SELECT * FROM users WHERE id = ${id}`
  return result.rows[0] || null
}

/**
 * Get user by codename (case-insensitive). PIN login keys off this.
 */
export async function getUserByCodename(codename: string) {
  const result = await sql`SELECT * FROM users WHERE LOWER(codename) = LOWER(${codename})`
  return result.rows[0] || null
}

/**
 * Get user by an active (non-expired) PIN reset token (SHA-256 hash stored).
 */
export async function getUserByResetToken(tokenHash: string) {
  const result = await sql`
    SELECT * FROM users
    WHERE reset_token = ${tokenHash}
      AND reset_token_expiry IS NOT NULL
      AND reset_token_expiry > NOW()
  `
  return result.rows[0] || null
}

/**
 * Increment the failed-attempt counter and return the new count.
 */
export async function incrementFailedAttempts(id: string): Promise<number> {
  const result = await sql`
    UPDATE users
    SET failed_attempts = failed_attempts + 1, updated_at = NOW()
    WHERE id = ${id}
    RETURNING failed_attempts
  `
  return result.rows[0]?.failed_attempts ?? 0
}

/**
 * Lock an account until the PIN is reset.
 */
export async function lockAccount(id: string) {
  await sql`UPDATE users SET locked = TRUE, updated_at = NOW() WHERE id = ${id}`
}

/**
 * Reset the failed-attempt counter (e.g. after a successful login).
 */
export async function resetFailedAttempts(id: string) {
  await sql`UPDATE users SET failed_attempts = 0, updated_at = NOW() WHERE id = ${id}`
}

/**
 * Store a hashed PIN reset token and its expiry for a user.
 */
export async function setResetToken(id: string, tokenHash: string, expiry: Date) {
  await sql`
    UPDATE users
    SET reset_token = ${tokenHash}, reset_token_expiry = ${expiry.toISOString()}, updated_at = NOW()
    WHERE id = ${id}
  `
}

/**
 * Set a new PIN hash, unlock the account, clear attempts and the reset token.
 */
export async function updatePin(id: string, pinHash: string) {
  await sql`
    UPDATE users
    SET password_hash = ${pinHash},
        locked = FALSE,
        failed_attempts = 0,
        reset_token = NULL,
        reset_token_expiry = NULL,
        updated_at = NOW()
    WHERE id = ${id}
  `
}

/**
 * Create a new user
 */
export async function createUser(data: {
  id: string
  email: string
  passwordHash: string
  codename: string
  xp?: number
  badges?: string[]
  lessonsCompleted?: string[]
  lessonsViewed?: string[]
  streakDays?: number
  bestStreak?: number
  lastVisitDate?: string
}) {
  await sql`
    INSERT INTO users (id, email, password_hash, codename, xp, badges, lessons_completed, lessons_viewed, streak_days, best_streak, last_visit_date)
    VALUES (
      ${data.id},
      ${data.email},
      ${data.passwordHash},
      ${data.codename},
      ${data.xp || 0},
      ${JSON.stringify(data.badges || [])},
      ${JSON.stringify(data.lessonsCompleted || [])},
      ${JSON.stringify(data.lessonsViewed || [])},
      ${data.streakDays || 0},
      ${data.bestStreak || 0},
      ${data.lastVisitDate || new Date().toISOString()}
    )
  `
}

/**
 * Update user profile data (for syncing progress)
 */
export async function updateUserProfile(id: string, data: {
  xp?: number
  badges?: string[]
  lessonsCompleted?: string[]
  lessonsViewed?: string[]
  streakDays?: number
  bestStreak?: number
  lastVisitDate?: string
  codename?: string
}) {
  const fields: string[] = []
  
  // Build dynamic update - using individual queries for safety
  if (data.xp !== undefined) {
    await sql`UPDATE users SET xp = ${data.xp}, updated_at = NOW() WHERE id = ${id}`
  }
  if (data.badges) {
    await sql`UPDATE users SET badges = ${JSON.stringify(data.badges)}, updated_at = NOW() WHERE id = ${id}`
  }
  if (data.lessonsCompleted) {
    await sql`UPDATE users SET lessons_completed = ${JSON.stringify(data.lessonsCompleted)}, updated_at = NOW() WHERE id = ${id}`
  }
  if (data.lessonsViewed) {
    await sql`UPDATE users SET lessons_viewed = ${JSON.stringify(data.lessonsViewed)}, updated_at = NOW() WHERE id = ${id}`
  }
  if (data.streakDays !== undefined) {
    await sql`UPDATE users SET streak_days = ${data.streakDays}, updated_at = NOW() WHERE id = ${id}`
  }
  if (data.bestStreak !== undefined) {
    await sql`UPDATE users SET best_streak = ${data.bestStreak}, updated_at = NOW() WHERE id = ${id}`
  }
  if (data.codename) {
    await sql`UPDATE users SET codename = ${data.codename}, updated_at = NOW() WHERE id = ${id}`
  }
}

/**
 * Get user's full profile for client consumption
 */
export async function getUserProfile(id: string) {
  const user = await getUserById(id)
  if (!user) return null
  
  return {
    id: user.id,
    email: user.email,
    codename: user.codename,
    xp: user.xp,
    badges: JSON.parse(user.badges || '[]'),
    lessonsCompleted: JSON.parse(user.lessons_completed || '[]'),
    lessonsViewed: JSON.parse(user.lessons_viewed || '[]'),
    streakDays: user.streak_days,
    bestStreak: user.best_streak,
    lastVisitDate: user.last_visit_date,
    accessTier: user.access_tier,
    role: user.role || 'user',
    createdAt: user.created_at,
  }
}

// ---------------------------------------------------------------------------
// Content review workflow
// ---------------------------------------------------------------------------

export type SubmissionStatus = 'draft' | 'submitted' | 'approved' | 'rejected'

/**
 * Append an immutable audit entry.
 */
export async function logReviewAudit(
  submissionId: string,
  actorId: string | null,
  action: 'submitted' | 'approved' | 'rejected' | 'published_directly' | 'returned',
  comment: string | null = null
) {
  await sql`
    INSERT INTO review_audit_log (submission_id, actor_id, action, comment)
    VALUES (${submissionId}, ${actorId}, ${action}, ${comment})
  `
}

/**
 * Editor submits proposed content for review. Supersedes any prior open
 * submission for the same item; returns the submission id.
 */
export async function submitForReview(args: {
  type: string
  contentId: string
  title: string
  content: string
  submittedBy: string
}): Promise<string> {
  const open = await sql`
    SELECT id FROM content_submissions
    WHERE type = ${args.type} AND content_id = ${args.contentId} AND status = 'submitted'
    LIMIT 1
  `
  let id: string
  if (open.rows[0]) {
    id = open.rows[0].id
    await sql`
      UPDATE content_submissions
      SET content = ${args.content}, title = ${args.title},
          submitted_by = ${args.submittedBy}, updated_at = NOW()
      WHERE id = ${id}
    `
  } else {
    const inserted = await sql`
      INSERT INTO content_submissions (type, content_id, title, content, status, submitted_by)
      VALUES (${args.type}, ${args.contentId}, ${args.title}, ${args.content}, 'submitted', ${args.submittedBy})
      RETURNING id
    `
    id = inserted.rows[0].id
  }
  await logReviewAudit(id, args.submittedBy, 'submitted', null)
  return id
}

/**
 * List submissions, optionally filtered by status, newest first.
 */
export async function getSubmissions(status?: SubmissionStatus | 'all') {
  if (status && status !== 'all') {
    const r = await sql`
      SELECT s.*, u.codename AS submitter_codename, u.email AS submitter_email
      FROM content_submissions s
      LEFT JOIN users u ON u.id = s.submitted_by
      WHERE s.status = ${status}
      ORDER BY s.updated_at DESC
    `
    return r.rows
  }
  const r = await sql`
    SELECT s.*, u.codename AS submitter_codename, u.email AS submitter_email
    FROM content_submissions s
    LEFT JOIN users u ON u.id = s.submitted_by
    ORDER BY s.updated_at DESC
  `
  return r.rows
}

export async function getPendingReviewCount(): Promise<number> {
  const r = await sql`SELECT COUNT(*)::int AS count FROM content_submissions WHERE status = 'submitted'`
  return r.rows[0]?.count ?? 0
}

export async function getSubmissionById(id: string) {
  const r = await sql`
    SELECT s.*, u.codename AS submitter_codename, u.email AS submitter_email
    FROM content_submissions s
    LEFT JOIN users u ON u.id = s.submitted_by
    WHERE s.id = ${id}
  `
  return r.rows[0] || null
}

export async function getReviewAuditLog(submissionId: string) {
  const r = await sql`
    SELECT a.*, u.codename AS actor_codename
    FROM review_audit_log a
    LEFT JOIN users u ON u.id = a.actor_id
    WHERE a.submission_id = ${submissionId}
    ORDER BY a.created_at ASC
  `
  return r.rows
}

/**
 * Admin publishes directly (no review). Records an approved submission plus a
 * 'published_directly' audit entry so every content change has a trail.
 */
export async function recordDirectPublish(args: {
  type: string
  contentId: string
  title: string
  content: string
  adminId: string
}): Promise<string> {
  const inserted = await sql`
    INSERT INTO content_submissions
      (type, content_id, title, content, status, submitted_by, reviewer_id, reviewed_at)
    VALUES
      (${args.type}, ${args.contentId}, ${args.title}, ${args.content}, 'approved',
       ${args.adminId}, ${args.adminId}, NOW())
    RETURNING id
  `
  const id = inserted.rows[0].id
  await logReviewAudit(id, args.adminId, 'published_directly', null)
  return id
}

export async function setSubmissionStatus(
  id: string,
  status: 'approved' | 'rejected',
  reviewerId: string,
  comments: string | null
) {
  await sql`
    UPDATE content_submissions
    SET status = ${status}, reviewer_id = ${reviewerId},
        reviewer_comments = ${comments}, reviewed_at = NOW(), updated_at = NOW()
    WHERE id = ${id}
  `
  await logReviewAudit(id, reviewerId, status, comments)
}

// ---------------------------------------------------------------------------
// Feedback and topic requests
// ---------------------------------------------------------------------------

export async function submitFeedback(args: {
  category: string
  rating?: number
  message: string
  page?: string
  email?: string
  ip?: string
}): Promise<string> {
  const r = await sql`
    INSERT INTO feedback (category, rating, message, page, email, ip_address)
    VALUES (${args.category}, ${args.rating ?? null}, ${args.message}, 
            ${args.page ?? null}, ${args.email ?? null}, ${args.ip ?? null})
    RETURNING id
  `
  return r.rows[0].id
}

export async function submitTopicRequest(args: {
  topic_title: string
  category?: string
  description: string
  experience_level?: string
  email?: string
}): Promise<string> {
  const r = await sql`
    INSERT INTO topic_requests (topic_title, category, description, experience_level, email)
    VALUES (${args.topic_title}, ${args.category ?? null}, ${args.description},
            ${args.experience_level ?? null}, ${args.email ?? null})
    RETURNING id
  `
  return r.rows[0].id
}

export async function getFeedback(status?: string | 'all') {
  if (status && status !== 'all') {
    const r = await sql`
      SELECT * FROM feedback WHERE status = ${status}
      ORDER BY created_at DESC
    `
    return r.rows
  }
  const r = await sql`SELECT * FROM feedback ORDER BY created_at DESC`
  return r.rows
}

export async function getTopicRequests(status?: string | 'all') {
  if (status && status !== 'all') {
    const r = await sql`
      SELECT * FROM topic_requests WHERE status = ${status}
      ORDER BY created_at DESC
    `
    return r.rows
  }
  const r = await sql`SELECT * FROM topic_requests ORDER BY created_at DESC`
  return r.rows
}

export async function getFeedbackById(id: string) {
  const r = await sql`SELECT * FROM feedback WHERE id = ${id}`
  return r.rows[0] ?? null
}

export async function getTopicRequestById(id: string) {
  const r = await sql`SELECT * FROM topic_requests WHERE id = ${id}`
  return r.rows[0] ?? null
}

export async function updateFeedbackStatus(
  id: string,
  status: 'new' | 'reviewed' | 'responded' | 'archived',
  adminNotes?: string
) {
  await sql`
    UPDATE feedback
    SET status = ${status}, admin_notes = ${adminNotes ?? null}, reviewed_at = NOW()
    WHERE id = ${id}
  `
}

export async function updateTopicRequestStatus(
  id: string,
  status: 'new' | 'reviewed' | 'planned' | 'completed' | 'archived',
  adminNotes?: string
) {
  await sql`
    UPDATE topic_requests
    SET status = ${status}, admin_notes = ${adminNotes ?? null}, reviewed_at = NOW()
    WHERE id = ${id}
  `
}

export async function getPendingFeedbackCount(): Promise<number> {
  const r = await sql`SELECT COUNT(*)::int AS count FROM feedback WHERE status = 'new'`
  return r.rows[0]?.count ?? 0
}

export async function getPendingTopicRequestCount(): Promise<number> {
  const r = await sql`SELECT COUNT(*)::int AS count FROM topic_requests WHERE status IN ('new', 'reviewed')`
  return r.rows[0]?.count ?? 0
}

// ---------------------------------------------------------------------------
// Published content (persists approved submissions)
// ---------------------------------------------------------------------------

/**
 * Publish (upsert) approved content to the durable content table.
 * Called when a reviewer approves a submission.
 */
export async function publishContent(args: {
  type: string
  contentId: string
  title: string
  content: string
}): Promise<void> {
  await sql`
    INSERT INTO content (type, content_id, title, content)
    VALUES (${args.type}, ${args.contentId}, ${args.title}, ${args.content})
    ON CONFLICT (type, content_id)
    DO UPDATE SET content = ${args.content}, title = ${args.title}, updated_at = NOW()
  `
}

/**
 * Fetch published content from the database by type and content ID.
 */
export async function getPublishedContent(type: string, contentId: string) {
  const r = await sql`
    SELECT * FROM content WHERE type = ${type} AND content_id = ${contentId}
  `
  return r.rows[0] ?? null
}

/**
 * List all published content of a given type, newest first.
 */
export async function getPublishedContentList(type: string) {
  const r = await sql`
    SELECT * FROM content WHERE type = ${type}
    ORDER BY published_at DESC
  `
  return r.rows
}

// ---------------------------------------------------------------------------
// Admin dashboard
// ---------------------------------------------------------------------------

export type AdminDashboardStats = {
  users: number
  publishedContent: number
  pendingReviews: number
  openFeedback: number
  openTopicRequests: number
}

/**
 * Aggregate counts for the admin dashboard, in a single round of queries.
 */
export async function getAdminDashboardStats(): Promise<AdminDashboardStats> {
  const [users, content, reviews, feedback, topics] = await Promise.all([
    sql`SELECT COUNT(*)::int AS count FROM users`,
    sql`SELECT COUNT(*)::int AS count FROM content`,
    sql`SELECT COUNT(*)::int AS count FROM content_submissions WHERE status = 'submitted'`,
    sql`SELECT COUNT(*)::int AS count FROM feedback WHERE status = 'new'`,
    sql`SELECT COUNT(*)::int AS count FROM topic_requests WHERE status IN ('new', 'reviewed')`,
  ])
  return {
    users: users.rows[0]?.count ?? 0,
    publishedContent: content.rows[0]?.count ?? 0,
    pendingReviews: reviews.rows[0]?.count ?? 0,
    openFeedback: feedback.rows[0]?.count ?? 0,
    openTopicRequests: topics.rows[0]?.count ?? 0,
  }
}

export type ActivityRow = {
  action: string
  comment: string | null
  created_at: string
  actor_codename: string | null
  actor_email: string | null
  submission_title: string | null
  submission_type: string | null
  content_id: string | null
}

/**
 * Most recent entries from the review audit log, joined with the actor and
 * the submission they acted on. Powers the dashboard "Recent Activity" feed.
 */
export async function getRecentActivity(limit = 8): Promise<ActivityRow[]> {
  const r = await sql`
    SELECT a.action, a.comment, a.created_at,
           u.codename AS actor_codename, u.email AS actor_email,
           s.title AS submission_title, s.type AS submission_type, s.content_id
    FROM review_audit_log a
    LEFT JOIN users u ON u.id = a.actor_id
    LEFT JOIN content_submissions s ON s.id = a.submission_id
    ORDER BY a.created_at DESC
    LIMIT ${limit}
  `
  return r.rows as ActivityRow[]
}