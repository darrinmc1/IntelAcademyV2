import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { advancedTopicRequirements } from "@/data/advanced-topic-requirements"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Advanced Topics | The Intel Analyst Academy",
  description:
    "Specialised content for experienced analysts seeking to deepen their expertise in intelligence analysis.",
}

const categoryAccents: Record<string, { border: string; glow: string; badge: string }> = {
  "Analytical Techniques": {
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_20px_rgba(8,145,178,0.15)]",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  "Operational Applications": {
    border: "border-indigo-500/30",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  "Intelligence Collection": {
    border: "border-purple-500/30",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  "Communication & Reporting": {
    border: "border-blue-500/30",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
}

export default function AdvancedTopicsPage() {
  const categories: Record<string, string[]> = {
    "Analytical Techniques": ["strategic-forecasting", "structured-analytical-techniques", "statistical-techniques"],
    "Operational Applications": ["network-disruption", "target-package-development", "risk-terrain-modeling", "predictive-patterning"],
    "Intelligence Collection": ["deep-web-research", "operations-security", "social-network-analysis"],
    "Communication & Reporting": ["intelligence-storytelling", "strategic-risk-assessment"],
  }

  return (
    <>
      <PageHero
        title="Advanced"
        accentTitle="Topics"
        subtitle="Specialised content for experienced analysts seeking to deepen their expertise in sophisticated analytical techniques and applications."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Advanced Topics" }]}
      />

      <div className="container mx-auto px-4 py-12">
        {Object.entries(categories).map(([category, topicIds]) => {
          const accent = categoryAccents[category] ?? categoryAccents["Analytical Techniques"]
          return (
            <div key={category} className="mb-16">
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-bold text-white">{category}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicIds.map((topicId) => {
                  const topic = advancedTopicRequirements[topicId]
                  if (!topic) return null

                  return (
                    <Link
                      key={topicId}
                      href={`/advanced-topics/${topicId}`}
                      className={`group block bg-slate-900/60 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:${accent.border} hover:${accent.glow} transition-all duration-300`}
                    >
                      <div className="h-44 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                        <img
                          src={`/advanced-topics/${topicId}.png`}
                          alt={topic.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute top-3 right-3 z-20">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${accent.badge}`}>
                            {topic.experienceLevel}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                          {topic.title}
                        </h3>
                        <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2 mb-4">
                          {topic.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 group-hover:gap-2 transition-all duration-300">
                          Learn more <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* CTA */}
        <div className="glass-panel-heavy rounded-2xl p-8 border border-cyan-500/20 shadow-[0_0_40px_rgba(8,145,178,0.1)] relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              Request an <span className="text-gradient-primary">Advanced Topic</span>
            </h2>
            <p className="text-slate-400 font-light mb-6 max-w-xl">
              Is there a specific advanced intelligence analysis topic you&apos;d like to see covered? Let us know and
              we&apos;ll consider adding it to our curriculum.
            </p>
            <Link
              href="/request-topic?category=advanced"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 glow-primary-hover border border-cyan-400/30 shadow-[0_0_15px_rgba(8,145,178,0.3)]"
            >
              Request a Topic <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
