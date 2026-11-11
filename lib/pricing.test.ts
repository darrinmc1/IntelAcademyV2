import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import {
  CHECKOUT_STATUS,
  NOT_INCLUDED,
  PAID_CTA,
  PRICE_MAP_DETAIL,
  PRICE_MAP_LABEL,
  REFUND_POLICY,
  SUPPORT_EMAIL,
  getParseablePricing,
  offers,
} from "@/lib/pricing"
import { academyBriefFaqs, buildLlmTxt, pricingJsonLd, softwareJsonLd } from "@/lib/aeo"
import { learningPaths } from "@/data/learning-paths"
import siteConfig from "@/config/site-config.json"

const STRIPE_OR_USD =
  /checkout\.stripe\.com|buy\.stripe|stripePriceId|payment link|US\$|\bUSD\b/i

const FORBIDDEN_PROMISE = /unlimited|lifetime|\/mo\b|per month|monthly|analyst updates/i

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
    academyBriefFaqs.map((f) => `${f.question} ${f.answer}`).join(" "),
    JSON.stringify(siteConfig),
    readFileSync("app/pricing/page.tsx", "utf8"),
    readFileSync("app/pricing.json/route.ts", "utf8"),
    readFileSync("components/coming-soon-join.tsx", "utf8"),
    readFileSync("components/homepage-pricing-summary.tsx", "utf8"),
  ]
}

