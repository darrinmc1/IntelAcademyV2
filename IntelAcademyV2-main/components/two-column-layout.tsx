'use client'

import { cn } from "@/lib/utils"

interface TwoColumnLayoutProps {
  leftColumn: React.ReactNode
  rightColumn: React.ReactNode
  className?: string
}

export function TwoColumnLayout({ leftColumn, rightColumn, className }: TwoColumnLayoutProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 items-center", className)}>
      <div>{leftColumn}</div>
      <div>{rightColumn}</div>
    </div>
  )
}
