"use client"
import { NetworkVisualization } from "./network-visualization"

export function NetworkExamples() {
  // Star Network - One central hub
  const starNetwork = {
    title: "Star Network Structure",
    description:
      "A centralized network with one dominant hub. Common in hierarchical organizations or command structures.",
    nodes: [
      { id: "hub", x: 200, y: 150, label: "Hub", degree: 0.8, betweenness: 1.0, closeness: 1.0, eigenvector: 1.0 },
      { id: "n1", x: 120, y: 80, label: "A", degree: 0.1, betweenness: 0.0, closeness: 0.5, eigenvector: 0.3 },
      { id: "n2", x: 280, y: 80, label: "B", degree: 0.1, betweenness: 0.0, closeness: 0.5, eigenvector: 0.3 },
      { id: "n3", x: 320, y: 180, label: "C", degree: 0.1, betweenness: 0.0, closeness: 0.5, eigenvector: 0.3 },
      { id: "n4", x: 280, y: 220, label: "D", degree: 0.1, betweenness: 0.0, closeness: 0.5, eigenvector: 0.3 },
      { id: "n5", x: 120, y: 220, label: "E", degree: 0.1, betweenness: 0.0, closeness: 0.5, eigenvector: 0.3 },
      { id: "n6", x: 80, y: 180, label: "F", degree: 0.1, betweenness: 0.0, closeness: 0.5, eigenvector: 0.3 },
    ],
    edges: [
      { from: "hub", to: "n1" },
      { from: "hub", to: "n2" },
      { from: "hub", to: "n3" },
      { from: "hub", to: "n4" },
      { from: "hub", to: "n5" },
      { from: "hub", to: "n6" },
    ],
  }

  // Distributed Network - More balanced connections
  const distributedNetwork = {
    title: "Distributed Network Structure",
    description: "A decentralized network with multiple interconnected nodes. More resilient but harder to control.",
    nodes: [
      { id: "a", x: 100, y: 100, label: "A", degree: 0.4, betweenness: 0.3, closeness: 0.7, eigenvector: 0.6 },
      { id: "b", x: 200, y: 80, label: "B", degree: 0.6, betweenness: 0.5, closeness: 0.8, eigenvector: 0.8 },
      { id: "c", x: 300, y: 120, label: "C", degree: 0.4, betweenness: 0.2, closeness: 0.6, eigenvector: 0.5 },
      { id: "d", x: 120, y: 180, label: "D", degree: 0.6, betweenness: 0.4, closeness: 0.7, eigenvector: 0.7 },
      { id: "e", x: 220, y: 200, label: "E", degree: 0.8, betweenness: 0.7, closeness: 0.9, eigenvector: 0.9 },
      { id: "f", x: 320, y: 220, label: "F", degree: 0.4, betweenness: 0.1, closeness: 0.5, eigenvector: 0.4 },
      { id: "g", x: 180, y: 140, label: "G", degree: 0.6, betweenness: 0.6, closeness: 0.8, eigenvector: 0.7 },
    ],
    edges: [
      { from: "a", to: "b" },
      { from: "a", to: "d" },
      { from: "b", to: "c" },
      { from: "b", to: "g" },
      { from: "c", to: "f" },
      { from: "d", to: "e" },
      { from: "d", to: "g" },
      { from: "e", to: "f" },
      { from: "e", to: "g" },
      { from: "g", to: "c" },
    ],
  }

  // Criminal Network Example
  const criminalNetwork = {
    title: "Criminal Organization Network",
    description: "Example of a criminal network showing different roles and their network positions.",
    nodes: [
      { id: "boss", x: 200, y: 80, label: "Boss", degree: 0.3, betweenness: 0.4, closeness: 0.8, eigenvector: 0.9 },
      { id: "lt1", x: 140, y: 140, label: "Lt-1", degree: 0.5, betweenness: 0.6, closeness: 0.7, eigenvector: 0.7 },
      { id: "lt2", x: 260, y: 140, label: "Lt-2", degree: 0.4, betweenness: 0.5, closeness: 0.6, eigenvector: 0.6 },
      { id: "enf1", x: 80, y: 200, label: "Enf-1", degree: 0.2, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
      { id: "enf2", x: 140, y: 220, label: "Enf-2", degree: 0.3, betweenness: 0.2, closeness: 0.5, eigenvector: 0.4 },
      { id: "deal1", x: 220, y: 200, label: "Deal-1", degree: 0.4, betweenness: 0.3, closeness: 0.6, eigenvector: 0.5 },
      { id: "deal2", x: 300, y: 180, label: "Deal-2", degree: 0.2, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
      { id: "money", x: 320, y: 120, label: "Money", degree: 0.3, betweenness: 0.4, closeness: 0.7, eigenvector: 0.6 },
    ],
    edges: [
      { from: "boss", to: "lt1" },
      { from: "boss", to: "lt2" },
      { from: "boss", to: "money" },
      { from: "lt1", to: "enf1" },
      { from: "lt1", to: "enf2" },
      { from: "lt1", to: "deal1" },
      { from: "lt2", to: "deal1" },
      { from: "lt2", to: "deal2" },
      { from: "lt2", to: "money" },
      { from: "deal1", to: "deal2" },
    ],
  }

  // Bridge Network - Shows importance of bridge nodes
  const bridgeNetwork = {
    title: "Bridge Network Structure",
    description: "Network showing bridge nodes that connect different clusters. High betweenness centrality.",
    nodes: [
      // Cluster 1
      { id: "c1a", x: 80, y: 80, label: "1A", degree: 0.4, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
      { id: "c1b", x: 120, y: 60, label: "1B", degree: 0.4, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
      { id: "c1c", x: 120, y: 120, label: "1C", degree: 0.6, betweenness: 0.3, closeness: 0.6, eigenvector: 0.5 },

      // Bridge
      {
        id: "bridge",
        x: 200,
        y: 150,
        label: "Bridge",
        degree: 0.4,
        betweenness: 1.0,
        closeness: 0.8,
        eigenvector: 0.6,
      },

      // Cluster 2
      { id: "c2a", x: 280, y: 120, label: "2A", degree: 0.6, betweenness: 0.2, closeness: 0.5, eigenvector: 0.4 },
      { id: "c2b", x: 320, y: 100, label: "2B", degree: 0.4, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
      { id: "c2c", x: 320, y: 160, label: "2C", degree: 0.4, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
      { id: "c2d", x: 280, y: 200, label: "2D", degree: 0.4, betweenness: 0.1, closeness: 0.4, eigenvector: 0.3 },
    ],
    edges: [
      // Cluster 1 connections
      { from: "c1a", to: "c1b" },
      { from: "c1a", to: "c1c" },
      { from: "c1b", to: "c1c" },

      // Bridge connections
      { from: "c1c", to: "bridge" },
      { from: "bridge", to: "c2a" },

      // Cluster 2 connections
      { from: "c2a", to: "c2b" },
      { from: "c2a", to: "c2c" },
      { from: "c2a", to: "c2d" },
      { from: "c2b", to: "c2c" },
      { from: "c2c", to: "c2d" },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Interactive Network Structure Examples</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Explore different network structures and centrality measures. Click the buttons above each network to see how
          different centrality measures highlight different aspects of network importance.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">How to Use:</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>
              • <strong>Hover over nodes</strong> to see their connections highlighted
            </li>
            <li>
              • <strong>Click centrality buttons</strong> to see different importance measures
            </li>
            <li>
              • <strong>Node size and color</strong> represent the centrality values
            </li>
            <li>
              • <strong>Numbers below nodes</strong> show exact centrality scores
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NetworkVisualization {...starNetwork} />
        <NetworkVisualization {...distributedNetwork} />
        <NetworkVisualization {...criminalNetwork} />
        <NetworkVisualization {...bridgeNetwork} />
      </div>

      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Understanding Centrality Measures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Degree Centrality</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Measures the number of direct connections a node has. High degree centrality indicates a node with many
              direct relationships.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Intelligence Application:</strong> Identifies individuals with many direct contacts, often leaders
              or coordinators.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Betweenness Centrality</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Measures how often a node lies on the shortest path between other nodes. High betweenness indicates a node
              that controls information flow.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Intelligence Application:</strong> Identifies brokers, gatekeepers, and critical communication
              links in networks.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Closeness Centrality</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Measures how close a node is to all other nodes in the network. High closeness indicates efficient access
              to the entire network.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Intelligence Application:</strong> Identifies individuals who can quickly reach or influence the
              entire network.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Eigenvector Centrality</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Measures influence based on connections to other influential nodes. High eigenvector centrality indicates
              connection to important people.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Intelligence Application:</strong> Identifies individuals whose importance comes from their
              connections to other important people.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
