"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { BookOpen, Loader2, RotateCcw, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RichText } from "@/components/instructor/rich-text"
import type { LessonLink } from "@/lib/exercises/lessons"
import type { Exercise, ExerciseSubmission } from "@/lib/exercises/types"
import type { InstructorReply } from "@/lib/instructor/instructor"

export type InstructorExerciseContext = {
  /** Library exercise slug. */
  slug?: string
  /** Full exercise — only for generated practice exercises. */
  exercise?: Exercise
  getDraft: () => ExerciseSubmission
  submitted: boolean
}

type Turn = {
  role: "user" | "assistant"
  content: string
  lessons?: LessonLink[]
  followUps?: string[]
  mode?: InstructorReply["mode"]
  notice?: string
}

const PAGE_STARTERS = [
  "Explain the Admiralty system",
  "What makes evidence diagnostic?",
  "How do I write a good BLUF?",
  "What should I study next?",
]

const PANEL_STARTERS = [
  "Question my reasoning so far",
  "Am I grading the sources sensibly?",
  "How do I write a good BLUF?",
  "Explain ACH with an example",
]

const STORE_PREFIX = "intelacademy_chief_"

function loadThread(key: string): Turn[] {
  try {
    const raw = window.sessionStorage.getItem(STORE_PREFIX + key)
    return raw ? (JSON.parse(raw) as Turn[]) : []
  } catch {
    return []
  }
}

function saveThread(key: string, turns: Turn[]) {
  try {
    window.sessionStorage.setItem(STORE_PREFIX + key, JSON.stringify(turns.slice(-30)))
  } catch {
    /* ignore */
  }
}

export function ChiefAvatar({ size = 36 }: { size?: number }) {
  return (
    <img
      src="/mascots/the-chief.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="shrink-0 self-start rounded-full bg-slate-800 ring-1 ring-cyan-500/30"
    />
  )
}

export function InstructorChat({
  context,
  variant = "page",
  storageKey = "general",
  initialMessage,
}: {
  context?: InstructorExerciseContext
  variant?: "page" | "panel"
  storageKey?: string
  /** Optional message to send as soon as the chat opens (e.g. "discuss my debrief"). */
  initialMessage?: string
}) {
  const [turns, setTurns] = useState<Turn[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [ready, setReady] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sentInitial = useRef(false)

  useEffect(() => {
    setTurns(loadThread(storageKey))
    setReady(true)
  }, [storageKey])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [turns, loading])

  const send = useCallback(
    async (text: string) => {
      const content = text.trim().slice(0, 2000)
      if (!content || loading) return
      setError("")
      setInput("")
      const history: Turn[] = [...turns, { role: "user", content }]
      setTurns(history)
      saveThread(storageKey, history)
      setLoading(true)
      try {
        const res = await fetch("/api/instructor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map(({ role, content: c }) => ({ role, content: c })),
            context: context
              ? {
                  slug: context.slug,
                  exercise: context.slug ? undefined : context.exercise,
                  draft: context.getDraft(),
                  submitted: context.submitted,
                }
              : undefined,
          }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          setError(data?.error || "The Chief didn't answer. Try again.")
          return
        }
        const reply = data as InstructorReply
        const next: Turn[] = [
          ...history,
          {
            role: "assistant",
            content: reply.reply,
            lessons: reply.lessons,
            followUps: reply.followUps,
            mode: reply.mode,
            notice: reply.notice,
          },
        ]
        setTurns(next)
        saveThread(storageKey, next)
      } catch {
        setError("Network error — check your connection and try again.")
      } finally {
        setLoading(false)
      }
    },
    [turns, loading, context, storageKey],
  )

  useEffect(() => {
    if (ready && initialMessage && !sentInitial.current) {
      sentInitial.current = true
      void send(initialMessage)
    }
  }, [ready, initialMessage, send])

  function reset() {
    setTurns([])
    setError("")
    saveThread(storageKey, [])
  }

  const starters = context ? PANEL_STARTERS : PAGE_STARTERS
  const lastAssistant = [...turns].reverse().find((t) => t.role === "assistant")
  const isPanel = variant === "panel"

  return (
    <div className={`flex flex-col ${isPanel ? "h-full" : "h-[640px] max-h-[75vh]"} rounded-xl border border-slate-800 bg-slate-900/60`}>
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <ChiefAvatar size={32} />
          <div>
            <p className="text-sm font-semibold text-slate-50">The Chief</p>
            <p className="text-xs text-slate-400">
              {lastAssistant?.mode === "offline" ? "Offline notes" : lastAssistant?.mode === "live" ? "Live instructor" : "AI instructor"}
              {context ? " · can see your current draft" : ""}
            </p>
          </div>
        </div>
        {turns.length > 0 ? (
          <Button variant="ghost" size="sm" onClick={reset} className="text-slate-400 hover:text-slate-200">
            <RotateCcw className="mr-1 h-4 w-4" />
            New chat
          </Button>
        ) : null}
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
        {turns.length === 0 ? (
          <div className="space-y-4">
            <div className="flex gap-3">
              <ChiefAvatar />
              <div className="rounded-lg rounded-tl-none border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                {context
                  ? "I can see the brief pack and your draft. I won't hand you the answers before you submit — but I'll ask the questions an assessor would."
                  : "I explain techniques, question your reasoning and point you at the right lessons. I'm mildly judgemental. It's for your own good."}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {starters.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-200 transition-colors hover:bg-cyan-500/20"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {turns.map((turn, i) =>
          turn.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[85%] whitespace-pre-wrap rounded-lg rounded-tr-none bg-cyan-600/20 px-3 py-2 text-sm text-slate-100 ring-1 ring-cyan-500/30">
                {turn.content}
              </div>
            </div>
          ) : (
            <div key={i} className="flex gap-3">
              <ChiefAvatar />
              <div className="min-w-0 max-w-[90%] space-y-3">
                <div className="rounded-lg rounded-tl-none border border-slate-800 bg-slate-950/60 p-3">
                  <RichText text={turn.content} />
                </div>
                {turn.notice ? <p className="text-xs text-slate-500">{turn.notice}</p> : null}
                {turn.lessons?.length ? (
                  <div className="space-y-1.5">
                    {turn.lessons.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex items-start gap-2 rounded-md border border-slate-800 bg-slate-950/40 px-3 py-2 text-xs hover:border-cyan-500/40"
                      >
                        <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                        <span>
                          <span className="font-medium text-cyan-300">{l.title}</span>
                          <span className="text-slate-400"> — {l.why}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
                {i === turns.length - 1 && turn.followUps?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {turn.followUps.map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => send(f)}
                        disabled={loading}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-200 disabled:opacity-50"
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ),
        )}

        {loading ? (
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <ChiefAvatar />
            <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
            The Chief is consulting the archive…
          </div>
        ) : null}
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
      </div>

      <form
        className="border-t border-slate-800 p-3"
        onSubmit={(e) => {
          e.preventDefault()
          void send(input)
        }}
      >
        <div className="flex items-end gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                void send(input)
              }
            }}
            maxLength={2000}
            rows={2}
            placeholder={context ? "Ask about this exercise, or paste a judgment for a sanity check…" : "Ask about a technique, or paste an assessment for critique…"}
            className="min-h-[52px] resize-none bg-slate-950 text-sm"
            aria-label="Message The Chief"
          />
          <Button type="submit" size="icon" disabled={loading || !input.trim()} aria-label="Send">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          Training only. Don&apos;t paste real case material, personal information or anything classified — messages go to an AI service.
        </p>
      </form>
    </div>
  )
}
