import TargetProfilingPage from "@/app/learning-paths/target-profiling/page"
import { LearningPathCard } from "@/components/learning-path-card"

export function LearningPathsSection() {
  // Define the 6 featured learning paths exactly as shown in the screenshot
  const featuredPaths = [
    {
      title: "Foundations of Intelligence",
      humorousQuote: "Because you can't build a house of cards without knowing what cards are",
      description: "Learn the fundamental concepts and principles of intelligence analysis",
      imagePath: "/foundations-thumb.png",
      path: "/learning-paths/foundations",
      difficulty: "Beginner" as const,
      topicCount: 12,
      estimatedTime: "3-4 hours",
    },
    {
      title: "Strategic Intelligence",
      humorousQuote: "Think big picture, or get lost in the pixels",
      description: "Master long-term analysis and strategic forecasting techniques",
      imagePath: "/strategic-intelligence-thumb.png",
      path: "/learning-paths/strategic-intelligence",
      difficulty: "Advanced" as const,
      topicCount: 15,
      estimatedTime: "4-5 hours",
    },
    {
      title: "OSINT Fundamentals",
      humorousQuote: "Professional stalking with a badge and better coffee",
      description: "Master open source intelligence collection and analysis techniques",
      imagePath: "/osint-thumb.png",
      path: "/learning-paths/osint",
      difficulty: "Beginner" as const,
      topicCount: 18,
      estimatedTime: "5-6 hours",
    },
    {
      title: "Report Writing",
      humorousQuote: "Making your brilliant insights sound... well, brilliant",
      description: "Develop professional intelligence writing and presentation skills",
      imagePath: "/report-writing-thumb.png", 
      path: "/learning-paths/report-writing",
      difficulty: "Intermediate" as const,
      topicCount: 8,
      estimatedTime: "2-3 hours",
    },
    {
      title: "Threat Assessment",
      humorousQuote: "Separating real dangers from your neighbor's loud music",
      description: "Learn methodologies for evaluating and communicating threats",
      imagePath: "/threat-assessment-thumb.png",
      path: "/learning-paths/threat-assessment",
      difficulty: "Advanced" as const,
      topicCount: 12,
      estimatedTime: "4-6 hours",
    },
    {
      title: "IBM Analyst Notebook",
      humorousQuote: "Making connections visible, one link at a time",
      description: "Learn to use IBM i2 Analyst's Notebook for link analysis and data visualization",
      imagePath: "/analyst-notebook.png", 
      path: "/learning-paths/analyst-notebook",
      difficulty: "Intermediate" as const,
      topicCount: 8,
      estimatedTime: "3-4 hours",
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPaths.map((path, index) => (
            <div key={path.title}>
              <LearningPathCard
                title={path.title}
                humorousQuote={path.humorousQuote}
                description={path.description}
                image={path.imagePath}
                href={path.path}
                difficulty={path.difficulty}
                topics={path.topicCount}
                estimatedTime={path.estimatedTime}
                enable3D={true}
                intensity="medium"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
