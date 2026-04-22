import { agentMenagerie, TIER_CONFIG, type AgentAnimal, type AgentTier } from '@/data/agent-menagerie'
import { getTopicsForPath } from '@/utils/topic-helpers'
import type { UserProfile } from '@/lib/user-store'

export interface AgentProgress {
  agent: AgentAnimal
  completedCount: number
  totalCount: number
  percentage: number
  tier: AgentTier
  nextTierAt?: number  // percentage needed for next tier
}

/**
 * Calculate tier from completion percentage
 */
export function calculateTier(percentage: number): AgentTier {
  if (percentage >= TIER_CONFIG.specialist.threshold) return 'specialist'
  if (percentage >= TIER_CONFIG.operative.threshold) return 'operative'
  if (percentage >= TIER_CONFIG.recruit.threshold) return 'recruit'
  return 'locked'
}

/**
 * Get progress info for a single agent
 */
export function getAgentProgress(agent: AgentAnimal, profile: UserProfile): AgentProgress {
  const topics = getTopicsForPath(agent.pathSlug)
  const totalCount = topics.length
  const completedCount = topics.filter((t) => profile.lessonsCompleted.includes(t.slug)).length
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  const tier = calculateTier(percentage)
  
  let nextTierAt: number | undefined
  if (tier === 'locked') nextTierAt = TIER_CONFIG.recruit.threshold
  else if (tier === 'recruit') nextTierAt = TIER_CONFIG.operative.threshold
  else if (tier === 'operative') nextTierAt = TIER_CONFIG.specialist.threshold
  
  return { agent, completedCount, totalCount, percentage, tier, nextTierAt }
}

/**
 * Get progress for ALL agents
 */
export function getAllAgentProgress(profile: UserProfile): AgentProgress[] {
  return agentMenagerie.map((agent) => getAgentProgress(agent, profile))
}

/**
 * Get only agents the user has made progress on
 */
export function getEarnedAgents(profile: UserProfile): AgentProgress[] {
  return getAllAgentProgress(profile).filter((p) => p.tier !== 'locked')
}

/**
 * Count agents at specialist tier (earned fully)
 */
export function countLegends(profile: UserProfile): number {
  return getAllAgentProgress(profile).filter((p) => p.tier === 'specialist').length
}
