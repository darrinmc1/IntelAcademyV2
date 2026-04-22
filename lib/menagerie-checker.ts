import { agentMenagerie, getAnimalTier, type AgentAnimal, type AnimalTier } from '@/data/agent-menagerie'
import type { UserProfile } from '@/lib/user-store'
import { getTopicsForPath } from '@/utils/topic-helpers'

export interface AnimalProgress {
  animal: AgentAnimal
  tier: AnimalTier
  completedCount: number
  totalCount: number
  percentage: number
  nextTierAt: number | null // lessons needed for next tier, null if max
  nextTierName: string | null
}

/**
 * Get all animal progress for a user
 */
export function getAllAnimalProgress(profile: UserProfile): AnimalProgress[] {
  return agentMenagerie.map((animal) => {
    const topics = getTopicsForPath(animal.pathSlug)
    const totalCount = topics.length || animal.tierThresholds.specialist // fallback
    const completedSlugs = topics
      .filter((t) => profile.lessonsCompleted.includes(t.slug))
      .map((t) => t.slug)
    const completedCount = completedSlugs.length
    const tier = getAnimalTier(animal, completedCount)
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

    // Calculate next tier
    let nextTierAt: number | null = null
    let nextTierName: string | null = null
    if (tier === 'locked') {
      nextTierAt = animal.tierThresholds.recruit
      nextTierName = animal.tierLabels.recruit
    } else if (tier === 'recruit') {
      nextTierAt = animal.tierThresholds.operative
      nextTierName = animal.tierLabels.operative
    } else if (tier === 'operative') {
      nextTierAt = animal.tierThresholds.specialist
      nextTierName = animal.tierLabels.specialist
    }

    return {
      animal,
      tier,
      completedCount,
      totalCount,
      percentage,
      nextTierAt,
      nextTierName,
    }
  })
}

/**
 * Get only unlocked animals
 */
export function getUnlockedAnimals(profile: UserProfile): AnimalProgress[] {
  return getAllAnimalProgress(profile).filter((a) => a.tier !== 'locked')
}

/**
 * Get only locked animals
 */
export function getLockedAnimals(profile: UserProfile): AnimalProgress[] {
  return getAllAnimalProgress(profile).filter((a) => a.tier === 'locked')
}

/**
 * Get count of unlocked animals
 */
export function getUnlockedCount(profile: UserProfile): number {
  return getUnlockedAnimals(profile).length
}

/**
 * Get tier display colors
 */
export function getAnimalTierStyle(tier: AnimalTier) {
  switch (tier) {
    case 'recruit':
      return {
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        glow: '',
        label: 'Recruit',
      }
    case 'operative':
      return {
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        border: 'border-cyan-400/30',
        glow: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]',
        label: 'Operative',
      }
    case 'specialist':
      return {
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/40',
        glow: 'shadow-[0_0_25px_rgba(250,204,21,0.4)]',
        label: 'Specialist',
      }
    default:
      return {
        color: 'text-slate-600',
        bg: 'bg-white/5',
        border: 'border-white/10',
        glow: '',
        label: 'Locked',
      }
  }
}
