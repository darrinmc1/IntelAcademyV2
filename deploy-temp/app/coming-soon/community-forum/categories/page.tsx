import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Forum Categories | The Intel Analyst Academy",
  description: "Explore the various categories in our intelligence analysis community forum.",
}

// Forum category data
const categories = [
  {
    title: "Strategic Intelligence",
    description: "Long-term analysis focused on broad trends and patterns to inform policy and strategy.",
    topicCount: 24,
    slug: "strategic-intelligence",
  },
  {
    title: "Tactical Intelligence",
    description: "Short-term intelligence supporting immediate operations and decision-making.",
    topicCount: 18,
    slug: "tactical-intelligence",
  },
  {
    title: "Operational Intelligence",
    description: "Mid-level intelligence bridging strategic goals and tactical execution.",
    topicCount: 15,
    slug: "operational-intelligence",
  },
  {
    title: "OSINT",
    description: "Intelligence collected from publicly available sources like media and internet.",
    topicCount: 32,
    slug: "osint",
  },
  {
    title: "Threat Assessment",
    description: "Methodologies for identifying, analyzing, and evaluating potential threats.",
    topicCount: 20,
    slug: "threat-assessment",
  },
  {
    title: "Analysis Methods",
    description: "Structured analytical techniques and methodologies for intelligence analysis.",
    topicCount: 28,
    slug: "analysis-methods",
  },
  {
    title: "Technology & Tools",
    description: "Software, platforms, and digital tools for modern intelligence analysis.",
    topicCount: 22,
    slug: "technology-tools",
  },
  {
    title: "Career Development",
    description: "Professional growth, certifications, and career paths in intelligence.",
    topicCount: 16,
    slug: "career-development",
  },
  {
    title: "Geospatial Intelligence",
    description: "Analysis of imagery, geospatial data, and geographic information.",
    topicCount: 14,
    slug: "geospatial-intelligence",
  },
  {
    title: "Report Writing",
    description: "Best practices for creating clear, concise, and effective intelligence reports.",
    topicCount: 19,
    slug: "report-writing",
  },
  {
    title: "Trend Analysis",
    description: "Identifying and analyzing patterns and trends in intelligence data.",
    topicCount: 17,
    slug: "trend-analysis",
  },
  {
    title: "Private Sector",
    description: "Intelligence applications in corporate and business environments.",
    topicCount: 21,
    slug: "private-sector",
  },
  {
    title: "Research Methodologies",
    description: "Frameworks and approaches for conducting thorough intelligence research.",
    topicCount: 23,
    slug: "research-methodologies",
  },
]

export default function ForumCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/coming-soon/community-forum" className="flex items-center text-blue-600 hover:text-blue-800">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Community Forum
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">Forum Categories</h1>
        <p className="text-gray-600 mb-8">
          Explore our diverse range of intelligence analysis discussion categories. Each category is moderated by
          subject matter experts to ensure high-quality discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.slug} className="h-full">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-md">
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-2xl font-bold text-gray-400">{category.title}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{category.description}</p>
                <p className="mt-4 text-sm text-gray-500">{category.topicCount} Topics</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={`/coming-soon/community-forum/categories/${category.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Category
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
