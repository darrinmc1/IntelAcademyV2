import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

/**
 * Public AUD offer for /pricing, /pricing.json, /llm.txt, FAQ, and JSON-LD.
 * Payments are not live. Paid buttons say "Coming soon" and go to /waitlist.
 * No Stripe, Payment Links, x402, checkout, or Buy buttons.
 * No monthly plan: lessons are published when written, not as a paid drip.
 * Video is listed as coming later because no lesson video files are in the repo.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

export const SUPPORT_EMAIL = "info@theintelanalystacademy.com"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

export const PRICING_CURRENCY = "AUD" as const

export const PAYMENTS_LIVE = false as const

/** No lesson mp4s are in the repo. Playback stays locked until files exist. */
export const VIDEOS_PUBLISHED = false as const

export const PAID_CTA = "Coming soon"

export const FREE_CTA = "Create a free account"

export const CHECKOUT_STATUS = "Coming soon. Create a free account. Checkout is not live."

/**
 * Shared TTPN refund wording. Pending legal review — do not treat this as signed-off advice.
 * Checkout is not live, so nothing is charged yet.
 */
export const REFUND_POLICY_PENDING_LEGAL_REVIEW = true

export const REFUND_POLICY =
  "Pending legal review. When billing is open, one-off purchases can be refunded within 3 days. A subscription, if one is offered later, can be cancelled anytime and stops at the end of the paid period. This does not limit rights under the Australian Consumer Law. Checkout is not live, so nothing is charged now."

export const MERCHANT_NOTE = MERCHANT_OF_RECORD_DISCLOSURE

export const PRICE_MAP_LABEL =
  "Free A$0. Path Pack A$15. Written Library A$39. Video A$19, coming later."

export const PRICE_MAP_DETAIL =
  "The free offer is three sample lessons and two PDFs, behind a free account. Path Pack and Written Library are one-off prices in Australian dollars. Checkout is not live. There is no monthly plan."

export const NOT_INCLUDED =
  "Not included until they exist: certificates, a forum, video (the Video row is coming later), the Intelligence Report Generator, Source Analysis, Threat Assessment tools, and mentoring. Academy Brief stays a one-brief preview and is not a pack. There is no monthly plan."

export const FREE_SAMPLE_LESSONS = [
  { title: "What is Intelligence?", href: "/topics/what-is-intelligence" },
  { title: "The Intelligence Cycle", href: "/topics/intelligence-cycle" },
  { title: "Intelligence Report Fundamentals", href: "/topics/intelligence-report-fundamentals" },
] as const

export const FREE_SAMPLE_PDFS = [
  { title: "Estimative Language Dictionary", href: "/downloads" },
  { title: "Cognitive Bias Checklist", href: "/downloads" },
] as const

export type OfferId = "free" | "path_pack" | "written_library" | "video"

export type Offer = {
  id: OfferId
  name: string
  priceAud: number
  priceLabel: string
  currency: typeof PRICING_CURRENCY
  billing: "free" | "one-off"
  available: boolean
  buyable: boolean
  /** Hidden from the public grid when false. Video stays visible, marked coming later. */
  shown: boolean
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
    name: "Free",
    priceAud: 0,
    priceLabel: aud(0),
    currency: PRICING_CURRENCY,
    billing: "free",
    available: true,
    buyable: false,
    shown: true,
    status: "Free account",
    summary: "Three sample lessons and two PDFs. Create a free account to open them.",
    includes: [
      "Lesson: What is Intelligence?",
      "Lesson: The Intelligence Cycle",
      "Lesson: Intelligence Report Fundamentals",
      "PDF: Estimative Language Dictionary",
      "PDF: Cognitive Bias Checklist",
    ],
    cta: FREE_CTA,
    href: "/register",
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
    shown: true,
    status: "Coming soon",
    summary: "One named learning path's written topics, plus the free sample.",
    includes: [
      "One named learning path (for example Foundations, OSINT, Report Writing, or Threat Assessment)",
      "The free sample stays included",
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
    shown: true,
    status: "Coming soon",
    summary: "All current written topics, plus the downloads that are on the site today.",
    includes: [
      "All current written topics",
      "The PDFs listed on Downloads",
      "The free sample stays included",
    ],
    cta: PAID_CTA,
    href: "/waitlist",
  },
  {
    id: "video",
    name: "Video",
    priceAud: 19,
    priceLabel: aud(19),
    currency: PRICING_CURRENCY,
    billing: "one-off",
    available: false,
    buyable: false,
    shown: true,
    status: VIDEOS_PUBLISHED ? "Available when checkout opens" : "Coming later",
    summary: VIDEOS_PUBLISHED
      ? "Video unlock for lessons that have a video file. Checkout is not live."
      : "Shown for the locked offer. Coming later — no lesson videos are published yet, so this cannot be bought.",
    includes: [
      "Lesson video playback",
      "Only after a video file exists",
      "Not buyable yet",
    ],
    cta: PAID_CTA,
    href: "/waitlist",
  },
]

export function visibleOffers(): Offer[] {
  return offers.filter((offer) => offer.shown)
}

export function getParseablePricing() {
  const publicOffers = offers.filter((offer) => offer.id !== "video" || offer.shown)
  return {
    currency: PRICING_CURRENCY,
    map: PRICE_MAP_LABEL,
    detail: PRICE_MAP_DETAIL,
    notIncluded: NOT_INCLUDED,
    paymentsLive: PAYMENTS_LIVE,
    videosPublished: VIDEOS_PUBLISHED,
    monthlyPlan: false,
    billing: "not_live" as const,
    checkout: "waitlist" as const,
    checkoutStatus: CHECKOUT_STATUS,
    refundPolicy: REFUND_POLICY,
    refundPolicyPendingLegalReview: REFUND_POLICY_PENDING_LEGAL_REVIEW,
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
    offers: publicOffers.map((offer) => ({
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
