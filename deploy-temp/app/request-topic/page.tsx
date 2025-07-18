import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RequestTopic() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/request-topic" isCurrentPage>
              Request a Topic
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Request a New Training Topic</h1>
          <p className="text-muted-foreground">
            Don&apos;t see what you&apos;re looking for? Let us know what topics you&apos;d like us to cover next.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Topic Request Form</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us understand your needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic-title">Topic Title</Label>
                <Input id="topic-title" placeholder="e.g., Advanced Social Media Intelligence Techniques" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="foundations">Foundations of Intelligence</SelectItem>
                    <SelectItem value="osint">OSINT</SelectItem>
                    <SelectItem value="analysts-notebook">Analyst&apos;s Notebook</SelectItem>
                    <SelectItem value="analytical-techniques">Analytical Techniques</SelectItem>
                    <SelectItem value="data-collection">Data Collection</SelectItem>
                    <SelectItem value="excel">Excel for Analysts</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe what you&apos;d like to learn about this topic and why it would be valuable."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience-level">Your Experience Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
                <p className="text-sm text-muted-foreground">
                  We&apos;ll only use this to notify you when your requested topic is available.
                </p>
              </div>

              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
