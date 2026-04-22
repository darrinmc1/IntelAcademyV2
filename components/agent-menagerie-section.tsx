"use client"

import { useUser } from "@/components/user-provider"
import { getAllAgentProgress, getEarnedAgents } from "@/lib/agent-badge-checker"
import { AgentBadge } from "@/components/agent-badge"
import { PawPrint, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AgentMenagerieSection() {
  const { profile, isLoaded } = useUser()

  if (!isLoaded || !profile) {
    return <div className="h-48 bg-white/5 rounded-xl animate-pulse" />
  }

  const all = getAllAgentProgress(profile)
  const earned = getEarnedAgents(profile)
  const totalAgents = all.length

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <PawPrint className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Agent Menagerie</h2>
            <p className="text-slate-400 text-sm">
              {earned.length} of {totalAgents} agents recruited
            </p>
          </div>
        </div>
        <Link
          href="/menagerie"
          className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {earned.length === 0 ? (
        <div className="text-center py-8 text-slate-400">
          <div className="text-4xl mb-3 opacity-50">🔍</div>
          <p className="mb-2">No agents recruited yet.</p>
          <p className="text-sm text-slate-500">Complete any lesson to recruit your first agent.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {earned.slice(0, 12).map((progress) => (
            <AgentBadge key={progress.agent.pathSlug} progress={progress} size="md" />
          ))}
          {earned.length > 12 && (
            <Link
              href="/menagerie"
              className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 p-4 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              <div className="text-2xl font-bold text-cyan-400">+{earned.length - 12}</div>
              <div className="text-xs text-slate-400">more</div>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