describe("AUD offer map", () => {
  it("lists Free, Path Pack, Written Library, and Video Pack in AUD", () => {
    expect(offers.map((offer) => [offer.id, offer.priceAud, offer.priceLabel, offer.currency, offer.billing])).toEqual([
      ["free", 0, "A$0", "AUD", "free"],
      ["path_pack", 15, "A$15", "AUD", "one-off"],
      ["written_library", 39, "A$39", "AUD", "one-off"],
      ["video_pack", 19, "A$19", "AUD", "one-off"],
    ])
    const pricing = getParseablePricing()
    expect(pricing.currency).toBe("AUD")
    expect(pricing.map).toBe(PRICE_MAP_LABEL)
    expect(pricing.offers.map((offer) => offer.id)).toEqual(["free", "path_pack", "written_library", "video_pack"])
    expect(pricing.offers.map((offer) => offer.priceAud)).toEqual([0, 15, 39, 19])
    expect(JSON.stringify(pricing)).not.toMatch(/"analyst_updates"|"early"|"normal"/)
  })

  it("keeps the free sample contents and leaves paid packs off checkout", () => {
    const free = offers.find((offer) => offer.id === "free")
    expect(free?.available).toBe(true)
    expect(free?.buyable).toBe(false)
    expect(free?.cta).toBe("Read the free sample")
    expect(free?.href).toBe("/topics/what-is-intelligence")
    const freeText = free?.includes.join(" ") ?? ""
    expect(freeText).toContain("What is Intelligence?")
    expect(freeText).toContain("The Intelligence Cycle")
    expect(freeText).toContain("Intelligence Report Fundamentals")
    expect(freeText).toContain("Estimative Language Dictionary")
    expect(freeText).toContain("Cognitive Bias Checklist")

    for (const id of ["path_pack", "written_library", "video_pack"] as const) {
      const offer = offers.find((item) => item.id === id)
      expect(offer?.buyable).toBe(false)
      expect(offer?.available).toBe(false)
      expect(offer?.cta).toBe(PAID_CTA)
      expect(offer?.href).toBe("/waitlist")
    }

    expect(offers.find((offer) => offer.id === "path_pack")?.summary.toLowerCase()).toContain("learning path")
    expect(offers.find((offer) => offer.id === "path_pack")?.summary.toLowerCase()).toContain("pdf")
    expect(offers.find((offer) => offer.id === "written_library")?.summary.toLowerCase()).toContain("written topics")
    expect(offers.find((offer) => offer.id === "written_library")?.summary.toLowerCase()).toContain("pdf")
    expect(offers.find((offer) => offer.id === "video_pack")?.status.toLowerCase()).toContain("not buyable")
    expect(offers.find((offer) => offer.id === "video_pack")?.status.toLowerCase()).toContain("videos ship")
  })

  it("keeps payments off, with no Stripe and no monthly SKU", () => {
    const pricing = getParseablePricing()
    expect(pricing.paymentsLive).toBe(false)
    expect(pricing.checkout).toBe("waitlist")
    expect(pricing.stripe).toBe(false)
    expect(pricing.paymentLinks).toBe(false)
    expect(pricing.x402).toBe(false)
    expect(pricing.checkoutStatus).toBe("Coming soon / join the list")
    expect(pricing.billing).toBe("not_live")
    expect(offers.every((offer) => offer.billing === "free" || offer.billing === "one-off")).toBe(true)
    expect(JSON.stringify(pricing)).not.toMatch(STRIPE_OR_USD)
    expect(JSON.stringify(pricing)).not.toMatch(FORBIDDEN_PROMISE)
    expect(pricing.merchant).toMatch(/TTPN Pty Ltd/)
    expect(pricing.merchant.toLowerCase()).toContain("not live")
  })

  it("does not sell Academy Brief as a SKU", () => {
    const pricing = getParseablePricing()
    expect(offers.map((offer) => offer.id)).not.toContain("academy-brief")
    expect(pricing.product.id).toBe("academy-brief")
    expect(pricing.product.not.toLowerCase()).toContain("not a standalone sku")
    expect(pricing.product.allowance.toLowerCase()).toContain("one brief")
    expect(pricing).not.toHaveProperty("standalone")
    expect(NOT_INCLUDED.toLowerCase()).toContain("academy brief")
    expect(NOT_INCLUDED.toLowerCase()).not.toMatch(/unlimited|lifetime/)
  })

  it("uses one refund sentence and one support email", () => {
    expect(REFUND_POLICY.toLowerCase()).toContain("not set up")
    expect(getParseablePricing().refundPolicy).toBe(REFUND_POLICY)
    expect(SUPPORT_EMAIL).toBe("info@theintelanalystacademy.com")
    expect(PRICE_MAP_DETAIL.toLowerCase()).toContain("checkout is not live")
  })

  it("keeps FAQ, llm.txt, JSON-LD, site-config, and pricing files off Stripe", () => {
    const llm = buildLlmTxt()
    const jsonLd = JSON.stringify(pricingJsonLd())
    const software = JSON.stringify(softwareJsonLd())
    const faq = academyBriefFaqs.map((faqItem) => faqItem.answer).join(" ")
    for (const text of publicSurfaces()) {
      expect(text).not.toMatch(STRIPE_OR_USD)
      expect(text.toLowerCase()).not.toMatch(/written lessons stay free|written lessons are free/)
      expect(text.toLowerCase()).not.toMatch(/first intelligence product/)
    }
    expect(llm).toContain("A$0")
    expect(llm).toContain("A$15")
    expect(llm).toContain("A$39")
    expect(llm).toContain("A$19")
    expect(llm).toContain("Payments live: false")
    expect(jsonLd).toContain(PRICE_MAP_LABEL)
    expect(jsonLd).not.toMatch(/checkout\.stripe\.com/)
    expect(software).not.toMatch(/"price"\s*:|"offers"\s*:|priceCurrency/)
    expect(faq).toContain(REFUND_POLICY)
    expect(faq).toContain("What is Intelligence?")
    expect(faq.toLowerCase()).toContain("coming soon / join the list")
    expect(siteConfig.pricing.paymentsLive).toBe(false)
    expect(siteConfig.pricing.checkout).toBe("waitlist")
    expect(JSON.stringify(siteConfig.pricing)).not.toMatch(/9\.99|99\.00|49\.00|199\.00|29\.00/)
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
