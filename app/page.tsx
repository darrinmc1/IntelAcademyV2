import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { HomepageQuickNav } from "@/components/homepage-quick-nav"
import { IntelligenceTypesShowcase } from "@/components/intelligence-types-showcase"
import { LearningPathsSection } from "@/components/learning-paths-section"
import { HotTopicsSection } from "@/components/hot-topics-section"
import { LatestTopicsSection } from "@/components/latest-topics-section"
import { EmailCapture } from "@/components/email-capture"
import { LazySection } from "@/components/optimized/lazy-section"
import { PerformanceMonitor } from "@/components/optimized/performance-monitor"

export default function HomePage() {
  return (
    <>
      <PerformanceMonitor />
      <HeroSection />
      <HomepageQuickNav />

      <section className="py-12 border-y border-white/5 bg-slate-950/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/topics/intelligence-report-fundamentals" className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 hover:border-cyan-400/40 transition-colors">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-2">Sample lesson</p>
              <h2 className="text-xl font-bold text-white">Intelligence Report Fundamentals</h2>
              <p className="mt-2 text-sm text-slate-400">See the teaching style before creating an account.</p>
            </Link>
            <Link href="/topics/introduction-to-link-analysis" className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 hover:border-indigo-400/40 transition-colors">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">Technique</p>
              <h2 className="text-xl font-bold text-white">Introduction to Link Analysis</h2>
              <p className="mt-2 text-sm text-slate-400">Move from entities and relationships to an analytical picture.</p>
            </Link>
            <Link href="/topics/intelligence-failures" className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 hover:border-violet-400/40 transition-colors">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-300 mb-2">Case studies</p>
              <h2 className="text-xl font-bold text-white">Intelligence Failures</h2>
              <p className="mt-2 text-sm text-slate-400">Learn how analytical assumptions, warning and process can fail in practice.</p>
            </Link>
          </div>
        </div>
      </section>

      <div id="learning-paths" className="scroll-mt-24">
        <LearningPathsSection />
      </div>

      <div className="flex justify-center mt-8 mb-12">
        <Link
          href="/learning-paths"
          className="group flex items-center justify-center font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-cyan-600 text-white hover:bg-cyan-500 text-base py-2.5 px-6 border border-cyan-400/30"
        >
          All Learning Paths
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div id="intelligence-types" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-xl" />}>
            <IntelligenceTypesShowcase />
          </Suspense>
        </LazySection>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <HotTopicsSection />
            <LatestTopicsSection />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <EmailCapture
            variant="hero"
            theme="slate"
            siteName="Intel Academy"
            heading="Get new intelligence training as it is published"
            subheading="Join early access for new written modules, exercises and upcoming video lessons."
            source="homepage-hero"
            showName
          />
        </div>
      </section>
    </>
  )
}
