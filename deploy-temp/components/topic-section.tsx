import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { StaticImage } from "@/components/static-image"
import { LetsGoButton } from "@/components/lets-go-button"

interface Topic {
  title: string
  slug: string
  readTime: number
  thumbnail: string
}

interface TopicSectionProps {
  title: string
  description: string
  topics: Topic[]
}

export function TopicSection({ title, description, topics }: TopicSectionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {topics.map((topic, index) => (
            <div key={topic.slug}>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage src={topic.thumbnail} alt={topic.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">{topic.readTime} min read</p>
                  </div>
                </div>
                <LetsGoButton path={`/topics/${topic.slug}`} size="sm" />
              </div>
              {index < topics.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
