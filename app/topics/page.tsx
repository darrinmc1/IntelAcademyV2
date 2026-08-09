"use client"

import { useState } from "react"
import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"
import Link from "next/link"
import { Grid3X3, List } from "lucide-react"

const topics = [
  {
    title: "Collection Planning Process: Incorporating Feedback",
    description: "This lesson explores the critical role of feedback in refining and optimizing the collection planning process within intelligence operations.",
    image: "/collection-planning-process-feedback.png",
    href: "/topics/collection-planning-process-feedback",
    category: "Intelligence Operations",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Understand the iterative nature of the collection planning process.",
      "Identify key sources of feedback within intelligence operations.",
      "Learn strategies for integrating feedback to improve collection efforts.",
    ],
  },
  {
    title: "Introduction to Link Analysis",
    description: "This lesson provides a foundational understanding of link analysis, a crucial intelligence technique for uncovering hidden relationships and patterns within data.",
    image: "/introduction-to-link-analysis.png",
    href: "/topics/introduction-to-link-analysis",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Define link analysis and its core components.",
      "Identify the key benefits of using link analysis in intelligence.",
      "Recognize common methods and concepts used in link analysis.",
    ],
  },
  {
    title: "Advanced Techniques in Crime Series Analysis",
    description: "Explore sophisticated methodologies for analyzing patterns and trends within crime series, moving beyond basic statistical approaches to uncover deeper insights.",
    image: "/advanced-techniques-in-crime-series-analysis.png",
    href: "/topics/advanced-techniques-in-crime-series-analysis",
    category: "Criminology",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Apply advanced spatial-temporal analysis techniques to crime series.",
      "Utilize network analysis to understand criminal group structures.",
      "Implement machine learning for crime series prediction and classification.",
    ],
  },
  {
    title: "Understanding Intel Analysis Feedback Loops",
    description: "Explore the critical role of feedback loops in refining intelligence analysis, ensuring accuracy, and improving future assessments.",
    image: "/understanding-intel-analysis-feedback-loops.png",
    href: "/topics/understanding-intel-analysis-feedback-loops",
    category: "Intelligence Analysis",
    estimatedTime: "12 min",
    completed: false,
    learningObjectives: [
      "Identify different types of feedback loops in intelligence analysis.",
      "Explain the importance of structured feedback for analytical improvement.",
      "Recognize challenges and strategies for implementing effective feedback mechanisms.",
    ],
  },
  {
    title: "User Content Feedback Loops in Intel Analysis",
    description: "Explore the critical role of user feedback in refining and improving intelligence analysis content, ensuring relevance and accuracy.",
    image: "/user-content-feedback-loops.png",
    href: "/topics/user-content-feedback-loops",
    category: "Intelligence Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Understand the definition and purpose of user feedback loops in intelligence.",
      "Identify the benefits of incorporating user feedback into intelligence analysis.",
      "Recognize key methods for implementing effective feedback mechanisms.",
    ],
  },
  {
    title: "Feedback and Content Request for Intel Analyst Academy",
    description: "This lesson addresses a user feedback request regarding missing content for 'start links' on the Intel Analyst Academy platform, outlining a process for identifying and rectifying such issues.",
    image: "/feedback-content-request-for-analyst-academy.png",
    href: "/topics/feedback-content-request-for-analyst-academy",
    category: "Intel Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Understand the importance of link integrity in online learning platforms.",
      "Implement a systematic process for addressing user feedback on missing content.",
      "Recognize the value of proactive content maintenance and quality assurance.",
    ],
  },
  {
    title: "Strategic Intelligence Products Overview",
    description: "An introduction to the various types of strategic intelligence products used in analysis and decision-making.",
    image: "/strategic-intelligence-products-overview.png",
    href: "/topics/strategic-intelligence-products-overview",
    category: "Intelligence Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Identify the purpose and characteristics of strategic intelligence products.",
      "Describe common types of strategic intelligence products.",
      "Explain the importance of strategic intelligence for decision-making.",
    ],
  },
  {
    title: "Strategic Intelligence Products",
    description: "An overview of the various types of strategic intelligence products used in analysis and decision-making.",
    image: "/strategic-intelligence-products.png",
    href: "/topics/strategic-intelligence-products",
    category: "Intelligence Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Differentiate between tactical, operational, and strategic intelligence.",
      "Identify and describe common types of strategic intelligence products.",
      "Understand the key characteristics of effective strategic intelligence products.",
    ],
  },
  {
    title: "Collection Planning Process for Intel Analysts",
    description: "Master the systematic approach to gathering intelligence, from defining requirements to evaluating collection efforts.",
    image: "/collection-planning-process-for-intel-analysts.png",
    href: "/topics/collection-planning-process-for-intel-analysts",
    category: "Intelligence Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Understand the key phases of the intelligence collection planning process.",
      "Identify methods for defining and prioritizing intelligence requirements.",
      "Recognize the importance of source assessment and collection strategy development.",
    ],
  },
  {
    title: "Strategic Intelligence Products for Intel Analysts",
    description: "An in-depth look at the various types of strategic intelligence products used by intelligence analysts, their purpose, and how to effectively produce them.",
    image: "/strategic-intelligence-products-intel-analyst-academy.png",
    href: "/topics/strategic-intelligence-products-intel-analyst-academy",
    category: "Intelligence Analysis",
    estimatedTime: "20 min",
    completed: false,
    learningObjectives: [
      "Identify the purpose and types of strategic intelligence products.",
      "Understand the key elements of effective strategic analysis.",
      "Recognize the importance of audience and clear communication in intelligence products.",
    ],
  },
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Intelligence Analysis Topics</h1>
          <p className="text-lg text-slate-400">
            Explore our collection of intelligence analysis topics, from foundational concepts to advanced
            analytical techniques.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <TopicCard3D
              key={topic.title}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              href={topic.href}
              category={topic.category}
              completed={topic.completed}
              objectives={topic.learningObjectives}
              intensity="medium"
              duration={topic.estimatedTime}
              difficulty="Intermediate"
            />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl space-y-3">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all hover:bg-blue-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                    {topic.completed && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Completed</span>}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{topic.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded">{topic.category}</span>
                    <span>{topic.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
