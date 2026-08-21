"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Download } from "lucide-react"

// Renders a "Download" button that links to the printable version of the
// current learning path. Matches /learning-paths/<slug> → /learning-paths/<slug>/download
export function DownloadPathButton() {
  const pathname = usePathname()

  const match = pathname?.match(/^\/learning-paths\/([^/]+)$/)
  if (!match) return null

  const slug = match[1]
  return (
    <Link
      href={`/learning-paths/${slug}/download`}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
    >
      <Download className="h-4 w-4" />
      Download
    </Link>
  )
}
