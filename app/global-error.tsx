"use client"

import { useEffect } from "react"

export default function GlobalError({
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
        console.warn("ChunkLoadError detected in GlobalError, reloading...")
        window.location.reload()
      }
    }
  }, [error])

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "28rem", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Something went wrong</h1>
            <p style={{ marginBottom: "1.5rem", color: "#4b5563" }}>
              We&apos;re sorry, but a critical error occurred. Please try again later.
            </p>
            <button
              onClick={reset}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#a4daff",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="/"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "0.25rem",
                  textDecoration: "none",
                }}
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
