import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { formatCatalogDate, newestCatalogTopics, WHATS_NEW_COUNT } from "@/lib/recent-topics"

export function WhatsNewSection() {
  const recent = newestCatalogTopics(WHATS_NEW_COUNT)

  return (
    <section className="py-12 border-b border-white/5" aria-labelledby="whats-new-heading">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-2">Catalog</p>
          <h2 id="whats-new-heading" className="text-2xl font-bold text-white">
            What&apos;s new
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            The {WHATS_NEW_COUNT} newest lessons, by the date each one was added. A Monday publish shows up here
            without anyone editing this page. If it is not listed, it is not new. That is the whole method.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {recent.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors"
              >
                <time dateTime={topic.dateAdded} className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {formatCatalogDate(topic.dateAdded)}
                </time>
                <h3 className="mt-2 text-lg font-bold text-white">{topic.title}</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-3">{topic.description}</p>
                <p className="mt-3 text-xs text-cyan-300">{topic.category}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/topics/recent"
            className="inline-flex items-center text-base font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            See all previous topics
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
