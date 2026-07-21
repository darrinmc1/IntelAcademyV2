"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Grid3X3, List } from "lucide-react"

export default function CategoriesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    {
      title: "Core Intelligence Disciplines",
      description: "Master the fundamental disciplines of intelligence analysis",
      path: "/categories/core-intelligence",
      imagePath: "/foundations.png",
      courseCount: 12,
    },
    {
      title: "Intelligence Collection Methods",
      description: "Learn various methods for collecting intelligence from different sources",
      path: "/categories/collection-methods",
      imagePath: "/osint.png",
      courseCount: 6,
    },
    {
      title: "Analysis Techniques",
      description: "Master advanced analytical techniques used by intelligence professionals",
      path: "/categories/analysis-techniques",
      imagePath: "/crime-series-analysis.png",
      courseCount: 18,
    },
    {
      title: "Report Writing & Briefing",
      description: "Master intelligence report writing, executive summaries, and verbal briefings",
      path: "/learning-paths/report-writing",
      imagePath: "/intelligence-report-fundamentals.png",
      courseCount: 20,
    },
    {
      title: "OSINT & Open Source Intelligence",
      description: "Open source intelligence gathering, SOCMINT, Google Dorking, and real-time monitoring",
      path: "/learning-paths/osint",
      imagePath: "/osint.png",
      courseCount: 5,
    },
    {
      title: "Strategic Intelligence",
      description: "Long-term planning, forecasting, and strategic analysis for senior decision-makers",
      path: "/learning-paths/strategic-intelligence",
      imagePath: "/strategic-intelligence-banner.png",
      courseCount: 3,
    },
    {
      title: "Tactical Intelligence",
      description: "Situational awareness, threat monitoring, and tactical reporting for field operations",
      path: "/learning-paths/tactical-intelligence",
      imagePath: "/tactical-intelligence.png",
      courseCount: 4,
    },
    {
      title: "Threat Assessment",
      description: "Threat assessment frameworks, models, and continuous monitoring methodologies",
      path: "/learning-paths/threat-assessment",
      imagePath: "/threat-assessment.png",
      courseCount: 4,
    },
    {
      title: "Crime Analysis",
      description: "Crime series analysis, crime trend analysis, and hot spot mapping techniques",
      path: "/learning-paths/crime-series-analysis",
      imagePath: "/crime-series-analysis.png",
      courseCount: 2,
    },
    {
      title: "Intelligence Ethics & Failures",
      description: "Ethical frameworks, cognitive biases, and lessons from notable intelligence failures",
      path: "/learning-paths/intelligence-ethics",
      imagePath: "/intelligence-ethics.png",
      courseCount: 3,
    },
    {
      title: "Analyst Tools & Excel",
      description: "Analysts Notebook, Excel for analysts, timeline visualization, and digital evidence tools",
      path: "/learning-paths/analyst-notebook",
      imagePath: "/intelligence-tools.png",
      courseCount: 8,
    },
    {
      title: "Foundations",
      description: "Core foundations of intelligence analysis — the intelligence cycle, types, and key concepts",
      path: "/learning-paths/foundations",
      imagePath: "/foundations.png",
      courseCount: 10,
    },
    {
      title: "Financial Intelligence",
      description: "Financial intelligence (FININT) fundamentals — following the money trail",
      path: "/learning-paths/financial-intelligence",
      imagePath: "/financial-intelligence.png",
      courseCount: 1,
    },
    {
      title: "Geospatial Intelligence",
      description: "Geospatial intelligence (GEOINT) — satellite imagery, mapping, and location analysis",
      path: "/learning-paths/geospatial-intelligence",
      imagePath: "/geospatial-intelligence.png",
      courseCount: 1,
    },
  ]

  return (
    <div className="container py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Course Categories</h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of intelligence analysis courses by category
          </p>
        </div>

        <div className="flex gap-2 bg-slate-200 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
              viewMode === "grid"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
            title="Grid view"
          >
            <Grid3X3 className="h-4 w-4" />
            <span className="hidden sm:inline text-sm font-medium">Grid</span>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
              viewMode === "list"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
            title="List view"
          >
            <List className="h-4 w-4" />
            <span className="hidden sm:inline text-sm font-medium">List</span>
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.path} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={category.imagePath || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
                <p className="mt-2 text-sm font-medium">{category.courseCount} courses</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={category.path} className="flex items-center justify-center">
                    Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl space-y-3">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all hover:bg-blue-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                  <p className="text-xs text-gray-500 font-medium">{category.courseCount} courses</p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
