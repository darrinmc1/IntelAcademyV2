import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"

const topics = [
  {
    title: "What is Intelligence?",
    description: "Understand the fundamental concepts and definitions of intelligence analysis.",
    image: "/what-is-intelligence.png",
    href: "/topics/what-is-intelligence",
    category: "Foundations",
    estimatedTime: "15 min",
    completed: true,
    learningObjectives: [
      "Define intelligence in the analytical context",
      "Distinguish between information and intelligence",
      "Identify the key characteristics of actionable intelligence",
    ],
  },
  {
    title: "Intelligence Cycle",
    description: "Learn the five steps of the intelligence cycle and how they interconnect.",
    image: "/intelligence-cycle.png",
    href: "/topics/intelligence-cycle",
    category: "Foundations",
    estimatedTime: "20 min",
    completed: true,
    learningObjectives: [
      "Describe the five phases of the intelligence cycle",
      "Explain the importance of each phase",
      "Identify common challenges in the cycle",
    ],
  },
  {
    title: "Intelligence Types",
    description: "Explore different types of intelligence including HUMINT, OSINT, SIGINT, and more.",
    image: "/intelligence-types.png",
    href: "/topics/intelligence-types",
    category: "Foundations",
    estimatedTime: "25 min",
    completed: false,
    learningObjectives: [
      "Identify the major intelligence collection disciplines",
      "Compare strengths and limitations of each type",
      "Understand how different types complement each other",
    ],
  },
  {
    title: "Strategic Intelligence Concept",
    description: "Understand the principles and applications of strategic intelligence.",
    image: "/strategic-intelligence-concept.png",
    href: "/topics/strategic-intelligence-concept",
    category: "Strategic",
    estimatedTime: "30 min",
    completed: false,
    learningObjectives: [
      "Define strategic intelligence and its purpose",
      "Identify key components of strategic analysis",
      "Understand timeframes and planning horizons",
    ],
  },
  {
    title: "Tactical Intelligence Concept",
    description: "Learn about tactical intelligence and its role in operational success.",
    image: "/tactical-intelligence-concept.png",
    href: "/topics/tactical-intelligence-concept",
    category: "Tactical",
    estimatedTime: "25 min",
    completed: false,
    learningObjectives: [
      "Define tactical intelligence and its applications",
      "Understand the time-sensitive nature of tactical intelligence",
      "Identify key tactical intelligence products",
    ],
  },
  {
    title: "OSINT Techniques",
    description: "Master techniques for effective open source intelligence collection and analysis.",
    image: "/what-is-osint.png",
    href: "/topics/osint-techniques",
    category: "Collection",
    estimatedTime: "35 min",
    completed: false,
    learningObjectives: [
      "Apply advanced search techniques",
      "Evaluate source reliability in open sources",
      "Use tools for OSINT collection and organization",
    ],
  },
  {
    title: "Intelligence Report Fundamentals",
    description: "Learn the essential components of effective intelligence reports.",
    image: "/intelligence-report-fundamentals.png",
    href: "/topics/intelligence-report-fundamentals",
    category: "Reporting",
    estimatedTime: "30 min",
    completed: false,
    learningObjectives: [
      "Structure intelligence reports effectively",
      "Write clear, concise analytical judgments",
      "Incorporate appropriate evidence and sourcing",
    ],
  },
  {
    title: "Cognitive Biases in Intelligence",
    description: "Recognize and mitigate cognitive biases that affect intelligence analysis.",
    image: "/cognitive-biases.png",
    href: "/topics/cognitive-biases",
    category: "Analysis",
    estimatedTime: "40 min",
    completed: false,
    learningObjectives: [
      "Identify common cognitive biases in analysis",
      "Apply debiasing techniques",
      "Develop strategies for more objective analysis",
    ],
  },
  {
    title: "Analysis of Competing Hypotheses",
    description: "Learn the structured technique for evaluating multiple competing hypotheses.",
    image: "/analytical-techniques/competing-hypotheses.png",
    href: "/topics/analysis-competing-hypotheses",
    category: "Analysis",
    estimatedTime: "45 min",
    completed: false,
    learningObjectives: [
      "Apply the ACH methodology step by step",
      "Create and evaluate hypothesis matrices",
      "Use ACH to reduce analytical errors",
    ],
  },
]

export default function TopicsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Intelligence Analysis Topics</h1>
        <p className="text-xl text-gray-600">
          Explore our collection of intelligence analysis topics, from foundational concepts to advanced
          analytical techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <TopicCard3D
            key={topic.title}
            title={topic.title}
            description={topic.description}
            image={topic.image}
            href={topic.href}
            category={topic.category}
            estimatedTime={topic.estimatedTime}
            completed={topic.completed}
            learningObjectives={topic.learningObjectives}
            intensity="medium"
          />
        ))}
      </div>
    </div>
  )
}
