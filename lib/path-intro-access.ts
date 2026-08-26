import { isAdminRole, type UserRole } from "@/lib/auth"
import { normalizeUserPlan, type UserPlan } from "@/lib/user-plan"

export type PathIntroViewer = {
  role?: UserRole | string | null
  plan?: UserPlan | string | null
} | null

/**
 * Path intros play for Early Adopter, Pro, and admin-capable staff.
 * Free and signed-out viewers stay locked. Text lessons are not gated here.
 */
export function canPlayPathIntro(user: PathIntroViewer): boolean {
  if (!user) return false
  if (isAdminRole(user.role as UserRole)) return true
  const plan = normalizeUserPlan(user.plan)
  return plan === "early" || plan === "pro"
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
      error: "Path intros are included on Early Adopter and Pro. Checkout isn't live — join the waitlist.",
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
