import Link from "next/link"
import { requireAdmin } from "@/lib/rbac"
import { getTopicRequests } from "@/lib/db"
import { Badge } from "@/components/ui/badge"

export const dynamic = "force-dynamic"

const TABS: { label: string; value: string }[] = [
  { label: "New", value: "new" },
  { label: "Reviewed", value: "reviewed" },
  { label: "Planned", value: "planned" },
  { label: "All", value: "all" },
]

function statusColor(status: string) {
  const map: Record<string, string> = {
    new: "bg-amber-100 text-amber-800",
    reviewed: "bg-blue-100 text-blue-800",
    planned: "bg-purple-100 text-purple-800",
    completed: "bg-green-100 text-green-800",
    archived: "bg-gray-100 text-gray-700",
  }
  return map[status] ?? "bg-gray-100 text-gray-700"
}

function fmt(d: string | Date | null) {
  if (!d) return " - "
  return new Date(d).toLocaleString()
}

export default async function TopicRequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  await requireAdmin()
  const { status } = await searchParams
  const active = status || "new"
  const requests = await getTopicRequests(active === "all" ? "all" : active)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">New topic requests</h1>
        <p className="text-muted-foreground">
          Explicit asks for lesson subjects that do not exist yet. Bugs and page-fix notes belong in{" "}
          <Link href="/admin/feedback" className="underline underline-offset-2">
            Feedback
          </Link>
          , not here.
        </p>
      </div>

      <div className="flex gap-2 border-b">
        {TABS.map((t) => (
          <Link
            key={t.value}
            href={`/admin/topic-requests?status=${t.value}`}
            className={
              "px-4 py-2 text-sm font-medium border-b-2 -mb-px " +
              (active === t.value
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground")
            }
          >
            {t.label}
            {t.value === "new" && requests.length > 0 && (
              <Badge className="ml-2 bg-amber-100 text-amber-800">{requests.length}</Badge>
            )}
          </Link>
        ))}
      </div>

      {requests.length === 0 ? (
        <div className="rounded-md border border-dashed p-10 text-center text-muted-foreground">
          No topic requests yet.
        </div>
      ) : (
        <div className="space-y-2">
          {requests.map((r: { id: string; topic_title: string; description: string; category?: string; status: string; created_at: string }) => (
            <Link
              key={r.id}
              href={`/admin/topic-requests/${r.id}`}
              className="flex items-center gap-3 rounded-md border p-4 hover:bg-gray-50 transition"
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{r.topic_title}</div>
                <div className="text-sm text-muted-foreground truncate">{r.description}</div>
                <div className="text-xs text-muted-foreground">
                  {r.category ? `${r.category} • ` : ""}
                  {fmt(r.created_at)}
                </div>
              </div>
              <span className={"rounded-full px-2 py-0.5 text-xs " + statusColor(r.status)}>
                {r.status}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
