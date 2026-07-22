'use client'

import { useState } from 'react'
import { Flame, Star, Dices } from 'lucide-react'
import { useUser } from '@/components/user-provider'
import { AvatarPicker } from '@/components/avatar-picker'

export function ProfileBar() {
  const { profile, rerollCodename, isLoaded } = useUser()
  const [isSpinning, setIsSpinning] = useState(false)

  const handleReroll = () => {
    setIsSpinning(true)
    rerollCodename()
    setTimeout(() => setIsSpinning(false), 600)
  }

  if (!isLoaded) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 w-48 h-8 animate-pulse" />
    )
  }

  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
      {/* Profile picture (click to change) */}
      <AvatarPicker />

      {/* Codename */}
      <span className="text-sm font-medium text-slate-200 whitespace-nowrap">
        {profile?.codename || 'Agent'}
      </span>

      {/* Streak */}
      <div className="flex items-center gap-1">
        <Flame className="w-4 h-4 text-amber-400" />
        <span className="text-xs text-amber-300 font-medium">
          {profile?.streakDays || 0}
        </span>
      </div>

      {/* XP */}
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400" />
        <span className="text-xs text-yellow-300 font-medium">
          {profile?.xp || 0}
        </span>
      </div>

      {/* Reroll Button */}
      <button
        onClick={handleReroll}
        disabled={isSpinning}
        className={`flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors ${
          isSpinning ? 'animate-spin' : ''
        }`}
        title="Reroll codename"
      >
        <Dices className="w-4 h-4 text-cyan-400" />
      </button>
    </div>
  )
}
