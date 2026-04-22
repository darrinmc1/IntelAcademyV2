"use client"

import { useUser } from "@/components/user-provider"
import { badges } from "@/data/badges"
import { getEarnedBadges, getUnearnedBadges } from "@/lib/badge-checker"
import { BadgeDisplay } from "@/components/badge-display"
import { User, Flame, Star, Trophy, Dices, Calendar, BookOpen, Target, PawPrint, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { agentMenagerie } from "@/data/agent-menagerie"
import { getUnlockedAnimals } from "@/lib/menagerie-checker"
import { AgentBadgeCard } from "@/components/agent-badge-card"

export default function ProfilePage() {
  const { profile, rerollCodename, isLoaded } = useUser()
  const [isRerolling, setIsRerolling] = useState(false)

  if (!isLoaded || !profile) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-white/5 rounded-xl" />
          <div className="h-64 bg-white/5 rounded-xl" />
        </div>
      </div>
    )
  }

  const earnedBadges = getEarnedBadges(profile)
  const unearnedBadges = getUnearnedBadges(profile)
  const unlockedAnimals = getUnlockedAnimals(profile)
  const memberSince = new Date(profile.createdAt).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  })

  const handleReroll = () => {
    setIsRerolling(true)
    rerollCodename()
    setTimeout(() => setIsRerolling(false), 500)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Profile header */}
      <div className="bg-gradient-to-br from-slate-900/60 to-cyan-950/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.8)]" />
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full" />
            <div className="relative w-24 h-24 rounded-full bg-cyan-500/10 border-2 border-cyan-500/40 flex items-center justify-center">
              <User className="w-12 h-12 text-cyan-400" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-grow">
            <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400 mb-1">
              Agent Profile
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{profile.codename}</h1>
              <button
                onClick={handleReroll}
                className={`p-2 rounded-full bg-white/5 border border-white/10 
                           hover:border-cyan-500/40 hover:bg-cyan-500/10
                           text-slate-400 hover:text-cyan-400 transition-all
                           ${isRerolling ? 'animate-spin' : ''}`}
                title="Re-roll codename"
              >
                <Dices className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-slate-500 mt-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Active since {memberSince}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <StatCard icon={Star} label="Total XP" value={profile.xp.toLocaleString()} color="text-yellow-400" />
          <StatCard icon={Flame} label="Current Streak" value={`${profile.streakDays} days`} color="text-orange-400" />
          <StatCard icon={Trophy} label="Best Streak" value={`${profile.bestStreak} days`} color="text-amber-400" />
          <StatCard icon={BookOpen} label="Lessons Complete" value={profile.lessonsCompleted.length.toString()} color="text-emerald-400" />
        </div>
      </div>

      {/* Agent Menagerie preview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <PawPrint className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Agent Menagerie</h2>
              <p className="text-slate-400 text-sm">
                {unlockedAnimals.length} of {agentMenagerie.length} agents recruited
              </p>
            </div>
          </div>
          <Link
            href="/menagerie"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {unlockedAnimals.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {unlockedAnimals.slice(0, 6).map((progress) => (
              <AgentBadgeCard key={progress.animal.pathSlug} progress={progress} size="sm" showProgress={false} />
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-slate-400 text-sm">Complete a lesson to recruit your first agent</p>
            <Link href="/learning-paths" className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block">
              Browse Learning Paths →
            </Link>
          </div>
        )}
      </div>

      {/* Badges */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <Trophy className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
            <p className="text-slate-400 text-sm">
              {earnedBadges.length} of {badges.length} unlocked
            </p>
          </div>
        </div>

        {/* Earned */}
        {earnedBadges.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-500 mb-4">
              Unlocked ({earnedBadges.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {earnedBadges.map((badge) => (
                <BadgeDisplay key={badge.id} badge={badge} earned showDescription />
              ))}
            </div>
          </div>
        )}

        {/* Locked */}
        {unearnedBadges.length > 0 && (
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-500 mb-4">
              Locked ({unearnedBadges.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {unearnedBadges.map((badge) => (
                <BadgeDisplay key={badge.id} badge={badge} earned={false} showDescription />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">{label}</span>
      </div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
    </div>
  )
}
