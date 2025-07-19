"use client"

import dynamic from "next/dynamic"

const Enhanced3DTopicsPage = dynamic(
  () => import("../enhanced-3d/page").then((mod) => mod.default),
  { ssr: false }
)

export default function Enhanced3DTopicsLoader() {
  return <Enhanced3DTopicsPage />
}