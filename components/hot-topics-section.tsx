import Link from "next/link"
import { Flame, ChevronRight } from "lucide-react"

// Popular topics — TODO: replace with real analytics-driven data when available
const hotTopics = [
  {
    title: "What is Intelligence?",
    slug: "what-is-intelligence",
    category: "Foundations",
  },
  {
    title: "OSINT Techniques & Methodology",
    slug: "osint-techniques",
    category: "OSINT",
  },
  {
    title: "The Intelligence Cycle",
    slug: "intelligence-cycle",
    category: "Foundations",
  },
  {
    title: "Google Dorking: Advanced Search",
    slug: "google-dorking",
    category: "OSINT",
  },
  {
    title: "Cognitive Biases in Analysis",
    slug: "cognitive-biases",
    category: "Analysis",
  },
]

export function HotTopicsSection() {
  return (
    <div id="hot-topics" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
          <Flame className="w-6 h-6 text-orange-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Hot Topics</h2>
          <p className="text-slate-400 text-sm">Popular intelligence briefings</p>
        </div>
      </div>

      <div className="grid gap-3">
        {hotTopics.map((topic, index) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
                       hover:border-orange-500/30 hover:bg-white/[0.07] transition-all duration-300"
          >
            {/* Rank */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 
                            flex items-center justify-center text-orange-400 font-bold text-sm">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0">
              <h3 className="text-white font-medium group-hover:text-orange-300 transition-colors truncate">
                {topic.title}
              </h3>
              <span className="text-xs text-slate-500">{topic.category}</span>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}
