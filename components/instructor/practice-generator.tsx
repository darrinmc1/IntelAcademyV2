"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FlaskConical, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PRACTICE_DOMAINS, PRACTICE_FOCUS, PRACTICE_LEVELS } from "@/lib/instructor/options"
import { loadPracticeExercises, savePracticeExercise } from "@/lib/exercises/progress"
import type { Exercise } from "@/lib/exercises/types"

export function PracticeGenerator() {
  const router = useRouter()
  const [level, setLevel] = useState<string>(PRACTICE_LEVELS[0])
  const [domain, setDomain] = useState<string>(PRACTICE_DOMAINS[0])
  const [focus, setFocus] = useState<string>(PRACTICE_FOCUS[0])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [recent, setRecent] = useState<Exercise[]>([])

  useEffect(() => {
    setRecent(loadPracticeExercises())
  }, [])

  async function generate() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/instructor/exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level, domain, focus }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.exercise) {
        setError(data?.error || "The Chief couldn't write that one. Try again.")
        return
      }
      const exercise = data.exercise as Exercise
      savePracticeExercise(exercise)
      router.push(`/exercises/practice?id=${encodeURIComponent(exercise.slug)}`)
    } catch {
      setError("Network error — check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-slate-800 bg-slate-900/50 p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
          <FlaskConical className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-50">Generate a practice exercise</h2>
          <p className="mt-1 text-sm text-slate-400">
            The Chief writes a fresh fictional brief pack with an answer key, built around the trap you want to practise.
            Takes about half a minute.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <Label htmlFor="practice-level" className="text-xs text-slate-400">Level</Label>
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger id="practice-level" className="bg-slate-950">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PRACTICE_LEVELS.map((l) => (
                <SelectItem key={l} value={l}>{l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="practice-domain" className="text-xs text-slate-400">Domain</Label>
          <Select value={domain} onValueChange={setDomain}>
            <SelectTrigger id="practice-domain" className="bg-slate-950">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PRACTICE_DOMAINS.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="practice-focus" className="text-xs text-slate-400">Practise</Label>
          <Select value={focus} onValueChange={setFocus}>
            <SelectTrigger id="practice-focus" className="bg-slate-950">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PRACTICE_FOCUS.map((f) => (
                <SelectItem key={f} value={f}>{f}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-slate-500">Generated exercises live in this browser only. AI-written — the answer key can be imperfect.</p>
        <Button onClick={generate} disabled={loading}>
          {loading ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : <Sparkles className="mr-1 h-4 w-4" />}
          {loading ? "Writing your brief pack…" : "Generate exercise"}
        </Button>
      </div>

      {recent.length ? (
        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Your recent practice exercises</p>
          <ul className="mt-2 space-y-1">
            {recent.map((e) => (
              <li key={e.slug}>
                <Link href={`/exercises/practice?id=${encodeURIComponent(e.slug)}`} className="text-sm text-cyan-300 hover:underline">
                  {e.title}
                </Link>
                <span className="text-xs text-slate-500"> · {e.level} · {e.domain}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Card>
  )
}
