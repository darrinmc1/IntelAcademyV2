"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

interface CyclePhase {
  id: string
  name: string
  description: string
  color: string
  icon: string
  position: { x: number; y: number }
}

const phases: CyclePhase[] = [
  {
    id: "direction",
    name: "Direction",
    description: "This phase establishes intelligence requirements and priorities by identifying what information decision-makers need to support their operations and strategic objectives.",
    color: "#3B82F6",
    icon: "🎯",
    position: { x: 200, y: 50 },
  },
  {
    id: "collection",
    name: "Collection ",
    description: "This phase gathers raw information from various sources—human intelligence, signals intelligence, imagery, and open sources—to acquire the data necessary to address the identified intelligence requirements.n",
    color: "#10B981",
    icon: "📡",
    position: { x: 350, y: 120 },
  },
  {
    id: "processing",
    name: "Processing",
    description: "This phase converts raw collected data into a usable format through activities like translation, decryption, and organization, making the information accessible for analysis.",
    color: "#F59E0B",
    icon: "⚙️",
    position: { x: 350, y: 280 },
  },
  {
    id: "analysis",
    name: "Analysis",
    description: "This phase evaluates, interprets, and synthesizes processed information to produce meaningful intelligence assessments that answer the original intelligence questions and provide insights for decision-making.",
    color: "#EF4444",
    icon: "🧠",
    position: { x: 200, y: 350 },
  },
  {
    id: "dissemination",
    name: "Dissemination",
    description: "This phase delivers the finished intelligence products to the appropriate decision-makers and stakeholders in the right format and timeframe to support their operational and strategic needs.",
    color: "#8B5CF6",
    icon: "📤",
    position: { x: 50, y: 280 },
  },
  {
    id: "feedback",
    name: "Feedback",
    description: "This phase evaluates the effectiveness of intelligence products by gathering input from consumers about whether their information needs were met, enabling refinement of future intelligence requirements and processes.",
    color: "#06B6D4",
    icon: "🔄",
    position: { x: 50, y: 120 },
  },
]

