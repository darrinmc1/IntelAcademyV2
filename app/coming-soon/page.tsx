import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RequestTopicForm } from "./request-topic-form"
import { Toaster } from "@/components/ui/toaster"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/coming-soon",
  "Coming soon",
  "Video lessons and the forum are not open. Written lessons, exercises, and Academy Brief are.",
)

export default function ComingSoon() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Coming soon</h1>
          <p className="text-muted-foreground">
            Two things are not on the site yet. Everything else in this list is.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <section className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-2">Not available</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Video lessons. Written lessons stay free while you wait.</li>
              <li>A forum. The forum page is a placeholder with no threads.</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              There is no sandbox, badge scheme, certificate, or webinar series planned on this page.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/waitlist">Join the list</Link>
              </Button>
            </div>
          </section>

          <section className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-2">Already here</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/learning-paths" className="underline">
                  24 learning paths
                </Link>{" "}
                of written lessons.
              </li>
              <li>
                <Link href="/exercises" className="underline">
                  Practical exercises
                </Link>{" "}
                with a worked brief to mark.
              </li>
              <li>
                <Link href="/tools/academy-brief" className="underline">
                  Academy Brief
                </Link>
                , a training tool that turns notes into a structured brief.
              </li>
              <li>
                <Link href="/downloads" className="underline">
                  PDF templates and checklists
                </Link>{" "}
                that download.
              </li>
            </ul>
          </section>
        </div>

        <RequestTopicForm />
      </div>
      <Toaster />
    </div>
  )
}
