"use client"

import { AudioEnhancedPageTransition } from "@/components/transitions/audio-enhanced-page-transition"
import type { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  return <AudioEnhancedPageTransition>{children}</AudioEnhancedPageTransition>
}
