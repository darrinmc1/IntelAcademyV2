"use client"

import { useState } from "react"
import {
  BarChart2,
  TrendingUp,
  Users,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  BookOpen,
  MousePointer,
  Download,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor platform usage and performance</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+12.5% from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,432</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+24.3% from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8m 42s</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+3.2% from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.1%</div>
            <div className="flex items-center pt-1 text-xs text-red-500">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              <span>+2.3% from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>Daily traffic for the selected period</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <BarChart2 className="h-16 w-16 mx-auto text-primary mb-4" />
                  <p>Traffic chart visualization will appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { page: "Home", views: 4328, change: "+12%" },
                    { page: "What is Intelligence", views: 2156, change: "+8%" },
                    { page: "OSINT Techniques", views: 1842, change: "+24%" },
                    { page: "Strategic Intelligence", views: 1654, change: "+5%" },
                    { page: "Learning Paths", views: 1432, change: "+18%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <BookOpen className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{item.page}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.views.toLocaleString()}</span>
                        <span className="text-xs text-green-500">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Pages
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { source: "Direct", visits: 8432, change: "+15%" },
                    { source: "Organic Search", visits: 6218, change: "+22%" },
                    { source: "Referral", visits: 2845, change: "+8%" },
                    { source: "Social Media", visits: 1932, change: "+35%" },
                    { source: "Email", visits: 1245, change: "+5%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <MousePointer className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{item.source}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.visits.toLocaleString()}</span>
                        <span className="text-xs text-green-500">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Sources
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>Performance metrics for your content</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
                <p>Content performance metrics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Demographics</CardTitle>
              <CardDescription>User demographics and behavior</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto text-primary mb-4" />
                <p>User demographics visualization will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Engagement</CardTitle>
              <CardDescription>How users interact with your content</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 mx-auto text-primary mb-4" />
                <p>User engagement metrics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
