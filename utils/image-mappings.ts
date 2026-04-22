// Static image mappings for learning paths
export const learningPathImageMap: Record<string, string> = {
  foundations: "/learning-path-thumbnails/foundations-thumb.png",
  "strategic-intelligence": "/learning-path-thumbnails/strategic-intelligence-thumb.png",
  "tactical-intelligence": "/learning-path-thumbnails/tactical-intelligence-thumb.png",
  "operational-intelligence": "/learning-path-thumbnails/operational-intelligence-thumb.png",
  osint: "/learning-path-thumbnails/osint-thumb.png",
  "report-writing": "/learning-path-thumbnails/report-writing-thumb.png",
  "threat-assessment": "/learning-path-thumbnails/threat-assessment-thumb.png",
  "crime-series-analysis": "/learning-path-thumbnails/crime-series-analysis-thumb.png",
  "hot-spot-analysis": "/learning-path-thumbnails/hot-spot-analysis-thumb.png",
  "network-analysis": "/learning-path-thumbnails/network-analysis-thumb.png",
  "target-profiling": "/learning-path-thumbnails/target-profiling-thumb.png",
  "crime-trend-analysis": "/learning-path-thumbnails/crime-trend-analysis-thumb.png",
  "intelligence-tools": "/learning-path-thumbnails/intelligence-tools-thumb.png",
  "source-evaluation": "/learning-path-thumbnails/source-evaluation-thumb.png",
  "digital-intelligence": "/learning-path-thumbnails/digital-intelligence-thumb.png",
  "geospatial-intelligence": "/learning-path-thumbnails/geospatial-intelligence-thumb.png",
  "intelligence-ethics": "/learning-path-thumbnails/intelligence-ethics-thumb.png",
  "cognitive-bias": "/learning-path-thumbnails/cognitive-bias-thumb.png",
  "financial-intelligence": "/learning-path-thumbnails/financial-intelligence-thumb.png",
  "intelligence-communication": "/learning-path-thumbnails/intelligence-communication-thumb.png",
}

// Static image mappings for forum categories.
// Forum is COMING SOON — all entries point to the branded placeholder until launch.
// When the forum ships, replace these with real per-category images.
export const forumCategoryImageMap: Record<string, string> = {
  "general-discussion": "/placeholder.svg",
  "intelligence-analysis": "/placeholder.svg",
  "osint-techniques": "/placeholder.svg",
  "tactical-operations": "/placeholder.svg",
  "report-writing": "/placeholder.svg",
  "threat-assessment": "/placeholder.svg",
  "crime-analysis": "/placeholder.svg",
  "geospatial-intelligence": "/placeholder.svg",
  "network-analysis": "/placeholder.svg",
  "target-profiling": "/placeholder.svg",
  "trend-analysis": "/placeholder.svg",
  "operational-intelligence": "/placeholder.svg",
  "intelligence-tools-discussion": "/placeholder.svg",
  "source-evaluation-discussion": "/placeholder.svg",
  "digital-intelligence-discussion": "/placeholder.svg",
  "geospatial-intelligence-discussion": "/placeholder.svg",
  "intelligence-ethics-discussion": "/placeholder.svg",
  "cognitive-bias-discussion": "/placeholder.svg",
  "financial-intelligence-discussion": "/placeholder.svg",
  "intelligence-communication-discussion": "/placeholder.svg",
}

// Default images for each category with actual image URLs
export const defaultCategoryImages: Record<string, string> = {
  foundations: "/foundations.png",
  "strategic-intelligence": "/strategic.png",
  "tactical-intelligence": "/tactical.png",
  "operational-intelligence": "/operational.png",
  osint: "/osint.png",
  "report-writing": "/report.png",
  "threat-assessment": "/threat.png",
  "crime-series-analysis": "/crimeseries.png",
  "hot-spot-analysis": "/hotspot.png",
  "network-analysis": "/network.png",
  "target-profiling": "/target.png",
  "crime-trend-analysis": "/crimetrend.png",
  "intelligence-tools": "/tools.png",
  "source-evaluation": "/source.png",
  "digital-intelligence": "/digital.png",
  "geospatial-intelligence": "/geospatial.png",
  "intelligence-ethics": "/ethics.png",
  "cognitive-bias": "/cognitive-bias.png",
  "financial-intelligence": "/financial.png",
  "intelligence-communication": "/communication.png",
}

// Critical images that should be preloaded first.
// Simplified to use the non-numbered default variants (the `-1` versions were legacy
// duplicates used only by the coming-soon forum).
export const criticalImages = [
  "/strategic.png",
  "/tactical.png",
  "/operational.png",
  "/osint.png",
  "/foundations.png",
]

// Homepage images — shown above the fold on the landing page.
export const homepageImages = [
  "/strategic.png",
  "/tactical.png",
  "/operational.png",
  "/osint.png",
  "/strategic-insights-overview.png",
]
