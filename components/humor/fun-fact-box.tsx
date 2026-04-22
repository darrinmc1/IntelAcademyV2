"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Lightbulb, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getRandomFunFact } from "@/utils/lesson-humor"

interface FunFactBoxProps {
  category?: "intelligence" | "osint" | "tactical"
  className?: string
}

export function FunFactBox({ category = "intelligence", className = "" }: FunFactBoxProps) {
  const [funFact, setFunFact] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const refreshFact = () => {
    setIsVisible(false)
    setTimeout(() => {
      setFunFact(getRandomFunFact(category))
      setIsVisible(true)
    }, 200)
  }

  useEffect(() => {
    refreshFact()
  }, [category])

  return (
    <Card className={`p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-500 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          <h3 className="font-semibold text-blue-900">Analyst Fun Fact</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={refreshFact} className="h-8 w-8 p-0 hover:bg-blue-100">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <p
        className={`text-sm text-blue-800 transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-50"}`}
      >
        {funFact}
      </p>
    </Card>
  )
}
