import { collectionPacks } from "@/lib/pricing"
import { normalizeUserPlan } from "@/lib/user-plan"

/**
 * Stored lesson access. One monthly plan, plus the collection packs already
 * priced on main. No path pack, written-library, or video price.
 * Video playback still reads the existing plan column.
 */
export const ENTITLEMENTS = ["free", "normal"] as const

export type Entitlement = (typeof ENTITLEMENTS)[number]

export const PACK_IDS = ["cheatsheets", "templates", "guides"] as const

export type PackId = (typeof PACK_IDS)[number]

export const ENTITLEMENT_LABELS: Record<Entitlement, string> = {
  free: "Free account",
  normal: "Normal plan",
}

export function isEntitlement(value: unknown): value is Entitlement {
  return value === "free" || value === "normal"
}

export function isPackId(value: unknown): value is PackId {
  return (PACK_IDS as readonly string[]).includes(String(value))
}

export function packIdsMatchPricedPacks(): boolean {
  return collectionPacks.map((pack) => pack.id).join(",") === PACK_IDS.join(",")
}

/**
 * Prefer an explicit entitlement. Older rows only have plan
 * (free / early / pro / video). early, pro, and video keep lesson access
 * until an entitlement is stored. Video playback is unchanged.
 */
export function normalizeEntitlement(value: unknown, legacyPlan?: unknown): Entitlement {
  if (isEntitlement(value)) return value
  const plan = normalizeUserPlan(legacyPlan)
  if (plan === "pro" || plan === "early" || plan === "video") return "normal"
  return "free"
}

export function normalizePacks(value: unknown): PackId[] {
  const raw = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(",")
      : []
  const out: PackId[] = []
  for (const item of raw) {
    const id = String(item).trim()
    if (isPackId(id) && !out.includes(id)) out.push(id)
  }
  return out
}

export function packsToColumn(packs: readonly PackId[]): string {
  return normalizePacks(packs).join(",")
}
