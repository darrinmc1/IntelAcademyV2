export const USER_PLANS = ["free", "early", "pro", "video"] as const

export type UserPlan = (typeof USER_PLANS)[number]

/** Stored entitlement that unlocks path-intro and lesson-video playback. */
export const VIDEO_PLAN: UserPlan = "video"

/**
 * Stored entitlement labels. Dollar amounts live only in lib/pricing.ts.
 * Catalog id `normal` maps to stored `pro`. Video playback stays on `video`.
 */
export const USER_PLAN_LABELS: Record<UserPlan, string> = {
  free: "Free account",
  early: "Early account",
  pro: "Normal plan",
  video: "Video plan",
}

export function isUserPlan(value: unknown): value is UserPlan {
  return USER_PLANS.includes(value as UserPlan)
}

export function normalizeUserPlan(value: unknown): UserPlan {
  if (isUserPlan(value)) return value
  return "free"
}

export function planIncludesVideo(plan: unknown): boolean {
  return normalizeUserPlan(plan) === VIDEO_PLAN
}
