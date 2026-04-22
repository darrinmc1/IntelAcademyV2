import type { Metadata } from "next"
import Link from "next/link"
import { getAvailablePages } from "@/app/actions/content-manager-client"

export const metadata: Metadata = {
  title: "Content Manager - Intel Analyst Academy",
  description: "Manage and edit content for the Intel Analyst Academy",
}

export default function ContentManagerPage() {
  const topicsCount = getAvailablePages("topics").length
  const learningPathsCount = getAvailablePages("learning-paths").length
  const glossaryCount = getAvailablePages("glossary").length
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Manager</h1>
        <p className="text-muted-foreground mt-2">View and edit content across the Intel Analyst Academy platform.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ContentSection
          title="Learning Paths"
          description="Manage learning path content and structure"
          href="/admin/content-manager/learning-paths"
          count={learningPathsCount}
        />
        <ContentSection
          title="Topics"
          description="Edit individual topic content and metadata"
          href="/admin/content-manager/topics"
          count={topicsCount}
        />
        <ContentSection
          title="Resources"
          description="Manage downloadable resources and materials"
          href="/admin/content-manager/resources"
          count={0}
        />
        <ContentSection
          title="Glossary"
          description="Edit intelligence terminology and definitions"
          href="/admin/content-manager/glossary"
          count={glossaryCount}
        />
        <ContentSection
          title="Media Library"
          description="Manage images, videos and other media assets"
          href="/admin/content-manager/media"
          count={0}
        />
        <ContentSection
          title="Site Content"
          description="Edit static pages and site-wide content"
          href="/admin/content-manager/site"
          count={0}
        />
      </div>
    </div>
  )
}

function ContentSection({
  title,
  description,
  href,
  count,
}: {
  title: string
  description: string
  href: string
  count: number
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            {count} items
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="flex-1"></div>
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
          >
            Manage
          </Link>
        </div>
      </div>
    </div>
  )
}
