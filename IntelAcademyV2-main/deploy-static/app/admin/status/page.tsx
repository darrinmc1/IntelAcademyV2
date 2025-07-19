import { GroqStatusCheck } from "@/components/groq-status-check"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatusPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">System Status</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Groq Integration</CardTitle>
            <CardDescription>Check if the Groq API is properly configured and working</CardDescription>
          </CardHeader>
          <CardContent>
            <GroqStatusCheck />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search Functionality</CardTitle>
            <CardDescription>Verify that the search system is working correctly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Use the search test page to verify search functionality
            </p>
            <a
              href="/admin/search-test"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Go to Search Test
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
