import Link from "next/link"
import {
  ImageIcon,
  FileVideo,
  Upload,
  Search,
  Settings,
  Database,
  Users,
  BookOpen,
  BarChart2,
  Clock,
  Grid,
  FileText,
  MessageSquare,
  Home,
  Activity,
  CheckCircle2,
  XCircle,
  Send,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { getAdminDashboardStats, getRecentActivity, type AdminDashboardStats, type ActivityRow } from "@/lib/db"

// Counts must reflect the live database on every load.
export const dynamic = "force-dynamic"

function timeAgo(input: string): string {
  const then = new Date(input).getTime()
  if (Number.isNaN(then)) return ""
  const secs = Math.max(0, Math.floor((Date.now() - then) / 1000))
  if (secs < 60) return "just now"
  const mins = Math.floor(secs / 60)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

function describeAction(action: string): { verb: string; icon: typeof Activity; className: string } {
  switch (action) {
    case "submitted":
      return { verb: "submitted for review", icon: Send, className: "text-blue-500" }
    case "approved":
      return { verb: "approved & published", icon: CheckCircle2, className: "text-green-600" }
    case "published_directly":
      return { verb: "published directly", icon: CheckCircle2, className: "text-green-600" }
    case "rejected":
      return { verb: "returned with changes", icon: XCircle, className: "text-amber-600" }
    case "returned":
      return { verb: "returned to draft", icon: XCircle, className: "text-amber-600" }
    default:
      return { verb: action, icon: Activity, className: "text-muted-foreground" }
  }
}

export default async function AdminDashboard() {
  let stats: AdminDashboardStats | null = null
  let activity: ActivityRow[] = []
  let dbOk = false

  try {
    stats = await getAdminDashboardStats()
    activity = await getRecentActivity(8)
    dbOk = true
  } catch (error) {
    console.error("[admin dashboard] failed to load live data:", error)
  }

  const num = (n: number | undefined) => (stats ? String(n ?? 0) : " - ")

  const statCards = [
    { title: "Published Content", value: num(stats?.publishedContent), icon: BookOpen, href: "/admin/topics" },
    { title: "Registered Users", value: num(stats?.users), icon: Users, href: "/admin/users" },
    { title: "Pending Reviews", value: num(stats?.pendingReviews), icon: FileText, href: "/admin/reviews" },
    { title: "Open Feedback", value: num(stats?.openFeedback), icon: MessageSquare, href: "/admin/feedback" },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage all aspects of the Intel Analyst Academy platform</p>
        </div>
        <Button asChild>
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return to Site
          </Link>
        </Button>
      </div>

      {!dbOk && (
        <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          Live data could not be loaded from the database. Showing placeholders - check the connection and reload.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {statCards.map(({ title, value, icon: Icon, href }) => (
          <Link key={title} href={href} className="block transition-colors">
            <Card className="hover:border-primary/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">Live from database</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Tabs defaultValue="content" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="content">Content Management</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Image Management</CardTitle>
                <CardDescription>Upload, view and manage images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <ImageIcon className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col space-y-2 w-full">
                  <Button asChild>
                    <Link href="/admin/images">Manage Images</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/admin/image-check">Verify Image Paths</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Path intros & lessons</CardTitle>
                <CardDescription>Private Blob reels — path intros and lesson videos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <FileVideo className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/path-intros">Upload path intros & lessons</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Review</CardTitle>
                <CardDescription>
                  {stats ? `${stats.pendingReviews} awaiting review` : "Review submitted content"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/reviews">Open Review Queue</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blob Storage</CardTitle>
                <CardDescription>Upload files to blob storage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <Upload className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/blob-upload">Upload to Blob</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Topic Management</CardTitle>
                <CardDescription>Manage learning topics and content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/topics">Manage Topics</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Thumbnails</CardTitle>
                <CardDescription>Generate category thumbnails</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <Grid className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/category-thumbnails">Generate Thumbnails</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Platform Status</CardTitle>
                <CardDescription>Live health and work queues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <span className={`text-sm font-medium ${dbOk ? "text-green-600" : "text-destructive"}`}>
                      {dbOk ? "Operational" : "Unreachable"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pending reviews</span>
                    <span className="text-sm text-muted-foreground">{num(stats?.pendingReviews)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Open feedback</span>
                    <span className="text-sm text-muted-foreground">{num(stats?.openFeedback)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Open topic requests</span>
                    <span className="text-sm text-muted-foreground">{num(stats?.openTopicRequests)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/status">View Detailed Status</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Search Verification</CardTitle>
                <CardDescription>Test and verify search functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <Search className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col space-y-2 w-full">
                  <Button asChild>
                    <Link href="/admin/search-test">Basic Search Test</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/admin/verify-search">Advanced Verification</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Configure system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <Settings className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/settings">System Settings</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                {stats ? `${stats.users} registered ${stats.users === 1 ? "account" : "accounts"}` : "Manage users and permissions"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto text-primary mb-4" />
                  <p className="text-2xl font-bold">{num(stats?.users)}</p>
                  <p className="text-sm text-muted-foreground">registered users</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/admin/users">Manage Users &amp; Roles</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Published Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{num(stats?.publishedContent)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{num(stats?.users)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Open Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{num(stats?.openFeedback)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Topic Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{num(stats?.openTopicRequests)}</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Deeper Analytics</CardTitle>
              <CardDescription>Trend charts and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-32">
                <div className="text-center">
                  <BarChart2 className="h-12 w-12 mx-auto text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Detailed analytics dashboard coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            {activity.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No recent activity to display</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Content submissions and reviews will appear here.
                </p>
              </div>
            ) : (
              <ul className="divide-y">
                {activity.map((row, i) => {
                  const { verb, icon: Icon, className } = describeAction(row.action)
                  const actor = row.actor_codename || row.actor_email || "Someone"
                  const target = row.submission_title || row.content_id || "content"
                  return (
                    <li key={i} className="flex items-start gap-3 p-4">
                      <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${className}`} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{actor}</span> {verb}{" "}
                          <span className="font-medium">&ldquo;{target}&rdquo;</span>
                        </p>
                        {row.comment && (
                          <p className="text-xs text-muted-foreground truncate">{row.comment}</p>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0">{timeAgo(row.created_at)}</span>
                    </li>
                  )
                })}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
