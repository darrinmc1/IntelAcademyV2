"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useUser } from "@/components/user-provider"
import { UserPlus, Eye, EyeOff, AlertCircle, Dices } from "lucide-react"
import { generateCodename } from "@/lib/codename-generator"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()
  const { profile } = useUser()
  const [email, setEmail] = useState("")
  const [pin, setPin] = useState("")
  const [confirmPin, setConfirmPin] = useState("")
  const [codename, setCodename] = useState(profile?.codename || generateCodename())
  const [showPin, setShowPin] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [migrateProgress, setMigrateProgress] = useState(true)

  function rerollCodename() {
    setCodename(generateCodename())
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!/^\d{4}$/.test(pin)) {
      setError("Your PIN must be exactly 4 digits.")
      return
    }
    if (pin !== confirmPin) {
      setError("PINs don't match. An analyst should notice these things.")
      return
    }

    setLoading(true)

    // Migrate existing localStorage profile if user wants
    const existingProfile = migrateProgress && profile ? {
      xp: profile.xp,
      badges: profile.badges,
      lessonsCompleted: profile.lessonsCompleted,
      lessonsViewed: profile.lessonsViewed,
      streakDays: profile.streakDays,
      bestStreak: profile.bestStreak,
      lastVisitDate: profile.lastVisitDate,
    } : undefined

    const result = await register(email, pin, codename, existingProfile)
    
    if (result.success) {
      router.push("/profile")
    } else {
      setError(result.error || "Registration failed")
    }
    setLoading(false)
  }

  const hasExistingProgress = profile && (profile.lessonsCompleted.length > 0 || profile.xp > 0)

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <UserPlus className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Recruit Registration</h1>
          <p className="text-slate-400">Create your agent profile to save your progress</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
          {error && (
            <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* Codename */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Agent Codename</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={codename}
                  onChange={(e) => setCodename(e.target.value)}
                  className="flex-grow px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500
                             focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={rerollCodename}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  title="Re-roll codename"
                >
                  <Dices className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Email */}
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

            {/* PIN */}
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
              <p className="text-xs text-slate-500 mt-1.5">
                Choose 4 digits you'll remember. After 5 wrong tries your account locks until you reset it by email.
              </p>
            </div>

            {/* Confirm PIN */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Confirm PIN</label>
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

            {/* Migrate existing progress */}
            {hasExistingProgress && (
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={migrateProgress}
                    onChange={(e) => setMigrateProgress(e.target.checked)}
                    className="mt-0.5 rounded border-white/30 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                  />
                  <div>
                    <div className="text-sm font-medium text-white">Transfer existing progress</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Migrate {profile?.xp || 0} XP, {profile?.lessonsCompleted.length || 0} completed lessons, 
                      and {profile?.badges.length || 0} badges to your new account.
                    </div>
                  </div>
                </label>
              </div>
            )}
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
                <UserPlus className="w-4 h-4" />
                Enlist as Agent
              </>
            )}
          </button>

          <div className="mt-6 text-center text-sm text-slate-500">
            Already recruited?{" "}
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Agent login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
