/**
 * Parseable pricing source of truth.
 * Used by /pricing, /pricing.json, /llm.txt, and FAQ schema.
 * Payments are not live yet — CTAs follow the existing /improvements pattern.
 * No x402 or crypto checkout.
 */

export const SITE_URL = "https://theintelanalystacademy.com"

export const DISCLAIMER =
  "Academy Brief is a training and education tool. It is not an operational intelligence product, does not constitute finished intelligence, and must not be used as a substitute for authorized analysis."

/** Shared human copy until Stripe checkout exists. */
export const CHECKOUT_STATUS =
  "Checkout isn't live yet. These are planned prices — join the waitlist. No card required today."

export type PlanId = "free" | "early_adopter" | "pro"

export type Plan = {
  id: PlanId
  name: string
  price: number
  currency: "USD"
  period: "month" | "forever"
  priceLabel: string
  description: string
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
    period: "forever",
    priceLabel: "$0",
    description: "Get started with courses and one Academy Brief preview. No credit card needed.",
    includesAcademyBrief: true,
    briefAllowance: "1 structured brief preview",
    features: [
      "All courses & lessons",
      "1 Academy Brief preview",
      "Community access",
    ],
    cta: "Get Started Free",
    href: "/tools/academy-brief",
    highlighted: false,
    available: true,
  },
  {
    id: "early_adopter",
    name: "Early Adopter",
    price: 5,
    currency: "USD",
    period: "month",
    priceLabel: "$5",
    description: "Lock in early adopter pricing when billing is live — never pay more. Includes Academy Brief.",
    includesAcademyBrief: true,
    briefAllowance: "Unlimited Academy Briefs (when billing is live)",
    features: [
      "Everything in Free",
      "Academy Brief included",
      "All Pro template packs",
      "All interactive tools",
      "Price locked forever when billing is live",
    ],
    cta: "Join the waitlist",
    href: "/improvements",
    highlighted: true,
    available: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 10,
    currency: "USD",
    period: "month",
    priceLabel: "$10",
    description: "Full access when it launches. Academy Brief plus advanced AI tools.",
    includesAcademyBrief: true,
    briefAllowance: "Unlimited Academy Briefs plus advanced models",
    features: [
      "Everything in Early Adopter",
      "Academy Brief included",
      "Advanced features & AI tools",
      "New content priority",
      "Priority support",
    ],
    cta: "Join the waitlist",
    href: "/improvements",
    highlighted: false,
    available: false,
  },
]

/** Standalone Brief access if someone only wants the one-job tool. */
export const briefStandalone = {
  id: "academy_brief",
  name: "Academy Brief",
  price: 29,
  currency: "USD" as const,
  period: "month" as const,
  priceLabel: "$29",
  description:
    "One-job tool: paste a raw intel dump and receive a structured brief using the academy method, with citations to real lessons. Included in paid plans; also available standalone.",
  includedIn: ["early_adopter", "pro"] as PlanId[],
  href: "/tools/academy-brief",
  available: false,
}

export function getParseablePricing() {
  return {
    currency: "USD",
    billing: "subscription",
    paymentsLive: false,
    checkout: "waitlist",
    checkoutStatus: CHECKOUT_STATUS,
    x402: false,
    disclaimer: DISCLAIMER,
    product: {
      id: "academy-brief",
      name: "Academy Brief",
      url: `${SITE_URL}/tools/academy-brief`,
      job: "Paste a raw intel dump or notes. Receive a structured brief using the academy method, citing real catalog topics and lessons.",
      not: "Not a chat-with-the-site assistant. Not an operational intelligence product.",
      includedInPaidPlans: true,
      standaloneMonthlyUsd: briefStandalone.price,
    },
    plans: plans.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      currency: p.currency,
      period: p.period,
      includesAcademyBrief: p.includesAcademyBrief,
      briefAllowance: p.briefAllowance,
      features: p.features,
      available: p.available,
      url: `${SITE_URL}${p.href}`,
    })),
    standalone: {
      id: briefStandalone.id,
      name: briefStandalone.name,
      price: briefStandalone.price,
      currency: briefStandalone.currency,
      period: briefStandalone.period,
      includedIn: briefStandalone.includedIn,
      available: briefStandalone.available,
      url: `${SITE_URL}${briefStandalone.href}`,
    },
  }
}
