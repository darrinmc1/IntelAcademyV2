"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Coffee } from "lucide-react"
import { getHumorForDiscipline } from "@/utils/discipline-humor-content"

interface DailyLifeHumorProps {
  discipline: string
  className?: string
}

export function DailyLifeHumor({ discipline, className = "" }: DailyLifeHumorProps) {
  const [currentScenario, setCurrentScenario] = useState(0)
  const humor = getHumorForDiscipline(discipline)

  const refreshScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % humor.dailyLife.length)
  }

  return (
    <div className={`${className}`}>
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <Coffee className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-800 mb-3">
                A Day in the Life of a {discipline.toUpperCase()} Analyst
              </h3>
              <div className="space-y-3">
                <p className="text-indigo-700 text-lg">{humor.dailyLife[currentScenario]}</p>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshScenario}
            className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
