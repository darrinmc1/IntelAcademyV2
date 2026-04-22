'use client'

/**
 * Rank Indicator Component
 * Shows user's current rank badge
 */

import siteConfig from '@/config/site-config.json'

interface RankIndicatorProps {
  totalXp: number
  className?: string
}

export function RankIndicator({ totalXp, className = '' }: RankIndicatorProps) {
  // Find current rank based on XP
  const ranks = [...siteConfig.ranks].sort((a, b) => b.minPoints - a.minPoints)
  const currentRank = ranks.find(r => totalXp >= r.minPoints) || ranks[ranks.length - 1]
  
  // Find next rank
  const nextRankIndex = ranks.findIndex(r => r.name === currentRank.name) - 1
  const nextRank = nextRankIndex >= 0 ? ranks[nextRankIndex] : null
  
  const xpToNext = nextRank ? nextRank.minPoints - totalXp : 0
  const progress = nextRank 
    ? ((totalXp - currentRank.minPoints) / (nextRank.minPoints - currentRank.minPoints)) * 100
    : 100

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">{currentRank.icon}</span>
        <div>
          <div className="font-semibold">{currentRank.name}</div>
          <div className="text-sm text-muted-foreground">{totalXp.toLocaleString()} XP</div>
        </div>
      </div>
      
      {nextRank && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Next: {nextRank.name}</span>
            <span>{xpToNext.toLocaleString()} XP to go</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
