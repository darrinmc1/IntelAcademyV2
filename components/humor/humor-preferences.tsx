"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"

interface HumorPreferencesProps {
  className?: string
}

export function HumorPreferences({ className = "" }: HumorPreferencesProps) {
  const [humorLevel, setHumorLevel] = useState(70)
  const [enablePuns, setEnablePuns] = useState(true)
  const [enableMovieReferences, setEnableMovieReferences] = useState(true)
  const [enableAnalystJokes, setEnableAnalystJokes] = useState(true)

  const handleSave = () => {
    // In a real implementation, this would save to user preferences
    alert("Humor preferences saved! Your learning experience will be adjusted accordingly.")
  }

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-4">Humor Preferences</h3>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="humor-level">Humor Level</Label>
            <span className="text-sm text-gray-500">{humorLevel}%</span>
          </div>
          <Slider
            id="humor-level"
            min={0}
            max={100}
            step={10}
            value={[humorLevel]}
            onValueChange={(value) => setHumorLevel(value[0])}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Serious</span>
            <span>Professional</span>
            <span>Humorous</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-puns" className="cursor-pointer">
              Enable Intelligence Puns
            </Label>
            <Switch id="enable-puns" checked={enablePuns} onCheckedChange={setEnablePuns} />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="enable-movie-references" className="cursor-pointer">
              Enable Spy Movie Reality Checks
            </Label>
            <Switch
              id="enable-movie-references"
              checked={enableMovieReferences}
              onCheckedChange={setEnableMovieReferences}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="enable-analyst-jokes" className="cursor-pointer">
              Enable Analyst Stereotypes
            </Label>
            <Switch id="enable-analyst-jokes" checked={enableAnalystJokes} onCheckedChange={setEnableAnalystJokes} />
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="mr-2 h-4 w-4" /> Save Preferences
        </Button>
      </div>
    </Card>
  )
}
