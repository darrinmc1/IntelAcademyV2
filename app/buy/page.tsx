import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { StripePricingTable } from "@/components/stripe/pricing-table"
import { isPaymentsLive, WAITLIST_PATH } from "@/lib/payments-gate"

export const metadata: Metadata = {
  title: "Buy",
  description: "Checkout is gated. Join the waitlist until payments go live.",
}

/**
 * /buy stays in the tree (do not delete).
 * NOW: gate to /waitlist. LATER: isPaymentsLive() renders the Stripe table.
 */
export default function BuyPage() {
  if (!isPaymentsLive()) {
    redirect(WAITLIST_PATH)
  }

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Checkout</p>
        <h1 className="text-4xl font-bold text-white mb-4">Choose a plan</h1>
        <StripePricingTable />
      </div>
    </div>
  )
}
