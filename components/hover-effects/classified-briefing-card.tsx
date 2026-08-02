"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Lock, Unlock, Shield, AlertTriangle, Clock, User, FileText } from "lucide-react"

interface ClassifiedBriefingCardProps {
  title: string
  classification: "UNCLASSIFIED" | "CONFIDENTIAL" | "SECRET" | "TOP SECRET"
  briefingType: "THREAT ASSESSMENT" | "INTELLIGENCE REPORT" | "OPERATIONAL SUMMARY" | "STRATEGIC ANALYSIS"
  date: string
  author: string
  clearanceRequired: string
  summary: string
  keyFindings: string[]
  redactedContent: Array<{
    label: string
    content: string
    revealLevel: "hover" | "click" | "restricted"
  }>
  threatLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  sources: string[]
  actionItems?: string[]
  expirationDate?: string
  distributionList?: string[]
}

export function ClassifiedBriefingCard({
  title,
  classification,
  briefingType,
  date,
  author,
  clearanceRequired,
  summary,
  keyFindings,
  redactedContent,
  threatLevel,
  sources,
  actionItems = [],
  expirationDate,
  distributionList = [],
}: ClassifiedBriefingCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set())
  const [accessGranted, setAccessGranted] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const scanRef = useRef<HTMLDivElement>(null)

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

  // Simulate security scan on hover
  useEffect(() => {
    if (isHovered && !accessGranted) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setAccessGranted(true)
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isHovered, accessGranted])

  const toggleSection = (sectionId: string) => {
    const newRevealed = new Set(revealedSections)
    if (newRevealed.has(sectionId)) {
      newRevealed.delete(sectionId)
    } else {
      newRevealed.add(sectionId)
    }
    setRevealedSections(newRevealed)
  }

  const RedactedText = ({ children, revealed = false }: { children: string; revealed?: boolean }) => {
    return (
      <span className="relative">
        {revealed ? (
          <span className="animate-pulse">{children}</span>
        ) : (
          <>
            <span className="invisible">{children}</span>
            <span className="absolute inset-0 bg-black animate-pulse" />
          </>
        )}
      </span>
    )
  }

  const ScanLine = () => (
    <div
      className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isHovered && !accessGranted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          transform: `translateY(${(scanProgress / 100) * 100}%)`,
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  )

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setScanProgress(0)
        setAccessGranted(false)
      }}
    >
      <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border-2 border-gray-300 bg-gray-50">
        {/* Classification Header */}
        <div className={`${classificationColors[classification]} border-b-2 p-2 text-center font-mono font-bold`}>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            {classification}
            <Shield className="h-4 w-4" />
          </div>
        </div>

        <CardHeader className="pb-4">
          {/* Document Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <Badge variant="outline" className="mb-2 font-mono">
                {briefingType}
              </Badge>
              <h3 className="text-lg font-bold text-gray-900 font-mono leading-tight">{title}</h3>
            </div>
            <div className="text-right text-sm text-gray-600 font-mono">
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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700">THREAT LEVEL:</span>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${threatColors[threatLevel]} animate-pulse`} />
              <Badge variant="outline" className={`font-mono ${threatColors[threatLevel].replace("bg-", "text-")}`}>
                {threatLevel}
              </Badge>
            </div>
          </div>

          {/* Security Scan Progress */}
          <div
            className={`transition-all duration-500 ${
              isHovered && !accessGranted ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
            } overflow-hidden`}
          >
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-4">
              <div className="flex items-center justify-between mb-2">
                <span>SECURITY SCAN IN PROGRESS...</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-400 h-2 rounded-full transition-all duration-100"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Access Granted Indicator */}
          <div
            className={`transition-all duration-500 ${
              accessGranted ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
            } overflow-hidden`}
          >
            <div className="bg-green-800 text-green-100 p-3 rounded font-mono text-sm mb-4 flex items-center gap-2">
              <Unlock className="h-4 w-4" />
              ACCESS GRANTED - CLEARANCE LEVEL: {clearanceRequired}
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative">
          <ScanLine />

          {/* Executive Summary */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-2 font-mono">EXECUTIVE SUMMARY</h4>
            <p className="text-gray-700 leading-relaxed font-mono text-sm">{summary}</p>
          </div>

          {/* Key Findings */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-3 font-mono">KEY FINDINGS</h4>
            <ul className="space-y-2">
              {keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-2 text-sm font-mono">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Classified Content Sections */}
          <div className="space-y-4 mb-6">
            {redactedContent.map((section, index) => (
              <div key={index} className="border border-gray-300 rounded p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-gray-900 font-mono text-sm">{section.label}</h5>
                  {section.revealLevel === "click" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleSection(`section-${index}`)}
                      className="font-mono text-xs"
                      disabled={!accessGranted}
                    >
                      {revealedSections.has(`section-${index}`) ? (
                        <>
                          <EyeOff className="h-3 w-3 mr-1" />
                          HIDE
                        </>
                      ) : (
                        <>
                          <Eye className="h-3 w-3 mr-1" />
                          REVEAL
                        </>
                      )}
                    </Button>
                  )}
                </div>
                <div className="font-mono text-sm text-gray-700">
                  {section.revealLevel === "hover" ? (
                    <RedactedText revealed={accessGranted}>{section.content}</RedactedText>
                  ) : section.revealLevel === "click" ? (
                    <RedactedText revealed={revealedSections.has(`section-${index}`) && accessGranted}>
                      {section.content}
                    </RedactedText>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <Lock className="h-4 w-4" />
                      <span>RESTRICTED ACCESS REQUIRED</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Hover Reveal: Additional Details */}
          <div
            className={`transform transition-all duration-500 ${
              isHovered && accessGranted ? "translate-y-0 opacity-100 max-h-96" : "translate-y-4 opacity-0 max-h-0"
            } overflow-hidden`}
          >
            {/* Sources */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <h5 className="font-bold text-blue-900 mb-2 font-mono text-sm">INTELLIGENCE SOURCES</h5>
              <ul className="space-y-1">
                {sources.map((source, index) => (
                  <li key={index} className="text-sm font-mono text-blue-800 flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    {source}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Items */}
            {actionItems.length > 0 && (
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <h5 className="font-bold text-yellow-900 mb-2 font-mono text-sm flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  RECOMMENDED ACTIONS
                </h5>
                <ul className="space-y-1">
                  {actionItems.map((action, index) => (
                    <li key={index} className="text-sm font-mono text-yellow-800">
                      {index + 1}. {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Distribution List */}
            {distributionList.length > 0 && (
              <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded">
                <h5 className="font-bold text-gray-900 mb-2 font-mono text-sm">DISTRIBUTION LIST</h5>
                <div className="flex flex-wrap gap-1">
                  {distributionList.map((recipient, index) => (
                    <Badge key={index} variant="outline" className="font-mono text-xs">
                      {recipient}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Expiration Notice */}
            {expirationDate && (
              <div className="p-3 bg-red-50 border border-red-200 rounded">
                <div className="flex items-center gap-2 text-red-800 font-mono text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span>EXPIRES: {expirationDate}</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>

        {/* Classification Footer */}
        <div
          className={`${classificationColors[classification]} border-t-2 p-2 text-center font-mono font-bold text-sm`}
        >
          {classification} - HANDLE ACCORDING TO SECURITY PROTOCOLS
        </div>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 to-green-400/10 blur-xl" />
        </div>
      </Card>
    </div>
  )
}
