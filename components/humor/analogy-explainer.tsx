"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Lightbulb } from "lucide-react"
import { getHumorForDiscipline } from "@/utils/discipline-humor-content"

interface AnalogiesExplainerProps {
  discipline: string
  title?: string
  className?: string
}

export function AnalogiesExplainer({ discipline, title, className = "" }: AnalogiesExplainerProps) {
  const [currentAnalogy, setCurrentAnalogy] = useState(0)
  const humor = getHumorForDiscipline(discipline)

  const refreshAnalogy = () => {
    setCurrentAnalogy((prev) => (prev + 1) % humor.analogies.length)
  }

  return (
    <div className={`${className}`}>
      <Card className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <Lightbulb className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl text-amber-800 mb-3">{title || "Explaining It Simply"}</h3>
              <div className="space-y-3">
                <p className="text-amber-700 text-lg">{humor.analogies[currentAnalogy]}</p>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshAnalogy}
            className="text-amber-600 hover:text-amber-700 hover:bg-amber-100"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
