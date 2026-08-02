"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Shield, Eye, EyeOff, LogIn, AlertCircle, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [codename, setCodename] = useState("")
  const [pin, setPin] = useState("")
  const [showPin, setShowPin] = useState(false)
  const [error, setError] = useState("")
  const [locked, setLocked] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLocked(false)

    if (!/^\d{4}$/.test(pin)) {
      setError("Your PIN is 4 digits.")
      return
    }

    setLoading(true)
    const result = await login(codename.trim(), pin)

    if (result.success) {
      // Return to the page the user was sent from (e.g. /admin), if it's a safe
      // internal path; otherwise go to the profile.
      const redirect = new URLSearchParams(window.location.search).get("redirect")
      router.push(redirect && redirect.startsWith("/") && !redirect.startsWith("//") ? redirect : "/profile")
    } else {
      setError(result.error || "Login failed")
      setLocked(!!result.locked)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Agent Login</h1>
          <p className="text-slate-400">Access your classified training records</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
          {error && (
            <div
              className={`flex items-center gap-2 p-3 mb-4 rounded-lg text-sm border ${
                locked
                  ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                  : "bg-red-500/10 border-red-500/20 text-red-400"
              }`}
            >
              {locked ? <Lock className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Agent Codename</label>
              <input
                type="text"
                value={codename}
                onChange={(e) => setCodename(e.target.value)}
                placeholder="Shadow Falcon"
                required
                autoComplete="username"
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 
                           focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">4-Digit PIN</label>
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
                  autoComplete="current-password"
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
                <LogIn className="w-4 h-4" />
                Access HQ
              </>
            )}
          </button>

          <div className="mt-4 text-center">
            <Link href="/forgot-pin" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
              Forgot your PIN?
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-slate-500">
            New recruit?{" "}
            <Link href="/register" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Create your agent profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
