import type { Metadata } from "next"
import { ComingSoonJoin } from "@/components/coming-soon-join"

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Coming soon",
  description: "Coming soon. Join the list. Written lessons stay free.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <ComingSoonJoin source="pricing-coming-soon" />
    </div>
  )
}
