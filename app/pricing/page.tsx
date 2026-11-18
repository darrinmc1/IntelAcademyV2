import type { Metadata } from "next"
import Link from "next/link"
import {
  ACCOUNT_CTA,
  ACCOUNT_HREF,
  INTRO_TERMS,
  NO_LIFETIME,
  PENDING_LEGAL_REVIEW,
  REFUND_POLICY,
  SELLER_NAME,
  SUPPORT_EMAIL,
  collectionPacks,
  freeItems,
  normalPlan,
} from "@/lib/pricing"

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing",
  description:
    "Normal plan A$9/month inc GST. A$5 for the first month if you create a free account with your email. No checkout on this site.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Pricing</p>
        <h1 className="text-4xl font-bold text-white mb-3">One price map. No checkout.</h1>
        <p className="text-slate-300 max-w-2xl mb-2">
          The normal plan is <span className="text-white font-semibold">{normalPlan.label}</span>.
          Limited time: <span className="text-white font-semibold">{normalPlan.introLabel}</span> for
          people who create a free account with their email.
        </p>
        <p className="text-slate-400 max-w-2xl mb-8">{INTRO_TERMS}</p>

        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {freeItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 hover:border-emerald-400/50 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-2">Free</p>
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{item.why}</p>
            </Link>
          ))}
        </div>

        <section className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 md:p-8 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-2">Normal plan</p>
          <h2 className="text-3xl font-bold text-white">{normalPlan.label}</h2>
          <p className="mt-2 text-lg text-slate-200">
            {normalPlan.introLabel} for signed-up members who create a free account with their email.
          </p>
          <p className="mt-2 text-sm text-slate-400">{normalPlan.blurb} {INTRO_TERMS}</p>
          <p className="mt-2 text-sm text-slate-400">{NO_LIFETIME}</p>
          <Link
            href={ACCOUNT_HREF}
            className="mt-6 inline-flex items-center rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500 border border-cyan-400/30"
          >
            {ACCOUNT_CTA}
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Collections and download packs</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {collectionPacks.map((pack) => (
              <div key={pack.id} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{pack.name}</h3>
                <p className="mt-2 text-cyan-300 font-medium">{pack.label}</p>
                <p className="mt-2 text-sm text-slate-400">{pack.blurb}</p>
                <Link
                  href={pack.href}
                  className="mt-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  {pack.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-amber-400/40 bg-amber-500/10 p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-200 mb-2">
            {PENDING_LEGAL_REVIEW}
          </p>
          <p className="text-slate-100">{REFUND_POLICY}</p>
          <p className="mt-2 text-sm text-slate-300">
            <Link href="/refunds" className="text-cyan-300 underline underline-offset-2">
              Refunds
            </Link>
            {" · "}
            <Link href="/terms" className="text-cyan-300 underline underline-offset-2">
              Terms
            </Link>
          </p>
        </div>

        <p className="text-sm text-slate-500">
          Seller: {SELLER_NAME}.{" "}
          <a className="text-cyan-400 underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          . This page does not take a card.
        </p>
      </div>
    </div>
  )
}
