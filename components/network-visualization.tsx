"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface Node {
  id: string
  x: number
  y: number
  label: string
  degree?: number
  betweenness?: number
  closeness?: number
  eigenvector?: number
}

interface Edge {
  from: string
  to: string
}

interface NetworkVisualizationProps {
  title: string
  description: string
  nodes: Node[]
  edges: Edge[]
  highlightMetric?: "degree" | "betweenness" | "closeness" | "eigenvector"
}

export function NetworkVisualization({ title, description, nodes, edges, highlightMetric }: NetworkVisualizationProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedMetric, setSelectedMetric] = useState<string>(highlightMetric || "none")

  const getNodeColor = (node: Node) => {
    if (hoveredNode && hoveredNode !== node.id) {
      return "#e5e7eb" // Gray for non-hovered nodes
    }

    if (selectedMetric === "none") {
      return "#3b82f6" // Default blue
    }

    // Color based on centrality measure
    const value = (node[selectedMetric as keyof Node] as number) || 0
    const intensity = Math.min(value * 255, 255)
    return `rgb(${255 - intensity}, ${100}, ${intensity})`
  }

  const getNodeSize = (node: Node) => {
    if (selectedMetric === "none") return 8

    const value = (node[selectedMetric as keyof Node] as number) || 0
    return 6 + value * 10 // Scale node size based on centrality
  }

  const getMetricValue = (node: Node) => {
    if (selectedMetric === "none") return ""
    const value = node[selectedMetric as keyof Node] as number
    return value ? value.toFixed(2) : "0.00"
  }

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>

        {/* Metric Selection */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedMetric("none")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedMetric === "none" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Default View
          </button>
          <button
            onClick={() => setSelectedMetric("degree")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedMetric === "degree" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Degree Centrality
          </button>
          <button
            onClick={() => setSelectedMetric("betweenness")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedMetric === "betweenness"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Betweenness
          </button>
          <button
            onClick={() => setSelectedMetric("closeness")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedMetric === "closeness" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Closeness
          </button>
          <button
            onClick={() => setSelectedMetric("eigenvector")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedMetric === "eigenvector"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Eigenvector
          </button>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="relative">
        <svg width="100%" height="400" viewBox="0 0 400 300" className="border rounded">
          {/* Edges */}
          {edges.map((edge, index) => {
            const fromNode = nodes.find((n) => n.id === edge.from)
            const toNode = nodes.find((n) => n.id === edge.to)
            if (!fromNode || !toNode) return null

            const isHighlighted = hoveredNode === edge.from || hoveredNode === edge.to

            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isHighlighted ? "#3b82f6" : "#d1d5db"}
                strokeWidth={isHighlighted ? 2 : 1}
                className="transition-all duration-200"
              />
            )
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={getNodeSize(node)}
                fill={getNodeColor(node)}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-200 hover:stroke-gray-400"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              />

              {/* Node Labels */}
              <text
                x={node.x}
                y={node.y - getNodeSize(node) - 5}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700 dark:fill-gray-300"
                pointerEvents="none"
              >
                {node.label}
              </text>

              {/* Metric Values */}
              {selectedMetric !== "none" && (
                <text
                  x={node.x}
                  y={node.y + getNodeSize(node) + 15}
                  textAnchor="middle"
                  className="text-xs fill-blue-600 dark:fill-blue-400 font-mono"
                  pointerEvents="none"
                >
                  {getMetricValue(node)}
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Legend */}
        {selectedMetric !== "none" && (
          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded text-sm">
            <div className="font-medium mb-2">
              {selectedMetric === "degree" && "Degree Centrality: Number of direct connections"}
              {selectedMetric === "betweenness" && "Betweenness Centrality: How often a node lies on shortest paths"}
              {selectedMetric === "closeness" && "Closeness Centrality: How close a node is to all other nodes"}
              {selectedMetric === "eigenvector" &&
                "Eigenvector Centrality: Influence based on connections to influential nodes"}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>High Value</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Low Value</span>
              </div>
              <div>Node size and color intensity represent centrality values</div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
