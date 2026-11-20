"use client"

import { useEffect } from "react"

type UsageEvent = "lesson_view" | "read_time" | "download"

async function postUsage(body: { eventType: UsageEvent; resource: string; seconds?: number }) {
  try {
    await fetch("/api/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    })
  } catch {
    // Usage logging must not interrupt reading.
  }
}

/** Records a lesson view and visible read time for the signed-in user. */
export function UsageTracker({ resource }: { resource: string }) {
  useEffect(() => {
    void postUsage({ eventType: "lesson_view", resource })

    let visible = document.visibilityState === "visible"
    let last = Date.now()
    let pending = 0

    const tick = () => {
      const now = Date.now()
      if (visible) pending += now - last
      last = now
    }

    const flush = () => {
      tick()
      const seconds = Math.round(pending / 1000)
      pending = 0
      if (seconds > 0) void postUsage({ eventType: "read_time", resource, seconds })
    }

    const onVisibility = () => {
      tick()
      visible = document.visibilityState === "visible"
    }

    const interval = window.setInterval(flush, 30_000)
    document.addEventListener("visibilitychange", onVisibility)
    window.addEventListener("pagehide", flush)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("pagehide", flush)
      flush()
    }
  }, [resource])

  return null
}
