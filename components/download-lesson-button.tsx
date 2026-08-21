"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Download } from "lucide-react"

// Renders a "Download lesson" button that links to the printable version
// of the current topic/lesson page. Matches /topics/<slug> → /topics/<slug>/download
export function DownloadLessonButton() {
  const pathname = usePathname()

  // Only show on lesson pages: /topics/<slug> (single segment after /topics/)
  const match = pathname?.match(/^\/topics\/([^/]+)$/)
  if (!match) return null

  const slug = match[1]
  return (
    <Link
      href={`/topics/${slug}/download`}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
    >
      <Download className="h-4 w-4" />
      Download lesson
    </Link>
  )
}
