"use client"

import dynamic from "next/dynamic"

const LearningPathsEnhancedClientPage = dynamic(
  () => import("./LearningPathsEnhancedClientPage"),
  {
    ssr: false,
  },
)

export default LearningPathsEnhancedClientPage
