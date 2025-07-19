"use client"

import Image from "next/image"
import Link from "next/link"

import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { FeaturedResource } from "@/components/featured-resource"
import { LearningFormats } from "@/components/learning-formats"

export default function DataCollectionPlansPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-8">
        <Image
          src="/data-collection-plans-banner-large.png"
          alt="Data Collection Plans"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Data Collection Plans</h1>
            <p className="text-xl max-w-2xl">
              Develop strategic approaches to gathering the right information for intelligence needs
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About This Learning Path</h2>
          <p className="text-lg mb-4">
            Effective intelligence analysis begins with proper data collection. This learning path teaches you how to
            develop data collection plans that align with intelligence requirements, optimize resource
            allocation, and ensure the right information is gathered at the right time.
          </p>
          <p className="text-lg mb-4">
            From identifying intelligence gaps to selecting appropriate collection methods, you&apos;ll learn how to design
            and implement data collection strategies across various intelligence disciplines. The course emphasizes both
            planning methodologies and practical implementation techniques.
          </p>

          <LearningFormats />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Topics Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="Intelligence Requirements Development"
            description="Learn how to identify and prioritize intelligence needs to guide collection efforts."
            imageSrc="/intelligence-requirements.png"
            href="/topics/intelligence-requirements"
          />
          <TopicCardWithImage
            title="Collection Management Fundamentals"
            description="Master the principles of managing intelligence collection across multiple sources."
            imageSrc="/collection-management.png"
            href="/topics/collection-management"
          />
          <TopicCardWithImage
            title="Collection Planning Process"
            description="Understand the step-by-step process for developing collection plans."
            imageSrc="/planning-process.png"
            href="/topics/collection-planning-process"
          />
          <TopicCardWithImage
            title="Source Selection & Evaluation"
            description="Learn criteria for selecting and evaluating appropriate intelligence sources."
            imageSrc="/source-selection.png"
            href="/topics/source-selection"
          />
          <TopicCardWithImage
            title="OSINT Collection Strategies"
            description="Develop plans for systematic collection of open-source intelligence."
            imageSrc="/osint-strategies.png"
            href="/topics/osint-collection-strategies"
          />
          <TopicCardWithImage
            title="HUMINT Collection Planning"
            description="Learn approaches for planning human intelligence collection operations."
            imageSrc="/humint-planning.png"
            href="/topics/humint-collection-planning"
          />
          <TopicCardWithImage
            title="Technical Collection Methods"
            description="Understand planning considerations for technical collection disciplines (SIGINT, IMINT, etc.)."
            imageSrc="/technical-collection.png"
            href="/topics/technical-collection-methods"
          />
          <TopicCardWithImage
            title="Collection Operations Security"
            description="Learn how to incorporate security considerations into collection planning."
            imageSrc="/operations-security.png"
            href="/topics/collection-operations-security"
          />
          <TopicCardWithImage
            title="Legal & Ethical Considerations"
            description="Navigate the legal and ethical frameworks that govern intelligence collection."
            imageSrc="/legal-ethical.png"
            href="/topics/collection-legal-ethical"
          />
          <TopicCardWithImage
            title="Collection Plan Documentation"
            description="Master the creation of formal collection plan documents and matrices."
            imageSrc="/plan-documentation.png"
            href="/topics/collection-plan-documentation"
          />
          <TopicCardWithImage
            title="Collection Feedback Loop"
            description="Implement systems to evaluate collection effectiveness and refine future plans."
            imageSrc="/feedback-loop.png"
            href="/topics/collection-feedback-loop"
          />
          <TopicCardWithImage
            title="Resource Allocation & Optimization"
            description="Learn strategies for maximizing collection results with limited resources."
            imageSrc="/resource-allocation.png"
            href="/topics/collection-resource-allocation"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedResource
            title="Collection Plan Templates"
            description="Downloadable templates for creating data collection plans."
            type="Template"
            href="/resources/collection-plan-templates"
          />
          <FeaturedResource
            title="Intelligence Requirements Handbook"
            description="Guide to developing clear, actionable intelligence requirements."
            type="Guide"
            href="/resources/intelligence-requirements-handbook"
          />
          <FeaturedResource
            title="Case Study: Collection Planning Success"
            description="Real-world example of how effective collection planning led to intelligence breakthroughs."
            type="Case Study"
            href="/resources/collection-planning-case-study"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Related Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">OSINT</h3>
            <p className="text-muted-foreground mb-4">
              Master techniques for collecting and analyzing open-source intelligence.
            </p>
            <Link href="/learning-paths/osint" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Analytic Techniques</h3>
            <p className="text-muted-foreground mb-4">
              Explore structured analytic techniques for intelligence analysis.
            </p>
            <Link href="/learning-paths/analytic-techniques" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Intelligence Cycle</h3>
            <p className="text-muted-foreground mb-4">
              Understand the complete intelligence cycle from requirements to dissemination.
            </p>
            <Link href="/topics/intelligence-cycle" className="text-primary hover:underline">
              Explore Topic →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
