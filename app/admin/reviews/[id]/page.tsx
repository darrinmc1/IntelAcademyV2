import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { requireReviewer } from "@/lib/rbac"
import { getSubmissionById, getReviewAuditLog } from "@/lib/db"
import { ReviewActions } from "../review-actions"

export const dynamic = "force-dynamic"

function fmt(d: string | Date | null) {
  if (!d) return "—"
  return new Date(d).toLocaleString()
}

const ACTION_LABEL: Record<string, string> = {
  submitted: "submitted",
  approved: "approved",
  rejected: "rejected",
  published_directly: "published directly",
  returned: "returned",
}

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await requireReviewer()
  const { id } = await params
  const submission = await getSubmissionById(id)
  if (!submission) notFound()
  const audit = await getReviewAuditLog(id)

  const isOpen = submission.status === "submitted"

  return (
    <div className="max-w-4xl space-y-6">
      <Link
        href="/admin/reviews"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to reviews
      </Link>

      <div>
        <h1 className="text-2xl font-bold">{submission.title || submission.content_id}</h1>
        <p className="text-sm text-muted-foreground">
          {submission.type} · {submission.content_id} · submitted by{" "}
          {submission.submitter_codename || "unknown"} · {fmt(submission.updated_at)}
        </p>
      </div>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Proposed content
        </h2>
        <pre className="max-h-[420px] overflow-auto rounded-md border bg-gray-50 p-4 text-sm whitespace-pre-wrap">
          {submission.content}
        </pre>
      </section>

      {isOpen ? (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Decision
          </h2>
          <ReviewActions submissionId={submission.id} />
        </section>
      ) : (
        <div className="rounded-md border bg-gray-50 p-4 text-sm">
          This submission is <strong>{submission.status}</strong>
          {submission.reviewer_comments ? (
            <>
              {" "}
              — <span className="italic">“{submission.reviewer_comments}”</span>
            </>
          ) : null}
        </div>
      )}

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Audit trail
        </h2>
        <ol className="space-y-2 border-l pl-4">
          {audit.map((a: any) => (
            <li key={a.id} className="text-sm">
              <span className="font-medium">{a.actor_codename || "system"}</span>{" "}
              {ACTION_LABEL[a.action] || a.action}
              <span className="text-muted-foreground"> · {fmt(a.created_at)}</span>
              {a.comment ? (
                <div className="text-muted-foreground">“{a.comment}”</div>
              ) : null}
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
