"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Clock, User, AlertTriangle, Eye } from "lucide-react"
import { Card3DHover } from "./card-3d-hover"

interface BriefingCard3DProps {
  title: string
  classification: "UNCLASSIFIED" | "CONFIDENTIAL" | "SECRET" | "TOP SECRET"
  briefingType: "THREAT ASSESSMENT" | "INTELLIGENCE REPORT" | "OPERATIONAL SUMMARY"
  date: string
  author: string
  summary: string
  threatLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  href: string
}

export function BriefingCard3D({
  title,
  classification,
  briefingType,
  date,
  author,
  summary,
  threatLevel,
  href,
}: BriefingCard3DProps) {
  const classificationColors = {
    UNCLASSIFIED: "bg-green-100 text-green-800 border-green-300",
    CONFIDENTIAL: "bg-blue-100 text-blue-800 border-blue-300",
    SECRET: "bg-yellow-100 text-yellow-800 border-yellow-300",
    "TOP SECRET": "bg-red-100 text-red-800 border-red-300",
  }

  const threatColors = {
    LOW: "bg-green-500",
    MEDIUM: "bg-yellow-500",
    HIGH: "bg-orange-500",
    CRITICAL: "bg-red-500",
  }

  return (
    <Card3DHover intensity="medium" className="h-full">
      <Card className="h-full overflow-hidden border-2 border-gray-300 bg-gray-50 shadow-lg">
        {/* Classification Header */}
        <div
          className={`${classificationColors[classification]} border-b-2 p-2 text-center font-mono font-bold text-sm`}
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            {classification}
            <Shield className="h-4 w-4" />
          </div>
        </div>

        <CardHeader className="pb-4" style={{ transform: "translateZ(15px)" }}>
          {/* Document Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <Badge variant="outline" className="mb-2 font-mono text-xs">
                {briefingType}
              </Badge>
              <h3 className="text-lg font-bold text-gray-900 font-mono leading-tight">{title}</h3>
            </div>
            <div className="text-right text-xs text-gray-600 font-mono">
              <div className="flex items-center gap-1 mb-1">
                <Clock className="h-3 w-3" />
                {date}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {author}
              </div>
            </div>
          </div>

          {/* Threat Level Indicator */}
          <div className="flex items-center gap-2 mb-4" style={{ transform: "translateZ(10px)" }}>
            <span className="text-sm font-medium text-gray-700 font-mono">THREAT LEVEL:</span>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${threatColors[threatLevel]} animate-pulse`} />
              <Badge
                variant="outline"
                className={`font-mono text-xs ${threatColors[threatLevel].replace("bg-", "text-")}`}
              >
                {threatLevel}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent style={{ transform: "translateZ(10px)" }}>
          {/* Executive Summary */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-2 font-mono text-sm">EXECUTIVE SUMMARY</h4>
            <p className="text-gray-700 leading-relaxed font-mono text-sm line-clamp-3">{summary}</p>
          </div>

          {/* Security Notice */}
          <div
            className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded"
            style={{ transform: "translateZ(5px)" }}
          >
            <div className="flex items-center gap-2 text-yellow-800 font-mono text-xs">
              <AlertTriangle className="h-4 w-4" />
              <span>CLASSIFIED MATERIAL - AUTHORIZED PERSONNEL ONLY</span>
            </div>
          </div>

          {/* Action Button */}
          <div style={{ transform: "translateZ(15px)" }}>
            <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-mono transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center gap-2">
                <Eye className="h-4 w-4" />
                ACCESS BRIEFING
              </span>
            </Button>
          </div>
        </CardContent>

        {/* Classification Footer */}
        <div
          className={`${classificationColors[classification]} border-t-2 p-2 text-center font-mono font-bold text-xs`}
          style={{ transform: "translateZ(20px)" }}
        >
          {classification} - HANDLE ACCORDING TO SECURITY PROTOCOLS
        </div>
      </Card>
    </Card3DHover>
  )
}
