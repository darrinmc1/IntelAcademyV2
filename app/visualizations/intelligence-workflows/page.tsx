"use client"

import type React from "react"
import IntelligenceSankeyDiagram from "@/components/visualizations/intelligence-sankey-diagram"
import IntelligenceHierarchyChart from "@/components/visualizations/intelligence-hierarchy-chart"
import IntelligenceProcessFlow from "@/components/visualizations/intelligence-process-flow"

const IntelligenceWorkflowsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Intelligence Workflow Visualizations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore data visualizations that illustrate how intelligence flows through organizations, from
            raw data collection to actionable intelligence products.
          </p>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8 justify-center">
            <a href="#data-flow" className="text-blue-600 hover:text-blue-800 font-medium">
              Data Flow
            </a>
            <a href="#organization" className="text-blue-600 hover:text-blue-800 font-medium">
              Organization Structure
            </a>
            <a href="#process-flow" className="text-blue-600 hover:text-blue-800 font-medium">
              Process Flow
            </a>
          </nav>
        </div>

        {/* Visualizations */}
        <div className="space-y-12">
          {/* Sankey Diagram Section */}
          <section id="data-flow" className="scroll-mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Intelligence Data Flow Analysis</h2>
              <p className="text-gray-600">
                This Sankey diagram visualizes how raw data transforms into actionable intelligence as it flows through
                different collection, processing, and analysis systems.
              </p>
            </div>
            <IntelligenceSankeyDiagram />
          </section>

          {/* Hierarchy Chart Section */}
          <section id="organization" className="scroll-mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Intelligence Organization Structure</h2>
              <p className="text-gray-600">
                Interactive organizational chart showing the hierarchical structure of an intelligence agency, including
                roles, responsibilities, and security clearance levels.
              </p>
            </div>
            <IntelligenceHierarchyChart />
          </section>

          {/* Process Flow Section */}
          <section id="process-flow" className="scroll-mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Intelligence Cycle Process Flow</h2>
              <p className="text-gray-600">
                Step-by-step visualization of the intelligence cycle, showing how requirements drive collection,
                processing, analysis, and dissemination activities.
              </p>
            </div>
            <IntelligenceProcessFlow />
          </section>
        </div>

        {/* Educational Content */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Understanding Intelligence Workflows Through Visualization
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Visualize Intelligence Workflows?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Identify bottlenecks and inefficiencies in the intelligence process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Understand complex organizational relationships and data flows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improve training and onboarding for new intelligence professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Support strategic planning and resource allocation decisions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Visualization Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    <strong>Sankey Diagrams:</strong> Show data volume and flow paths
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    <strong>Hierarchy Charts:</strong> Display organizational structure and reporting lines
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    <strong>Process Flows:</strong> Illustrate step-by-step workflows and decision points
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    <strong>Network Graphs:</strong> Reveal relationships and connections between entities
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Interactive Learning</h4>
            <p className="text-blue-800 text-sm">
              These visualizations are designed to be interactive learning tools. Click, hover, and explore different
              elements to discover detailed information about intelligence workflows, organizational structures, and
              process flows. Use the animation features to see how data moves through systems over time.
            </p>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-12 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Learning Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/learning-paths/foundations"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-gray-900 mb-2">Foundations of Intelligence</h4>
              <p className="text-sm text-gray-600">
                Learn the basics of intelligence analysis and the intelligence cycle
              </p>
            </a>
            <a
              href="/learning-paths/analytical-techniques"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-gray-900 mb-2">Analytical Techniques</h4>
              <p className="text-sm text-gray-600">Master structured analytical techniques for intelligence analysis</p>
            </a>
            <a
              href="/learning-paths/data-collection-planning"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-gray-900 mb-2">Data Collection Planning</h4>
              <p className="text-sm text-gray-600">
                Understand how to plan and execute effective intelligence collection
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntelligenceWorkflowsPage
