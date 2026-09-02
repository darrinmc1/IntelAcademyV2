import { describe, expect, it } from "vitest"
import { CHECKOUT_STATUS, REFUND_POLICY, SUPPORT_EMAIL, getParseablePricing, plans } from "@/lib/pricing"
import { academyBriefFaqs, buildLlmTxt, pricingJsonLd, softwareJsonLd } from "@/lib/aeo"
import { learningPaths } from "@/data/learning-paths"

describe("one waitlist price map", () => {
  it("exposes only Free, Early Adopter $5, and Pro $10", () => {
    expect(plans.map((p) => [p.id, p.price])).toEqual([
      ["free", 0],
      ["early_adopter", 5],
      ["pro", 10],
    ])
  })

  it("does not publish a standalone Academy Brief SKU or leftover maps", () => {
    const pricing = getParseablePricing()
    const blob = JSON.stringify(pricing)
    expect(pricing).not.toHaveProperty("standalone")
    expect(blob).not.toMatch(/29/)
    expect(blob).not.toMatch(/Explorer|Enterprise|Analyst \$|Professional/)
    expect(plans).toHaveLength(3)
  })

  it("keeps paid CTAs on the waitlist and states checkout is not live", () => {
    expect(plans.find((p) => p.id === "early_adopter")?.href).toBe("/waitlist")
    expect(plans.find((p) => p.id === "pro")?.href).toBe("/waitlist")
    expect(getParseablePricing().paymentsLive).toBe(false)
    expect(getParseablePricing().checkout).toBe("waitlist")
    expect(getParseablePricing().stripe).toBe(false)
    expect(CHECKOUT_STATUS.toLowerCase()).toContain("checkout isn't live")
  })

  it("uses one 7-day refund sentence and one support email", () => {
    expect(REFUND_POLICY).toBe(
      "7-day money-back on monthly Early Adopter ($5) and Pro ($10) — a 30-day window is the whole first month.",
    )
    expect(REFUND_POLICY.toLowerCase()).not.toMatch(/30-day money-back/)
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
    }
    expect(llm).toContain(REFUND_POLICY)
    expect(jsonLd).toContain("Early Adopter")
    expect(faq).toContain(REFUND_POLICY)
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
