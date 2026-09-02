import { describe, expect, it } from "vitest"
import {
  LESSON_VIDEO_CATALOG,
  LESSON_VIDEO_SLUGS,
  getLessonVideoEntry,
  isOfficialLessonVideoPathname,
  lessonVideoPathname,
  resolveLessonVideoSlug,
} from "@/data/lesson-blob-videos"
import {
  LESSON_VIDEO_LOCK_COPY,
  authorizeLessonVideoUpload,
  canPlayLessonVideo,
  decideLessonVideoPlayback,
} from "@/lib/lesson-video-access"
import { canPlayPathIntro } from "@/lib/path-intro-access"

describe("lesson video catalog", () => {
  it("starts with the first official example slug and filename", () => {
    expect(LESSON_VIDEO_SLUGS[0]).toBe("what-is-intelligence")
    expect(lessonVideoPathname("what-is-intelligence")).toBe(
      "videos/lessons/what-is-intelligence-lesson-16x9.mp4"
    )
    expect(LESSON_VIDEO_CATALOG[0].pathname).toBe(
      "videos/lessons/what-is-intelligence-lesson-16x9.mp4"
    )
  })

  it("uses the official private blob filename pattern", () => {
    for (const slug of LESSON_VIDEO_SLUGS) {
      expect(lessonVideoPathname(slug)).toBe(`videos/lessons/${slug}-lesson-16x9.mp4`)
    }
    expect(isOfficialLessonVideoPathname("videos/lessons/what-is-intelligence-lesson-16x9.mp4")).toBe(
      true
    )
    expect(isOfficialLessonVideoPathname("videos/paths/what-is-intelligence-path-intro-75s-16x9.mp4")).toBe(
      false
    )
    expect(isOfficialLessonVideoPathname("videos/lessons/what-is-intelligence.mp4")).toBe(false)
    expect(isOfficialLessonVideoPathname("public/what-is-intelligence.mp4")).toBe(false)
  })

  it("does not treat utility topic pages as upload slots", () => {
    expect(getLessonVideoEntry("all-topics")).toBeNull()
    expect(getLessonVideoEntry("sample-topic")).toBeNull()
    expect(getLessonVideoEntry("enhanced-3d")).toBeNull()
    expect(getLessonVideoEntry("learning-paths")).toBeNull()
    expect(resolveLessonVideoSlug("not-a-real-lesson")).toBeNull()
  })

  it("does not share the path-intro prefix", () => {
    expect(lessonVideoPathname("what-is-intelligence")).not.toContain("/paths/")
    expect(lessonVideoPathname("what-is-intelligence")).not.toContain("path-intro")
  })
})

describe("lesson video playback access", () => {
  it("uses the same $19 video lock copy as path intros", () => {
    expect(LESSON_VIDEO_LOCK_COPY).toBe("Included on $19 video")
  })

  it("matches canPlayPathIntro: admin or stored video plan only", () => {
    const viewers = [
      { role: "admin", plan: "free" },
      { role: "user", plan: "video" },
      { role: "user", plan: "early" },
      { role: "user", plan: "pro" },
      { role: "user", plan: "free" },
      { role: "editor", plan: "pro" },
      { role: "moderator", plan: "early" },
      null,
    ] as const

    for (const viewer of viewers) {
      expect(canPlayLessonVideo(viewer)).toBe(canPlayPathIntro(viewer))
    }
  })

  it("does not issue a signed URL to a free user", () => {
    const decision = decideLessonVideoPlayback({
      slugKnown: true,
      uploaded: true,
      user: { role: "user", plan: "free" },
    })
    expect(decision.status).toBe(403)
    expect("url" in decision).toBe(false)
  })

  it("does not issue a signed URL when signed out", () => {
    const decision = decideLessonVideoPlayback({
      slugKnown: true,
      uploaded: true,
      user: null,
    })
    expect(decision.status).toBe(401)
    expect("url" in decision).toBe(false)
  })

  it("allows only the $19 video plan and admin to receive a signed URL", () => {
    const early = decideLessonVideoPlayback({
      slugKnown: true,
      uploaded: true,
      user: { role: "user", plan: "early" },
    })
    const pro = decideLessonVideoPlayback({
      slugKnown: true,
      uploaded: true,
      user: { role: "user", plan: "pro" },
    })
    expect(early.status).toBe(403)
    expect(pro.status).toBe(403)
    if (early.status === 403) expect(early.error).toContain(LESSON_VIDEO_LOCK_COPY)
    expect(
      decideLessonVideoPlayback({
        slugKnown: true,
        uploaded: true,
        user: { role: "user", plan: "video" },
      }).status
    ).toBe(200)
    expect(
      decideLessonVideoPlayback({
        slugKnown: true,
        uploaded: true,
        user: { role: "admin", plan: "free" },
      }).status
    ).toBe(200)
    expect(canPlayLessonVideo({ role: "admin", plan: "free" })).toBe(true)
    expect(canPlayLessonVideo({ role: "user", plan: "video" })).toBe(true)
    expect(canPlayLessonVideo({ role: "user", plan: "early" })).toBe(false)
    expect(canPlayLessonVideo({ role: "user", plan: "pro" })).toBe(false)
    expect(canPlayLessonVideo({ role: "user", plan: "free" })).toBe(false)
    expect(canPlayLessonVideo({ role: "editor", plan: "pro" })).toBe(false)
    expect(canPlayLessonVideo({ role: "moderator", plan: "early" })).toBe(false)
  })

  it("returns 404 when the file is missing and does not include a url", () => {
    const decision = decideLessonVideoPlayback({
      slugKnown: true,
      uploaded: false,
      user: { role: "user", plan: "video" },
    })
    expect(decision.status).toBe(404)
    expect("url" in decision).toBe(false)
  })

  it("returns 404 for an unknown slug and does not include a url", () => {
    const decision = decideLessonVideoPlayback({
      slugKnown: false,
      uploaded: false,
      user: { role: "admin", plan: "video" },
    })
    expect(decision.status).toBe(404)
    expect("url" in decision).toBe(false)
  })
})

describe("lesson video upload authorization", () => {
  it("requires an admin-capable role", () => {
    expect(authorizeLessonVideoUpload(null)).toEqual({
      ok: false,
      status: 401,
      error: "Authentication required",
    })
    expect(authorizeLessonVideoUpload({ role: "user", plan: "video" })).toEqual({
      ok: false,
      status: 403,
      error: "Forbidden: admin access required",
    })
    expect(authorizeLessonVideoUpload({ role: "admin", plan: "free" }).ok).toBe(true)
    expect(authorizeLessonVideoUpload({ role: "editor", plan: "free" }).ok).toBe(false)
  })
})
