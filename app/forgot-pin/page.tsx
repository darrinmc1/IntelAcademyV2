"use client"

import { useState } from "react"
import Link from "next/link"
import { KeyRound, AlertCircle, MailCheck, Send } from "lucide-react"

export default function ForgotPinPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/forgot-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.")
      } else {
        setSent(true)
      }
    } catch {
      setError("Network error. Check your connection.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <KeyRound className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Your PIN</h1>
          <p className="text-slate-400">Enter your email and we'll send a secure reset link</p>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
          {sent ? (
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                <MailCheck className="w-7 h-7 text-green-400" />
              </div>
              <p className="text-slate-300 mb-2">
                If that email matches an agent on file, a reset link is on its way.
              </p>
              <p className="text-sm text-slate-500">
                The link expires in 1 hour. Check your spam folder if you don't see it.
              </p>
              <Link
                href="/login"
                className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="agent@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 
                             focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold
                           border border-cyan-400/30 shadow-[0_0_15px_rgba(8,145,178,0.3)]
                           transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send reset link
                  </>
                )}
              </button>

              <div className="mt-6 text-center text-sm text-slate-500">
                Remembered it?{" "}
                <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
