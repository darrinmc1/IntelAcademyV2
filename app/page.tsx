import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { HomepageQuickNav } from "@/components/homepage-quick-nav"
import { IntelligenceTypesShowcase } from "@/components/intelligence-types-showcase"
import { LearningPathsSection } from "@/components/learning-paths-section"
import { HotTopicsSection } from "@/components/hot-topics-section"
import { LatestTopicsSection } from "@/components/latest-topics-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { EmailCapture } from "@/components/email-capture"
import { LazySection } from "@/components/optimized/lazy-section"
import { PerformanceMonitor } from "@/components/optimized/performance-monitor"

export default function HomePage() {
  return (
    <>
      <PerformanceMonitor />

      {/* Hero section - load immediately */}
      <HeroSection />

      {/* Quick navigation pills */}
      <HomepageQuickNav />

      {/* Hot Topics & Latest Topics - side by side on desktop */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <HotTopicsSection />
            <LatestTopicsSection />
          </div>
        </div>
      </section>

      {/* Intelligence types - lazy load */}
      <div id="intelligence-types" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-xl" />}>
            <IntelligenceTypesShowcase />
          </Suspense>
        </LazySection>
      </div>

      {/* Learning paths - lazy load */}
      <div id="learning-paths" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-xl" />}>
            <LearningPathsSection />
          </Suspense>
        </LazySection>
      </div>

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

      {/* Email Capture */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <EmailCapture
            variant="hero"
            theme="slate"
            siteName="Intel Academy"
            heading="Stay Intel-igent — Get Updates"
            subheading="Get early access to new modules, intel briefings, and exclusive training content delivered to your inbox."
            source="homepage-hero"
            showName
          />
        </div>
      </section>

      {/* Newsletter - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-xl" />}>
          <NewsletterSignup />
        </Suspense>
      </LazySection>
    </>
  )
}
