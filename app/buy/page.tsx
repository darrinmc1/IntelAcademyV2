import type { Metadata } from "next"
import Link from "next/link"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"
import { SignupOrWaitlistPlanLabels } from "@/components/signup-or-waitlist-plan-labels"
import { WaitlistSignup } from "@/components/waitlist-signup"

export const metadata: Metadata = {
  title: "Buy",
  description: "Checkout is not live. Join the Intel Analyst Academy waitlist or contact us.",
}

export default function BuyPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 mb-3">No checkout</p>
        <h1 className="text-4xl font-bold text-white mb-4">You can&apos;t buy here yet</h1>
        <p className="text-lg text-slate-300 mb-4">{CHECKOUT_STATUS}</p>
        <p className="text-slate-400 mb-6">
          This is not a Stripe session, Payment Link, or Buy button. Planned map: {PRICE_MAP_LABEL}. {PRICE_MAP_DETAIL}{" "}
          Join the waitlist or contact us.
        </p>
        <SignupOrWaitlistPlanLabels className="mb-6 text-sm text-slate-300 space-y-1" />
        <WaitlistSignup source="buy" />
        <p className="mt-6 text-sm text-slate-400">{REFUND_POLICY}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/waitlist" className="text-cyan-400 underline underline-offset-2">
            Waitlist
          </Link>
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact
          </Link>
          <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
            Pricing
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  )
}
