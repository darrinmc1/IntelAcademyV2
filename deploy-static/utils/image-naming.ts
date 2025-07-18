/**
 * Utility functions for consistent image naming
 */

// Map of topic slugs to their base image names
export const topicImageBaseNames: Record<string, string> = {
  "strategic-intelligence": "strategic",
  "tactical-intelligence": "tactical",
  "operational-intelligence": "operational",
  osint: "osint",
  "report-writing": "report",
  "threat-assessment": "threat",
  "crime-series-analysis": "crimeseries",
  "hot-spot-analysis": "hotspot",
  "network-analysis": "network",
  "target-profiling": "target",
  "crime-trend-analysis": "crimetrend",
  "intelligence-tools": "tools",
  "source-evaluation": "source",
  "digital-intelligence": "digital",
  "geospatial-intelligence": "geospatial",
  "intelligence-ethics": "ethics",
  "cognitive-bias": "cognitivebias",
  "financial-intelligence": "financial",
  "intelligence-communication": "communication",
  foundations: "foundations",
  "analyst-notebook": "notebook",
  "excel-for-analysts": "excel",
  "analytical-techniques": "analytical",
  "data-collection-plans": "datacollection",
  // Add default mappings for common categories
  "core-intelligence": "core-intelligence",
  "intelligence-methods": "intelligence-methods",
  "analysis-skills": "analysis-skills",
}

// Category name to image path mapping to ensure we always have valid paths
export const categoryImageMapping: Record<string, string> = {
  foundations: "/foundations.png",
  "strategic-intelligence": "/strategic-intelligence.png",
  "tactical-intelligence": "/tactical-intelligence.png",
  "operational-intelligence": "/operational-intelligence.png",
  osint: "/osint.png",
  "digital-intelligence": "/digital-intelligence.png",
  "geospatial-intelligence": "/geospatial-intelligence.png",
  "financial-intelligence": "/financial-intelligence.png",
  "intelligence-tools": "/intelligence-tools.png",
  "source-evaluation": "/source-evaluation.png",
  "intelligence-ethics": "/intelligence-ethics.png",
  "cognitive-bias": "/cognitive-bias.png",
  "report-writing": "/report-writing.png",
  "intelligence-communication": "/intelligence-communication.png",
  "excel-for-analysts": "/excel-for-analysts.png",
  "analytical-techniques": "/analytical-techniques.png",
  "data-collection-planning": "/data-collection-planning.png",
  "threat-assessment": "/threat-assessment.png",
  "crime-series-analysis": "/crime-series-analysis.png",
  "hot-spot-analysis": "/hot-spot-analysis.png",
  "network-analysis": "/network-analysis.png",
  "target-profiling": "/target-profiling.png",
  "crime-trend-analysis": "/crime-trend-analysis.png",
  // Add default paths for common categories
  "core-intelligence": "/core-intelligence.png",
  "intelligence-methods": "/intelligence-methods.png",
  "analysis-skills": "/analysis-skills.png",
}

// Default fallback image for categories
const DEFAULT_CATEGORY_IMAGE = "/placeholder-9o5le.png"

// Function to get image path with the new naming convention
export function getTopicImagePath(
  topicSlug = "",
  index = 1,
  size: "thumb" | "banner" | "main" | "header" = "main",
  fileType: "png" | "jpg" = "png",
): string {
  if (!topicSlug) {
    console.warn("getTopicImagePath: No topicSlug provided, using default")
    return `/placeholder.svg?height=400&width=600&query=Topic%20Image`
  }

  const baseName = topicImageBaseNames[topicSlug] || topicSlug.replace(/-/g, "")

  // For thumbnails, use a different pattern
  if (size === "thumb") {
    return `/${baseName}${index}-thumb.${fileType}`
  }

  // For banners, use a different pattern
  if (size === "banner") {
    return `/${baseName}${index}-banner.${fileType}`
  }

  // For headers, use a different pattern
  if (size === "header") {
    return `/${baseName}${index}-header.${fileType}`
  }

  // Default pattern for main images
  return `/${baseName}${index}.${fileType}`
}

// Function to get the path to a category image
export function getCategoryImagePath(category?: string): string {
  if (!category) {
    console.warn("getCategoryImagePath: No category provided, using default image")
    return DEFAULT_CATEGORY_IMAGE
  }

  // First check if we have a direct mapping for this category
  const normalizedCategory = category.toLowerCase().trim()

  // Check direct mappings first
  if (categoryImageMapping[normalizedCategory]) {
    return categoryImageMapping[normalizedCategory]
  }

  // Convert category to kebab-case as a fallback
  const kebabCategory = normalizedCategory.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

  // Check if we have a mapping for the kebab case version
  if (categoryImageMapping[kebabCategory]) {
    return categoryImageMapping[kebabCategory]
  }

  // Final fallback - construct the path
  return `/${kebabCategory}.png`
}

// Function to get banner image path
export function getBannerImagePath(topicSlug = "", large = false, fileType: "png" | "jpg" = "png"): string {
  if (!topicSlug) {
    console.warn("getBannerImagePath: No topicSlug provided, using default")
    return `/placeholder.svg?height=${large ? 600 : 400}&width=${large ? 1200 : 800}&query=Banner%20Image`
  }

  const baseName = topicImageBaseNames[topicSlug] || topicSlug.replace(/-/g, "")
  return large ? `/${baseName}-banner-large.${fileType}` : `/${baseName}-banner.${fileType}`
}