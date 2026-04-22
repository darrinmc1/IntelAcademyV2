import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"

export const metadata = {
  title: "Crime Trend Analysis | The Intel Analyst Academy",
  description: "Learn techniques for identifying and analyzing patterns and trends in criminal activity",
}

export default function CrimeTrendAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Banner */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Crime Trend Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image
              src="/crime-trend-analysis-banner-large.png"
              alt="Crime Trend Analysis"
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
          Crime Trend Analysis is a specialized intelligence discipline focused on identifying, monitoring, and
          forecasting patterns and trends in criminal activity over time. By analyzing historical data and current
          indicators, analysts can help organizations anticipate emerging threats and develop proactive strategies.
        </p>
      </div>

      <LearningFormats />

      {/* Topic Cards - Simple HTML version */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/trend-analysis-methodology-thumb.png"
              alt="What is Crime Trend Analysis"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">What is Crime Trend Analysis</h3>
            <p className="text-gray-600 mb-4">
              An introduction to the fundamentals of crime trend analysis and its applications
            </p>
            <p className="text-blue-600 font-medium">15 min read</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/short-vs-long-term-trends-thumb.png"
              alt="Short vs Long-Term Trends"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Short vs Long-Term Trends</h3>
            <p className="text-gray-600 mb-4">
              Understanding the differences between short-term fluctuations and long-term patterns
            </p>
            <p className="text-blue-600 font-medium">20 min read</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/seasonal-temporal-trends-thumb.png"
              alt="Seasonal and Temporal Trends"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Seasonal and Temporal Trends</h3>
            <p className="text-gray-600 mb-4">
              Analyzing how criminal activity varies by time of day, week, month, and season
            </p>
            <p className="text-blue-600 font-medium">18 min read</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/statistical-techniques-thumb.png" alt="Statistical Techniques" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Statistical Techniques</h3>
            <p className="text-gray-600 mb-4">Quantitative methods for identifying and validating crime trends</p>
            <p className="text-blue-600 font-medium">25 min read</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/emerging-threats-thumb.png" alt="Emerging Threats" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Identifying Emerging Threats</h3>
            <p className="text-gray-600 mb-4">Techniques for early detection of new criminal trends and threats</p>
            <p className="text-blue-600 font-medium">22 min read</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/trend-analysis-reporting-thumb.png"
              alt="Trend Analysis Reporting"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Trend Analysis Reporting</h3>
            <p className="text-gray-600 mb-4">Best practices for communicating trend analysis findings effectively</p>
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
              src="/crime-trend-analysis-concept.png"
              alt="Crime Trend Analysis Concept"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Crime Trend Analysis Dashboard</h3>
            <p className="mb-4">
              This interactive dashboard template provides a framework for visualizing and monitoring crime trends
              across multiple dimensions, including geography, time, and offense type.
            </p>
            <p>
              The dashboard includes customizable charts, filters, and analytical tools to help analysts identify
              patterns and communicate findings to stakeholders.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
