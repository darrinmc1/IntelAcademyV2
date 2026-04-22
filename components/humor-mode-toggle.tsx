"use client"

import { useHumor } from "@/components/humor-provider"
import { Laugh, Briefcase } from "lucide-react"

interface HumorModeToggleProps {
  compact?: boolean
}

export function HumorModeToggle({ compact = false }: HumorModeToggleProps) {
  const { mode, toggleMode, isComedy } = useHumor()

  if (compact) {
    return (
      <button
        onClick={toggleMode}
        className={`p-2 rounded-full transition-all duration-300 ${
          isComedy
            ? "bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20"
            : "bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10"
        }`}
        title={isComedy ? "Switch to Serious Analyst mode" : "Switch to Comedy Operative mode"}
      >
        {isComedy ? <Laugh className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
      </button>
    )
  }

  return (
    <button
      onClick={toggleMode}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
        isComedy
          ? "bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20"
          : "bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10"
      }`}
    >
      {isComedy ? <Laugh className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
      {isComedy ? "Comedy Operative" : "Serious Analyst"}
    </button>
  )
}
