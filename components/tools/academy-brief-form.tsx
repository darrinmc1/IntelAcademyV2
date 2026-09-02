"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  Check,
  Copy,
  Crown,
  FileText,
  GraduationCap,
  Loader2,
  RefreshCw,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import type { AcademyBrief, BriefMode, BriefResponse } from "@/lib/academy-brief"
import { DISCLAIMER } from "@/lib/pricing"

type Phase = "input" | "generating" | "result"

const FREE_LIMIT = 1
const STORAGE_KEY = "intelacademy_brief_uses"

function getFreeUsage(): number {
  if (typeof window === "undefined") return 0
  try {
    return Number(localStorage.getItem(STORAGE_KEY) || "0")
  } catch {
    return 0
  }
}

function incrementFreeTrial(): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(getFreeUsage() + 1))
  } catch {
    /* ignore */
  }
}

const PLACEHOLDER = `Paste a raw dump or analyst notes. Example:

Subject: overnight reporting on warehouse thefts, District 4
- 3 incidents in 11 days, all between 02:00–04:30
- Same MO: cut fence, disable CCTV on east side, vans with covered plates
- Source A (security contractor, previously reliable) says a crew from the river docks
- No confirmed IDs; one partial plate from 12 Aug
- Local police treating as opportunistic; no tasking yet`

function confidenceClass(level: string) {
  if (level === "high") return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
  if (level === "moderate") return "bg-amber-500/15 text-amber-200 border-amber-500/30"
  return "bg-slate-500/20 text-slate-300 border-slate-500/30"
}

function briefToMarkdown(brief: AcademyBrief, disclaimer: string): string {
  const judgments = brief.keyJudgments
    .map(
      (j) =>
        `- ${j.statement} _(confidence: ${j.confidence}${j.estimativeLanguage ? `; ${j.estimativeLanguage}` : ""})_`,
    )
    .join("\n")
  const recs = brief.recommendations.map((r) => `- ${r}`).join("\n")
  const cites = brief.citations
    .map((c) => `- [${c.title}](${c.href}) — ${c.why}`)
    .join("\n")
  return `# ${brief.title}

## BLUF
${brief.bluf}

## Key judgments
${judgments}

## Situation
${brief.situation}

## Analysis
${brief.analysis}

## Source assessment
${brief.sourceAssessment}

## Alternatives and gaps
${brief.alternativesAndGaps}

## Recommendations
${recs}

## Academy citations
${cites}

---
${disclaimer}
`
}

