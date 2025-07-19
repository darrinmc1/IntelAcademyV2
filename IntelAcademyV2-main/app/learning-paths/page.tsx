"use client"

import { useState } from "react"
import { LearningPathCard3D } from "@/components/3d-effects/learning-path-card-3d"
import { LearningPathListItem } from "@/components/learning-path-list-item"
import { learningPaths } from "@/data/learning-paths"
import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"

// Function to provide actual topics based on learning path ID
function getMockTopics(pathId: string, count: number): string[] {
  const topicsByPath: Record<string, string[]> = {
    "threat-assessment": [
      "What is Threat Assessment?",
      "Threat Assessment Models",
      "Risk Factors and Indicators",
      "Terrorism Threats",
      "Targeted Violence",
      "Critical Infrastructure Threats",
      "Cyber Threats",
      "Behavioral Threat Assessment",
      "Threat Matrix Development",
      "Scenario Planning and Analysis",
      "Threat Prioritization Techniques",
      "Threat Mitigation Strategies"
    ],
    "foundations": [
      "What is Intelligence?",
      "Information vs. Intelligence: Key Differences",
      "The Purpose of Intelligence in Decision-Making",
      "Overview of the Intelligence Cycle",
      "Direction: Setting Intelligence Requirements",
      "Collection: Gathering Information",
      "Processing: Organizing Raw Data",
      "Analysis: Finding Meaning",
      "Dissemination: Delivering Intelligence"
    ],
    "strategic-intelligence": [
      "Strategic Intelligence Concept",
      "Strategic vs. Tactical Intelligence",
      "Strategic Intelligence Products",
      "Strategic Forecasting",
      "Geopolitical Analysis",
      "Long-term Trend Analysis",
      "Strategic Warning"
    ],
    "osint": [
      "What is OSINT?",
      "OSINT Types and Categories",
      "Google Dorking Techniques"
    ],
    "report-writing": [
      "Intelligence Report Structure",
      "Writing for Decision Makers",
      "Data Visualization in Reports",
      "Executive Summaries",
      "Analytical Confidence Levels",
      "Effective Briefing Techniques",
      "Common Reporting Pitfalls"
    ],
    "tactical-intelligence": [
      "Tactical Intelligence Fundamentals",
      "Real-time Analysis Techniques",
      "Field Operations Support",
      "Immediate Threat Assessment",
      "Tactical Decision Making",
      "Rapid Intelligence Collection"
    ],
    "operational-intelligence": [
      "What is Operational Intelligence",
      "Crime Linkage Techniques",
      "Modus Operandi Analysis",
      "Crime Series Analysis",
      "Pattern Recognition",
      "Operational Planning Support"
    ],
    "intelligence-tools": [
      "Excel Fundamentals for Analysts",
      "Entity Relationship Charts",
      "Analysis of Competing Hypotheses",
      "Intelligence Requirements Development",
      "Link Analysis Software",
      "Data Visualization Tools",
      "Analytical Databases"
    ],
    "digital-intelligence": [
      "Digital Evidence Collection",
      "Social Media Analysis",
      "Digital Footprint Analysis",
      "Cyber Threat Intelligence",
      "Dark Web Investigations",
      "Mobile Device Analysis",
      "Digital Forensics Basics"
    ],
    "geospatial-intelligence": [
      "GIS Fundamentals",
      "Spatial Analysis Techniques",
      "Remote Sensing Basics",
      "Geospatial Data Visualization",
      "Terrain Analysis",
      "Predictive Mapping",
      "Satellite Imagery Analysis"
    ],
    "financial-intelligence": [
      "Financial Data Sources",
      "Money Laundering Detection",
      "Financial Network Analysis",
      "Asset Tracing Techniques",
      "Cryptocurrency Investigations",
      "Financial Statement Analysis",
      "Banking and Transaction Analysis"
    ],
    "analyst-notebook": [
      "Introduction to IBM i2 Analyst's Notebook",
      "Creating Entity Relationship Charts",
      "Link Analysis Fundamentals",
      "Importing and Exporting Data",
      "Advanced Visualization Techniques",
      "Pattern Analysis in Analyst's Notebook"
    ],
    "crime-series-analysis": [
      "Crime Series Identification",
      "Behavioral Analysis in Crime Series",
      "Geographic Profiling",
      "Temporal Pattern Analysis",
      "Offender Consistency Analysis"
    ],
    "hot-spot-analysis": [
      "What is Hot Spot Analysis (Coming Soon)",
      "Crime Mapping Techniques (Coming Soon)",
      "Temporal Analysis (Coming Soon)",
      "Risk Terrain Modeling (Coming Soon)",
      "Predictive Hot Spots (Coming Soon)",
      "Resource Deployment Strategies (Coming Soon)"
    ],
    "network-analysis": [
      "Social Network Analysis Fundamentals",
      "Centrality Measures",
      "Network Visualization",
      "Criminal Network Disruption",
      "Key Player Identification"
    ],
    "target-profiling": [
      "Target Profile Development",
      "Behavioral Analysis",
      "Background Investigation Techniques",
      "Risk Assessment for Targets",
      "Protective Intelligence"
    ],
    "crime-trend-analysis": [
      "What is Crime Trend Analysis (Coming Soon)",
      "Short vs Long-Term Trends (Coming Soon)",
      "Seasonal and Temporal Trends (Coming Soon)",
      "Statistical Techniques (Coming Soon)",
      "Identifying Emerging Threats (Coming Soon)",
      "Trend Analysis Reporting (Coming Soon)"
    ],
    "analytical-techniques": [
      "Structured Analytical Techniques Overview",
      "Analysis of Competing Hypotheses",
      "Key Assumptions Check",
      "Alternative Futures Analysis",
      "Indicators Development",
      "Devil's Advocacy"
    ],
    "excel-for-analysts": [
      "Data Organization in Excel",
      "Formulas for Intelligence Analysis",
      "Pivot Tables for Pattern Discovery",
      "Data Visualization in Excel",
      "Statistical Functions for Analysis"
    ],
    "data-collection-planning": [
      "Intelligence Requirements Development",
      "Collection Planning Process",
      "Source Evaluation",
      "Collection Management",
      "Gap Analysis"
    ],
    "source-evaluation": [
      "Source Reliability Assessment",
      "Information Credibility Evaluation",
      "Admiralty System",
      "Source Protection Considerations",
      "Deception Detection"
    ],
    "intelligence-ethics": [
      "Ethical Frameworks in Intelligence",
      "Privacy Considerations",
      "Legal Boundaries",
      "Ethical Decision Making",
      "Accountability and Oversight"
    ],
    "cognitive-bias": [
      "Common Cognitive Biases in Analysis",
      "Confirmation Bias",
      "Anchoring Effect",
      "Groupthink",
      "Bias Mitigation Strategies"
    ],
    "intelligence-communication": [
      "Effective Briefing Techniques",
      "Written Communication Skills",
      "Visual Presentation of Intelligence",
      "Tailoring for Different Audiences",
      "Handling Questions and Objections"
    ]
  }
  
  // Return specific topics if available, otherwise return "Lessons in Development"
  if (topicsByPath[pathId]) {
    return topicsByPath[pathId].slice(0, Math.min(count, topicsByPath[pathId].length))
  }
  
  // Return "Lessons in Development" for paths without specific topics
  return ["Lessons in Development"]
}

