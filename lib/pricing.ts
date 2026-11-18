import { USER_PLAN_LABELS, USER_PLANS, type UserPlan } from "@/lib/user-plan"

/**
 * The only public price map.
 * Payments are not taken on the site: no Stripe, Payment Links, or checkout.
 * Every public purchase-shaped CTA is "Create a free account" → /register.
 *
 * Replaces the previous public map, which had no dollar amounts:
 * "Written lessons are free. Video is coming soon." Plans were free / early /
 * written / video, and paid buttons went to a waitlist. There is no $5 / $10 / $19
 * course-tier map on this branch.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

/** Public contact address already used by this site. Not an office address. */
export const SUPPORT_EMAIL = "info@theintelanalystacademy.com"

export const SELLER_NAME = "TTPN Pty Ltd"

export const GOVERNING_LAW =
  "These terms are governed by the laws of Queensland and Australia. You submit to the non-exclusive jurisdiction of the courts of Queensland, Australia."

export const ACCOUNT_CTA = "Create a free account"

export const ACCOUNT_HREF = "/register"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

export const CHECKOUT_STATUS = "This site does not take payment. Create a free account."

export const REFUND_POLICY =
  "If a charge is made, you can ask for a refund within 3 days of the charge. You can cancel anytime. There is no lifetime plan and no unlimited deal."

export const INTRO_TERMS =
  "The intro price applies to the first month only, then renews at A$9/month. Cancel anytime."

export const NO_LIFETIME =
  "There is no lifetime plan and no unlimited deal."

export const PRICE_MAP_LABEL =
  "Normal plan A$9/month inc GST. Limited time: A$5 for the first month if you create a free account with your email."

export const PRICE_MAP_DETAIL = `${INTRO_TERMS} Three lessons are free. Collection packs are A$9, A$14, or A$19 one-off, inc GST. This site does not take payment.`

export type PlanId = "free" | "normal" | "packs"

export type FreeItem = {
  id: string
  title: string
  href: string
  label: "Free"
  why: string
}

/** The three lessons the homepage already puts first. */
export const freeItems: FreeItem[] = [
  {
    id: "intelligence-report-fundamentals",
    title: "Intelligence Report Fundamentals",
    href: "/topics/intelligence-report-fundamentals",
    label: "Free",
    why: "The sample lesson. See the teaching style before you create an account.",
  },
  {
    id: "introduction-to-link-analysis",
    title: "Introduction to Link Analysis",
    href: "/topics/introduction-to-link-analysis",
    label: "Free",
    why: "The technique lesson. Entities, relationships, and a picture you can defend.",
  },
  {
    id: "intelligence-failures",
    title: "Intelligence Failures",
    href: "/topics/intelligence-failures",
    label: "Free",
    why: "The case lesson. What happens when the assumption is the story.",
  },
]

export type PaidPlan = {
  id: "normal"
  userPlan: UserPlan
  name: string
  priceAud: 9
  introPriceAud: 5
  cadence: "month"
  gst: "inc GST"
  label: string
  introLabel: string
  blurb: string
  cta: string
  href: string
}

export const normalPlan: PaidPlan = {
  id: "normal",
  userPlan: "pro",
  name: "Normal",
  priceAud: 9,
  introPriceAud: 5,
  cadence: "month",
  gst: "inc GST",
  label: "A$9/month inc GST",
  introLabel: "A$5 first month",
  blurb: "The normal plan for the rest of the academy.",
  cta: ACCOUNT_CTA,
  href: ACCOUNT_HREF,
}

export type CollectionPack = {
  id: string
  name: string
  priceAud: number
  label: string
  blurb: string
  cta: string
  href: string
}

/** One-off packs. All inside A$9–A$19. Not a second monthly tier. */
export const collectionPacks: CollectionPack[] = [
  {
    id: "cheatsheets",
    name: "Cheat sheets and checklists",
    priceAud: 9,
    label: "A$9 one-off, inc GST",
    blurb: "Estimative language, bias, writing, assumptions, and OSINT collection.",
    cta: ACCOUNT_CTA,
    href: ACCOUNT_HREF,
  },
  {
    id: "templates",
    name: "Template library",
    priceAud: 14,
    label: "A$14 one-off, inc GST",
    blurb: "Report formats, briefing notes, matrices, and collection plans.",
    cta: ACCOUNT_CTA,
    href: ACCOUNT_HREF,
  },
  {
    id: "guides",
    name: "Guides and handbooks",
    priceAud: 19,
    label: "A$19 one-off, inc GST",
    blurb: "The primer, risk framework, and digital evidence notes.",
    cta: ACCOUNT_CTA,
    href: ACCOUNT_HREF,
  },
]

export function getParseablePricing() {
  return {
    map: PRICE_MAP_LABEL,
    detail: PRICE_MAP_DETAIL,
    seller: SELLER_NAME,
    governingLaw: "Queensland, Australia",
    currency: "AUD",
    gst: "inc GST",
    normal: {
      id: normalPlan.id,
      name: normalPlan.name,
      userPlan: normalPlan.userPlan,
      priceAud: normalPlan.priceAud,
      label: normalPlan.label,
      introPriceAud: normalPlan.introPriceAud,
      introLabel: normalPlan.introLabel,
      introWho: "people who create a free account with their email",
      introTerms: INTRO_TERMS,
    },
    free: freeItems.map((item) => ({
      id: item.id,
      title: item.title,
      label: item.label,
      url: `${SITE_URL}${item.href}`,
    })),
    packs: collectionPacks.map((pack) => ({
      id: pack.id,
      name: pack.name,
      priceAud: pack.priceAud,
      label: pack.label,
      cadence: "one-off",
    })),
    userPlans: [...USER_PLANS],
    userPlanLabels: USER_PLAN_LABELS,
    billing: "not-connected",
    paymentsLive: false,
    checkout: "none",
    checkoutStatus: CHECKOUT_STATUS,
    cta: ACCOUNT_CTA,
    ctaUrl: `${SITE_URL}${ACCOUNT_HREF}`,
    refundPolicy: REFUND_POLICY,
    supportEmail: SUPPORT_EMAIL,
    lifetime: false,
    unlimited: false,
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
    },
  }
}
