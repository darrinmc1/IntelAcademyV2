"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Define topic categories
type TopicCategory =
  | "All"
  | "Analysis"
  | "Collection"
  | "Technology"
  | "Methodology"
  | "Reporting"
  | "Strategic"
  | "Tactical"
  | "Operational"

// Comprehensive advanced topics with categories
const advancedTopics = [
  {
    id: "strategic-forecasting",
    title: "Strategic Forecasting",
    description: "Learn techniques for long-term intelligence prediction and planning",
    path: "/advanced-topics/strategic-forecasting",
    imagePath: "/strategic-forecasting.png",
    categories: ["Strategic", "Analysis", "Methodology"],
  },
  {
    id: "social-network-analysis",
    title: "Social Network Analysis",
    description: "Advanced techniques for mapping and analyzing relationship networks",
    path: "/advanced-topics/social-network-analysis",
    imagePath: "/social-network-analysis.png",
    categories: ["Analysis", "Methodology"],
  },
  {
    id: "deep-web-research",
    title: "Deep Web Research",
    description: "Explore methods for safely researching non-indexed internet content",
    path: "/advanced-topics/deep-web-research",
    imagePath: "/deep-web-research.png",
    categories: ["Collection", "Technology"],
  },
  {
    id: "network-disruption",
    title: "Network Disruption",
    description: "Advanced strategies for identifying and disrupting criminal networks",
    path: "/advanced-topics/network-disruption",
    imagePath: "/network-disruption.png",
    categories: ["Tactical", "Operational"],
  },
  {
    id: "intelligence-storytelling",
    title: "Intelligence Storytelling",
    description: "Master the art of presenting intelligence through compelling narratives",
    path: "/advanced-topics/intelligence-storytelling",
    imagePath: "/intelligence-storytelling.png",
    categories: ["Reporting", "Methodology"],
  },
  {
    id: "operations-security",
    title: "Operations Security",
    description: "Learn OPSEC principles to protect intelligence operations and sources",
    path: "/advanced-topics/operations-security",
    imagePath: "/operations-security.png",
    categories: ["Operational", "Methodology"],
  },
  {
    id: "predictive-patterning",
    title: "Predictive Patterning",
    description: "Advanced techniques for forecasting criminal behavior and trends",
    path: "/advanced-topics/predictive-patterning",
    imagePath: "/predictive-patterning.png",
    categories: ["Analysis", "Methodology"],
  },
  {
    id: "risk-terrain-modeling",
    title: "Risk Terrain Modeling",
    description: "Spatial analysis techniques for identifying high-risk areas",
    path: "/advanced-topics/risk-terrain-modeling",
    imagePath: "/risk-terrain-modeling.png",
    categories: ["Analysis", "Technology"],
  },
  {
    id: "statistical-techniques",
    title: "Statistical Techniques",
    description: "Advanced statistical methods for intelligence analysis",
    path: "/advanced-topics/statistical-techniques",
    imagePath: "/statistical-techniques.png",
    categories: ["Analysis", "Methodology"],
  },
  {
    id: "strategic-risk-assessment",
    title: "Strategic Risk Assessment",
    description: "Frameworks for evaluating long-term threats",
    path: "/advanced-topics/strategic-risk-assessment",
    imagePath: "/strategic-risk-assessment.png",
    categories: ["Strategic", "Analysis"],
  },
  {
    id: "structured-analytical-techniques",
    title: "Structured Analytical Techniques",
    description: "Systematic approaches to reduce bias and improve analysis quality",
    path: "/advanced-topics/structured-analytical-techniques",
    imagePath: "/structured-analytical-techniques.png",
    categories: ["Analysis", "Methodology"],
  },
  {
    id: "target-package-development",
    title: "Target Package Development",
    description: "Create intelligence profiles for operational planning",
    path: "/advanced-topics/target-package-development",
    imagePath: "/target-package-development.png",
    categories: ["Tactical", "Operational"],
  },
  {
    id: "analyst-notebook",
    title: "Analyst Notebook",
    description: "Learn to use IBM i2 Analyst's Notebook for visual intelligence analysis",
    path: "/learning-paths/analyst-notebook",
    imagePath: "/learning-path-thumbnails/intelligence-tools-thumb.png",
    categories: ["Technology", "Analysis"],
  },
  {
    id: "analytical-techniques",
    title: "Analytical Techniques",
    description: "Structured methods to improve your analytical thinking",
    path: "/learning-paths/analytical-techniques",
    imagePath: "/learning-path-thumbnails/analytical-techniques-thumb.png",
    categories: ["Analysis", "Methodology"],
  },
  {
    id: "operational-intelligence",
    title: "Operational Intelligence",
    description: "Learn how to apply intelligence to operational decision-making and planning",
    path: "/learning-paths/operational-intelligence",
    imagePath: "/learning-path-thumbnails/operational-intelligence-thumb.png",
    categories: ["Operational"],
  },
  {
    id: "tactical-intelligence",
    title: "Tactical Intelligence",
    description: "Develop skills for immediate, actionable intelligence support",
    path: "/learning-paths/tactical-intelligence",
    imagePath: "/learning-path-thumbnails/tactical-intelligence-thumb.png",
    categories: ["Tactical"],
  },
]

// Extract unique categories for filter buttons
const allCategories: TopicCategory[] = [
  "All",
  ...Array.from(new Set(advancedTopics.flatMap((topic) => topic.categories))).sort(),
] as TopicCategory[]

// Image component with proper error handling
function TopicImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-2xl mb-2">📚</div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</div>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={400}
      height={240}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      //onError={() => setImageError(true)}
      unoptimized
    />
  )
}

export function AdvancedTopicsShowcase() {
  const [activeFilter, setActiveFilter] = useState<TopicCategory>("All")

  // Filter topics based on active category
  const filteredTopics = useMemo(() => {
    if (activeFilter === "All") {
      return advancedTopics
    }
    return advancedTopics.filter((topic) => topic.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Advanced Topics</h2>
            <p className="text-muted-foreground">Explore specialized intelligence techniques and methodologies</p>
          </div>
          <Link href="/advanced-topics" className="text-primary hover:text-primary/80 font-medium flex items-center">
            View All ({advancedTopics.length})
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="whitespace-nowrap"
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                    {advancedTopics.filter((t) => t.categories.includes(category)).length}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredTopics.length} {filteredTopics.length === 1 ? "topic" : "topics"}
          {activeFilter !== "All" && ` in ${activeFilter}`}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <Link key={topic.id} href={topic.path} className="block group">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                    <TopicImage
                      src={topic.imagePath || "/placeholder.svg?height=240&width=400"}
                      alt={topic.title}
                      title={topic.title}
                    />
                    {/* Category badges */}
                    <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end max-w-[calc(100%-16px)]">
                      {topic.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm"
                        >
                          {cat}
                        </span>
                      ))}
                      {topic.categories.length > 2 && (
                        <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                          +{topic.categories.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">{topic.description}</p>
                    <div className="mt-3 flex items-center text-xs text-primary font-medium">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-medium mb-2">No topics found</h3>
              <p className="text-muted-foreground mb-4">Try selecting a different category filter</p>
              <Button onClick={() => setActiveFilter("All")} variant="outline">
                Show All Topics
              </Button>
            </div>
          )}
        </div>

        {filteredTopics.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/advanced-topics"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              Explore All Advanced Topics
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
