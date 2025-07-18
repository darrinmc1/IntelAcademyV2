"use client"

import type React from "react"
import IntelligenceSankeyDiagram from "@/components/visualizations/intelligence-sankey-diagram"
import IntelligenceHierarchyChart from "@/components/visualizations/intelligence-hierarchy-chart"
import IntelligenceProcessFlow from "@/components/visualizations/intelligence-process-flow"
import IntelligenceNetworkAnalysis from "@/components/visualizations/intelligence-network-analysis"

const DataVisualizationIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Visualization in Intelligence Analysis</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Master the art of visualizing complex intelligence data through interactive D3.js visualizations. Learn how
            different chart types can reveal patterns, relationships, and insights in intelligence workflows.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What You&apos;ll Learn</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>How to visualize intelligence data flows using Sankey diagrams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Creating organizational hierarchy charts for intelligence agencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Mapping intelligence processes and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Network analysis for understanding entity relationships</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills You&apos;ll Develop</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Interactive data visualization design principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Pattern recognition in complex datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Visual storytelling for intelligence briefings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Critical thinking through visual analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Visualizations */}
        <div className="space-y-16">
          {/* Sankey Diagram Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Data Flow Visualization with Sankey Diagrams</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Concepts</h3>
                <p className="text-blue-800 mb-4">
                  Sankey diagrams excel at showing how data flows through intelligence systems, revealing bottlenecks,
                  processing volumes, and transformation pathways.
                </p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>
                    • <strong>Flow Width:</strong> Represents data volume or importance
                  </li>
                  <li>
                    • <strong>Node Categories:</strong> Different stages in the intelligence process
                  </li>
                  <li>
                    • <strong>Path Analysis:</strong> Trace how raw data becomes actionable intelligence
                  </li>
                </ul>
              </div>
            </div>
            <IntelligenceSankeyDiagram />
          </section>

          {/* Hierarchy Chart Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Organizational Structure with Hierarchy Charts
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Key Concepts</h3>
                <p className="text-green-800 mb-4">
                  Hierarchy charts help visualize command structures, reporting relationships, and information flow
                  within intelligence organizations.
                </p>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>
                    • <strong>Tree vs Radial:</strong> Different layouts for different purposes
                  </li>
                  <li>
                    • <strong>Clearance Levels:</strong> Color-coded security classifications
                  </li>
                  <li>
                    • <strong>Role Relationships:</strong> Understanding organizational dynamics
                  </li>
                </ul>
              </div>
            </div>
            <IntelligenceHierarchyChart />
          </section>

          {/* Process Flow Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Process Flow Visualization</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Key Concepts</h3>
                <p className="text-yellow-800 mb-4">
                  Process flows map the intelligence cycle, showing decision points, feedback loops, and quality control
                  measures.
                </p>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>
                    • <strong>Decision Nodes:</strong> Quality checks and approval gates
                  </li>
                  <li>
                    • <strong>Feedback Loops:</strong> Continuous improvement mechanisms
                  </li>
                  <li>
                    • <strong>Animation:</strong> Understanding temporal aspects of processes
                  </li>
                </ul>
              </div>
            </div>
            <IntelligenceProcessFlow />
          </section>

          {/* Network Analysis Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Network Analysis for Intelligence</h2>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Key Concepts</h3>
                <p className="text-purple-800 mb-4">
                  Network graphs reveal hidden connections between entities, helping analysts understand complex
                  relationships and identify key players.
                </p>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>
                    • <strong>Node Importance:</strong> Size indicates centrality or influence
                  </li>
                  <li>
                    • <strong>Link Strength:</strong> Thickness shows relationship intensity
                  </li>
                  <li>
                    • <strong>Entity Types:</strong> Color coding for different categories
                  </li>
                </ul>
              </div>
            </div>
            <IntelligenceNetworkAnalysis />
          </section>
        </div>

        {/* Best Practices */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices for Intelligence Data Visualization</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Principles</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900">Clarity Over Complexity</h4>
                  <p className="text-sm text-gray-600">
                    Prioritize clear communication over impressive visuals. Your audience needs to understand the data
                    quickly.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900">Interactive Exploration</h4>
                  <p className="text-sm text-gray-600">
                    Enable users to drill down into details while maintaining the big picture context.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-medium text-gray-900">Consistent Visual Language</h4>
                  <p className="text-sm text-gray-600">
                    Use consistent colors, shapes, and layouts across all visualizations in your analysis.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Considerations</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-medium text-gray-900">Classification Awareness</h4>
                  <p className="text-sm text-gray-600">
                    Always consider the classification level of your data and visualization outputs.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-900">Anonymization</h4>
                  <p className="text-sm text-gray-600">
                    Use anonymized or synthetic data for training and demonstration purposes.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900">Access Controls</h4>
                  <p className="text-sm text-gray-600">
                    Implement appropriate access controls for interactive visualizations containing sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Technologies */}
        <div className="mt-12 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools and Technologies</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">D3.js</h3>
              <p className="text-gray-600 text-sm mb-4">
                Powerful JavaScript library for creating custom, interactive data visualizations.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Custom chart types</li>
                <li>• Interactive animations</li>
                <li>• SVG-based graphics</li>
                <li>• Force simulations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tableau</h3>
              <p className="text-gray-600 text-sm mb-4">
                Enterprise-grade business intelligence and analytics platform.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Drag-and-drop interface</li>
                <li>• Real-time data connections</li>
                <li>• Dashboard creation</li>
                <li>• Statistical analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gephi</h3>
              <p className="text-gray-600 text-sm mb-4">Open-source network analysis and visualization software.</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Network graph analysis</li>
                <li>• Community detection</li>
                <li>• Layout algorithms</li>
                <li>• Statistical metrics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Next Steps</h2>
          <p className="text-blue-800 mb-6">
            Ready to apply these visualization techniques to real intelligence scenarios?
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/learning-paths/analytical-techniques"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-gray-900 mb-2">Analytical Techniques</h4>
              <p className="text-sm text-gray-600">Learn structured analytical methods that complement visualization</p>
            </a>
            <a
              href="/learning-paths/data-collection-planning"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-gray-900 mb-2">Data Collection Planning</h4>
              <p className="text-sm text-gray-600">
                Understand how to plan data collection for effective visualization
              </p>
            </a>
            <a
              href="/visualizations/intelligence-workflows"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-gray-900 mb-2">More Visualizations</h4>
              <p className="text-sm text-gray-600">
                Explore additional interactive intelligence workflow visualizations
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataVisualizationIntelligencePage
