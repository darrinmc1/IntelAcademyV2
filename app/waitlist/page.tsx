import type { Metadata } from "next"
import Link from "next/link"
import { SUPPORT_EMAIL } from "@/lib/pricing"
import { WaitlistSignup } from "@/components/waitlist-signup"

export const metadata: Metadata = {
  alternates: { canonical: "/waitlist" },
  title: "Join the list",
  description: "Join the Intel Analyst Academy list. Written lessons stay free.",
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Coming soon</p>
        <h1 className="text-4xl font-bold text-white mb-4">Join the list</h1>
        <p className="text-slate-300 mb-6">Written lessons stay free.</p>
        <div className="mx-auto max-w-xl text-left">
          <WaitlistSignup source="waitlist" buttonLabel="Join the list" successMessage="You're on the list." />
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Questions?{" "}
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
            Contact
          </Link>{" "}
          or email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <p className="mt-2 text-sm text-slate-500">
          <Link href="/register" className="text-cyan-400 underline underline-offset-2">
            Register free
          </Link>
        </p>
      </div>
    </div>
  )
}
