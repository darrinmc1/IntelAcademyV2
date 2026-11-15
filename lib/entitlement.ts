import { normalizeUserPlan, type UserPlan } from "@/lib/user-plan"

/** Stored access. Defaults to free. Stripe is not wired and must not write this yet. */
export const ENTITLEMENTS = ["free", "path_pack", "written_library", "video"] as const

export type Entitlement = (typeof ENTITLEMENTS)[number]

export const ENTITLEMENT_LABELS: Record<Entitlement, string> = {
  free: "Free — 3 sample lessons and 2 PDFs",
  path_pack: "Path Pack — one learning path",
  written_library: "Written Library — current written topics and PDFs",
  video: "Video — playback when a video file exists",
}

export function isEntitlement(value: unknown): value is Entitlement {
  return ENTITLEMENTS.includes(value as Entitlement)
}

/**
 * Prefer the entitlement column. Older rows only have plan
 * (free / early / pro / video). early and pro keep written access.
 */
export function normalizeEntitlement(value: unknown, legacyPlan?: unknown): Entitlement {
  if (isEntitlement(value)) return value
  const plan = normalizeUserPlan(legacyPlan)
  if (plan === "video") return "video"
  if (plan === "pro" || plan === "early") return "written_library"
  return "free"
}

/** Legacy plan column kept so existing video playback checks still work. */
export function planForEntitlement(entitlement: Entitlement): UserPlan {
  if (entitlement === "video") return "video"
  if (entitlement === "written_library" || entitlement === "path_pack") return "pro"
  return "free"
}
