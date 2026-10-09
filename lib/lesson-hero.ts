import { topics } from "@/data/topics-catalog"

/** Real illustration used when nothing better exists. Never an abstract swirl or gradient. */
export const DEFAULT_LESSON_HERO = "/advanced-analysis.png"

const GENERIC = /swirl|gradient|placeholder|abstract/i

/** Lessons whose hero is a compressed WebP at public/<slug>.webp (older lessons use public/<slug>.png). */
const WEBP_HEROES = new Set<string>([
  "advanced-crime-series-analysis-predictive-modeling-resource-allocation",
  "ai-prompt-injection-defense",
  "analytical-techniques-for-intel-analysts",
  "behavioral-assessment",
  "collection-planning-process-for-intel-analysts",
  "cryptocurrency-tracing-for-analysts",
  "defining-intelligence",
  "evaluating-collection-plans",
  "financial-network-mapping",
  "intelligence-gap-analysis",
  "intelligence-processing-transforming-raw-data-into-actionable-insights",
  "introduction-to-link-analysis",
  "learning-paths",
  "long-term-threats",
  "matching-sources-to-requirements",
  "mitigation-strategies",
  "mo-evolution",
  "modus-operandi-analysis-techniques",
  "money-laundering-stages",
  "predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac",
  "repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders",
  "risk-factor-indicators-for-intelligence-analysis",
  "sanctions-counter-terrorist-financing",
  "series-pattern-detection-statistical-analytical-methods-crime-series",
  "shell-companies-beneficial-ownership",
  "strategic-intelligence-products-bridging-the-gap-between-information-and-action",
  "strategic-vs-tactical-analysts",
  "suspicious-activity-reports",
  "target-profiling-developing-profiles-of-high-value-targets",
  "threat-assessment-methodologies",
  "threat-prioritization",
  "trade-based-money-laundering",
  "what-is-tactical-intelligence",
  "writing-collection-tasks",
])

function catalogImage(slug: string): string | undefined {
  const entry = (topics as Array<{ href: string; image?: string }>).find((t) => t.href === `/topics/${slug}`)
  return entry?.image?.split("?")[0]
}

/**
 * Hero for /topics/<slug>: the WebP hero if the lesson has one, else a slug-specific
 * catalog image (what the weekly workflow writes), else the legacy public/<slug>.png.
 */
export function lessonHeroSrc(slug: string | undefined): string {
  if (!slug) return DEFAULT_LESSON_HERO
  if (WEBP_HEROES.has(slug)) return `/${slug}.webp`
  const img = catalogImage(slug)
  if (img && img.startsWith(`/${slug}.`)) return img
  return `/${slug}.png`
}

/**
 * Fallback hero for /topics/<slug> when the hero image is missing:
 * the lesson's own catalog card image if it is real art, else the default illustration.
 */
export function lessonHeroFallback(slug: string | undefined): string {
  if (!slug) return DEFAULT_LESSON_HERO
  const img = catalogImage(slug)
  return img && !GENERIC.test(img) ? img : DEFAULT_LESSON_HERO
}
