import type { UserRole } from "@/lib/auth"
import { PATH_INTRO_LOCK_COPY } from "@/lib/path-intro-copy"
import { planIncludesVideo } from "@/lib/user-plan"

export { PATH_INTRO_LOCK_COPY } from "@/lib/path-intro-copy"

export type PathIntroViewer = {
  role?: UserRole | string | null
  plan?: string | null
} | null

/**
 * Path intros are video. Only admin or the stored $19 `video` plan can play.
 * Free / early ($5) / pro ($10) are written only. Editor/moderator do not unlock.
 */
export function canPlayPathIntro(user: PathIntroViewer): boolean {
  if (!user) return false
  if (user.role === "admin") return true
  return planIncludesVideo(user.plan)
}

export function canUploadPathIntro(user: PathIntroViewer): boolean {
  if (!user) return false
  return user.role === "admin"
}

export type PlaybackDecision =
  | { status: 404; error: string }
  | { status: 401; error: string }
  | { status: 403; error: string }
  | { status: 200 }

export function decidePathIntroPlayback(input: {
  slugKnown: boolean
  uploaded: boolean
  user: PathIntroViewer
}): PlaybackDecision {
  if (!input.slugKnown) {
    return { status: 404, error: "Unknown path intro" }
  }
  if (!input.uploaded) {
    return { status: 404, error: "Intro video not uploaded yet" }
  }
  if (!input.user) {
    return { status: 401, error: "Sign in to play path intros" }
  }
  if (!canPlayPathIntro(input.user)) {
    return {
      status: 403,
      error: `${PATH_INTRO_LOCK_COPY}. Checkout isn't live — join the waitlist.`,
    }
  }
  return { status: 200 }
}

export function authorizePathIntroUpload(user: PathIntroViewer): {
  ok: boolean
  status: number
  error?: string
} {
  if (!user) {
    return { ok: false, status: 401, error: "Authentication required" }
  }
  if (!canUploadPathIntro(user)) {
    return { ok: false, status: 403, error: "Forbidden: admin access required" }
  }
  return { ok: true, status: 200 }
}
