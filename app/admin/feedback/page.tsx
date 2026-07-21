import Link from "next/link"
import { ArrowLeft, MessageSquare, HelpCircle } from "lucide-react"
import { requireAdmin } from "@/lib/rbac"
import { getFeedback } from "@/lib/db"
import { Badge } from "@/components/ui/badge"

export const dynamic = "force-dynamic"

const TABS: { label: string; value: string }[] = [
  { label: "New", value: "new" },
  { label: "Reviewed", value: "reviewed" },
  { label: "Responded", value: "responded" },
  { label: "All", value: "all" },
]

function statusColor(status: string) {
  const map: Record<string, string> = {
    new: "bg-amber-100 text-amber-800",
    reviewed: "bg-blue-100 text-blue-800",
    responded: "bg-green-100 text-green-800",
    archived: "bg-gray-100 text-gray-700",
  }
  return map[status] ?? "bg-gray-100 text-gray-700"
}

function categoryIcon(category: string) {
  if (category.includes("Bug")) return "🐛"
  if (category.includes("Suggestion")) return "💡"
  if (category.includes("Content")) return "📚"
  return "❓"
}

function fmt(d: string | Date | null) {
  if (!d) return "—"
  return new Date(d).toLocaleString()
}

export default async function FeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  await requireAdmin()
  const { status } = await searchParams
  const active = status || "new"
  const feedbackList = await getFeedback(active === "all" ? "all" : active)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Feedback & Requests</h1>
        <p className="text-muted-foreground">Manage user feedback and topic requests.</p>
      </div>

      <div className="flex gap-2 border-b">
        {TABS.map((t) => (
          <Link
            key={t.value}
            href={`/admin/feedback?status=${t.value}`}
            className={
              "px-4 py-2 text-sm font-medium border-b-2 -mb-px " +
              (active === t.value
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground")
            }
          >
            {t.label}
            {t.value === "new" && feedbackList.length > 0 && (
              <Badge className="ml-2 bg-amber-100 text-amber-800">{feedbackList.length}</Badge>
            )}
          </Link>
        ))}
      </div>

      {feedbackList.length === 0 ? (
        <div className="rounded-md border border-dashed p-10 text-center text-muted-foreground">
          No feedback yet.
        </div>
      ) : (
        <div className="space-y-2">
          {feedbackList.map((f: any) => (
            <Link
              key={f.id}
              href={`/admin/feedback/${f.id}`}
              className="flex items-center gap-3 rounded-md border p-4 hover:bg-gray-50 transition"
            >
              <div className="text-2xl">{categoryIcon(f.category)}</div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">
                  {f.category}{f.rating ? ` • ${f.rating}★` : ""}
                </div>
                <div className="text-sm text-muted-foreground truncate">{f.message}</div>
                <div className="text-xs text-muted-foreground">{fmt(f.created_at)}</div>
              </div>
              <span className={"rounded-full px-2 py-0.5 text-xs " + statusColor(f.status)}>
                {f.status}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
