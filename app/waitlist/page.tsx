import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistSignup } from "@/components/waitlist-signup"

export const metadata: Metadata = {
  alternates: { canonical: "/waitlist" },
  title: "Join the list",
  description: "Email list for The Intel Analyst Academy. Create a free account if you want the A$5 first month on record.",
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">List</p>
        <h1 className="text-4xl font-bold text-white mb-4">Join the list</h1>
        <p className="text-slate-300 mb-4">
          This form only saves an email. It is not a checkout. The normal plan is A$9/month inc GST.
        </p>
        <p className="mb-6">
          <Link href="/register" className="inline-flex rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500">
            Create a free account
          </Link>
        </p>
        <div className="mx-auto max-w-xl text-left">
          <WaitlistSignup source="waitlist" buttonLabel="Join the list" successMessage="You're on the list." />
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Questions?{" "}
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact form
          </Link>
          .
        </p>
        <p className="mt-2 text-sm text-slate-500">
          <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
            Pricing
          </Link>
        </p>
      </div>
    </div>
  )
}
