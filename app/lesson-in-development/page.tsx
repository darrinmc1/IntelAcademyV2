import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import EmailInterest from "./email-interest"

export default function LessonInDevelopment() {
  return (
    <div className="container max-w-4xl py-12">
      <Link
        href="/learning-paths"
        className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Learning Paths
      </Link>

      <Card className="border-2 border-yellow-400">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-2xl flex items-center">
            <div className="bg-yellow-400 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-800"
              >
                <path d="M12 19V5"></path>
                <path d="M5 12l7-7 7 7"></path>
              </svg>
            </div>
            Lesson in Development
          </CardTitle>
          <CardDescription className="text-base mt-2">
            We&apos;re currently working on creating this lesson content to provide you with the most valuable intelligence
            analysis training.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">When will this lesson be available?</h3>
              <p className="text-muted-foreground mt-1">
                We&apos;re actively developing new content for the Intelligence Analyst Academy. Most lessons are completed
                within 4-6 weeks of being added to our development roadmap.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Express Your Interest</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Let us know you&apos;re interested in this topic, and we&apos;ll prioritize its development and notify you when
                it&apos;s ready.
              </p>
              <EmailInterest
                subject="Interest in this lesson"
                body="I'm interested in this lesson. Please notify me when it's available."
              >
                Notify Me
              </EmailInterest>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium">Interested in another topic?</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Have another idea for a lesson? We&apos;d love to hear it.
              </p>
              <EmailInterest
                subject="New Lesson Idea"
                body="I have an idea for a new lesson:"
              >
                Suggest a Topic
              </EmailInterest>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 flex flex-col items-start sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h4 className="font-medium">Explore available content</h4>
            <p className="text-sm text-muted-foreground">Check out our completed lessons while you wait</p>
          </div>
          <Button asChild>
            <Link href="/learning-paths">Browse Available Lessons</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
