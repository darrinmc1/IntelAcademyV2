import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { plans, briefStandalone, CHECKOUT_STATUS } from "@/lib/pricing"

function periodLabel(period: "month" | "forever") {
  return period === "month" ? "/mo" : " forever"
}

export function HomepagePricingSummary() {
  const offerings = [
    ...plans.map((plan) => ({
      name: plan.name,
      priceLabel: plan.priceLabel,
      period: periodLabel(plan.period),
      note: plan.id === "early_adopter" ? "Lock in when live" : plan.id === "pro" ? "When it launches" : "No card needed",
      highlighted: plan.highlighted,
    })),
    {
      name: briefStandalone.name,
      priceLabel: briefStandalone.priceLabel,
      period: "/mo",
      note: "Standalone tool",
      highlighted: false,
    },
  ]

  return (
    <section className="py-6" aria-labelledby="homepage-pricing-heading">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-2">Plans</p>
              <h2 id="homepage-pricing-heading" className="text-2xl md:text-3xl font-bold text-white">
                Free, Early Adopter $5/mo, Pro $10/mo
              </h2>
              <p className="mt-2 text-slate-300">
                Academy Brief is included on paid plans, or $29/mo standalone when billing is live.
              </p>
              <p className="mt-3 text-sm font-medium text-amber-200">{CHECKOUT_STATUS}</p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 shrink-0"
            >
              See full pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {offerings.map((offer) => (
              <Link
                key={offer.name}
                href="/pricing"
                className={`rounded-xl border p-4 transition-colors hover:border-cyan-500/40 ${
                  offer.highlighted
                    ? "border-cyan-500/40 bg-cyan-500/10"
                    : "border-white/10 bg-slate-950/40"
                }`}
              >
                <p className="text-sm font-medium text-slate-300">{offer.name}</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {offer.priceLabel}
                  <span className="text-sm font-medium text-slate-400">{offer.period}</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">{offer.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
