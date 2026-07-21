import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { requireAdmin } from "@/lib/rbac"
import { getFeedbackById } from "@/lib/db"
import { FeedbackDetailClient } from "./feedback-detail-client"

export const dynamic = "force-dynamic"

export default async function FeedbackDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await requireAdmin()
  const { id } = await params
  const feedback = await getFeedbackById(id)
  if (!feedback) notFound()

  return (
    <div className="space-y-6">
      <Link
        href="/admin/feedback"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to feedback
      </Link>

      <div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{feedback.category}</h1>
            <p className="text-sm text-muted-foreground">
              {feedback.rating ? `${feedback.rating}★ • ` : ""}
              {feedback.email || "Anonymous"} • {new Date(feedback.created_at).toLocaleString()}
            </p>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-800">
            {feedback.status}
          </span>
        </div>
      </div>

      <div className="rounded-md border bg-gray-50 p-4">
        <h2 className="text-sm font-semibold mb-2">Message</h2>
        <p className="whitespace-pre-wrap">{feedback.message}</p>
        {feedback.page && (
          <p className="text-xs text-muted-foreground mt-2">From: {feedback.page}</p>
        )}
      </div>

      <FeedbackDetailClient
        id={feedback.id}
        currentStatus={feedback.status}
        currentNotes={feedback.admin_notes}
      />
    </div>
  )
}
