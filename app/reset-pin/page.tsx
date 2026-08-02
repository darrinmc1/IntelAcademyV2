"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ShieldCheck, Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react"

function ResetPinForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token") || ""

  const [pin, setPin] = useState("")
  const [confirmPin, setConfirmPin] = useState("")
  const [showPin, setShowPin] = useState(false)
  const [error, setError] = useState("")
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!token) {
      setError("Missing reset token. Use the link from your email.")
      return
    }
    if (!/^\d{4}$/.test(pin)) {
      setError("Your PIN must be exactly 4 digits.")
      return
    }
    if (pin !== confirmPin) {
      setError("PINs don't match. Try again.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/reset-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, pin }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Could not reset PIN.")
      } else {
        setDone(true)
        setTimeout(() => router.push("/login"), 2500)
      }
    } catch {
      setError("Network error. Check your connection.")
    }
    setLoading(false)
  }

  if (done) {
    return (
      <div className="text-center">
        <div className="inline-flex p-3 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
          <CheckCircle2 className="w-7 h-7 text-green-400" />
        </div>
        <p className="text-slate-300 mb-2">Your PIN has been reset and your account is unlocked.</p>
        <p className="text-sm text-slate-500">Redirecting you to login…</p>
        <Link href="/login" className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
          Go to login now
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">New 4-Digit PIN</label>
          <div className="relative">
            <input
              type={showPin ? "text" : "password"}
              inputMode="numeric"
              pattern="\d{4}"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="••••"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 
                         tracking-[0.5em] text-center text-lg
                         focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPin(!showPin)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Confirm New PIN</label>
          <input
            type="password"
            inputMode="numeric"
            pattern="\d{4}"
            maxLength={4}
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="••••"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 
                       tracking-[0.5em] text-center text-lg
                       focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          />
        </div>
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
            <ShieldCheck className="w-4 h-4" />
            Set new PIN
          </>
        )}
      </button>

      <div className="mt-6 text-center text-sm text-slate-500">
        <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Back to login
        </Link>
      </div>
    </form>
  )
}

export default function ResetPinPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Set a New PIN</h1>
          <p className="text-slate-400">Choose a new 4-digit PIN to unlock your account</p>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
          <Suspense fallback={<div className="text-center text-slate-500 text-sm">Loading…</div>}>
            <ResetPinForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