export default function LearningPathsPage() {
  const [viewMode, setViewMode] = useState<"card" | "list">("card")

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Intelligence Analysis Learning Paths</h1>
        <p className="text-xl text-gray-600">
          Learning paths designed to help you master different aspects of
          intelligence analysis and operations.
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          <Button
            variant={viewMode === "card" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("card")}
            className="rounded-r-none"
            aria-label="Card view"
          >
            <Grid className="h-4 w-4 mr-2" />
            Cards
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="rounded-l-none"
            aria-label="List view"
          >
            <List className="h-4 w-4 mr-2" />
            List
          </Button>
        </div>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <LearningPathCard3D
              key={path.title}
              title={path.title}
              humorousQuote={path.humorousQuote}
              description={path.description}
              image={path.imagePath}
              href={path.path}
              difficulty={
                ["Beginner", "Intermediate", "Advanced"].includes(path.difficulty)
                  ? (path.difficulty as "Beginner" | "Intermediate" | "Advanced")
                  : "Beginner"
              }
              topics={path.topicCount}
              estimatedTime={path.estimatedTime}
              intensity="medium"
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {learningPaths.map((path) => (
            <LearningPathListItem
              key={path.title}
              title={path.title}
              description={path.description}
              humorousQuote={path.humorousQuote}
              href={path.path}
              difficulty={
                ["Beginner", "Intermediate", "Advanced"].includes(path.difficulty)
                  ? (path.difficulty as "Beginner" | "Intermediate" | "Advanced")
                  : "Beginner"
              }
              topics={getMockTopics(path.id, path.topicCount)}
              estimatedTime={path.estimatedTime}
            />
          ))}
        </div>
      )}
    </div>
  )
}
