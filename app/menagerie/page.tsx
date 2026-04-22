"use client"

import { useUser } from "@/components/user-provider"
import { agentMenagerie } from "@/data/agent-menagerie"
import { getAllAnimalProgress, getUnlockedAnimals, getLockedAnimals } from "@/lib/menagerie-checker"
import { AgentBadgeCard } from "@/components/agent-badge-card"
import { PawPrint, Trophy, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MenageriePage() {
  const { profile, isLoaded } = useUser()

  if (!isLoaded || !profile) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-16 bg-white/5 rounded-xl w-1/3" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 bg-white/5 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const allProgress = getAllAnimalProgress(profile)
  const unlocked = allProgress.filter((a) => a.tier !== 'locked')
  const locked = allProgress.filter((a) => a.tier === 'locked')

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-2">
        <Link href="/profile" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition-colors mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Profile
        </Link>
      </div>

      <div className="bg-gradient-to-br from-slate-900/60 to-cyan-950/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.8)]" />
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <PawPrint className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Agent Menagerie</h1>
            <p className="text-slate-400 mt-1">
              Collect all {agentMenagerie.length} agents by completing learning paths. Each path has its own animal operative.
            </p>
          </div>
        </div>

        {/* Overall stats */}
        <div className="flex items-center gap-6 mt-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">{unlocked.length}</span>
            <span className="text-slate-400 text-sm">Recruited</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-slate-600" />
            <span className="text-slate-400 font-semibold">{locked.length}</span>
            <span className="text-slate-500 text-sm">Undiscovered</span>
          </div>
          <div className="flex-grow" />
          <div className="text-sm text-slate-500">
            Complete a lesson in any path to recruit its agent
          </div>
        </div>
      </div>

      {/* Unlocked agents */}
      {unlocked.length > 0 && (
        <div className="mb-10">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Your Agents ({unlocked.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {unlocked.map((progress) => (
              <AgentBadgeCard key={progress.animal.pathSlug} progress={progress} />
            ))}
          </div>
        </div>
      )}

      {/* Locked agents */}
      {locked.length > 0 && (
        <div>
          <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-600 mb-4 flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Undiscovered Agents ({locked.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {locked.map((progress) => (
              <AgentBadgeCard key={progress.animal.pathSlug} progress={progress} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
