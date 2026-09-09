import Link from "next/link"
import { isPaymentsLive, STRIPE_CHECKOUT_PATH, WAITLIST_PATH } from "@/lib/payments-gate"
import { PARKED_STRIPE_PLANS, type PaidPlanId } from "@/lib/stripe-config"

/**
 * Flip-ready Stripe table. Not mounted on public waitlist surfaces.
 * /buy only renders this after isPaymentsLive() is true.
 */
export function StripePricingTable() {
  if (!isPaymentsLive()) {
    return (
      <p className="text-sm text-slate-400">
        Checkout is parked.{" "}
        <Link href={WAITLIST_PATH} className="text-cyan-400 underline underline-offset-2">
          Join the waitlist
        </Link>
        .
      </p>
    )
  }

  const plans = Object.keys(PARKED_STRIPE_PLANS) as PaidPlanId[]
  return (
    <form action={STRIPE_CHECKOUT_PATH} method="GET" className="space-y-4">
      <label className="block text-sm text-slate-300">
        Plan
        <select
          name="plan"
          defaultValue="video"
          className="mt-2 w-full rounded-lg border border-white/15 bg-slate-950/60 px-3 py-2 text-white"
        >
          {plans.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
      >
        Continue to checkout
      </button>
    </form>
  )
}
