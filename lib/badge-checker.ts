import { badges, type Badge } from '@/data/badges'
import type { UserProfile } from '@/lib/user-store'

/**
 * Check all badge conditions against the user's profile and return
 * an array of badge IDs they should have earned but haven't yet.
 */
export function checkForNewBadges(profile: UserProfile): string[] {
  const earned = new Set(profile.badges)
  const newlyEarned: string[] = []

  const check = (id: string, condition: boolean) => {
    if (condition && !earned.has(id)) {
      newlyEarned.push(id)
    }
  }

  // General
  check('first-contact', profile.lessonsCompleted.length >= 1)
  
  const now = new Date()
  const hour = now.getHours()
  const lastCompletedTime = new Date(profile.lastVisitDate)
  // Night owl: just uses current time for simplicity
  if (profile.lessonsCompleted.length >= 1 && (hour >= 22 || hour < 4)) {
    check('night-owl', true)
  }

  // Streak
  check('streak-3', profile.streakDays >= 3 || profile.bestStreak >= 3)
  check('streak-7', profile.streakDays >= 7 || profile.bestStreak >= 7)
  check('streak-30', profile.streakDays >= 30 || profile.bestStreak >= 30)

  // Completion
  check('lessons-5', profile.lessonsCompleted.length >= 5)
  check('lessons-10', profile.lessonsCompleted.length >= 10)
  check('lessons-25', profile.lessonsCompleted.length >= 25)
  check('lessons-50', profile.lessonsCompleted.length >= 50)

  return newlyEarned
}

/**
 * Get the full Badge object for every badge the user has earned
 */
export function getEarnedBadges(profile: UserProfile): Badge[] {
  return badges.filter((b) => profile.badges.includes(b.id))
}

/**
 * Get the full Badge object for every badge the user has NOT earned yet
 */
export function getUnearnedBadges(profile: UserProfile): Badge[] {
  return badges.filter((b) => !profile.badges.includes(b.id))
}

/**
 * Get tier styling info (colors, glow) for rendering
 */
export function getTierStyle(tier: string) {
  switch (tier) {
    case 'bronze':
      return {
        color: 'text-amber-600',
        bg: 'bg-amber-600/10',
        border: 'border-amber-600/30',
        glow: 'shadow-[0_0_20px_rgba(217,119,6,0.3)]',
      }
    case 'silver':
      return {
        color: 'text-slate-300',
        bg: 'bg-slate-400/10',
        border: 'border-slate-400/30',
        glow: 'shadow-[0_0_20px_rgba(148,163,184,0.3)]',
      }
    case 'gold':
      return {
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        glow: 'shadow-[0_0_20px_rgba(234,179,8,0.4)]',
      }
    case 'platinum':
      return {
        color: 'text-cyan-300',
        bg: 'bg-cyan-400/10',
        border: 'border-cyan-400/40',
        glow: 'shadow-[0_0_30px_rgba(34,211,238,0.5)]',
      }
    default:
      return {
        color: 'text-slate-400',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/30',
        glow: '',
      }
  }
}
