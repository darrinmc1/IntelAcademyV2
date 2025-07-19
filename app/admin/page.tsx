"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ImageIcon,
  FileVideo,
  Upload,
  Search,
  CheckCircle,
  AlertTriangle,
  Settings,
  Database,
  Users,
  BookOpen,
  BarChart2,
  Clock,
  Grid,
  FileText,
  Home,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  const [systemStatus, setSystemStatus] = useState({
    search: "healthy",
    database: "healthy",
    storage: "warning",
    api: "healthy",
  })

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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Topics</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+6 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Assets</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">487</div>
            <p className="text-xs text-muted-foreground">+24 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="h-2 mt-2" />
          </CardContent>
        </Card>
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
                <CardTitle>Video Library</CardTitle>
                <CardDescription>Manage video content and lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <FileVideo className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/videos">Manage Videos</Link>
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
                <CardTitle>Coming Soon Pages</CardTitle>
                <CardDescription>Manage placeholder pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-20">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admin/coming-soon-pages">Manage Pages</Link>
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
                <CardTitle>System Status</CardTitle>
                <CardDescription>Check system health and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Search Service</span>
                    {systemStatus.search === "healthy" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    {systemStatus.database === "healthy" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    {systemStatus.storage === "healthy" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Services</span>
                    {systemStatus.api === "healthy" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
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
              <CardDescription>Manage users and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto text-primary mb-4" />
                  <p>User management features coming soon</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/coming-soon/user-management">User Management</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>View platform usage and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <div className="text-center">
                  <BarChart2 className="h-16 w-16 mx-auto text-primary mb-4" />
                  <p>Analytics dashboard coming soon</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/coming-soon/analytics">View Analytics</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {[
                {
                  action: "Image uploaded",
                  user: "Admin",
                  time: "2 minutes ago",
                  icon: <Upload className="h-4 w-4" />,
                },
                { action: "Topic updated", user: "Editor", time: "1 hour ago", icon: <FileText className="h-4 w-4" /> },
                {
                  action: "Video added",
                  user: "Content Manager",
                  time: "3 hours ago",
                  icon: <FileVideo className="h-4 w-4" />,
                },
                { action: "System backup", user: "System", time: "Yesterday", icon: <Database className="h-4 w-4" /> },
                {
                  action: "New user registered",
                  user: "System",
                  time: "2 days ago",
                  icon: <Users className="h-4 w-4" />,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">{item.icon}</div>
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-muted-foreground">By {item.user}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{item.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
