import type { UserRole } from "@/lib/auth"
import { PATH_INTRO_LOCK_COPY } from "@/lib/path-intro-copy"
import { planIncludesVideo } from "@/lib/user-plan"

export const LESSON_VIDEO_LOCK_COPY = PATH_INTRO_LOCK_COPY

export type LessonVideoViewer = {
  role?: UserRole | string | null
  plan?: string | null
} | null

/**
 * Lesson videos are video-plan only — same rule as canPlayPathIntro.
 * Admin or stored plan === `video`. Free / early / pro stay written.
 * Editor/moderator do not unlock. Checkout isn't live — no dollar amounts in copy.
 */
export function canPlayLessonVideo(user: LessonVideoViewer): boolean {
  if (!user) return false
  if (user.role === "admin") return true
  return planIncludesVideo(user.plan)
}

export function canUploadLessonVideo(user: LessonVideoViewer): boolean {
  if (!user) return false
  return user.role === "admin"
}

export type LessonVideoPlaybackDecision =
  | { status: 404; error: string }
  | { status: 401; error: string }
  | { status: 403; error: string }
  | { status: 200 }

export function decideLessonVideoPlayback(input: {
  slugKnown: boolean
  uploaded: boolean
  user: LessonVideoViewer
}): LessonVideoPlaybackDecision {
  if (!input.slugKnown) {
    return { status: 404, error: "Unknown lesson video" }
  }
  if (!input.uploaded) {
    return { status: 404, error: "Lesson video not uploaded yet" }
  }
  if (!input.user) {
    return { status: 401, error: "Sign in to play lesson videos" }
  }
  if (!canPlayLessonVideo(input.user)) {
    return {
      status: 403,
      error: `${LESSON_VIDEO_LOCK_COPY}. Checkout isn't live — join the waitlist.`,
    }
  }
  return { status: 200 }
}

export function authorizeLessonVideoUpload(user: LessonVideoViewer): {
  ok: boolean
  status: number
  error?: string
} {
  if (!user) {
    return { ok: false, status: 401, error: "Authentication required" }
  }
  if (!canUploadLessonVideo(user)) {
    return { ok: false, status: 403, error: "Forbidden: admin access required" }
  }
  return { ok: true, status: 200 }
}
