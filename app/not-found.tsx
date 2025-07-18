import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Lesson Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        The lesson you&apos;re looking for is either in development or doesn&apos;t exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/lesson-in-development">View Lesson Development Status</Link>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/learning-paths">Browse Available Lessons</Link>
        </Button>
      </div>
    </div>
  )
}
