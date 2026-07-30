"use client"

import { useState } from "react"

type ThemeColors = {
  primary: string
  primaryHover: string
  bg: string
  bgGradient: string
  border: string
  accent: string
  text: string
  textMuted: string
  inputBg: string
  inputBorder: string
  inputFocus: string
  inputText: string
  inputPlaceholder: string
  badgeBg: string
  badgeText: string
  footerText: string
  successBadgeBg: string
  successBadgeText: string
  successBadgeBorder: string
}

const themes: Record<string, ThemeColors> = {
  banana: {
    primary: "bg-yellow-900",
    primaryHover: "hover:bg-yellow-950",
    bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
    bgGradient: "hero-gradient",
    border: "border-yellow-200/60",
    accent: "text-yellow-600",
    text: "text-yellow-950",
    textMuted: "text-yellow-900/70",
    inputBg: "bg-white/80",
    inputBorder: "border-yellow-200",
    inputFocus: "focus:border-yellow-500 focus:ring-yellow-200",
    inputText: "text-gray-900",
    inputPlaceholder: "placeholder:text-gray-400",
    badgeBg: "bg-yellow-900/10",
    badgeText: "text-yellow-900",
    footerText: "text-yellow-800/50",
    successBadgeBg: "bg-white/70",
    successBadgeText: "text-yellow-900",
    successBadgeBorder: "border-yellow-300/50",
  },
  emerald: {
    primary: "bg-emerald-600",
    primaryHover: "hover:bg-emerald-700",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    bgGradient: "bg-gradient-to-br from-emerald-100 to-teal-100",
    border: "border-emerald-200/60",
    accent: "text-emerald-600",
    text: "text-emerald-950",
    textMuted: "text-emerald-900/70",
    inputBg: "bg-white/80",
    inputBorder: "border-emerald-200",
    inputFocus: "focus:border-emerald-500 focus:ring-emerald-200",
    inputText: "text-gray-900",
    inputPlaceholder: "placeholder:text-gray-400",
    badgeBg: "bg-emerald-900/10",
    badgeText: "text-emerald-900",
    footerText: "text-emerald-800/50",
    successBadgeBg: "bg-white/70",
    successBadgeText: "text-emerald-900",
    successBadgeBorder: "border-emerald-300/50",
  },
  blue: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    bgGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
    border: "border-blue-200/60",
    accent: "text-blue-600",
    text: "text-blue-950",
    textMuted: "text-blue-900/70",
    inputBg: "bg-white/80",
    inputBorder: "border-blue-200",
    inputFocus: "focus:border-blue-500 focus:ring-blue-200",
    inputText: "text-gray-900",
    inputPlaceholder: "placeholder:text-gray-400",
    badgeBg: "bg-blue-900/10",
    badgeText: "text-blue-900",
    footerText: "text-blue-800/50",
    successBadgeBg: "bg-white/70",
    successBadgeText: "text-blue-900",
    successBadgeBorder: "border-blue-300/50",
  },
  slate: {
    primary: "bg-teal-600",
    primaryHover: "hover:bg-teal-500",
    bg: "bg-gradient-to-br from-slate-900 to-slate-800",
    bgGradient: "bg-gradient-to-br from-slate-800 to-slate-900",
    border: "border-slate-600/60",
    accent: "text-teal-400",
    text: "text-slate-50",
    textMuted: "text-slate-300",
    inputBg: "bg-slate-700/80",
    inputBorder: "border-slate-600",
    inputFocus: "focus:border-teal-500 focus:ring-teal-500/30",
    inputText: "text-slate-50",
    inputPlaceholder: "placeholder:text-slate-400",
    badgeBg: "bg-teal-500/10",
    badgeText: "text-teal-400",
    footerText: "text-slate-400/60",
    successBadgeBg: "bg-slate-700/70",
    successBadgeText: "text-teal-400",
    successBadgeBorder: "border-teal-500/40",
  },
}

interface EmailCaptureProps {
  variant?: "inline" | "hero" | "modal"
  siteName?: string
  theme?: string
  heading?: string
  subheading?: string
  source?: string
  showName?: boolean
}

