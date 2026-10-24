import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  alternates: { canonical: "/refunds" },
  title: "Refunds",
  description: "The site does not take a card, so there is nothing to refund.",
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">Refunds</h1>
        <p className="text-lg text-slate-200 mb-6">
          The site does not take a card, so there is nothing to refund.
        </p>
        <p className="text-sm text-slate-500">
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact form
          </Link>
        </p>
      </div>
    </div>
  )
}
