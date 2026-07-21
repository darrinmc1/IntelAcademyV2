import Link from "next/link"
import { requireReviewer } from "@/lib/rbac"
import { getSubmissions, type SubmissionStatus } from "@/lib/db"
import { Badge } from "@/components/ui/badge"

export const dynamic = "force-dynamic"

const TABS: { label: string; value: SubmissionStatus | "all" }[] = [
  { label: "Pending", value: "submitted" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
  { label: "All", value: "all" },
]

function statusBadge(status: string) {
  const map: Record<string, string> = {
    submitted: "bg-amber-100 text-amber-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    draft: "bg-gray-100 text-gray-700",
  }
  return map[status] ?? "bg-gray-100 text-gray-700"
}

function fmt(d: string | Date | null) {
  if (!d) return "—"
  return new Date(d).toLocaleString()
}

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  await requireReviewer()
  const { status } = await searchParams
  const active = (status as SubmissionStatus | "all") || "submitted"
  const submissions = await getSubmissions(active)
  const pendingCount = active === "submitted" ? submissions.length : undefined

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Content Reviews</h1>
        <p className="text-muted-foreground">
          Approve or return content submitted by editors.
        </p>
      </div>

      <div className="flex gap-2 border-b">
        {TABS.map((t) => (
          <Link
            key={t.value}
            href={`/admin/reviews?status=${t.value}`}
            className={
              "px-4 py-2 text-sm font-medium border-b-2 -mb-px " +
              (active === t.value
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground")
            }
          >
            {t.label}
            {t.value === "submitted" && pendingCount ? (
              <Badge className="ml-2 bg-amber-100 text-amber-800">{pendingCount}</Badge>
            ) : null}
          </Link>
        ))}
      </div>

      {submissions.length === 0 ? (
        <div className="rounded-md border border-dashed p-10 text-center text-muted-foreground">
          Nothing here.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-2 font-medium">Title</th>
                <th className="px-4 py-2 font-medium">Type</th>
                <th className="px-4 py-2 font-medium">Submitted by</th>
                <th className="px-4 py-2 font-medium">Updated</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s: any) => (
                <tr key={s.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{s.title || s.content_id}</td>
                  <td className="px-4 py-2 text-muted-foreground">{s.type}</td>
                  <td className="px-4 py-2">{s.submitter_codename || "—"}</td>
                  <td className="px-4 py-2 text-muted-foreground">{fmt(s.updated_at)}</td>
                  <td className="px-4 py-2">
                    <span className={"rounded-full px-2 py-0.5 text-xs " + statusBadge(s.status)}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <Link
                      href={`/admin/reviews/${s.id}`}
                      className="text-primary hover:underline"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
