import type { Metadata } from "next"
import { TopicHeader } from "@/components/topic-header"
import { LessonContainer } from "@/components/lesson-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Search, FileText, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "OSINT Workflow and Methodology | The Intel Analyst Academy",
  description: "Learn systematic approaches to OSINT investigations and establish effective workflows.",
}

export default function OSINTWorkflowPage() {
  return (
    <LessonContainer>
      <TopicHeader
        title="OSINT Workflow and Methodology"
        description="Master systematic approaches to OSINT investigations and establish effective research workflows."
        readTime={30}
        category="OSINT"
        imageSrc="/osint-workflow.png"
        publishDate="February 20, 2023"
      />

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">The OSINT Investigation Process</h2>
        <p className="text-gray-600 italic mb-4">
          "Turning chaotic internet browsing into systematic intelligence gathering"
        </p>

        <p className="mb-6">
          Effective OSINT investigations require a structured approach to ensure coverage, maintain
          evidence integrity, and produce reliable intelligence. A well-defined workflow helps analysts stay organized,
          avoid missing critical information, and document their findings properly.
        </p>

        <h2 className="text-2xl font-bold mb-4">Phase 1: Planning and Requirements</h2>
        <p className="text-gray-600 italic mb-4">
          "Where you figure out what you're actually looking for before diving into the internet rabbit hole"
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Requirements Definition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Intelligence Requirements:</strong> What specific information is needed?
              </li>
              <li>
                <strong>Target Definition:</strong> Who or what is the subject of investigation?
              </li>
              <li>
                <strong>Scope and Limitations:</strong> What are the boundaries of the investigation?
              </li>
              <li>
                <strong>Timeline:</strong> When is the intelligence needed?
              </li>
              <li>
                <strong>Legal and Ethical Constraints:</strong> What limitations must be observed?
              </li>
              <li>
                <strong>Success Criteria:</strong> How will you know when you have enough information?
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Phase 2: Source Identification</h2>
        <p className="text-gray-600 italic mb-4">"Mapping the digital universe before you start exploring it"</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Primary Sources</CardTitle>
              <CardDescription>Direct sources of information about your target</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Official websites and publications</li>
                <li>Social media profiles</li>
                <li>Government databases</li>
                <li>Corporate filings</li>
                <li>News articles and press releases</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secondary Sources</CardTitle>
              <CardDescription>Sources that reference or discuss your target</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Academic papers and research</li>
                <li>Industry reports</li>
                <li>Forum discussions</li>
                <li>Blog posts and articles</li>
                <li>Third-party databases</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Phase 3: Collection Strategy</h2>
        <p className="text-gray-600 italic mb-4">"Your battle plan for conquering the information landscape"</p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Strategy Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Keyword Development</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Primary keywords and variations</li>
                    <li>Alternative spellings and translations</li>
                    <li>Related terms and synonyms</li>
                    <li>Industry-specific terminology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Search Operators</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Boolean operators (AND, OR, NOT)</li>
                    <li>Google dorking techniques</li>
                    <li>Platform-specific search features</li>
                    <li>Advanced filtering options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Operational Security Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>VPN and proxy configuration</li>
                <li>Research account setup</li>
                <li>Browser security settings</li>
                <li>Data storage and encryption</li>
                <li>Communication security</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Phase 4: Data Collection</h2>
        <p className="text-gray-600 italic mb-4">
          "The actual hunting and gathering phase, but with keyboards instead of spears"
        </p>

        <div className="space-y-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Systematic Collection Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Start Broad:</strong> Begin with general searches to understand the landscape
                </li>
                <li>
                  <strong>Narrow Focus:</strong> Use specific keywords and operators to drill down
                </li>
                <li>
                  <strong>Cross-Reference:</strong> Verify information across multiple sources
                </li>
                <li>
                  <strong>Document Everything:</strong> Maintain detailed logs of searches and findings
                </li>
                <li>
                  <strong>Follow Leads:</strong> Pursue new information discovered during collection
                </li>
                <li>
                  <strong>Time Management:</strong> Set limits to avoid endless rabbit holes
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Phase 5: Analysis and Verification</h2>
        <p className="text-gray-600 italic mb-4">
          "Separating the wheat from the chaff, or in OSINT terms, facts from internet nonsense"
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Information Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Source credibility assessment</li>
                <li>Information correlation</li>
                <li>Gap identification</li>
                <li>Pattern recognition</li>
                <li>Timeline construction</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Multiple source confirmation</li>
                <li>Reverse image searches</li>
                <li>Metadata analysis</li>
                <li>Fact-checking resources</li>
                <li>Expert consultation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Phase 6: Documentation and Reporting</h2>
        <p className="text-gray-600 italic mb-4">
          "Making your digital detective work look professional and legally defensible"
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Documentation Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Evidence Chain</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Source URLs and access timestamps</li>
                  <li>Screenshots and archived copies</li>
                  <li>Search queries and methodologies</li>
                  <li>Tool configurations and settings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analysis Documentation</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Analytical assumptions and limitations</li>
                  <li>Confidence levels and reliability assessments</li>
                  <li>Alternative hypotheses considered</li>
                  <li>Recommendations for further investigation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Quality Control:</strong> Always review your work for accuracy, completeness, and bias. Have
            colleagues review significant findings when possible. Remember that OSINT intelligence products may be used
            for important decisions.
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mb-4">Tools and Templates</h2>
        <p className="text-gray-600 italic mb-4">"Your OSINT toolkit for staying organized and professional"</p>

        <div className="space-y-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Essential Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Investigation Plan Template:</strong> Standardized planning document
                </li>
                <li>
                  <strong>Source Evaluation Matrix:</strong> Systematic source assessment
                </li>
                <li>
                  <strong>Collection Log:</strong> Detailed record of searches and findings
                </li>
                <li>
                  <strong>Evidence Inventory:</strong> Catalog of collected materials
                </li>
                <li>
                  <strong>Analysis Worksheet:</strong> Structured analytical framework
                </li>
                <li>
                  <strong>Report Template:</strong> Professional intelligence product format
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <h3 className="font-bold text-blue-800 mb-2">Pro Tip</h3>
          <p className="text-blue-700">
            Develop your own OSINT workflow checklist based on your specific requirements and environment. Regularly
            review and update your processes based on lessons learned and new tools or techniques. A well-refined
            workflow is often the difference between amateur internet searching and professional intelligence gathering.
          </p>
        </div>
      </div>
    </LessonContainer>
  )
}
