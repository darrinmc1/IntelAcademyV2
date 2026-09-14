import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY } from "@/lib/pricing"
import { PricingPlanGrid } from "@/components/pricing-plan-grid"

export function HomepagePricingSummary() {
  return (
    <section className="py-6" aria-labelledby="homepage-pricing-heading">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-2">Plans</p>
              <h2 id="homepage-pricing-heading" className="text-2xl md:text-3xl font-bold text-white">
                {PRICE_MAP_LABEL}
              </h2>
              <p className="mt-2 text-slate-300">{PRICE_MAP_DETAIL}</p>
              <p className="mt-3 text-sm font-medium text-amber-200">{CHECKOUT_STATUS}</p>
              <p className="mt-2 text-sm text-slate-400">{REFUND_POLICY}</p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 shrink-0"
            >
              See full pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <PricingPlanGrid variant="summary" />
        </div>
      </div>
    </section>
  )
}
