import Link from "next/link"
import { visibleOffers } from "@/lib/pricing"

export function HomepagePricingSummary() {
  return (
    <section className="py-6" aria-labelledby="homepage-pricing-heading">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 id="homepage-pricing-heading" className="mb-2 text-xl font-bold text-white">
            Offer
          </h2>
          <p className="mb-4 text-sm text-slate-400">
            Australian dollars. Checkout is not live.{" "}
            <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
              Full offer
            </Link>
            .
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {visibleOffers().map((offer) => (
              <li key={offer.id} className="rounded-xl border border-white/10 p-4">
                <p className="text-sm text-slate-300">{offer.name}</p>
                <p className="text-lg font-semibold text-cyan-300">{offer.priceLabel}</p>
                <p className="mt-1 text-xs text-slate-400">{offer.status}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/register"
            className="mt-6 inline-flex rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
          >
            Create a free account
          </Link>
        </div>
      </div>
    </section>
  )
}
