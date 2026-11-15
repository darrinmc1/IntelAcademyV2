import type { Metadata } from "next"
import { REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"

export const metadata: Metadata = {
  alternates: { canonical: "/refunds" },
  title: "Refunds",
  description: "Refund wording for The Intel Analyst Academy. Pending legal review. Checkout is not live.",
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">Refunds</h1>
        <div className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 mb-6 text-amber-50">
          <p className="font-semibold">Pending legal review</p>
          <p className="mt-2 text-amber-100">{REFUND_POLICY}</p>
        </div>
        <p className="text-sm text-slate-300">
          Email{" "}
          <a className="text-cyan-400 underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </div>
  )
}
