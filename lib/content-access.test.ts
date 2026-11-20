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
      lessonAccess({ slug: "intelligence-report-fundamentals", signedIn: false, entitlement: "free" }),
    ).toBe("need_account")
    expect(lessonAccess({ slug: "osint-techniques", signedIn: false, entitlement: "free" })).toBe("coming_soon")
  })

  it("lets a free account read the three published sample lessons only", () => {
    expect(lessonAccess({ ...freeUser, slug: "intelligence-report-fundamentals" })).toBe("allow")
    expect(lessonAccess({ ...freeUser, slug: "introduction-to-link-analysis" })).toBe("allow")
    expect(lessonAccess({ ...freeUser, slug: "intelligence-failures" })).toBe("allow")
    expect(lessonAccess({ ...freeUser, slug: "osint-techniques" })).toBe("coming_soon")
  })

  it("lets the normal plan read the rest of the lessons", () => {
    expect(lessonAccess({ ...freeUser, slug: "osint-techniques", entitlement: "normal" })).toBe("allow")
  })

  it("lets staff read every lesson", () => {
    expect(
      lessonAccess({ slug: "osint-techniques", signedIn: true, entitlement: "free", role: "admin" }),
    ).toBe("allow")
  })
})

describe("download access", () => {
  it("keeps the two free PDFs behind an account and the rest behind a pack or the normal plan", () => {
    expect(downloadAccess({ ...freeUser, signedIn: false, fileName: "cognitive-bias-checklist.pdf" })).toBe(
      "need_account",
    )
    expect(downloadAccess({ ...freeUser, fileName: "cognitive-bias-checklist.pdf" })).toBe("allow")
    expect(downloadAccess({ ...freeUser, fileName: "osint-collection-checklist.pdf" })).toBe("coming_soon")
    expect(
      downloadAccess({
        ...freeUser,
        fileName: "osint-collection-checklist.pdf",
        packs: ["cheatsheets"],
      }),
    ).toBe("allow")
    expect(
      downloadAccess({
        ...freeUser,
        fileName: "collection-plan-template.xlsx",
        packs: ["cheatsheets"],
      }),
    ).toBe("coming_soon")
    expect(
      downloadAccess({
        fileName: "intelligence-primer-handbook.pdf",
        signedIn: true,
        entitlement: "normal",
      }),
    ).toBe("allow")
  })

  it("rejects path tricks and unknown files", () => {
    expect(safeDownloadName("../secret.pdf")).toBe("")
    expect(safeDownloadName("estimative-language-dictionary.pdf")).toBe("estimative-language-dictionary.pdf")
    expect(downloadAccess({ ...freeUser, fileName: "not-a-real-file.pdf", entitlement: "normal" })).toBe(
      "coming_soon",
    )
  })
})
