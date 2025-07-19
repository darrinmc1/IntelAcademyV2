import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { StartCourseButton } from "@/components/start-course-button"
import { StaticImage } from "@/components/static-image"

interface LearningPath {
  title: string
  description: string
  path: string
  image: string
}

const learningPaths: LearningPath[] = [
  {
    title: "Foundations of Intelligence",
    description: "Learn the core concepts, principles, and cycle of intelligence analysis.",
    path: "/learning-paths/foundations",
    image: "/foundations-thumb.png",
  },
  {
    title: "Strategic Intelligence",
    description: "Explore long-term intelligence analysis for strategic decision-making.",
    path: "/learning-paths/strategic-intelligence",
    image: "/strategic-intelligence-thumb.png",
  },
  {
    title: "Tactical Intelligence",
    description: "Discover immediate intelligence support for operational activities.",
    path: "/learning-paths/tactical-intelligence",
    image: "/tactical-intelligence-thumb.png",
  },
  {
    title: "Operational Intelligence",
    description: "Learn about intelligence that supports ongoing operations and investigations.",
    path: "/learning-paths/operational-intelligence",
    image: "/operational-intelligence-thumb.png",
  },
  {
    title: "OSINT",
    description: "Master techniques for gathering and analyzing open source intelligence.",
    path: "/learning-paths/osint",
    image: "/osint-thumb.png",
  },
  {
    title: "Threat Assessment",
    description: "Learn methodologies for evaluating and prioritizing threats.",
    path: "/learning-paths/threat-assessment",
    image: "/threat-assessment-thumb.png",
  },
  {
    title: "Crime Series Analysis",
    description: "Analyze patterns and connections between related criminal incidents.",
    path: "/learning-paths/crime-series-analysis",
    image: "/crime-series-analysis-thumb.png",
  },
  {
    title: "Hot Spot Analysis",
    description: "Identify and analyze geographic concentrations of incidents.",
    path: "/learning-paths/hot-spot-analysis",
    image: "/hot-spot-analysis-thumb.png",
  },
  {
    title: "Network Analysis",
    description: "Map and analyze relationships between entities in complex networks.",
    path: "/learning-paths/network-analysis",
    image: "/network-analysis-thumb.png",
  },
  {
    title: "Target Profiling",
    description: "Develop profiles of subjects of interest.",
    path: "/learning-paths/target-profiling",
    image: "/target-profiling-thumb.png",
  },
  {
    title: "Crime Trend Analysis",
    description: "Identify and forecast patterns in criminal activity over time.",
    path: "/learning-paths/crime-trend-analysis",
    image: "/crime-trend-analysis-thumb.png",
  },
  {
    title: "Analytical Techniques",
    description: "Master structured analytical techniques for intelligence analysis.",
    path: "/learning-paths/analytical-techniques",
    image: "/foundations-thumb.png",
  },
  {
    title: "Data Collection Planning",
    description: "Learn to develop effective intelligence collection plans.",
    path: "/learning-paths/data-collection-planning",
    image: "/foundations-thumb.png",
  },
  {
    title: "Excel for Analysts",
    description: "Leverage Excel for data analysis in intelligence work.",
    path: "/learning-paths/excel-for-analysts",
    image: "/foundations-thumb.png",
  },
  {
    title: "Intelligence Tools",
    description: "Explore specialized tools used in intelligence analysis.",
    path: "/learning-paths/intelligence-tools",
    image: "/intelligence-tools-thumb.png",
  },
  {
    title: "Source Evaluation",
    description: "Learn techniques for evaluating source reliability and information credibility.",
    path: "/learning-paths/source-evaluation",
    image: "/learning-path-thumbnails/source-evaluation-thumb.png",
  },
  {
    title: "Digital Intelligence",
    description: "Discover methods for collecting and analyzing digital evidence.",
    path: "/learning-paths/digital-intelligence",
    image: "/digital-intelligence-thumb.png",
  },
  {
    title: "Geospatial Intelligence",
    description: "Learn to analyze geographic and spatial data for intelligence purposes.",
    path: "/learning-paths/geospatial-intelligence",
    image: "/geospatial-intelligence-thumb.png",
  },
  {
    title: "Intelligence Ethics",
    description: "Explore ethical considerations in intelligence collection and analysis.",
    path: "/learning-paths/intelligence-ethics",
    image: "/intelligence-ethics-thumb.png",
  },
  {
    title: "Cognitive Bias",
    description: "Understand and mitigate cognitive biases in intelligence analysis.",
    path: "/learning-paths/cognitive-bias",
    image: "/cognitive-bias-thumb.png",
  },
  {
    title: "Financial Intelligence",
    description: "Learn techniques for analyzing financial data in investigations.",
    path: "/learning-paths/financial-intelligence",
    image: "/financial-intelligence-thumb.png",
  },
  {
    title: "Intelligence Communication",
    description: "Master effective communication of intelligence findings.",
    path: "/learning-paths/intelligence-communication",
    image: "/intelligence-communication-thumb.png",
  },
  {
    title: "Analyst's Notebook",
    description: "Learn to use IBM i2 Analyst's Notebook for visual intelligence analysis.",
    path: "/learning-paths/analyst-notebook",
    image: "/intelligence-tools-thumb.png",
  },
  {
    title: "Report Writing",
    description: "Master the art of writing clear, concise intelligence reports.",
    path: "/learning-paths/report-writing",
    image: "/foundations-thumb.png",
  },
]

