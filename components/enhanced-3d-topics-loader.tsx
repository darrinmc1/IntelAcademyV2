"use client"

import { Suspense } from "react"

// Import the page component
import Enhanced3DLearningPathsPage from "@/app/learning-paths/enhanced-3d/page"

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  )
}

export default function Enhanced3DTopicsLoader() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Enhanced3DLearningPathsPage />
    </Suspense>
  )
}