import type { Metadata } from "next"
import Link from "next/link"
import { REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"

export const metadata: Metadata = {
  alternates: { canonical: "/refunds" },
  title: "Refunds",
  description: REFUND_POLICY,
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">Refunds</h1>
        <p className="text-lg text-slate-200 mb-6">{REFUND_POLICY}</p>
        <p className="text-sm text-slate-500">
          Questions:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
          {" · "}
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact
          </Link>
        </p>
      </div>
    </div>
  )
}
