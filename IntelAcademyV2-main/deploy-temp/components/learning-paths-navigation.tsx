import Link from "next/link"
import { StaticImage } from "@/components/static-image"

interface LearningPathItem {
  title: string
  description: string
  href: string
  imagePath: string
  category: "core" | "methods" | "analysis" | "skills"
}

const learningPaths: LearningPathItem[] = [
  // Core Intelligence
  {
    title: "Foundations",
    description: "Essential intelligence concepts and principles",
    href: "/learning-paths/foundations",
    imagePath: "/foundations.png",
    category: "core",
  },
  {
    title: "Strategic Intelligence",
    description: "Long-term planning and decision making",
    href: "/learning-paths/strategic-intelligence",
    imagePath: "/strategic-intelligence.png",
    category: "core",
  },
  {
    title: "Tactical Intelligence",
    description: "Immediate operational support",
    href: "/learning-paths/tactical-intelligence",
    imagePath: "/tactical-intelligence.png",
    category: "core",
  },
  {
    title: "Operational Intelligence",
    description: "Day-to-day operations and planning",
    href: "/learning-paths/operational-intelligence",
    imagePath: "/operational-intelligence.png",
    category: "core",
  },

  // Intelligence Methods
  {
    title: "OSINT",
    description: "Open Source Intelligence techniques",
    href: "/learning-paths/osint",
    imagePath: "/osint.png",
    category: "methods",
  },
  {
    title: "Digital Intelligence",
    description: "Digital evidence collection and analysis",
    href: "/learning-paths/digital-intelligence",
    imagePath: "/digital-intelligence.png",
    category: "methods",
  },
  {
    title: "Geospatial Intelligence",
    description: "Geographic and spatial analysis",
    href: "/learning-paths/geospatial-intelligence",
    imagePath: "/geospatial-intelligence.png",
    category: "methods",
  },
  {
    title: "Financial Intelligence",
    description: "Financial investigations and analysis",
    href: "/learning-paths/financial-intelligence",
    imagePath: "/financial-intelligence.png",
    category: "methods",
  },

  // Analysis Techniques
  {
    title: "Threat Assessment",
    description: "Evaluating potential threats",
    href: "/learning-paths/threat-assessment",
    imagePath: "/threat-assessment.png",
    category: "analysis",
  },
  {
    title: "Crime Series Analysis",
    description: "Identifying and analyzing crime patterns",
    href: "/learning-paths/crime-series-analysis",
    imagePath: "/crime-series-analysis.png",
    category: "analysis",
  },
  {
    title: "Hot Spot Analysis",
    description: "Geographic concentration of activities",
    href: "/learning-paths/hot-spot-analysis",
    imagePath: "/hot-spot-analysis.png",
    category: "analysis",
  },
  {
    title: "Network Analysis",
    description: "Mapping relationships and connections",
    href: "/learning-paths/network-analysis",
    imagePath: "/network-analysis.png",
    category: "analysis",
  },
  {
    title: "Target Profiling",
    description: "Subject analysis and behavioral assessment",
    href: "/learning-paths/target-profiling",
    imagePath: "/target-profiling.png",
    category: "analysis",
  },
  {
    title: "Crime Trend Analysis",
    description: "Identifying and forecasting trends",
    href: "/learning-paths/crime-trend-analysis",
    imagePath: "/crime-trend-analysis.png",
    category: "analysis",
  },
  {
    title: "Analytical Techniques",
    description: "Structured analytical methodologies",
    href: "/learning-paths/analytical-techniques",
    imagePath: "/analytical-techniques-banner.png",
    category: "analysis",
  },

  // Skills & Tools
  {
    title: "Report Writing",
    description: "Effective intelligence reporting",
    href: "/learning-paths/report-writing",
    imagePath: "/report-writing.png",
    category: "skills",
  },
  {
    title: "Intelligence Tools",
    description: "Software and platforms for analysis",
    href: "/learning-paths/intelligence-tools",
    imagePath: "/intelligence-tools-default.png",
    category: "skills",
  },
  {
    title: "Source Evaluation",
    description: "Assessing reliability and credibility",
    href: "/learning-paths/source-evaluation",
    imagePath: "/source-evaluation-default.png",
    category: "skills",
  },
  {
    title: "Intelligence Ethics",
    description: "Ethical considerations in intelligence",
    href: "/learning-paths/intelligence-ethics",
    imagePath: "/intelligence-ethics-default.png",
    category: "skills",
  },
  {
    title: "Cognitive Bias",
    description: "Recognizing and mitigating bias",
    href: "/learning-paths/cognitive-bias",
    imagePath: "/cognitive-bias-default.png",
    category: "skills",
  },
  {
    title: "Intelligence Communication",
    description: "Effective briefing and presentation",
    href: "/learning-paths/intelligence-communication",
    imagePath: "/intelligence-communication-default.png",
    category: "skills",
  },
  {
    title: "Excel for Analysts",
    description: "Spreadsheet skills for intelligence",
    href: "/learning-paths/excel-for-analysts",
    imagePath: "/excel-dashboard-insights.png",
    category: "skills",
  },
  {
    title: "Data Collection Planning",
    description: "Structured information gathering",
    href: "/learning-paths/data-collection-planning",
    imagePath: "/data-collection-planning-banner.png",
    category: "skills",
  },
]

export function LearningPathsNavigation() {
  const corePaths = learningPaths.filter((path) => path.category === "core")
  const methodsPaths = learningPaths.filter((path) => path.category === "methods")
  const analysisPaths = learningPaths.filter((path) => path.category === "analysis")
  const skillsPaths = learningPaths.filter((path) => path.category === "skills")

  return (
    <div className="py-8">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-center">Learning Path Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Core Intelligence */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold">Core Intelligence</h3>
              <p className="text-sm opacity-90">Fundamental concepts and disciplines</p>
            </div>
            <ul className="p-4 space-y-3">
              {corePaths.map((path) => (
                <li key={path.href}>
                  <Link href={path.href} className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                      <StaticImage
                        src={path.imagePath}
                        alt={path.title}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{path.title}</div>
                      <div className="text-xs text-gray-500">{path.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence Methods */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-bold">Intelligence Methods</h3>
              <p className="text-sm opacity-90">Collection and source disciplines</p>
            </div>
            <ul className="p-4 space-y-3">
              {methodsPaths.map((path) => (
                <li key={path.href}>
                  <Link href={path.href} className="flex items-center gap-3 hover:text-green-600 transition-colors">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                      <StaticImage
                        src={path.imagePath}
                        alt={path.title}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{path.title}</div>
                      <div className="text-xs text-gray-500">{path.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysis Techniques */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-4">
              <h3 className="text-xl font-bold">Analysis Techniques</h3>
              <p className="text-sm opacity-90">Methodologies and frameworks</p>
            </div>
            <ul className="p-4 space-y-3">
              {analysisPaths.map((path) => (
                <li key={path.href}>
                  <Link href={path.href} className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                      <StaticImage
                        src={path.imagePath}
                        alt={path.title}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{path.title}</div>
                      <div className="text-xs text-gray-500">{path.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Tools */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-amber-600 text-white p-4">
              <h3 className="text-xl font-bold">Skills & Tools</h3>
              <p className="text-sm opacity-90">Practical abilities and resources</p>
            </div>
            <ul className="p-4 space-y-3">
              {skillsPaths.map((path) => (
                <li key={path.href}>
                  <Link href={path.href} className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                      <StaticImage
                        src={path.imagePath}
                        alt={path.title}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{path.title}</div>
                      <div className="text-xs text-gray-500">{path.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
