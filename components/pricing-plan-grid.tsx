import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { plans } from "@/lib/pricing"

type PricingPlanGridProps = {
  variant: "summary" | "full"
}

export function PricingPlanGrid({ variant }: PricingPlanGridProps) {
  if (variant === "summary") {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {plans.map((plan) => (
          <Link
            key={plan.id}
            href="/pricing"
            className={`rounded-xl border p-4 transition-colors hover:border-cyan-500/40 ${
              plan.highlighted
                ? "border-cyan-500/40 bg-cyan-500/10"
                : "border-white/10 bg-slate-950/40"
            }`}
          >
            <p className="text-sm font-medium text-slate-300">{plan.name}</p>
            <p className="mt-1 text-2xl font-bold text-white">{plan.priceLabel}</p>
            <p className="mt-1 text-xs text-slate-400">{plan.blurb}</p>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative flex flex-col rounded-2xl border p-6 ${
            plan.highlighted
              ? "border-cyan-500/40 bg-cyan-500/10"
              : "border-white/10 bg-slate-950/40"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            {plan.blurb}
          </p>
          <h2 className="text-xl font-bold text-white">{plan.name}</h2>
          <div className="mt-3 mb-4">
            <span className="text-4xl font-extrabold text-white">{plan.priceLabel}</span>
          </div>
          <p className="text-sm text-slate-300 mb-6">{plan.description}</p>
          <Link
            href={plan.href}
            className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors mb-8 ${
              plan.highlighted
                ? "bg-cyan-600 text-white hover:bg-cyan-500"
                : "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
            }`}
          >
            {plan.cta} <ArrowRight className="h-4 w-4" />
          </Link>
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle
                  className={`h-4 w-4 mt-0.5 shrink-0 ${
                    plan.highlighted ? "text-cyan-400" : "text-slate-500"
                  }`}
                />
                {feature}
              </li>
            ))}
          </ul>
          {!plan.available && (
            <p className="mt-6 text-xs text-slate-500">
              Checkout isn&apos;t live — this joins the waitlist, not a Stripe Buy.
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
