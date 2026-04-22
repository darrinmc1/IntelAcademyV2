import Link from "next/link"
import { Clock, ChevronRight, Sparkles } from "lucide-react"

// Latest lessons added to the academy
// TODO: Auto-generate from content/weekly-lessons when Stage 4 is built
const latestTopics = [
  {
    title: "What is A Threat Assessment?",
    slug: "what-is-threat-assessment",
    category: "Threat Analysis",
    date: "2026-04-10",
    isNew: true,
  },
  {
    title: "Visual Intelligence Reporting",
    slug: "visual-intelligence-reporting",
    category: "Report Writing",
    date: "2026-04-08",
    isNew: true,
  },
  {
    title: "Evidence-Based Conclusions",
    slug: "evidence-based-conclusions",
    category: "Analysis Techniques",
    date: "2026-04-05",
    isNew: false,
  },
  {
    title: "Multi-Source Integration",
    slug: "multi-source-integration",
    category: "Collection Methods",
    date: "2026-04-02",
    isNew: false,
  },
  {
    title: "Digital Evidence Documentation",
    slug: "digital-evidence-documentation",
    category: "Digital Intelligence",
    date: "2026-03-28",
    isNew: false,
  },
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export function LatestTopicsSection() {
  return (
    <div id="latest-topics" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <Clock className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Latest Intel</h2>
          <p className="text-slate-400 text-sm">Recently declassified training materials</p>
        </div>
      </div>

      <div className="grid gap-3">
        {latestTopics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
                       hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300"
          >
            {/* Date badge */}
            <div className="flex-shrink-0 text-center min-w-[60px]">
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                {formatDate(topic.date).split(" ")[1]}
              </div>
              <div className="text-lg font-bold text-white">
                {formatDate(topic.date).split(" ")[0]}
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-white/10 flex-shrink-0" />

            {/* Content */}
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors truncate">
                  {topic.title}
                </h3>
                {topic.isNew && (
                  <span className="flex-shrink-0 flex items-center gap-1 text-[10px] bg-cyan-500/20 text-cyan-400 
                                   rounded-full px-2 py-0.5 font-semibold border border-cyan-500/30">
                    <Sparkles className="w-3 h-3" />
                    NEW
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-500">{topic.category}</span>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href="/topics/all-topics"
          className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
        >
          View all topics
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
