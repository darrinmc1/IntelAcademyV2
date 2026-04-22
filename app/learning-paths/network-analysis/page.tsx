import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"

export const metadata = {
  title: "Network Analysis | The Intel Analyst Academy",
  description: "Learn techniques for mapping and analyzing criminal and terrorist networks",
}

export default function NetworkAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Banner */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Network Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image src="/network-analysis-banner-large.png" alt="Network Analysis" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl">
          Network Analysis is a powerful intelligence technique that maps relationships between individuals, groups, and
          organizations to understand criminal and terrorist networks. By visualizing connections and identifying key
          nodes, analysts can develop strategies to disrupt illicit networks and target high-value individuals.
        </p>
      </div>

      <LearningFormats />

      {/* Topic Cards - Simple HTML version */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/what-is-network-analysis-thumb.png"
              alt="What is Network Analysis"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">What is Network Analysis</h3>
            <p className="text-gray-600 mb-4">
              An introduction to the fundamentals of network analysis in intelligence
            </p>
            <p className="text-blue-600 font-medium">15 min read</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/link-analysis-charts-thumb.png" alt="Link Analysis Charts" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Link Analysis Charts</h3>
            <p className="text-gray-600 mb-4">
              Techniques for creating and interpreting visual representations of networks
            </p>
            <p className="text-blue-600 font-medium">20 min read</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/entity-relationship-mapping-thumb.png"
              alt="Entity Relationship Mapping"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Entity Relationship Mapping</h3>
            <p className="text-gray-600 mb-4">Methods for identifying and documenting connections between entities</p>
            <p className="text-blue-600 font-medium">18 min read</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/social-network-analysis-thumb.png"
              alt="Social Network Analysis"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Social Network Analysis</h3>
            <p className="text-gray-600 mb-4">Advanced techniques for analyzing social structures and relationships</p>
            <p className="text-blue-600 font-medium">25 min read</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/key-influencers-thumb.png" alt="Key Influencers" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Identifying Key Influencers</h3>
            <p className="text-gray-600 mb-4">Methods for locating central nodes and power brokers in networks</p>
            <p className="text-blue-600 font-medium">22 min read</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/network-disruption-thumb.png" alt="Network Disruption" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Network Disruption Strategies</h3>
            <p className="text-gray-600 mb-4">Approaches for effectively targeting and dismantling criminal networks</p>
            <p className="text-blue-600 font-medium">20 min read</p>
          </div>
        </div>
      </div>

      {/* Featured Resource */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Resource</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-full md:w-1/3 aspect-video">
            <Image
              src="/network-analysis-concept.png"
              alt="Network Analysis Concept"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Network Analysis Software Guide</h3>
            <p className="mb-4">
              This guide reviews the most effective software tools for network analysis in intelligence
              applications, with detailed comparisons and use case examples.
            </p>
            <p>
              The guide includes tutorials for creating various types of network visualizations and extracting
              actionable insights from complex relationship data.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
