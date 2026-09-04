import Link from "next/link"
import { Check, Play } from "lucide-react"

const TRACK = [
  {
    state: "done" as const,
    label: "Executive summaries — BLUF first",
    href: "/topics/executive-summaries-mastery",
  },
  {
    state: "active" as const,
    label: "Intelligence report examples",
    href: "/topics/intelligence-report-examples",
  },
  {
    state: "next" as const,
    label: "Good intelligence report",
    href: "/topics/good-intelligence-report",
  },
]

export function HeroTrackCard() {
  return (
    <aside className="sc-track-card rounded-2xl p-4 md:p-5" aria-label="Sample beginner writing track">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Written · beginner track
        </p>
        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">Sample sequence</p>
      </div>
      <p className="mb-4 text-sm font-semibold text-white">Bottom line first</p>
      <ol className="space-y-2">
        {TRACK.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                item.state === "active"
                  ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.35)]"
                  : "text-slate-300 hover:bg-white/5"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  item.state === "done"
                    ? "bg-cyan-500/20 text-cyan-300"
                    : item.state === "active"
                      ? "bg-white/15 text-white"
                      : "border border-white/15 text-slate-500"
                }`}
                aria-hidden="true"
              >
                {item.state === "done" ? (
                  <Check className="h-3.5 w-3.5" />
                ) : item.state === "active" ? (
                  <Play className="h-3 w-3 fill-current" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                )}
              </span>
              <span className="leading-snug">{item.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  )
}
