"use client"

import { useSearchParams as useNextSearchParams } from "next/navigation"

export function useSearchParams() {
  const params = useNextSearchParams()

  // Create a safe wrapper around the search params
  const safeParams = {
    get: (key: string) => params.get(key),
    getAll: (key: string) => params.getAll(key),
    has: (key: string) => params.has(key),
    forEach: (callback: (value: string, key: string) => void) => params.forEach(callback),
    entries: () => params.entries(),
    keys: () => params.keys(),
    values: () => params.values(),
    toString: () => params.toString(),
  }

  return safeParams
}
