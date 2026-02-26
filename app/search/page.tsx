import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { SearchBar } from "@/components/search/search-bar"
import { SearchResults } from "@/components/search/search-results"
import { StaticImage } from "@/components/static-image"
import { Skeleton } from "@/components/ui/skeleton"
import { PageHero } from "@/components/page-hero"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Search | The Intel Analyst Academy",
  description: "Search intelligence analysis topics, learning paths, and resources.",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q || ""

  return (
    <>
      <PageHero
        title="Search the"
        accentTitle="Academy"
        subtitle="Find topics, learning paths, and resources across the entire curriculum."
      >
        <div className="max-w-2xl">
          <SearchBar defaultValue={query} />
        </div>
      </PageHero>

      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={<SearchSkeleton />}>
          {query ? (
            <SearchResults query={query} />
          ) : (
            <div className="space-y-12">
              {/* Popular Topics */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">
                  Popular <span className="text-gradient-primary">Topics</span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 max-w-2xl">
                  {[
                    { title: "OSINT Techniques", description: "Open Source Intelligence gathering methods", imageUrl: "/osint-banner.png", url: "/learning-paths/osint" },
                    { title: "Strategic Intelligence", description: "Long-term planning and decision making", imageUrl: "/strategic-intelligence-banner.png", url: "/learning-paths/strategic-intelligence" },
                    { title: "Report Writing", description: "Effective intelligence reporting techniques", imageUrl: "/report-writing-banner.png", url: "/learning-paths/report-writing" },
                    { title: "Intelligence Cycle", description: "Understanding the intelligence process", imageUrl: "/intelligence-cycle.png", url: "/topics/intelligence-cycle" },
                  ].map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className="group flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_4px_20px_rgba(8,145,178,0.1)] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 ring-1 ring-white/10">
                        <StaticImage src={item.imageUrl} alt={item.title} width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-white group-hover:text-cyan-400 transition-colors text-sm">{item.title}</p>
                        <p className="text-xs text-slate-500 font-light">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Browse Cards */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">
                  Browse the <span className="text-gradient-primary">Academy</span>
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { title: "Learning Paths", description: "Structured intelligence learning journeys", img: "/learning-path.png", href: "/learning-paths" },
                    { title: "All Topics", description: "Complete list of intelligence topics", img: "/intelligence-analysis-workspace.png", href: "/topics/all-topics" },
                    { title: "Request a Topic", description: "Can't find what you're looking for?", img: "/collaborative-intelligence-hub.png", href: "/request-topic" },
                  ].map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group block rounded-xl overflow-hidden bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(8,145,178,0.15)] transition-all duration-300"
                    >
                      <div className="h-40 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                        <StaticImage src={card.img} alt={card.title} width={400} height={160} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-400 font-light mb-3">{card.description}</p>
                        <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                          Explore <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </>
  )
}

function SearchSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-6 w-48 bg-slate-800" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-slate-900/60 border border-white/10">
            <Skeleton className="h-40 w-full bg-slate-800" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-4 w-20 bg-slate-800" />
              <Skeleton className="h-5 w-full bg-slate-800" />
              <Skeleton className="h-4 w-3/4 bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
