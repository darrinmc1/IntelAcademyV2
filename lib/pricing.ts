import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

/**
 * Public AUD offer map for /pricing, /pricing.json, /llm.txt, FAQ, and JSON-LD.
 * Payments are not live. Paid CTAs go to /waitlist. No Stripe, Payment Links, x402, or crypto checkout.
 *
 * Stored entitlements stay in lib/user-plan.ts (free / early / pro / video). This file does not change them.
 * Academy Brief is a tool / preview — not a SKU.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

export const SUPPORT_EMAIL = "info@theintelanalystacademy.com"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

export const PRICING_CURRENCY = "AUD" as const

export const PAYMENTS_LIVE = false as const

/** Exact label for every paid placeholder. Checkout stays closed. */
export const PAID_CTA = "Coming soon / join the list"

export const CHECKOUT_STATUS = PAID_CTA

export const REFUND_POLICY = "Payments are not set up. There is nothing to charge or refund."

export const MERCHANT_NOTE = MERCHANT_OF_RECORD_DISCLOSURE

export const PRICE_MAP_LABEL =
  "Free sample A$0. Path Pack A$15. Written Library A$39. Video Pack A$19 (not buyable until videos ship)."

export const PRICE_MAP_DETAIL =
  "The free sample is What is Intelligence?, The Intelligence Cycle, and Intelligence Report Fundamentals, plus the Estimative Language Dictionary and Cognitive Bias Checklist. Path Pack and Written Library are planned one-offs. Checkout is not live."

export const NOT_INCLUDED =
  "Not included in any paid pack until they exist: certificates, a forum, video (except the Video Pack row, and only after videos ship), the Intelligence Report Generator, Source Analysis, Threat Assessment tools, and mentoring. Academy Brief stays a one-brief preview and is not a pack."

export const FREE_SAMPLE_LESSONS = [
  { title: "What is Intelligence?", href: "/topics/what-is-intelligence" },
  { title: "The Intelligence Cycle", href: "/topics/intelligence-cycle" },
  { title: "Intelligence Report Fundamentals", href: "/topics/intelligence-report-fundamentals" },
] as const

export const FREE_SAMPLE_PDFS = [
  { title: "Estimative Language Dictionary", href: "/downloads" },
  { title: "Cognitive Bias Checklist", href: "/downloads" },
] as const

export type OfferId = "free" | "path_pack" | "written_library" | "video_pack"

export type Offer = {
  id: OfferId
  name: string
  priceAud: number
  priceLabel: string
  currency: typeof PRICING_CURRENCY
  billing: "free" | "one-off"
  available: boolean
  buyable: boolean
  status: string
  summary: string
  includes: string[]
  cta: string
  href: string
}

function aud(amount: number): string {
  return `A$${amount}`
}

export const offers: Offer[] = [
  {
    id: "free",
    name: "Free sample",
    priceAud: 0,
    priceLabel: aud(0),
    currency: PRICING_CURRENCY,
    billing: "free",
    available: true,
    buyable: false,
    status: "Available",
    summary: "Three written lessons and two PDFs. These stay free.",
    includes: [
      "Lesson: What is Intelligence?",
      "Lesson: The Intelligence Cycle",
      "Lesson: Intelligence Report Fundamentals",
      "PDF: Estimative Language Dictionary",
      "PDF: Cognitive Bias Checklist",
    ],
    cta: "Read the free sample",
    href: "/topics/what-is-intelligence",
  },
  {
    id: "path_pack",
    name: "Path Pack",
    priceAud: 15,
    priceLabel: aud(15),
    currency: PRICING_CURRENCY,
    billing: "one-off",
    available: false,
    buyable: false,
    status: "Coming soon",
    summary: "One named learning path's remaining written topics, plus related download PDFs.",
    includes: [
      "One named learning path's remaining written topics (for example Foundations, OSINT, Report Writing, or Threat Assessment)",
      "Path-related PDF checklists and forms from Downloads",
      "The free sample stays free",
    ],
    cta: PAID_CTA,
    href: "/waitlist",
  },
  {
    id: "written_library",
    name: "Written Library",
    priceAud: 39,
    priceLabel: aud(39),
    currency: PRICING_CURRENCY,
    billing: "one-off",
    available: false,
    buyable: false,
    status: "Coming soon",
    summary: "All current written topics, plus the full live Downloads PDF set.",
    includes: [
      "All current written topics",
      "The full live Downloads PDF set",
      "Downloads still marked Coming Soon stay marked Coming Soon",
      "The free sample stays free",
    ],
    cta: PAID_CTA,
    href: "/waitlist",
  },
  {
    id: "video_pack",
    name: "Video Pack",
    priceAud: 19,
    priceLabel: aud(19),
    currency: PRICING_CURRENCY,
    billing: "one-off",
    available: false,
    buyable: false,
    status: "Not buyable until videos ship",
    summary: "Per-path or full-library video unlock. Not buyable until videos ship.",
    includes: [
      "Per-path or full-library video unlock",
      "Only when videos ship",
      "Not buyable yet",
    ],
    cta: PAID_CTA,
    href: "/waitlist",
  },
]

export function getParseablePricing() {
  return {
    currency: PRICING_CURRENCY,
    map: PRICE_MAP_LABEL,
    detail: PRICE_MAP_DETAIL,
    notIncluded: NOT_INCLUDED,
    paymentsLive: PAYMENTS_LIVE,
    billing: "not_live" as const,
    checkout: "waitlist" as const,
    checkoutStatus: CHECKOUT_STATUS,
    refundPolicy: REFUND_POLICY,
    merchant: MERCHANT_NOTE,
    supportEmail: SUPPORT_EMAIL,
    x402: false,
    stripe: false,
    paymentLinks: false,
    disclaimer: DISCLAIMER,
    product: {
      id: "academy-brief",
      name: "Academy Brief",
      url: `${SITE_URL}/tools/academy-brief`,
      job: "Paste a raw intel dump or notes. Receive a structured brief using the academy method, citing real catalog topics and lessons.",
      not: "Not a chat-with-the-site assistant. Not an operational intelligence product. Not a standalone SKU.",
      allowance: "Free preview: one brief",
    },
    offers: offers.map((offer) => ({
      id: offer.id,
      name: offer.name,
      priceAud: offer.priceAud,
      priceLabel: offer.priceLabel,
      currency: offer.currency,
      billing: offer.billing,
      available: offer.available,
      buyable: offer.buyable,
      status: offer.status,
      summary: offer.summary,
      includes: offer.includes,
      cta: offer.cta,
      href: offer.href,
      url: `${SITE_URL}${offer.href}`,
    })),
  }
}
