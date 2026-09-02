/**
 * Parseable pricing source of truth.
 * Used by /pricing, /pricing.json, /llm.txt, FAQ, JSON-LD, and refunds.
 * Payments are not live yet — paid CTAs go to /waitlist or /contact.
 * No Stripe, Payment Links, x402, or crypto checkout.
 *
 * Exact entitlements:
 *   Free = written lessons
 *   $5   = waitlist / early discount for people who already signed up — written only, NO video
 *   $10  = normal price — written only, NO video (do not call $10 video)
 *   $19  = written + video (course video, not a PDF/book)
 *
 * Academy Brief is a tool / preview — not a standalone SKU.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

export const SUPPORT_EMAIL = "info@theintelanalystacademy.com"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

export const CHECKOUT_STATUS =
  "Checkout isn't live yet. These are planned prices — join the waitlist. No card required today."

export const REFUND_POLICY =
  "7-day money-back on paid $5, $10, and $19."

export const PRICE_MAP_LABEL = "Free / $5 / $10 / $19"

export const PRICE_MAP_DETAIL =
  "Free = written lessons. $5 = waitlist / early discount for people who already signed up — written only, no video. $10 = normal price — written only, no video. $19 = written + video (course video, not a PDF/book)."

export type PlanId = "free" | "early" | "normal" | "video"

export type Plan = {
  id: PlanId
  name: string
  price: number
  currency: "USD"
  priceLabel: string
  blurb: string
  description: string
  includesVideo: boolean
  includesAcademyBrief: boolean
  briefAllowance: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  available: boolean
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    currency: "USD",
    priceLabel: "$0",
    blurb: "Written lessons",
    description: "Written lessons.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "1 structured brief preview",
    features: ["Written lessons", "No video", "1 Academy Brief preview"],
    cta: "Get Started Free",
    href: "/register",
    highlighted: false,
    available: true,
  },
  {
    id: "early",
    name: "$5",
    price: 5,
    currency: "USD",
    priceLabel: "$5",
    blurb: "Waitlist / early discount — written only, no video",
    description:
      "Waitlist / early discount for people who already signed up. Written lessons only. No video.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: [
      "Waitlist / early discount for people who already signed up",
      "Written lessons only",
      "No video",
    ],
    cta: "Join the waitlist",
    href: "/waitlist",
    highlighted: true,
    available: false,
  },
  {
    id: "normal",
    name: "$10",
    price: 10,
    currency: "USD",
    priceLabel: "$10",
    blurb: "Normal price — written only, no video",
    description: "Normal price. Written lessons only. No video. Not a video plan.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: ["Normal price", "Written lessons only", "No video"],
    cta: "Join the waitlist",
    href: "/waitlist",
    highlighted: false,
    available: false,
  },
  {
    id: "video",
    name: "$19",
    price: 19,
    currency: "USD",
    priceLabel: "$19",
    blurb: "Written + video",
    description:
      "Written lessons plus course video. Not a PDF or book. Checkout isn't live.",
    includesVideo: true,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: ["Written lessons", "Course video", "Not a PDF/book"],
    cta: "Join the waitlist",
    href: "/waitlist",
    highlighted: false,
    available: false,
  },
]

export function getParseablePricing() {
  return {
    currency: "USD",
    map: PRICE_MAP_LABEL,
    detail: PRICE_MAP_DETAIL,
    labels: {
      free: "written lessons",
      "5": "waitlist / early discount for people who already signed up — written only, no video",
      "10": "normal price — written only, no video",
      "19": "written + video",
    },
    billing: "planned",
    paymentsLive: false,
    checkout: "waitlist",
    checkoutStatus: CHECKOUT_STATUS,
    refundPolicy: REFUND_POLICY,
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
      includedInPaidPlans: true,
    },
    plans: plans.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      currency: p.currency,
      label: p.blurb,
      includesVideo: p.includesVideo,
      includesAcademyBrief: p.includesAcademyBrief,
      briefAllowance: p.briefAllowance,
      features: p.features,
      available: p.available,
      url: `${SITE_URL}${p.href}`,
    })),
  }
}
