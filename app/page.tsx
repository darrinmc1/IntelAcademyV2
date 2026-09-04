import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ScrollcraftLessonRail } from "@/components/scrollcraft/lesson-rail"
import { ScrollcraftWhatYouGet } from "@/components/scrollcraft/what-you-get"
import { RevealOnScroll } from "@/components/scrollcraft/reveal-on-scroll"
import { HomepageQuickNav } from "@/components/homepage-quick-nav"
import { HomepagePricingSummary } from "@/components/homepage-pricing-summary"
import { IntelligenceTypesShowcase } from "@/components/intelligence-types-showcase"
import { LearningPathsSection } from "@/components/learning-paths-section"
import { HotTopicsSection } from "@/components/hot-topics-section"
import { LatestTopicsSection } from "@/components/latest-topics-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { EmailCapture } from "@/components/email-capture"
import { LazySection } from "@/components/optimized/lazy-section"
import { PerformanceMonitor } from "@/components/optimized/performance-monitor"
import "@/components/scrollcraft/scrollcraft.css"

export default function HomePage() {
  return (
    <>
      <PerformanceMonitor />

      {/* Hero section - load immediately */}
      <HeroSection />

      <ScrollcraftLessonRail />

      <RevealOnScroll>
        <p className="container mx-auto px-4 py-8 text-center text-sm italic text-slate-500">
          Intelligence is like underwear — it&apos;s important to have it, but you shouldn&apos;t show it
          off too much.
        </p>
      </RevealOnScroll>

      <ScrollcraftWhatYouGet />

      {/* Quick navigation pills */}
      <RevealOnScroll>
        <HomepageQuickNav />
      </RevealOnScroll>

      <RevealOnScroll>
        <HomepagePricingSummary />
      </RevealOnScroll>

      {/* Hot Topics & Latest Topics - side by side on desktop */}
      <RevealOnScroll>
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <HotTopicsSection />
              <LatestTopicsSection />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Intelligence types - lazy load */}
      <RevealOnScroll>
        <div id="intelligence-types" className="scroll-mt-24">
          <LazySection>
            <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-xl" />}>
              <IntelligenceTypesShowcase />
            </Suspense>
          </LazySection>
        </div>
      </RevealOnScroll>

      {/* Learning paths — render immediately so the catalog is visible, not only a newsletter */}
      <RevealOnScroll>
        <div id="learning-paths" className="scroll-mt-24">
          <LearningPathsSection />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="flex justify-center mt-8 mb-12">
          <Link
            href="/learning-paths"
            className="group flex items-center justify-center font-medium rounded-full
                       shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                       bg-cyan-600 text-white hover:bg-cyan-500
                       text-base py-2.5 px-6 border border-cyan-400/30"
          >
            All Learning Paths
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </RevealOnScroll>

      {/* Email Capture */}
      <RevealOnScroll>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <EmailCapture
              variant="hero"
              theme="slate"
              siteName="Intel Academy"
              heading="Stay Intel-igent - Get Updates"
              subheading="Get early access to new modules, intel briefings, and exclusive training content delivered to your inbox."
              source="homepage-hero"
              showName
            />
          </div>
        </section>
      </RevealOnScroll>

      {/* Newsletter - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-xl" />}>
          <NewsletterSignup />
        </Suspense>
      </LazySection>
    </>
  )
}
