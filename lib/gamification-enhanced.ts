/**
 * Enhanced Gamification System for Intel Academy
 * Extends your existing localStorage badge system with database sync
 * Compatible with your existing user-store.ts and badge-checker.ts
 */

import { sql } from '@vercel/postgres'
import type { UserProfile } from './user-store'

/**
 * Sync user profile from localStorage to database
 * Call this after user completes a lesson or earns a badge
 */
export async function syncToDatabase(profile: UserProfile): Promise<void> {
  if (typeof window === 'undefined') return
  
  try {
    // Upsert user profile
    await sql`
      INSERT INTO user_profiles (
        id, codename, total_xp, current_rank, 
        streak_days, best_streak, access_tier
      )
      VALUES (
        ${profile.id}, 
        ${profile.codename}, 
        ${profile.xp},
        'Trainee',
        ${profile.streakDays}, 
        ${profile.bestStreak},
        ${profile.accessTier}
      )
      ON CONFLICT (id) 
      DO UPDATE SET
        total_xp = EXCLUDED.total_xp,
        streak_days = EXCLUDED.streak_days,
        best_streak = EXCLUDED.best_streak,
        access_tier = EXCLUDED.access_tier,
        updated_at = NOW()
    `
  } catch (error) {
    console.error('Failed to sync to database:', error)
  }
}

/**
 * Get leaderboard from database
 */
export async function getLeaderboard(limit: number = 10) {
  try {
    const result = await sql`
      SELECT 
        codename,
        total_xp,
        current_rank,
        streak_days,
        ROW_NUMBER() OVER (ORDER BY total_xp DESC) as rank_position
      FROM user_profiles
      WHERE access_tier IN ('registered', 'premium', 'subscriber')
      ORDER BY total_xp DESC
      LIMIT ${limit}
    `
    return result.rows
  } catch (error) {
    console.error('Failed to get leaderboard:', error)
    return []
  }
}

/**
 * Get user's rank position
 */
export async function getUserRank(userId: string) {
  try {
    const result = await sql`
      WITH ranked_users AS (
        SELECT 
          id,
          codename,
          total_xp,
          current_rank,
          streak_days,
          ROW_NUMBER() OVER (ORDER BY total_xp DESC) as rank_position
        FROM user_profiles
        WHERE access_tier IN ('registered', 'premium', 'subscriber')
      )
      SELECT * FROM ranked_users WHERE id = ${userId}
    `
    return result.rows[0] || null
  } catch (error) {
    console.error('Failed to get user rank:', error)
    return null
  }
}
