import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, Edit, Eye, Plus } from "lucide-react"
import { getAvailablePages } from "@/app/actions/content-manager-client"

export const metadata: Metadata = {
  title: "Topic Content Manager - Intel Analyst Academy",
  description: "Manage and edit topic content for the Intel Analyst Academy",
}

export default function TopicsContentManagerPage() {
  const topics = getAvailablePages("topics")

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Link
          href="/admin/content-manager"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mr-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Content Manager
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Topic Content Manager</h1>
      </div>

      <p className="text-muted-foreground">Edit and manage topic content across the Intel Analyst Academy platform.</p>

      <div className="border rounded-md">
        <div className="bg-muted p-4 flex justify-between items-center">
          <div className="font-medium">Topics ({topics.length})</div>
          <Link
            href="/admin/content-manager/topics/new"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Topic
          </Link>
        </div>

        {topics.length > 0 ? (
          <div className="divide-y">
            {topics.map((topic) => (
              <div key={topic.id} className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">ID: {topic.id}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/content-manager/topics/${topic.id}`}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-3"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                  <Link
                    href={`/topics/${topic.id}`}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            <p>No topics found. Create your first topic to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}
