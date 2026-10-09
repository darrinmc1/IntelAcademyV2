"use client"

import type { Exercise, ExerciseSubmission } from "@/lib/exercises/types"
import type { RatingLevel } from "@/lib/exercises/scoring"

/**
 * Browser-only persistence for exercise drafts, results and generated
 * practice exercises. Everything is per-browser and best-effort: storage can
 * be blocked or cleared, so every call is wrapped and the UI works without it.
 */

const DRAFT_PREFIX = "intelacademy_exercise_draft_"
const RESULTS_KEY = "intelacademy_exercise_results"
const PRACTICE_KEY = "intelacademy_practice_exercises"
const MAX_PRACTICE = 5

export type StoredDraft = { submission: ExerciseSubmission; step: number; updatedAt: string }
export type StoredResult = { slug: string; title: string; completedAt: string; ratings: RatingLevel[] }

function read<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function write(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage full or blocked — the exercise still works, it just won't remember */
  }
}

function remove(key: string): void {
  try {
    window.localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

export function loadDraft(slug: string): StoredDraft | null {
  return read<StoredDraft>(DRAFT_PREFIX + slug)
}

export function saveDraft(slug: string, submission: ExerciseSubmission, step: number): void {
  write(DRAFT_PREFIX + slug, { submission, step, updatedAt: new Date().toISOString() } satisfies StoredDraft)
}

export function clearDraft(slug: string): void {
  remove(DRAFT_PREFIX + slug)
}

export function loadResults(): Record<string, StoredResult> {
  return read<Record<string, StoredResult>>(RESULTS_KEY) ?? {}
}

export function saveResult(result: StoredResult): void {
  const all = loadResults()
  all[result.slug] = result
  write(RESULTS_KEY, all)
}

export function loadPracticeExercises(): Exercise[] {
  return read<Exercise[]>(PRACTICE_KEY) ?? []
}

export function savePracticeExercise(exercise: Exercise): void {
  const list = loadPracticeExercises().filter((e) => e.slug !== exercise.slug)
  write(PRACTICE_KEY, [exercise, ...list].slice(0, MAX_PRACTICE))
}

export function getPracticeExercise(slug: string): Exercise | null {
  return loadPracticeExercises().find((e) => e.slug === slug) ?? null
}
