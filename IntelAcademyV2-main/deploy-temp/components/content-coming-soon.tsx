import Link from "next/link"
import { CalendarClock, ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ContentComingSoonProps {
  topicTitle: string
  category?: string
  estimatedDate?: string
}

export function ContentComingSoon({ topicTitle, category, estimatedDate }: ContentComingSoonProps) {
  return (
    <div className="container max-w-4xl py-12">
      <Link
        href="/topics"
        className="flex items-center text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Topics
      </Link>

      <Card className="border-2 border-dashed">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <CalendarClock className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl">{topicTitle}</CardTitle>
          {category && <CardDescription className="text-base">Category: {category}</CardDescription>}
        </CardHeader>
        <CardContent className="text-center space-y-4 pb-6">
          <p>We're currently developing content for this topic.</p>
          {estimatedDate ? (
            <p className="text-muted-foreground">Expected availability: {estimatedDate}</p>
          ) : (
            <p className="text-muted-foreground">Check back soon for updates!</p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button asChild variant="outline">
              <Link href="/request-topic">
                <Mail className="mr-2 h-4 w-4" />
                Request Priority
              </Link>
            </Button>
            <Button asChild>
              <Link href="/topics">Browse Available Topics</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
