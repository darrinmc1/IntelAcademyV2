"use client"

import { useCallback, useRef } from "react"

export function useThrottledCallback<T extends (...args: any[]) => any>(callback: T, delay: number): T {
  const lastRun = useRef(Date.now())

  return useCallback(
    ((...args) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args)
        lastRun.current = Date.now()
      }
    }) as T,
    [callback, delay],
  )
}
