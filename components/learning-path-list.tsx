import { LearningPathCard } from "@/components/learning-path-card"

// Learning path data
const learningPaths = [
  // Existing paths
  {
    title: "Foundations of Intelligence",
    description: "Essential concepts and frameworks for intelligence analysis",
    category: "foundations",
    duration: "7 Hours",
    slug: "foundations",
    topics: 5,
  },
  {
    title: "Strategic Intelligence",
    description: "Long-term analysis focused on broad trends and patterns to inform policy and strategy",
    category: "strategic-intelligence",
    duration: "10 Hours",
    slug: "strategic-intelligence",
    topics: 8,
  },
  {
    title: "Tactical Intelligence",
    description: "Short-term intelligence supporting immediate operations and decision-making",
    category: "tactical-intelligence",
    duration: "8 Hours",
    slug: "tactical-intelligence",
    topics: 6,
  },
  {
    title: "Operational Intelligence",
    description: "Mid-level intelligence bridging strategic goals and tactical execution",
    category: "operational-intelligence",
    duration: "9 Hours",
    slug: "operational-intelligence",
    topics: 7,
  },
  {
    title: "OSINT Essentials",
    description: "Master open-source intelligence gathering techniques",
    category: "osint",
    duration: "6 Hours",
    slug: "osint",
    topics: 5,
  },
  {
    title: "Report Writing",
    description: "Craft clear, concise, and effective intelligence reports",
    category: "report-writing",
    duration: "5 Hours",
    slug: "report-writing",
    topics: 4,
  },
  {
    title: "Threat Assessment",
    description: "Methodologies for evaluating and prioritizing threats",
    category: "threat-assessment",
    duration: "8 Hours",
    slug: "threat-assessment",
    topics: 6,
  },
  {
    title: "Crime Series Analysis",
    description: "Techniques for identifying and analyzing related criminal incidents",
    category: "crime-series-analysis",
    duration: "7 Hours",
    slug: "crime-series-analysis",
    topics: 5,
  },
  {
    title: "Hot Spot Analysis",
    description: "Geographic concentration of crime and strategic response planning",
    category: "hot-spot-analysis",
    duration: "6 Hours",
    slug: "hot-spot-analysis",
    topics: 4,
  },
  {
    title: "Network Analysis",
    description: "Mapping relationships between entities in criminal networks",
    category: "network-analysis",
    duration: "9 Hours",
    slug: "network-analysis",
    topics: 7,
  },
  {
    title: "Target Profiling",
    description: "Developing profiles of high-value targets",
    category: "target-profiling",
    duration: "8 Hours",
    slug: "target-profiling",
    topics: 6,
  },
  {
    title: "Crime Trend Analysis",
    description: "Identifying and forecasting patterns in criminal activity",
    category: "crime-trend-analysis",
    duration: "7 Hours",
    slug: "crime-trend-analysis",
    topics: 5,
  },
  {
    title: "Excel for Intelligence Analysts",
    description: "Leverage Excel for intelligence work and analysis",
    category: "excel-for-analysts",
    duration: "4 Hours",
    slug: "excel-for-analysts",
    topics: 5,
  },
  {
    title: "Analyst's Notebook 101",
    description: "Learn the basics of this essential analysis tool",
    category: "analyst-notebook",
    duration: "5 Hours",
    slug: "analyst-notebook",
    topics: 5,
  },
  {
    title: "Analytical Techniques",
    description: "Structured methods to improve your analytical thinking",
    category: "analytic-techniques",
    duration: "8 Hours",
    slug: "analytic-techniques",
    topics: 5,
  },
  {
    title: "Data Collection and Planning",
    description: "Strategies for effective intelligence gathering",
    category: "data-collection-plans",
    duration: "5 Hours",
    slug: "data-collection-plans",
    topics: 5,
  },

  // New learning paths
  {
    title: "Intelligence Tools & Technology",
    description: "Master the essential software and tools used by intelligence professionals",
    category: "intelligence-tools",
    duration: "12 Hours",
    slug: "intelligence-tools",
    topics: 8,
  },
  {
    title: "Source Evaluation & Validation",
    description: "Techniques for assessing the reliability and credibility of intelligence sources",
    category: "source-evaluation",
    duration: "6 Hours",
    slug: "source-evaluation",
    topics: 5,
  },
  {
    title: "Digital Intelligence",
    description: "Specialized techniques for gathering and analyzing digital evidence",
    category: "digital-intelligence",
    duration: "10 Hours",
    slug: "digital-intelligence",
    topics: 7,
  },
  {
    title: "Geospatial Intelligence",
    description: "Techniques for analyzing geographic and spatial data for intelligence purposes",
    category: "geospatial-intelligence",
    duration: "8 Hours",
    slug: "geospatial-intelligence",
    topics: 6,
  },
  {
    title: "Intelligence Ethics & Legal Framework",
    description: "Ethical considerations and legal boundaries in intelligence work",
    category: "intelligence-ethics",
    duration: "5 Hours",
    slug: "intelligence-ethics",
    topics: 4,
  },
  {
    title: "Cognitive Bias in Intelligence",
    description: "Recognizing and mitigating cognitive biases in intelligence analysis",
    category: "cognitive-bias",
    duration: "7 Hours",
    slug: "cognitive-bias",
    topics: 6,
  },
  {
    title: "Financial Intelligence",
    description: "Techniques for tracking and analyzing financial data for intelligence purposes",
    category: "financial-intelligence",
    duration: "9 Hours",
    slug: "financial-intelligence",
    topics: 7,
  },
  {
    title: "Intelligence Communication",
    description: "Advanced techniques for effectively communicating intelligence findings",
    category: "intelligence-communication",
    duration: "6 Hours",
    slug: "intelligence-communication",
    topics: 5,
  },
]

export function LearningPathList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningPaths.map((path, index) => (
        <LearningPathCard
          key={path.slug}
          title={path.title}
          description={path.description}
          category={path.category}
          duration={path.duration}
          slug={path.slug}
          index={index}
        />
      ))}
    </div>
  )
}
