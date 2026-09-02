import { USER_PLAN_LABELS, USER_PLANS, type UserPlan } from "@/lib/user-plan"

/**
 * Public access copy — no live dollar amounts until lesson videos ship.
 * Used by /pricing, /pricing.json, /llm.txt, FAQ, JSON-LD, and refunds.
 * Payments are not live — paid CTAs go to /waitlist or /contact.
 * No Stripe, Payment Links, x402, or crypto checkout.
 *
 * Entitlements (catalog id → stored USER_PLANS id). Plan ids stay; prices do not.
 *   free   → free  = written lessons, NO video
 *   early  → early = waitlist / early, written, NO video
 *   normal → pro   = written, NO video
 *   video  → video = written + video
 *
 * Academy Brief is a tool / preview — not a standalone SKU.
 * The dollar map lives on a parked branch until videos are done. Do not print it here.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

export const SUPPORT_EMAIL = "info@theintelanalystacademy.com"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

export const CHECKOUT_STATUS =
  "Checkout isn't live yet. Join the waitlist — no card required today."

export const REFUND_POLICY =
  "7-day money-back on paid plans when checkout is live. Nothing to refund today — the register is still in the evidence locker."

export const PRICE_MAP_LABEL = "Written lessons are free. Video is coming soon."

export const PRICE_MAP_DETAIL =
  "Written lessons stay free. Video is included on the video plan — checkout isn't live, so that's a waitlist, not a buy button. No leftover Explorer / Analyst / Professional / Enterprise SKUs."

export type PlanId = "free" | "early" | "normal" | "video"

export type Plan = {
  id: PlanId
  /** Stored users.plan value. Catalog id `normal` maps to stored `pro`. */
  userPlan: UserPlan
  name: string
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
    blurb: "Written lessons",
    description: "Written lessons. Free. No video.",
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
    name: "Early",
    blurb: "Waitlist / early — written only, no video",
    description:
      "Waitlist / early for people who already signed up. Written lessons only. No video. Checkout isn't live.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: [
      "Waitlist / early for people who already signed up",
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
    name: "Written",
    blurb: "Written only, no video",
    description: "Written lessons only. No video. Not a video plan. Checkout isn't live.",
    includesVideo: false,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: ["Written lessons only", "No video"],
    cta: "Join the waitlist",
    href: "/waitlist",
    highlighted: false,
    available: false,
  },
  {
    id: "video",
    userPlan: "video",
    name: "Video",
    blurb: "Written + video — coming soon",
    description:
      "Written lessons plus course video. Not a PDF or book. Checkout isn't live — join the waitlist.",
    includesVideo: true,
    includesAcademyBrief: true,
    briefAllowance: "Academy Brief included as a tool (when billing is live)",
    features: ["Written lessons", "Course video", "Not a PDF/book", "Coming soon"],
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
      early: "waitlist / early — written only, no video",
      written: "written only, no video",
      video: "written + video — coming soon",
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
