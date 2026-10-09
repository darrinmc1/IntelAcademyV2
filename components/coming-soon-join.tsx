"use client"

import { WaitlistSignup } from "@/components/waitlist-signup"

/**
 * Neutral coming-soon signup. No prices, humor, dates, or scarcity.
 * Posts through the existing /api/subscribe form.
 */
export function ComingSoonJoin({
  source = "pricing-coming-soon",
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
  return (
    <div className={variant === "page" ? "mx-auto max-w-xl" : "mx-auto max-w-md text-left"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${mutedColor} mb-3`}>Coming soon</p>
      <Heading className={variant === "page" ? `text-4xl font-bold ${headingColor} mb-3` : `text-xl font-bold ${headingColor} mb-2`}>
        Coming soon
      </Heading>
      <p className={`${bodyColor} mb-2`}>Join the list.</p>
      <p className={`text-sm ${mutedColor} mb-6`}>Written lessons stay free.</p>
      <WaitlistSignup
        source={source}
        buttonLabel="Join the list"
        successMessage="You're on the list."
      />
    </div>
  )
}