export function EmailCapture({
  variant = "inline",
  siteName = "Intel Academy",
  theme = "slate",
  heading,
  subheading,
  source = "website",
  showName = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const colors = themes[theme] || themes.slate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, source }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage(data.message)
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  const siteEmoji = theme === "slate" ? "\uD83C\uDF10" : "\uD83C\uDF4C"

  // Success state
  if (status === "success") {
    return (
      <div
        className={`${
          variant === "hero" ? "py-12 px-8" : "py-8 px-6"
        } ${colors.bg} rounded-2xl ${colors.border} border-2 text-center`}
      >
        <div className="animate-bounce text-5xl mb-4">{siteEmoji}</div>
        <h3 className={`text-2xl font-extrabold ${colors.text} mb-2`}>
          You&apos;re In!
        </h3>
        <p className={`${colors.textMuted} text-lg`}>{message}</p>
        <div className={`mt-4 inline-flex items-center gap-2 ${colors.successBadgeBg} rounded-full px-4 py-2 border ${colors.successBadgeBorder}`}>
          <span className={`text-sm font-semibold ${colors.successBadgeText}`}>
            Academy Access: Confirmed
          </span>
          <span>✨</span>
        </div>
      </div>
    )
  }

  // Hero variant - large, prominent
  if (variant === "hero") {
    return (
      <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-8 md:p-12`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 ${colors.badgeBg} backdrop-blur-sm border ${colors.border} rounded-full px-4 py-2 mb-6`}>
            <span className="text-lg">{siteEmoji}</span>
            <span className={`text-sm font-semibold ${colors.badgeText} tracking-wide uppercase`}>
              Join the Academy
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold ${colors.text} mb-4`}>
            {heading || `Stay Intel-igent - Get Updates`}
          </h2>
          <p className={`text-lg ${colors.textMuted} mb-8 max-w-xl mx-auto`}>
            {subheading ||
              "Get early access to new modules, intel briefings, and exclusive training content delivered to your inbox."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {showName && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className={`w-full px-5 py-3.5 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} backdrop-blur-sm ${colors.inputText} ${colors.inputPlaceholder} focus:outline-none ${colors.inputFocus} focus:ring-2 transition-all text-base`}
              />
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className={`flex-1 px-5 py-3.5 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} backdrop-blur-sm ${colors.inputText} ${colors.inputPlaceholder} focus:outline-none ${colors.inputFocus} focus:ring-2 transition-all text-base`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap`}
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join the Academy"
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">{message}</p>
            )}
          </form>

          <p className={`text-xs ${colors.footerText} mt-4`}>
            No spam, ever. Unsubscribe anytime. Your intel stays classified.
          </p>
        </div>
      </div>
    )
  }

  // Modal variant
  if (variant === "modal") {
    return (
      <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 shadow-2xl max-w-md w-full`}>
        <div className="text-center mb-6">
          <span className="text-4xl block mb-3">{siteEmoji}</span>
          <h3 className={`text-xl font-extrabold ${colors.text} mb-1`}>
            {heading || "Join the Academy"}
          </h3>
          <p className={`text-sm ${colors.textMuted}`}>
            {subheading || "Get early access to new intel modules and training."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {showName && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className={`w-full px-4 py-3 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} ${colors.inputText} ${colors.inputPlaceholder} focus:outline-none ${colors.inputFocus} focus:ring-2 transition-all text-sm`}
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className={`w-full px-4 py-3 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} ${colors.inputText} ${colors.inputPlaceholder} focus:outline-none ${colors.inputFocus} focus:ring-2 transition-all text-sm`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full ${colors.primary} ${colors.primaryHover} text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {status === "loading" ? "Joining..." : "Join the Academy"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-xs font-medium text-center">{message}</p>
          )}
        </form>

        <p className={`text-xs ${colors.footerText} mt-3 text-center`}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    )
  }

  // Inline variant (default)
  return (
    <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 md:p-8`}>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{siteEmoji}</span>
            <span className={`text-xs font-bold ${colors.badgeText} ${colors.badgeBg} rounded-full px-3 py-1 uppercase tracking-wide`}>
              Join the Academy
            </span>
          </div>
          <h3 className={`text-xl md:text-2xl font-extrabold ${colors.text} mb-1`}>
            {heading || "Stay Intel-igent - Get Updates"}
          </h3>
          <p className={`${colors.textMuted} text-sm md:text-base`}>
            {subheading || "Get notified when new modules drop. Be first to access new intel training."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-[360px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className={`flex-1 min-w-0 px-4 py-3 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} backdrop-blur-sm ${colors.inputText} ${colors.inputPlaceholder} focus:outline-none ${colors.inputFocus} focus:ring-2 transition-all text-sm`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-sm`}
          >
            {status === "loading" ? "Joining..." : "Join Free"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm font-medium mt-3">{message}</p>
      )}
    </div>
  )
}
