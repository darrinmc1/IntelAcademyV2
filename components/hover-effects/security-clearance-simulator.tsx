"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react"

interface SecurityClearanceSimulatorProps {
  onClearanceChange: (level: string) => void
  currentClearance: string
}

export function SecurityClearanceSimulator({ onClearanceChange, currentClearance }: SecurityClearanceSimulatorProps) {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const clearanceLevels = [
    {
      level: "UNCLASSIFIED",
      description: "Public information",
      color: "bg-green-100 text-green-800",
      icon: Eye,
    },
    {
      level: "CONFIDENTIAL",
      description: "Limited access required",
      color: "bg-blue-100 text-blue-800",
      icon: Shield,
    },
    {
      level: "SECRET",
      description: "Serious damage if disclosed",
      color: "bg-yellow-100 text-yellow-800",
      icon: Lock,
    },
    {
      level: "TOP SECRET",
      description: "Grave damage if disclosed",
      color: "bg-red-100 text-red-800",
      icon: AlertTriangle,
    },
  ]

  const handleClearanceRequest = async (level: string) => {
    setIsAuthenticating(true)
    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    onClearanceChange(level)
    setIsAuthenticating(false)
  }

  return (
    <Card className="mb-8 border-2 border-gray-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-mono">
          <Shield className="h-5 w-5" />
          SECURITY CLEARANCE SIMULATOR
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-sm">CURRENT CLEARANCE:</span>
            <Badge className={clearanceLevels.find((c) => c.level === currentClearance)?.color}>
              {currentClearance}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 font-mono">
            Select a clearance level to access different types of classified information
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {clearanceLevels.map((clearance) => {
            const IconComponent = clearance.icon
            const isActive = currentClearance === clearance.level
            const isHigher =
              clearanceLevels.findIndex((c) => c.level === clearance.level) >
              clearanceLevels.findIndex((c) => c.level === currentClearance)

            return (
              <Button
                key={clearance.level}
                variant={isActive ? "default" : "outline"}
                className={`h-auto p-3 flex flex-col items-center gap-2 font-mono text-xs ${
                  isActive ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => handleClearanceRequest(clearance.level)}
                disabled={isAuthenticating}
              >
                <IconComponent className="h-4 w-4" />
                <span className="font-bold">{clearance.level}</span>
                <span className="text-center leading-tight">{clearance.description}</span>
                {isActive && <CheckCircle className="h-3 w-3" />}
                {isHigher && !isActive && <Lock className="h-3 w-3 text-gray-400" />}
              </Button>
            )
          })}
        </div>

        {isAuthenticating && (
          <div className="mt-4 p-3 bg-gray-800 text-green-400 rounded font-mono text-sm">
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400" />
              AUTHENTICATING SECURITY CLEARANCE...
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
