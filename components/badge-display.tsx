"use client"

import * as Icons from "lucide-react"
import type { Badge } from "@/data/badges"
import { getTierStyle } from "@/lib/badge-checker"

interface BadgeDisplayProps {
  badge: Badge
  earned?: boolean
  size?: "sm" | "md" | "lg"
  showDescription?: boolean
}

export function BadgeDisplay({ badge, earned = false, size = "md", showDescription = false }: BadgeDisplayProps) {
  const style = getTierStyle(badge.tier)
  // Dynamically get the icon
  const IconComponent = (Icons as any)[badge.icon] || Icons.Award
  
  const sizeClasses = {
    sm: { wrap: "p-3", icon: "w-5 h-5", text: "text-xs" },
    md: { wrap: "p-4", icon: "w-7 h-7", text: "text-sm" },
    lg: { wrap: "p-6", icon: "w-10 h-10", text: "text-base" },
  }
  const s = sizeClasses[size]

  return (
    <div className={`
      relative flex flex-col items-center text-center rounded-xl border transition-all duration-300
      ${s.wrap}
      ${earned 
        ? `${style.bg} ${style.border} ${style.glow} hover:scale-105` 
        : "bg-white/5 border-white/10 opacity-40 grayscale"}
    `}>
      <div className={`
        mb-2 p-2 rounded-full 
        ${earned ? style.bg : "bg-white/5"}
      `}>
        <IconComponent className={`${s.icon} ${earned ? style.color : "text-slate-500"}`} />
      </div>
      <div className={`font-semibold text-white ${s.text}`}>{badge.name}</div>
      {showDescription && (
        <div className="text-xs text-slate-400 mt-1">{badge.description}</div>
      )}
      {earned && (
        <div className="mt-1 text-[10px] uppercase tracking-widest font-bold" style={{ color: "inherit" }}>
          <span className={style.color}>{badge.tier}</span>
        </div>
      )}
    </div>
  )
}
