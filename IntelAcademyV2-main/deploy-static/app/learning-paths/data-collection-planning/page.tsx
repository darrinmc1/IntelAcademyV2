"use client"

import Image from "next/image"
import Link from "next/link"
import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { FeaturedResource } from "@/components/featured-resource"
import { LearningFormats } from "@/components/learning-formats"

export default function DataCollectionPlanningPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-8">
        <Image
          src="/data-collection-planning-banner.png"
          alt="Data Collection and Planning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Data Collection and Planning</h1>
            <p className="text-xl max-w-2xl">
              Strategies for effective intelligence gathering and systematic collection planning
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About This Learning Path</h2>
          <p className="text-lg mb-4 text-justify">
            Effective intelligence analysis begins with proper data collection. This learning path teaches you how to
            develop data collection plans that align with intelligence requirements, optimize resource
            allocation, and ensure the right information is gathered at the right time.
          </p>
          <p className="text-lg mb-4 text-justify">
            You&apos;ll learn how to identify intelligence gaps, select appropriate collection methods, and design
            implementation strategies across various intelligence disciplines. The course emphasizes both planning
            methodologies and practical implementation techniques.
          </p>

          <LearningFormats />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Topics Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="Intelligence Requirements Development"
            description="Learn how to identify and prioritize intelligence needs to guide collection efforts effectively."
            imageSrc="/intelligence-requirements.png"
            href="/topics/intelligence-requirements"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Collection Planning Process"
            description="Understand the step-by-step process for developing systematic collection plans."
            imageSrc="/planning-process.png"
            href="/lesson-in-development"
            duration="20 min"
          />
          <TopicCardWithImage
            title="Source Selection & Evaluation"
            description="Learn criteria for selecting and evaluating appropriate intelligence sources for reliability."
            imageSrc="/source-selection.png"
            href="/lesson-in-development"
            duration="18 min"
          />
          <TopicCardWithImage
            title="OSINT Collection Strategies"
            description="Develop systematic plans for collecting and organizing open-source intelligence effectively."
            imageSrc="/osint-strategies.png"
            href="/lesson-in-development"
            duration="25 min"
          />
          <TopicCardWithImage
            title="Collection Operations Security"
            description="Learn how to incorporate security considerations and risk management into collection planning."
            imageSrc="/operations-security.png"
            href="/lesson-in-development"
            duration="22 min"
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
            <p className="text-muted-foreground mb-4 text-justify">
              Master techniques for collecting and analyzing open-source intelligence.
            </p>
            <Link
              href="/learning-paths/osint"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Path
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Analytical Techniques</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              Explore structured analytic techniques for intelligence analysis.
            </p>
            <Link
              href="/learning-paths/analytical-techniques"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Path
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Intelligence Cycle</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              Understand the complete intelligence cycle from requirements to dissemination.
            </p>
            <Link
              href="/topics/intelligence-cycle"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Topic
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
