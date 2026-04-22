"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Clock, Mail, ArrowLeft, Bell, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

function ComingSoonContent() {
  const searchParams = useSearchParams()
  const resourceName = searchParams.get("resource") || "this resource"

  const available = [
    { name: "Estimative Language Dictionary",  file: "estimative-language-dictionary.pdf" },
    { name: "Cognitive Bias Checklist",         file: "cognitive-bias-checklist.pdf" },
    { name: "Professional Writing Checklist",   file: "professional-writing-checklist.pdf" },
    { name: "Key Assumptions Check Form",       file: "key-assumptions-check-form.pdf" },
    { name: "OSINT Collection Checklist",       file: "osint-collection-checklist.pdf" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <Clock className="h-10 w-10 text-amber-400" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-2">Coming Soon</h1>
        <p className="text-slate-400 text-center mb-2">
          <span className="text-cyan-400 font-medium">{resourceName}</span>
        </p>
        <p className="text-slate-500 text-center text-sm mb-8">
          We&apos;re working on this resource. Email us to be notified when it&apos;s ready or to request it urgently.
        </p>

        <div className="bg-slate-900/60 border border-white/10 rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
            <Bell className="h-4 w-4 text-cyan-400" />
            Request Notification
          </h2>
          <div className="space-y-2 mb-4">
            {[
              "Get an email when this resource is published",
              "Request a specific format (Word, Excel, PDF)",
              "Suggest additional content you'd find useful",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400">{item}</p>
              </div>
            ))}
          </div>
          <a href={`mailto:info@theintelanalystacademy.com.au?subject=${encodeURIComponent(
            `Notification Request: ${resourceName}`
          )}&body=${encodeURIComponent(
            `Hi,\n\nI'd like to be notified when the following resource becomes available:\n\n${resourceName}\n\nAdditional notes:\n`
          )}`}>
            <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white border-0">
              <Mail className="mr-2 h-4 w-4" />
              Email to Request Notification
            </Button>
          </a>
        </div>

        <div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-emerald-400" />
            Available Right Now
          </h2>
          <div className="space-y-1">
            {available.map((r) => (
              <a key={r.file} href={`/downloads/${r.file}`} download
                className="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-800/60 transition-colors">
                <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">{r.name}</span>
                <span className="text-xs text-emerald-400 font-medium">Download →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/downloads" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Downloads
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function DownloadsComingSoon() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Clock className="h-8 w-8 text-amber-400 animate-spin" />
      </div>
    }>
      <ComingSoonContent />
    </Suspense>
  )
}
