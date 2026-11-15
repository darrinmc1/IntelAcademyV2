import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import {
  CHECKOUT_STATUS,
  FREE_CTA,
  NOT_INCLUDED,
  PAID_CTA,
  PRICE_MAP_DETAIL,
  PRICE_MAP_LABEL,
  REFUND_POLICY,
  REFUND_POLICY_PENDING_LEGAL_REVIEW,
  SUPPORT_EMAIL,
  VIDEOS_PUBLISHED,
  getParseablePricing,
  offers,
} from "@/lib/pricing"
import { academyBriefFaqs, buildLlmTxt, pricingJsonLd, softwareJsonLd } from "@/lib/aeo"
import { learningPaths } from "@/data/learning-paths"
import siteConfig from "@/config/site-config.json"

const STRIPE_OR_CHECKOUT =
  /checkout\.stripe\.com|buy\.stripe|stripePriceId|payment link|US\$|\bUSD\b|>\s*Buy\b/i

const MONTHLY = /\/mo\b|per month|lifetime|unlimited/i

function publicSurfaces(): string[] {
  const pricing = getParseablePricing()
  return [
    PRICE_MAP_LABEL,
    PRICE_MAP_DETAIL,
    NOT_INCLUDED,
    CHECKOUT_STATUS,
    REFUND_POLICY,
    JSON.stringify(pricing),
    JSON.stringify(offers),
    buildLlmTxt(),
    JSON.stringify(pricingJsonLd()),
    JSON.stringify(softwareJsonLd()),
    academyBriefFaqs.map((faq) => `${faq.question} ${faq.answer}`).join(" "),
    JSON.stringify(siteConfig),
    readFileSync("app/pricing/page.tsx", "utf8"),
    readFileSync("app/pricing.json/route.ts", "utf8"),
    readFileSync("app/terms/page.tsx", "utf8"),
    readFileSync("app/refunds/page.tsx", "utf8"),
  ]
}

describe("AUD offer map", () => {
  it("lists Free, Path Pack, Written Library, and Video in AUD", () => {
    expect(offers.map((offer) => [offer.id, offer.priceAud, offer.priceLabel, offer.billing])).toEqual([
      ["free", 0, "A$0", "free"],
      ["path_pack", 15, "A$15", "one-off"],
      ["written_library", 39, "A$39", "one-off"],
      ["video", 19, "A$19", "one-off"],
    ])
    expect(getParseablePricing().currency).toBe("AUD")
    expect(getParseablePricing().monthlyPlan).toBe(false)
    expect(offers.every((offer) => offer.billing === "free" || offer.billing === "one-off")).toBe(true)
  })

  it("keeps paid packs off checkout and marks video coming later", () => {
    const free = offers.find((offer) => offer.id === "free")
    expect(free?.cta).toBe(FREE_CTA)
    expect(free?.href).toBe("/register")
    expect(free?.buyable).toBe(false)
    expect(free?.includes.join(" ")).toContain("What is Intelligence?")
    expect(free?.includes.join(" ")).toContain("Estimative Language Dictionary")
    expect(free?.includes.join(" ")).toContain("Cognitive Bias Checklist")

    for (const id of ["path_pack", "written_library", "video"] as const) {
      const offer = offers.find((item) => item.id === id)
      expect(offer?.buyable).toBe(false)
      expect(offer?.cta).toBe(PAID_CTA)
      expect(offer?.href).toBe("/waitlist")
    }

    expect(VIDEOS_PUBLISHED).toBe(false)
    expect(offers.find((offer) => offer.id === "video")?.status).toBe("Coming later")
    expect(offers.find((offer) => offer.id === "video")?.shown).toBe(true)
  })

  it("keeps payments off, with no Stripe and no monthly SKU", () => {
    const pricing = getParseablePricing()
    expect(pricing.paymentsLive).toBe(false)
    expect(pricing.stripe).toBe(false)
    expect(pricing.paymentLinks).toBe(false)
    expect(pricing.x402).toBe(false)
    expect(pricing.checkout).toBe("waitlist")
    expect(JSON.stringify(pricing)).not.toMatch(STRIPE_OR_CHECKOUT)
    expect(JSON.stringify(pricing)).not.toMatch(MONTHLY)
    expect(pricing.merchant).toMatch(/TTPN Pty Ltd/)
    expect(pricing.merchant.toLowerCase()).toContain("not live")
    expect(pricing.merchant).not.toMatch(/ABN|street/i)
  })

  it("marks the shared refund wording as pending legal review", () => {
    expect(REFUND_POLICY_PENDING_LEGAL_REVIEW).toBe(true)
    expect(REFUND_POLICY.toLowerCase()).toContain("pending legal review")
    expect(REFUND_POLICY.toLowerCase()).toContain("3 days")
    expect(REFUND_POLICY.toLowerCase()).toContain("cancelled anytime")
    expect(REFUND_POLICY).toContain("Australian Consumer Law")
    expect(getParseablePricing().refundPolicy).toBe(REFUND_POLICY)
    expect(SUPPORT_EMAIL).toBe("info@theintelanalystacademy.com")
    expect(NOT_INCLUDED.toLowerCase()).toContain("no monthly plan")
  })

  it("keeps the public pages off Stripe, ABN, and a street address", () => {
    for (const text of publicSurfaces()) {
      expect(text).not.toMatch(STRIPE_OR_CHECKOUT)
      expect(text).not.toMatch(/\bABN\b/)
      expect(text.toLowerCase()).not.toMatch(/street address|po box/)
    }
    const llm = buildLlmTxt()
    expect(llm).toContain("A$0")
    expect(llm).toContain("A$15")
    expect(llm).toContain("A$39")
    expect(llm).toContain("A$19")
    expect(llm).toContain("Payments live: false")
    expect(JSON.stringify(pricingJsonLd())).not.toMatch(/priceCurrency/)
    expect(JSON.stringify(softwareJsonLd())).not.toMatch(/"price"\s*:/)
    expect(siteConfig.pricing.paymentsLive).toBe(false)
    expect(siteConfig.pricing.checkout).toBe("waitlist")
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
