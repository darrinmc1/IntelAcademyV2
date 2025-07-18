import type { Metadata } from "next"
import { Search, Shield, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TopicHeader } from "@/components/topic-header"
import { LessonContainer } from "@/components/lesson-container"

export const metadata: Metadata = {
  title: "Google Dorking Techniques | The Intel Analyst Academy",
  description: "Master advanced Google search operators for effective OSINT investigations.",
}

export default function GoogleDorkingPage() {
  return (
    <LessonContainer>
      <TopicHeader
        title="Google Dorking Techniques"
        description="Master advanced Google search operators for effective OSINT investigations and information gathering."
        readTime={20}
        category="OSINT"
        imageSrc="/google-dorking.png"
        publishDate="February 10, 2023"
      />

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">What is Google Dorking?</h2>
        <p className="text-gray-600 italic mb-4">
                    &quot;Making Google do things it didn&apos;t know it could do, legally and ethically&quot;
        </p>

        <p className="mb-6">
          Google Dorking, also known as Google Hacking, involves using advanced search operators to find specific
          information that might not be easily discoverable through normal search queries. These techniques are
          essential for OSINT practitioners who need to efficiently locate relevant information from the vast amount of
          data available on the internet.
        </p>

        <h2 className="text-2xl font-bold mb-4">Essential Search Operators</h2>
        <p className="text-gray-600 italic mb-4">&quot;Your new superpowers for finding needles in the internet haystack&quot;</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Basic Operators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">site:</code>
                  <p className="text-sm text-gray-600">Search within a specific website</p>
                  <p className="text-xs text-gray-500">Example: site:linkedin.com "John Smith"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">filetype:</code>
                  <p className="text-sm text-gray-600">Find specific file types</p>
                  <p className="text-xs text-gray-500">Example: filetype:pdf "annual report"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">intitle:</code>
                  <p className="text-sm text-gray-600">Search in page titles</p>
                  <p className="text-xs text-gray-500">Example: intitle:"employee directory"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Advanced Operators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">inurl:</code>
                  <p className="text-sm text-gray-600">Search in URLs</p>
                  <p className="text-xs text-gray-500">Example: inurl:admin login</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">cache:</code>
                  <p className="text-sm text-gray-600">View cached version of pages</p>
                  <p className="text-xs text-gray-500">Example: cache:example.com</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">related:</code>
                  <p className="text-sm text-gray-600">Find similar websites</p>
                  <p className="text-xs text-gray-500">Example: related:cnn.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Practical OSINT Applications</h2>
        <p className="text-gray-600 italic mb-4">&quot;Where search operators meet real-world intelligence gathering&quot;</p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Finding Employee Information</CardTitle>
              <CardDescription>Locate organizational charts and employee directories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code>site:company.com filetype:pdf "organizational chart"</code>
                <p className="text-sm text-gray-600 mt-2">
                  Searches for PDF organizational charts on the company&apos;s website
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Discovery</CardTitle>
              <CardDescription>Find sensitive documents that may have been inadvertently exposed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code>filetype:xls "confidential" OR "internal use only"</code>
                <p className="text-sm text-gray-600 mt-2">
                  Searches for Excel files containing confidential information
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Intelligence</CardTitle>
              <CardDescription>Gather information from social media platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code>site:twitter.com "target company" "layoffs"</code>
                <p className="text-sm text-gray-600 mt-2">Searches for tweets about layoffs at a specific company</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Ethical Considerations:</strong> Always ensure your Google dorking activities comply with legal and
            ethical guidelines. Respect website terms of service and privacy policies. Use these techniques responsibly
            for legitimate research purposes only.
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mb-4">Advanced Techniques</h2>
        <p className="text-gray-600 italic mb-4">&quot;When basic dorking isn&apos;t enough and you need to go deeper&quot;</p>

        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Combining Operators</h3>
            <p className="mb-2">Multiple operators can be combined for more precise searches:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code>site:linkedin.com intitle:"Chief Executive Officer" "New York"</code>
              <p className="text-sm text-gray-600 mt-2">Finds LinkedIn profiles of CEOs in New York</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Wildcard Searches</h3>
            <p className="mb-2">Use asterisks (*) as wildcards for unknown terms:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code>"John Smith" * "software engineer"</code>
              <p className="text-sm text-gray-600 mt-2">
                Finds pages mentioning John Smith with any word between his name and "software engineer"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Date Range Searches</h3>
            <p className="mb-2">Use Google&apos;s tools to filter by date ranges for time-sensitive intelligence.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <p className="text-gray-600 italic mb-4">&quot;Professional tips from analysts who&apos;ve been there, dorked that&quot;</p>

        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Start with broad searches and gradually narrow down with specific operators</li>
          <li>Keep detailed records of your search queries and results</li>
          <li>Use VPNs and consider operational security when conducting sensitive searches</li>
          <li>Verify information found through dorking with additional sources</li>
          <li>Stay updated on new search operators and techniques</li>
          <li>Practice regularly to maintain and improve your dorking skills</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <h3 className="font-bold text-blue-800 mb-2">Pro Tip</h3>
          <p className="text-blue-700">
            Create a personal collection of effective dork queries for different types of investigations. This &quot;dork
            library&quot; will save time and improve consistency in your OSINT research.
          </p>
        </div>
      </div>
    </LessonContainer>
  )
}
