import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { CHECKOUT_STATUS } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a note to The Intel Analyst Academy.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Contact</p>
        <h1 className="text-4xl font-bold text-white mb-4">Talk to us</h1>
        <p className="text-lg text-slate-300 mb-4">{CHECKOUT_STATUS}</p>
        <p className="text-slate-400 mb-8">
          A question about a lesson, a correction, or something the site got wrong. Send it here.
        </p>
        <ContactForm />
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/waitlist" className="text-cyan-400 underline underline-offset-2">
            Waitlist
          </Link>
          <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
            Coming soon
          </Link>
          <Link href="/refunds" className="text-cyan-400 underline underline-offset-2">
            Refunds
          </Link>
          <Link href="/feedback" className="text-cyan-400 underline underline-offset-2">
            Feedback
          </Link>
        </div>
      </div>
    </div>
  )
}
