/**
 * Official catalog of the 24 learning-path intro videos.
 *
 * These are PRIVATE Vercel Blob objects — not public YouTube embeds.
 * Public OSINT clips stay in `data/lesson-videos.ts`. Paid per-lesson
 * mp4s stay in `data/lesson-blob-videos.ts` under videos/lessons/.
 * Do not upload lesson files into this path-intro catalog.
 *
 * Filename convention (do not vary):
 *   videos/paths/{slug}-path-intro-75s-16x9.mp4
 *
 * `uploaded` is derived at runtime from the Blob list, never stored here.
 */

export const PATH_INTRO_BLOB_PREFIX = "videos/paths/"
export const PATH_INTRO_FILENAME_SUFFIX = "-path-intro-75s-16x9.mp4"
export const PATH_INTRO_DURATION_SECONDS = 75

export type PathIntroSlug =
  | "foundations"
  | "strategic-intelligence"
  | "osint"
  | "report-writing"
  | "threat-assessment"
  | "analyst-notebook"
  | "tactical-intelligence"
  | "operational-intelligence"
  | "crime-series-analysis"
  | "hot-spot-analysis"
  | "network-analysis"
  | "target-profiling"
  | "crime-trend-analysis"
  | "analytical-techniques"
  | "excel-for-analysts"
  | "data-collection-planning"
  | "intelligence-tools"
  | "source-evaluation"
  | "digital-intelligence"
  | "geospatial-intelligence"
  | "intelligence-ethics"
  | "cognitive-bias"
  | "financial-intelligence"
  | "intelligence-communication"

export type PathIntroCatalogEntry = {
  slug: PathIntroSlug
  title: string
  filename: string
  pathname: string
  durationSeconds: number
}

export type PathIntroCatalogStatus = PathIntroCatalogEntry & {
  uploaded: boolean
}

/** Alias slugs used by older / duplicate path routes. */
const SLUG_ALIASES: Record<string, PathIntroSlug> = {
  "analytic-techniques": "analytical-techniques",
  "data-collection-plans": "data-collection-planning",
}

export function pathIntroFilename(slug: PathIntroSlug): string {
  return `${slug}${PATH_INTRO_FILENAME_SUFFIX}`
}

export function pathIntroPathname(slug: PathIntroSlug): string {
  return `${PATH_INTRO_BLOB_PREFIX}${pathIntroFilename(slug)}`
}

/** Site order — keep in sync with the live learning-path list. */
export const PATH_INTRO_SLUGS: readonly PathIntroSlug[] = [
  "foundations",
  "strategic-intelligence",
  "osint",
  "report-writing",
  "threat-assessment",
  "analyst-notebook",
  "tactical-intelligence",
  "operational-intelligence",
  "crime-series-analysis",
  "hot-spot-analysis",
  "network-analysis",
  "target-profiling",
  "crime-trend-analysis",
  "analytical-techniques",
  "excel-for-analysts",
  "data-collection-planning",
  "intelligence-tools",
  "source-evaluation",
  "digital-intelligence",
  "geospatial-intelligence",
  "intelligence-ethics",
  "cognitive-bias",
  "financial-intelligence",
  "intelligence-communication",
] as const

const PATH_INTRO_TITLES: Record<PathIntroSlug, string> = {
  foundations: "Foundations of Intelligence",
  "strategic-intelligence": "Strategic Intelligence",
  osint: "Open Source Intelligence (OSINT)",
  "report-writing": "Intelligence Report Writing",
  "threat-assessment": "Threat Assessment",
  "analyst-notebook": "IBM Analyst Notebook",
  "tactical-intelligence": "Tactical Intelligence",
  "operational-intelligence": "Operational Intelligence",
  "crime-series-analysis": "Crime Series Analysis",
  "hot-spot-analysis": "Hot Spot Analysis",
  "network-analysis": "Network Analysis",
  "target-profiling": "Target Profiling",
  "crime-trend-analysis": "Crime Trend Analysis",
  "analytical-techniques": "Analytical Techniques",
  "excel-for-analysts": "Excel for Intelligence Analysts",
  "data-collection-planning": "Data Collection Planning",
  "intelligence-tools": "Intelligence Tools & Technology",
  "source-evaluation": "Source Evaluation & Validation",
  "digital-intelligence": "Digital Intelligence & Forensics",
  "geospatial-intelligence": "Geospatial Intelligence",
  "intelligence-ethics": "Intelligence Ethics & Legal Framework",
  "cognitive-bias": "Cognitive Bias in Intelligence Analysis",
  "financial-intelligence": "Financial Intelligence Analysis",
  "intelligence-communication": "Intelligence Communication & Briefing",
}

export const PATH_INTRO_CATALOG: PathIntroCatalogEntry[] = PATH_INTRO_SLUGS.map((slug) => ({
  slug,
  title: PATH_INTRO_TITLES[slug],
  filename: pathIntroFilename(slug),
  pathname: pathIntroPathname(slug),
  durationSeconds: PATH_INTRO_DURATION_SECONDS,
}))

export function isPathIntroSlug(value: string): value is PathIntroSlug {
  return (PATH_INTRO_SLUGS as readonly string[]).includes(value)
}

/**
 * Resolve a URL slug (including legacy aliases) to an official catalog slug.
 * Returns null for unknown paths — callers should 404.
 */
export function resolvePathIntroSlug(raw: string | null | undefined): PathIntroSlug | null {
  if (!raw) return null
  if (isPathIntroSlug(raw)) return raw
  return SLUG_ALIASES[raw] ?? null
}

export function getPathIntroEntry(slug: string): PathIntroCatalogEntry | null {
  const official = resolvePathIntroSlug(slug)
  if (!official) return null
  return PATH_INTRO_CATALOG.find((entry) => entry.slug === official) ?? null
}

export function isOfficialPathIntroPathname(pathname: string): boolean {
  return PATH_INTRO_CATALOG.some((entry) => entry.pathname === pathname)
}
