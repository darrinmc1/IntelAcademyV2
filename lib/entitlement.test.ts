import { describe, expect, it } from "vitest"
import { normalizeEntitlement, planForEntitlement } from "@/lib/entitlement"

describe("entitlement", () => {
  it("defaults to free and keeps early/pro as written library", () => {
    expect(normalizeEntitlement(undefined, undefined)).toBe("free")
    expect(normalizeEntitlement("nope", "free")).toBe("free")
    expect(normalizeEntitlement(null, "early")).toBe("written_library")
    expect(normalizeEntitlement(null, "pro")).toBe("written_library")
    expect(normalizeEntitlement(null, "video")).toBe("video")
    expect(normalizeEntitlement("path_pack", "free")).toBe("path_pack")
  })

  it("maps video entitlement onto the legacy video plan and nothing else", () => {
    expect(planForEntitlement("video")).toBe("video")
    expect(planForEntitlement("written_library")).toBe("pro")
    expect(planForEntitlement("path_pack")).toBe("pro")
    expect(planForEntitlement("free")).toBe("free")
  })
})
