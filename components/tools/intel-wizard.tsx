"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Crown,
  Loader2,
  RefreshCw,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Phase = "questions" | "generating" | "result" | "error"

export type IntelTool = {
  id: string
  name: string
  description: string
  questions: string[]
}

/** Check how many free generations the user has used */
function getFreeUsage(): number {
  if (typeof window === "undefined") return 0
  try {
    return Number(localStorage.getItem("intelacademy_free_uses") || "0")
  } catch {
    return 0
  }
}

/** Increment free usage counter */
function useFreeTrial(): number {
  try {
    const next = getFreeUsage() + 1
    localStorage.setItem("intelacademy_free_uses", String(next))
    return next
  } catch {
    return 99
  }
}

const FREE_LIMIT = 1

export function IntelWizard({ tool }: { tool: IntelTool }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(() => tool.questions.map(() => ""))
  const [phase, setPhase] = useState<Phase>("questions")
  const [draft, setDraft] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [showWall, setShowWall] = useState(false)

  // Check if the user has exhausted their free trial
  useEffect(() => {
    if (getFreeUsage() >= FREE_LIMIT) {
      setShowWall(true)
    }
  }, [])

  const total = tool.questions.length
  const isLast = step === total - 1
  const progress = Math.round(((step + (phase === "questions" ? 0 : 1)) / total) * 100)

  function setAnswer(value: string) {
    setAnswers((prev) => {
      const next = [...prev]
      next[step] = value
      return next
    })
  }

  const generate = useCallback(async () => {
    setPhase("generating")
    setError("")

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool: tool.id,
          questions: tool.questions,
          answers,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Generation failed. Please try again.")
        setPhase("error")
        return
      }

      setDraft(data.draft)
      useFreeTrial()
      setPhase("result")
    } catch (err) {
      setError("Network error — check your connection and try again.")
      setPhase("error")
    }
  }, [tool, answers])

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  // --- Show the subscription wall if over the free limit ---
  if (showWall) {
    return <SubscribeWall />
  }

  if (phase === "generating") {
    return (
      <Card className="flex flex-col items-center justify-center gap-4 border-border bg-surface px-6 py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">Generating your {tool.name.toLowerCase()}&hellip;</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Applying structured analytic techniques to your inputs using AI.
          </p>
        </div>
      </Card>
    )
  }

  if (phase === "result") {
    return (
      <div className="space-y-4">
        <Card className="border-border bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4" />
              AI-generated assessment &mdash; review and edit below
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={copyDraft}>
                {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setPhase("questions")
                  setStep(0)
                }}
              >
                <RefreshCw className="mr-1 h-4 w-4" />
                Start over
              </Button>
            </div>
          </div>
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="mt-4 min-h-[420px] resize-y bg-background font-mono text-sm leading-relaxed"
            aria-label={`Generated ${tool.name}`}
          />
        </Card>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
          <p className="text-sm font-semibold text-amber-300">
            ✨ That was your free generation!
          </p>
          <p className="mt-1 text-xs text-amber-400/80">
            Subscribe to Pro for unlimited AI intelligence analysis, full course access, and more.
          </p>
          <Button asChild className="mt-3" size="sm">
            <Link href="/pricing">
              <Crown className="mr-1 h-4 w-4" />
              Go Pro
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (phase === "error") {
    return (
      <div className="space-y-4">
        <Card className="border-destructive/30 bg-destructive/5 p-6 text-center">
          <p className="text-lg font-semibold text-destructive">Something went wrong</p>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setPhase("questions")
              setError("")
            }}
          >
            Try again
          </Button>
        </Card>
      </div>
    )
  }

  // Questions phase
  return (
    <Card className="border-border bg-surface p-6">
      {/* progress */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {step + 1} of {total}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-raised">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${((step + 1) / total) * 100}%` }}
        />
      </div>

      <div className="mt-8">
        <label htmlFor="answer" className="block text-lg font-medium text-foreground text-balance">
          {tool.questions[step]}
        </label>
        <Textarea
          id="answer"
          value={answers[step]}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer&hellip; (optional &mdash; you can refine later)"
          className="mt-4 min-h-[140px] bg-background"
          autoFocus
        />
      </div>

      {/* step dots */}
      <div className="mt-6 flex flex-wrap gap-1.5" aria-hidden>
        {tool.questions.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-6 rounded-full transition-colors",
              i < step ? "bg-accent" : i === step ? "bg-accent/60" : "bg-surface-raised",
            )}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => (step === 0 ? undefined : setStep((s) => s - 1))}
          disabled={step === 0}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back
        </Button>
        {isLast ? (
          <Button onClick={generate}>
            <Sparkles className="mr-1 h-4 w-4" />
            Generate {tool.name}
          </Button>
        ) : (
          <Button onClick={() => setStep((s) => s + 1)}>
            Next
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="mt-6 border-t border-border pt-4 text-center">
        <Link href="/tools" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          Choose a different tool
        </Link>
      </div>
    </Card>
  )
}

/** Subscription wall shown after the free trial is exhausted */
function SubscribeWall() {
  return (
    <Card className="border-border bg-surface p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <Crown className="h-8 w-8 text-accent" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Unlock unlimited AI intelligence reports</h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        Free tier: one report with Gemini Flash. Pro subscription unlocks advanced AI models,
        and other advanced models for deeper analysis.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <Link href="/pricing">
            <Crown className="mr-2 h-5 w-5" />
            Go Pro
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link href="/courses">Browse free courses instead</Link>
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Free tier includes one AI-generated report with Gemini Flash.
      </p>
    </Card>
  )
}
