import { Card } from "@/components/ui/card"
import { Film, X, Check } from "lucide-react"

interface SpyMovieCritiqueProps {
  topic: string
}

const movieMistakes = {
  "intelligence-cycle": {
    movie: "Mission Impossible",
    wrong: "Ethan Hunt gets perfect intelligence instantly",
    right: "Real intelligence takes weeks of planning, collection, and analysis",
  },
  osint: {
    movie: "The Bourne Identity",
    wrong: "Jason Bourne hacks into systems in 30 seconds",
    right: "Real OSINT research takes hours of patient digging through public sources",
  },
  "tactical-intelligence": {
    movie: "24",
    wrong: "Jack Bauer gets real-time perfect intelligence",
    right: "Tactical intelligence is often incomplete and requires quick decisions with limited info",
  },
  "strategic-intelligence": {
    movie: "Homeland",
    wrong: "Carrie predicts everything perfectly",
    right: "Strategic intelligence deals with probabilities and uncertainty, not certainties",
  },
}

export function SpyMovieCritique({ topic }: SpyMovieCritiqueProps) {
  const critique = movieMistakes[topic as keyof typeof movieMistakes]

  if (!critique) return null

  return (
    <Card className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-l-red-500">
      <div className="flex items-center gap-2 mb-3">
        <Film className="h-5 w-5 text-red-600" />
        <h3 className="font-semibold text-red-900">Hollywood vs Reality Check</h3>
      </div>

      <div className="space-y-3">
        <div className="bg-red-100 rounded p-3">
          <div className="flex items-start gap-2">
            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-red-800 text-sm">What {critique.movie} Shows:</p>
              <p className="text-red-700 text-sm">{critique.wrong}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 rounded p-3">
          <div className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-green-800 text-sm">Reality:</p>
              <p className="text-green-700 text-sm">{critique.right}</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-2 italic">
        Now you can be that person who ruins movie night with facts! 🎬
      </p>
    </Card>
  )
}
