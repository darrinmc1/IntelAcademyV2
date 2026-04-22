"use client"

import { useState } from "react"
import { IntelligenceBriefingGrid } from "@/components/hover-effects/intelligence-briefing-grid"
import { SecurityClearanceSimulator } from "@/components/hover-effects/security-clearance-simulator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, MousePointer, MousePointerClickIcon as Click, Lock } from "lucide-react"

export default function IntelligenceBriefingsPage() {
  const [currentClearance, setCurrentClearance] = useState("UNCLASSIFIED")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-mono">INTELLIGENCE BRIEFINGS</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Classified briefing cards with hover-activated security reveals
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-mono">SECURE TERMINAL ACTIVE</span>
          </div>
        </div>

        {/* Security Clearance Simulator */}
        <SecurityClearanceSimulator currentClearance={currentClearance} onClearanceChange={setCurrentClearance} />

        {/* Instructions */}
        <Card className="mb-8 bg-gray-800 border-gray-600">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-4 font-mono">INTERACTION GUIDE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MousePointer className="h-6 w-6 text-blue-400" />
                </div>
                <Badge className="mb-2 bg-blue-600">HOVER TO SCAN</Badge>
                <p className="text-sm text-gray-300 font-mono">
                  Hover over briefing cards to initiate security scan and reveal classified content
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Click className="h-6 w-6 text-green-400" />
                </div>
                <Badge className="mb-2 bg-green-600">CLICK TO REVEAL</Badge>
                <p className="text-sm text-gray-300 font-mono">
                  Click reveal buttons to access additional classified sections
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Lock className="h-6 w-6 text-red-400" />
                </div>
                <Badge className="mb-2 bg-red-600">RESTRICTED ACCESS</Badge>
                <p className="text-sm text-gray-300 font-mono">
                  Some content requires higher security clearance levels
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Briefing Cards Grid */}
        <IntelligenceBriefingGrid />

        {/* Security Notice */}
        <Card className="mt-12 bg-red-900 border-red-700">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-100 font-mono">SECURITY NOTICE</h3>
              <Shield className="h-6 w-6 text-red-400" />
            </div>
            <p className="text-red-200 font-mono text-sm leading-relaxed">
              This is a demonstration of classified document interaction patterns.
              <br />
              All content is simulated for educational purposes only.
              <br />
              Real classified information requires proper security protocols and clearances.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
