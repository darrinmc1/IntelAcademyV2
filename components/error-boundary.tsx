"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

export function ErrorBoundary({
  children,
}: {
  children: React.ReactNode
}) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = () => {
      setHasError(true)
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (hasError) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-6 text-gray-600">We're sorry, but something went wrong. Please try again later.</p>

          <div className="mt-8">
            <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
