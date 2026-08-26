"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Film, Lock, UploadCloud } from "lucide-react"
import { resolvePathIntroSlug } from "@/data/path-intro-videos"
import { Button } from "@/components/ui/button"

type IntroStatus = {
  slug: string
  title: string
  uploaded: boolean
  allowed: boolean
  durationSeconds: number
}

type PlayerState =
  | { kind: "hidden" }
  | { kind: "loading" }
  | { kind: "missing"; title: string }
  | { kind: "locked"; title: string }
  | { kind: "ready"; title: string; url: string }
  | { kind: "error"; title: string; message: string }

function slugFromPath(pathname: string | null): string | null {
  if (!pathname) return null
  const match = pathname.match(/^\/learning-paths\/([^/]+)/)
  return match?.[1] ?? null
}

export function PathIntroPlayer({ slug }: { slug?: string }) {
  const pathname = usePathname()
  const resolved = resolvePathIntroSlug(slug ?? slugFromPath(pathname))
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
        const statusRes = await fetch(`/api/path-intros/${resolved}`)
        if (statusRes.status === 404) {
          if (!cancelled) setState({ kind: "hidden" })
          return
        }
        if (!statusRes.ok) {
          throw new Error("Status check failed")
        }
        const status = (await statusRes.json()) as IntroStatus
        if (!status.uploaded) {
          if (!cancelled) setState({ kind: "missing", title: status.title })
          return
        }
        if (!status.allowed) {
          if (!cancelled) setState({ kind: "locked", title: status.title })
          return
        }

        const playRes = await fetch(`/api/path-intros/${resolved}/playback`)
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
            title: "Path intro",
            message: "Could not reach the vault. The text lessons below are still open.",
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
    <section className="mb-8" aria-label="Path intro video">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium">Path intro</h3>
        <p className="text-xs text-muted-foreground">~75 seconds. Text lessons stay free.</p>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
        {state.kind === "loading" && (
          <FrameCopy
            icon={<Film className="h-8 w-8 text-amber-400" />}
            eyebrow="Vault check"
            title="Fetching the briefing"
            body="Don't refresh like it's a stakeout. If the reel is in storage and your badge clears, it plays here — not on YouTube."
          />
        )}
        {state.kind === "missing" && (
          <FrameCopy
            icon={<UploadCloud className="h-8 w-8 text-slate-300" />}
            eyebrow="Empty vault"
            title="Intro video not uploaded yet"
            body="No file in private storage for this path. The briefing reel lands when Darrin drops the mp4 — this is not a forever Coming Soon."
          />
        )}
        {state.kind === "locked" && (
          <FrameCopy
            icon={<Lock className="h-8 w-8 text-amber-400" />}
            eyebrow="Above Free"
            title="This reel is on the paid desk"
            body="Path intros ship with Early Adopter ($5/mo) and Pro ($10/mo). Checkout isn't live. Join the waitlist — no card required today."
          >
            <Button asChild className="mt-4 bg-black text-white hover:bg-yellow-500 hover:text-black">
              <Link href="/improvements">Join the waitlist</Link>
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
            aria-label={`${state.title} path intro`}
          />
        )}
      </div>
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
