"use client"

import dynamic from "next/dynamic"

const EnhancedLessonContent = dynamic(
  () => import("./enhanced-lesson-content").then((mod) => mod.EnhancedLessonContent),
  { ssr: false }
)

interface EnhancedLessonContentLoaderProps {
  content: string
  topic: string
}

export default function EnhancedLessonContentLoader({ content, topic }: EnhancedLessonContentLoaderProps) {
  return <EnhancedLessonContent content={content} topic={topic} />
}