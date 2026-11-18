import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, Eye } from "lucide-react"
import { listRoutePages } from "@/lib/catalog-pages"

export const metadata: Metadata = {
  alternates: { canonical: "/admin/content-manager/learning-paths" },
  title: "Learning Paths Content Manager",
  description: "Manage and edit learning path content for the Intel Analyst Academy",
}

export default function LearningPathsContentManagerPage() {
  const learningPaths = listRoutePages("learning-paths")

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
        <h1 className="text-2xl font-bold tracking-tight">Learning Paths Content Manager</h1>
      </div>

      <p className="text-muted-foreground">Edit and manage learning path content across the Intel Analyst Academy platform.</p>

      <div className="border rounded-md">
        <div className="bg-muted p-4 flex justify-between items-center">
          <div className="font-medium">Learning Paths ({learningPaths.length})</div>
        </div>

        {learningPaths.length > 0 ? (
          <div className="divide-y">
            {learningPaths.map((path) => (
              <div key={path.id} className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{path.title}</h3>
                  <p className="text-sm text-muted-foreground">ID: {path.id}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/learning-paths/${path.id}`}
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
            <p>No learning paths found. Create your first learning path to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}