"use client"

import * as Icons from "lucide-react"
import type { AnimalProgress } from "@/lib/menagerie-checker"
import { getAnimalTierStyle } from "@/lib/menagerie-checker"
import { getAnimalTierLabel } from "@/data/agent-menagerie"
import Link from "next/link"

interface AgentBadgeCardProps {
  progress: AnimalProgress
  size?: "sm" | "md" | "lg"
  showProgress?: boolean
}

export function AgentBadgeCard({ progress, size = "md", showProgress = true }: AgentBadgeCardProps) {
  const { animal, tier, completedCount, totalCount, percentage, nextTierAt, nextTierName } = progress
  const style = getAnimalTierStyle(tier)
  const tierLabel = getAnimalTierLabel(animal, tier)
  const IconComponent = (Icons as any)[animal.icon] || Icons.Award
  const isLocked = tier === 'locked'

  const sizeClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  }

  return (
    <Link
      href={`/learning-paths/${animal.pathSlug}`}
      className={`
        group relative flex flex-col items-center text-center rounded-xl border transition-all duration-300
        ${sizeClasses[size]}
        ${isLocked 
          ? "bg-white/[0.02] border-white/5 opacity-50 grayscale hover:opacity-70" 
          : `${style.bg} ${style.border} ${style.glow} hover:scale-[1.03]`}
      `}
    >
      {/* Emoji */}
      <div className={`text-4xl mb-2 ${isLocked ? "grayscale opacity-30" : ""} transition-transform group-hover:scale-110`}>
        {animal.emoji}
      </div>

      {/* Animal name */}
      <div className={`font-bold text-sm ${isLocked ? "text-slate-600" : "text-white"}`}>
        {animal.codename}
      </div>

      {/* Tier label */}
      <div className={`text-xs font-semibold mt-0.5 ${style.color}`}>
        {tierLabel}
      </div>

      {/* Path title */}
      <div className="text-[10px] text-slate-500 mt-1 truncate w-full">
        {animal.pathTitle}
      </div>

      {/* Progress bar */}
      {showProgress && !isLocked && (
        <div className="w-full mt-3">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                percentage === 100 ? "bg-yellow-400" : "bg-cyan-500"
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            {completedCount}/{totalCount} lessons
          </div>
        </div>
      )}

      {/* Progress bar for locked (shows how close to enable) */}
      {showProgress && isLocked && totalCount > 0 && (
        <div className="w-full mt-3">
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-700 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-[10px] text-slate-600 mt-1">
            {completedCount > 0 ? `${completedCount}/${totalCount}` : "Not started"}
          </div>
        </div>
      )}

      {/* Next tier hint */}
      {!isLocked && nextTierName && (
        <div className="text-[9px] text-slate-600 mt-1">
          Next: {nextTierName} at {nextTierAt} lessons
        </div>
      )}
    </Link>
  )
}
