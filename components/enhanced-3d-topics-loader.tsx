"use client"

import dynamic from "next/dynamic"

const Enhanced3DTopicsPage = dynamic(
  () => import("@/components/enhanced-3d-topics-client").then((mod) => mod.default || mod),
  { ssr: false }
)

export default function Enhanced3DTopicsLoader() {
  return <Enhanced3DTopicsPage />
}