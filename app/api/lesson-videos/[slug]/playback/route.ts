import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getUserPlan } from "@/lib/db"
import { getLessonVideoEntry } from "@/data/lesson-blob-videos"
import { decideLessonVideoPlayback } from "@/lib/lesson-video-access"
import {
  BLOB_TOKEN_MISSING_MESSAGE,
  LESSON_VIDEO_SIGNED_URL_TTL_MS,
  createLessonVideoSignedUrl,
  isLessonVideoUploaded,
} from "@/lib/lesson-video-blob"
import { getClientIp, rateLimit } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"

/**
 * Issues a short-lived signed GET URL after an access check.
 * Free / signed-out / early / written callers get 401/403 with no blob URL in the body.
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  const user = await getCurrentUser()
  const ip = getClientIp(request)
  const rateKey = `lesson-video-playback:${user?.id || ip}`
  const limited = rateLimit(rateKey, 20, 60_000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: "Too many playback requests. Try again shortly." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    )
  }

  const entry = getLessonVideoEntry(slug)
  let plan = user?.plan
  if (user) {
    try {
      plan = await getUserPlan(user.id)
    } catch {
      // fall back to session plan
    }
  }

  const uploaded = entry ? await isLessonVideoUploaded(entry.slug) : false
  const decision = decideLessonVideoPlayback({
    slugKnown: !!entry,
    uploaded,
    user: user ? { role: user.role, plan } : null,
  })

  if (decision.status !== 200) {
    return NextResponse.json({ error: decision.error }, { status: decision.status })
  }

  try {
    const url = await createLessonVideoSignedUrl(entry!.pathname)
    return NextResponse.json({
      url,
      expiresIn: Math.floor(LESSON_VIDEO_SIGNED_URL_TTL_MS / 1000),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not sign playback URL"
    const isConfig = message.includes("BLOB_READ_WRITE_TOKEN")
    return NextResponse.json(
      { error: isConfig ? BLOB_TOKEN_MISSING_MESSAGE : "Playback unavailable" },
      { status: isConfig ? 503 : 500 }
    )
  }
}
