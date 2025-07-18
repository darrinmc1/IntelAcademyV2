// List of all category IDs
export const allCategories = [
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
  "excel-for-analysts",
]

// Function to preload category thumbnail images
export function preloadCategoryThumbnails() {
  if (typeof window === "undefined") return

  // Create a hidden div to hold preloaded images
  const preloadDiv = document.createElement("div")
  preloadDiv.style.display = "none"
  document.body.appendChild(preloadDiv)

  // Preload each category's background image
  allCategories.forEach((category) => {
    const img = new Image()

    // Get the appropriate image path based on category
    let imagePath = ""

    // Map category to image path
    switch (category) {
      case "foundations":
        imagePath = "/foundations.png"
        break
      case "strategic-intelligence":
        imagePath = "/strategic-intelligence-default.png"
        break
      case "tactical-intelligence":
        imagePath = "/tactical-intelligence-default.png"
        break
      case "operational-intelligence":
        imagePath = "/operational-intelligence-default.png"
        break
      case "osint":
        imagePath = "/osint-default.png"
        break
      case "report-writing":
        imagePath = "/report-writing-document.png"
        break
      case "threat-assessment":
        imagePath = "/threat-assessment.png"
        break
      case "crime-series-analysis":
        imagePath = "/crime-series-analysis.png"
        break
      case "hot-spot-analysis":
        imagePath = "/hot-spot-analysis.png"
        break
      case "network-analysis":
        imagePath = "/network-analysis.png"
        break
      case "target-profiling":
        imagePath = "/target-profiling.png"
        break
      case "crime-trend-analysis":
        imagePath = "/crime-trend-analysis.png"
        break
      case "intelligence-tools":
        imagePath = "/intelligence-tools-default.png"
        break
      case "source-evaluation":
        imagePath = "/source-evaluation-default.png"
        break
      case "digital-intelligence":
        imagePath = "/digital-intelligence-default.png"
        break
      case "geospatial-intelligence":
        imagePath = "/geospatial-intelligence-default.png"
        break
      case "intelligence-ethics":
        imagePath = "/intelligence-ethics-default.png"
        break
      case "cognitive-bias":
        imagePath = "/cognitive-bias-default.png"
        break
      case "financial-intelligence":
        imagePath = "/financial-intelligence-default.png"
        break
      case "intelligence-communication":
        imagePath = "/intelligence-communication-default.png"
        break
      case "analytical-techniques":
        imagePath = "/analytical-techniques-banner.png"
        break
      case "excel-for-analysts":
        imagePath = "/excel-dashboard-insights.png"
        break
      default:
        imagePath = "/intelligence-analysis-workspace.png"
    }

    // Set the source and append to preload div
    img.src = imagePath
    preloadDiv.appendChild(img)
  })

  // Clean up after a delay (5 seconds)
  setTimeout(() => {
    if (document.body.contains(preloadDiv)) {
      document.body.removeChild(preloadDiv)
    }
  }, 5000)
}

// Function to preload a specific category thumbnail
export function preloadCategoryThumbnail(category: string) {
  if (typeof window === "undefined") return

  // Get the appropriate image path based on category
  let imagePath = ""

  // Map category to image path (using the same mapping as above)
  switch (category) {
    case "foundations":
      imagePath = "foundations.png"
      break
    case "strategic-intelligence":
      imagePath = "/strategic-intelligence-default.png"
      break
    case "tactical-intelligence":
      imagePath = "/tactical-intelligence-default.png"
      break
    case "operational-intelligence":
      imagePath = "/operational-intelligence-default.png"
      break
    case "osint":
      imagePath = "/osint-default.png"
      break
    case "report-writing":
      imagePath = "/report-writing-document.png"
      break
    case "threat-assessment":
      imagePath = "/threat-assessment.png"
      break
    case "crime-series-analysis":
      imagePath = "/crime-series-analysis.png"
      break
    case "hot-spot-analysis":
      imagePath = "/hot-spot-analysis.png"
      break
    case "network-analysis":
      imagePath = "/network-analysis.png"
      break
    case "target-profiling":
      imagePath = "/target-profiling.png"
      break
    case "crime-trend-analysis":
      imagePath = "/crime-trend-analysis.png"
      break
    case "intelligence-tools":
      imagePath = "/intelligence-tools-default.png"
      break
    case "source-evaluation":
      imagePath = "/source-evaluation-default.png"
      break
    case "digital-intelligence":
      imagePath = "/digital-intelligence-default.png"
      break
    case "geospatial-intelligence":
      imagePath = "/geospatial-intelligence-default.png"
      break
    case "intelligence-ethics":
      imagePath = "/intelligence-ethics-default.png"
      break
    case "cognitive-bias":
      imagePath = "/cognitive-bias-default.png"
      break
    case "financial-intelligence":
      imagePath = "/financial-intelligence-default.png"
      break
    case "intelligence-communication":
      imagePath = "/intelligence-communication-default.png"
      break
    case "analytical-techniques":
      imagePath = "/analytical-techniques-banner.png"
      break
    case "excel-for-analysts":
      imagePath = "/excel-dashboard-insights.png"
      break
    default:
      imagePath = "/intelligence-analysis-workspace.png"
  }

  // Create and load the image
  const img = new Image()
  img.src = imagePath

  return imagePath
}
