"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Play, AlertCircle, CheckCircle, ExternalLink, Code } from "lucide-react"

interface TutorialStep {
  id: string
  title: string
  description: string
  content: string
  code?: string
  tips?: string[]
  warning?: string
}

interface Tool {
  id: string
  name: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  platform: string[]
  cost: "Free" | "Paid" | "Freemium"
  downloadUrl: string
  steps: TutorialStep[]
}

const tools: Tool[] = [
  {
    id: "gephi",
    name: "Gephi",
    description:
      "Open-source network analysis and visualization platform with powerful layout algorithms and statistical analysis features.",
    difficulty: "Intermediate",
    platform: ["Windows", "Mac", "Linux"],
    cost: "Free",
    downloadUrl: "https://gephi.org/users/download/",
    steps: [
      {
        id: "installation",
        title: "Installation & Setup",
        description: "Download and install Gephi on your system",
        content: `Gephi is a powerful, free network analysis tool that's perfect for intelligence analysis. Here's how to get started:

**System Requirements:**
- Java 8 or higher
- 4GB RAM minimum (8GB+ recommended for large networks)
- OpenGL-compatible graphics card

**Installation Steps:**
1. Visit gephi.org and download the latest version
2. Install Java if not already present
3. Run the Gephi installer
4. Launch Gephi and verify installation`,
        tips: [
          "Increase Java heap size for large datasets: modify gephi.conf file",
          "Install additional plugins from Tools > Plugins for extended functionality",
          "Enable OpenGL for better performance in Preferences",
        ],
      },
      {
        id: "data-import",
        title: "Data Import & Formatting",
        description: "Learn how to prepare and import network data",
        content: `Gephi supports multiple data formats. For intelligence analysis, we'll focus on the most common formats:

**Supported Formats:**
- CSV (nodes and edges files)
- GEXF (Gephi's native format)
- GraphML
- Pajek NET
- Excel files

**CSV Format Example:**
Create two files - nodes.csv and edges.csv`,
        code: `// nodes.csv
Id,Label,Type,Organization
1,John Smith,Leader,Alpha Group
2,Jane Doe,Lieutenant,Alpha Group
3,Mike Johnson,Enforcer,Beta Group
4,Sarah Wilson,Financier,Alpha Group

// edges.csv
Source,Target,Type,Weight,Relationship
1,2,Directed,3,Commands
1,4,Directed,2,Finances
2,3,Undirected,1,Communicates
3,4,Undirected,1,Meets`,
        tips: [
          "Use consistent ID formats (numbers or strings)",
          "Include relevant attributes for analysis (organization, role, location)",
          "Weight edges based on relationship strength or frequency",
        ],
      },
      {
        id: "visualization",
        title: "Network Visualization",
        description: "Create compelling network visualizations",
        content: `Gephi offers powerful layout algorithms to reveal network structure:

**Key Layout Algorithms:**
- **Force Atlas 2**: Best for most networks, shows communities
- **Fruchterman Reingold**: Good for small to medium networks
- **Circular Layout**: Shows hierarchical structures
- **Geo Layout**: For geographic networks

**Visualization Steps:**
1. Import your data (File > Import Spreadsheet)
2. Choose appropriate layout algorithm
3. Adjust node and edge appearance
4. Apply filters to focus on important elements
5. Use ranking to size nodes by importance`,
        tips: [
          "Start with Force Atlas 2 for most intelligence networks",
          "Use node size to represent centrality measures",
          "Color nodes by attributes (organization, role, etc.)",
          "Adjust edge thickness based on relationship strength",
        ],
      },
      {
        id: "analysis",
        title: "Network Analysis",
        description: "Perform statistical analysis to identify key players",
        content: `Gephi provides comprehensive network analysis tools:

**Key Metrics for Intelligence Analysis:**
- **Degree Centrality**: Number of direct connections
- **Betweenness Centrality**: Information broker potential
- **Closeness Centrality**: Speed of information spread
- **Eigenvector Centrality**: Influence through connections
- **Modularity**: Community detection

**Analysis Workflow:**
1. Go to Statistics panel (right side)
2. Run network analysis algorithms
3. Use results to rank and color nodes
4. Apply filters to identify key players
5. Export results for reporting`,
        tips: [
          "Run multiple centrality measures for comprehensive analysis",
          "Use modularity to identify subgroups within networks",
          "Filter by centrality scores to focus on key players",
          "Export statistics for further analysis in Excel",
        ],
      },
      {
        id: "export",
        title: "Export & Reporting",
        description: "Share your analysis results effectively",
        content: `Gephi offers multiple export options for intelligence reporting:

**Export Options:**
- **PNG/PDF**: High-quality images for reports
- **SVG**: Vector graphics for presentations
- **GEXF**: Save project for future analysis
- **CSV**: Export statistics and data

**Best Practices for Intelligence Reports:**
1. Create clean, professional visualizations
2. Include legend explaining node colors and sizes
3. Highlight key findings with annotations
4. Export high-resolution images (300+ DPI)
5. Include statistical summary tables`,
        tips: [
          "Use Preview mode for final visualization adjustments",
          "Export both overview and detailed network views",
          "Include methodology notes in your reports",
          "Save project files for future updates",
        ],
      },
    ],
  },
  {
    id: "nodexl",
    name: "NodeXL",
    description: "Excel-based network analysis tool that integrates seamlessly with Microsoft Office workflows.",
    difficulty: "Beginner",
    platform: ["Windows"],
    cost: "Freemium",
    downloadUrl: "https://www.smrfoundation.org/nodexl/",
    steps: [
      {
        id: "installation",
        title: "Installation & Setup",
        description: "Install NodeXL as an Excel add-in",
        content: `NodeXL brings network analysis directly into Excel, making it perfect for analysts already familiar with Microsoft Office.

**Requirements:**
- Microsoft Excel 2007 or later
- Windows operating system
- .NET Framework 4.0 or higher

**Installation Process:**
1. Download NodeXL from the official website
2. Close all Excel instances
3. Run the NodeXL installer as administrator
4. Restart Excel and look for NodeXL tab`,
        tips: [
          "Use NodeXL Pro for advanced features and larger datasets",
          "Ensure Excel is closed during installation",
          "Check for updates regularly for new features",
        ],
      },
      {
        id: "data-setup",
        title: "Data Setup in Excel",
        description: "Organize your network data in Excel format",
        content: `NodeXL uses Excel's familiar interface for network data management:

**Worksheet Structure:**
- **Edges**: Relationships between entities
- **Vertices**: Individual entities and their attributes
- **Groups**: Community or organizational groupings
- **Overall Metrics**: Network-wide statistics

**Data Entry Best Practices:**
1. Use the Edges worksheet for relationships
2. Add vertex attributes in the Vertices worksheet
3. Maintain consistent naming conventions
4. Include relevant metadata for analysis`,
        code: `// Edges Worksheet Columns:
Vertex 1 | Vertex 2 | Relationship | Weight | Date
John     | Mary     | Communicates | 5      | 2024-01-15
Mary     | Bob      | Meets        | 3      | 2024-01-16
Bob      | Alice    | Finances     | 8      | 2024-01-17

// Vertices Worksheet Columns:
Vertex   | Role      | Organization | Location | Risk_Level
John     | Leader    | Alpha Group  | NYC      | High
Mary     | Lieutenant| Alpha Group  | NYC      | Medium
Bob      | Financier | Beta Group   | LA       | High`,
        tips: [
          "Use Excel data validation for consistent entries",
          "Color-code different relationship types",
          "Include date information for temporal analysis",
          "Use dropdown lists for categorical data",
        ],
      },
      {
        id: "visualization",
        title: "Creating Network Visualizations",
        description: "Generate network graphs directly in Excel",
        content: `NodeXL makes network visualization straightforward with Excel integration:

**Visualization Process:**
1. Click "Show Graph" in NodeXL tab
2. Choose appropriate layout algorithm
3. Customize node and edge appearance
4. Apply visual properties based on data
5. Refresh graph as data changes

**Layout Options:**
- **Fruchterman-Reingold**: General purpose layout
- **Circle**: Shows all nodes in circular arrangement
- **Grid**: Organized grid layout
- **Spiral**: Spiral arrangement
- **Sugiyama**: Hierarchical layout

**Visual Customization:**
- Node size based on centrality
- Node color by organization or role
- Edge width by relationship strength
- Labels for key entities`,
        tips: [
          "Start with Fruchterman-Reingold for most networks",
          "Use conditional formatting for dynamic coloring",
          "Adjust layout parameters for better clarity",
          "Save multiple layout versions for different perspectives",
        ],
      },
      {
        id: "analysis",
        title: "Network Metrics & Analysis",
        description: "Calculate network statistics and identify key players",
        content: `NodeXL provides essential network analysis metrics:

**Available Metrics:**
- **Graph Metrics**: Overall network statistics
- **Vertex Metrics**: Individual node importance
- **Edge Metrics**: Relationship characteristics
- **Cluster Analysis**: Community detection
- **Dynamic Analysis**: Time-based changes

**Analysis Workflow:**
1. Go to NodeXL > Analysis > Graph Metrics
2. Select desired metrics to calculate
3. Review results in new worksheet columns
4. Sort and filter by metric values
5. Create charts and summaries

**Key Intelligence Metrics:**
- Betweenness Centrality: Information brokers
- Degree Centrality: Most connected individuals
- Closeness Centrality: Information spread potential
- Clustering Coefficient: Local network density`,
        tips: [
          "Calculate multiple metrics for comprehensive analysis",
          "Use Excel charts to visualize metric distributions",
          "Create pivot tables for summary statistics",
          "Export results for external reporting tools",
        ],
      },
      {
        id: "reporting",
        title: "Reports & Documentation",
        description: "Create professional intelligence reports",
        content: `NodeXL integrates seamlessly with Office for professional reporting:

**Report Components:**
1. **Executive Summary**: Key findings and recommendations
2. **Network Overview**: High-level network statistics
3. **Key Player Analysis**: Top individuals by various metrics
4. **Visual Analysis**: Network diagrams and charts
5. **Methodology**: Data sources and analysis approach

**Excel Integration Benefits:**
- Copy graphs directly to Word documents
- Create PowerPoint presentations with live data
- Use Excel charts for metric visualization
- Maintain data links for updates

**Professional Presentation Tips:**
- Use consistent color schemes
- Include clear legends and labels
- Provide context for network metrics
- Highlight actionable intelligence`,
        tips: [
          "Create template reports for consistent formatting",
          "Use Excel macros for automated report generation",
          "Include confidence levels and data quality notes",
          "Maintain version control for evolving analyses",
        ],
      },
    ],
  },
  {
    id: "cytoscape",
    name: "Cytoscape",
    description:
      "Advanced network analysis platform with extensive plugin ecosystem, originally designed for biological networks but excellent for intelligence analysis.",
    difficulty: "Advanced",
    platform: ["Windows", "Mac", "Linux"],
    cost: "Free",
    downloadUrl: "https://cytoscape.org/download.html",
    steps: [
      {
        id: "installation",
        title: "Installation & Plugin Setup",
        description: "Install Cytoscape and essential plugins for intelligence analysis",
        content: `Cytoscape is a powerful platform with extensive customization through plugins:

**System Requirements:**
- Java 11 or higher
- 8GB RAM minimum (16GB+ for large networks)
- Modern graphics card for 3D visualization

**Essential Plugins for Intelligence Analysis:**
- **NetworkAnalyzer**: Comprehensive network statistics
- **MCODE**: Molecular Complex Detection (useful for communities)
- **ClusterMaker2**: Advanced clustering algorithms
- **CyREST**: REST API for automation
- **stringApp**: Enhanced network analysis tools

**Installation Steps:**
1. Download Cytoscape from official website
2. Install Java if required
3. Launch Cytoscape
4. Install plugins via Apps > App Manager`,
        tips: [
          "Install plugins based on your specific analysis needs",
          "Keep Cytoscape and plugins updated for latest features",
          "Allocate more memory for large networks in cytoscape.vmoptions",
          "Explore the Cytoscape App Store for specialized tools",
        ],
      },
      {
        id: "data-import",
        title: "Advanced Data Import",
        description: "Import complex network data with multiple attributes",
        content: `Cytoscape supports sophisticated data import with multiple file formats:

**Supported Formats:**
- **SIF (Simple Interaction Format)**: Basic network format
- **XGMML**: XML-based format with rich attributes
- **GraphML**: Standard graph format
- **CSV/TSV**: Tabular data with flexible mapping
- **JSON**: Modern web-friendly format

**Advanced Import Features:**
- Multiple edge types in single network
- Hierarchical node attributes
- Time-series data integration
- Geographic coordinate mapping
- Custom attribute data types`,
        code: `// SIF Format Example (intelligence.sif)
John_Smith pp Jane_Doe
Jane_Doe pp Mike_Johnson
Mike_Johnson pp Sarah_Wilson
John_Smith pd Sarah_Wilson

// Node Attributes (node_attributes.txt)
John_Smith = Leader
Jane_Doe = Lieutenant  
Mike_Johnson = Enforcer
Sarah_Wilson = Financier

// Edge Attributes (edge_attributes.txt)
John_Smith (pp) Jane_Doe = 0.8
Jane_Doe (pp) Mike_Johnson = 0.6
Mike_Johnson (pp) Sarah_Wilson = 0.4
John_Smith (pd) Sarah_Wilson = 0.9`,
        tips: [
          "Use consistent identifier formats across all files",
          "Include rich attribute data for advanced analysis",
          "Test import with small datasets first",
          "Document your data format for team collaboration",
        ],
      },
      {
        id: "advanced-visualization",
        title: "Advanced Visualization Techniques",
        description: "Create sophisticated network visualizations",
        content: `Cytoscape offers advanced visualization capabilities for complex intelligence networks:

**Layout Algorithms:**
- **Prefuse Force Directed**: Excellent for large networks
- **Edge-weighted Spring Embedded**: Considers edge weights
- **Hierarchical Layout**: Shows organizational structure
- **Circular Layout**: Emphasizes network periphery
- **Geographic Layout**: Maps to real-world coordinates

**Visual Style Features:**
- **Conditional Formatting**: Rules-based styling
- **Gradient Mapping**: Continuous value representation
- **Multi-dimensional Scaling**: Complex attribute visualization
- **3D Visualization**: Spatial network representation
- **Animation**: Time-based network evolution

**Intelligence-Specific Styling:**
1. Size nodes by centrality measures
2. Color by organization or threat level
3. Shape by entity type (person, organization, location)
4. Edge style by relationship type
5. Transparency by confidence level`,
        tips: [
          "Create multiple visual styles for different analysis perspectives",
          "Use the VizMapper for complex conditional formatting",
          "Export high-resolution images for professional reports",
          "Save sessions to preserve complex visualizations",
        ],
      },
      {
        id: "network-analysis",
        title: "Network Analysis",
        description: "Perform advanced statistical analysis and community detection",
        content: `Cytoscape provides sophisticated analysis tools through plugins:

**NetworkAnalyzer Plugin:**
- Comprehensive network statistics
- Centrality measures calculation
- Network topology analysis
- Statistical distribution plots
- Comparative network analysis

**Community Detection:**
- **MCODE**: Finds densely connected regions
- **ClusterMaker2**: Multiple clustering algorithms
- **GLay**: Community detection with layout
- **MCL**: Markov Clustering algorithm

**Advanced Analysis Workflow:**
1. Load network and verify data quality
2. Calculate basic network statistics
3. Identify communities and subgroups
4. Analyze centrality measures
5. Perform comparative analysis
6. Export results for reporting

**Intelligence Applications:**
- Identify command structures
- Find communication hubs
- Detect operational cells
- Analyze information flow
- Assess network vulnerabilities`,
        tips: [
          "Run multiple clustering algorithms for validation",
          "Use statistical plots to understand metric distributions",
          "Compare networks over time to track changes",
          "Document analysis parameters for reproducibility",
        ],
      },
      {
        id: "automation",
        title: "Automation & Scripting",
        description: "Automate analysis workflows with CyREST and scripting",
        content: `Cytoscape supports automation for repetitive analysis tasks:

**CyREST API:**
- RESTful web service interface
- Programmatic network manipulation
- Automated analysis pipelines
- Integration with external tools
- Batch processing capabilities

**Scripting Languages:**
- **Python**: Using py4cytoscape library
- **R**: Using RCy3 package
- **JavaScript**: Direct REST API calls
- **Command Line**: Cytoscape commands

**Automation Examples:**
1. Batch import multiple networks
2. Apply consistent styling across datasets
3. Calculate metrics for network comparison
4. Generate standardized reports
5. Update networks with new data`,
        code: `# Python Example using py4cytoscape
import py4cytoscape as p4c

# Connect to Cytoscape
p4c.cytoscape_ping()

# Import network
network_suid = p4c.import_network_from_file('intelligence_network.sif')

# Calculate centrality measures
p4c.analyze_network()

# Apply visual style
p4c.set_visual_style('Intelligence_Style')

# Export image
p4c.export_image('network_analysis.png', type='PNG', resolution=300)`,
        tips: [
          "Start with simple automation tasks",
          "Use version control for your scripts",
          "Document automation workflows for team use",
          "Test scripts with sample data before production use",
        ],
      },
    ],
  },
]

