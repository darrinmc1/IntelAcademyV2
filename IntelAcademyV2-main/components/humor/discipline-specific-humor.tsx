"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Coffee, Lightbulb, Target, Zap } from "lucide-react"
import { getHumorForDiscipline } from "@/utils/discipline-humor-content"

interface DisciplineSpecificHumorProps {
  discipline: string
  className?: string
}

export function DisciplineSpecificHumor({ discipline, className = "" }: DisciplineSpecificHumorProps) {
  const [currentFunFact, setCurrentFunFact] = useState(0)
  const [currentRealityCheck, setCurrentRealityCheck] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)

  const humor = getHumorForDiscipline(discipline)

  const refreshFunFact = () => {
    setCurrentFunFact((prev) => (prev + 1) % humor.funFacts.length)
  }

  const refreshRealityCheck = () => {
    setCurrentRealityCheck((prev) => (prev + 1) % humor.realityChecks.length)
  }

  const refreshTip = () => {
    setCurrentTip((prev) => (prev + 1) % humor.professionalTips.length)
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Opening Hook */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-start gap-3">
          <Zap className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <p className="text-lg leading-relaxed">{humor.openingHook}</p>
        </div>
      </Card>

      {/* Fun Fact Box */}
      <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <Lightbulb className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">💡 Fun Fact</h3>
              <p className="text-amber-700">{humor.funFacts[currentFunFact]}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshFunFact}
            className="text-amber-600 hover:text-amber-700 hover:bg-amber-100"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Reality Check */}
      <Card className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <Target className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">🎬 Reality Check</h3>
              <p className="text-red-700">{humor.realityChecks[currentRealityCheck]}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshRealityCheck}
            className="text-red-600 hover:text-red-700 hover:bg-red-100"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Professional Tip */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <Coffee className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">☕ Pro Tip</h3>
              <p className="text-green-700">{humor.professionalTips[currentTip]}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshTip}
            className="text-green-600 hover:text-green-700 hover:bg-green-100"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
