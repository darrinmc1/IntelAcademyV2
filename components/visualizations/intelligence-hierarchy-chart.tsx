"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface HierarchyNode {
  id: string
  name: string
  title: string
  level: number
  department: string
  clearance: string
  responsibilities: string[]
  children?: HierarchyNode[]
}

const IntelligenceHierarchyChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<HierarchyNode | null>(null)
  const [viewMode, setViewMode] = useState<"tree" | "radial">("tree")
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })

  // Sample organizational hierarchy data
  const hierarchyData: HierarchyNode = {
    id: "director",
    name: "Director of Intelligence",
    title: "Director",
    level: 1,
    department: "Executive",
    clearance: "Top Secret/SCI",
    responsibilities: ["Strategic oversight", "Policy direction", "Inter-agency coordination"],
    children: [
      {
        id: "deputy_analysis",
        name: "Deputy Director - Analysis",
        title: "Deputy Director",
        level: 2,
        department: "Analysis",
        clearance: "Top Secret/SCI",
        responsibilities: ["Analysis oversight", "Product quality", "Analytic standards"],
        children: [
          {
            id: "strategic_analysis",
            name: "Strategic Analysis Division",
            title: "Division Chief",
            level: 3,
            department: "Strategic Analysis",
            clearance: "Top Secret",
            responsibilities: ["Long-term assessments", "Strategic forecasting", "Policy support"],
            children: [
              {
                id: "political_analyst",
                name: "Political Intelligence Team",
                title: "Senior Analyst",
                level: 4,
                department: "Political Analysis",
                clearance: "Secret",
                responsibilities: ["Political analysis", "Government stability", "Election monitoring"],
              },
              {
                id: "economic_analyst",
                name: "Economic Intelligence Team",
                title: "Senior Analyst",
                level: 4,
                department: "Economic Analysis",
                clearance: "Secret",
                responsibilities: ["Economic trends", "Trade analysis", "Financial intelligence"],
              },
            ],
          },
          {
            id: "tactical_analysis",
            name: "Tactical Analysis Division",
            title: "Division Chief",
            level: 3,
            department: "Tactical Analysis",
            clearance: "Top Secret",
            responsibilities: ["Immediate threats", "Operational support", "Crisis response"],
            children: [
              {
                id: "threat_analyst",
                name: "Threat Assessment Team",
                title: "Senior Analyst",
                level: 4,
                department: "Threat Analysis",
                clearance: "Top Secret",
                responsibilities: ["Threat identification", "Risk assessment", "Warning indicators"],
              },
              {
                id: "tactical_support",
                name: "Tactical Support Team",
                title: "Analyst",
                level: 4,
                department: "Tactical Support",
                clearance: "Secret",
                responsibilities: ["Field support", "Real-time analysis", "Operational briefings"],
              },
            ],
          },
        ],
      },
      {
        id: "deputy_collection",
        name: "Deputy Director - Collection",
        title: "Deputy Director",
        level: 2,
        department: "Collection",
        clearance: "Top Secret/SCI",
        responsibilities: ["Collection oversight", "Source management", "Collection priorities"],
        children: [
          {
            id: "humint_division",
            name: "HUMINT Division",
            title: "Division Chief",
            level: 3,
            department: "HUMINT",
            clearance: "Top Secret/SCI",
            responsibilities: ["Human source operations", "Case officer management", "Source validation"],
            children: [
              {
                id: "case_officers",
                name: "Case Officer Team",
                title: "Case Officer",
                level: 4,
                department: "Field Operations",
                clearance: "Top Secret",
                responsibilities: ["Source recruitment", "Intelligence collection", "Source security"],
              },
            ],
          },
          {
            id: "sigint_division",
            name: "SIGINT Division",
            title: "Division Chief",
            level: 3,
            department: "SIGINT",
            clearance: "Top Secret/SCI",
            responsibilities: ["Signals intelligence", "Technical collection", "Communications analysis"],
            children: [
              {
                id: "technical_team",
                name: "Technical Collection Team",
                title: "Technical Specialist",
                level: 4,
                department: "Technical Operations",
                clearance: "Top Secret/SCI",
                responsibilities: ["Signal interception", "Technical analysis", "Equipment maintenance"],
              },
            ],
          },
          {
            id: "osint_division",
            name: "OSINT Division",
            title: "Division Chief",
            level: 3,
            department: "OSINT",
            clearance: "Secret",
            responsibilities: ["Open source collection", "Media monitoring", "Public information analysis"],
            children: [
              {
                id: "osint_analysts",
                name: "OSINT Analyst Team",
                title: "OSINT Analyst",
                level: 4,
                department: "Open Source",
                clearance: "Secret",
                responsibilities: ["Social media monitoring", "News analysis", "Public records research"],
              },
            ],
          },
        ],
      },
      {
        id: "deputy_operations",
        name: "Deputy Director - Operations",
        title: "Deputy Director",
        level: 2,
        department: "Operations",
        clearance: "Top Secret/SCI",
        responsibilities: ["Operational oversight", "Mission planning", "Resource allocation"],
        children: [
          {
            id: "counterintel",
            name: "Counterintelligence Division",
            title: "Division Chief",
            level: 3,
            department: "Counterintelligence",
            clearance: "Top Secret/SCI",
            responsibilities: ["CI investigations", "Security assessments", "Threat mitigation"],
            children: [
              {
                id: "ci_analysts",
                name: "CI Analyst Team",
                title: "CI Analyst",
                level: 4,
                department: "CI Analysis",
                clearance: "Top Secret",
                responsibilities: ["Threat analysis", "Security investigations", "Risk assessment"],
              },
            ],
          },
        ],
      },
    ],
  }

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement
      if (container) {
        setDimensions({
          width: Math.min(container.clientWidth, 1200),
          height: Math.min(container.clientHeight || 700, 900),
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const margin = { top: 40, right: 40, bottom: 40, left: 40 }
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

    // Create hierarchy
    const root = d3.hierarchy(hierarchyData)

    // Color scale based on level
    const colorScale = d3
      .scaleOrdinal()
      .domain(["1", "2", "3", "4"])
      .range(["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd"])

    // Clearance level colors
    const clearanceColors = {
      "Top Secret/SCI": "#dc2626",
      "Top Secret": "#ea580c",
      Secret: "#d97706",
      Confidential: "#65a30d",
    }

    if (viewMode === "tree") {
      // Tree layout
      const treeLayout = d3.tree<HierarchyNode>().size([height, width - 200])

      const treeRoot = treeLayout(root)

      // Draw links
      g.selectAll(".link")
        .data(treeRoot.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr(
          "d",
          d3
            .linkHorizontal()
            .x((d) => d.y)
            .y((d) => d.x),
        )
        .attr("fill", "none")
        .attr("stroke", "#94a3b8")
        .attr("stroke-width", 2)

      // Draw nodes
      const nodes = g
        .selectAll(".node")
        .data(treeRoot.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.y},${d.x})`)
        .style("cursor", "pointer")
        .on("click", (event, d) => setSelectedNode(d.data))

      // Node circles
      nodes
        .append("circle")
        .attr("r", 8)
        .attr("fill", (d) => colorScale(d.data.level.toString()))
        .attr("stroke", (d) => clearanceColors[d.data.clearance as keyof typeof clearanceColors] || "#6b7280")
        .attr("stroke-width", 3)
        .on("mouseover", function () {
          d3.select(this).attr("r", 12)
        })
        .on("mouseout", function () {
          d3.select(this).attr("r", 8)
        })

      // Node labels
      nodes
        .append("text")
        .attr("dx", (d) => (d.children ? -15 : 15))
        .attr("dy", 3)
        .attr("text-anchor", (d) => (d.children ? "end" : "start"))
        .text((d) => d.data.name)
        .style("font-size", "12px")
        .style("font-weight", "500")
        .style("fill", "#374151")

      // Department labels
      nodes
        .append("text")
        .attr("dx", (d) => (d.children ? -15 : 15))
        .attr("dy", 18)
        .attr("text-anchor", (d) => (d.children ? "end" : "start"))
        .text((d) => d.data.department)
        .style("font-size", "10px")
        .style("fill", "#6b7280")
        .style("font-style", "italic")
    } else {
      // Radial layout
      const radius = Math.min(width, height) / 2 - 50
      const radialTree = d3
        .tree<HierarchyNode>()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)

      const radialRoot = radialTree(root)

      // Center the radial tree
      const centerG = g.append("g").attr("transform", `translate(${width / 2},${height / 2})`)

      // Draw links
      centerG
        .selectAll(".link")
        .data(radialRoot.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr(
          "d",
          d3
            .linkRadial<any, any>()
            .angle((d) => d.x)
            .radius((d) => d.y),
        )
        .attr("fill", "none")
        .attr("stroke", "#94a3b8")
        .attr("stroke-width", 2)

      // Draw nodes
      const nodes = centerG
        .selectAll(".node")
        .data(radialRoot.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr(
          "transform",
          (d) => `
          rotate(${(d.x * 180) / Math.PI - 90}) 
          translate(${d.y},0)
        `,
        )
        .style("cursor", "pointer")
        .on("click", (event, d) => setSelectedNode(d.data))

      // Node circles
      nodes
        .append("circle")
        .attr("r", 6)
        .attr("fill", (d) => colorScale(d.data.level.toString()))
        .attr("stroke", (d) => clearanceColors[d.data.clearance as keyof typeof clearanceColors] || "#6b7280")
        .attr("stroke-width", 2)

      // Node labels
      nodes
        .append("text")
        .attr("dy", "0.31em")
        .attr("x", (d) => (d.x < Math.PI === !d.children ? 6 : -6))
        .attr("text-anchor", (d) => (d.x < Math.PI === !d.children ? "start" : "end"))
        .attr("transform", (d) => (d.x >= Math.PI ? "rotate(180)" : null))
        .text((d) => d.data.name)
        .style("font-size", "10px")
        .style("font-weight", "500")
        .style("fill", "#374151")
    }

    // Add title
    svg
      .append("text")
      .attr("x", dimensions.width / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#1f2937")
      .text(`Intelligence Organization Structure - ${viewMode === "tree" ? "Tree View" : "Radial View"}`)

    // Add legend
    const legend = svg.append("g").attr("transform", `translate(20, ${dimensions.height - 120})`)

    const legendData = [
      { level: "1", label: "Director Level", color: colorScale("1") },
      { level: "2", label: "Deputy Director", color: colorScale("2") },
      { level: "3", label: "Division Chief", color: colorScale("3") },
      { level: "4", label: "Team/Analyst", color: colorScale("4") },
    ]

    const legendItems = legend
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`)

    legendItems
      .append("circle")
      .attr("r", 6)
      .attr("fill", (d) => d.color)

    legendItems
      .append("text")
      .attr("x", 15)
      .attr("y", 3)
      .style("font-size", "11px")
      .style("fill", "#374151")
      .text((d) => d.label)

    // Clearance legend
    const clearanceLegend = svg.append("g").attr("transform", `translate(200, ${dimensions.height - 120})`)

    clearanceLegend
      .append("text")
      .attr("x", 0)
      .attr("y", -10)
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("fill", "#374151")
      .text("Clearance Levels:")

    const clearanceData = Object.entries(clearanceColors).map(([level, color]) => ({ level, color }))

    const clearanceItems = clearanceLegend
      .selectAll(".clearance-item")
      .data(clearanceData)
      .enter()
      .append("g")
      .attr("class", "clearance-item")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`)

    clearanceItems
      .append("rect")
      .attr("width", 12)
      .attr("height", 3)
      .attr("fill", (d) => d.color)

    clearanceItems
      .append("text")
      .attr("x", 18)
      .attr("y", 8)
      .style("font-size", "10px")
      .style("fill", "#374151")
      .text((d) => d.level)
  }, [hierarchyData, viewMode, dimensions])

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligence Organization Hierarchy</h3>
          <p className="text-gray-600 text-sm">
            Interactive organizational chart showing the structure of an intelligence agency. Click on nodes to see
            detailed information about roles and responsibilities.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("tree")}
            className={`px-3 py-1 text-sm rounded ${
              viewMode === "tree" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Tree View
          </button>
          <button
            onClick={() => setViewMode("radial")}
            className={`px-3 py-1 text-sm rounded ${
              viewMode === "radial" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Radial View
          </button>
        </div>
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
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-gray-700">Title:</span>
                <span className="ml-2 text-gray-600">{selectedNode.title}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Department:</span>
                <span className="ml-2 text-gray-600">{selectedNode.department}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Clearance:</span>
                <span className="ml-2 text-gray-600">{selectedNode.clearance}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Level:</span>
                <span className="ml-2 text-gray-600">{selectedNode.level}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Key Responsibilities:</span>
                <ul className="mt-1 ml-4 list-disc text-gray-600">
                  {selectedNode.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>
          <strong>How to use:</strong> Click on any node to see detailed role information. Switch between tree and
          radial views using the buttons above. Node border colors indicate security clearance levels.
        </p>
      </div>
    </div>
  )
}

export default IntelligenceHierarchyChart
