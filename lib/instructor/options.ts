/** Choices for generated practice exercises. Zod-free so client components can import it. */

export const PRACTICE_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const

export const PRACTICE_DOMAINS = [
  "Crime analysis",
  "Financial intelligence",
  "Threat assessment",
  "Strategic intelligence",
  "OSINT investigation",
  "Cyber threat intelligence",
] as const

export const PRACTICE_FOCUS = [
  "Source grading",
  "Circular reporting",
  "Intelligence gaps",
  "Competing hypotheses",
  "Estimative language",
  "Indicators & warnings",
] as const
