import Image from "next/image"
import type { Metadata } from "next"
import { FileText, CheckCircle, AlertTriangle, Info, Brain, Filter, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TopicHeader } from "@/components/topic-header"
import { LessonContent } from "@/components/lesson-content"
import { WhatsNext } from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Intelligence vs Information | The Intel Analyst Academy",
  description:
    "Understand the critical differences between raw information and processed intelligence, and how analysts transform data into actionable insights.",
}

export default function IntelligenceVsInformationPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <TopicHeader
        title="Intelligence vs Information"
        description="Understanding the transformation from raw data to actionable insights"
        image="/intelligence-vs-information.png"
        imageAlt="Diagram showing the transformation from raw information to processed intelligence"
      />

      <LessonContent>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Definitions</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Information</h3>
              </div>
              <p className="mb-4">
                Raw, unprocessed facts, data points, or observations that have not yet been analyzed or evaluated for
                significance, accuracy, or relevance to a specific context or question.
              </p>
              <div className="bg-white rounded-md p-4 border border-blue-100">
                <p className="italic text-gray-700">
                  "Information is just facts and data that might or might not be useful. It's the raw material that
                  intelligence analysts work with."
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Intelligence</h3>
              </div>
              <p className="mb-4">
                Information that has been collected, processed, analyzed, evaluated, and interpreted to provide
                meaningful insights that can inform decisions and actions.
              </p>
              <div className="bg-white rounded-md p-4 border border-green-100">
                <p className="italic text-gray-700">
                  "Intelligence is information that has been refined to be relevant, accurate, timely, and actionable
                  for a specific purpose or decision-maker."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">The Transformation Process</h3>
            <div className="relative h-64 md:h-80 mb-6">
              <Image
                src="/intelligence-transformation-process.png"
                alt="The process of transforming information into intelligence"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-600 italic mb-4">
              The intelligence cycle transforms raw information into actionable intelligence
            </p>
            <p>
              The transformation from information to intelligence is not automatic. It requires a systematic process of
              collection, evaluation, analysis, integration, and interpretation. This process adds value to raw
              information by providing context, establishing relevance, verifying accuracy, identifying patterns, and
              drawing conclusions that support decision-making.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Characteristics: Information vs Intelligence</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Characteristic</th>
                  <th className="border p-3 text-left">Information</th>
                  <th className="border p-3 text-left">Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Processing Level</td>
                  <td className="border p-3">Raw, unprocessed</td>
                  <td className="border p-3">Processed, analyzed, synthesized</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Purpose</td>
                  <td className="border p-3">To inform</td>
                  <td className="border p-3">To enable decision-making</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Value</td>
                  <td className="border p-3">Inherent but variable</td>
                  <td className="border p-3">Added through analysis</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Context</td>
                  <td className="border p-3">Often lacks context</td>
                  <td className="border p-3">Contextualized and relevant</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Actionability</td>
                  <td className="border p-3">Not necessarily actionable</td>
                  <td className="border p-3">Designed to be actionable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Uncertainty</td>
                  <td className="border p-3">Often uncertain or unverified</td>
                  <td className="border p-3">Includes assessment of certainty</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Focus</td>
                  <td className="border p-3">Broad and unfocused</td>
                  <td className="border p-3">Targeted to specific needs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-medium">Timeliness</td>
                  <td className="border p-3">May be outdated or current</td>
                  <td className="border p-3">Timely and relevant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">The Value-Adding Process</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Filter className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Filtering & Validation</h3>
                </div>
                <p className="text-gray-700">
                  Separating relevant from irrelevant information and verifying the accuracy and reliability of sources.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Assessing whether a witness report is credible based on the source's
                    history, potential biases, and corroborating evidence.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold">Analysis & Integration</h3>
                </div>
                <p className="text-gray-700">
                  Examining relationships between data points, identifying patterns, and integrating information from
                  multiple sources.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Connecting seemingly unrelated criminal incidents to identify a pattern
                    that suggests they are part of a series committed by the same perpetrator.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <Zap className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">Interpretation & Forecasting</h3>
                </div>
                <p className="text-gray-700">
                  Drawing conclusions, making judgments about implications, and developing predictions about future
                  developments.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Assessing that a terrorist group's recent communications and movements
                    indicate a 70% likelihood of an attack within the next 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Real-World Examples</h2>

          <Tabs defaultValue="criminal" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="criminal">Criminal Investigation</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Intelligence</TabsTrigger>
              <TabsTrigger value="military">Military Operations</TabsTrigger>
            </TabsList>

            <TabsContent value="criminal" className="p-5 border rounded-md mt-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-600" />
                    Information
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Multiple burglaries reported in the north side of the city</li>
                    <li>Witness descriptions of a white van in the area</li>
                    <li>Security camera footage showing a person in dark clothing</li>
                    <li>List of recently released offenders with burglary histories</li>
                    <li>Reports of stolen electronics and jewelry</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Intelligence
                  </h4>
                  <p className="mb-3">
                    Analysis indicates a pattern of sophisticated burglaries targeting homes with specific security
                    systems, occurring between 1-3 AM when homeowners are typically in deep sleep. The suspect likely
                    has technical knowledge of alarm systems and is using a white van with stolen plates to transport
                    items. Based on the method of entry and target selection, there is a high probability the
                    perpetrator is John Smith, recently released from prison and known for similar techniques.
                  </p>
                  <p className="font-medium">Actionable elements:</p>
                  <ul className="list-disc pl-5">
                    <li>Focus surveillance on John Smith</li>
                    <li>Increase patrols in north side between 12-4 AM</li>
                    <li>Alert residents with the identified security system</li>
                    <li>Set up checkpoints for white vans during target hours</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="p-5 border rounded-md mt-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-600" />
                    Information
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Competitor has hired several engineers from semiconductor companies</li>
                    <li>Competitor has leased a large manufacturing facility</li>
                    <li>Industry reports show increasing demand for AI chips</li>
                    <li>Competitor has filed several patents related to chip design</li>
                    <li>Competitor's CEO mentioned "new directions" in a recent interview</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Intelligence
                  </h4>
                  <p className="mb-3">
                    Analysis of hiring patterns, facility acquisitions, patent filings, and public statements indicates
                    with 85% confidence that the competitor is planning to enter the AI chip market within the next
                    12-18 months. Their strategy appears focused on high-performance, low-power designs targeting the
                    mobile device market, which would directly compete with our upcoming product line. Based on the
                    expertise they've acquired, they may have a technological advantage in power efficiency.
                  </p>
                  <p className="font-medium">Actionable elements:</p>
                  <ul className="list-disc pl-5">
                    <li>Accelerate R&D on power efficiency features</li>
                    <li>Secure key supply chain partnerships</li>
                    <li>Develop marketing strategy highlighting our advantages</li>
                    <li>Consider strategic pricing to establish market position</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="military" className="p-5 border rounded-md mt-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-600" />
                    Information
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Satellite imagery showing vehicle movements near a border</li>
                    <li>Intercepted communications mentioning "exercise preparations"</li>
                    <li>Diplomatic cables reporting increased tensions</li>
                    <li>Social media activity from military personnel in the region</li>
                    <li>Historical data on seasonal military activities</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Intelligence
                  </h4>
                  <p className="mb-3">
                    Analysis of troop movements, communications, diplomatic reporting, and historical patterns indicates
                    that the activity is consistent with preparations for the annual military exercise rather than
                    mobilization for offensive operations (70% confidence). However, the scale of deployment is 30%
                    larger than previous years, suggesting a possible show of force in response to recent diplomatic
                    tensions. While immediate conflict is unlikely, the situation creates an elevated risk of
                    miscalculation or unintended escalation.
                  </p>
                  <p className="font-medium">Actionable elements:</p>
                  <ul className="list-disc pl-5">
                    <li>Maintain current alert levels without escalation</li>
                    <li>Increase surveillance of key indicators</li>
                    <li>Establish direct communication channels to prevent misunderstandings</li>
                    <li>Prepare contingency plans for rapid response if situation changes</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Challenges and Pitfalls</h2>

          <div className="space-y-4">
            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Information Overload</h3>
                <p className="text-gray-700">
                  The volume of available information can be overwhelming, making it difficult to identify what is
                  relevant and significant. This can lead to analysis paralysis or missing critical insights buried in
                  the data.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Cognitive Biases</h3>
                <p className="text-gray-700">
                  Analysts are susceptible to various biases that can distort the transformation from information to
                  intelligence, including confirmation bias, anchoring, and groupthink.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Mistaking Information for Intelligence</h3>
                <p className="text-gray-700">
                  Organizations often present raw or minimally processed information as intelligence, depriving
                  decision-makers of the insights and context they need for effective action.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 border rounded-md">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Source Reliability Issues</h3>
                <p className="text-gray-700">
                  Failing to properly evaluate the reliability of information sources can lead to intelligence products
                  based on faulty or deceptive information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Practices for Intelligence Analysts</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Use Structured Analytical Techniques</h3>
              </div>
              <p className="text-gray-700">
                Apply methodologies like Analysis of Competing Hypotheses, Key Assumptions Check, and Structured
                Brainstorming to systematically transform information into intelligence.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Rigorously Evaluate Sources</h3>
              </div>
              <p className="text-gray-700">
                Assess the reliability of sources and the credibility of information using standardized evaluation
                matrices and cross-referencing multiple sources.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Focus on Requirements</h3>
              </div>
              <p className="text-gray-700">
                Maintain a clear understanding of the intelligence requirements and decision-maker needs to ensure the
                analysis process produces relevant and actionable intelligence.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Acknowledge Uncertainty</h3>
              </div>
              <p className="text-gray-700">
                Clearly communicate confidence levels, alternative explanations, and information gaps to provide
                decision-makers with an accurate understanding of the intelligence landscape.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Collaborate and Seek Diverse Perspectives</h3>
              </div>
              <p className="text-gray-700">
                Engage with analysts from different backgrounds and expertise to challenge assumptions and broaden
                analytical perspectives.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Provide Clear Recommendations</h3>
              </div>
              <p className="text-gray-700">
                Ensure intelligence products include specific, actionable recommendations that directly address the
                needs of decision-makers.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Takeaway</h3>
              <p className="text-gray-800">
                The distinction between information and intelligence is fundamental to effective analysis. While
                information provides the essential raw material, it is the analytical process that transforms this
                material into intelligence—insights that are relevant, accurate, timely, and actionable. Understanding
                this distinction helps analysts focus on adding value through their analytical process and helps
                decision-makers recognize the difference between raw data and processed intelligence.
              </p>
            </div>
          </div>
        </div>
      </LessonContent>

      <WhatsNext
        anotherTopic={{
          title: "Intelligence Decision Making",
          description: "Explore how intelligence supports and enhances the decision-making process",
          path: "/topics/intelligence-decision-making",
        }}
        moreLearning={{
          title: "The Intelligence Cycle",
          description: "Learn about the systematic process that transforms information into intelligence",
          path: "/topics/intelligence-cycle",
        }}
        advancedLearning={{
          title: "Analytical Techniques",
          description: "Discover structured methods for transforming information into valuable intelligence",
          path: "/learning-paths/analytical-techniques",
        }}
      />
    </div>
  )
}
