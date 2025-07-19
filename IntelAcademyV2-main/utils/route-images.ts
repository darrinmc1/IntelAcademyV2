import {
  homepageImages,
  learningPathImages,
  strategicIntelligenceImages,
  tacticalIntelligenceImages,
  operationalIntelligenceImages,
  osintImages,
  foundationsImages,
  reportWritingImages,
  threatAssessmentImages,
  crimeSeriesAnalysisImages,
  hotSpotAnalysisImages,
  networkAnalysisImages,
  targetProfilingImages,
  crimeTrendAnalysisImages,
} from "./image-paths"

/**
 * Returns the images that should be preloaded for a specific route
 * @param route The route path
 * @returns Array of image URLs to preload
 */
export function getImagesForRoute(route: string): string[] {
  // Homepage
  if (route === "/" || route === "") {
    return homepageImages.slice(0, 5) // Just preload the first few
  }

  // Learning paths index
  if (route === "/learning-paths") {
    return learningPathImages.slice(0, 5)
  }

  // Specific learning paths
  if (route.includes("/learning-paths/")) {
    if (route.includes("strategic-intelligence")) {
      return strategicIntelligenceImages
    } else if (route.includes("tactical-intelligence")) {
      return tacticalIntelligenceImages
    } else if (route.includes("operational-intelligence")) {
      return operationalIntelligenceImages
    } else if (route.includes("osint")) {
      return osintImages
    } else if (route.includes("foundations")) {
      return foundationsImages
    } else if (route.includes("report-writing")) {
      return reportWritingImages
    } else if (route.includes("threat-assessment")) {
      return threatAssessmentImages
    } else if (route.includes("crime-series-analysis")) {
      return crimeSeriesAnalysisImages
    } else if (route.includes("hot-spot-analysis")) {
      return hotSpotAnalysisImages
    } else if (route.includes("network-analysis")) {
      return networkAnalysisImages
    } else if (route.includes("target-profiling")) {
      return targetProfilingImages
    } else if (route.includes("crime-trend-analysis")) {
      return crimeTrendAnalysisImages
    }
  }

  // Topics pages
  if (route.includes("/topics/")) {
    if (route.includes("what-is-intelligence")) {
      return foundationsImages
    } else if (route.includes("what-is-strategic-intelligence")) {
      return strategicIntelligenceImages
    } else if (route.includes("what-is-operational-intelligence")) {
      return operationalIntelligenceImages
    }
  }

  // Default - return empty array if no specific images
  return []
}
