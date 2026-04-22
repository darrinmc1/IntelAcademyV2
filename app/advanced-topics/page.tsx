import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { advancedTopicRequirements } from "@/data/advanced-topic-requirements"

export const metadata: Metadata = {
  title: "Advanced Topics | The Intel Analyst Academy",
  description:
    "Specialized content for experienced analysts seeking to deepen their expertise in intelligence analysis",
}

export default function AdvancedTopicsPage() {
  // Group topics by category
  const categories = {
    "Analytical Techniques": ["strategic-forecasting", "structured-analytical-techniques", "statistical-techniques"],
    "Operational Applications": [
      "network-disruption",
      "target-package-development",
      "risk-terrain-modeling",
      "predictive-patterning",
    ],
    "Intelligence Collection": ["deep-web-research", "operations-security", "social-network-analysis"],
    "Communication & Reporting": ["intelligence-storytelling", "strategic-risk-assessment"],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Advanced Topics</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Specialized content for experienced analysts seeking to deepen their expertise in intelligence analysis. These
          advanced topics build upon foundational knowledge and provide in-depth exploration of sophisticated analytical
          techniques and applications.
        </p>
      </div>

      {Object.entries(categories).map(([category, topicIds]) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicIds.map((topicId) => {
              const topic = advancedTopicRequirements[topicId]
              if (!topic) return null

              return (
                <Link
                  key={topicId}
                  href={`/advanced-topics/${topicId}`}
                  className="group block bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`/advanced-topics/${topicId}.png`}
                      alt={topic.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{topic.description}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{topic.experienceLevel}</span>
                      <span className="ml-auto flex items-center font-medium text-blue-600 dark:text-blue-400">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      ))}

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mt-12 border border-blue-100 dark:border-blue-800">
        <h2 className="text-2xl font-bold mb-4">Request an Advanced Topic</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Is there a specific advanced intelligence analysis topic you&apos;d like to see covered? Let us know and we&apos;ll
          consider adding it to our curriculum.
        </p>
        <Link
          href="/request-topic?category=advanced"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Request a Topic <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
