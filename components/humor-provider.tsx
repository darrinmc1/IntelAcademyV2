"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type HumorMode = "comedy" | "serious"

interface HumorContextType {
  mode: HumorMode
  setMode: (mode: HumorMode) => void
  toggleMode: () => void
  isComedy: boolean
}

const HumorContext = createContext<HumorContextType | undefined>(undefined)

const STORAGE_KEY = "intel-academy-humor-mode"

export function HumorProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<HumorMode>("comedy")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY) as HumorMode | null
      if (stored === "comedy" || stored === "serious") {
        setModeState(stored)
      }
      setIsLoaded(true)
    }
  }, [])

  const setMode = (newMode: HumorMode) => {
    setModeState(newMode)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newMode)
    }
  }

  const toggleMode = () => {
    setMode(mode === "comedy" ? "serious" : "comedy")
  }

  return (
    <HumorContext.Provider value={{ mode, setMode, toggleMode, isComedy: mode === "comedy" }}>
      {children}
    </HumorContext.Provider>
  )
}

export function useHumor() {
  const context = useContext(HumorContext)
  if (!context) {
    throw new Error("useHumor must be used within a HumorProvider")
  }
  return context
}

/**
 * Component that only renders its children in comedy mode
 */
export function ComedyOnly({ children }: { children: React.ReactNode }) {
  const { isComedy } = useHumor()
  if (!isComedy) return null
  return <>{children}</>
}

/**
 * Component that renders comedy or serious content based on mode
 */
export function HumorSwitch({ comedy, serious }: { comedy: React.ReactNode; serious?: React.ReactNode }) {
  const { isComedy } = useHumor()
  return <>{isComedy ? comedy : (serious || null)}</>
}
