import { NextRequest, NextResponse } from "next/server"

// Mock data for topics and learning paths
const topics = [
  {
    title: "What is Intelligence?",
    description: "Understanding the fundamental concepts of intelligence",
    category: "foundations",
    path: "/topics/what-is-intelligence",
    imagePath: "/what-is-intelligence-thumb.png",
  },
  {
    title: "Information vs. Intelligence: Key Differences",
    description: "Understanding the distinction between raw information and processed intelligence",
    category: "foundations",
    path: "/topics/information-vs-intelligence",
    imagePath: "/information-vs-intelligence-thumb.png",
  },
  {
    title: "The Purpose of Intelligence in Decision-Making",
    description: "How intelligence supports effective decision-making processes",
    category: "foundations",
    path: "/topics/intelligence-decision-making",
    imagePath: "/intelligence-decision-making-thumb.png",
  },
  {
    title: "Overview of the Intelligence Cycle",
    description: "Understanding the process that drives intelligence operations",
    category: "foundations",
    path: "/topics/intelligence-cycle-overview",
    imagePath: "/intelligence-cycle-overview-thumb.png",
  },
  {
    title: "Direction: Setting Intelligence Requirements",
    description: "How to establish clear intelligence requirements",
    category: "foundations",
    path: "/topics/intelligence-direction",
    imagePath: "/intelligence-direction-thumb.png",
  },
  {
    title: "Collection: Gathering Information",
    description: "Methods and approaches for information collection",
    category: "foundations",
    path: "/topics/collection-methods",
    imagePath: "/collection-methods-thumb.png",
  },
  {
    title: "Processing: Organizing Raw Data",
    description: "Techniques for processing collected intelligence data",
    category: "foundations",
    path: "/topics/intelligence-processing",
    imagePath: "/intelligence-processing-thumb.png",
  },
  {
    title: "Analysis: Finding Meaning",
    description: "Analytical methods for deriving insights from intelligence",
    category: "foundations",
    path: "/topics/intelligence-analysis",
    imagePath: "/intelligence-analysis-thumb.png",
  },
  {
    title: "Dissemination: Delivering Intelligence",
    description: "Best practices for sharing intelligence products",
    category: "foundations",
    path: "/topics/intelligence-dissemination",
    imagePath: "/intelligence-dissemination-thumb.png",
  },
]

const learningPaths = [
  {
    title: "Foundations of Intelligence",
    description: "Core concepts and principles of intelligence analysis",
    category: "learning path",
    path: "/learning-paths/foundations",
    imagePath: "/foundations-banner.png",
  },
  {
    title: "Strategic Intelligence",
    description: "Long-term intelligence for high-level decision making",
    category: "learning path",
    path: "/learning-paths/strategic-intelligence",
    imagePath: "/strategic-intelligence-banner.png",
  },
  {
    title: "Tactical Intelligence",
    description: "Intelligence for immediate operational needs",
    category: "learning path",
    path: "/learning-paths/tactical-intelligence",
    imagePath: "/tactical-intelligence-banner.png",
  },
  {
    title: "Operational Intelligence",
    description: "Intelligence for day-to-day operations",
    category: "learning path",
    path: "/learning-paths/operational-intelligence",
    imagePath: "/operational-intelligence-banner.png",
  },
  {
    title: "OSINT Techniques",
    description: "Open Source Intelligence gathering methods and practices",
    category: "learning path",
    path: "/learning-paths/osint",
    imagePath: "/osint-banner.png",
  },
  {
    title: "Digital Intelligence",
    description: "Intelligence gathering in the digital domain",
    category: "learning path",
    path: "/learning-paths/digital-intelligence",
    imagePath: "/digital-intelligence-banner.png",
  },
  {
    title: "Geospatial Intelligence",
    description: "Geographic and spatial analysis techniques",
    category: "learning path",
    path: "/learning-paths/geospatial-intelligence",
    imagePath: "/geospatial-intelligence-banner.png",
  },
  {
    title: "Financial Intelligence",
    description: "Techniques for financial investigations",
    category: "learning path",
    path: "/learning-paths/financial-intelligence",
    imagePath: "/financial-intelligence-banner.png",
  },
]

// Combine all searchable content
const searchableContent = [...topics, ...learningPaths]

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Invalid search query" },
        { status: 400 }
      )
    }

    const searchTerm = query.toLowerCase().trim()
    
    // Simple search implementation
    const results = searchableContent.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      )
    })

    // Add highlights to show where the match occurred
    const resultsWithHighlights = results.map(item => {
      let highlights = ""
      
      if (item.title.toLowerCase().includes(searchTerm)) {
        highlights = item.title
      } else if (item.description.toLowerCase().includes(searchTerm)) {
        highlights = item.description
      }
      
      return {
        ...item,
        highlights
      }
    })

    return NextResponse.json({
      results: resultsWithHighlights,
      enhancedQuery: null, // No query enhancement in this simple implementation
    })
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { error: "Failed to process search request" },
      { status: 500 }
    )
  }
}