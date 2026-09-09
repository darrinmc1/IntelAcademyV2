import { SITE_URL } from "@/lib/pricing"
import { isPaymentsLive, STRIPE_CHECKOUT_PATH, WAITLIST_PATH } from "@/lib/payments-gate"
import type { UserPlan } from "@/lib/user-plan"

/**
 * Parked Stripe wiring. Server-only.
 * Public pages must keep using lib/pricing.ts (no live dollars) until the gate flips.
 * Dollar map matches parked branch intel-payments-when-videos-done / #160.
 */
export const STRIPE_SECRET_ENV = "STRIPE_SECRET_KEY"
export const STRIPE_WEBHOOK_SECRET_ENV = "STRIPE_WEBHOOK_SECRET"

export type PaidPlanId = "early" | "normal" | "video"

export const PARKED_STRIPE_PLANS: Record<
  PaidPlanId,
  {
    planId: PaidPlanId
    userPlan: UserPlan
    amountUsd: number
    priceEnv: string
  }
> = {
  early: { planId: "early", userPlan: "early", amountUsd: 5, priceEnv: "STRIPE_PRICE_EARLY" },
  normal: { planId: "normal", userPlan: "pro", amountUsd: 10, priceEnv: "STRIPE_PRICE_WRITTEN" },
  video: { planId: "video", userPlan: "video", amountUsd: 19, priceEnv: "STRIPE_PRICE_VIDEO" },
}

export function isPaidPlanId(value: unknown): value is PaidPlanId {
  return value === "early" || value === "normal" || value === "video"
}

export function getStripeSecret(): string | null {
  const secret = process.env[STRIPE_SECRET_ENV]
  return secret ? secret : null
}

export function getStripeWebhookSecret(): string | null {
  const secret = process.env[STRIPE_WEBHOOK_SECRET_ENV]
  return secret ? secret : null
}

export function getParkedStripePriceId(planId: PaidPlanId): string | null {
  const id = process.env[PARKED_STRIPE_PLANS[planId].priceEnv]
  return id ? id : null
}

export function userPlanForStripePriceId(priceId: string): UserPlan | null {
  for (const plan of Object.values(PARKED_STRIPE_PLANS)) {
    if (process.env[plan.priceEnv] === priceId) return plan.userPlan
  }
  return null
}

/** Public CTA target. Waitlist now; /api/stripe/checkout after the gate flips. */
export function checkoutStartPath(planId: PaidPlanId = "video"): string {
  if (!isPaymentsLive()) return WAITLIST_PATH
  return `${STRIPE_CHECKOUT_PATH}?plan=${planId}`
}

export function checkoutUrls() {
  return {
    success: `${SITE_URL}/register?checkout=success`,
    cancel: `${SITE_URL}${WAITLIST_PATH}`,
  }
}