export function NetworkToolsTutorials() {
  const [selectedTool, setSelectedTool] = useState<string>("gephi")
  const [selectedStep, setSelectedStep] = useState<string>("installation")
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  const currentTool = tools.find((tool) => tool.id === selectedTool)
  const currentStep = currentTool?.steps.find((step) => step.id === selectedStep)

  const markStepComplete = (stepId: string) => {
    setCompletedSteps((prev) => new Set([...prev, stepId]))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-600 bg-green-100"
      case "Intermediate":
        return "text-yellow-600 bg-yellow-100"
      case "Advanced":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getCostColor = (cost: string) => {
    switch (cost) {
      case "Free":
        return "text-green-600 bg-green-100"
      case "Freemium":
        return "text-blue-600 bg-blue-100"
      case "Paid":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Network Analysis Tools Tutorials</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the most popular network analysis tools used in intelligence analysis. These step-by-step tutorials
          will guide you from installation to advanced analysis techniques.
        </p>
      </div>

      {/* Tool Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTool === tool.id ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : ""
            }`}
            onClick={() => {
              setSelectedTool(tool.id)
              setSelectedStep("installation")
            }}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {tool.name}
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tool.difficulty)}`}>
                    {tool.difficulty}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCostColor(tool.cost)}`}>
                    {tool.cost}
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">{tool.platform.join(", ")}</div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(tool.downloadUrl, "_blank")
                  }}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {currentTool && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Step Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tutorial Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {currentTool.steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setSelectedStep(step.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedStep === step.id
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          completedSteps.has(step.id)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {completedSteps.has(step.id) ? <CheckCircle className="h-4 w-4" /> : index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{step.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Step Content */}
          <div className="lg:col-span-3">
            {currentStep && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{currentStep.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{currentStep.description}</p>
                    </div>
                    <Button
                      onClick={() => markStepComplete(currentStep.id)}
                      variant={completedSteps.has(currentStep.id) ? "default" : "outline"}
                      size="sm"
                    >
                      {completedSteps.has(currentStep.id) ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Mark Complete
                        </>
                      )}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Main Content */}
                  <div className="prose dark:prose-invert max-w-none">
                    {currentStep.content.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Code Example */}
                  {currentStep.code && (
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Code Example</span>
                      </div>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{currentStep.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Tips */}
                  {currentStep.tips && currentStep.tips.length > 0 && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800 dark:text-blue-200">Pro Tips</span>
                      </div>
                      <ul className="space-y-2">
                        {currentStep.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Warning */}
                  {currentStep.warning && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800 dark:text-yellow-200">Important Note</span>
                      </div>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">{currentStep.warning}</p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const currentIndex = currentTool.steps.findIndex((s) => s.id === selectedStep)
                        if (currentIndex > 0) {
                          setSelectedStep(currentTool.steps[currentIndex - 1].id)
                        }
                      }}
                      disabled={currentTool.steps.findIndex((s) => s.id === selectedStep) === 0}
                    >
                      Previous Step
                    </Button>
                    <Button
                      onClick={() => {
                        const currentIndex = currentTool.steps.findIndex((s) => s.id === selectedStep)
                        if (currentIndex < currentTool.steps.length - 1) {
                          setSelectedStep(currentTool.steps[currentIndex + 1].id)
                        }
                      }}
                      disabled={
                        currentTool.steps.findIndex((s) => s.id === selectedStep) === currentTool.steps.length - 1
                      }
                    >
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Sample Datasets</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Criminal network examples</li>
                <li>• Corporate relationship data</li>
                <li>• Social media networks</li>
                <li>• Communication patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Video Tutorials</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Tool-specific walkthroughs</li>
                <li>• Advanced analysis techniques</li>
                <li>• Case study demonstrations</li>
                <li>• Best practices guides</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Community Support</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• User forums and communities</li>
                <li>• Plugin repositories</li>
                <li>• Academic research papers</li>
                <li>• Professional networks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
