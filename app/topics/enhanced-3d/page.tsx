"use client"

import dynamic from "next/dynamic"

const Enhanced3DTopicsClient = dynamic(
  () => import("@/components/enhanced-3d-topics-client"),
  { ssr: false }
)

export default function Enhanced3DTopicsPage() {
  return <Enhanced3DTopicsClient />
}