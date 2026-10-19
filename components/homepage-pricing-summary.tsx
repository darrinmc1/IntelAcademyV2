import { ComingSoonJoin } from "@/components/coming-soon-join"

export function HomepagePricingSummary() {
  return (
    <section className="py-6" aria-labelledby="homepage-pricing-heading">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div id="homepage-pricing-heading">
            <ComingSoonJoin source="pricing-coming-soon" variant="block" />
          </div>
        </div>
      </div>
    </section>
  )
}
