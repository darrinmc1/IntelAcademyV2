import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { TopicEditor } from "../topic-editor"

export const metadata: Metadata = {
  title: "Create New Topic - Intel Analyst Academy",
  description: "Create a new topic for the Intel Analyst Academy",
}

export default function NewTopicPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">Create New Topic</h1>
      </div>

      <TopicEditor
        topicId="new"
        initialContent="# New Topic Title

Enter your topic content here..."
        isNew={true}
      />
    </div>
  )
}
