"use client"

import { useState } from "react"

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating || !category || !message) return

    setStatus("loading")

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          category,
          message,
          email: email || undefined,
          page: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setResponseMessage(data.message)
        // Reset after delay
        setTimeout(() => {
          setIsOpen(false)
          setStatus("idle")
          setRating(0)
          setCategory("")
          setMessage("")
          setEmail("")
          setResponseMessage("")
        }, 3000)
      } else {
        setStatus("error")
        setResponseMessage(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setResponseMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded form */}
      {isOpen && (
        <div className="mb-3 w-80 bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-700/60 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌐</span>
              <h3 className="font-bold text-white text-sm">Send Feedback</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close feedback"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Success state */}
          {status === "success" ? (
            <div className="p-6 text-center">
              <div className="text-4xl mb-3 animate-bounce">🎉</div>
              <p className="font-bold text-slate-50 mb-1">Thank you!</p>
              <p className="text-sm text-slate-300">{responseMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Star rating */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-2xl transition-transform hover:scale-125 focus:outline-none"
                      aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    >
                      {star <= (hoveredRating || rating) ? (
                        <span className="text-teal-400">★</span>
                      ) : (
                        <span className="text-slate-600">★</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-600 bg-slate-700/50 text-slate-50 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all appearance-none"
                >
                  <option value="">Select a category...</option>
                  <option value="Bug">Bug Report</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Content Request">Content Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-600 bg-slate-700/50 text-slate-50 placeholder:text-slate-400 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all resize-none"
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Email <span className="text-slate-500 normal-case font-normal">(optional, for follow-up)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-600 bg-slate-700/50 text-slate-50 placeholder:text-slate-400 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-400 text-xs font-medium">{responseMessage}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || !rating || !category || !message}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Feedback"
                )}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen
            ? "bg-teal-200 text-teal-900 border-2 border-teal-300"
            : "bg-teal-600 text-white hover:bg-teal-500"
        }`}
        aria-label={isOpen ? "Close feedback" : "Send feedback"}
      >
        {isOpen ? (
          <>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold">Close</span>
          </>
        ) : (
          <>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold hidden sm:inline">Feedback</span>
          </>
        )}
      </button>
    </div>
  )
}
