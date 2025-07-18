import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BookOpen, ArrowRight, FileText, CheckCircle, AlertTriangle, Info, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TopicHeader } from "@/components/topic-header"
import { LessonContent } from "@/components/lesson-content"
import { WhatsNext } from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Information vs Intelligence | The Intel Analyst Academy",
  description:
    "Learn the critical differences between raw information and processed intelligence, and why this distinction matters for effective analysis.",
}

export default function InformationVsIntelligencePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <TopicHeader
        title="Information vs Intelligence"
        description="Understanding the critical distinction between raw data and actionable intelligence"
        image="/information-vs-intelligence.png"
        imageAlt="Diagram showing the transformation from information to intelligence"
      />

      <LessonContent>
        <section className="mb-10">
          <p className="lead">
            Understanding the difference between information and intelligence is like knowing the difference between
            flour and cake. Sure, flour is an essential ingredient, but you wouldn&apos;t serve it at a birthday party and
            expect people to be impressed. Similarly, raw information might be interesting, but intelligence is what
            makes decision-makers actually pay attention to your reports.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <p className="italic">
              &quot;Information is knowing a tomato is a fruit. Intelligence is knowing not to put it in a fruit salad.
              Wisdom is knowing the fruit salad would have been served to your adversary anyway.&quot; —{" "}
              <span className="font-semibold">The Unofficial Intelligence Analyst&apos;s Dictionary</span>
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Great Divide: Information vs. Intelligence</h2>
          <p>
            In the intelligence world, we make a crucial distinction between information and intelligence. It&apos;s not just
            semantic nitpicking—it&apos;s the difference between drowning your boss in useless facts and actually helping
            them make decisions that don&apos;t end in disaster.
          </p>
          <p>
            Think of it this way: information is everything you could possibly know about a subject, while intelligence
            is everything you actually need to know. One is a fire hose; the other is a water bottle. One gives you
            information overload; the other gives you insight. One makes you sound like Wikipedia; the other makes you
            sound like you know what you're talking about.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Information</th>
                  <th className="py-2 px-4 border-b text-left">Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Raw, unprocessed data (like vegetables before your mom cooks them)
                  </td>
                  <td className="py-2 px-4 border-b">
                    Processed, analyzed insights (like those same vegetables in a gourmet dish)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Often overwhelming in volume (like your email inbox after a week&apos;s vacation)
                  </td>
                  <td className="py-2 px-4 border-b">
                    Focused and relevant (like the three emails that actually matter)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    May contain errors, contradictions, and irrelevancies (like your Facebook feed)
                  </td>
                  <td className="py-2 px-4 border-b">
                    Evaluated for reliability and relevance (like advice from your one friend who actually has their
                    life together)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Answers &quot;What?&quot; (like a toddler&apos;s first question)</td>
                  <td className="py-2 px-4 border-b">
                    Answers &quot;So what?&quot; and &quot;Now what?&quot; (like the follow-up questions that exhaust parents)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Requires little to no effort to collect (like opinions on the internet)
                  </td>
                  <td className="py-2 px-4 border-b">
                    Requires analysis and judgment to produce (like opinions worth listening to)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">
            The Transformation Process (Or: How to Turn Information Straw into Intelligence Gold)
          </h2>
          <p>
            The process of turning information into intelligence is like cooking a gourmet meal. You start with raw
            ingredients (information), apply heat and technique (analysis), and end up with something that&apos;s greater
            than the sum of its parts (intelligence). And just like cooking, if you skip steps or use bad ingredients,
            the result will be inedible—or in intelligence terms, useless or misleading.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h3>Step 1: Collection</h3>
              <p>
                Gathering relevant information from various sources. This is like grocery shopping—you need to be
                selective, but you also need enough ingredients to work with. Unfortunately, many analysts approach this
                step like panic-buying before a snowstorm, grabbing everything in sight just in case.
              </p>
            </div>
            <div>
              <h3>Step 2: Processing</h3>
              <p>
                Organizing and preparing the information for analysis. This is like washing, peeling, and chopping your
                ingredients. Boring but necessary, unless you enjoy the taste of dirt and pesticides in your
                intelligence products.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h3>Step 3: Analysis</h3>
              <p>
                Examining the processed information to identify patterns, relationships, and significance. This is the
                actual cooking—applying heat, combining ingredients, and adding seasoning. This is where the magic
                happens, or where everything goes horribly wrong and you end up ordering pizza instead.
              </p>
            </div>
            <div>
              <h3>Step 4: Production</h3>
              <p>
                Creating intelligence products that communicate findings effectively. This is plating the
                dish—presentation matters! No matter how good your analysis is, if you serve it on a dirty paper plate
                with ketchup smears, no one will want to consume it.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Real-World Examples (Or: When Information Becomes Intelligence)</h2>

          <div className="bg-gray-50 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Example 1: The Weather Report</h3>
            <p className="mb-2">
              <strong>Information:</strong> "The temperature is 75°F. The humidity is 85%. The barometric pressure is
              falling. Clouds are moving in from the west."
            </p>
            <p>
              <strong>Intelligence:</strong> &quot;There&apos;s a 90% chance of rain this afternoon. Bring an umbrella if you&apos;re
              going out after lunch, unless you enjoy looking like a drowned rat during your presentation to the board.&quot;
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Example 2: The Business Competitor</h3>
            <p className="mb-2">
              <strong>Information:</strong> "Company X has leased a large facility in Singapore. They've hired 15
              engineers with semiconductor experience. Their CEO visited Taiwan twice last month."
            </p>
            <p>
              <strong>Intelligence:</strong> "Company X is likely entering the semiconductor market with a focus on
              Asia. We have approximately 6-8 months to prepare our competitive response before they launch their first
              product, which will probably target the mid-range market where our position is weakest."
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Example 3: The Suspicious Activity</h3>
            <p className="mb-2">
              <strong>Information:</strong> "Subject A purchased large quantities of fertilizer. Subject A has visited
              websites about explosives. Subject A has no agricultural background."
            </p>
            <p>
              <strong>Intelligence:</strong> &quot;Subject A shows several indicators consistent with potential bomb-making
              activities and requires immediate investigation. Or they could just be really, really serious about their
              lawn care. Either way, someone should probably check.&quot;
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Key Takeaways (For Those Who Skim Reports)</h3>
            <ul className="space-y-1">
              <li>Information is what you know; intelligence is what you understand</li>
              <li>Information tells you facts; intelligence tells you what those facts mean</li>
              <li>Information is plentiful and often free; intelligence requires work and is therefore valuable</li>
              <li>
                Information overload is a problem; intelligence overload is something no one has ever complained about
              </li>
              <li>
                Being an information provider makes you useful; being an intelligence provider makes you indispensable
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10 hidden">
          <h2 className="text-2xl font-bold mb-4">The Fundamental Distinction</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Information</h3>
                    <p className="text-gray-700">
                      Raw, unprocessed data points, facts, or observations that have not been analyzed, contextualized,
                      or evaluated for relevance, accuracy, or implications.
                    </p>
                  </div>
                </div>
                <div className="pl-16">
                  <h4 className="font-medium mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Unprocessed and unfiltered</li>
                    <li>May be irrelevant or inaccurate</li>
                    <li>Lacks context and meaning</li>
                    <li>Not necessarily actionable</li>
                    <li>Volume can be overwhelming</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 bg-green-100 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligence</h3>
                    <p className="text-gray-700">
                      Information that has been collected, processed, integrated, analyzed, evaluated, and interpreted
                      in a specific context to provide actionable insights for decision-makers.
                    </p>
                  </div>
                </div>
                <div className="pl-16">
                  <h4 className="font-medium mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Processed and filtered</li>
                    <li>Verified for accuracy and reliability</li>
                    <li>Contextualized and meaningful</li>
                    <li>Actionable and relevant</li>
                    <li>Focused and prioritized</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3">The Transformation Process</h3>
            <p className="mb-4">
              The intelligence cycle transforms raw information into actionable intelligence through a systematic
              process:
            </p>
            <div className="relative h-64 md:h-80 mb-4">
              <Image
                src="/intelligence-cycle-diagram.png"
                alt="Intelligence Cycle Diagram"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 italic text-center mb-4">
              The intelligence cycle transforms raw information into actionable intelligence
            </p>
          </div>
        </section>

        <section className="mb-10 hidden">
          <h2 className="text-2xl font-bold mb-6">Key Differences</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Aspect</th>
                  <th className="border p-3 text-left">Information</th>
                  <th className="border p-3 text-left">Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Purpose</td>
                  <td className="border p-3">To provide facts and data</td>
                  <td className="border p-3">To support decision-making</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Processing Level</td>
                  <td className="border p-3">Raw, unprocessed</td>
                  <td className="border p-3">Analyzed, evaluated, interpreted</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Context</td>
                  <td className="border p-3">Often lacks context</td>
                  <td className="border p-3">Placed within relevant context</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Actionability</td>
                  <td className="border p-3">Not necessarily actionable</td>
                  <td className="border p-3">Designed to be actionable</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Timeliness</td>
                  <td className="border p-3">May be historical or current</td>
                  <td className="border p-3">Timely and relevant to current needs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Value</td>
                  <td className="border p-3">Varies widely in value</td>
                  <td className="border p-3">High value for specific objectives</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Uncertainty</td>
                  <td className="border p-3">Often uncertain or unverified</td>
                  <td className="border p-3">Includes assessment of certainty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 hidden">
          <h2 className="text-2xl font-bold mb-6">Practical Examples</h2>

          <Tabs defaultValue="law-enforcement" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="law-enforcement">Law Enforcement</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="national-security">National Security</TabsTrigger>
            </TabsList>
            <TabsContent value="law-enforcement" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">Law Enforcement Example</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-600" />
                    Information
                  </h4>
                  <p>Multiple reports of vehicles being broken into in the downtown area over the past week.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Intelligence
                  </h4>
                  <p>
                    Analysis reveals a pattern of vehicle break-ins occurring between 1-3 AM, targeting specific vehicle
                    models, with a consistent method of entry, suggesting an organized group operating in a 5-block
                    radius.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Impact:</strong> The intelligence allows police to deploy targeted patrols during specific
                  hours in the identified area, focusing on the most vulnerable vehicles, leading to more efficient
                  resource allocation and higher chances of apprehension.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="business" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">Business Example</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-600" />
                    Information
                  </h4>
                  <p>Sales data showing a 15% decrease in a product line over the last quarter.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Intelligence
                  </h4>
                  <p>
                    Analysis correlating sales data with market research, competitor actions, and customer feedback
                    reveals that a competitor's new product is capturing market share due to a specific feature that
                    customers value highly.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Impact:</strong> This intelligence allows the company to make informed decisions about product
                  development priorities, marketing strategies, and potential pricing adjustments to address the
                  competitive threat.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="national-security" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-3">National Security Example</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-600" />
                    Information
                  </h4>
                  <p>
                    Satellite imagery showing increased activity at a foreign military base and intercepted
                    communications mentioning equipment movements.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Intelligence
                  </h4>
                  <p>
                    Analysis integrating the imagery with human source reporting, historical patterns, and geopolitical
                    context indicates preparations for a military exercise rather than hostile action, with 80%
                    confidence.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Impact:</strong> This intelligence allows national security decision-makers to respond
                  appropriately without escalating tensions, while still maintaining appropriate vigilance and
                  preparedness.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-10 hidden">
          <h2 className="text-2xl font-bold mb-6">Common Pitfalls</h2>

          <div className="space-y-4">
            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Information Overload</h3>
                <p className="text-gray-700">
                  Collecting excessive information without proper analysis leads to cognitive overload and can obscure
                  critical insights.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Mistaking Information for Intelligence</h3>
                <p className="text-gray-700">
                  Presenting raw information as if it were analyzed intelligence can lead to poor decision-making and
                  missed opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Neglecting Source Evaluation</h3>
                <p className="text-gray-700">
                  Failing to assess the reliability and credibility of information sources can result in intelligence
                  based on faulty premises.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Confirmation Bias</h3>
                <p className="text-gray-700">
                  Selectively processing information that confirms existing beliefs while ignoring contradictory data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 hidden">
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Establish Clear Requirements</h3>
              </div>
              <p className="text-gray-700">
                Define specific intelligence requirements to focus collection and analysis efforts on what matters most.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Evaluate Sources Rigorously</h3>
              </div>
              <p className="text-gray-700">
                Assess the reliability of sources and the credibility of information using standardized evaluation
                methods.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Apply Structured Analysis</h3>
              </div>
              <p className="text-gray-700">
                Use structured analytical techniques to transform information into intelligence systematically and
                reduce cognitive biases.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Communicate Uncertainty</h3>
              </div>
              <p className="text-gray-700">
                Clearly express confidence levels and areas of uncertainty in intelligence assessments.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Provide Actionable Insights</h3>
              </div>
              <p className="text-gray-700">
                Ensure intelligence products include clear implications and recommendations for decision-makers.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Maintain Feedback Loops</h3>
              </div>
              <p className="text-gray-700">
                Establish mechanisms for decision-makers to provide feedback on intelligence products to improve future
                analysis.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 p-6 rounded-lg mb-10 hidden">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Takeaway</h3>
              <p className="text-gray-800">
                The transformation of information into intelligence is what gives analysis its value. While information
                provides the necessary raw material, it is the analytical process that creates the insights needed for
                effective decision-making. Understanding this distinction is fundamental to producing and consuming
                intelligence effectively.
              </p>
            </div>
          </div>
        </div>
      </LessonContent>

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
                  <Link href="/topics/intelligence-cycle" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    The Intelligence Cycle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/intelligence-decision-making"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Intelligence in Decision Making
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
          title: "Intelligence Decision Making",
          description: "Learn how intelligence supports effective decision-making processes",
          path: "/topics/intelligence-decision-making",
        }}
        moreLearning={{
          title: "Intelligence Cycle",
          description: "Understand the systematic process of transforming information into intelligence",
          path: "/topics/intelligence-cycle",
        }}
        advancedLearning={{
          title: "Source Evaluation",
          description: "Learn techniques for evaluating the reliability and credibility of information sources",
          path: "/learning-paths/source-evaluation",
        }}
      />
    </div>
  )
}
