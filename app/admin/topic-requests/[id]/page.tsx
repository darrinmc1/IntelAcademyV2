import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { requireAdmin } from "@/lib/rbac"
import { getTopicRequestById } from "@/lib/db"
import { TopicRequestDetailClient } from "./topic-request-detail-client"

export const dynamic = "force-dynamic"

export default async function TopicRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await requireAdmin()
  const { id } = await params
  const request = await getTopicRequestById(id)
  if (!request) notFound()

  return (
    <div className="space-y-6">
      <Link
        href="/admin/topic-requests"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to topic requests
      </Link>

      <div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{request.topic_title}</h1>
            <p className="text-sm text-muted-foreground">
              {request.category ? `${request.category} • ` : ""}
              {request.email || "Anonymous"} • {new Date(request.created_at).toLocaleString()}
            </p>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-800">
            {request.status}
          </span>
        </div>
      </div>

      <div className="rounded-md border bg-gray-50 p-4">
        <h2 className="text-sm font-semibold mb-2">Requested lesson</h2>
        <p className="whitespace-pre-wrap">{request.description}</p>
      </div>

      <TopicRequestDetailClient
        id={request.id}
        currentStatus={request.status}
        currentNotes={request.admin_notes}
      />
    </div>
  )
}
