import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY } from "@/lib/pricing"

export function HomepagePricingSummary() {
  return (
    <section className="py-6" aria-labelledby="homepage-pricing-heading">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 mb-2">Coming soon</p>
              <h2 id="homepage-pricing-heading" className="text-2xl md:text-3xl font-bold text-white">
                {PRICE_MAP_LABEL}
              </h2>
              <p className="mt-2 text-slate-300">{PRICE_MAP_DETAIL}</p>
              <p className="mt-3 text-sm font-medium text-amber-200">{CHECKOUT_STATUS}</p>
              <p className="mt-2 text-sm text-slate-400">{REFUND_POLICY}</p>
            </div>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 shrink-0"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/register"
              className="rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-colors hover:border-cyan-500/40"
            >
              <p className="text-sm font-medium text-slate-300">Available now</p>
              <p className="mt-1 text-xl font-bold text-white">Written lessons — free</p>
              <p className="mt-1 text-xs text-slate-400">Start a path. No card. Humor stays on.</p>
            </Link>
            <Link
              href="/waitlist"
              className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4 transition-colors hover:border-cyan-400/60"
            >
              <p className="text-sm font-medium text-slate-300">Waitlist</p>
              <p className="mt-1 text-xl font-bold text-white">Video plan — coming soon</p>
              <p className="mt-1 text-xs text-slate-400">Included on the video plan. Checkout isn&apos;t live.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
