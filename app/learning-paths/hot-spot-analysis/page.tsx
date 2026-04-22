import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"

export const metadata = {
  title: "Hot Spot Analysis | The Intel Analyst Academy",
  description: "Learn techniques for identifying and analyzing geographic concentrations of criminal activity",
}

export default function HotSpotAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Banner */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Hot Spot Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image
              src="/hot-spot-analysis-banner-large.png"
              alt="Hot Spot Analysis"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl">
          Hot Spot Analysis is a specialized intelligence technique that identifies geographic areas with higher than
          average concentrations of criminal or terrorist activity. By analyzing spatial and temporal patterns, analysts
          can help direct resources more effectively and develop targeted prevention strategies.
        </p>
      </div>

      <LearningFormats />

      {/* Topic Cards - Simple HTML version */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/hot-spot-mapping-intro-thumb.png"
              alt="What is Hot Spot Analysis"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">What is Hot Spot Analysis</h3>
            <p className="text-gray-600 mb-4">
              An introduction to the fundamentals of hot spot analysis and its applications
            </p>
            <p className="text-blue-600 font-medium">15 min read</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/crime-mapping-techniques-thumb.png"
              alt="Crime Mapping Techniques"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Crime Mapping Techniques</h3>
            <p className="text-gray-600 mb-4">
              Methods and tools for visualizing and analyzing crime patterns geographically
            </p>
            <p className="text-blue-600 font-medium">20 min read</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/temporal-analysis-thumb.png" alt="Temporal Analysis" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Temporal Analysis</h3>
            <p className="text-gray-600 mb-4">Understanding time patterns in hot spot formation and evolution</p>
            <p className="text-blue-600 font-medium">18 min read</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/risk-terrain-modeling-thumb.png" alt="Risk Terrain Modeling" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Risk Terrain Modeling</h3>
            <p className="text-gray-600 mb-4">Advanced techniques for identifying environmental risk factors</p>
            <p className="text-blue-600 font-medium">25 min read</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/predictive-hot-spots-thumb.png" alt="Predictive Hot Spots" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Predictive Hot Spots</h3>
            <p className="text-gray-600 mb-4">Using historical data to forecast future hot spot locations</p>
            <p className="text-blue-600 font-medium">22 min read</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/deployment-decisions-thumb.png"
              alt="Resource Deployment Strategies"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Resource Deployment Strategies</h3>
            <p className="text-gray-600 mb-4">Translating hot spot analysis into effective operational decisions</p>
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
              src="/hot-spot-analysis-concept.png"
              alt="Hot Spot Analysis Concept"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Hot Spot Analysis Toolkit</h3>
            <p className="mb-4">
              This toolkit provides analysts with step-by-step guidance for conducting effective hot spot
              analysis, from data collection through visualization and interpretation.
            </p>
            <p>
              The toolkit includes templates, case studies, and best practices for implementing hot spot analysis in
              various operational contexts.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
