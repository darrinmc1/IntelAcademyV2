/**
 * Shared grading scales — the same ones the lessons teach:
 * Admiralty (NATO) system in /topics/evidence-based-conclusions and the
 * Kent estimative scale in /topics/estimative-language.
 */

export const RELIABILITY_GRADES = ["A", "B", "C", "D", "E", "F"] as const
export type ReliabilityGrade = (typeof RELIABILITY_GRADES)[number]

export const CREDIBILITY_GRADES = [1, 2, 3, 4, 5, 6] as const
export type CredibilityGrade = (typeof CREDIBILITY_GRADES)[number]

export const RELIABILITY_LABELS: Record<ReliabilityGrade, string> = {
  A: "Completely reliable",
  B: "Usually reliable",
  C: "Fairly reliable",
  D: "Not usually reliable",
  E: "Unreliable",
  F: "Reliability cannot be judged",
}

export const CREDIBILITY_LABELS: Record<CredibilityGrade, string> = {
  1: "Confirmed by other sources",
  2: "Probably true",
  3: "Possibly true",
  4: "Doubtful",
  5: "Improbable",
  6: "Truth cannot be judged",
}

export const CONFIDENCE_LEVELS = ["high", "moderate", "low"] as const
export type ConfidenceLevel = (typeof CONFIDENCE_LEVELS)[number]

/** ACH matrix cell: consistent, inconsistent, or neutral / not applicable. */
export const CONSISTENCY_VALUES = ["C", "I", "N"] as const
export type Consistency = (typeof CONSISTENCY_VALUES)[number]

export const CONSISTENCY_LABELS: Record<Consistency, string> = {
  C: "Consistent",
  I: "Inconsistent",
  N: "Neutral / not applicable",
}

/** The probability scale exactly as taught on /topics/estimative-language. */
export const KENT_SCALE: Array<{ term: string; range: string }> = [
  { term: "Almost certain", range: "95–99%" },
  { term: "Very likely", range: "80–93%" },
  { term: "Likely", range: "60–75%" },
  { term: "Roughly even chance", range: "45–55%" },
  { term: "Unlikely", range: "20–40%" },
  { term: "Very unlikely", range: "5–15%" },
  { term: "Remote / almost no chance", range: "1–5%" },
]

/**
 * Estimative terms we accept as "uses estimative language". Covers the Kent
 * scale, ICD 203 and the UK PHIA yardstick so students aren't penalised for
 * using a different (legitimate) house scale.
 */
export const ESTIMATIVE_TERMS = [
  "almost certain",
  "almost certainly",
  "nearly certain",
  "highly likely",
  "very likely",
  "highly probable",
  "likely",
  "probable",
  "probably",
  "roughly even chance",
  "even chance",
  "realistic possibility",
  "unlikely",
  "improbable",
  "very unlikely",
  "highly unlikely",
  "highly improbable",
  "almost no chance",
  "remote chance",
  "remote possibility",
]

/** Unquantified hedges the estimative-language lesson tells analysts to avoid. */
export const VAGUE_HEDGES = [
  "may",
  "might",
  "could",
  "possibly",
  "perhaps",
  "potentially",
  "it is possible that",
  "cannot be ruled out",
  "can't be ruled out",
]

export function isReliabilityGrade(value: unknown): value is ReliabilityGrade {
  return RELIABILITY_GRADES.includes(value as ReliabilityGrade)
}

export function isCredibilityGrade(value: unknown): value is CredibilityGrade {
  return CREDIBILITY_GRADES.includes(value as CredibilityGrade)
}
