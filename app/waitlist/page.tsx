import type { Metadata } from "next"
import Link from "next/link"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"
import { SignupOrWaitlistPlanLabels } from "@/components/signup-or-waitlist-plan-labels"
import { WaitlistSignup } from "@/components/waitlist-signup"

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    `Join the Intel Analyst Academy waitlist. ${PRICE_MAP_LABEL} Checkout isn't live.`,
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Waitlist</p>
        <h1 className="text-4xl font-bold text-white mb-4">Payments are not live</h1>
        <p className="text-lg text-slate-300 mb-4">{CHECKOUT_STATUS}</p>
        <p className="text-slate-400 mb-4">
          {PRICE_MAP_LABEL} {PRICE_MAP_DETAIL} Academy Brief is a tool, not a standalone SKU.
          No Stripe checkout on this page.
        </p>
        <SignupOrWaitlistPlanLabels className="mb-8 text-left text-sm text-slate-300 space-y-1 max-w-md mx-auto" />
        <WaitlistSignup source="waitlist" />
        <p className="mt-6 text-sm text-slate-400">{REFUND_POLICY}</p>
        <p className="mt-4 text-sm text-slate-500">
          Questions?{" "}
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact
          </Link>{" "}
          or email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <p className="mt-2 text-sm text-slate-500">
          See{" "}
          <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
            /pricing
          </Link>{" "}
          or{" "}
          <Link href="/register" className="text-cyan-400 underline underline-offset-2">
            register free
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
