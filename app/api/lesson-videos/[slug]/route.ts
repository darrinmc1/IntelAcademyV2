import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getUserPlan } from "@/lib/db"
import { getLessonVideoEntry } from "@/data/lesson-blob-videos"
import { canPlayLessonVideo } from "@/lib/lesson-video-access"
import { isLessonVideoUploaded } from "@/lib/lesson-video-blob"
import { getClientIp, rateLimit } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"

/**
 * Status only — never returns a blob or signed URL.
 * Used by LessonVideoPlayer to pick coming-soonish / locked / playable.
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  const ip = getClientIp(request)
  const limited = rateLimit(`lesson-video-status:${ip}`, 60, 60_000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    )
  }

  const entry = getLessonVideoEntry(slug)
  if (!entry) {
    return NextResponse.json({ error: "Unknown lesson video" }, { status: 404 })
  }

  const user = await getCurrentUser()
  let plan = user?.plan
  if (user) {
    try {
      plan = await getUserPlan(user.id)
    } catch {
      // JWT plan is enough if the DB lookup fails
    }
  }

  const allowed = canPlayLessonVideo(user ? { role: user.role, plan } : null)
  const uploaded = await isLessonVideoUploaded(entry.slug)

  return NextResponse.json({
    slug: entry.slug,
    title: entry.title,
    filename: entry.filename,
    uploaded,
    allowed,
  })
}
