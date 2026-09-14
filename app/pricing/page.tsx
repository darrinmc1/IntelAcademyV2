import type { Metadata } from "next"
import Link from "next/link"
import { CHECKOUT_STATUS, DISCLAIMER, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY } from "@/lib/pricing"
import { academyBriefFaqs, faqJsonLd, pricingJsonLd } from "@/lib/aeo"
import { PricingPlanGrid } from "@/components/pricing-plan-grid"

export const metadata: Metadata = {
  title: "Pricing",
  description: `Intel Analyst Academy pricing: ${PRICE_MAP_LABEL}. ${PRICE_MAP_DETAIL} Checkout isn't live — join the waitlist.`,
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
            {PRICE_MAP_LABEL}
          </h1>
          <p className="text-lg text-slate-300">{PRICE_MAP_DETAIL}</p>
          <p className="mt-4 inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200">
            {CHECKOUT_STATUS}
          </p>
          <p className="mt-4 text-sm text-slate-400">{REFUND_POLICY}</p>
          <p className="mt-4 text-sm text-slate-500">
            Machine-readable:{" "}
            <Link href="/pricing.json" className="text-cyan-400 underline underline-offset-2">
              /pricing.json
            </Link>{" "}
            ·{" "}
            <Link href="/llm.txt" className="text-cyan-400 underline underline-offset-2">
              /llm.txt
            </Link>{" "}
            ·{" "}
            <Link href="/refunds" className="text-cyan-400 underline underline-offset-2">
              /refunds
            </Link>
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <PricingPlanGrid variant="full" />
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
