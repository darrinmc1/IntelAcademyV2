import { getAdminDashboardStats, listUsersForAdmin } from "@/lib/db"

export const dynamic = "force-dynamic"

export default async function AnalyticsPage() {
  let userCount = 0
  let opens = 0
  let pages: { path: string; accounts: number }[] = []
  let dbOk = false

  try {
    const stats = await getAdminDashboardStats()
    const users = await listUsersForAdmin(500)
    userCount = stats.users
    const counts = new Map<string, number>()
    for (const user of users) {
      opens += user.lessonsViewed.length
      for (const path of new Set(user.lessonsViewed)) {
        counts.set(path, (counts.get(path) || 0) + 1)
      }
    }
    pages = [...counts.entries()]
      .map(([path, accounts]) => ({ path, accounts }))
      .sort((a, b) => b.accounts - a.accounts)
      .slice(0, 30)
    dbOk = true
  } catch (error) {
    console.error("[admin analytics] failed to load usage:", error)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Usage</h1>
        <p className="text-muted-foreground">
          Counts from signed-in accounts. Empty means nobody has opened a page while signed in.
        </p>
      </div>

      {!dbOk && (
        <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm">
          Live data could not be loaded. Nothing below is a guess.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">Accounts</p>
          <p className="text-2xl font-bold">{dbOk ? userCount : "—"}</p>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">Recorded opens</p>
          <p className="text-2xl font-bold">{dbOk ? opens : "—"}</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="p-3 font-medium">Page</th>
              <th className="p-3 font-medium">Accounts that opened it</th>
            </tr>
          </thead>
          <tbody>
            {pages.length === 0 ? (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={2}>
                  {dbOk ? "No opens recorded yet." : "No live rows to show."}
                </td>
              </tr>
            ) : (
              pages.map((row) => (
                <tr key={row.path} className="border-t">
                  <td className="p-3 font-mono text-xs">{row.path}</td>
                  <td className="p-3">{row.accounts}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
