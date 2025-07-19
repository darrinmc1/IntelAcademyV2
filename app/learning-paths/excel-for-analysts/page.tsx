"use client"

import Image from "next/image"
import Link from "next/link"

import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { FeaturedResource } from "@/components/featured-resource"
import { LearningFormats } from "@/components/learning-formats"

export default function ExcelForAnalystsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-8">
        <Image
          src="/excel-for-analysts-banner.png"
          alt="Excel for Intelligence Analysts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Excel for Intelligence Analysts</h1>
            <p className="text-xl max-w-2xl">
              Leverage Excel for intelligence work and analysis with specialized techniques
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About This Learning Path</h2>
          <p className="text-lg mb-4 text-justify">
            Microsoft Excel remains one of the most powerful and accessible tools for intelligence analysts. This
            learning path teaches you how to leverage Excel&apos;s capabilities for data organization, analysis,
            visualization, and reporting in intelligence contexts.
          </p>
          <p className="text-lg mb-4 text-justify">
            From basic data management to advanced analytical functions, you&apos;ll learn practical techniques that can be
            immediately applied to real intelligence problems. The course emphasizes both technical skills and
            analytical thinking.
          </p>

          <LearningFormats />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Topics Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="Excel Fundamentals for Analysts"
            description="Master essential Excel functions and features specifically relevant to intelligence analysis workflows."
            imageSrc="/excel-fundamentals.png"
            href="/topics/excel-fundamentals-for-analysts"
          />
          <TopicCardWithImage
            title="Data Organization & Management"
            description="Learn how to structure, clean, and manage intelligence data effectively in Excel."
            imageSrc="/data-organization.png"
            href="/topics/excel-data-organization"
          />
          <TopicCardWithImage
            title="Pivot Tables for Intelligence Analysis"
            description="Use pivot tables to summarize, aggregate, and explore complex intelligence data."
            imageSrc="/pivot-tables.png"
            href="/topics/excel-pivot-tables"
          />
          <TopicCardWithImage
            title="Data Visualization Techniques"
            description="Create effective charts, graphs, and visual representations of intelligence information."
            imageSrc="/data-visualization.png"
            href="/topics/excel-data-visualization"
          />
          <TopicCardWithImage
            title="Timeline Analysis Tools"
            description="Build and analyze event timelines for investigations and intelligence products."
            imageSrc="/timeline-analysis.png"
            href="/topics/excel-timeline-analysis"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedResource
            title="Excel Templates for Intelligence Analysis"
            description="Download ready-to-use Excel templates designed specifically for intelligence workflows."
            type="Template"
            href="/resources/excel-templates-for-intelligence"
          />
          <FeaturedResource
            title="Advanced Excel Functions for Analysts"
            description="Guide to Excel functions most valuable for intelligence analysis."
            type="Guide"
            href="/resources/advanced-excel-functions"
          />
          <FeaturedResource
            title="Case Study: Excel in Major Investigations"
            description="Real-world examples of how Excel has been used in complex intelligence cases."
            type="Case Study"
            href="/resources/excel-investigation-case-study"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Related Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Data Collection Planning</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              Learn how to develop data collection strategies.
            </p>
            <Link
              href="/learning-paths/data-collection-planning"
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
            <h3 className="text-xl font-bold mb-2">Report Writing</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              Master the art of writing clear, concise, and impactful intelligence reports.
            </p>
            <Link
              href="/learning-paths/report-writing"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Path
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
