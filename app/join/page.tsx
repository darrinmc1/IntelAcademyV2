import type { Metadata } from "next"
import Link from "next/link"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, SUPPORT_EMAIL } from "@/lib/pricing"
import { SignupOrWaitlistPlanLabels } from "@/components/signup-or-waitlist-plan-labels"
import { WaitlistSignup } from "@/components/waitlist-signup"

export const metadata: Metadata = {
  title: "Join",
  description: "Join The Intel Analyst Academy — register free or join the waitlist. Checkout is not live.",
}

export default function JoinPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Join</p>
        <h1 className="text-4xl font-bold text-white mb-4">Join the academy</h1>
        <p className="text-lg text-slate-300 mb-4">{CHECKOUT_STATUS}</p>
        <p className="text-slate-400 mb-6">
          Free accounts live at{" "}
          <Link href="/register" className="text-cyan-400 underline underline-offset-2">
            /register
          </Link>
          . {PRICE_MAP_DETAIL} Paid plans are waitlist only — this page is not a checkout.
        </p>
        <SignupOrWaitlistPlanLabels className="mb-6 text-sm text-slate-300 space-y-1" />
        <WaitlistSignup source="join" />
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/register" className="text-cyan-400 underline underline-offset-2">
            Register free
          </Link>
          <Link href="/waitlist" className="text-cyan-400 underline underline-offset-2">
            Waitlist
          </Link>
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  )
}
