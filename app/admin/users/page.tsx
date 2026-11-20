import { getAdminDashboardStats, listUsersForAdmin } from "@/lib/db"
import { RoleManager } from "./role-manager"
import { PlanManager } from "./plan-manager"
import { EntitlementManager } from "./entitlement-manager"

export const dynamic = "force-dynamic"

export default async function UsersPage() {
  let users: Awaited<ReturnType<typeof listUsersForAdmin>> = []
  let accountCount = 0
  let dbOk = false
  let totalOpens = 0

  try {
    const stats = await getAdminDashboardStats()
    users = await listUsersForAdmin()
    accountCount = stats.users
    totalOpens = users.reduce((sum, user) => sum + user.lessonsViewed.length, 0)
    dbOk = true
  } catch (error) {
    console.error("[admin users] failed to load accounts:", error)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">
          {dbOk
            ? `${accountCount} account${accountCount === 1 ? "" : "s"} in the database. ${totalOpens} recorded page opens on the rows below.`
            : "The account list could not be loaded. Check the database connection and reload."}
        </p>
      </div>

      <RoleManager />
      <EntitlementManager />
      <PlanManager />

      <div className="overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="p-3 font-medium">Codename</th>
              <th className="p-3 font-medium">Email</th>
              <th className="p-3 font-medium">Role</th>
              <th className="p-3 font-medium">Plan</th>
              <th className="p-3 font-medium">Opened</th>
              <th className="p-3 font-medium">Created</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={6}>
                  {dbOk ? "No accounts yet." : "No live rows to show."}
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t align-top">
                  <td className="p-3 font-medium">{user.codename}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.plan}</td>
                  <td className="p-3">
                    {user.lessonsViewed.length === 0 ? (
                      <span className="text-muted-foreground">Nothing recorded</span>
                    ) : (
                      <ul className="space-y-1">
                        {user.lessonsViewed.slice(0, 8).map((path) => (
                          <li key={path} className="font-mono text-xs">{path}</li>
                        ))}
                        {user.lessonsViewed.length > 8 && (
                          <li className="text-xs text-muted-foreground">
                            +{user.lessonsViewed.length - 8} more
                          </li>
                        )}
                      </ul>
                    )}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {user.createdAt ? user.createdAt.slice(0, 10) : ""}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
