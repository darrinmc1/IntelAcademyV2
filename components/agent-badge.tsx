"use client"

import type { AgentProgress } from '@/lib/agent-badge-checker'
import { TIER_CONFIG } from '@/data/agent-menagerie'
import { Lock } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface AgentBadgeProps {
  progress: AgentProgress
  size?: 'sm' | 'md' | 'lg'
  showProgress?: boolean
  showName?: boolean
  onClick?: () => void
}

export function AgentBadge({ progress, size = 'md', showProgress = true, showName = true, onClick }: AgentBadgeProps) {
  const { agent, tier, percentage, completedCount, totalCount } = progress
  const [imgError, setImgError] = useState(false)
  const isLocked = tier === 'locked'
  const tierInfo = !isLocked ? TIER_CONFIG[tier] : null

  const sizeClasses = {
    sm: { wrap: 'p-2 gap-1', avatar: 'w-12 h-12 text-2xl', name: 'text-xs', code: 'text-[10px]' },
    md: { wrap: 'p-3 gap-2', avatar: 'w-16 h-16 text-3xl', name: 'text-sm', code: 'text-xs' },
    lg: { wrap: 'p-4 gap-3', avatar: 'w-24 h-24 text-5xl', name: 'text-base', code: 'text-sm' },
  }
  const s = sizeClasses[size]

  const Wrapper = onClick ? 'button' : 'div'

  return (
    <Wrapper
      onClick={onClick}
      className={`
        group flex flex-col items-center text-center rounded-xl border transition-all duration-300
        ${s.wrap} ${onClick ? 'cursor-pointer hover:scale-105' : ''}
        ${isLocked 
          ? 'bg-white/[0.02] border-white/5 opacity-50' 
          : `${tierInfo!.bg} ${tierInfo!.border} ${tierInfo!.glow}`}
      `}
    >
      {/* Avatar */}
      <div className={`
        relative flex items-center justify-center rounded-full overflow-hidden
        ${s.avatar}
        ${isLocked ? 'bg-white/5 grayscale' : `${tierInfo!.bg}`}
      `}>
        {agent.imagePath && !imgError ? (
          <Image
            src={agent.imagePath}
            alt={agent.codename}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span>{isLocked ? '❓' : agent.emoji}</span>
        )}
        {isLocked && (
          <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
            <Lock className="w-4 h-4 text-slate-500" />
          </div>
        )}
      </div>

      {showName && (
        <div className="flex flex-col items-center">
          <div className={`font-semibold ${isLocked ? 'text-slate-500' : 'text-white'} ${s.name}`}>
            {isLocked ? '???' : agent.codename}
          </div>
          <div className={`text-slate-400 ${s.code}`}>
            {isLocked ? agent.pathTitle : agent.animal}
          </div>
        </div>
      )}

      {showProgress && !isLocked && tierInfo && (
        <div className="mt-1 flex flex-col items-center gap-1 w-full">
          <div className={`text-[10px] uppercase tracking-widest font-bold ${tierInfo.color}`}>
            {tierInfo.label}
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-[10px] text-slate-500">
            {completedCount}/{totalCount}
          </div>
        </div>
      )}
    </Wrapper>
  )
}
