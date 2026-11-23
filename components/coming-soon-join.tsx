import Link from "next/link"
import { ACCOUNT_CTA, ACCOUNT_HREF, INTRO_TERMS, normalPlan } from "@/lib/pricing"

/**
 * Price reminder plus the only call to action: a free account.
 * No waitlist form and no checkout.
 */
export function ComingSoonJoin({
  variant = "page",
  tone = "dark",
}: {
  source?: string
  variant?: "page" | "block"
  tone?: "dark" | "light"
}) {
  const Heading = variant === "page" ? "h1" : "h2"
  const headingColor = tone === "light" ? "text-slate-900" : "text-white"
  const bodyColor = tone === "light" ? "text-slate-700" : "text-slate-300"
  const mutedColor = tone === "light" ? "text-slate-600" : "text-slate-400"
  const buttonClass =
    tone === "light"
      ? "inline-flex items-center rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600"
      : "inline-flex items-center rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600 border border-cyan-400/30"

  return (
    <div className={variant === "page" ? "mx-auto max-w-xl" : "mx-auto max-w-md text-left"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${mutedColor} mb-3`}>Pricing</p>
      <Heading className={variant === "page" ? `text-4xl font-bold ${headingColor} mb-3` : `text-xl font-bold ${headingColor} mb-2`}>
        {normalPlan.label}
      </Heading>
      <p className={`${bodyColor} mb-2`}>
        {normalPlan.introLabel} if you create a free account with your email.
      </p>
      <p className={`text-sm ${mutedColor} mb-6`}>{INTRO_TERMS} This page does not take payment.</p>
      <Link href={ACCOUNT_HREF} className={buttonClass}>
        {ACCOUNT_CTA}
      </Link>
    </div>
  )
}
