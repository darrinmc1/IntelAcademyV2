"use client"

import { toast } from "sonner"
import * as Icons from "lucide-react"
import type { Badge } from "@/data/badges"
import { getTierStyle } from "@/lib/badge-checker"

export function triggerBadgeUnlockToast(badge: Badge) {
  const style = getTierStyle(badge.tier)
  const IconComponent = (Icons as any)[badge.icon] || Icons.Award

  toast.custom(
    (t) => (
      <div className={`
        flex items-start gap-3 p-4 rounded-xl min-w-[320px] max-w-[400px]
        bg-slate-900/95 backdrop-blur-md border ${style.border} ${style.glow}
      `}>
        <div className={`flex-shrink-0 p-2 rounded-full ${style.bg}`}>
          <IconComponent className={`w-6 h-6 ${style.color}`} />
        </div>
        <div className="flex-grow min-w-0">
          <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-0.5">
            Badge Unlocked
          </div>
          <div className="text-white font-semibold">{badge.name}</div>
          <div className="text-sm text-slate-400 mt-1 italic">"{badge.humorMessage}"</div>
        </div>
      </div>
    ),
    { duration: 5000 }
  )
}
