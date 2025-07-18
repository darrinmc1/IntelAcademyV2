import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { IntelligenceTypesShowcase } from "@/components/intelligence-types-showcase"
import { LearningPathsSection } from "@/components/learning-paths-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { LazySection } from "@/components/optimized/lazy-section"
import { PerformanceMonitor } from "@/components/optimized/performance-monitor"

export default function HomePage() {
  return (
    <>
      <PerformanceMonitor />

      {/* Hero section - load immediately */}
      <HeroSection />

      {/* Intelligence types - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <IntelligenceTypesShowcase />
        </Suspense>
      </LazySection>

      {/* Learning paths - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <LearningPathsSection />
        </Suspense>
      </LazySection>

      <div className="flex justify-center mt-8 mb-12">
        <Link
          href="/learning-paths"
          className="group flex items-center justify-center font-medium rounded-full
                     shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
                     bg-black text-white hover:bg-yellow-500 hover:text-black
                     text-base py-2 px-4"
        >
          All Learning Paths
          <ChevronRight className="ml-2 h-4 w-4 group-hover:animate-bounce-right" />
        </Link>
      </div>

      {/* Newsletter - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <NewsletterSignup />
        </Suspense>
      </LazySection>
    </>
  )
}