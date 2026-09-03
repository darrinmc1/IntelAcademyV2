/**
 * Official catalog of paid lesson videos (private Vercel Blob).
 *
 * These are NOT public YouTube clips (`data/lesson-videos.ts`)
 * and NOT path intros (`data/path-intro-videos.ts`). Path-intro
 * admin is the wrong slot — lesson mp4s live under this prefix.
 *
 * Filename convention (do not vary):
 *   videos/lessons/{slug}-lesson-16x9.mp4
 *
 * First example:
 *   videos/lessons/what-is-intelligence-lesson-16x9.mp4
 *
 * `uploaded` is derived at runtime from the Blob list, never stored here.
 * Do not commit lesson mp4s to git.
 */

import { topics } from "@/data/topics-catalog"

export const LESSON_VIDEO_BLOB_PREFIX = "videos/lessons/"
export const LESSON_VIDEO_FILENAME_SUFFIX = "-lesson-16x9.mp4"

export type LessonVideoSlug = (typeof LESSON_VIDEO_SLUGS)[number]

export type LessonVideoCatalogEntry = {
  slug: LessonVideoSlug
  title: string
  filename: string
  pathname: string
}

export type LessonVideoCatalogStatus = LessonVideoCatalogEntry & {
  uploaded: boolean
}

/**
 * Real topic lesson slugs. Utility / demo pages stay out:
 * all-topics, enhanced-3d, learning-paths, sample-topic, [slug].
 * First entry is the first upload Darrin will drop.
 */
export const LESSON_VIDEO_SLUGS = [
  "what-is-intelligence",
  "intelligence-cycle",
  "intelligence-types",
  "intelligence-vs-information",
  "intelligence-decision-making",
  "advanced-crime-series-analysis-predictive-modeling-resource-allocation",
  "ai-prompt-injection-defense",
  "analysis-competing-hypotheses",
  "analysts-notebook-fundamentals",
  "analytical-techniques-for-intel-analysts",
  "clear-writing-principles",
  "cognitive-biases",
  "collection-planning-process-for-intel-analysts",
  "conclusion-development",
  "crime-linkage-techniques",
  "crime-trend-analysis",
  "data-presentation",
  "data-visualization-intelligence",
  "deep-web-research-for-intel-analysts",
  "digital-evidence-documentation",
  "entity-relationship-charts",
  "estimative-language",
  "ethical-decision-making",
  "evidence-based-conclusions",
  "excel-fundamentals-for-analysts",
  "executive-summaries-mastery",
  "finint-basics",
  "geoint-fundamentals",
  "good-intelligence-report",
  "google-dorking",
  "hot-spot-analysis",
  "humint-fundamentals",
  "intelligence-briefings",
  "intelligence-direction",
  "intelligence-ethics",
  "intelligence-failures",
  "intelligence-oversight",
  "intelligence-processing-transforming-raw-data-into-actionable-insights",
  "intelligence-report-components",
  "intelligence-report-examples",
  "intelligence-report-fundamentals",
  "intelligence-report-types",
  "intelligence-requirements",
  "introduction-to-link-analysis",
  "legal-frameworks",
  "main-body-organization",
  "masint-explained",
  "modus-operandi-analysis-techniques",
  "multi-source-integration",
  "network-analysis",
  "notebook-creating-chart",
  "notebook-example-materials",
  "notebook-identities-labels",
  "notebook-importing-data",
  "notebook-social-network-analysis",
  "operational-reports",
  "osint-techniques",
  "osint-workflow",
  "predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac",
  "privacy-civil-liberties",
  "real-time-osint",
  "recommendation-framework",
  "repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders",
  "report-writing-pitfalls",
  "risk-factor-indicators-for-intelligence-analysis",
  "series-pattern-detection-statistical-analytical-methods-crime-series",
  "sigint-basics",
  "situational-awareness",
  "socmint-techniques",
  "specialized-intelligence-products",
  "strategic-forecasting",
  "strategic-intelligence-concept",
  "strategic-intelligence-expanding-pestle-analysis-dynamic-world",
  "strategic-intelligence-products-bridging-the-gap-between-information-and-action",
  "strategic-reports",
  "strategic-vs-tactical-analysts",
  "tactical-reports",
  "target-profiling",
  "target-profiling-developing-profiles-of-high-value-targets",
  "threat-assessment-methodologies",
  "threat-assessment-models",
  "threat-monitoring",
  "timeline-visualization",
  "verbal-briefing-techniques",
  "visual-intelligence-reporting",
  "what-is-crime-series-analysis",
  "what-is-osint",
  "what-is-tactical-intelligence",
  "what-is-threat-assessment",
] as const

const CATALOG_TITLES: Record<string, string> = Object.fromEntries(
  topics.map((topic) => [topic.href.replace("/topics/", ""), topic.title])
)

export function lessonVideoTitle(slug: string): string {
  if (CATALOG_TITLES[slug]) return CATALOG_TITLES[slug]
  return slug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export function lessonVideoFilename(slug: LessonVideoSlug): string {
  return `${slug}${LESSON_VIDEO_FILENAME_SUFFIX}`
}

export function lessonVideoPathname(slug: LessonVideoSlug): string {
  return `${LESSON_VIDEO_BLOB_PREFIX}${lessonVideoFilename(slug)}`
}

export const LESSON_VIDEO_CATALOG: LessonVideoCatalogEntry[] = LESSON_VIDEO_SLUGS.map((slug) => ({
  slug,
  title: lessonVideoTitle(slug),
  filename: lessonVideoFilename(slug),
  pathname: lessonVideoPathname(slug),
}))

export function isLessonVideoSlug(value: string): value is LessonVideoSlug {
  return (LESSON_VIDEO_SLUGS as readonly string[]).includes(value)
}

export function resolveLessonVideoSlug(raw: string | null | undefined): LessonVideoSlug | null {
  if (!raw) return null
  if (isLessonVideoSlug(raw)) return raw
  return null
}

export function getLessonVideoEntry(slug: string): LessonVideoCatalogEntry | null {
  const official = resolveLessonVideoSlug(slug)
  if (!official) return null
  return LESSON_VIDEO_CATALOG.find((entry) => entry.slug === official) ?? null
}

export function isOfficialLessonVideoPathname(pathname: string): boolean {
  return LESSON_VIDEO_CATALOG.some((entry) => entry.pathname === pathname)
}
