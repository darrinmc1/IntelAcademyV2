import { StartCourseButton } from "@/components/start-course-button"

interface LearningPath {
  title: string
  path: string
}

const learningPaths: LearningPath[] = [
  { title: "Foundations of Intelligence", path: "/learning-paths/foundations" },
  { title: "Strategic Intelligence", path: "/learning-paths/strategic-intelligence" },
  { title: "Tactical Intelligence", path: "/learning-paths/tactical-intelligence" },
  { title: "Operational Intelligence", path: "/learning-paths/operational-intelligence" },
  { title: "OSINT", path: "/learning-paths/osint" },
  { title: "Threat Assessment", path: "/learning-paths/threat-assessment" },
  { title: "Crime Series Analysis", path: "/learning-paths/crime-series-analysis" },
  { title: "Hot Spot Analysis", path: "/learning-paths/hot-spot-analysis" },
  { title: "Network Analysis", path: "/learning-paths/network-analysis" },
  { title: "Target Profiling", path: "/learning-paths/target-profiling" },
  { title: "Crime Trend Analysis", path: "/learning-paths/crime-trend-analysis" },
  { title: "Analytical Techniques", path: "/learning-paths/analytical-techniques" },
  { title: "Data Collection Planning", path: "/learning-paths/data-collection-planning" },
  { title: "Excel for Analysts", path: "/learning-paths/excel-for-analysts" },
  { title: "Intelligence Tools", path: "/learning-paths/intelligence-tools" },
  { title: "Source Evaluation", path: "/learning-paths/source-evaluation" },
  { title: "Digital Intelligence", path: "/learning-paths/digital-intelligence" },
  { title: "Geospatial Intelligence", path: "/learning-paths/geospatial-intelligence" },
  { title: "Intelligence Ethics", path: "/learning-paths/intelligence-ethics" },
  { title: "Cognitive Bias", path: "/learning-paths/cognitive-bias" },
  { title: "Financial Intelligence", path: "/learning-paths/financial-intelligence" },
  { title: "Intelligence Communication", path: "/learning-paths/intelligence-communication" },
  { title: "Analyst's Notebook", path: "/learning-paths/analyst-notebook" },
  { title: "Report Writing", path: "/learning-paths/report-writing" },
]

export function LearningPathsButtons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {learningPaths.map((path) => (
        <div key={path.path} className="flex items-center justify-between bg-gray-100 rounded-lg p-4 hover:bg-yellow-500">
          <span className="text-gray-800 text-sm">{path.title}</span>
          <StartCourseButton path={path.path} className="ml-2" size="sm" />
        </div>
      ))}
    </div>
  )
}
