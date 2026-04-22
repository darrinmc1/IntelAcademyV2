import Link from "next/link"
import { StaticImage } from "@/components/static-image"
import { ChevronRight } from "lucide-react"

interface CompactLearningPathsMenuProps {
  category?: "core" | "methods" | "analysis" | "skills" | "all"
  limit?: number
}

export function CompactLearningPathsMenu({ category = "all", limit }: CompactLearningPathsMenuProps) {
  const paths = getLearningPaths(category, limit)

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-3">Learning Paths</h3>
      <ul className="space-y-2">
        {paths.map((path) => (
          <li key={path.href}>
            <Link href={path.href} className="flex items-center gap-2 p-2 hover:bg-white rounded-md transition-colors">
              <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
                <StaticImage
                  src={path.imagePath}
                  alt={path.title}
                  width={24}
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-sm">{path.title}</span>
              <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/learning-paths"
            className="flex items-center justify-center gap-2 p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors mt-2 text-sm font-medium"
          >
            View All Learning Paths
            <ChevronRight className="w-4 h-4" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

function getLearningPaths(category: string, limit?: number) {
  const allPaths = [
    // Core Intelligence
    {
      title: "Foundations",
      href: "/learning-paths/foundations",
      imagePath: "/foundations.png",
      category: "core",
    },
    {
      title: "Strategic Intelligence",
      href: "/learning-paths/strategic-intelligence",
      imagePath: "/strategic-intelligence.png",
      category: "core",
    },
    {
      title: "Tactical Intelligence",
      href: "/learning-paths/tactical-intelligence",
      imagePath: "/tactical-intelligence.png",
      category: "core",
    },
    {
      title: "Operational Intelligence",
      href: "/learning-paths/operational-intelligence",
      imagePath: "/operational-intelligence.png",
      category: "core",
    },

    // Intelligence Methods
    {
      title: "OSINT",
      href: "/learning-paths/osint",
      imagePath: "/osint.png",
      category: "methods",
    },
    {
      title: "Digital Intelligence",
      href: "/learning-paths/digital-intelligence",
      imagePath: "/digital-intelligence.png",
      category: "methods",
    },
    {
      title: "Geospatial Intelligence",
      href: "/learning-paths/geospatial-intelligence",
      imagePath: "/geospatial-intelligence.png",
      category: "methods",
    },
    {
      title: "Financial Intelligence",
      href: "/learning-paths/financial-intelligence",
      imagePath: "/financial-intelligence.png",
      category: "methods",
    },

    // Analysis Techniques
    {
      title: "Threat Assessment",
      href: "/learning-paths/threat-assessment",
      imagePath: "/threat-assessment.png",
      category: "analysis",
    },
    {
      title: "Crime Series Analysis",
      href: "/learning-paths/crime-series-analysis",
      imagePath: "/crime-series-analysis.png",
      category: "analysis",
    },
    {
      title: "Hot Spot Analysis",
      href: "/learning-paths/hot-spot-analysis",
      imagePath: "/hot-spot-analysis.png",
      category: "analysis",
    },
    {
      title: "Network Analysis",
      href: "/learning-paths/network-analysis",
      imagePath: "/network-analysis.png",
      category: "analysis",
    },
    {
      title: "Target Profiling",
      href: "/learning-paths/target-profiling",
      imagePath: "/target-profiling.png",
      category: "analysis",
    },
    {
      title: "Crime Trend Analysis",
      href: "/learning-paths/crime-trend-analysis",
      imagePath: "/crime-trend-analysis.png",
      category: "analysis",
    },
    {
      title: "Analytical Techniques",
      href: "/learning-paths/analytical-techniques",
      imagePath: "/analytical-techniques-banner.png",
      category: "analysis",
    },

    // Skills & Tools
    {
      title: "Report Writing",
      href: "/learning-paths/report-writing",
      imagePath: "/report-writing.png",
      category: "skills",
    },
    {
      title: "Intelligence Tools",
      href: "/learning-paths/intelligence-tools",
      imagePath: "/intelligence-tools-default.png",
      category: "skills",
    },
    {
      title: "Source Evaluation",
      href: "/learning-paths/source-evaluation",
      imagePath: "/source-evaluation-default.png",
      category: "skills",
    },
    {
      title: "Intelligence Ethics",
      href: "/learning-paths/intelligence-ethics",
      imagePath: "/intelligence-ethics-default.png",
      category: "skills",
    },
    {
      title: "Cognitive Bias",
      href: "/learning-paths/cognitive-bias",
      imagePath: "/cognitive-bias-default.png",
      category: "skills",
    },
    {
      title: "Intelligence Communication",
      href: "/learning-paths/intelligence-communication",
      imagePath: "/intelligence-communication-default.png",
      category: "skills",
    },
    {
      title: "Excel for Analysts",
      href: "/learning-paths/excel-for-analysts",
      imagePath: "/excel-dashboard-insights.png",
      category: "skills",
    },
    {
      title: "Data Collection Planning",
      href: "/learning-paths/data-collection-planning",
      imagePath: "/data-collection-planning-banner.png",
      category: "skills",
    },
  ]

  let filteredPaths = category === "all" ? allPaths : allPaths.filter((path) => path.category === category)

  if (limit && filteredPaths.length > limit) {
    filteredPaths = filteredPaths.slice(0, limit)
  }

  return filteredPaths
}
