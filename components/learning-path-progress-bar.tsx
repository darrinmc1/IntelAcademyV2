"use client"

import { useUser } from "@/components/user-provider"
import { CheckCircle2 } from "lucide-react"

interface LearningPathProgressBarProps {
  pathSlug: string
  pathTitle?: string
  topicSlugs: string[]  // array of topic slugs that belong to this path
  compact?: boolean
}

export function LearningPathProgressBar({ pathSlug, pathTitle, topicSlugs, compact = false }: LearningPathProgressBarProps) {
  const { profile, isLoaded } = useUser()

  if (!isLoaded || !profile) {
    return <div className="h-6 bg-white/5 rounded-full animate-pulse" />
  }

  const completed = topicSlugs.filter((slug) => profile.lessonsCompleted.includes(slug)).length
  const total = topicSlugs.length
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  const isComplete = completed === total && total > 0

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${
              isComplete ? 'bg-emerald-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
          {completed}/{total}
        </span>
      </div>
    )
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          {pathTitle && <div className="text-sm font-semibold text-white">{pathTitle}</div>}
          <div className="text-xs text-slate-400">
            {completed} of {total} lessons complete
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isComplete && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          <span className={`text-lg font-bold ${isComplete ? 'text-emerald-400' : 'text-cyan-400'}`}>
            {percentage}%
          </span>
        </div>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${
            isComplete 
              ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