// Add this helper function to get the icon color
function getIconColor(title: string): string {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("foundation")) return "bg-blue-500"
  if (lowerTitle.includes("strategic")) return "bg-indigo-500"
  if (lowerTitle.includes("tactical")) return "bg-green-500"
  if (lowerTitle.includes("operational")) return "bg-cyan-500"
  if (lowerTitle.includes("osint")) return "bg-orange-500"
  if (lowerTitle.includes("digital")) return "bg-sky-500"
  if (lowerTitle.includes("geospatial")) return "bg-lime-500"
  if (lowerTitle.includes("financial")) return "bg-emerald-500"
  if (lowerTitle.includes("analytical") || lowerTitle.includes("analysis")) return "bg-violet-500"
  if (lowerTitle.includes("source")) return "bg-amber-500"
  if (lowerTitle.includes("ethics")) return "bg-teal-500"
  if (lowerTitle.includes("cognitive") || lowerTitle.includes("bias")) return "bg-pink-500"
  if (lowerTitle.includes("communication")) return "bg-blue-400"
  if (lowerTitle.includes("excel")) return "bg-green-400"
  if (lowerTitle.includes("tools")) return "bg-gray-500"
  if (lowerTitle.includes("report")) return "bg-slate-500"
  if (lowerTitle.includes("threat")) return "bg-red-500"
  if (lowerTitle.includes("crime")) return "bg-purple-500"
  if (lowerTitle.includes("hot spot")) return "bg-yellow-500"
  if (lowerTitle.includes("network")) return "bg-blue-600"
  if (lowerTitle.includes("target")) return "bg-red-600"
  if (lowerTitle.includes("data")) return "bg-indigo-400"
  return "bg-gray-500"
}

// Add this helper function to get the icon letter
function getIconLetter(title: string): string {
  const words = title.split(" ")
  if (words.length === 1) return title.charAt(0).toUpperCase()

  // Special cases
  if (title.toLowerCase().includes("osint")) return "O"
  if (title.toLowerCase().includes("excel")) return "E"

  // For two or more words, use first letter of each main word
  return words[0].charAt(0).toUpperCase()
}

export function LearningPathsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningPaths.map((path) => (
        <Card key={path.path} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="relative h-48 w-full overflow-hidden">
            <StaticImage
              src={path.image}
              alt={path.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fallbackSrc="/placeholder.svg"
            />
          </div>
          <CardHeader className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${getIconColor(path.title)}`}
              >
                {getIconLetter(path.title)}
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                {path.title}
              </h3>
            </div>
            <CardDescription>{path.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-4 pt-0">{/* Additional content can go here */}</CardContent>
          <CardFooter className="p-4 pt-0">
            <StartCourseButton path={path.path} className="w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
