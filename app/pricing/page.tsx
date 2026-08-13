import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { plans, briefStandalone, DISCLAIMER } from "@/lib/pricing"
import { pricingJsonLd, faqJsonLd } from "@/lib/aeo"

export const metadata = {
  title: "Pricing",
  description:
    "Intel Analyst Academy pricing: Free, Early Adopter $5/mo, Pro $10/mo. Academy Brief included on paid plans; standalone $29/mo. Parseable at /pricing.json.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple pricing. No surprises.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free. Lock in early adopter pricing. Academy Brief is included on paid plans.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Machine-readable:{" "}
            <Link href="/pricing.json" className="text-blue-700 underline underline-offset-2">
              /pricing.json
            </Link>{" "}
            ·{" "}
            <Link href="/llm.txt" className="text-blue-700 underline underline-offset-2">
              /llm.txt
            </Link>
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "border-blue-600 bg-white shadow-lg ring-1 ring-blue-600 scale-105"
                  : "border-slate-200 bg-white"
              }`}
              itemScope
              itemType="https://schema.org/Offer"
            >
              <meta itemProp="priceCurrency" content={plan.currency} />
              <meta itemProp="price" content={String(plan.price)} />
              <h3 className="font-bold text-xl mb-2" itemProp="name">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.priceLabel}</span>
                <span className="text-sm text-slate-500">
                  {plan.period === "month" ? "/month" : ` ${plan.period}`}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-6" itemProp="description">
                {plan.description}
              </p>
              {plan.name === "Early Adopter" && (
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
                  Early Adopter — Lock In Forever
                </p>
              )}
              <Link
                href={plan.href}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors mb-8 ${
                  plan.highlighted
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle
                      className={`h-4 w-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-blue-600" : "text-slate-400"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-xl border border-slate-200 bg-white p-6 md:p-8"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content={briefStandalone.currency} />
          <meta itemProp="price" content={String(briefStandalone.price)} />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">One-job tool</p>
          <h2 className="mt-2 text-2xl font-bold" itemProp="name">
            Academy Brief — {briefStandalone.priceLabel}/month standalone
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600" itemProp="description">
            {briefStandalone.description} Included in Early Adopter and Pro. Billing uses the existing
            subscription waitlist — not x402.
          </p>
          <Link
            href={briefStandalone.href}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Try the free preview <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-500">{DISCLAIMER}</p>
      </section>
    </div>
  )
}
