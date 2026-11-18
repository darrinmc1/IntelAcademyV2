import type { Metadata } from "next"
import Link from "next/link"
import { listRoutePages } from "@/lib/catalog-pages"

export const metadata: Metadata = {
  alternates: { canonical: "/admin/content-manager" },
  title: "Content Manager",
  description: "Manage and edit content for the Intel Analyst Academy",
}

export default function ContentManagerPage() {
  const topicsCount = listRoutePages("topics").length
  const learningPathsCount = listRoutePages("learning-paths").length
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
          description="The downloadable files currently on the site"
          href="/downloads"
        />
        <ContentSection
          title="Glossary"
          description="Intelligence terminology published on the site"
          href="/glossary"
        />
        <ContentSection
          title="Media Library"
          description="Images already uploaded for the site"
          href="/admin/images"
        />
        <ContentSection
          title="Site Content"
          description="Site settings"
          href="/admin/settings"
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
  count?: number
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          {typeof count === "number" && (
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {count} items
            </div>
          )}
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
