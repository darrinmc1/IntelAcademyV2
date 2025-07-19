"use client"

import { useEffect } from "react"

/**
 * This component suppresses environment variable warnings in the UI
 * It should be included in the root layout
 */
export function EnvWarningSuppressor() {
  useEffect(() => {
    // Override console.warn to filter out environment variable warnings
    const originalWarn = console.warn
    console.warn = (...args) => {
      // Filter out environment variable warnings
      if (
        typeof args[0] === "string" &&
        (args[0].includes("Missing Environment Variables") ||
          args[0].includes("NEXT_PUBLIC_SUPPRESS_ENV_WARNINGS") ||
          args[0].includes("SUPPRESS_ENV_WARNINGS") ||
          args[0].includes("VERCEL_URL") ||
          args[0].includes("BLOB_READ_WRITE_TOKEN"))
      ) {
        return // Suppress these warnings
      }
      originalWarn.apply(console, args)
    }

    // Restore original on unmount
    return () => {
      console.warn = originalWarn
    }
  }, [])

  return null // This component doesn't render anything
}
