import type { Metadata } from "next"
import { Users, Eye, Shield, AlertTriangle } from "lucide-react"
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
  title: "SOCMINT Techniques | The Intel Analyst Academy",
  description: "Master Social Media Intelligence gathering techniques for effective OSINT investigations.",
}

export default function SOCMINTTechniquesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Social Media Intelligence (SOCMINT) Techniques"
        subtitle="Master the art of gathering intelligence from social media platforms while maintaining ethical standards."
        readTime={25}
        difficulty="Intermediate"
        category="OSINT"
        mascot="osint"
        mascotMessage="Let's turn those selfies and status updates into actionable intelligence!"
      >
        <MissionBriefing>
          <p className="mb-4">
            By the end of this lesson, you'll be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Understand the fundamentals and importance of SOCMINT in modern intelligence operations</li>
            <li>Identify and leverage key social media platforms for intelligence collection</li>
            <li>Conduct comprehensive profile analysis and network mapping</li>
            <li>Monitor content systematically for intelligence indicators</li>
            <li>Operate with proper OPSEC to avoid detection or target awareness</li>
            <li>Navigate ethical and legal considerations in SOCMINT activities</li>
          </ul>
          <p className="text-slate-400 italic">
            "Professional people-watching, but with better tools and legal authorization"
          </p>
        </MissionBriefing>

        <DeepDive title="What is SOCMINT?">
          <p className="mb-6">
            Social Media Intelligence (SOCMINT) is the collection and analysis of information from social media platforms
            to produce actionable intelligence. In an era where people voluntarily share vast amounts of personal
            information online, SOCMINT has become an invaluable tool for intelligence analysts, investigators, and
            security professionals.
          </p>
        </DeepDive>

        <DeepDive title="Key SOCMINT Platforms">
          <p className="text-gray-600 italic mb-4">"Where people document their lives, one overshare at a time"</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Major Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Facebook/Meta</h4>
                  <p className="text-sm text-gray-600">Personal networks, events, check-ins</p>
                </div>
                <div>
                  <h4 className="font-semibold">Twitter/X</h4>
                  <p className="text-sm text-gray-600">Real-time updates, opinions, news</p>
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-sm text-gray-600">Professional networks, employment history</p>
                </div>
                <div>
                  <h4 className="font-semibold">Instagram</h4>
                  <p className="text-sm text-gray-600">Visual content, location data, lifestyle</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Specialized Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">TikTok</h4>
                  <p className="text-sm text-gray-600">Short-form video, trends, younger demographics</p>
                </div>
                <div>
                  <h4 className="font-semibold">Reddit</h4>
                  <p className="text-sm text-gray-600">Anonymous discussions, niche communities</p>
                </div>
                <div>
                  <h4 className="font-semibold">Telegram</h4>
                  <p className="text-sm text-gray-600">Encrypted messaging, channels, groups</p>
                </div>
                <div>
                  <h4 className="font-semibold">Discord</h4>
                  <p className="text-sm text-gray-600">Gaming communities, real-time chat</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </DeepDive>

        <DeepDive title="SOCMINT Collection Techniques">
          <p className="text-gray-600 italic mb-4">"Turning digital breadcrumbs into intelligence gold"</p>

        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Profile Analysis</CardTitle>
              <CardDescription>Comprehensive examination of user profiles and their digital footprint</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Personal information and biographical details</li>
                <li>Connection networks and relationship mapping</li>
                <li>Activity patterns and behavioral analysis</li>
                <li>Content themes and interests</li>
                <li>Location data and travel patterns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Monitoring</CardTitle>
              <CardDescription>Systematic tracking of posts, comments, and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Keyword and hashtag monitoring</li>
                <li>Sentiment analysis of posts and comments</li>
                <li>Image and video content analysis</li>
                <li>Engagement metrics and influence assessment</li>
                <li>Temporal analysis of posting patterns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Analysis</CardTitle>
              <CardDescription>Mapping relationships and influence within social networks</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Friend/follower network mapping</li>
                <li>Influence and authority identification</li>
                <li>Community detection and clustering</li>
                <li>Information flow analysis</li>
                <li>Key node identification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        </DeepDive>

        <DeepDive title="Advanced SOCMINT Tools">
          <p className="text-gray-600 italic mb-4">
            "When manual scrolling isn't enough and you need industrial-strength social media analysis"
          </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Automated Collection Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold">Social Media Scrapers</h4>
                  <p className="text-sm text-gray-600">Automated data collection from multiple platforms</p>
                </div>
                <div>
                  <h4 className="font-semibold">API Integration</h4>
                  <p className="text-sm text-gray-600">Official platform APIs for structured data access</p>
                </div>
                <div>
                  <h4 className="font-semibold">Monitoring Dashboards</h4>
                  <p className="text-sm text-gray-600">Real-time tracking and alerting systems</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analysis Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold">Maltego</h4>
                  <p className="text-sm text-gray-600">Link analysis and data visualization</p>
                </div>
                <div>
                  <h4 className="font-semibold">Gephi</h4>
                  <p className="text-sm text-gray-600">Network analysis and visualization</p>
                </div>
                <div>
                  <h4 className="font-semibold">Social Analyzer</h4>
                  <p className="text-sm text-gray-600">Cross-platform profile analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </DeepDive>

        <JokeAside>
          Here's the golden rule: just because someone put it on the internet doesn't mean you should put your real face on it while collecting their data. Stay hidden, stay professional, and definitely don't accidentally like their 2015 vacation photos.
        </JokeAside>

        <DeepDive title="Operational Security (OPSEC)">
          <p className="text-gray-600 italic mb-4">
            "How to research people without them knowing you're researching them"
          </p>

          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  OPSEC Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use dedicated research accounts with minimal personal information</li>
                  <li>Employ VPNs and proxy services to mask your location</li>
                  <li>Avoid direct interaction with targets (likes, follows, comments)</li>
                  <li>Use private browsing modes and clear cookies regularly</li>
                  <li>Maintain operational logs and evidence chains</li>
                  <li>Be aware of platform notification systems that might alert targets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </DeepDive>

        <DeepDive title="Common SOCMINT Challenges">
          <p className="text-gray-600 italic mb-4">
            "The obstacles that make SOCMINT analysts question their life choices"
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Privacy Settings and Access Limitations</h3>
              <p className="mb-2">
                Many users have learned to adjust privacy settings, limiting the information available for analysis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Information Overload</h3>
              <p className="mb-2">
                The sheer volume of social media data can be overwhelming, requiring effective filtering and
                prioritization.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Platform Changes</h3>
              <p className="mb-2">
                Social media platforms frequently update their interfaces, APIs, and policies, affecting collection
                methods.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Verification and Authenticity</h3>
              <p className="mb-2">
                Distinguishing between genuine content and misinformation, fake accounts, or manipulated media.
              </p>
            </div>
          </div>
        </DeepDive>

        <ProTip>
          Develop a systematic approach to SOCMINT collection by creating standardized templates and checklists. This
          ensures consistency and completeness in your investigations while reducing the risk of missing important
          information.
        </ProTip>

        <Debrief
          takeaways={[
            "SOCMINT is an invaluable intelligence discipline in the age of mass information sharing",
            "Different platforms serve different intelligence purposes and require tailored collection strategies",
            "Profile analysis, content monitoring, and network analysis form the foundation of SOCMINT operations",
            "Operational security is critical to maintain cover and avoid alerting targets",
            "Verification and authenticity assessment are essential given the prevalence of misinformation",
            "Systematic approaches with templates and checklists ensure professional, consistent intelligence collection",
          ]}
          humorSummary="Remember: Social media is a goldmine of intelligence for those who know how to dig. Keep your cover tight, your methods systematic, and your ethical standards even tighter. Now get out there and become the SOCMINT analyst your organization needs!"
        />
      </MicroLesson>
    </LessonContainer>
  )
}
