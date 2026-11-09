import type { Metadata } from "next"
import Link from "next/link"
import { ComingSoonJoin } from "@/components/coming-soon-join"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import {
  FREE_SAMPLE_LESSONS,
  FREE_SAMPLE_PDFS,
  NOT_INCLUDED,
  PAID_CTA,
  PRICE_MAP_DETAIL,
  offers,
} from "@/lib/pricing"

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing",
  description:
    "Free sample A$0. Path Pack A$15, Written Library A$39, and Video Pack A$19 are planned one-offs. Checkout is not live. Paid packs: Coming soon / join the list.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">AUD</p>
        <h1 className="mb-3 text-4xl font-bold text-white">Pricing</h1>
        <p className="mb-3 max-w-3xl text-slate-300">{PRICE_MAP_DETAIL}</p>
        <p className="mb-10 max-w-3xl text-sm text-slate-400">
          Prices are one-off amounts in Australian dollars. Checkout is not live, so paid packs cannot be bought on this page.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h2 className="text-xl font-bold text-white">{offer.name}</h2>
                <p className="text-2xl font-semibold text-cyan-300">{offer.priceLabel}</p>
              </div>
              <p className="mb-3 text-xs uppercase tracking-widest text-slate-400">
                {offer.billing === "free" ? "Free" : "One-off"} · {offer.status}
              </p>
              <p className="mb-4 text-sm text-slate-300">{offer.summary}</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {offer.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto">
                {offer.id === "free" ? (
                  <div className="flex flex-col gap-2 text-sm">
                    {FREE_SAMPLE_LESSONS.map((lesson) => (
                      <Link key={lesson.href} href={lesson.href} className="text-cyan-400 underline underline-offset-2">
                        {lesson.title}
                      </Link>
                    ))}
                    {FREE_SAMPLE_PDFS.map((pdf) => (
                      <Link key={pdf.title} href={pdf.href} className="text-cyan-400 underline underline-offset-2">
                        {pdf.title}
                      </Link>
                    ))}
                    <Link
                      href={offer.href}
                      className="mt-2 inline-flex w-fit rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
                    >
                      {offer.cta}
                    </Link>
                    <Link href="/register" className="text-cyan-400 underline underline-offset-2">
                      Register
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={offer.href}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    {PAID_CTA}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 max-w-3xl text-sm text-slate-400">
          <h2 className="mb-2 text-lg font-semibold text-white">Not included</h2>
          <p>{NOT_INCLUDED}</p>
        </section>

        <div className="mt-8 max-w-3xl">
          <MerchantOfRecordDisclosure />
        </div>

        <div className="mt-12">
          <ComingSoonJoin source="pricing-coming-soon" variant="block" />
        </div>
      </div>
    </div>
  )
}
