"use client"

import { useState } from "react"
import { TopicCard3D } from "@/components/3d-effects/topic-card-3d"
import Link from "next/link"
import { Grid3X3, List } from "lucide-react"

const topics = [
  {
    title: "Risk Factor Indicators for Intel Analysts",
    description: "This lesson explores key indicators that intelligence analysts use to identify and assess potential risks in various scenarios.",
    image: "/risk-factor-indicators-for-intel-analysts.png",
    href: "/topics/risk-factor-indicators-for-intel-analysts",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Identify various types of risk factor indicators.",
      "Understand the analytical process for evaluating risk indicators.",
      "Recognize challenges in the detection and interpretation of risk indicators.",
    ],
  },
  {
    title: "Strategic Intelligence Products: Bridging the Gap Between Information and Action",
    description: "Explore the critical role of strategic intelligence products in transforming raw information into actionable insights for decision-makers.",
    image: "/strategic-intelligence-products-bridging-the-gap-between-information-and-action.png",
    href: "/topics/strategic-intelligence-products-bridging-the-gap-between-information-and-action",
    category: "Intelligence Studies",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Define strategic intelligence products and their purpose.",
      "Explain the information-to-action continuum and the role of strategic intelligence.",
      "Identify key characteristics of effective strategic intelligence products.",
    ],
  },
  {
    title: "Identifying and Analyzing Risk Factors and Indicators",
    description: "Learn to identify potential risks and analyze their indicators for better threat assessment and mitigation.",
    image: "/identifying-and-analyzing-risk-factors-and-indicators.png",
    href: "/topics/identifying-and-analyzing-risk-factors-and-indicators",
    category: "Risk Management",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Distinguish between risk factors and risk indicators.",
      "Identify common categories of risk factors.",
      "Develop specific indicators for potential risks.",
    ],
  },
  {
    title: "Risk Factor Indicators for Intelligence Analysis",
    description: "This lesson explores how to identify and analyze risk factor indicators within intelligence data to anticipate potential threats and opportunities.",
    image: "/risk-factor-indicators-for-intelligence-analysis.png",
    href: "/topics/risk-factor-indicators-for-intelligence-analysis",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Define and identify various types of risk factor indicators.",
      "Describe the process for analyzing identified risk factor indicators.",
      "Recognize the challenges associated with indicator analysis in intelligence.",
    ],
  },
  {
    title: "Advanced Crime Series Analysis Techniques",
    description: "Explore sophisticated methodologies for analyzing crime series, moving beyond basic pattern recognition to understand complex temporal and spatial relationships.",
    image: "/advanced-crime-series-analysis-techniques.png",
    href: "/topics/advanced-crime-series-analysis-techniques",
    category: "Intelligence Analysis",
    estimatedTime: "12 min",
    completed: false,
    learningObjectives: [
      "Apply advanced temporal analysis techniques to crime series.",
      "Integrate spatial and temporal data for dynamic crime pattern understanding.",
      "Utilize predictive modeling for crime series forecasting and risk assessment.",
    ],
  },
  {
    title: "AI Prompt Injection Defense",
    description: "Learn to identify and defend against prompt injection attacks targeting AI models, protecting your systems and data.",
    image: "/ai-prompt-injection-defense.png",
    href: "/topics/ai-prompt-injection-defense",
    category: "Cybersecurity",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Identify common prompt injection attack vectors.",
      "Understand the risks associated with AI prompt injection.",
      "Implement strategies to defend AI models against prompt injection.",
    ],
  },
  {
    title: "Threat Assessment: Methodologies for Evaluating and Prioritizing Threats",
    description: "Explore various methodologies used by intelligence analysts to effectively evaluate and prioritize potential threats, ensuring resources are allocated efficiently.",
    image: "/threat-assessment-methodologies.png",
    href: "/topics/threat-assessment-methodologies",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Identify key components of a threat assessment.",
      "Compare and contrast different threat assessment methodologies.",
      "Select appropriate methodologies based on intelligence requirements and available resources.",
    ],
  },
  {
    title: "Analytical Techniques for Intelligence Analysts",
    description: "Explore structured methods designed to enhance critical thinking and improve the quality of intelligence analysis.",
    image: "/analytical-techniques-for-intel-analysts.png",
    href: "/topics/analytical-techniques-for-intel-analysts",
    category: "Intelligence Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Identify common cognitive biases affecting intelligence analysis.",
      "Describe and apply at least two structured analytical techniques (e.g., ACH, KAC).",
      "Explain the importance of challenging assumptions and considering alternative hypotheses.",
    ],
  },
  {
    title: "Target Profiling: Developing Profiles of High-Value Targets",
    description: "Learn the essential techniques for developing comprehensive profiles of high-value targets, a critical skill for intelligence analysis.",
    image: "/target-profiling-developing-profiles-of-high-value-targets.png",
    href: "/topics/target-profiling-developing-profiles-of-high-value-targets",
    category: "Intelligence Analysis",
    estimatedTime: "10 min",
    completed: false,
    learningObjectives: [
      "Understand the definition and importance of High-Value Targets (HVTs).",
      "Identify the key components required for a comprehensive target profile.",
      "Describe the iterative process and challenges involved in target profiling.",
    ],
  },
  {
    title: "Predictive Patterning: Using Historical Series Data to Predict Future Criminal Activity",
    description: "Explore the foundational concepts of predictive patterning in intelligence analysis, focusing on how historical series data can be leveraged to forecast potential criminal activities.",
    image: "/predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac.png",
    href: "/topics/predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac",
    category: "Intelligence Analysis",
    estimatedTime: "20 min",
    completed: false,
    learningObjectives: [
      "Identify key components of historical series data relevant to criminal activity.",
      "Describe common temporal, spatial, and behavioral patterns in crime.",
      "Recognize the tools and challenges associated with predictive patterning.",
    ],
  },
  {
    title: "Series Pattern Detection: Statistical and Analytical Methods for Identifying Crime Series",
    description: "Explore statistical and analytical techniques used by intelligence analysts to detect patterns in crime series, enabling proactive intervention and resource allocation.",
    image: "/series-pattern-detection-statistical-analytical-methods-crime-series.png",
    href: "/topics/series-pattern-detection-statistical-analytical-methods-crime-series",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Identify statistical methods for detecting crime series.",
      "Understand the role of spatial and temporal analysis in pattern detection.",
      "Apply analytical techniques to interpret crime series data.",
    ],
  },
  {
    title: "Repeat Offender Profiling: Identifying and Analyzing Patterns of Repeat Offenders",
    description: "This lesson delves into the critical intelligence discipline of repeat offender profiling, equipping analysts with the methods to identify and analyze the behavioral patterns of individuals who repeatedly engage in criminal activity.",
    image: "/repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders.png",
    href: "/topics/repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders",
    category: "Intelligence Analysis",
    estimatedTime: "12 min",
    completed: false,
    learningObjectives: [
      "Identify the core components of repeat offender profiling (MO, signature, victimology).",
      "Describe common methodologies used in analyzing repeat offender behavior.",
      "Recognize the applications of repeat offender profiling in various intelligence disciplines.",
    ],
  },
  {
    title: "Crime Linkage Techniques: Connecting Crimes Through Evidence",
    description: "Explore the fundamental methods used by intelligence analysts to link seemingly unrelated crimes by examining behavioral patterns and physical evidence, enhancing investigative efficiency.",
    image: "/crime-linkage-techniques.png",
    href: "/topics/crime-linkage-techniques",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Identify key components of Modus Operandi (MO) and criminal signature.",
      "Analyze victimology to establish connections between crimes.",
      "Understand the role of physical evidence in crime linkage.",
    ],
  },
  {
    title: "Modus Operandi Analysis: Techniques for Identifying and Analyzing Criminal Methods and Behaviors",
    description: "Explore the core principles and practical techniques of Modus Operandi (MO) analysis, a critical skill for intelligence analysts in understanding and predicting criminal actions.",
    image: "/modus-operandi-analysis-techniques.png",
    href: "/topics/modus-operandi-analysis-techniques",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Define Modus Operandi (MO) and its components.",
      "Identify key techniques used in MO analysis.",
      "Explain the practical applications of MO analysis in intelligence.",
    ],
  },
  {
    title: "What is Crime Series Analysis?",
    description: "An introduction to the fundamentals of crime series analysis and its importance in law enforcement.",
    image: "/what-is-crime-series-analysis.png",
    href: "/topics/what-is-crime-series-analysis",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Define crime series analysis and its core components.",
      "Explain the importance of CSA in law enforcement investigations.",
      "Identify the key steps and challenges involved in CSA.",
    ],
  },
  {
    title: "Risk Factor Indicators for Intelligence Analysis",
    description: "This lesson explores key indicators that analysts use to identify and assess potential risks in intelligence operations and geopolitical landscapes.",
    image: "/risk-factor-indicators-for-intel-analysis.png",
    href: "/topics/risk-factor-indicators-for-intel-analysis",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Identify different categories of risk factor indicators.",
      "Understand the role of an intelligence analyst in indicator analysis.",
      "Recognize challenges inherent in analyzing risk indicators.",
    ],
  },
  {
    title: "Advanced Crime Series Analysis: Predictive Modeling and Resource Allocation",
    description: "Explore advanced techniques in crime series analysis, focusing on predictive modeling for crime forecasting and optimizing resource allocation for law enforcement.",
    image: "/advanced-crime-series-analysis-predictive-modeling-resource-allocation.png",
    href: "/topics/advanced-crime-series-analysis-predictive-modeling-resource-allocation",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Apply advanced time series and spatial-temporal models to forecast crime.",
      "Utilize machine learning algorithms for crime prediction.",
      "Develop strategies for optimizing law enforcement resource allocation based on predictive analytics.",
    ],
  },
  {
    title: "Link Analysis: Uncovering Hidden Connections",
    description: "Learn the fundamental techniques of link analysis to identify relationships and patterns within data, crucial for intelligence gathering and investigative work.",
    image: "/link-analysis-uncovering-hidden-connections.png",
    href: "/topics/link-analysis-uncovering-hidden-connections",
    category: "Intelligence Analysis",
    estimatedTime: "15 min",
    completed: false,
    learningObjectives: [
      "Identify key entities and relationships in data.",
      "Understand common link analysis techniques and metrics.",
      "Apply link analysis to uncover hidden connections in intelligence scenarios.",
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
