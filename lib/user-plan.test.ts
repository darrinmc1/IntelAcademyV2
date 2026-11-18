import { describe, expect, it } from "vitest"
import {
  USER_PLAN_LABELS,
  USER_PLANS,
  VIDEO_PLAN,
  isUserPlan,
  normalizeUserPlan,
  planIncludesVideo,
} from "@/lib/user-plan"

describe("USER_PLANS", () => {
  it("stores free / early / pro / video with video as the only video entitlement", () => {
    expect([...USER_PLANS]).toEqual(["free", "early", "pro", "video"])
    expect(VIDEO_PLAN).toBe("video")
    expect(USER_PLAN_LABELS.free).toBe("Free account")
    expect(USER_PLAN_LABELS.early).toBe("Early account")
    expect(USER_PLAN_LABELS.pro).toBe("Normal plan")
    expect(USER_PLAN_LABELS.video).toBe("Video plan")
    expect(JSON.stringify(USER_PLAN_LABELS)).not.toMatch(/\$/)
  })

  it("normalizes unknown values to free and only treats video as video", () => {
    expect(isUserPlan("video")).toBe(true)
    expect(isUserPlan("normal")).toBe(false)
    expect(normalizeUserPlan("video")).toBe("video")
    expect(normalizeUserPlan("pro")).toBe("pro")
    expect(normalizeUserPlan("early")).toBe("early")
    expect(normalizeUserPlan("normal")).toBe("free")
    expect(normalizeUserPlan("explorer")).toBe("free")
    expect(planIncludesVideo("video")).toBe(true)
    expect(planIncludesVideo("early")).toBe(false)
    expect(planIncludesVideo("pro")).toBe(false)
    expect(planIncludesVideo("free")).toBe(false)
  })
})
