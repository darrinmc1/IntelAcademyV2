/**
 * Read times are computed from the words a reader actually gets, not typed by hand.
 * 230 words per minute, rounded up. Keep this in sync with
 * scripts/lesson-read-times.mjs and the n8n weekly lesson workflow.
 */
import lessonReadTimes from "@/data/lesson-read-times.json"

export const WORDS_PER_MINUTE = 230
export const MIN_LESSON_WORDS = 1150 // a 5-minute read

export function countWords(markdown: string): number {
  const text = String(markdown || "")
    .replace(/```[a-zA-Z]*\n?/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`|~]+/g, " ")
  const words = text.match(/[A-Za-z0-9\u00C0-\u024F][A-Za-z0-9\u00C0-\u024F'\u2019.]*/g)
  return words ? words.length : 0
}

export function readMinutes(words: number): number {
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

type ReadTimeEntry = { words: number; minutes: number }
const READ_TIMES = lessonReadTimes as Record<string, ReadTimeEntry>

/** Computed read time for a /topics/<slug> lesson, or undefined if it is not a lesson page. */
export function lessonReadMinutes(slug: string | undefined | null): number | undefined {
  if (!slug) return undefined
  return READ_TIMES[slug]?.minutes
}

export function lessonSlugFromHref(href: string | undefined | null): string | undefined {
  const m = String(href || "").match(/^\/topics\/([^/?#]+)/)
  return m ? m[1] : undefined
}
