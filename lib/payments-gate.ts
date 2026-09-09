/**
 * Cash-site payment gate.
 *
 * NOW: waitlist. Checkout, /buy, and Stripe API calls stay parked.
 * LATER: flip PAYMENTS_LIVE=true and set Stripe env vars (Preview first).
 * Do not set Production until asked.
 *
 * A true flag without Stripe keys still stays gated.
 */
export function isPaymentsLive(): boolean {
  return process.env.PAYMENTS_LIVE === "true" && Boolean(process.env.STRIPE_SECRET_KEY)
}

export const WAITLIST_PATH = "/waitlist"
export const BUY_PATH = "/buy"
export const STRIPE_CHECKOUT_PATH = "/api/stripe/checkout"
export const STRIPE_WEBHOOK_PATH = "/api/stripe/webhook"
