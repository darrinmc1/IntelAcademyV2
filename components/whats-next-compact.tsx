import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface NextTopicOption {
  title: string
  description: string
  path?: string
}

interface WhatsNextCompactProps {
  anotherTopic: NextTopicOption
  moreLearning: NextTopicOption
  advancedLearning: NextTopicOption
}

function OptionLink({ option, variant = "default" }: { option: NextTopicOption; variant?: "default" | "outline" }) {
  if (!option.path) {
    return <p className="text-sm font-medium text-slate-500">Coming soon</p>
  }

  return (
    <Button asChild variant={variant} className="w-full group">
      <Link href={option.path} className="flex items-center justify-center">
        {option.title}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  )
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
            <OptionLink option={anotherTopic} />
          </Card>

          {/* More Learning in This Area */}
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">More Learning in This Area</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{moreLearning.description}</p>
            <OptionLink option={moreLearning} variant="outline" />
          </Card>

          {/* More Advanced Learning */}
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">More Advanced Learning</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{advancedLearning.description}</p>
            <OptionLink option={advancedLearning} />
          </Card>
        </div>
      </div>
    </section>
  )
}

export default WhatsNextCompact;
