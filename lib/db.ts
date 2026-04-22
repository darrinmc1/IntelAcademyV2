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
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `
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
  
  // Build dynamic update — using individual queries for safety
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
    createdAt: user.created_at,
  }
}
