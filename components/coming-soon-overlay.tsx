"use client"

import { Construction, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ComingSoonOverlayProps {
  title: string
  description?: string
  estimatedDate?: string
  backHref?: string
  backLabel?: string
}

export function ComingSoonOverlay({
  title,
  description = "We're building something great. Check back soon.",
  estimatedDate,
  backHref = "/",
  backLabel = "Back to Home",
}: ComingSoonOverlayProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative max-w-lg w-full bg-slate-900/95 border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(6,182,212,0.25)]">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
            <div className="relative p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Construction className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400 mb-2">
            Classified — Under Development
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-slate-300 mb-2">{description}</p>
          {estimatedDate && (
            <p className="text-sm text-slate-500 mb-6">
              Expected activation: <span className="text-cyan-400">{estimatedDate}</span>
            </p>
          )}
          {!estimatedDate && <div className="mb-6" />}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={backHref}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full 
                         bg-white/5 border border-white/10 hover:border-cyan-500/40 
                         hover:bg-cyan-500/10 transition-all duration-300
                         text-slate-300 hover:text-cyan-400 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
            <a
              href="mailto:info@TheIntelAnalystAcademy.com"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full 
                         bg-cyan-600 hover:bg-cyan-500 border border-cyan-400/50
                         transition-all duration-300 text-white text-sm font-medium
                         shadow-[0_0_15px_rgba(8,145,178,0.3)]"
            >
              <Mail className="w-4 h-4" />
              Request Access
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