export function AcademyBriefForm() {
  const [dump, setDump] = useState("")
  const [phase, setPhase] = useState<Phase>("input")
  const [error, setError] = useState("")
  const [result, setResult] = useState<BriefResponse | null>(null)
  const [copied, setCopied] = useState(false)
  const [showWall, setShowWall] = useState(false)

  useEffect(() => {
    if (getFreeUsage() >= FREE_LIMIT) setShowWall(true)
  }, [])

  const generate = useCallback(async () => {
    setPhase("generating")
    setError("")
    try {
      const res = await fetch("/api/academy-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dump }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Could not build a brief from that dump.")
        setPhase("input")
        return
      }
      setResult(data as BriefResponse)
      incrementFreeTrial()
      setPhase("result")
    } catch {
      setError("Network error — check your connection and try again.")
      setPhase("input")
    }
  }, [dump])

  async function copyBrief() {
    if (!result) return
    try {
      await navigator.clipboard.writeText(briefToMarkdown(result.brief, result.disclaimer))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  if (showWall && phase !== "result") {
    return <SubscribeWall />
  }

  if (phase === "generating") {
    return (
      <Card className="flex flex-col items-center justify-center gap-4 border-slate-800 bg-slate-900/50 px-6 py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-50">Structuring your brief…</p>
          <p className="mt-1 text-sm text-slate-400">
            Applying the academy method and matching real catalog lessons.
          </p>
        </div>
      </Card>
    )
  }

  if (phase === "result" && result) {
    return (
      <div className="space-y-4">
        <BriefView
          brief={result.brief}
          mode={result.mode}
          notice={result.notice}
          disclaimer={result.disclaimer}
        />
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" onClick={copyBrief}>
            {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
            {copied ? "Copied" : "Copy markdown"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setPhase("input")
              setResult(null)
              if (getFreeUsage() >= FREE_LIMIT) setShowWall(true)
            }}
          >
            <RefreshCw className="mr-1 h-4 w-4" />
            New dump
          </Button>
        </div>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
          <p className="text-sm font-semibold text-amber-300">That was your free Academy Brief preview.</p>
          <p className="mt-1 text-xs text-amber-400/80">
            Paid plans include unlimited briefs when billing is live. Checkout isn&apos;t live — join the waitlist.
          </p>
          <Button asChild className="mt-3" size="sm">
            <Link href="/waitlist">
              <Crown className="mr-1 h-4 w-4" />
              Join the waitlist
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Card className="border-slate-800 bg-slate-900/50 p-6">
      <label htmlFor="dump" className="block text-lg font-medium text-slate-50">
        Paste a raw intel dump or notes
      </label>
      <p className="mt-1 text-sm text-slate-400">
        One job: structure this using the academy method and cite real lessons. Not a chat.
      </p>
      <Textarea
        id="dump"
        value={dump}
        onChange={(e) => setDump(e.target.value)}
        placeholder={PLACEHOLDER}
        className="mt-4 min-h-[280px] bg-slate-950 font-mono text-sm leading-relaxed"
      />
      {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-slate-500">Free preview: one brief. Then Early Adopter / Pro include the tool.</p>
        <Button onClick={generate} disabled={dump.trim().length < 40}>
          <Sparkles className="mr-1 h-4 w-4" />
          Build structured brief
        </Button>
      </div>
    </Card>
  )
}

function BriefView({
  brief,
  mode,
  notice,
  disclaimer,
}: {
  brief: AcademyBrief
  mode: BriefMode
  notice?: string
  disclaimer: string
}) {
  return (
    <div className="space-y-4">
      {mode === "training-preview" && notice ? (
        <div className="flex gap-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
          <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
          <p>{notice}</p>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 text-sm font-medium text-amber-300">
          <Sparkles className="h-4 w-4" />
          Structured with the academy method — review before you use it in class
        </div>
      )}

      <Card className="border-slate-800 bg-slate-900/60 p-6 space-y-8">
        <header>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Academy Brief</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50 text-balance">{brief.title}</h2>
        </header>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">BLUF</h3>
          <p className="mt-2 text-slate-200 leading-relaxed">{brief.bluf}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Key judgments</h3>
          <ul className="mt-3 space-y-3">
            {brief.keyJudgments.map((j, i) => (
              <li key={i} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${confidenceClass(j.confidence)}`}>
                    {j.confidence} confidence
                  </span>
                  {j.estimativeLanguage ? (
                    <span className="text-xs text-slate-400">{j.estimativeLanguage}</span>
                  ) : null}
                </div>
                <p className="text-slate-200">{j.statement}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Situation</h3>
          <p className="mt-2 text-slate-300 leading-relaxed whitespace-pre-wrap">{brief.situation}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Analysis</h3>
          <p className="mt-2 text-slate-300 leading-relaxed whitespace-pre-wrap">{brief.analysis}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Source assessment</h3>
          <p className="mt-2 text-slate-300 leading-relaxed whitespace-pre-wrap">{brief.sourceAssessment}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Alternatives and gaps</h3>
          <p className="mt-2 text-slate-300 leading-relaxed whitespace-pre-wrap">{brief.alternativesAndGaps}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Recommendations</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {brief.recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Academy citations</h3>
          <ul className="mt-3 space-y-2">
            {brief.citations.map((c) => (
              <li key={c.href} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
                <Link href={c.href} className="font-medium text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
                  {c.title}
                </Link>
                <p className="mt-1 text-sm text-slate-400">{c.why}</p>
              </li>
            ))}
          </ul>
        </section>
      </Card>

      <div className="flex gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-400">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
        <p>{disclaimer}</p>
      </div>
    </div>
  )
}

function SubscribeWall() {
  return (
    <Card className="border-slate-800 bg-slate-900/50 p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
        <Crown className="h-8 w-8 text-amber-400" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-slate-50">Academy Brief is on paid plans</h2>
      <p className="mx-auto mt-3 max-w-md text-slate-400">
        Free tier: one structured brief. Early Adopter ($5/mo) and Pro ($10/mo) include the tool.
        There is no standalone Brief SKU. Checkout isn&apos;t live — join the waitlist.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <Link href="/waitlist">
            <Crown className="mr-2 h-5 w-5" />
            Join the waitlist
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link href="/topics/intelligence-report-components">
            <FileText className="mr-2 h-5 w-5" />
            Study the method
          </Link>
        </Button>
      </div>
    </Card>
  )
}
