import Link from "next/link"
import { topics } from "@/data/topics-catalog"

const RECENT_COUNT = 6

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

/** Calendar date from a catalog `YYYY-MM-DD` string. Avoids UTC midnight shifting the day. */
export function formatCatalogDate(iso: string | undefined): string {
  if (!iso) return "Date not recorded"
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return iso
  const month = MONTHS[Number(match[2]) - 1]
  if (!month) return iso
  return `${Number(match[3])} ${month} ${match[1]}`
}

export function recentCatalogTopics(count = RECENT_COUNT) {
  return [...topics]
    .filter((topic) => topic.href?.startsWith("/topics/") && topic.dateAdded)
    .sort((a, b) => {
      const byDate = b.dateAdded.localeCompare(a.dateAdded)
      if (byDate !== 0) return byDate
      return a.title.localeCompare(b.title)
    })
    .slice(0, count)
}

export function WhatsNewSection() {
  const recent = recentCatalogTopics()

  return (
    <section className="py-12 border-b border-white/5" aria-labelledby="whats-new-heading">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-2">Catalog</p>
          <h2 id="whats-new-heading" className="text-2xl font-bold text-white">
            What&apos;s new
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            The latest lessons, newest first, using the date each one was added. When a Monday lesson is published
            into the catalog, it shows up here without anyone editing this page. If it is not listed, it is not new.
            That is the whole method.
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

        <div className="mt-6">
          <Link href="/topics" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
            All topics
          </Link>
        </div>
      </div>
    </section>
  )
}
