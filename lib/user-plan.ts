export const USER_PLANS = ["free", "early", "pro"] as const

export type UserPlan = (typeof USER_PLANS)[number]

export function normalizeUserPlan(value: unknown): UserPlan {
  if (value === "early" || value === "pro" || value === "free") return value
  return "free"
}

export function isUserPlan(value: unknown): value is UserPlan {
  return value === "free" || value === "early" || value === "pro"
}
