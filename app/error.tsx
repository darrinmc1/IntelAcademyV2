"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)

    // Auto-reload on ChunkLoadError or Loading chunk failed
    const errorMsg = error?.message || ""
    if (
      errorMsg.includes("ChunkLoadError") ||
      errorMsg.includes("Loading chunk") ||
      errorMsg.includes("failed to load")
    ) {
      const now = Date.now()
      const lastReload = sessionStorage.getItem("last_chunk_reload")
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem("last_chunk_reload", now.toString())
        console.warn("ChunkLoadError detected in ErrorBoundary, reloading...")
        window.location.reload()
      }
    }
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="mb-6 text-gray-600">We&apos;re sorry, but something went wrong. Please try again later.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  )
}
