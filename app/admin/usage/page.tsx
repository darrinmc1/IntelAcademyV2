import { requireAdmin } from "@/lib/rbac"
import { newAccountWritesAllowed } from "@/lib/accounts-gate"
import { getUsageAdminSummary } from "@/lib/db"
import { SUPPORT_EMAIL } from "@/lib/pricing"

export const metadata = {
  title: "Usage",
  description: "Account count and lesson usage. Admin only.",
}

export default async function AdminUsagePage() {
  await requireAdmin()

  if (!newAccountWritesAllowed()) {
    return (
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-3">Usage</h1>
        <p className="text-slate-300">
          Usage is empty because the accounts database is not set, or it is a database this app will not write new
          tables to. Set POSTGRES_URL and JWT_SECRET. Lesson and PDF locking stays off until ACCOUNTS_GATE=1 as well.
          Apply documentation/database/migrations/005_entitlements_usage_rls.sql yourself. This page does not run it.
          Questions: {SUPPORT_EMAIL}.
        </p>
      </div>
    )
  }

  let summary: Awaited<ReturnType<typeof getUsageAdminSummary>> | null = null
  try {
    summary = await getUsageAdminSummary()
  } catch (error) {
    console.error("[admin usage] failed to load:", error)
  }

  if (!summary) {
    return (
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-3">Usage</h1>
        <p className="text-slate-300">
          The usage table is not there yet. Apply documentation/database/migrations/005_entitlements_usage_rls.sql in
          the database console. This page does not apply it.
        </p>
      </div>
    )
  }

  const eventCount = summary.events.reduce((total, row) => total + Number(row.count), 0)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Usage</h1>
      <p className="text-slate-400 mb-6">Admin only. Counts accounts and what each account opens.</p>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-sm text-slate-400">Accounts</p>
          <p className="text-3xl font-semibold text-white">{summary.userCount}</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-sm text-slate-400">Usage events</p>
          <p className="text-3xl font-semibold text-white">{eventCount}</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-sm text-slate-400">By type</p>
          <ul className="mt-2 text-sm text-slate-200">
            {summary.events.length === 0 ? <li>No events yet.</li> : null}
            {summary.events.map((row) => (
              <li key={row.event_type}>
                {row.event_type}: {row.count}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-3">Accounts</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr>
              <th className="py-2 pr-3">Email</th>
              <th className="py-2 pr-3">Codename</th>
              <th className="py-2 pr-3">Entitlement</th>
              <th className="py-2 pr-3">Lesson views</th>
              <th className="py-2 pr-3">Read seconds</th>
              <th className="py-2 pr-3">Downloads</th>
            </tr>
          </thead>
          <tbody>
            {summary.perUser.map((row) => (
              <tr key={row.email} className="border-t border-white/10">
                <td className="py-2 pr-3">{row.email}</td>
                <td className="py-2 pr-3">{row.codename}</td>
                <td className="py-2 pr-3">{row.entitlement || "free"}</td>
                <td className="py-2 pr-3">{row.lesson_views}</td>
                <td className="py-2 pr-3">{row.read_seconds}</td>
                <td className="py-2 pr-3">{row.downloads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-3">Recent events</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr>
              <th className="py-2 pr-3">When</th>
              <th className="py-2 pr-3">Account</th>
              <th className="py-2 pr-3">Event</th>
              <th className="py-2 pr-3">Resource</th>
              <th className="py-2 pr-3">Seconds</th>
            </tr>
          </thead>
          <tbody>
            {summary.recent.length === 0 ? (
              <tr>
                <td className="py-2 text-slate-400" colSpan={5}>No usage yet.</td>
              </tr>
            ) : null}
            {summary.recent.map((row, index) => (
              <tr key={`${row.email}-${row.created_at}-${index}`} className="border-t border-white/10">
                <td className="py-2 pr-3">{String(row.created_at)}</td>
                <td className="py-2 pr-3">{row.email}</td>
                <td className="py-2 pr-3">{row.event_type}</td>
                <td className="py-2 pr-3">{row.resource}</td>
                <td className="py-2 pr-3">{row.seconds ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
