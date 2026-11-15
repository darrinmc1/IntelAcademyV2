import { describe, expect, it } from "vitest"
import { downloadAccess, lessonAccess, safeDownloadName } from "@/lib/content-access"

const freeUser = {
  signedIn: true,
  entitlement: "free" as const,
  role: "user" as const,
}

describe("lesson access", () => {
  it("asks signed-out visitors to create a free account for the sample", () => {
    expect(
      lessonAccess({ slug: "what-is-intelligence", signedIn: false, entitlement: "free" }),
    ).toBe("need_account")
  })

  it("lets a free account read the three sample lessons only", () => {
    expect(lessonAccess({ ...freeUser, slug: "intelligence-cycle" })).toBe("allow")
    expect(lessonAccess({ ...freeUser, slug: "intelligence-report-fundamentals" })).toBe("allow")
    expect(lessonAccess({ ...freeUser, slug: "osint-techniques" })).toBe("coming_soon")
  })

  it("lets a path pack read that path, and the written library read the rest", () => {
    expect(
      lessonAccess({
        slug: "google-dorking",
        signedIn: true,
        entitlement: "path_pack",
        entitlementPath: "osint",
      }),
    ).toBe("allow")
    expect(
      lessonAccess({
        slug: "google-dorking",
        signedIn: true,
        entitlement: "path_pack",
        entitlementPath: "foundations",
      }),
    ).toBe("coming_soon")
    expect(
      lessonAccess({
        slug: "osint-techniques",
        signedIn: true,
        entitlement: "written_library",
      }),
    ).toBe("allow")
  })

  it("lets staff read every lesson", () => {
    expect(
      lessonAccess({ slug: "osint-techniques", signedIn: true, entitlement: "free", role: "admin" }),
    ).toBe("allow")
  })
})

describe("download access", () => {
  it("keeps the two free PDFs behind an account and the rest behind the library", () => {
    expect(downloadAccess({ ...freeUser, signedIn: false, fileName: "cognitive-bias-checklist.pdf" })).toBe(
      "need_account",
    )
    expect(downloadAccess({ ...freeUser, fileName: "cognitive-bias-checklist.pdf" })).toBe("allow")
    expect(downloadAccess({ ...freeUser, fileName: "osint-collection-checklist.pdf" })).toBe("coming_soon")
    expect(
      downloadAccess({
        fileName: "osint-collection-checklist.pdf",
        signedIn: true,
        entitlement: "written_library",
      }),
    ).toBe("allow")
  })

  it("rejects path tricks", () => {
    expect(safeDownloadName("../secret.pdf")).toBe("")
    expect(safeDownloadName("estimative-language-dictionary.pdf")).toBe("estimative-language-dictionary.pdf")
  })
})
