import type { Metadata } from "next"
import { LessonContainer } from "@/components/lesson-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Search, FileText, Shield, AlertTriangle } from "lucide-react"
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
  title: "OSINT Workflow and Methodology | The Intel Analyst Academy",
  description: "Learn systematic approaches to OSINT investigations and establish effective workflows.",
}

export default function OSINTWorkflowPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="OSINT Workflow and Methodology"
        subtitle="Master systematic approaches to OSINT investigations and establish effective research workflows."
        readTime={30}
        difficulty="Intermediate"
        category="OSINT"
        mascot="osint"
        mascotMessage="Let's turn that chaos into a perfectly orchestrated intelligence symphony!"
      >
        <MissionBriefing>
          <p className="mb-4">
            By the end of this lesson, you'll be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Understand the six-phase OSINT investigation framework</li>
            <li>Develop comprehensive planning and requirements documents</li>
            <li>Identify and evaluate both primary and secondary intelligence sources</li>
            <li>Create and execute effective collection strategies with proper OPSEC</li>
            <li>Analyze and verify information systematically</li>
            <li>Document and report findings in a professional, legally defensible manner</li>
          </ul>
          <p className="text-slate-400 italic">
            "Turning chaotic internet browsing into systematic intelligence gathering"
          </p>
        </MissionBriefing>

        <DeepDive title="The OSINT Investigation Process">
          <p className="mb-6">
            Effective OSINT investigations require a structured approach to ensure coverage, maintain
            evidence integrity, and produce reliable intelligence. A well-defined workflow helps analysts stay organized,
            avoid missing critical information, and document their findings properly.
          </p>
        </DeepDive>

        <DeepDive title="Phase 1: Planning and Requirements">
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
        </DeepDive>

        <DeepDive title="Phase 2: Source Identification">
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
        </DeepDive>

        <DeepDive title="Phase 3: Collection Strategy">
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
        </DeepDive>

        <DeepDive title="Phase 4: Data Collection">
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
        </DeepDive>

        <JokeAside>
          Just like a detective would never trust a "totally reliable" tipster without verification, we don't trust any single source. The internet is full of lies, so we gather evidence like we're building a case in court!
        </JokeAside>

        <DeepDive title="Phase 5: Analysis and Verification">
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
        </DeepDive>

        <DeepDive title="Phase 6: Documentation and Reporting">
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
        </DeepDive>

        <DeepDive title="Tools and Templates">
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
        </DeepDive>

        <ProTip>
          Develop your own OSINT workflow checklist based on your specific requirements and environment. Regularly
          review and update your processes based on lessons learned and new tools or techniques. A well-refined
          workflow is often the difference between amateur internet searching and professional intelligence gathering.
        </ProTip>

        <Debrief
          takeaways={[
            "Structured workflows transform chaotic information gathering into professional intelligence operations",
            "Six-phase framework: Planning → Source ID → Collection Strategy → Data Collection → Analysis → Documentation",
            "Quality source identification and evaluation is the foundation of reliable intelligence",
            "Operational security must be built into every phase of the investigation process",
            "Comprehensive documentation creates legally defensible, auditable intelligence products",
            "Regular process refinement based on lessons learned drives continuous improvement",
          ]}
          humorSummary="Remember: An organized analyst is a professional analyst. Your workflow is your shield against chaos, your sword against misinformation, and your path to becoming the intelligence professional your organization needs!"
        />
      </MicroLesson>
    </LessonContainer>
  )
}
