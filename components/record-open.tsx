"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { markLessonViewed } from "@/lib/user-store"

/** Records what a signed-in account opens. Anonymous visits stay in the browser until signup. */
export function RecordOpen() {
  const pathname = usePathname()
  const { isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) return
    const topic = pathname.match(/^\/topics\/([^/]+)/)?.[1]
    if (topic) markLessonViewed(topic)

    // Signed-out visitors have no session to attach a view to. Calling the
    // endpoint anyway returns 401 and logs a console error on public pages.
    if (isLoading || !isAuthenticated) return

    fetch("/api/auth/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: pathname }),
    }).catch(() => {})
  }, [pathname, isAuthenticated, isLoading])

  return null
}