export default function MorphingIntelligenceCycle() {
  const [activePhase, setActivePhase] = useState<string>("direction")
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(2000)
  const [showConnections, setShowConnections] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setActivePhase((current) => {
        const currentIndex = phases.findIndex((p) => p.id === current)
        const nextIndex = (currentIndex + 1) % phases.length
        return phases[nextIndex].id
      })
    }, animationSpeed)

    return () => clearInterval(interval)
  }, [isAnimating, animationSpeed])

  const getConnectionPath = (from: CyclePhase, to: CyclePhase) => {
    const dx = to.position.x - from.position.x
    const dy = to.position.y - from.position.y
    const midX = from.position.x + dx * 0.5
    const midY = from.position.y + dy * 0.5

    // Create curved path
    return `M ${from.position.x} ${from.position.y} Q ${midX + 30} ${midY - 30} ${to.position.x} ${to.position.y}`
  }

  const getPhaseScale = (phaseId: string) => {
    return activePhase === phaseId ? 1.2 : 1
  }

  const getPhaseOpacity = (phaseId: string) => {
    return activePhase === phaseId ? 1 : 0.7
  }

  const currentPhase = phases.find((p) => p.id === activePhase)

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-2">Interactive Intelligence Cycle</h2>
        <p className="text-gray-600 text-center">Click on phases or use controls to explore the intelligence process</p>
      </div>

      {/* SVG Animation Container */}
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-6">
        <svg width="400" height="400" viewBox="0 0 400 400" className="w-full h-auto" style={{ maxHeight: "400px" }}>
          {/* Background Circle */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-spin"
            style={{ animationDuration: "30s" }}
          />

          {/* Connection Lines */}
          {showConnections &&
            phases.map((phase, index) => {
              const nextPhase = phases[(index + 1) % phases.length]
              const isActive = activePhase === phase.id || activePhase === nextPhase.id

              return (
                <path
                  key={`connection-${phase.id}`}
                  d={getConnectionPath(phase, nextPhase)}
                  fill="none"
                  stroke={isActive ? currentPhase?.color : "#D1D5DB"}
                  strokeWidth={isActive ? "3" : "2"}
                  opacity={isActive ? 1 : 0.5}
                  className="transition-all duration-500"
                  markerEnd="url(#arrowhead)"
                />
              )
            })}

          {/* Arrow Marker */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill={currentPhase?.color || "#6B7280"}
                className="transition-colors duration-500"
              />
            </marker>
          </defs>

          {/* Phase Nodes */}
          {phases.map((phase) => (
            <g key={phase.id}>
              {/* Outer Ring for Active Phase */}
              {activePhase === phase.id && (
                <circle
                  cx={phase.position.x}
                  cy={phase.position.y}
                  r="45"
                  fill="none"
                  stroke={phase.color}
                  strokeWidth="3"
                  opacity="0.3"
                  className="animate-pulse"
                />
              )}

              {/* Main Phase Circle */}
              <circle
                cx={phase.position.x}
                cy={phase.position.y}
                r="35"
                fill={phase.color}
                opacity={getPhaseOpacity(phase.id)}
                className="cursor-pointer transition-all duration-500 hover:opacity-100"
                style={{
                  transform: `scale(${getPhaseScale(phase.id)})`,
                  transformOrigin: `${phase.position.x}px ${phase.position.y}px`,
                }}
                onClick={() => setActivePhase(phase.id)}
              />

              {/* Phase Icon */}
              <text
                x={phase.position.x}
                y={phase.position.y + 5}
                textAnchor="middle"
                fontSize="20"
                className="cursor-pointer select-none"
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.icon}
              </text>

              {/* Phase Label */}
              <text
                x={phase.position.x}
                y={phase.position.y + 55}
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill={phase.color}
                className="cursor-pointer select-none"
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.name}
              </text>
            </g>
          ))}

          {/* Central Hub */}
          <circle cx="200" cy="200" r="25" fill="url(#centralGradient)" className="drop-shadow-lg" />

          <text x="200" y="205" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">
            INTEL
          </text>

          {/* Gradient Definitions */}
          <defs>
            <radialGradient id="centralGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#1E40AF" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Phase Information Panel */}
      {currentPhase && (
        <div
          className="bg-white border-l-4 p-4 rounded-r-lg shadow-sm transition-all duration-500"
          style={{ borderLeftColor: currentPhase.color }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{currentPhase.icon}</span>
            <h3 className="text-xl font-bold" style={{ color: currentPhase.color }}>
              {currentPhase.name}
            </h3>
          </div>
          <p className="text-gray-700">{currentPhase.description}</p>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <Button
          onClick={() => setIsAnimating(!isAnimating)}
          variant={isAnimating ? "destructive" : "default"}
          size="sm"
        >
          {isAnimating ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isAnimating ? "Pause" : "Auto Play"}
        </Button>

        <Button
          onClick={() => {
            setActivePhase("direction")
            setIsAnimating(false)
          }}
          variant="outline"
          size="sm"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Speed:</label>
          <select
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
            className="px-2 py-1 border rounded text-sm"
          >
            <option value={1000}>Fast</option>
            <option value={2000}>Normal</option>
            <option value={3000}>Slow</option>
          </select>
        </div>

        <Button onClick={() => setShowConnections(!showConnections)} variant="outline" size="sm">
          {showConnections ? "Hide" : "Show"} Connections
        </Button>
      </div>

      {/* Phase Navigation */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`p-2 rounded-lg text-xs font-medium transition-all duration-300 ${
              activePhase === phase.id
                ? "text-white shadow-lg transform scale-105"
                : "text-gray-600 bg-gray-100 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: activePhase === phase.id ? phase.color : undefined,
            }}
          >
            <div className="text-lg mb-1">{phase.icon}</div>
            {phase.name}
          </button>
        ))}
      </div>
    </div>
  )
}
