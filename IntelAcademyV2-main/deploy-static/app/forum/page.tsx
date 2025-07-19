import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Forum() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Community Forum</h1>
          <p className="text-muted-foreground mt-2">Connect with peers, ask questions, and share insights</p>
        </div>
        <div className="flex gap-4">
          <Input type="search" placeholder="Search discussions..." className="w-full md:w-[300px]" />
          <Button>New Discussion</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Discussions</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="osint">OSINT</TabsTrigger>
          <TabsTrigger value="link-analysis">Link Analysis</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="career">Career Advice</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Best practices for validating OSINT sources?</CardTitle>
                  <CardDescription>Started by Alex Chen • 2 days ago • 15 replies</CardDescription>
                </div>
                <div className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">OSINT</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2">
                I&apos;m working on a project that requires extensive OSINT research, and I&apos;m looking for advice on how to
                effectively validate sources. What methods do you use to ensure the information you&apos;re gathering is
                reliable?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="@alexchen" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Alex Chen</span>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/coming-soon/community-forums">View Discussion</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Analyst's Notebook alternatives for small teams?</CardTitle>
                  <CardDescription>Started by Maria Lopez • 3 days ago • 8 replies</CardDescription>
                </div>
                <div className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Tools</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2">
                My team is looking for alternatives to Analyst&apos;s Notebook that are more budget-friendly for a small
                organization. We need link analysis capabilities but can&apos;t justify the cost of full i2 licenses. Any
                recommendations?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="@marialopez" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Maria Lopez</span>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/coming-soon/community-forums">View Discussion</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">
                    Transitioning from law enforcement to private sector analysis
                  </CardTitle>
                  <CardDescription>Started by James Wilson • 5 days ago • 12 replies</CardDescription>
                </div>
                <div className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Career</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2">
                After 10 years in law enforcement intelligence, I&apos;m considering a move to the private sector. What
                skills should I highlight on my resume? Are there specific certifications that private companies value
                more than others?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="@jameswilson" />
                  <AvatarFallback>JW</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">James Wilson</span>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/coming-soon/community-forums">View Discussion</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* More discussion cards would follow the same pattern */}
        </TabsContent>

        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </div>
  )
}
