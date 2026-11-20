import { describe, expect, it } from "vitest"
import { ENTITLEMENTS, normalizeEntitlement, normalizePacks, packIdsMatchPricedPacks } from "@/lib/entitlement"

describe("entitlement", () => {
  it("defaults to free and keeps early, pro, and video as the normal plan", () => {
    expect(normalizeEntitlement(undefined, undefined)).toBe("free")
    expect(normalizeEntitlement("nope", "free")).toBe("free")
    expect(normalizeEntitlement(null, "early")).toBe("normal")
    expect(normalizeEntitlement(null, "pro")).toBe("normal")
    expect(normalizeEntitlement(null, "video")).toBe("normal")
    expect(normalizeEntitlement("free", "pro")).toBe("free")
    expect(normalizeEntitlement("normal", "free")).toBe("normal")
  })

  it("keeps one monthly entitlement and the three collection packs", () => {
    expect(ENTITLEMENTS).toEqual(["free", "normal"])
    expect(normalizePacks("cheatsheets, guides, nope, cheatsheets")).toEqual(["cheatsheets", "guides"])
    expect(normalizePacks(["templates", "path_pack"])).toEqual(["templates"])
    expect(packIdsMatchPricedPacks()).toBe(true)
  })
})
