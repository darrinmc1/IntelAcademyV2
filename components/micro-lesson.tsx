"use client"

import React, { useState } from "react"
import { useHumor, ComedyOnly } from "@/components/humor-provider"
import { HumorModeToggle } from "@/components/humor-mode-toggle"
import { LessonMascot } from "@/components/lesson-mascot"
import Link from "next/link"
import {
  FileText, ChevronDown, ChevronRight, Lightbulb, Target,
  BookOpen, ArrowRight, Clock, BarChart3, Crosshair
} from "lucide-react"

// ---- Sub-components ----

interface MissionBriefingProps {
  children: React.ReactNode
  humorText?: string
}

export function MissionBriefing({ children, humorText }: MissionBriefingProps) {
  const { isComedy } = useHumor()
  return (
    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5 mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Crosshair className="w-5 h-5 text-cyan-400" />
        <h3 className="text-sm uppercase tracking-widest font-bold text-cyan-400">
          Mission Briefing
        </h3>
      </div>
      <div className="text-slate-200 text-sm leading-relaxed">{children}</div>
      {isComedy && humorText && (
        <p className="text-xs text-cyan-400/60 italic mt-3 border-t border-cyan-500/10 pt-3">
          {humorText}
        </p>
      )}
    </div>
  )
}

interface DeepDiveProps {
  title: string
  children: React.ReactNode
}

export function DeepDive({ title, children }: DeepDiveProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/[0.07] transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-semibold text-white">{title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="p-4 border-t border-white/10 text-slate-300 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

interface FieldExerciseProps {
  title?: string
  children: React.ReactNode
}

export function FieldExercise({ title = "Field Exercise", children }: FieldExerciseProps) {
  return (
    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 my-8">
      <div className="flex items-center gap-2 mb-3">
        <Target className="w-5 h-5 text-amber-400" />
        <h3 className="text-sm uppercase tracking-widest font-bold text-amber-400">
          {title}
        </h3>
      </div>
      <div className="text-slate-200 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

interface ProTipProps {
  children: React.ReactNode
}

export function ProTip({ children }: ProTipProps) {
  return (
    <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg p-4 my-6">
      <div className="flex items-center gap-2 mb-1">
        <Lightbulb className="w-4 h-4 text-emerald-400" />
        <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">Pro Tip</span>
      </div>
      <div className="text-slate-300 text-sm">{children}</div>
    </div>
  )
}

interface JokeAsideProps {
  children: React.ReactNode
}

export function JokeAside({ children }: JokeAsideProps) {
  const { isComedy } = useHumor()
  if (!isComedy) return null
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3 my-4 italic text-slate-400 text-sm">
      {children}
    </div>
  )
}

interface DebriefProps {
  takeaways: string[]
  humorSummary?: string
}

export function Debrief({ takeaways, humorSummary }: DebriefProps) {
  const { isComedy } = useHumor()
  return (
    <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5 my-8">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-5 h-5 text-cyan-400" />
        <h3 className="text-sm uppercase tracking-widest font-bold text-cyan-400">
          Debrief - Key Takeaways
        </h3>
      </div>
      <ul className="space-y-2">
        {takeaways.map((t, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-200 text-sm">
            <span className="text-cyan-400 font-bold mt-0.5">›</span>
            {t}
          </li>
        ))}
      </ul>
      {isComedy && humorSummary && (
        <p className="text-xs text-slate-500 italic mt-4 border-t border-white/5 pt-3">
          TL;DR: {humorSummary}
        </p>
      )}
    </div>
  )
}

interface NextLessonLinkProps {
  href: string
  title: string
  description?: string
}

export function NextLessonLink({ href, title, description }: NextLessonLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 
                 hover:bg-cyan-500/15 hover:border-cyan-500/40 transition-all duration-300 mt-8"
    >
      <div>
        <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400 mb-1">Next Mission</div>
        <div className="text-white font-medium">{title}</div>
        {description && <div className="text-slate-400 text-xs mt-0.5">{description}</div>}
      </div>
      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
    </Link>
  )
}

// ---- Main MicroLesson Wrapper ----

interface MicroLessonProps {
  title: string
  subtitle?: string
  humorSubtitle?: string
  readTime: number
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  mascot?: string // character key from agent-menagerie
  mascotMessage?: string
  children: React.ReactNode
}

export function MicroLesson({
  title,
  subtitle,
  humorSubtitle,
  readTime,
  difficulty,
  category,
  mascot,
  mascotMessage,
  children,
}: MicroLessonProps) {
  const { isComedy } = useHumor()

  const difficultyColors = {
    Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Intermediate: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Advanced: "text-red-400 bg-red-500/10 border-red-500/20",
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
            <span className="text-xs text-slate-500">{category}</span>
          </div>
          <div className="flex items-center gap-3">
            <HumorModeToggle compact />
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-slate-300 text-lg">{subtitle}</p>}
        {isComedy && humorSubtitle && (
          <p className="text-sm text-slate-500 italic mt-1">{humorSubtitle}</p>
        )}
      </div>

      {/* Mascot intro */}
      {mascot && mascotMessage && (
        <LessonMascot character={mascot} message={mascotMessage} />
      )}

      {/* Lesson content (children should use MissionBriefing, DeepDive, FieldExercise, ProTip, JokeAside, Debrief, NextLessonLink) */}
      <div className="lesson-content">
        {children}
      </div>
    </div>
  )
}
