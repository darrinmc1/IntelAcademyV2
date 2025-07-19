import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface NextTopicOption {
  title: string
  description: string
  path: string
}

interface WhatsNextCompactProps {
  anotherTopic: NextTopicOption
  moreLearning: NextTopicOption
  advancedLearning: NextTopicOption
}

export function WhatsNextCompact({ anotherTopic, moreLearning, advancedLearning }: WhatsNextCompactProps) {
  return (
    <section className="py-12 border-t border-gray-200">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-6">What's Next?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Another Topic */}
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Another Topic</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{anotherTopic.description}</p>
            <Button asChild className="w-full group">
              <Link href={anotherTopic.path} className="flex items-center justify-center">
                {anotherTopic.title}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Card>

          {/* More Learning in This Area */}
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">More Learning in This Area</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{moreLearning.description}</p>
            <Button asChild variant="outline" className="w-full group">
              <Link href={moreLearning.path} className="flex items-center justify-center">
                {moreLearning.title}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Card>

          {/* More Advanced Learning */}
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">More Advanced Learning</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{advancedLearning.description}</p>
            <Button asChild className="w-full group">
              <Link href={advancedLearning.path} className="flex items-center justify-center">
                {advancedLearning.title}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default WhatsNextCompact;
