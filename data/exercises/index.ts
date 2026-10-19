import type { Exercise, ExerciseLevel } from "@/lib/exercises/types"
import { nightShiftAtPier9 } from "@/data/exercises/night-shift-at-pier-9"
import { theVantrellLedger } from "@/data/exercises/the-vantrell-ledger"
import { drySeason } from "@/data/exercises/dry-season"

/**
 * Library of practical exercises. To add one: create a file in this folder
 * exporting an `Exercise`, then add it here. exercises.test.ts validates
 * the schema, the ACH matrix and every lesson link — run `pnpm test`.
 *
 * Server-side only: these objects contain the answer keys. Pages pass
 * `toStudentView(exercise)` to client components, never the raw object.
 */
export const exercises: Exercise[] = [nightShiftAtPier9, theVantrellLedger, drySeason]

export function getExercise(slug: string): Exercise | undefined {
  return exercises.find((e) => e.slug === slug)
}

export type ExerciseCard = {
  slug: string
  title: string
  level: ExerciseLevel
  domain: string
  estimatedMinutes: number
  skills: string[]
  summary: string
  reportCount: number
}

export function exerciseCards(): ExerciseCard[] {
  return exercises.map((e) => ({
    slug: e.slug,
    title: e.title,
    level: e.level,
    domain: e.domain,
    estimatedMinutes: e.estimatedMinutes,
    skills: e.skills,
    summary: e.summary,
    reportCount: e.reports.length,
  }))
}
