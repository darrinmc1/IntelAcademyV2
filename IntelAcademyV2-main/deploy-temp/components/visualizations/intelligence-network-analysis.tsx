"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface NetworkNode {
  id: string
  name: string
  type: "person" | "organization" | "location" | "event" | "communication"
  importance: number
  attributes: Record<string, any>
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
}

interface NetworkLink {
  source: string
  target: string
  relationship: string
  strength: number
  frequency: number
  attributes: Record<string, any>
}

const IntelligenceNetworkAnalysis: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null)
  const [selectedLink, setSelectedLink] = useState<NetworkLink | null>(null)
  const [filterType, setFilterType] = useState<string>("all")
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })
  const networkData = {
    nodes: [
      {
        id: "person_1",
        name: "Ahmed Hassan",
        type: "person" as const,
        importance: 0.9,
        attributes: { role: "Suspected Leader", location: "Cairo", status: "Active" },
      },
      {
        id: "person_2",
        name: "Maria Santos",
        type: "person" as const,
        importance: 0.7,
        attributes: { role: "Financial Coordinator", location: "Madrid", status: "Under Surveillance" },
      },
      {
        id: "person_3",
        name: "Viktor Petrov",
        type: "person" as const,
        importance: 0.6,
        attributes: { role: "Communications", location: "Moscow", status: "Active" },
      },
      {
        id: "org_1",
        name: "Shell Company Alpha",
        type: "organization" as const,
        importance: 0.8,
        attributes: { type: "Financial", established: "2019", status: "Operational" },
      },
      {
        id: "org_2",
        name: "Logistics Corp",
        type: "organization" as const,
        importance: 0.5,
        attributes: { type: "Transportation", established: "2020", status: "Dissolved" },
      },
      {
        id: "loc_1",
        name: "Safe House Berlin",
        type: "location" as const,
        importance: 0.7,
        attributes: { type: "Safe House", coordinates: "52.5200° N, 13.4050° E", status: "Compromised" },
      },
      {
        id: "loc_2",
        name: "Port of Rotterdam",
        type: "location" as const,
        importance: 0.6,
        attributes: { type: "Transit Point", coordinates: "51.9244° N, 4.4777° E", status: "Monitored" },
      },
      {
        id: "event_1",
        name: "Meeting Jan 2024",
        type: "event" as const,
        importance: 0.8,
        attributes: { date: "2024-01-15", type: "Coordination Meeting", participants: 4 },
      },
      {
        id: "comm_1",
        name: "Encrypted Channel A",
        type: "communication" as const,
        importance: 0.9,
        attributes: { type: "Encrypted Messaging", frequency: "Daily", status: "Intercepted" },
      },
      {
        id: "comm_2",
        name: "Financial Transfer",
        type: "communication" as const,
        importance: 0.7,
        attributes: { type: "Bank Transfer", amount: "$50,000", status: "Traced" },
      },
    ],
    links: [
      {
        source: "person_1",
        target: "org_1",
        relationship: "Controls",
        strength: 0.9,
        frequency: 10,
        attributes: { since: "2019", evidence: "Financial records" },
      },
      {
        source: "person_2",
        target: "org_1",
        relationship: "Manages",
        strength: 0.8,
        frequency: 15,
        attributes: { since: "2020", evidence: "Communication intercepts" },
      },
      {
        source: "person_1",
        target: "person_3",
        relationship: "Communicates",
        strength: 0.7,
        frequency: 8,
        attributes: { method: "Encrypted messaging", evidence: "SIGINT" },
      },
      {
        source: "person_1",
        target: "loc_1",
        relationship: "Visits",
        strength: 0.6,
        frequency: 5,
        attributes: { last_visit: "2024-01-10", evidence: "Surveillance" },
      },
      {
        source: "org_1",
        target: "comm_2",
        relationship: "Transfers",
        strength: 0.8,
        frequency: 12,
        attributes: { amount: "$50,000", evidence: "Financial intelligence" },
      },
      {
        source: "person_2",
        target: "loc_2",
        relationship: "Coordinates",
        strength: 0.7,
        frequency: 6,
        attributes: { role: "Logistics", evidence: "Travel records" },
      },
      {
        source: "event_1",
        target: "person_1",
        relationship: "Attended",
        strength: 0.9,
        frequency: 1,
        attributes: { role: "Organizer", evidence: "Surveillance footage" },
      },
      {
        source: "event_1",
        target: "person_2",
        relationship: "Attended",
        strength: 0.8,
        frequency: 1,
        attributes: { role: "Participant", evidence: "Communication metadata" },
      },
      {
        source: "comm_1",
        target: "person_1",
        relationship: "Uses",
        strength: 0.9,
        frequency: 20,
        attributes: { frequency: "Daily", evidence: "Traffic analysis" },
      },
      {
        source: "comm_1",
        target: "person_3",
        relationship: "Uses",
        strength: 0.8,
        frequency: 18,
        attributes: { frequency: "Daily", evidence: "Traffic analysis" },
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

    // Filter data based on selected type
    const filteredNodes =
      filterType === "all" ? networkData.nodes : networkData.nodes.filter((n) => n.type === filterType)

    const filteredNodeIds = new Set(filteredNodes.map((n) => n.id))
    const filteredLinks = networkData.links.filter(
      (l) => filteredNodeIds.has(l.source) && filteredNodeIds.has(l.target),
    )

    // Color scales
    const nodeColors = {
      person: "#3b82f6",
      organization: "#10b981",
      location: "#f59e0b",
      event: "#ef4444",
      communication: "#8b5cf6",
    }

    const linkColorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 1])

    // Create force simulation
    const simulation = d3
      .forceSimulation(filteredNodes)
      .force(
        "link",
        d3
          .forceLink(filteredLinks)
          .id((d: any) => d.id)
          .distance(100),
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30))

    // Create links
    const links = g
      .append("g")
      .selectAll("line")
      .data(filteredLinks)
      .enter()
      .append("line")
      .attr("stroke", (d) => linkColorScale(d.strength))
      .attr("stroke-width", (d) => Math.max(1, d.frequency / 3))
      .attr("stroke-opacity", 0.6)
      .style("cursor", "pointer")
      .on("click", (event, d) => setSelectedLink(d))
      .on("mouseover", function (event, d) {
        d3.select(this)
          .attr("stroke-opacity", 1)
          .attr("stroke-width", Math.max(3, d.frequency / 2))
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .attr("stroke-opacity", 0.6)
          .attr("stroke-width", Math.max(1, d.frequency / 3))
      })

    // Create link labels
    const linkLabels = g
      .append("g")
      .selectAll("text")
      .data(filteredLinks)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#374151")
      .attr("font-weight", "500")
      .text((d) => d.relationship)
      .style("pointer-events", "none")

    // Create nodes
    const nodes = g
      .append("g")
      .selectAll("circle")
      .data(filteredNodes)
      .enter()
      .append("circle")
      .attr("r", (d) => 10 + d.importance * 15)
      .attr("fill", (d) => nodeColors[d.type])
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("click", (event, d) => setSelectedNode(d))
      .on("mouseover", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", (10 + d.importance * 15) * 1.2)
          .attr("stroke-width", 4)
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 10 + d.importance * 15)
          .attr("stroke-width", 2)
      })
      .call(
        d3
          .drag<SVGCircleElement, NetworkNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on("drag", (event, d) => {
            d.fx = event.x
            d.fy = event.y
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
          }),
      )

    // Create node labels
    const nodeLabels = g
      .append("g")
      .selectAll("text")
      .data(filteredNodes)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .text((d) => (d.name.length > 12 ? d.name.substring(0, 12) + "..." : d.name))
      .style("pointer-events", "none")

    // Update positions on simulation tick
    simulation.on("tick", () => {
      links
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y)

      linkLabels
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2)

      nodes.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!)

      nodeLabels.attr("x", (d) => d.x!).attr("y", (d) => d.y!)
    })

    // Add title
    svg
      .append("text")
      .attr("x", dimensions.width / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#1f2937")
      .text("Intelligence Network Analysis")

    // Add legend
    const legend = svg.append("g").attr("transform", `translate(20, ${dimensions.height - 140})`)

    const legendData = Object.entries(nodeColors).map(([type, color]) => ({ type, color }))

    const legendItems = legend
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`)

    legendItems
      .append("circle")
      .attr("r", 8)
      .attr("fill", (d) => d.color)

    legendItems
      .append("text")
      .attr("x", 15)
      .attr("y", 3)
      .style("font-size", "11px")
      .style("fill", "#374151")
      .style("text-transform", "capitalize")
      .text((d) => d.type)

    return () => {
      simulation.stop()
    }
  }, [filterType, dimensions])

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligence Network Analysis</h3>
          <p className="text-gray-600 text-sm">
            Interactive network graph showing relationships between people, organizations, locations, events, and
            communications. Drag nodes to explore connections and click for detailed information.
          </p>
        </div>

        <div className="flex gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="person">People</option>
            <option value="organization">Organizations</option>
            <option value="location">Locations</option>
            <option value="event">Events</option>
            <option value="communication">Communications</option>
          </select>
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

        <div className="w-80 space-y-4">
          {selectedNode && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">{selectedNode.name}</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Type:</span>
                  <span className="ml-2 text-gray-600 capitalize">{selectedNode.type}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Importance:</span>
                  <span className="ml-2 text-gray-600">{(selectedNode.importance * 100).toFixed(0)}%</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Attributes:</span>
                  <div className="mt-1 ml-2 space-y-1">
                    {Object.entries(selectedNode.attributes).map(([key, value]) => (
                      <div key={key} className="text-gray-600">
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLink && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Relationship</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Type:</span>
                  <span className="ml-2 text-gray-600">{selectedLink.relationship}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Strength:</span>
                  <span className="ml-2 text-gray-600">{(selectedLink.strength * 100).toFixed(0)}%</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Frequency:</span>
                  <span className="ml-2 text-gray-600">{selectedLink.frequency} interactions</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Details:</span>
                  <div className="mt-1 ml-2 space-y-1">
                    {Object.entries(selectedLink.attributes).map(([key, value]) => (
                      <div key={key} className="text-gray-600">
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>
          <strong>How to use:</strong> Drag nodes to rearrange the network layout. Click on nodes or links to see
          detailed information. Use the filter dropdown to focus on specific entity types. Node size indicates
          importance, and link thickness shows interaction frequency.
        </p>
      </div>
    </div>
  )
}

export default IntelligenceNetworkAnalysis
