export const USER_PLANS = ["free", "early", "pro", "video"] as const

export type UserPlan = (typeof USER_PLANS)[number]

/** Stored entitlement that unlocks path-intro and lesson-video playback. */
export const VIDEO_PLAN: UserPlan = "video"

/**
 * Signup / waitlist labels for the stored USER_PLANS field.
 * Catalog ids in pricing.json use `normal` for $10; the stored plan is `pro`.
 */
export const USER_PLAN_LABELS: Record<UserPlan, string> = {
  free: "Free — written lessons, no video",
  early: "$5 waitlist / early — written, no video",
  pro: "$10 — written, no video",
  video: "$19 — written + video",
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
