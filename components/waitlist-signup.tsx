"use client"

import { useState } from "react"
import { HoneypotField } from "@/components/HoneypotField"

export function WaitlistSignup({ source = "waitlist" }: { source?: string }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const honeypot = (new FormData(form).get("website") as string) || ""
    if (honeypot !== "") {
      setSubmitted(true)
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website: honeypot }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError("Could not join the waitlist. Email us instead.")
      }
    } catch {
      setError("Could not join the waitlist. Email us instead.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <p className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
        You&apos;re on the waitlist. No card charged — checkout still isn&apos;t live.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative">
      <HoneypotField />
      <input
        type="email"
        required
        name="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-500 disabled:opacity-60"
      >
        {loading ? "Joining…" : "Join the waitlist"}
      </button>
      {error ? <p className="text-sm text-amber-300 sm:col-span-2">{error}</p> : null}
    </form>
  )
}
