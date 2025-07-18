import { homepageImages, learningPathImages } from "./image-paths"

// Map of routes to their critical above-fold images
const ABOVE_FOLD_IMAGES: Record<string, string[]> = {
  // Homepage critical images
  "/": [
    "/strategic-insights-overview.png",
    "/operational-insights-overview.png",
    "/command-center-briefing.png",
    "/foundations.png",
    "/strategic-intelligence.png",
    "/tactical-intelligence.png",
  ],

  // Learning paths page
  "/learning-paths": [
    "/learning-path.png",
    "/foundations.png",
    "/strategic-intelligence.png",
    "/tactical-intelligence.png",
    "/operational-intelligence.png",
    "/osint.png",
  ],

  // Strategic intelligence path
  "/learning-paths/strategic-intelligence": [
    "/strategic-intelligence-banner-large.png",
    "/strategic-intelligence-concept.png",
    "/strategic-vs-tactical.png",
    "/strategic-forecasting.png",
  ],

  // Tactical intelligence path
  "/learning-paths/tactical-intelligence": [
    "/tactical-intelligence-banner-large.png",
    "/tactical-intelligence-concept.png",
    "/real-time-osint.png",
    "/situational-awareness.png",
  ],

  // Operational intelligence path
  "/learning-paths/operational-intelligence": [
    "/operational-intelligence-banner-large.png",
    "/operational-intelligence-concept.png",
    "/intelligence-levels-comparison.png",
    "/operational-intelligence-process.png",
  ],

  // OSINT path
  "/learning-paths/osint": [
    "/osint-banner-large.png",
    "/what-is-osint.png",
    "/osint-types-categories.png",
    "/google-dorking.png",
  ],

  // Report writing path
  "/learning-paths/report-writing": [
    "/report-writing-banner-large.png",
    "/intelligence-report-fundamentals.png",
    "/executive-summaries.png",
    "/verbal-briefing-techniques.png",
  ],

  // Foundations path
  "/learning-paths/foundations": [
    "/foundations-intelligence-banner-large.png",
    "/what-is-intelligence.png",
    "/intelligence-cycle.png",
    "/intelligence-types.png",
  ],

  // Forum page
  "/forum": ["/forum-preview-banner.png", "/online-forum-threads.png", "/collaborative-intel-review.png"],

  // About page
  "/about": ["/confident-businessman.png", "/confident-professional-woman.png", "/diverse-professional-headshots.png"],
}

/**
 * Returns the critical above-fold images that should be preloaded for a specific route
 * @param route The current route path
 * @returns Array of image URLs to preload
 */
export function getAboveFoldImagesForRoute(route: string): string[] {
  // Exact route match
  if (route in ABOVE_FOLD_IMAGES) {
    return ABOVE_FOLD_IMAGES[route]
  }

  // Check for partial matches (for nested routes)
  for (const [path, images] of Object.entries(ABOVE_FOLD_IMAGES)) {
    if (route.startsWith(path) && path !== "/") {
      return images
    }
  }

  // Learning paths pattern matching
  if (route.includes("/learning-paths/")) {
    return learningPathImages.slice(0, 4) // First 4 learning path images
  }

  // Topics pattern matching
  if (route.includes("/topics/")) {
    // For topic pages, return some general images
    return [
      "/foundational-intelligence-pyramid.png",
      "/information-network.png",
      "/digital-investigation-interface.png",
    ]
  }

  // Default - return homepage images as fallback
  return homepageImages.slice(0, 3)
}
