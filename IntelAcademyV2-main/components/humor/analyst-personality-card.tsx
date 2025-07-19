"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, RefreshCw } from "lucide-react"
import { getAnalystPersonality } from "@/utils/lesson-humor"

export function AnalystPersonalityCard() {
  const [personality, setPersonality] = useState(getAnalystPersonality())

  const refreshPersonality = () => {
    setPersonality(getAnalystPersonality())
  }

  return (
    <Card className="p-4 bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-l-green-500">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold text-green-900">Your Analyst Personality</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={refreshPersonality} className="h-8 w-8 p-0 hover:bg-green-100">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-green-800 font-medium">{personality.description}</p>
        <div className="bg-green-100 rounded p-2">
          <p className="text-xs text-green-700 font-medium">Catchphrase: "{personality.catchphrase}"</p>
        </div>
      </div>
    </Card>
  )
}
