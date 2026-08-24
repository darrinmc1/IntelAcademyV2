import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { CHECKOUT_STATUS, DISCLAIMER, briefStandalone, plans } from "@/lib/pricing"
import { academyBriefFaqs, faqJsonLd, pricingJsonLd } from "@/lib/aeo"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Intel Analyst Academy pricing: Free, Early Adopter $5/mo, Pro $10/mo. Academy Brief included on paid plans; standalone $29/mo when billing is live. Checkout isn't live — join the waitlist.",
}

function periodCopy(period: "month" | "forever") {
  return period === "month" ? "/mo" : " forever"
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      <section className="px-4 pt-16 pb-10 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Plans</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Free, Early Adopter $5/mo, Pro $10/mo
          </h1>
          <p className="text-lg text-slate-300">
            Academy Brief is included on paid plans, or $29/mo standalone when billing is live.
          </p>
          <p className="mt-4 inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200">
            {CHECKOUT_STATUS}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Machine-readable:{" "}
            <Link href="/pricing.json" className="text-cyan-400 underline underline-offset-2">
              /pricing.json
            </Link>{" "}
            ·{" "}
            <Link href="/llm.txt" className="text-cyan-400 underline underline-offset-2">
              /llm.txt
            </Link>
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "border-cyan-500/40 bg-cyan-500/10"
                  : "border-white/10 bg-slate-950/40"
              }`}
            >
              {plan.highlighted && (
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
                  Early adopter — lock in when billing is live
                </p>
              )}
              <h2 className="text-xl font-bold text-white">{plan.name}</h2>
              <div className="mt-3 mb-4">
                <span className="text-4xl font-extrabold text-white">{plan.priceLabel}</span>
                <span className="text-sm font-medium text-slate-400">{periodCopy(plan.period)}</span>
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
                <p className="mt-6 text-xs text-slate-500">Checkout isn&apos;t live — this joins the waitlist.</p>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">One-job tool</p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Academy Brief — {briefStandalone.priceLabel}/mo standalone
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">{briefStandalone.description}</p>
          <p className="mt-3 text-sm text-amber-200/90">{CHECKOUT_STATUS}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={briefStandalone.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-500"
            >
              Try the free preview <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/improvements"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        <p className="mx-auto max-w-6xl mt-8 text-sm text-slate-500">{DISCLAIMER}</p>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Common questions</h2>
          <div className="space-y-4">
            {academyBriefFaqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-white/10 bg-slate-950/40 p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
