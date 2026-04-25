import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BookOpen, ArrowRight, LightbulbIcon, AlertTriangle, Info, CheckCircle, Target, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  ProTip,
  JokeAside,
  Debrief,
} from "@/components/micro-lesson"
import { WhatsNext } from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Intelligence in Decision Making | The Intel Analyst Academy",
  description:
    "Learn how intelligence supports effective decision-making processes across various domains and the critical role it plays in reducing uncertainty.",
}

export default function IntelligenceDecisionMakingPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <MicroLesson
        title="Intelligence in Decision Making"
        subtitle="How intelligence reduces uncertainty and enhances decision quality across domains"
        readTime={14}
        difficulty="Intermediate"
        category="Foundations"
        mascot="foundations"
        mascotMessage="Ready to see how intelligence transforms decision-making? Let's explore real-world applications!"
      >
        <MissionBriefing
          humorText="Think of intelligence as your decision-making GPS. Information is just static; intelligence shows you where the traffic is."
        >
          In this lesson, you'll discover:
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>How intelligence reduces uncertainty in complex decisions</li>
            <li>The continuous cycle between decisions and intelligence requirements</li>
            <li>Real-world examples across national security, law enforcement, business, and cybersecurity</li>
            <li>Key challenges and best practices for intelligence-based decision making</li>
          </ul>
        </MissionBriefing>

        <section className="mb-10">
          <DeepDive title="The Role of Intelligence in Decision Making">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-start mb-4">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                <LightbulbIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Core Purpose</h3>
                <p className="text-slate-300">
                  The fundamental purpose of intelligence is to support decision-making by reducing uncertainty,
                  identifying threats and opportunities, and providing actionable insights that enable more effective
                  choices.
                </p>
              </div>
            </div>

            <div className="pl-16">
              <h4 className="font-medium mb-2">Intelligence serves decision-makers by:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Reducing uncertainty</strong> in complex situations
                </li>
                <li>
                  <strong>Providing early warning</strong> of potential threats or opportunities
                </li>
                <li>
                  <strong>Offering context and meaning</strong> to events and developments
                </li>
                <li>
                  <strong>Identifying patterns and trends</strong> that may not be immediately apparent
                </li>
                <li>
                  <strong>Assessing capabilities and intentions</strong> of relevant actors
                </li>
                <li>
                  <strong>Evaluating potential outcomes</strong> of different courses of action
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mb-6">
            <Image
              src="/intelligence-reduce-uncertainty.png"
              alt="Intelligence reducing uncertainty in decision making"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 italic text-center mb-8">
            Intelligence narrows the cone of uncertainty, enabling more confident decision-making
          </p>
          </DeepDive>
        </section>

        <section className="mb-10">
          <DeepDive title="The Decision-Intelligence Cycle">

          <p className="mb-6">
            Intelligence and decision-making form a continuous, iterative cycle where each element informs and enhances
            the other:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">1. Requirements</h3>
                <p className="text-gray-700">
                  Decision-makers identify key questions and information needs to address specific challenges or
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">2. Intelligence Production</h3>
                <p className="text-gray-700">
                  Intelligence professionals collect, analyze, and produce insights tailored to decision-maker
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <LightbulbIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">3. Decision Implementation</h3>
                <p className="text-gray-700">
                  Decision-makers apply intelligence insights to make more informed choices and take appropriate action.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3">Feedback Loop</h3>
            <p className="mb-4">
              The cycle continues as decisions generate new requirements, questions, and information needs:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Decision outcomes reveal new intelligence gaps</li>
              <li>Changes in the operational environment create new information needs</li>
              <li>Decision-makers provide feedback on intelligence utility</li>
              <li>Intelligence professionals refine their products based on feedback</li>
            </ul>
          </div>
          </DeepDive>
        </section>

        <section className="mb-10">
          <DeepDive title="Intelligence Applications Across Domains">

          <Tabs defaultValue="national-security" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="national-security">National Security</TabsTrigger>
              <TabsTrigger value="law-enforcement">Law Enforcement</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
            </TabsList>

            <TabsContent value="national-security" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">National Security Decision Making</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Decisions Supported:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Military operations and force deployment</li>
                    <li>Diplomatic negotiations and foreign policy</li>
                    <li>Counter-terrorism strategy and operations</li>
                    <li>Nuclear deterrence and arms control</li>
                    <li>Border security and immigration policy</li>
                  </ul>

                  <h4 className="font-medium mt-4 mb-2">Intelligence Products:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>National Intelligence Estimates</li>
                    <li>Presidential Daily Brief</li>
                    <li>Strategic assessments</li>
                    <li>Threat warnings and alerts</li>
                    <li>Capability assessments</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Case Example: Cuban Missile Crisis</h4>
                  <p className="text-sm mb-3">
                    In October 1962, U.S. intelligence identified Soviet nuclear missile installations in Cuba through
                    aerial reconnaissance. This intelligence prompted President Kennedy to implement a naval blockade
                    rather than an immediate military strike, allowing for diplomatic resolution of the crisis.
                  </p>
                  <h4 className="font-medium mb-2">Intelligence Impact:</h4>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Provided early warning of a critical threat</li>
                    <li>Enabled assessment of Soviet capabilities and intentions</li>
                    <li>Supported evaluation of multiple response options</li>
                    <li>Facilitated monitoring of Soviet compliance with agreements</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="law-enforcement" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">Law Enforcement Decision Making</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Decisions Supported:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Resource allocation and patrol deployment</li>
                    <li>Investigation prioritization</li>
                    <li>Tactical operations planning</li>
                    <li>Crime prevention strategies</li>
                    <li>Organized crime disruption</li>
                  </ul>

                  <h4 className="font-medium mt-4 mb-2">Intelligence Products:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Crime pattern analysis</li>
                    <li>Threat assessments</li>
                    <li>Criminal network analysis</li>
                    <li>Hot spot mapping</li>
                    <li>Offender profiles</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Case Example: CompStat Implementation</h4>
                  <p className="text-sm mb-3">
                    The New York Police Department's implementation of CompStat in the 1990s used crime data analysis to
                    identify patterns and hot spots, allowing for targeted deployment of resources to high-crime areas.
                  </p>
                  <h4 className="font-medium mb-2">Intelligence Impact:</h4>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Enabled data-driven resource allocation</li>
                    <li>Identified emerging crime patterns</li>
                    <li>Facilitated accountability for crime reduction</li>
                    <li>Supported proactive rather than reactive policing</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">Business Decision Making</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Decisions Supported:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Market entry and expansion</li>
                    <li>Competitive strategy</li>
                    <li>Investment and acquisition</li>
                    <li>Product development</li>
                    <li>Risk management</li>
                  </ul>

                  <h4 className="font-medium mt-4 mb-2">Intelligence Products:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Competitive intelligence reports</li>
                    <li>Market trend analysis</li>
                    <li>Country risk assessments</li>
                    <li>Customer insights</li>
                    <li>Supply chain vulnerability analysis</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Case Example: Netflix Content Strategy</h4>
                  <p className="text-sm mb-3">
                    Netflix uses viewer data analysis to inform decisions about content creation and acquisition,
                    allowing them to identify viewer preferences and trends that guide investment in original
                    programming.
                  </p>
                  <h4 className="font-medium mb-2">Intelligence Impact:</h4>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Reduced uncertainty in content investment decisions</li>
                    <li>Identified emerging viewer preferences</li>
                    <li>Enabled targeted content development</li>
                    <li>Supported strategic positioning against competitors</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cybersecurity" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">Cybersecurity Decision Making</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Decisions Supported:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Security architecture and controls</li>
                    <li>Incident response prioritization</li>
                    <li>Vulnerability management</li>
                    <li>Security investment allocation</li>
                    <li>Threat hunting strategy</li>
                  </ul>

                  <h4 className="font-medium mt-4 mb-2">Intelligence Products:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Threat actor profiles</li>
                    <li>Vulnerability assessments</li>
                    <li>Malware analysis</li>
                    <li>Attack pattern identification</li>
                    <li>Early warning indicators</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Case Example: SolarWinds Response</h4>
                  <p className="text-sm mb-3">
                    Following the discovery of the SolarWinds supply chain compromise in 2020, organizations used threat
                    intelligence to determine if they were affected and to prioritize response actions based on the
                    tactics, techniques, and procedures of the threat actors.
                  </p>
                  <h4 className="font-medium mb-2">Intelligence Impact:</h4>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Enabled rapid identification of compromise indicators</li>
                    <li>Facilitated understanding of attacker objectives</li>
                    <li>Supported prioritization of remediation efforts</li>
                    <li>Informed long-term security strategy adjustments</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          </DeepDive>
        </section>

        <section className="mb-10">
          <DeepDive title="Key Challenges in Intelligence-Based Decision Making">

          <div className="space-y-4 mb-8">
            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Uncertainty and Incomplete Information</h3>
                <p className="text-gray-700">
                  Intelligence rarely provides complete certainty. Decision-makers must become comfortable operating
                  with some degree of uncertainty and understanding probability-based assessments.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Cognitive Biases</h3>
                <p className="text-gray-700">
                  Both intelligence analysts and decision-makers are susceptible to cognitive biases that can distort
                  information processing and judgment, such as confirmation bias, anchoring, and groupthink.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Politicization</h3>
                <p className="text-gray-700">
                  The pressure to provide intelligence that supports predetermined decisions can compromise objectivity
                  and lead to intelligence being shaped to fit policy preferences rather than inform them.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Communication Barriers</h3>
                <p className="text-gray-700">
                  Intelligence professionals and decision-makers often speak different "languages" and have different
                  priorities, creating challenges in effectively communicating complex intelligence concepts and
                  limitations.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Time Constraints</h3>
                <p className="text-gray-700">
                  Decision-makers often need intelligence quickly, while thorough analysis takes time. This tension can
                  lead to premature judgments or delayed decisions.
                </p>
              </div>
            </div>
          </div>
          </DeepDive>
        </section>

        <section className="mb-10">
          <DeepDive title="Best Practices for Intelligence-Based Decision Making">

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Clearly Define Intelligence Requirements</h3>
              </div>
              <p className="text-gray-700">
                Articulate specific questions and information needs that directly support pending decisions to focus
                intelligence collection and analysis efforts.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Establish Regular Intelligence Briefings</h3>
              </div>
              <p className="text-gray-700">
                Create structured opportunities for intelligence professionals to brief decision-makers and address
                questions directly.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Develop Intelligence Literacy</h3>
              </div>
              <p className="text-gray-700">
                Ensure decision-makers understand intelligence capabilities, limitations, and how to interpret
                confidence levels and estimative language.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Use Structured Decision Frameworks</h3>
              </div>
              <p className="text-gray-700">
                Implement formal decision-making processes that explicitly incorporate intelligence inputs and account
                for uncertainty.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Encourage Alternative Analysis</h3>
              </div>
              <p className="text-gray-700">
                Consider multiple interpretations of intelligence and actively seek out contrarian viewpoints to avoid
                groupthink.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Provide Decision Feedback</h3>
              </div>
              <p className="text-gray-700">
                Inform intelligence professionals about how their products influenced decisions to improve future
                intelligence support.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Maintain Analytical Independence</h3>
              </div>
              <p className="text-gray-700">
                Protect intelligence analysis from political or organizational pressure to support specific outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Conduct Decision Reviews</h3>
              </div>
              <p className="text-gray-700">
                After major decisions, review the intelligence that informed them to identify lessons for improving the
                intelligence-decision relationship.
              </p>
            </div>
          </div>
          </DeepDive>
        </section>

        <ProTip>
          Effective intelligence-based decision making is not simply about having more information—it's about
          having the right information, properly analyzed and clearly communicated, at the right time to support
          specific decisions.
        </ProTip>

        <Debrief
          takeaways={[
            "Intelligence reduces uncertainty by providing analyzed, contextualized insights",
            "The relationship between decisions and intelligence requirements is continuous and iterative",
            "Intelligence supports decisions across all domains: national security, law enforcement, business, and cybersecurity",
            "Key challenges include cognitive biases, communication barriers, and time constraints",
            "Establishing clear requirements and maintaining analytical independence are essential best practices",
          ]}
          humorSummary="TL;DR: Intelligence-driven decisions beat guesswork every time. Keep the feedback loop flowing!"
        />
      </MicroLesson>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Continue Your Learning</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Related Topics
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/topics/what-is-intelligence" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    What is Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/information-vs-intelligence"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Information vs Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/topics/intelligence-cycle" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    The Intelligence Cycle
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Ready to Apply This Knowledge?</h3>
              <p className="mb-4">Explore our learning paths to deepen your understanding of intelligence analysis.</p>
              <Button asChild>
                <Link href="/learning-paths">
                  View Learning Paths
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <WhatsNext
        anotherTopic={{
          title: "Cognitive Bias in Intelligence",
          description: "Learn how cognitive biases affect intelligence analysis and decision-making",
          path: "/learning-paths/cognitive-bias",
        }}
        moreLearning={{
          title: "Structured Analytical Techniques",
          description: "Explore methods for improving analytical rigor and reducing bias",
          path: "/learning-paths/analytical-techniques",
        }}
        advancedLearning={{
          title: "Intelligence Communication",
          description: "Learn effective techniques for communicating intelligence to decision-makers",
          path: "/learning-paths/intelligence-communication",
        }}
      />
    </div>
  )
}
