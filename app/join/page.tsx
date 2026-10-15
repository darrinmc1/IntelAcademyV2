import type { Metadata } from "next"
import Link from "next/link"
import { SUPPORT_EMAIL } from "@/lib/pricing"
import { ComingSoonJoin } from "@/components/coming-soon-join"

export const metadata: Metadata = {
  alternates: { canonical: "/join" },
  title: "Join",
  description: "Join The Intel Analyst Academy. Written lessons are free. Other access is coming soon.",
}

export default function JoinPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <ComingSoonJoin source="pricing-coming-soon" />
      <div className="mx-auto mt-8 max-w-xl flex flex-wrap gap-4 text-sm">
        <Link href="/register" className="text-cyan-400 underline underline-offset-2">
          Register free
        </Link>
        <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
          Contact
        </Link>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 underline underline-offset-2">
          {SUPPORT_EMAIL}
        </a>
      </div>
    </div>
  )
}
