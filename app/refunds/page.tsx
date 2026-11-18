import type { Metadata } from "next"
import Link from "next/link"
import {
  INTRO_TERMS,
  NO_LIFETIME,
  PENDING_LEGAL_REVIEW,
  REFUND_POLICY,
  SELLER_NAME,
  SUPPORT_EMAIL,
} from "@/lib/pricing"

export const metadata: Metadata = {
  alternates: { canonical: "/refunds" },
  title: "Refunds",
  description: "Refund terms for The Intel Analyst Academy. Pending legal review. 3-day refund. Cancel anytime.",
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">Refunds</h1>
        <div className="rounded-xl border border-amber-400/40 bg-amber-500/10 p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-200 mb-2">
            {PENDING_LEGAL_REVIEW}
          </p>
          <p className="text-lg text-slate-100">{REFUND_POLICY}</p>
        </div>
        <p className="text-slate-300 mb-4">{INTRO_TERMS}</p>
        <p className="text-slate-400 mb-4">{NO_LIFETIME}</p>
        <p className="text-slate-400 mb-6">
          The site does not take a card today, so there is no charge to reverse until billing exists. When a charge
          is made, the seller is {SELLER_NAME}, and the refund note above is the one that applies.
        </p>
        <p className="text-sm text-slate-500">
          <a className="text-cyan-400 underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          {" · "}
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact form
          </Link>
          {" · "}
          <Link href="/terms" className="text-cyan-400 underline underline-offset-2">
            Terms
          </Link>
        </p>
      </div>
    </div>
  )
}
