import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"
import { CHECKOUT_STATUS, REFUND_POLICY } from "@/lib/pricing"
import { WaitlistSignup } from "@/components/waitlist-signup"

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <Construction className="h-12 w-12 text-blue-700" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">We&apos;re Building Something Better</h1>
          <p className="text-slate-600 max-w-lg mx-auto mb-4 text-lg">
            {CHECKOUT_STATUS} When billing is live, early adopters lock in the{" "}
            <strong className="text-blue-700">$5/month</strong> rate forever. Planned map: Free, Early
            Adopter $5/mo, Pro $10/mo. Academy Brief is included on paid plans — not a standalone SKU.
          </p>
          <p className="text-slate-500 max-w-lg mx-auto mb-6 text-sm">{REFUND_POLICY}</p>
          <div className="mx-auto max-w-md mb-8 text-left">
            <WaitlistSignup source="improvements" />
          </div>
          <p className="text-slate-500 max-w-lg mx-auto mb-8 text-sm">
            Same planned prices as{" "}
            <Link href="/pricing" className="text-blue-700 underline underline-offset-2">
              /pricing
            </Link>
            . Canonical waitlist:{" "}
            <Link href="/waitlist" className="text-blue-700 underline underline-offset-2">
              /waitlist
            </Link>
            .
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
