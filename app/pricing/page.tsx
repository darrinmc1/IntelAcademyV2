import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_STATUS, DISCLAIMER, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY } from "@/lib/pricing"
import { academyBriefFaqs, faqJsonLd, pricingJsonLd } from "@/lib/aeo"

export const metadata: Metadata = {
  title: "Coming soon",
  description: `${PRICE_MAP_LABEL} ${PRICE_MAP_DETAIL} Checkout isn't live — join the waitlist.`,
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      <section className="px-4 pt-16 pb-10 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 mb-3">Coming soon</p>
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
        <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2 items-stretch">
          <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">Available now</p>
            <h2 className="text-xl font-bold text-white">Written lessons</h2>
            <p className="mt-3 text-sm text-slate-300 mb-6">
              The catalog is free. No card. No fake checkout. Humor stays on.
            </p>
            <Link
              href="/register"
              className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
            >
              Start free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">Waitlist</p>
            <h2 className="text-xl font-bold text-white">Video plan</h2>
            <p className="mt-3 text-sm text-slate-300 mb-6">
              Course video is included on the video plan when it ships. Checkout isn&apos;t live — this is a
              waitlist, not a buy button.
            </p>
            <Link
              href="/waitlist"
              className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-500"
            >
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <p className="mx-auto max-w-3xl mt-8 text-sm text-slate-500">{DISCLAIMER}</p>
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
