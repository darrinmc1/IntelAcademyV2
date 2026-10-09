import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { fetchPageContent } from "@/app/actions/content-manager-client"
import { TopicEditor } from "../topic-editor"

interface TopicEditorPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: TopicEditorPageProps): Promise<Metadata> {
  const { id } = await params
  const content = fetchPageContent("topics", id)

  if (!content) {
    return {
      title: "Topic Not Found",
    }
  }

  // Extract title from content (first heading)
  const titleMatch = content.match(/# (.*?)(\n|$)/)
  const title = titleMatch ? titleMatch[1] : id

  return {
    title: `Edit: ${title}`,
    description: `Edit content for the ${title} topic`,
    alternates: { canonical: `/admin/content-manager/topics/${id}` },
  }
}

export default async function TopicEditorPage({ params }: TopicEditorPageProps) {
  const { id } = await params
  const content = fetchPageContent("topics", id)

  if (!content && id !== "new") {
    notFound()
  }

  // Extract title from content (first heading)
  const titleMatch = content.match(/# (.*?)(\n|$)/)
  const title = titleMatch ? titleMatch[1] : id

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Link
          href="/admin/content-manager/topics"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mr-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Topics
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">
          {id === "new" ? "Create New Topic" : `Edit: ${title}`}
        </h1>
      </div>

      <TopicEditor topicId={id} initialContent={content} isNew={id === "new"} />
    </div>
  )
}
