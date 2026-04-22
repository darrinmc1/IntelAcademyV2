"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Zap } from "lucide-react"

interface DataFlow {
  id: string
  from: string
  to: string
  data: string
  color: string
}

const dataFlows: DataFlow[] = [
  { id: "1", from: "direction", to: "collection", data: "Requirements", color: "#3B82F6" },
  { id: "2", from: "collection", to: "processing", data: "Raw Data", color: "#10B981" },
  { id: "3", from: "processing", to: "analysis", data: "Processed Info", color: "#F59E0B" },
  { id: "4", from: "analysis", to: "dissemination", data: "Intelligence", color: "#EF4444" },
  { id: "5", from: "dissemination", to: "feedback", data: "Reports", color: "#8B5CF6" },
  { id: "6", from: "feedback", to: "direction", data: "Insights", color: "#06B6D4" },
]

export default function AdvancedCycleAnimation() {
  const [activeFlow, setActiveFlow] = useState<string>("1")
  const [isFlowing, setIsFlowing] = useState(false)
  const [viewMode, setViewMode] = useState<"cycle" | "linear">("cycle")
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!isFlowing) return

    const interval = setInterval(() => {
      setActiveFlow((current) => {
        const currentIndex = dataFlows.findIndex((f) => f.id === current)
        const nextIndex = (currentIndex + 1) % dataFlows.length
        return dataFlows[nextIndex].id
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isFlowing])

  const getLinearPosition = (index: number) => {
    const spacing = 60
    const startX = 50
    return { x: startX + index * spacing, y: 200 }
  }

  const getCyclePosition = (index: number) => {
    const centerX = 200
    const centerY = 200
    const radius = 120
    const angle = index * 60 - 90 // Start from top
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180)
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180)
    return { x, y }
  }

  const currentFlow = dataFlows.find((f) => f.id === activeFlow)

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-xl">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Advanced Intelligence Cycle Animation
        </h2>
        <p className="text-gray-600">Watch data flow through the intelligence process with morphing visualizations</p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <Button onClick={() => setViewMode("cycle")} variant={viewMode === "cycle" ? "default" : "ghost"} size="sm">
            🔄 Cycle View
          </Button>
          <Button onClick={() => setViewMode("linear")} variant={viewMode === "linear" ? "default" : "ghost"} size="sm">
            ➡️ Linear View
          </Button>
        </div>
      </div>

      {/* Main Animation Container */}
      <div className="relative bg-white rounded-xl p-8 mb-6 shadow-inner">
        <svg
          ref={svgRef}
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="w-full h-auto transition-all duration-1000"
        >
          {/* Background Pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
            </pattern>

            {/* Animated Gradient for Data Flow */}
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor={currentFlow?.color || "#3B82F6"} stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0; 100 0; -100 0"
                dur="2s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          <rect width="400" height="400" fill="url(#grid)" />

          {/* Phase Nodes */}
          {dataFlows.map((flow, index) => {
            const position = viewMode === "cycle" ? getCyclePosition(index) : getLinearPosition(index)
            const isActive = activeFlow === flow.id

            return (
              <g key={flow.id} className="transition-all duration-1000">
                {/* Glow Effect for Active Node */}
                {isActive && (
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="50"
                    fill={flow.color}
                    opacity="0.1"
                    className="animate-ping"
                  />
                )}

                {/* Main Node */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r="30"
                  fill={isActive ? flow.color : "#E5E7EB"}
                  stroke={flow.color}
                  strokeWidth={isActive ? "3" : "1"}
                  className="cursor-pointer transition-all duration-500 hover:scale-110"
                  onClick={() => setActiveFlow(flow.id)}
                />

                {/* Node Label */}
                <text
                  x={position.x}
                  y={position.y + 5}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill={isActive ? "white" : "#374151"}
                  className="select-none pointer-events-none"
                >
                  {flow.from.slice(0, 4).toUpperCase()}
                </text>

                {/* Data Label */}
                <text
                  x={position.x}
                  y={position.y + 50}
                  textAnchor="middle"
                  fontSize="8"
                  fill={flow.color}
                  fontWeight="medium"
                  className="select-none"
                >
                  {flow.data}
                </text>
              </g>
            )
          })}

          {/* Connection Lines with Flow Animation */}
          {dataFlows.map((flow, index) => {
            const fromPos = viewMode === "cycle" ? getCyclePosition(index) : getLinearPosition(index)
            const toIndex = (index + 1) % dataFlows.length
            const toPos = viewMode === "cycle" ? getCyclePosition(toIndex) : getLinearPosition(toIndex)
            const isActive = activeFlow === flow.id

            return (
              <g key={`connection-${flow.id}`}>
                {/* Base Connection Line */}
                <line
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke={isActive ? flow.color : "#D1D5DB"}
                  strokeWidth={isActive ? "4" : "2"}
                  opacity={isActive ? 1 : 0.3}
                  className="transition-all duration-500"
                />

                {/* Animated Flow Line */}
                {isActive && isFlowing && (
                  <line
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={toPos.x}
                    y2={toPos.y}
                    stroke="url(#flowGradient)"
                    strokeWidth="6"
                    opacity="0.8"
                  />
                )}

                {/* Arrow Head */}
                <polygon
                  points={`${toPos.x - 8},${toPos.y - 4} ${toPos.x},${toPos.y} ${toPos.x - 8},${toPos.y + 4}`}
                  fill={isActive ? flow.color : "#9CA3AF"}
                  className="transition-colors duration-500"
                />
              </g>
            )
          })}

          {/* Central Intelligence Hub (Cycle View Only) */}
          {viewMode === "cycle" && (
            <g>
              <circle cx="200" cy="200" r="40" fill="url(#hubGradient)" className="drop-shadow-lg" />
              <text x="200" y="195" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
                INTEL
              </text>
              <text x="200" y="208" textAnchor="middle" fontSize="8" fill="white" opacity="0.8">
                CYCLE
              </text>
            </g>
          )}

          {/* Gradient Definitions */}
          <defs>
            <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#1E40AF" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Current Flow Information */}
      {currentFlow && (
        <div
          className="bg-white border-l-4 p-6 rounded-r-xl shadow-lg transition-all duration-500 mb-6"
          style={{ borderLeftColor: currentFlow.color }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: currentFlow.color }} />
            <h3 className="text-xl font-bold" style={{ color: currentFlow.color }}>
              {currentFlow.from.charAt(0).toUpperCase() + currentFlow.from.slice(1)} →{" "}
              {currentFlow.to.charAt(0).toUpperCase() + currentFlow.to.slice(1)}
            </h3>
          </div>
          <p className="text-gray-700 text-lg">
            <strong>Data Type:</strong> {currentFlow.data}
          </p>
          <div className="mt-2 text-sm text-gray-600">
            Information flows from <strong>{currentFlow.from}</strong> to <strong>{currentFlow.to}</strong> in the
            intelligence process
          </div>
        </div>
      )}

      {/* Enhanced Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={() => setIsFlowing(!isFlowing)}
          variant={isFlowing ? "destructive" : "default"}
          size="lg"
          className="shadow-lg"
        >
          {isFlowing ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
          {isFlowing ? "Stop Flow" : "Start Flow"}
        </Button>

        <Button
          onClick={() => {
            setActiveFlow("1")
            setIsFlowing(false)
          }}
          variant="outline"
          size="lg"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Reset
        </Button>

        <Button onClick={() => setIsFlowing(true)} variant="secondary" size="lg">
          <Zap className="w-5 h-5 mr-2" />
          Auto Demo
        </Button>
      </div>

      {/* Flow Steps Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
        {dataFlows.map((flow) => (
          <button
            key={flow.id}
            onClick={() => setActiveFlow(flow.id)}
            className={`p-3 rounded-xl text-xs font-medium transition-all duration-300 border-2 ${
              activeFlow === flow.id
                ? "text-white shadow-xl transform scale-105 border-transparent"
                : "text-gray-600 bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
            style={{
              backgroundColor: activeFlow === flow.id ? flow.color : undefined,
            }}
          >
            <div className="font-bold mb-1">{flow.from.slice(0, 4).toUpperCase()}</div>
            <div className="text-xs opacity-90">{flow.data}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
