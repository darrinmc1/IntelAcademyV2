"use client"

import { useState, useEffect, useCallback } from "react"

const STORAGE_KEY = "iaa:completed-topics"

function readStorage(): Set<string> {
  if (typeof window === "undefined") return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

function writeStorage(set: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]))
  } catch {}
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  useEffect(() => {
    setCompleted(readStorage())
  }, [])

  const markComplete = useCallback((slug: string) => {
    setCompleted(prev => {
      const next = new Set(prev)
      next.add(slug)
      writeStorage(next)
      return next
    })
  }, [])

  const markIncomplete = useCallback((slug: string) => {
    setCompleted(prev => {
      const next = new Set(prev)
      next.delete(slug)
      writeStorage(next)
      return next
    })
  }, [])

  const isComplete = useCallback((slug: string) => completed.has(slug), [completed])

  const completedCount = useCallback(
    (slugs: string[]) => slugs.filter(s => completed.has(s)).length,
    [completed],
  )

  const clearAll = useCallback(() => {
    setCompleted(new Set())
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }, [])

  return { completed, markComplete, markIncomplete, isComplete, completedCount, clearAll }
}
