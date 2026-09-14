import { readFileSync } from "node:fs"
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

const LEFTOVER_THEATRE =
  /\$\s*(23|29|47|59)|Explorer \$|Enterprise \$|Analyst \$|Professional \$|Start Analyst|Go Professional|pro_monthly|9\.99|stripePriceId/i

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

describe("canonical Intel price map (Free / $5 / $10 / $19)", () => {
  it("exposes Free / $5 / $10 / $19 with exact entitlements", () => {
    expect(PRICE_MAP_LABEL).toBe("Free / $5 / $10 / $19")
    expect(plans.map((p) => [p.id, p.userPlan, p.price, p.includesVideo])).toEqual([
      ["free", "free", 0, false],
      ["early", "early", 5, false],
      ["normal", "pro", 10, false],
      ["video", "video", 19, true],
    ])
    expect(plans.map((p) => p.priceLabel)).toEqual(["$0", "$5", "$10", "$19"])
    expect(plans.find((p) => p.id === "early")?.name.toLowerCase()).toContain("early")
    expect(plans.find((p) => p.id === "normal")?.name.toLowerCase()).toContain("written")
    expect(plans.find((p) => p.id === "video")?.name.toLowerCase()).toContain("video")
    expect(plans.find((p) => p.id === "early")?.description.toLowerCase()).toContain("no video")
    expect(plans.find((p) => p.id === "normal")?.description.toLowerCase()).toContain("no video")
    expect(plans.find((p) => p.id === "normal")?.description.toLowerCase()).toContain("written")
    expect(plans.find((p) => p.id === "video")?.description.toLowerCase()).toMatch(/written/)
    expect(plans.find((p) => p.id === "video")?.description.toLowerCase()).toMatch(/video/)
    expect(PRICE_MAP_DETAIL.toLowerCase()).toContain("written only, no video")
    expect(PRICE_MAP_DETAIL).toContain("$10 = standard written")
    expect(PRICE_MAP_DETAIL).toContain("$19 = full video")
  })

  it("does not publish a standalone Brief SKU or leftover SaaS theatre", () => {
    const pricing = getParseablePricing()
    const blob = JSON.stringify(pricing)
    expect(pricing).not.toHaveProperty("standalone")
    expect(plans).toHaveLength(4)
    expect(pricing.map).toBe(PRICE_MAP_LABEL)
    expect(pricing.labels["5"]).toMatch(/written only, no video/)
    expect(pricing.labels["10"]).toMatch(/written only, no video/)
    expect(pricing.labels["19"]).toMatch(/written \+ video/)
    expect(pricing.userPlans).toEqual(["free", "early", "pro", "video"])
    expect(pricing.userPlanLabels.video.toLowerCase()).toContain("video")
    expect(pricing.plans.map((p) => p.userPlan)).toEqual(["free", "early", "pro", "video"])
    expect(pricing.plans.map((p) => p.price)).toEqual([0, 5, 10, 19])
    expect(blob).not.toMatch(LEFTOVER_THEATRE)
    expect(blob).not.toMatch(/\$29/)
  })

  it("keeps paid CTAs on the waitlist and never fakes Stripe Buy", () => {
    expect(plans.filter((p) => !p.available).every((p) => p.href === "/waitlist")).toBe(true)
    expect(plans.filter((p) => !p.available).every((p) => /waitlist/i.test(p.cta))).toBe(true)
    expect(plans.map((p) => p.cta).join(" ")).not.toMatch(/start analyst|go professional|buy now|checkout/i)
    expect(getParseablePricing().paymentsLive).toBe(false)
    expect(getParseablePricing().checkout).toBe("waitlist")
    expect(getParseablePricing().stripe).toBe(false)
    expect(CHECKOUT_STATUS.toLowerCase()).toContain("checkout isn't live")
  })

  it("uses one 7-day refund sentence and one support email", () => {
    expect(REFUND_POLICY).toContain("7-day")
    expect(REFUND_POLICY).toContain("$5")
    expect(REFUND_POLICY).toContain("$10")
    expect(REFUND_POLICY).toContain("$19")
    expect(getParseablePricing().refundPolicy).toBe(REFUND_POLICY)
    expect(SUPPORT_EMAIL).toBe("info@theintelanalystacademy.com")
  })

  it("keeps FAQ, llm.txt, JSON-LD, and site-config on the same map", () => {
    const llm = buildLlmTxt()
    const jsonLd = JSON.stringify(pricingJsonLd())
    const software = JSON.stringify(softwareJsonLd())
    const faq = academyBriefFaqs.map((f) => f.answer).join(" ")
    for (const text of publicSurfaces()) {
      expect(text).not.toMatch(LEFTOVER_THEATRE)
      expect(text).not.toMatch(/\$29/)
      expect(text.toLowerCase()).not.toMatch(/first intelligence product/)
    }
    expect(llm).toContain(PRICE_MAP_LABEL)
    expect(llm).toContain(REFUND_POLICY)
    expect(jsonLd).toContain(PRICE_MAP_LABEL)
    expect(faq).toContain(REFUND_POLICY)
    expect(faq).toContain("written only, no video")
    expect(faq.toLowerCase()).toMatch(/waitlist/)
    expect(JSON.stringify(siteConfig)).not.toMatch(/stripePriceId/)
    expect(JSON.stringify(siteConfig.pricing)).not.toMatch(/29\.00|59\.00|47\.00/)
  })

  it("home, /pricing, and waitlist labels all read the shared plans array", () => {
    const home = readFileSync("components/homepage-pricing-summary.tsx", "utf8")
    const pricingPage = readFileSync("app/pricing/page.tsx", "utf8")
    const grid = readFileSync("components/pricing-plan-grid.tsx", "utf8")
    const waitlistLabels = readFileSync("components/signup-or-waitlist-plan-labels.tsx", "utf8")
    for (const source of [home, pricingPage, grid, waitlistLabels]) {
      expect(source).toMatch(/from ["']@\/lib\/pricing["']|from ["']@\/components\/pricing-plan-grid["']/)
      expect(source).not.toMatch(LEFTOVER_THEATRE)
      expect(source).not.toMatch(/\$29|\$59/)
    }
    expect(grid).toContain("plans.map")
    expect(waitlistLabels).toContain("plans.map")
    expect(home).toContain("PricingPlanGrid")
    expect(pricingPage).toContain("PricingPlanGrid")
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
