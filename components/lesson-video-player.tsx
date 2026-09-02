"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Film, Lock } from "lucide-react"
import { resolveLessonVideoSlug } from "@/data/lesson-blob-videos"
import { LESSON_VIDEO_LOCK_COPY } from "@/lib/lesson-video-access"
import { Button } from "@/components/ui/button"

type LessonStatus = {
  slug: string
  title: string
  uploaded: boolean
  allowed: boolean
}

type PlayerState =
  | { kind: "hidden" }
  | { kind: "loading" }
  | { kind: "comingSoonish"; title: string }
  | { kind: "locked"; title: string }
  | { kind: "ready"; title: string; url: string }
  | { kind: "error"; title: string; message: string }

function slugFromPath(pathname: string | null): string | null {
  if (!pathname) return null
  const topic = pathname.match(/^\/topics\/([^/]+)/)
  if (topic?.[1]) return topic[1]
  const nested = pathname.match(/^\/learning-paths\/[^/]+\/([^/]+)/)
  return nested?.[1] ?? null
}

export function LessonVideoPlayer({ slug }: { slug?: string }) {
  const pathname = usePathname()
  const resolved = resolveLessonVideoSlug(slug ?? slugFromPath(pathname))
  const [state, setState] = useState<PlayerState>(resolved ? { kind: "loading" } : { kind: "hidden" })

  useEffect(() => {
    if (!resolved) {
      setState({ kind: "hidden" })
      return
    }

    let cancelled = false

    async function load() {
      setState({ kind: "loading" })
      try {
        const statusRes = await fetch(`/api/lesson-videos/${resolved}`)
        if (statusRes.status === 404) {
          if (!cancelled) setState({ kind: "hidden" })
          return
        }
        if (!statusRes.ok) {
          throw new Error("Status check failed")
        }
        const status = (await statusRes.json()) as LessonStatus
        if (!status.uploaded) {
          if (!cancelled) setState({ kind: "comingSoonish", title: status.title })
          return
        }
        if (!status.allowed) {
          if (!cancelled) setState({ kind: "locked", title: status.title })
          return
        }

        const playRes = await fetch(`/api/lesson-videos/${resolved}/playback`)
        const playBody = await playRes.json().catch(() => ({}))
        if (!playRes.ok || typeof playBody.url !== "string") {
          if (!cancelled) {
            setState({
              kind: "error",
              title: status.title,
              message: playBody.error || "The vault declined the request. Try again in a minute.",
            })
          }
          return
        }
        if (!cancelled) setState({ kind: "ready", title: status.title, url: playBody.url })
      } catch {
        if (!cancelled) {
          setState({
            kind: "error",
            title: "Lesson video",
            message: "Could not reach the vault. The written lesson below is still open.",
          })
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [resolved])

  if (state.kind === "hidden") return null

  return (
    <section className="mb-8" aria-label="Video Lessons">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium">Video Lessons</h3>
        <p className="text-xs text-muted-foreground">
          $19 video plan. Written lesson stays free. Humor stays on.
        </p>
      </div>
      {state.kind === "comingSoonish" && (
        <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-5 py-6">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400/90">Video Lessons</p>
          <h4 className="mt-2 text-xl font-semibold text-white">Coming Soonish</h4>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            No private reel for this slug yet. When Darrin drops{" "}
            <code className="text-xs">{resolved}-lesson-16x9.mp4</code> into the vault, it plays
            here. This is not a fake player and it is not a path intro.
          </p>
        </div>
      )}
      {state.kind !== "comingSoonish" && (
        <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
          {state.kind === "loading" && (
            <FrameCopy
              icon={<Film className="h-8 w-8 text-amber-400" />}
              eyebrow="Vault check"
              title="Checking the lesson reel"
              body="Don't refresh like it's a stakeout. If the mp4 is in storage and your badge clears, it plays here — not on YouTube, and not in the path-intro slot."
            />
          )}
          {state.kind === "locked" && (
            <FrameCopy
              icon={<Lock className="h-8 w-8 text-amber-400" />}
              eyebrow="Locked reel"
              title={LESSON_VIDEO_LOCK_COPY}
              body="Only the $19 video plan unlocks lesson videos. Free, $5, and $10 stay written-only. Checkout isn't live. Join the waitlist — no card required today."
            >
              <Button asChild className="mt-4 bg-black text-white hover:bg-yellow-500 hover:text-black">
                <Link href="/waitlist">Join the waitlist</Link>
              </Button>
            </FrameCopy>
          )}
          {state.kind === "error" && (
            <FrameCopy
              icon={<Lock className="h-8 w-8 text-slate-300" />}
              eyebrow="Hold"
              title={state.title}
              body={state.message}
            />
          )}
          {state.kind === "ready" && (
            <video
              className="h-full w-full bg-black"
              controls
              playsInline
              preload="metadata"
              src={state.url}
              aria-label={`${state.title} lesson video`}
            />
          )}
        </div>
      )}
    </section>
  )
}

function FrameCopy({
  icon,
  eyebrow,
  title,
  body,
  children,
}: {
  icon: React.ReactNode
  eyebrow: string
  title: string
  body: string
  children?: ReactNode
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(39,39,42,0.9),_rgba(9,9,11,1))] p-6">
      <div className="max-w-lg text-center text-slate-100">
        <div className="mb-3 flex justify-center">{icon}</div>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-400/90">{eyebrow}</p>
        <h4 className="mt-2 text-xl font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-slate-300">{body}</p>
        {children}
      </div>
    </div>
  )
}
