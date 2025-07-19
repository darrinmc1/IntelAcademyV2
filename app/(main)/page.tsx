import { Suspense } from "react"
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

      {/* Newsletter - lazy load */}
      <LazySection>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <NewsletterSignup />
        </Suspense>
      </LazySection>
    </>
  )
}