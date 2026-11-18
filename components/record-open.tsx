"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { markLessonViewed } from "@/lib/user-store"

/** Records what a signed-in account opens. Anonymous visits stay in the browser until signup. */
export function RecordOpen() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) return
    const topic = pathname.match(/^\/topics\/([^/]+)/)?.[1]
    if (topic) markLessonViewed(topic)

    fetch("/api/auth/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: pathname }),
    }).catch(() => {})
  }, [pathname])

  return null
}
