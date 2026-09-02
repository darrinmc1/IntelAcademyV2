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
import { USER_PLAN_LABELS } from "@/lib/user-plan"
import { learningPaths } from "@/data/learning-paths"
import siteConfig from "@/config/site-config.json"

const LIVE_PRICE_LEAK =
  /\$\s*(0|5|9|10|19|23|29|47)|\$0\/mo|Explorer \$|Enterprise \$|Analyst \$|Professional \$|pro_monthly|9\.99/i

function publicSurfaces(): string[] {
  const pricing = getParseablePricing()
  return [
    PRICE_MAP_LABEL,
    PRICE_MAP_DETAIL,
    CHECKOUT_STATUS,
    REFUND_POLICY,
    JSON.stringify(pricing),
    JSON.stringify(plans),
    JSON.stringify(USER_PLAN_LABELS),
    buildLlmTxt(),
    JSON.stringify(pricingJsonLd()),
    JSON.stringify(softwareJsonLd()),
    academyBriefFaqs.map((f) => `${f.question} ${f.answer}`).join(" "),
    JSON.stringify(siteConfig),
  ]
}

describe("public access copy (no live prices)", () => {
  it("keeps plan ids and video entitlement without printing dollar amounts", () => {
    expect(PRICE_MAP_LABEL.toLowerCase()).toContain("free")
    expect(PRICE_MAP_LABEL.toLowerCase()).toMatch(/coming soon|waitlist/)
    expect(plans.map((p) => [p.id, p.userPlan, p.includesVideo])).toEqual([
      ["free", "free", false],
      ["early", "early", false],
      ["normal", "pro", false],
      ["video", "video", true],
    ])
    expect(plans.find((p) => p.id === "early")?.description.toLowerCase()).toContain("no video")
    expect(plans.find((p) => p.id === "normal")?.description.toLowerCase()).toContain("no video")
    expect(plans.find((p) => p.id === "normal")?.description.toLowerCase()).toContain("written")
    expect(plans.find((p) => p.id === "video")?.description.toLowerCase()).toMatch(/written/)
    expect(plans.find((p) => p.id === "video")?.description.toLowerCase()).toMatch(/video/)
    expect(PRICE_MAP_DETAIL.toLowerCase()).toContain("written")
    expect(PRICE_MAP_DETAIL.toLowerCase()).toContain("video")
    for (const plan of plans) {
      expect(plan).not.toHaveProperty("price")
      expect(plan).not.toHaveProperty("priceLabel")
    }
  })

  it("does not publish a standalone Brief SKU, leftover SaaS map, or live prices", () => {
    const pricing = getParseablePricing()
    const blob = JSON.stringify(pricing)
    expect(pricing).not.toHaveProperty("standalone")
    expect(blob).not.toMatch(LIVE_PRICE_LEAK)
    expect(plans).toHaveLength(4)
    expect(pricing.map).toBe(PRICE_MAP_LABEL)
    expect(pricing.labels.written).toMatch(/written only, no video/)
    expect(pricing.labels.video).toMatch(/written \+ video/)
    expect(pricing.userPlans).toEqual(["free", "early", "pro", "video"])
    expect(pricing.userPlanLabels.video.toLowerCase()).toContain("video")
    expect(pricing.userPlanLabels.video).not.toMatch(/\$/)
    expect(pricing.plans.map((p) => p.userPlan)).toEqual(["free", "early", "pro", "video"])
    expect(pricing.plans.every((p) => !("price" in p))).toBe(true)
    expect(pricing).not.toHaveProperty("labels.5")
    expect(pricing.labels).not.toHaveProperty("5")
    expect(pricing.labels).not.toHaveProperty("10")
    expect(pricing.labels).not.toHaveProperty("19")
  })

  it("keeps paid CTAs on the waitlist and states checkout is not live", () => {
    expect(plans.filter((p) => !p.available).every((p) => p.href === "/waitlist")).toBe(true)
    expect(getParseablePricing().paymentsLive).toBe(false)
    expect(getParseablePricing().checkout).toBe("waitlist")
    expect(getParseablePricing().stripe).toBe(false)
    expect(CHECKOUT_STATUS.toLowerCase()).toContain("checkout isn't live")
  })

  it("uses one refund sentence and one support email, with no dollar amounts", () => {
    expect(REFUND_POLICY.toLowerCase()).toContain("7-day")
    expect(REFUND_POLICY).not.toMatch(/\$/)
    expect(getParseablePricing().refundPolicy).toBe(REFUND_POLICY)
    expect(SUPPORT_EMAIL).toBe("info@theintelanalystacademy.com")
  })

  it("keeps FAQ, llm.txt, JSON-LD, and site-config off live prices", () => {
    const llm = buildLlmTxt()
    const jsonLd = JSON.stringify(pricingJsonLd())
    const software = JSON.stringify(softwareJsonLd())
    const faq = academyBriefFaqs.map((f) => f.answer).join(" ")
    for (const text of publicSurfaces()) {
      expect(text).not.toMatch(LIVE_PRICE_LEAK)
      expect(text).not.toMatch(/\$\d/)
      expect(text.toLowerCase()).not.toMatch(/first intelligence product/)
    }
    expect(llm).toContain(PRICE_MAP_LABEL)
    expect(llm).toContain(REFUND_POLICY)
    expect(jsonLd).toContain(PRICE_MAP_LABEL)
    expect(jsonLd).not.toMatch(/"price"\s*:/)
    expect(software).not.toMatch(/"price"\s*:/)
    expect(faq).toContain(REFUND_POLICY)
    expect(faq.toLowerCase()).toMatch(/waitlist/)
    expect(JSON.stringify(siteConfig.pricing)).not.toMatch(/9\.99|99\.00|49\.00|199\.00|29\.00/)
    expect(JSON.stringify(siteConfig)).not.toMatch(/stripePriceId/)
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
