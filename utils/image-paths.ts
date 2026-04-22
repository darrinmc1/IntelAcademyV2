/**
 * This file provides image path utilities for the application
 */

// Learning path thumbnails
export const learningPathImages = [
  "/learning-path-thumbnails/foundations-thumb.png",
  "/learning-path-thumbnails/strategic-intelligence-thumb.png",
  "/learning-path-thumbnails/tactical-intelligence-thumb.png",
  "/learning-path-thumbnails/operational-intelligence-thumb.png",
  "/learning-path-thumbnails/osint-thumb.png",
];

// Homepage images
export const homepageImages = [
  "/strategic-insights-overview.png",
  "/collaborative-intel-review.png",
  ...learningPathImages,
];

// Specific categories images
export const foundationsImages = [
  "/foundations-intelligence-banner-large.png",
  "/learning-path-thumbnails/foundations-thumb.png",
];

export const strategicIntelligenceImages = [
  "/strategic-intelligence-banner.png",
  "/intelligence-images/strategic-intelligence/strategic-intelligence-default.png",
];

export const tacticalIntelligenceImages = [
  "/tactical-intelligence-banner.png",
  "/intelligence-images/tactical-intelligence/tactical-intelligence-default.png",
];

export const operationalIntelligenceImages = [
  "/operational-intelligence-banner.png",
  "/intelligence-images/operational-intelligence/operational-intelligence-default.png",
];

export const osintImages = [
  "/osint-banner.png",
  "/intelligence-images/osint/osint-default.png",
];

export const reportWritingImages = [
  "/report-writing-banner-large.png",
];

export const threatAssessmentImages = [
  "/intelligence-images/threat-assessments/threat-assessments-default.png",
];

export const crimeSeriesAnalysisImages = [
  "/crime-series-analysis.png",
];

export const hotSpotAnalysisImages = [
  "/hot-spot-analysis.png",
];

export const networkAnalysisImages = [
  "/network-analysis.png",
];

export const targetProfilingImages = [
  "/target-profiling.png",
];

export const crimeTrendAnalysisImages = [
  "/crime-trend-analysis.png",
];

// Forum category images - mirrors the imagePath values in data/forum-categories.ts
// so the admin image viewer shows the real images, not broken stubs.
export const forumCategoryImages = [
  "/strategic-intelligence.png",
  "/tactical-intelligence.png",
  "/operational-intelligence.png",
  "/osint.png",
  "/threat-assessment.png",
  "/gears-of-thought.png",
  "/technology-and-tools.png",
  "/career-development-path.png",
  "/geospatial-intelligence.png",
  "/report-writing.png",
  "/crime-trend-analysis.png",
  "/private-sector-intelligence.png",
  "/research-methodologies-concept.png",
];

export function getCategoryImagePath(category: string): string {
  return `/categories/${category}.png`;
}

export function getTopicImagePath(topic: string): string {
  return `/topics/${topic}.png`;
}

export function getLearningPathImagePath(path: string): string {
  return `/learning-paths/${path}.png`;
}

export function getIntelligenceTypeImagePath(type: string): string {
  return `/intelligence-types/${type}.png`;
}