import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import {
  archiveCutoff,
  formatCatalogDate,
  previousCatalogTopics,
  WEEKLY_SERIES_START,
} from "@/lib/recent-topics"

export const metadata = pageMetadata(
  "/topics/recent",
  "Previous topics",
  "Lessons added since the Monday series began, newest first. The list becomes a rolling six months once the series is that old.",
)

export default function PreviousTopicsPage() {
  const cutoff = archiveCutoff()
  const topics = previousCatalogTopics()
  const fromSeriesStart = cutoff === WEEKLY_SERIES_START

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
        ← Home
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-300">Catalog</p>
      <h1 className="mt-2 text-3xl font-bold text-white">Previous topics</h1>
      {fromSeriesStart ? (
        <p className="mt-3 text-slate-400">
          Lessons dated on or after {formatCatalogDate(WEEKLY_SERIES_START)}, newest first. That is the first Monday
          lesson in the catalog, Strategic Risk Assessment. The list is meant to hold about six months. It is shorter
          today because the series is. When it is older than six months, earlier Mondays drop off on their own.
        </p>
      ) : (
        <p className="mt-3 text-slate-400">
          Lessons added in the last six months, from {formatCatalogDate(cutoff)}, newest first. Older than that, and
          they leave this page. The rest of the catalog does not.
        </p>
      )}

      <ol className="mt-8 space-y-3">
        {topics.map((topic) => (
          <li key={topic.href}>
            <Link
              href={topic.href}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors"
            >
              <time
                dateTime={topic.dateAdded}
                className="w-28 shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-500 pt-1"
              >
                {formatCatalogDate(topic.dateAdded)}
              </time>
              <span className="min-w-0">
                <span className="block text-lg font-bold text-white">{topic.title}</span>
                <span className="mt-1 block text-sm text-slate-400">{topic.description}</span>
                <span className="mt-2 block text-xs text-cyan-300">{topic.category}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <Link href="/topics" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-cyan-300">
          Full topic catalog
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
