import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export interface NextTopicOption {
  title: string
  description: string
  path: string
}

interface WhatsNextProps {
  anotherTopic?: NextTopicOption
  moreLearning?: NextTopicOption
  advancedLearning?: NextTopicOption
}

export function WhatsNext({ anotherTopic, moreLearning, advancedLearning }: WhatsNextProps) {
  return (
    <section className="mt-16 py-10 border-t border-gray-200">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">What's Next?</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Continue your intelligence analysis journey with these recommended learning paths
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Another Topic */}
          {anotherTopic ? (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Another Topic</h3>
              <p className="text-gray-600 mb-4 h-20">{anotherTopic.description}</p>
              <Link href={anotherTopic.path} className="mt-auto">
                <Button className="w-full group">
                  {anotherTopic.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Explore More Topics</h3>
              <p className="text-gray-600 mb-4 h-20">Browse our full catalog of intelligence topics.</p>
              <Link href="/learning-paths" className="mt-auto">
                <Button className="w-full group">
                  View All Topics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {/* More Learning in This Area */}
          {moreLearning ? (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">More Learning in This Area</h3>
              <p className="text-gray-600 mb-4 h-20">{moreLearning.description}</p>
              <Link href={moreLearning.path} className="mt-auto">
                <Button className="w-full group">
                  {moreLearning.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Explore Learning Paths</h3>
              <p className="text-gray-600 mb-4 h-20">Discover more learning paths to expand your knowledge.</p>
              <Link href="/learning-paths" className="mt-auto">
                <Button className="w-full group">
                  View Learning Paths
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {/* More Advanced Learning */}
          {advancedLearning ? (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">More Advanced Learning</h3>
              <p className="text-gray-600 mb-4 h-20">{advancedLearning.description}</p>
              <Link href={advancedLearning.path} className="mt-auto">
                <Button className="w-full group" variant="outline">
                  {advancedLearning.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Advanced Topics</h3>
              <p className="text-gray-600 mb-4 h-20">Challenge yourself with our advanced topics.</p>
              <Link href="/advanced-topics" className="mt-auto">
                <Button className="w-full group" variant="outline">
                  View Advanced Topics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {/* New Card: Request Content / Feedback */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-3">Questions or Suggestions?</h3>
            <p className="text-gray-600 mb-4 h-20">
              Have a topic in mind or feedback on this page? Let us know!
            </p>
            <div className="flex flex-col space-y-2 mt-auto">
              <Link href="/request-topic">
                <Button className="w-full group">
                  Request a New Topic
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/forum">
                <Button className="w-full group" variant="outline">
                  Visit Our Forum
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Add default export
export default WhatsNext
