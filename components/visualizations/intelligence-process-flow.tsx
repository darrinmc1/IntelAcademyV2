"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface ProcessNode {
  id: string
  name: string
  type: "input" | "process" | "decision" | "output"
  description: string
  duration: string
  stakeholders: string[]
  x?: number
  y?: number
}

interface ProcessLink {
  source: string
  target: string
  label: string
  condition?: string
}

const IntelligenceProcessFlow: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<ProcessNode | null>(null)
  const [animationStep, setAnimationStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 })

  // Intelligence cycle process data
  const processData = {
    nodes: [
      {
        id: "requirements",
        name: "Planning & Direction",
        type: "input" as const,
        description: "Identify intelligence requirements and establish collection priorities",
        duration: "1-2 days",
        stakeholders: ["Intelligence Officers", "Decision Makers", "Analysts"],
      },
      {
        id: "collection",
        name: "Collection",
        type: "process" as const,
        description: "Gather raw information from various sources",
        duration: "1-30 days",
        stakeholders: ["Collection Officers", "Technical Specialists", "Field Agents"],
      },
      {
        id: "processing",
        name: "Processing",
        type: "process" as const,
        description: "Convert raw data into usable format",
        duration: "2-5 days",
        stakeholders: ["Data Analysts", "Technical Staff", "Linguists"],
      },
      {
        id: "quality_check",
        name: "Quality Assessment",
        type: "decision" as const,
        description: "Evaluate data quality and reliability",
        duration: "1 day",
        stakeholders: ["Quality Assurance", "Senior Analysts"],
      },
      {
        id: "analysis",
        name: "Analysis & Production",
        type: "process" as const,
        description: "Analyze processed information and create intelligence products",
        duration: "3-10 days",
        stakeholders: ["Intelligence Analysts", "Subject Matter Experts", "Editors"],
      },
      {
        id: "review",
        name: "Review & Validation",
        type: "decision" as const,
        description: "Review analysis for accuracy and completeness",
        duration: "1-2 days",
        stakeholders: ["Senior Analysts", "Division Chiefs", "Quality Control"],
      },
      {
        id: "dissemination",
        name: "Dissemination",
        type: "output" as const,
        description: "Distribute intelligence products to end users",
        duration: "1 day",
        stakeholders: ["Distribution Officers", "Security Personnel", "End Users"],
      },
      {
        id: "feedback",
        name: "Feedback & Evaluation",
        type: "process" as const,
        description: "Collect feedback and evaluate effectiveness",
        duration: "Ongoing",
        stakeholders: ["End Users", "Intelligence Officers", "Analysts"],
      },
    ],
    links: [
      { source: "requirements", target: "collection", label: "Collection Plan" },
      { source: "collection", target: "processing", label: "Raw Data" },
      { source: "processing", target: "quality_check", label: "Processed Data" },
      { source: "quality_check", target: "analysis", label: "Approved", condition: "Quality OK" },
      { source: "quality_check", target: "collection", label: "Rejected", condition: "Quality Issues" },
      { source: "analysis", target: "review", label: "Draft Product" },
      { source: "review", target: "dissemination", label: "Approved", condition: "Review Passed" },
      { source: "review", target: "analysis", label: "Revisions", condition: "Needs Changes" },
      { source: "dissemination", target: "feedback", label: "Intelligence Product" },
      { source: "feedback", target: "requirements", label: "New Requirements" },
    ],
  }

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement
      if (container) {
        setDimensions({
          width: Math.min(container.clientWidth, 1200),
          height: Math.min(container.clientHeight || 600, 800),
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startAnimation = () => {
    setIsAnimating(true)
    setAnimationStep(0)

    const interval = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev >= processData.links.length - 1) {
          clearInterval(interval)
          setIsAnimating(false)
          return 0
        }
        return prev + 1
      })
    }, 1500)
  }

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const margin = { top: 60, right: 40, bottom: 40, left: 40 }
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

    // Define positions for nodes in a circular flow
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 3

    const nodePositions = processData.nodes.map((node, i) => {
      const angle = (i / processData.nodes.length) * 2 * Math.PI - Math.PI / 2
      return {
        ...node,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      }
    })

    // Node type styling
    const nodeStyles = {
      input: { fill: "#10b981", stroke: "#059669", shape: "circle" },
      process: { fill: "#3b82f6", stroke: "#2563eb", shape: "rect" },
      decision: { fill: "#f59e0b", stroke: "#d97706", shape: "diamond" },
      output: { fill: "#ef4444", stroke: "#dc2626", shape: "circle" },
    }

    // Create links
    const links = g.selectAll(".link").data(processData.links).enter().append("g").attr("class", "link")

    // Draw link paths
    links
      .append("path")
      .attr("d", (d) => {
        const sourceNode = nodePositions.find((n) => n.id === d.source)
        const targetNode = nodePositions.find((n) => n.id === d.target)
        if (!sourceNode || !targetNode) return ""

        // Create curved path
        const dx = targetNode.x - sourceNode.x
        const dy = targetNode.y - sourceNode.y
        const dr = Math.sqrt(dx * dx + dy * dy) * 0.3

        return `M${sourceNode.x},${sourceNode.y}A${dr},${dr} 0 0,1 ${targetNode.x},${targetNode.y}`
      })
      .attr("fill", "none")
      .attr("stroke", (d) => (d.condition ? "#f59e0b" : "#6b7280"))
      .attr("stroke-width", 2)
      .attr("marker-end", "url(#arrowhead)")
      .attr("opacity", 0.7)

    // Add link labels
    links
      .append("text")
      .attr("x", (d) => {
        const sourceNode = nodePositions.find((n) => n.id === d.source)
        const targetNode = nodePositions.find((n) => n.id === d.target)
        if (!sourceNode || !targetNode) return 0
        return (sourceNode.x + targetNode.x) / 2
      })
      .attr("y", (d) => {
        const sourceNode = nodePositions.find((n) => n.id === d.source)
        const targetNode = nodePositions.find((n) => n.id === d.target)
        if (!sourceNode || !targetNode) return 0
        return (sourceNode.y + targetNode.y) / 2 - 5
      })
      .attr("text-anchor", "middle")
      .style("font-size", "10px")
      .style("fill", "#374151")
      .style("font-weight", "500")
      .text((d) => d.label)

    // Define arrow marker
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-0 -5 10 10")
      .attr("refX", 8)
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .append("path")
      .attr("d", "M 0,-5 L 10 ,0 L 0,5")
      .attr("fill", "#6b7280")

    // Create nodes
    const nodes = g
      .selectAll(".node")
      .data(nodePositions)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .style("cursor", "pointer")
      .on("click", (event, d) => setSelectedNode(d))
      .on("mouseover", function (event, d) {
        d3.select(this).select("rect, circle, polygon").transition().duration(200).attr("transform", "scale(1.1)")
      })
      .on("mouseout", function () {
        d3.select(this).select("rect, circle, polygon").transition().duration(200).attr("transform", "scale(1)")
      })

    // Draw node shapes based on type
    nodes.each(function (d) {
      const node = d3.select(this)
      const style = nodeStyles[d.type]

      if (d.type === "decision") {
        // Diamond shape for decisions
        node
          .append("polygon")
          .attr("points", "-25,0 0,-15 25,0 0,15")
          .attr("fill", style.fill)
          .attr("stroke", style.stroke)
          .attr("stroke-width", 2)
      } else if (d.type === "process") {
        // Rectangle for processes
        node
          .append("rect")
          .attr("x", -30)
          .attr("y", -15)
          .attr("width", 60)
          .attr("height", 30)
          .attr("rx", 5)
          .attr("fill", style.fill)
          .attr("stroke", style.stroke)
          .attr("stroke-width", 2)
      } else {
        // Circle for input/output
        node
          .append("circle")
          .attr("r", 20)
          .attr("fill", style.fill)
          .attr("stroke", style.stroke)
          .attr("stroke-width", 2)
      }
    })

    // Add node labels
    nodes
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("fill", "white")
      .style("pointer-events", "none")
      .each(function (d) {
        const text = d3.select(this)
        const words = d.name.split(" ")
        if (words.length > 1) {
          text.append("tspan").attr("x", 0).attr("dy", "-0.3em").text(words[0])
          text.append("tspan").attr("x", 0).attr("dy", "1em").text(words.slice(1).join(" "))
        } else {
          text.text(d.name)
        }
      })

    // Animation highlighting
    if (isAnimating && animationStep < processData.links.length) {
      const currentLink = processData.links[animationStep]

      // Highlight current link
      links
        .selectAll("path")
        .attr("stroke", (d) => (d === currentLink ? "#ef4444" : d.condition ? "#f59e0b" : "#6b7280"))
        .attr("stroke-width", (d) => (d === currentLink ? 4 : 2))
        .attr("opacity", (d) => (d === currentLink ? 1 : 0.3))

      // Highlight current nodes
      nodes
        .selectAll("rect, circle, polygon")
        .attr("stroke-width", (d) => (d.id === currentLink.source || d.id === currentLink.target ? 4 : 2))
        .attr("opacity", (d) => (d.id === currentLink.source || d.id === currentLink.target ? 1 : 0.5))
    } else {
      // Reset highlighting
      links
        .selectAll("path")
        .attr("stroke", (d) => (d.condition ? "#f59e0b" : "#6b7280"))
        .attr("stroke-width", 2)
        .attr("opacity", 0.7)

      nodes.selectAll("rect, circle, polygon").attr("stroke-width", 2).attr("opacity", 1)
    }

    // Add title
    svg
      .append("text")
      .attr("x", dimensions.width / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#1f2937")
      .text("Intelligence Cycle Process Flow")

    // Add legend
    const legend = svg.append("g").attr("transform", `translate(20, ${dimensions.height - 100})`)

    const legendData = [
      { type: "input", label: "Input/Start", color: nodeStyles.input.fill },
      { type: "process", label: "Process", color: nodeStyles.process.fill },
      { type: "decision", label: "Decision", color: nodeStyles.decision.fill },
      { type: "output", label: "Output/End", color: nodeStyles.output.fill },
    ]

    const legendItems = legend
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(${i * 120}, 0)`)

    legendItems
      .append("circle")
      .attr("r", 6)
      .attr("fill", (d) => d.color)

    legendItems
      .append("text")
      .attr("x", 12)
      .attr("y", 3)
      .style("font-size", "11px")
      .style("fill", "#374151")
      .text((d) => d.label)
  }, [dimensions, animationStep, isAnimating])

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligence Process Flow</h3>
          <p className="text-gray-600 text-sm">
            Interactive flowchart showing the complete intelligence cycle process. Click on nodes to see detailed
            information about each step.
          </p>
        </div>

        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className={`px-4 py-2 text-sm rounded ${
            isAnimating ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isAnimating ? "Animating..." : "Animate Flow"}
        </button>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <svg
            ref={svgRef}
            width={dimensions.width}
            height={dimensions.height}
            className="border border-gray-200 rounded"
          />
        </div>

        {selectedNode && (
          <div className="w-80 bg-gray-50 rounded-lg p-4">
            <h4 className="font-bold text-lg text-gray-900 mb-2">{selectedNode.name}</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Type:</span>
                <span className="ml-2 text-gray-600 capitalize">{selectedNode.type}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Duration:</span>
                <span className="ml-2 text-gray-600">{selectedNode.duration}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Description:</span>
                <p className="mt-1 text-gray-600">{selectedNode.description}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Key Stakeholders:</span>
                <ul className="mt-1 ml-4 list-disc text-gray-600">
                  {selectedNode.stakeholders.map((stakeholder, index) => (
                    <li key={index}>{stakeholder}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>
          <strong>How to use:</strong> Click on any process step to see detailed information. Use the "Animate Flow"
          button to see how data moves through the intelligence cycle. Orange arrows indicate conditional paths based on
          quality checks.
        </p>
      </div>
    </div>
  )
}

export default IntelligenceProcessFlow
