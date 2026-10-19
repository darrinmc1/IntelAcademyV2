import { citeableByHref } from "@/lib/citeable-lessons"

/**
 * Lessons the exercises and The Chief are allowed to point at. Every href
 * here must be a real page under app/topics — lessons.test.ts enforces it,
 * so a renamed lesson breaks the build instead of shipping a dead link.
 */
export const LESSON_TITLES: Record<string, string> = {
  "/topics/evidence-based-conclusions": "Evidence-Based Conclusions",
  "/topics/multi-source-integration": "Multi-Source Integration",
  "/topics/intelligence-vs-information": "Intelligence vs Information",
  "/topics/matching-sources-to-requirements": "Matching Sources to Requirements",
  "/topics/humint-fundamentals": "HUMINT Fundamentals",
  "/topics/osint-techniques": "OSINT Techniques",
  "/topics/intelligence-gap-analysis": "Intelligence Gap Analysis",
  "/topics/collection-planning-process-for-intel-analysts": "Collection Planning Process for Intel Analysts",
  "/topics/intelligence-requirements": "Intelligence Requirements Development",
  "/topics/writing-collection-tasks": "Writing Collection Tasks",
  "/topics/evaluating-collection-plans": "Evaluating Collection Plans",
  "/topics/analysis-competing-hypotheses": "Analysis of Competing Hypotheses",
  "/topics/cognitive-biases": "Cognitive Biases in Intelligence Analysis",
  "/topics/analytical-techniques-for-intel-analysts": "Analytical Techniques for Intelligence Analysts",
  "/topics/estimative-language": "Estimative Language",
  "/topics/executive-summaries-mastery": "Executive Summaries Mastery",
  "/topics/intelligence-briefings": "Intelligence Briefings",
  "/topics/conclusion-development": "Conclusion Development",
  "/topics/intelligence-report-components": "Intelligence Report Components",
  "/topics/indicators-warnings": "Indicators and Warnings in Strategic Analysis",
  "/topics/report-writing-pitfalls": "Report Writing Pitfalls",
  "/topics/intelligence-cycle": "The Intelligence Cycle",
  "/topics/introduction-to-link-analysis": "Introduction to Link Analysis",
  "/topics/crime-linkage-techniques": "Crime Linkage Techniques",
  "/topics/series-pattern-detection-statistical-analytical-methods-crime-series": "Series Pattern Detection",
  "/topics/modus-operandi-analysis-techniques": "Modus Operandi Analysis",
  "/topics/what-is-crime-series-analysis": "What Is Crime Series Analysis?",
  "/topics/trade-based-money-laundering": "Trade-Based Money Laundering",
  "/topics/shell-companies-beneficial-ownership": "Shell Companies and Beneficial Ownership",
  "/topics/suspicious-activity-reports": "Suspicious Activity Reports",
  "/topics/money-laundering-stages": "Money Laundering Stages",
  "/topics/financial-network-mapping": "Financial Network Mapping",
  "/topics/finint-basics": "FININT Basics",
  "/topics/strategic-forecasting": "Strategic Forecasting",
  "/topics/threat-assessment-methodologies": "Threat Assessment Methodologies",
  "/topics/what-is-threat-assessment": "What Is Threat Assessment?",
  "/topics/strategic-risk-assessment-for-analysts": "Strategic Risk Assessment for Analysts",
  "/topics/long-term-threats": "Identifying Long-Term Threats and Opportunities",
}

export type SkillArea = "evaluation" | "gaps" | "hypotheses" | "assessment"

export const SKILL_AREA_LABELS: Record<SkillArea, string> = {
  evaluation: "Evaluating the information",
  gaps: "Identifying intelligence gaps",
  hypotheses: "Developing hypotheses",
  assessment: "Producing the assessment",
}

export type LessonLink = { title: string; href: string; why: string }

const SKILL_LESSONS: Record<SkillArea, Array<{ href: string; why: string }>> = {
  evaluation: [
    { href: "/topics/evidence-based-conclusions", why: "The Admiralty system: grade the source and the information separately." },
    { href: "/topics/multi-source-integration", why: "Corroboration only counts when the sources are independent." },
    { href: "/topics/intelligence-vs-information", why: "Separate what a report says from what it proves." },
  ],
  gaps: [
    { href: "/topics/intelligence-gap-analysis", why: "Turn vague unknowns into specific, answerable gaps." },
    { href: "/topics/collection-planning-process-for-intel-analysts", why: "Pair every gap with a realistic way to fill it." },
    { href: "/topics/writing-collection-tasks", why: "Phrase gaps as tasks a collector can act on." },
  ],
  hypotheses: [
    { href: "/topics/analysis-competing-hypotheses", why: "Test each item of evidence against every hypothesis, not just the favourite." },
    { href: "/topics/cognitive-biases", why: "Anchoring and confirmation bias are what ACH exists to catch." },
  ],
  assessment: [
    { href: "/topics/estimative-language", why: "State how likely and how confident — separately." },
    { href: "/topics/executive-summaries-mastery", why: "Lead with the judgment. BLUF, not backstory." },
    { href: "/topics/indicators-warnings", why: "Say what would change your mind, so the reader can watch for it." },
    { href: "/topics/intelligence-briefings", why: "What you need to know, why it matters, what happens next." },
  ],
}

/** Title for a lesson href, or null if it isn't a lesson we can vouch for. */
export function lessonTitle(href: string): string | null {
  const clean = normaliseHref(href)
  if (!clean) return null
  return LESSON_TITLES[clean] ?? citeableByHref.get(clean)?.title ?? null
}

export function normaliseHref(href: string): string | null {
  if (typeof href !== "string") return null
  const path = href.trim().replace(/^https?:\/\/[^/]+/i, "").split(/[?#]/)[0].replace(/\/+$/, "")
  return /^\/topics\/[a-z0-9-]+$/.test(path) ? path : null
}

/**
 * Keep only links to lessons that exist. Model output passes through here
 * so The Chief can't invent a URL.
 */
export function sanitiseLessonLinks(
  links: Array<{ href?: unknown; why?: unknown }> | undefined,
  limit = 4,
): LessonLink[] {
  const out: LessonLink[] = []
  const seen = new Set<string>()
  for (const link of links ?? []) {
    const href = normaliseHref(String(link?.href ?? ""))
    if (!href || seen.has(href)) continue
    const title = lessonTitle(href)
    if (!title) continue
    seen.add(href)
    const why = typeof link?.why === "string" && link.why.trim() ? link.why.trim().slice(0, 240) : "Related academy lesson."
    out.push({ title, href, why })
    if (out.length >= limit) break
  }
  return out
}

/** Lessons for the weakest skill areas first, then the exercise's own related lessons. */
export function lessonsForSkills(weakAreas: SkillArea[], related: string[] = [], limit = 6): LessonLink[] {
  const picks: Array<{ href: string; why: string }> = []
  for (const area of weakAreas) {
    picks.push(...SKILL_LESSONS[area].slice(0, 2))
  }
  for (const href of related) {
    picks.push({ href, why: "Background for this scenario." })
  }
  return sanitiseLessonLinks(picks, limit)
}

export function allSkillLessonHrefs(): string[] {
  return Object.values(SKILL_LESSONS).flatMap((list) => list.map((l) => l.href))
}
