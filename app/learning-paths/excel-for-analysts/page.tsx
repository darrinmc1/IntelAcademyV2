"use client"

import Image from "next/image"
import Link from "next/link"

import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { LearningFormats } from "@/components/learning-formats"
import { TopicWhereNext } from "@/components/topic-where-next"

export default function ExcelForAnalystsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full">
          <Image
            src="/excel-for-analysts-banner.png"
            alt="Excel for Intelligence Analysts"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold mb-3">Excel for Intelligence Analysts</h1>
          <p className="text-slate-300 max-w-md">
            Leverage Excel for intelligence work and analysis with specialized techniques
          </p>
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
            description="The Excel habits that hold an investigation together: filters, lookups, and a sheet someone else can audit."
            imageSrc="/excel-for-analysts/excel-fundamentals.png"
            href="/topics/excel-fundamentals-for-analysts"
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
      <TopicWhereNext />
    </div>
  )
}
