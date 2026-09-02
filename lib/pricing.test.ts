import { describe, expect, it } from "vitest"
import {
  CHECKOUT_STATUS,
  PRICE_MAP_DETAIL,
  PRICE_MAP_LABEL,
  REFUND_POLICY,
  SUPPORT_EMAIL,
  getParseablePricing,
  plans,
} from "@/lib/pricing"
import { academyBriefFaqs, buildLlmTxt, pricingJsonLd, softwareJsonLd } from "@/lib/aeo"
import { learningPaths } from "@/data/learning-paths"

describe("four-price Intel map", () => {
  it("exposes Free / $5 / $10 / $19 with exact entitlements", () => {
    expect(PRICE_MAP_LABEL).toBe("Free / $5 / $10 / $19")
    expect(plans.map((p) => [p.id, p.price, p.includesVideo])).toEqual([
      ["free", 0, false],
      ["early", 5, false],
      ["normal", 10, false],
      ["video", 19, true],
    ])
    expect(plans.find((p) => p.id === "early")?.description.toLowerCase()).toContain("no video")
    expect(plans.find((p) => p.id === "normal")?.description.toLowerCase()).toContain("no video")
    expect(plans.find((p) => p.id === "normal")?.description.toLowerCase()).toContain("written")
    expect(plans.find((p) => p.id === "video")?.description.toLowerCase()).toMatch(/written/)
    expect(plans.find((p) => p.id === "video")?.description.toLowerCase()).toMatch(/video/)
    expect(PRICE_MAP_DETAIL.toLowerCase()).toContain("written only, no video")
    expect(PRICE_MAP_DETAIL).toContain("$10 = normal price — written only, no video")
    expect(PRICE_MAP_DETAIL).toContain("$19 = written + video")
  })

  it("does not publish a standalone Brief SKU or leftover maps", () => {
    const pricing = getParseablePricing()
    const blob = JSON.stringify(pricing)
    expect(pricing).not.toHaveProperty("standalone")
    expect(blob).not.toMatch(/29/)
    expect(blob).not.toMatch(/Explorer|Enterprise|Analyst \$|Professional/)
    expect(plans).toHaveLength(4)
    expect(pricing.map).toBe(PRICE_MAP_LABEL)
    expect(pricing.labels["10"]).toMatch(/written only, no video/)
    expect(pricing.labels["19"]).toBe("written + video")
  })

  it("keeps paid CTAs on the waitlist and states checkout is not live", () => {
    expect(plans.filter((p) => !p.available).every((p) => p.href === "/waitlist")).toBe(true)
    expect(getParseablePricing().paymentsLive).toBe(false)
    expect(getParseablePricing().checkout).toBe("waitlist")
    expect(getParseablePricing().stripe).toBe(false)
    expect(CHECKOUT_STATUS.toLowerCase()).toContain("checkout isn't live")
  })

  it("uses one 7-day refund sentence and one support email", () => {
    expect(REFUND_POLICY).toBe("7-day money-back on paid $5, $10, and $19.")
    expect(getParseablePricing().refundPolicy).toBe(REFUND_POLICY)
    expect(SUPPORT_EMAIL).toBe("info@theintelanalystacademy.com")
  })

  it("keeps FAQ, llm.txt, and JSON-LD on the same map", () => {
    const llm = buildLlmTxt()
    const jsonLd = JSON.stringify(pricingJsonLd())
    const software = JSON.stringify(softwareJsonLd())
    const faq = academyBriefFaqs.map((f) => f.answer).join(" ")
    for (const text of [llm, jsonLd, software, faq]) {
      expect(text).not.toMatch(/\$29/)
      expect(text).not.toMatch(/standalone \$/)
      expect(text.toLowerCase()).not.toMatch(/explorer \$|saas pro|business \$/)
      expect(text.toLowerCase()).not.toMatch(/first intelligence product/)
    }
    expect(llm).toContain(PRICE_MAP_LABEL)
    expect(llm).toContain(REFUND_POLICY)
    expect(jsonLd).toContain(PRICE_MAP_LABEL)
    expect(faq).toContain(REFUND_POLICY)
    expect(faq).toContain("written only, no video")
  })
})

describe("honest learning-path topic counts", () => {
  it("prints counted hrefs on featured cards, not 12/15/18 wish numbers", () => {
    const byId = Object.fromEntries(learningPaths.map((p) => [p.id, p.topicCount]))
    expect(byId.foundations).toBe(5)
    expect(byId["strategic-intelligence"]).toBe(11)
    expect(byId.osint).toBe(3)
    expect(byId["report-writing"]).toBe(21)
    expect(byId["threat-assessment"]).toBe(14)
    expect(byId["analyst-notebook"]).toBe(18)
  })
})
