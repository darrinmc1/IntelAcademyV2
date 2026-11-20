import { describe, expect, it } from "vitest"
import {
  ACCOUNT_CTA,
  ACCOUNT_HREF,
  CHECKOUT_STATUS,
  INTRO_TERMS,
  NO_LIFETIME,
  PRICE_MAP_DETAIL,
  PRICE_MAP_LABEL,
  REFUND_POLICY,
  SELLER_NAME,
  SUPPORT_EMAIL,
  collectionPacks,
  freeItems,
  getParseablePricing,
  normalPlan,
} from "@/lib/pricing"
import { academyBriefFaqs, buildLlmTxt, pricingJsonLd, softwareJsonLd } from "@/lib/aeo"
import { USER_PLAN_LABELS } from "@/lib/user-plan"
import { learningPaths } from "@/data/learning-paths"
import siteConfig from "@/config/site-config.json"

const OLD_COURSE_TIERS = /\$10|Explorer \$|Enterprise \$|Analyst \$|Professional \$|pro_monthly|9\.99|all sales final|Delaware/i

function publicSurfaces(): string[] {
  const pricing = getParseablePricing()
  return [
    PRICE_MAP_LABEL,
    PRICE_MAP_DETAIL,
    CHECKOUT_STATUS,
    REFUND_POLICY,
    INTRO_TERMS,
    JSON.stringify(pricing),
    JSON.stringify(freeItems),
    JSON.stringify(collectionPacks),
    JSON.stringify(normalPlan),
    JSON.stringify(USER_PLAN_LABELS),
    buildLlmTxt(),
    JSON.stringify(pricingJsonLd()),
    JSON.stringify(softwareJsonLd()),
    academyBriefFaqs.map((f) => `${f.question} ${f.answer}`).join(" "),
    JSON.stringify(siteConfig),
  ]
}

describe("one public price map", () => {
  it("publishes A$9/month, an A$5 first month, and three free lessons", () => {
    expect(normalPlan.label).toBe("A$9/month inc GST")
    expect(normalPlan.priceAud).toBe(9)
    expect(normalPlan.introPriceAud).toBe(5)
    expect(normalPlan.introLabel).toBe("A$5 first month")
    expect(normalPlan.href).toBe(ACCOUNT_HREF)
    expect(normalPlan.cta).toBe(ACCOUNT_CTA)
    expect(PRICE_MAP_LABEL).toContain("A$9/month inc GST")
    expect(PRICE_MAP_LABEL).toContain("A$5")
    expect(INTRO_TERMS).toBe(
      "The intro price applies to the first month only, then renews at A$9/month. Cancel anytime.",
    )
    expect(freeItems).toHaveLength(3)
    expect(freeItems.every((item) => item.label === "Free")).toBe(true)
    expect(freeItems.map((item) => item.href)).toEqual([
      "/topics/intelligence-report-fundamentals",
      "/topics/introduction-to-link-analysis",
      "/topics/intelligence-failures",
    ])
  })

  it("prices collection packs once, between A$9 and A$19, with the same signup CTA", () => {
    expect(collectionPacks.map((pack) => pack.priceAud)).toEqual([9, 14, 19])
    for (const pack of collectionPacks) {
      expect(pack.priceAud).toBeGreaterThanOrEqual(9)
      expect(pack.priceAud).toBeLessThanOrEqual(19)
      expect(pack.label).toMatch(/one-off/)
      expect(pack.label).toMatch(/inc GST/)
      expect(pack.cta).toBe(ACCOUNT_CTA)
      expect(pack.href).toBe("/register")
    }
  })

  it("does not publish a checkout, Stripe, payment link, or the old course tiers", () => {
    const pricing = getParseablePricing()
    expect(pricing.paymentsLive).toBe(false)
    expect(pricing.checkout).toBe("none")
    expect(pricing.stripe).toBe(false)
    expect(pricing.paymentLinks).toBe(false)
    expect(pricing.lifetime).toBe(false)
    expect(pricing.unlimited).toBe(false)
    expect(pricing.cta).toBe("Create a free account")
    expect(pricing.ctaUrl).toBe("https://theintelanalystacademy.com/register")
    expect(pricing.seller).toBe(SELLER_NAME)
    expect(CHECKOUT_STATUS.toLowerCase()).toContain("does not take payment")
    for (const text of publicSurfaces()) {
      expect(text).not.toMatch(OLD_COURSE_TIERS)
      expect(text.toLowerCase()).not.toMatch(/"stripe"\s*:\s*true|payment link|buy now|add to cart/)
      expect(text).not.toMatch(/\/checkout|\/buy/)
    }
    expect(JSON.stringify(siteConfig)).not.toMatch(/stripePriceId|9\.99|99\.00|49\.00|199\.00|29\.00/)
  })

  it("uses one refund sentence, one intro sentence, and one support email", () => {
    expect(REFUND_POLICY.toLowerCase()).not.toMatch(/pending legal review/)
    expect(REFUND_POLICY.toLowerCase()).toContain("3 days")
    expect(REFUND_POLICY.toLowerCase()).toContain("cancel anytime")
    expect(NO_LIFETIME.toLowerCase()).toContain("no lifetime")
    expect(NO_LIFETIME.toLowerCase()).toContain("no unlimited")
    expect(getParseablePricing().refundPolicy).toBe(REFUND_POLICY)
    expect(getParseablePricing().normal.introTerms).toBe(INTRO_TERMS)
    expect(SUPPORT_EMAIL).toBe("admin@ttpn.com.au")
    expect(SELLER_NAME).toBe("TTPN Pty Ltd")
    expect(JSON.stringify(getParseablePricing())).not.toMatch(/ABN|Suite|PO Box|postal|pending legal review/i)
  })

  it("keeps FAQ, llm.txt, and JSON-LD on the same map, without an Offer checkout", () => {
    const llm = buildLlmTxt()
    const jsonLd = JSON.stringify(pricingJsonLd())
    const software = JSON.stringify(softwareJsonLd())
    const faq = academyBriefFaqs.map((f) => f.answer).join(" ")
    expect(llm).toContain("A$9/month inc GST")
    expect(llm).toContain(INTRO_TERMS)
    expect(jsonLd).toContain(PRICE_MAP_LABEL)
    expect(jsonLd).not.toMatch(/"offers"\s*:|priceCurrency/)
    expect(software).not.toMatch(/"offers"\s*:|priceCurrency/)
    expect(faq).toContain(REFUND_POLICY)
    expect(faq).toContain("A$9/month")
    expect(faq.toLowerCase()).toContain("create a free account")
  })
})

describe("honest learning-path topic counts", () => {
  it("prints counted hrefs on featured cards, not 12/15/18 wish numbers", () => {
    const byId = Object.fromEntries(learningPaths.map((p) => [p.id, p.topicCount]))
    expect(byId.foundations).toBe(5)
    expect(byId["strategic-intelligence"]).toBe(8)
    expect(byId.osint).toBe(8)
    expect(byId["report-writing"]).toBe(21)
    expect(byId["threat-assessment"]).toBe(8)
    expect(byId["data-collection-planning"]).toBe(7)
    expect(byId["analyst-notebook"]).toBe(18)
  })
})
