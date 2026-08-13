import { topics, type CatalogTopic } from "@/data/topics-catalog"

export type CiteableLesson = {
  title: string
  href: string
  category: string
  keywords: string[]
  methodRole?: string
}

/**
 * Core academy-method lessons that exist as real topic pages.
 * These are the briefing / reporting / analysis spine the tool must cite.
 */
const METHOD_LESSONS: CiteableLesson[] = [
  {
    title: "Intelligence Report Fundamentals",
    href: "/topics/intelligence-report-fundamentals",
    category: "Reporting",
    keywords: ["report", "structure", "judgment", "sourcing", "product"],
    methodRole: "Standard report structure and analytical judgments",
  },
  {
    title: "Intelligence Report Components",
    href: "/topics/intelligence-report-components",
    category: "Reporting",
    keywords: ["executive summary", "key judgments", "background", "analysis", "components"],
    methodRole: "BLUF executive summary, key judgments, background, analysis, recommendations",
  },
  {
    title: "Intelligence Briefings",
    href: "/topics/intelligence-briefings",
    category: "Reporting",
    keywords: ["briefing", "brief", "verbal", "headline", "decision"],
    methodRole: "Lead with the conclusion; what you need to know, why it matters, what next",
  },
  {
    title: "Executive Summaries",
    href: "/topics/executive-summaries",
    category: "Reporting",
    keywords: ["bluf", "executive", "summary", "bottom line"],
    methodRole: "BLUF executive summary as a standalone miniature of the product",
  },
  {
    title: "Estimative Language",
    href: "/topics/estimative-language",
    category: "Analysis",
    keywords: ["confidence", "likely", "probability", "assess", "estimative"],
    methodRole: "Probability language and high / moderate / low confidence",
  },
  {
    title: "Recommendation Framework",
    href: "/topics/recommendation-framework",
    category: "Reporting",
    keywords: ["recommend", "action", "smart", "option", "decision"],
    methodRole: "Actionable recommendations without overstepping the analyst role",
  },
  {
    title: "Analysis of Competing Hypotheses",
    href: "/topics/analysis-competing-hypotheses",
    category: "Analysis",
    keywords: ["hypothesis", "alternative", "ach", "competing", "disprove"],
    methodRole: "Consider alternatives and what would disprove the lead judgment",
  },
  {
    title: "Cognitive Biases in Intelligence",
    href: "/topics/cognitive-biases",
    category: "Analysis",
    keywords: ["bias", "assumption", "anchor", "confirmation"],
    methodRole: "Flag likely biases and unstated assumptions in the dump",
  },
  {
    title: "Evidence-Based Conclusions",
    href: "/topics/evidence-based-conclusions",
    category: "Analysis",
    keywords: ["evidence", "conclusion", "support", "claim"],
    methodRole: "Tie conclusions to evidence present in the dump",
  },
  {
    title: "Good Intelligence Report",
    href: "/topics/good-intelligence-report",
    category: "Reporting",
    keywords: ["quality", "clear", "concise", "actionable"],
    methodRole: "Quality bar for a usable intelligence product",
  },
  {
    title: "Report Writing Pitfalls",
    href: "/topics/report-writing-pitfalls",
    category: "Reporting",
    keywords: ["pitfall", "vague", "weasel", "padding"],
    methodRole: "Avoid teaser summaries and unsupported claims",
  },
  {
    title: "Clear Writing Principles",
    href: "/topics/clear-writing-principles",
    category: "Reporting",
    keywords: ["writing", "clarity", "concise"],
    methodRole: "Plain, decision-ready language",
  },
  {
    title: "Intelligence Cycle",
    href: "/topics/intelligence-cycle",
    category: "Foundations",
    keywords: ["cycle", "collection", "processing", "dissemination"],
    methodRole: "Where this dump sits in the intelligence cycle",
  },
  {
    title: "Collection Planning Process for Intel Analysts",
    href: "/topics/collection-planning-process-for-intel-analysts",
    category: "Collection",
    keywords: ["gap", "requirement", "collection", "source"],
    methodRole: "Intelligence gaps and collection requirements",
  },
]

function keywordsFromTopic(topic: CatalogTopic): string[] {
  const blob = `${topic.title} ${topic.description} ${topic.category}`.toLowerCase()
  return blob
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 3)
}

function catalogToCiteable(topic: CatalogTopic): CiteableLesson {
  return {
    title: topic.title,
    href: topic.href,
    category: topic.category,
    keywords: keywordsFromTopic(topic),
  }
}

const catalogLessons: CiteableLesson[] = topics.map(catalogToCiteable)

const byHref = new Map<string, CiteableLesson>()
for (const lesson of [...catalogLessons, ...METHOD_LESSONS]) {
  const existing = byHref.get(lesson.href)
  if (!existing) {
    byHref.set(lesson.href, lesson)
  } else {
    byHref.set(lesson.href, {
      ...existing,
      ...lesson,
      keywords: Array.from(new Set([...existing.keywords, ...lesson.keywords])),
      methodRole: lesson.methodRole || existing.methodRole,
    })
  }
}

export const citeableLessons: CiteableLesson[] = Array.from(byHref.values())

export const citeableByHref = byHref

const STOP = new Set([
  "this", "that", "with", "from", "have", "been", "were", "they", "them",
  "their", "about", "would", "could", "should", "there", "which", "into",
  "also", "more", "than", "when", "what", "your", "will", "just", "some",
])

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 3 && !STOP.has(w))
}

export function matchLessons(dump: string, limit = 6): CiteableLesson[] {
  const tokens = new Set(tokenize(dump))
  const scored = citeableLessons
    .map((lesson) => {
      let score = 0
      for (const kw of lesson.keywords) {
        if (tokens.has(kw) || dump.toLowerCase().includes(kw)) score += kw.length > 6 ? 2 : 1
      }
      if (lesson.methodRole) score += 0.25
      return { lesson, score }
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)

  const picked: CiteableLesson[] = []
  const seen = new Set<string>()

  // Always ground the brief in the method spine.
  for (const href of [
    "/topics/intelligence-report-components",
    "/topics/intelligence-briefings",
    "/topics/estimative-language",
  ]) {
    const lesson = byHref.get(href)
    if (lesson && !seen.has(lesson.href)) {
      picked.push(lesson)
      seen.add(lesson.href)
    }
  }

  for (const row of scored) {
    if (picked.length >= limit) break
    if (seen.has(row.lesson.href)) continue
    picked.push(row.lesson)
    seen.add(row.lesson.href)
  }

  return picked.slice(0, limit)
}

export function catalogForPrompt(lessons: CiteableLesson[]): string {
  return lessons
    .map((l) => `- ${l.title} | ${l.href}${l.methodRole ? ` | ${l.methodRole}` : ""}`)
    .join("\n")
}
