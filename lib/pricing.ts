import { USER_PLAN_LABELS, USER_PLANS, type UserPlan } from "@/lib/user-plan"

/**
 * Canonical soft-launch price map — single source of truth.
 * Used by home, /pricing, /pricing.json, /llm.txt, FAQ, JSON-LD, waitlist, and refunds.
 * Payments are not live — paid CTAs go to /waitlist or /contact.
 * No Stripe, Payment Links, x402, or crypto checkout.
 *
 * Exact entitlements (catalog id → stored USER_PLANS id):
 *   free   → free  = written lessons, NO video          — $0
 *   early  → early = waitlist / early-signup, written, NO video — $5
 *   normal → pro   = standard written, NO video         — $10
 *   video  → video = written + full video               — $19
 *
 * Academy Brief is a tool / preview — not a standalone SKU. No $29 Brief.
 * No Explorer / Analyst / Professional / Enterprise theatre.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

export const SUPPORT_EMAIL = "info@theintelanalystacademy.com"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

export const CHECKOUT_STATUS =
  "Checkout isn't live yet. These are planned prices — join the waitlist. No card required today. Think of it as a collection plan, not a purchase order."

export const REFUND_POLICY =
  "7-day money-back on paid $5, $10, and $19 when checkout is live. Nothing to refund today — the register is still in the evidence locker."

export const PRICE_MAP_LABEL = "Free / $5 / $10 / $19"

export const PRICE_MAP_DETAIL =
  "Free = written lessons. $5 = waitlist / early-signup — written only, no video. $10 = standard written — written only, no video. $19 = full video (written + course video, not a PDF/book)."

export type PlanId = "free" | "early" | "normal" | "video"

export type Plan = {
  id: PlanId
  /** Stored users.plan value. Catalog id `normal` maps to stored `pro`. */
  userPlan: UserPlan
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
    userPlan: "free",
    name: "Free",
    price: 0,
    currency: "USD",
    priceLabel: "$0",
    blurb: "Written lessons",
    description: "Written lessons. Free. No video. No card. Humor stays on.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "1 structured brief preview",
    features: ["Written lessons", "No video", "1 Academy Brief preview"],
    cta: "Start free",
    href: "/register",
    highlighted: false,
    available: true,
  },
  {
    id: "early",
    userPlan: "early",
    name: "Early signup",
    price: 5,
    currency: "USD",
    priceLabel: "$5",
    blurb: "Waitlist / early-signup — written only, no video",
    description:
      "Waitlist / early-signup for people who already signed up. Written lessons only. No video. Checkout isn't live.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: [
      "Waitlist / early-signup for people who already signed up",
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
    userPlan: "pro",
    name: "Standard written",
    price: 10,
    currency: "USD",
    priceLabel: "$10",
    blurb: "Standard written — written only, no video",
    description: "Standard written price. Written lessons only. No video. Not a video plan. Checkout isn't live.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: ["Standard written price", "Written lessons only", "No video"],
    cta: "Join the waitlist",
    href: "/waitlist",
    highlighted: false,
    available: false,
  },
  {
    id: "video",
    userPlan: "video",
    name: "Full video",
    price: 19,
    currency: "USD",
    priceLabel: "$19",
    blurb: "Written + full video",
    description:
      "Written lessons plus course video. Not a PDF or book. Checkout isn't live — join the waitlist.",
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
      free: "written lessons — free, no video",
      "5": "waitlist / early-signup — written only, no video",
      "10": "standard written — written only, no video",
      "19": "full video — written + video",
    },
    userPlans: [...USER_PLANS],
    userPlanLabels: USER_PLAN_LABELS,
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
      userPlan: p.userPlan,
      name: p.name,
      price: p.price,
      currency: p.currency,
      priceLabel: p.priceLabel,
      label: p.blurb,
      includesVideo: p.includesVideo,
      includesAcademyBrief: p.includesAcademyBrief,
      briefAllowance: p.briefAllowance,
      features: p.features,
      available: p.available,
      cta: p.cta,
      url: `${SITE_URL}${p.href}`,
    })),
  }
}
