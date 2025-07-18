// This utility generates default images for categories using the placeholder API

export function generateDefaultCategoryImage(category: string, width = 600, height = 400): string {
  // Clean the category name for use in the URL
  const cleanCategory = encodeURIComponent(category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()))

  // Generate a descriptive query for the placeholder
  const query = `${cleanCategory} Intelligence Category`

  // Return the placeholder URL
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(query)}`
}

// Generate default images for all main categories
export function generateAllDefaultImages(): Record<string, string> {
  const categories = [
    "foundations",
    "strategic-intelligence",
    "tactical-intelligence",
    "operational-intelligence",
    "osint",
    "report-writing",
    "threat-assessment",
    "crime-series-analysis",
    "hot-spot-analysis",
    "network-analysis",
    "target-profiling",
    "crime-trend-analysis",
    "intelligence-tools",
    "source-evaluation",
    "digital-intelligence",
    "geospatial-intelligence",
    "intelligence-ethics",
    "cognitive-bias",
    "financial-intelligence",
    "intelligence-communication",
    "analytical-techniques",
  ]

  const imageMap: Record<string, string> = {}

  categories.forEach((category) => {
    imageMap[category] = generateDefaultCategoryImage(category)
  })

  return imageMap
}
