import type { Metadata } from "next"
import Link from "next/link"
import { CHECKOUT_STATUS, REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Refunds",
  description: REFUND_POLICY,
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Refunds</p>
        <h1 className="text-4xl font-bold text-white mb-4">Refund policy</h1>
        <p className="text-lg text-slate-200 mb-4">{REFUND_POLICY}</p>
        <p className="text-slate-400 mb-4">{CHECKOUT_STATUS}</p>
        <p className="text-slate-400 mb-6">
          That same sentence is on{" "}
          <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
            /pricing
          </Link>
          ,{" "}
          <Link href="/pricing.json" className="text-cyan-400 underline underline-offset-2">
            /pricing.json
          </Link>
          , and{" "}
          <Link href="/terms" className="text-cyan-400 underline underline-offset-2">
            /terms
          </Link>
          . There is no competing 30-day money-back line.
        </p>
        <p className="text-sm text-slate-500">
          Billing questions:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </div>
  )
}
