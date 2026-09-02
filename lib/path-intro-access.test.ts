import { describe, expect, it } from "vitest"
import {
  PATH_INTRO_CATALOG,
  PATH_INTRO_SLUGS,
  getPathIntroEntry,
  isOfficialPathIntroPathname,
  pathIntroPathname,
  resolvePathIntroSlug,
} from "@/data/path-intro-videos"
import {
  PATH_INTRO_LOCK_COPY,
  authorizePathIntroUpload,
  canPlayPathIntro,
  decidePathIntroPlayback,
} from "@/lib/path-intro-access"

const OFFICIAL_SLUGS = [
  "foundations",
  "strategic-intelligence",
  "osint",
  "report-writing",
  "threat-assessment",
  "analyst-notebook",
  "tactical-intelligence",
  "operational-intelligence",
  "crime-series-analysis",
  "hot-spot-analysis",
  "network-analysis",
  "target-profiling",
  "crime-trend-analysis",
  "analytical-techniques",
  "excel-for-analysts",
  "data-collection-planning",
  "intelligence-tools",
  "source-evaluation",
  "digital-intelligence",
  "geospatial-intelligence",
  "intelligence-ethics",
  "cognitive-bias",
  "financial-intelligence",
  "intelligence-communication",
] as const

describe("path intro catalog", () => {
  it("has exactly the official 24 slugs in site order", () => {
    expect(PATH_INTRO_SLUGS).toHaveLength(24)
    expect([...PATH_INTRO_SLUGS]).toEqual([...OFFICIAL_SLUGS])
    expect(PATH_INTRO_CATALOG.map((entry) => entry.slug)).toEqual([...OFFICIAL_SLUGS])
  })

  it("uses the official private blob filename pattern", () => {
    for (const slug of PATH_INTRO_SLUGS) {
      expect(pathIntroPathname(slug)).toBe(`videos/paths/${slug}-path-intro-75s-16x9.mp4`)
    }
    expect(isOfficialPathIntroPathname("videos/paths/foundations-path-intro-75s-16x9.mp4")).toBe(true)
    expect(isOfficialPathIntroPathname("videos/paths/foundations.mp4")).toBe(false)
    expect(isOfficialPathIntroPathname("public/foundations.mp4")).toBe(false)
  })

  it("returns null for an unknown slug", () => {
    expect(getPathIntroEntry("not-a-real-path")).toBeNull()
    expect(resolvePathIntroSlug("not-a-real-path")).toBeNull()
  })
})

describe("path intro playback access", () => {
  it("uses the $19 video lock copy", () => {
    expect(PATH_INTRO_LOCK_COPY).toBe("Included on $19 video")
  })

  it("does not issue a signed URL to a free user", () => {
    const decision = decidePathIntroPlayback({
      slugKnown: true,
      uploaded: true,
      user: { role: "user", plan: "free" },
    })
    expect(decision.status).toBe(403)
    expect("url" in decision).toBe(false)
  })

  it("does not issue a signed URL when signed out", () => {
    const decision = decidePathIntroPlayback({
      slugKnown: true,
      uploaded: true,
      user: null,
    })
    expect(decision.status).toBe(401)
    expect("url" in decision).toBe(false)
  })

  it("allows only the $19 video plan and admin to receive a signed URL", () => {
    const early = decidePathIntroPlayback({
      slugKnown: true,
      uploaded: true,
      user: { role: "user", plan: "early" },
    })
    const pro = decidePathIntroPlayback({
      slugKnown: true,
      uploaded: true,
      user: { role: "user", plan: "pro" },
    })
    expect(early.status).toBe(403)
    expect(pro.status).toBe(403)
    if (early.status === 403) expect(early.error).toContain(PATH_INTRO_LOCK_COPY)
    expect(
      decidePathIntroPlayback({
        slugKnown: true,
        uploaded: true,
        user: { role: "user", plan: "video" },
      }).status
    ).toBe(200)
    expect(
      decidePathIntroPlayback({
        slugKnown: true,
        uploaded: true,
        user: { role: "admin", plan: "free" },
      }).status
    ).toBe(200)
    expect(canPlayPathIntro({ role: "admin", plan: "free" })).toBe(true)
    expect(canPlayPathIntro({ role: "user", plan: "video" })).toBe(true)
    expect(canPlayPathIntro({ role: "user", plan: "early" })).toBe(false)
    expect(canPlayPathIntro({ role: "user", plan: "pro" })).toBe(false)
    expect(canPlayPathIntro({ role: "user", plan: "free" })).toBe(false)
    expect(canPlayPathIntro({ role: "editor", plan: "pro" })).toBe(false)
    expect(canPlayPathIntro({ role: "moderator", plan: "early" })).toBe(false)
  })

  it("returns 404 for an unknown slug and does not include a url", () => {
    const decision = decidePathIntroPlayback({
      slugKnown: false,
      uploaded: false,
      user: { role: "pro", plan: "pro" },
    })
    expect(decision.status).toBe(404)
    expect("url" in decision).toBe(false)
  })
})

describe("path intro upload authorization", () => {
  it("requires an admin-capable role", () => {
    expect(authorizePathIntroUpload(null)).toEqual({
      ok: false,
      status: 401,
      error: "Authentication required",
    })
    expect(authorizePathIntroUpload({ role: "user", plan: "pro" })).toEqual({
      ok: false,
      status: 403,
      error: "Forbidden: admin access required",
    })
    expect(authorizePathIntroUpload({ role: "admin", plan: "free" }).ok).toBe(true)
    expect(authorizePathIntroUpload({ role: "editor", plan: "free" }).ok).toBe(false)
  })
})
