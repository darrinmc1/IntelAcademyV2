"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { sankey, sankeyLinkHorizontal } from "d3-sankey"

interface SankeyNode {
  id: string
  name: string
  category: string
  value?: number
}

interface SankeyLink {
  source: string
  target: string
  value: number
  type: string
}

interface SankeyData {
  nodes: SankeyNode[]
  links: SankeyLink[]
}

const IntelligenceSankeyDiagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  // Sample data representing intelligence data flow
  const data: SankeyData = {
    nodes: [
      // Raw Data Sources
      { id: "social_media", name: "Social Media", category: "source" },
      { id: "news_feeds", name: "News Feeds", category: "source" },
      { id: "satellite_imagery", name: "Satellite Imagery", category: "source" },
      { id: "human_sources", name: "Human Sources", category: "source" },
      { id: "signals_intercept", name: "Signals Intercept", category: "source" },

      // Collection Systems
      { id: "osint_collection", name: "OSINT Collection", category: "collection" },
      { id: "humint_collection", name: "HUMINT Collection", category: "collection" },
      { id: "sigint_collection", name: "SIGINT Collection", category: "collection" },
      { id: "geoint_collection", name: "GEOINT Collection", category: "collection" },

      // Processing Systems
      { id: "data_fusion", name: "Data Fusion", category: "processing" },
      { id: "pattern_analysis", name: "Pattern Analysis", category: "processing" },
      { id: "correlation_engine", name: "Correlation Engine", category: "processing" },

      // Analysis Products
      { id: "threat_assessment", name: "Threat Assessment", category: "analysis" },
      { id: "situation_report", name: "Situation Report", category: "analysis" },
      { id: "intelligence_estimate", name: "Intelligence Estimate", category: "analysis" },

      // End Users
      { id: "policy_makers", name: "Policy Makers", category: "consumer" },
      { id: "military_commanders", name: "Military Commanders", category: "consumer" },
      { id: "law_enforcement", name: "Law Enforcement", category: "consumer" },
    ],
    links: [
      // Source to Collection
      { source: "social_media", target: "osint_collection", value: 30, type: "data_flow" },
      { source: "news_feeds", target: "osint_collection", value: 25, type: "data_flow" },
      { source: "satellite_imagery", target: "geoint_collection", value: 40, type: "data_flow" },
      { source: "human_sources", target: "humint_collection", value: 35, type: "data_flow" },
      { source: "signals_intercept", target: "sigint_collection", value: 45, type: "data_flow" },

      // Collection to Processing
      { source: "osint_collection", target: "data_fusion", value: 25, type: "processing_flow" },
      { source: "osint_collection", target: "pattern_analysis", value: 30, type: "processing_flow" },
      { source: "humint_collection", target: "correlation_engine", value: 35, type: "processing_flow" },
      { source: "sigint_collection", target: "data_fusion", value: 25, type: "processing_flow" },
      { source: "sigint_collection", target: "pattern_analysis", value: 20, type: "processing_flow" },
      { source: "geoint_collection", target: "correlation_engine", value: 40, type: "processing_flow" },

      // Processing to Analysis
      { source: "data_fusion", target: "threat_assessment", value: 30, type: "analysis_flow" },
      { source: "data_fusion", target: "situation_report", value: 20, type: "analysis_flow" },
      { source: "pattern_analysis", target: "intelligence_estimate", value: 25, type: "analysis_flow" },
      { source: "pattern_analysis", target: "threat_assessment", value: 25, type: "analysis_flow" },
      { source: "correlation_engine", target: "situation_report", value: 35, type: "analysis_flow" },
      { source: "correlation_engine", target: "intelligence_estimate", value: 40, type: "analysis_flow" },

      // Analysis to Consumers
      { source: "threat_assessment", target: "policy_makers", value: 25, type: "dissemination" },
      { source: "threat_assessment", target: "military_commanders", value: 30, type: "dissemination" },
      { source: "situation_report", target: "military_commanders", value: 35, type: "dissemination" },
      { source: "situation_report", target: "law_enforcement", value: 20, type: "dissemination" },
      { source: "intelligence_estimate", target: "policy_makers", value: 40, type: "dissemination" },
      { source: "intelligence_estimate", target: "law_enforcement", value: 25, type: "dissemination" },
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

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const margin = { top: 20, right: 20, bottom: 20, left: 20 }
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

    // Create sankey generator
    const sankeyGenerator = sankey<SankeyNode, SankeyLink>()
      .nodeId((d) => d.id)
      .nodeWidth(15)
      .nodePadding(10)
      .extent([
        [1, 1],
        [width - 1, height - 6],
      ])

    // Process data
    const graph = sankeyGenerator({
      nodes: data.nodes.map((d) => ({ ...d })),
      links: data.links.map((d) => ({ ...d })),
    })

    // Color scales
    const categoryColors = {
      source: "#3b82f6",
      collection: "#10b981",
      processing: "#f59e0b",
      analysis: "#ef4444",
      consumer: "#8b5cf6",
    }

    const linkColors = {
      data_flow: "#60a5fa",
      processing_flow: "#34d399",
      analysis_flow: "#fbbf24",
      dissemination: "#a78bfa",
    }

    // Draw links
    const links = g
      .append("g")
      .selectAll("path")
      .data(graph.links)
      .enter()
      .append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke", (d) => linkColors[d.type as keyof typeof linkColors] || "#999")
      .attr("stroke-width", (d) => Math.max(1, d.width || 0))
      .attr("fill", "none")
      .attr("opacity", 0.6)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 0.8)
        setSelectedFlow(`${d.source.name} → ${d.target.name}: ${d.value} units`)
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 0.6)
        setSelectedFlow(null)
      })

    // Draw nodes
    const nodes = g
      .append("g")
      .selectAll("rect")
      .data(graph.nodes)
      .enter()
      .append("rect")
      .attr("x", (d) => d.x0 || 0)
      .attr("y", (d) => d.y0 || 0)
      .attr("height", (d) => (d.y1 || 0) - (d.y0 || 0))
      .attr("width", (d) => (d.x1 || 0) - (d.x0 || 0))
      .attr("fill", (d) => categoryColors[d.category as keyof typeof categoryColors] || "#999")
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 0.8)

        // Highlight connected links
        links.attr("opacity", (link) => (link.source === d || link.target === d ? 0.8 : 0.2))
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 1)
        links.attr("opacity", 0.6)
      })

    // Add node labels
    g.append("g")
      .selectAll("text")
      .data(graph.nodes)
      .enter()
      .append("text")
      .attr("x", (d) => ((d.x0 || 0) < width / 2 ? (d.x1 || 0) + 6 : (d.x0 || 0) - 6))
      .attr("y", (d) => ((d.y1 || 0) + (d.y0 || 0)) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) => ((d.x0 || 0) < width / 2 ? "start" : "end"))
      .text((d) => d.name)
      .style("font-size", "12px")
      .style("font-weight", "500")
      .style("fill", "#374151")

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#1f2937")
      .text("Intelligence Data Flow - From Collection to Dissemination")

    // Add legend
    const legend = svg.append("g").attr("transform", `translate(20, ${height + 40})`)

    const legendData = [
      { category: "source", label: "Data Sources" },
      { category: "collection", label: "Collection Systems" },
      { category: "processing", label: "Processing" },
      { category: "analysis", label: "Analysis Products" },
      { category: "consumer", label: "End Users" },
    ]

    const legendItems = legend
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(${i * 140}, 0)`)

    legendItems
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", (d) => categoryColors[d.category as keyof typeof categoryColors])

    legendItems
      .append("text")
      .attr("x", 18)
      .attr("y", 6)
      .attr("dy", "0.35em")
      .style("font-size", "11px")
      .style("fill", "#374151")
      .text((d) => d.label)
  }, [data, dimensions])

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligence Data Flow Visualization</h3>
        <p className="text-gray-600 text-sm">
          Interactive Sankey diagram showing how raw data flows through intelligence systems to produce actionable
          intelligence. Hover over nodes and links to explore connections.
        </p>
      </div>

      {selectedFlow && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm font-medium text-blue-900">{selectedFlow}</p>
        </div>
      )}

      <div className="overflow-x-auto">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height + 80}
          className="border border-gray-200 rounded"
        />
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>
          <strong>How to use:</strong> Hover over nodes to see connected data flows. The thickness of each flow
          represents the volume of data moving through that pathway.
        </p>
      </div>
    </div>
  )
}

export default IntelligenceSankeyDiagram
