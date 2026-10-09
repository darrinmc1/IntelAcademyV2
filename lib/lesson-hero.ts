import { topics } from "@/data/topics-catalog"

/** Real illustration used when nothing better exists. Never an abstract swirl or gradient. */
export const DEFAULT_LESSON_HERO = "/advanced-analysis.png"

const GENERIC = /swirl|gradient|placeholder|abstract/i

/**
 * Fallback hero for /topics/<slug> when public/<slug>.png is missing:
 * the lesson's own catalog card image if it is real art, else the default illustration.
 */
export function lessonHeroFallback(slug: string | undefined): string {
  if (!slug) return DEFAULT_LESSON_HERO
  const entry = (topics as Array<{ href: string; image?: string }>).find((t) => t.href === `/topics/${slug}`)
  const img = entry?.image?.split("?")[0]
  return img && !GENERIC.test(img) ? img : DEFAULT_LESSON_HERO
}
