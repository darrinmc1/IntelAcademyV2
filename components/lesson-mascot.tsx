"use client"

import { agentMenagerie } from "@/data/agent-menagerie"

interface LessonMascotProps {
  character: string  // pathSlug from agent-menagerie (e.g., "foundations", "osint")
  message: string
  mood?: "default" | "excited" | "warning" | "thinking"
}

const moodStyles = {
  default: "border-cyan-500/20 bg-cyan-500/5",
  excited: "border-amber-500/20 bg-amber-500/5",
  warning: "border-red-500/20 bg-red-500/5",
  thinking: "border-indigo-500/20 bg-indigo-500/5",
}

const moodAccent = {
  default: "text-cyan-400",
  excited: "text-amber-400",
  warning: "text-red-400",
  thinking: "text-indigo-400",
}

export function LessonMascot({ character, message, mood = "default" }: LessonMascotProps) {
  const agent = agentMenagerie.find((a) => a.pathSlug === character)
  
  if (!agent) return null

  return (
    <div className={`flex items-start gap-4 rounded-xl border p-4 mb-8 ${moodStyles[mood]}`}>
      {/* Avatar */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-2xl">
        {agent.emoji}
      </div>

      {/* Speech bubble */}
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs font-bold uppercase tracking-widest ${moodAccent[mood]}`}>
            {agent.codename}
          </span>
          <span className="text-[10px] text-slate-600">({agent.animal})</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed italic">
          "{message}"
        </p>
      </div>
    </div>
  )
}
