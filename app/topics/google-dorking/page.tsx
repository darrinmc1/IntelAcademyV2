import type { Metadata } from "next"
import { Search, Shield, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LessonContainer } from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  FieldExercise,
  ProTip,
  JokeAside,
  Debrief,
} from "@/components/micro-lesson"

export const metadata: Metadata = {
  title: "Google Dorking Techniques | The Intel Analyst Academy",
  description: "Master advanced Google search operators for effective OSINT investigations.",
}

export default function GoogleDorkingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Google Dorking Techniques"
        subtitle="Master advanced Google search operators for effective OSINT investigations and information gathering."
        readTime={20}
        difficulty="Intermediate"
        category="OSINT"
        mascot="osint"
        mascotMessage="Let's turn those search bars into intelligence goldmines!"
      >
        <MissionBriefing>
          <p className="mb-4">
            By the end of this lesson, you'll be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Understand the fundamentals of Google dorking and its intelligence applications</li>
            <li>Master essential and advanced Google search operators</li>
            <li>Apply dorking techniques to real-world OSINT investigations</li>
            <li>Develop a personal library of effective dork queries</li>
            <li>Maintain ethical standards in your search activities</li>
          </ul>
          <p className="text-gray-600 italic">
            "Making Google do things it didn't know it could do, legally and ethically"
          </p>
        </MissionBriefing>

        <DeepDive title="What is Google Dorking?">
          <p className="mb-4">
            Google Dorking, also known as Google Hacking, involves using advanced search operators to find specific
            information that might not be easily discoverable through normal search queries. These techniques are
            essential for OSINT practitioners who need to efficiently locate relevant information from the vast amount of
            data available on the internet.
          </p>
        </DeepDive>

        <DeepDive title="Essential Search Operators">
          <p className="text-gray-600 italic mb-4">"Your new superpowers for finding needles in the internet haystack"</p>

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
        </DeepDive>

        <DeepDive title="Practical OSINT Applications">
          <p className="text-gray-600 italic mb-4">"Where search operators meet real-world intelligence gathering"</p>

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
        </DeepDive>

        <JokeAside>
          Just like a good spy never blows their cover, a good analyst never violates the terms of service. Be the professional your target's security team didn't know they needed to worry about.
        </JokeAside>

        <DeepDive title="Advanced Techniques">
          <p className="text-gray-600 italic mb-4">"When basic dorking isn't enough and you need to go deeper"</p>

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
        </DeepDive>

        <DeepDive title="Best Practices">
          <p className="text-gray-600 italic mb-4">"Professional tips from analysts who've been there, dorked that"</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Start with broad searches and gradually narrow down with specific operators</li>
            <li>Keep detailed records of your search queries and results</li>
            <li>Use VPNs and consider operational security when conducting sensitive searches</li>
            <li>Verify information found through dorking with additional sources</li>
            <li>Stay updated on new search operators and techniques</li>
            <li>Practice regularly to maintain and improve your dorking skills</li>
          </ul>
        </DeepDive>

        <ProTip>
          Create a personal collection of effective dork queries for different types of investigations. This "dork
          library" will save time and improve consistency in your OSINT research.
        </ProTip>

        <Debrief
          takeaways={[
            "Google dorking harnesses advanced search operators to uncover non-obvious information",
            "Essential operators (site:, filetype:, intitle:) form the foundation of effective searching",
            "Combining multiple operators enables precise, targeted intelligence gathering",
            "Ethical and legal compliance is non-negotiable in OSINT activities",
            "A personal library of effective queries dramatically improves investigation efficiency",
          ]}
          humorSummary="Remember: with great dorking power comes great responsibility. Use your search skills for good, keep your operational security tight, and always verify your findings. Now go forth and dork responsibly!"
        />
      </MicroLesson>
    </LessonContainer>
  )
}
