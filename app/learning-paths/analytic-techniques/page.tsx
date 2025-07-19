"use client"

import Image from "next/image"
import Link from "next/link"

import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { FeaturedResource } from "@/components/featured-resource"
import { LearningFormats } from "@/components/learning-formats"

export default function AnalyticTechniquesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-8">
        <Image
          src="/analytic-techniques-banner-large.png"
          alt="Structured Analytic Techniques"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Structured Analytic Techniques</h1>
            <p className="text-xl max-w-2xl">
              Master methodologies that improve analytical thinking and overcome cognitive biases
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About This Learning Path</h2>
          <p className="text-lg mb-4">
            Structured Analytic Techniques (SATs) are methodologies designed to improve the rigor and quality of
            intelligence analysis. This learning path teaches you how to apply these techniques to overcome cognitive
            biases, challenge assumptions, and generate more accurate assessments.
          </p>
          <p className="text-lg mb-4">
            From basic techniques like Analysis of Competing Hypotheses to advanced methods like Red Team Analysis,
            you&apos;ll learn practical approaches that can be applied to any intelligence problem. The course emphasizes
            both the theoretical foundations and practical applications of these techniques.
          </p>

          <LearningFormats />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Topics Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="Introduction to Structured Analysis"
            description="Understand the foundations and importance of structured analytic techniques in intelligence."
            imageSrc="/intro-structured-analysis.png"
            href="/topics/intro-structured-analysis"
          />
          <TopicCardWithImage
            title="Cognitive Biases in Intelligence"
            description="Identify and mitigate common cognitive biases that affect analytical judgment."
            imageSrc="/cognitive-biases.png"
            href="/topics/cognitive-biases-intelligence"
          />
          <TopicCardWithImage
            title="Analysis of Competing Hypotheses"
            description="Master the systematic evaluation of multiple hypotheses to avoid confirmation bias."
            imageSrc="/competing-hypotheses.png"
            href="/topics/analysis-competing-hypotheses"
          />
          <TopicCardWithImage
            title="Key Assumptions Check"
            description="Learn to identify and challenge the underlying assumptions in your analysis."
            imageSrc="/assumptions-check.png"
            href="/topics/key-assumptions-check"
          />
          <TopicCardWithImage
            title="Indicators and Warnings"
            description="Develop frameworks to identify and monitor indicators of emerging threats or opportunities."
            imageSrc="/indicators-warnings.png"
            href="/topics/indicators-warnings"
          />
          <TopicCardWithImage
            title="Alternative Futures Analysis"
            description="Create and evaluate multiple scenarios to prepare for different possible outcomes."
            imageSrc="/alternative-futures.png"
            href="/topics/alternative-futures-analysis"
          />
          <TopicCardWithImage
            title="Red Team Analysis"
            description="Apply adversarial thinking to challenge assumptions and identify vulnerabilities."
            imageSrc="/red-team-analysis.png"
            href="/topics/red-team-analysis"
          />
          <TopicCardWithImage
            title="Structured Brainstorming"
            description="Use systematic approaches to generate ideas and hypotheses for complex problems."
            imageSrc="/structured-brainstorming.png"
            href="/topics/structured-brainstorming"
          />
          <TopicCardWithImage
            title="Deception Detection"
            description="Learn techniques to identify potential deception in intelligence information."
            imageSrc="/deception-detection.png"
            href="/topics/deception-detection"
          />
          <TopicCardWithImage
            title="Causal Flow Diagramming"
            description="Visualize complex cause-and-effect relationships in intelligence problems."
            imageSrc="/causal-flow.png"
            href="/topics/causal-flow-diagramming"
          />
          <TopicCardWithImage
            title="Delphi Method"
            description="Apply structured expert elicitation techniques to gather and synthesize expert opinions."
            imageSrc="/delphi-method.png"
            href="/topics/delphi-method"
          />
          <TopicCardWithImage
            title="Quality of Information Check"
            description="Systematically evaluate the reliability and credibility of intelligence information."
            imageSrc="/information-quality.png"
            href="/topics/information-quality-check"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedResource
            title="Structured Analytic Techniques Handbook"
            description="Guide to applying structured techniques in intelligence analysis."
            type="Guide"
            href="/resources/sat-handbook"
          />
          <FeaturedResource
            title="ACH Worksheet Templates"
            description="Ready-to-use templates for conducting Analysis of Competing Hypotheses."
            type="Template"
            href="/resources/ach-templates"
          />
          <FeaturedResource
            title="Case Study: Intelligence Failure Analysis"
            description="Examination of how structured techniques could have prevented historical intelligence failures."
            type="Case Study"
            href="/resources/intelligence-failure-case-study"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Related Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Strategic Intelligence</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to develop long-term intelligence assessments and forecasts.
            </p>
            <Link href="/learning-paths/strategic-intelligence" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Data Collection Plans</h3>
            <p className="text-muted-foreground mb-4">Learn how to develop data collection strategies.</p>
            <Link href="/learning-paths/data-collection-plans" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Report Writing</h3>
            <p className="text-muted-foreground mb-4">
              Master the art of writing clear, concise, and impactful intelligence reports.
            </p>
            <Link href="/learning-paths/report-writing" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
