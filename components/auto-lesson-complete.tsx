'use client'

import { usePathname } from 'next/navigation'
import { LessonCompleteButton } from './lesson-complete-button'

interface AutoLessonCompleteProps {
  lessonTitle?: string
}

export function AutoLessonComplete({ lessonTitle }: AutoLessonCompleteProps) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const slug = segments.length >= 2 ? segments[segments.length - 1] : null

  if (!slug) return null

  return <LessonCompleteButton slug={slug} lessonTitle={lessonTitle} />
}
