"use client"

import { Suspense, type ReactNode } from "react"

interface ClientWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ClientWrapper({ children, fallback = <div>Loading...</div> }: ClientWrapperProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}
