import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, Brain, Search, Target, Shield, TrendingUp, Users } from "lucide-react"
import { LessonContainer } from "@/components/lesson-container"

export const metadata: Metadata = {
  title: "What is Intelligence? | Intelligence Analyst Academy",
  description:
    "Learn about the fundamentals of intelligence, how it differs from information, and its value in decision-making",
}

export default function WhatIsIntelligencePage() {
  return (
    <LessonContainer>
      <div className="container mx-auto px-4 py-8">
        

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">What is Intelligence?</h1>
          <p className="text-gray-600">
            Dive into the fundamentals of intelligence and discover why "I have a hunch" isn't a valid analytical
            method.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span className="mr-4">15 min total</span>
            <span>Beginner level</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Section 1: Intelligence Fundamentals */}
          <div className="border-b p-6">
            <h2 className="text-2xl font-bold mb-2">Defining Intelligence (The Non-IQ Kind)</h2>
            <p className="text-gray-600 italic mb-4">
              "It's like having superpowers, except your superpower is really good at Google and asking the right
              questions."
            </p>
            <div className="text-sm text-gray-500 mb-6">5 min read</div>

            {/* Visual Representation */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-blue-600" />
                Intelligence Transformation Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Search className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-medium text-sm">Raw Information</h4>
                  <p className="text-xs text-gray-600">Scattered data points</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-medium text-sm">Analysis Process</h4>
                  <p className="text-xs text-gray-600">Pattern recognition</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-medium text-sm">Actionable Intelligence</h4>
                  <p className="text-xs text-gray-600">Decision support</p>
                </div>
              </div>
            </div>

            <p className="mb-4">
              Intelligence is processed information that provides context, insights, and implications to support
              decision-making. It's the difference between having data and having understanding.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Definition of Intelligence</h3>
            <p className="text-gray-600 italic mb-3">
              "Information is knowing tomatoes are fruit. Intelligence is knowing not to put them in fruit salad."
            </p>
            <p className="mb-4">
              At its core, intelligence is information that has been collected, processed, analyzed, and interpreted to
              provide actionable insights for decision-makers. It's the difference between having data and having
              understanding.
            </p>

            <h3 className="text-xl font-semibold mb-3">Purpose of Intelligence</h3>
            <p className="text-gray-600 italic mb-3">
              "We turn 'I wonder what's happening' into 'Here's exactly what's happening and what you should do about
              it.'"
            </p>
            <p className="mb-4">
              The primary purpose of intelligence is to reduce uncertainty and provide decision advantage. Good
              intelligence helps leaders make better decisions by:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Identifying threats and opportunities</li>
              <li>Providing early warning of emerging issues</li>
              <li>Supporting strategic planning and resource allocation</li>
              <li>Informing operational and tactical decisions</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-medium">Pro Tip:</p>
              <p>
                Intelligence doesn't tell decision-makers what to do—it helps them understand the situation so they can
                decide for themselves. Think of it as a GPS that shows the map and possible routes, not a backseat
                driver telling you exactly where to turn.
              </p>
            </div>
          </div>

          {/* Section 2: Intelligence vs. Information */}
          <div className="border-b p-6">
            <h2 className="text-2xl font-bold mb-2">Intelligence vs. Information</h2>
            <p className="text-gray-600 italic mb-4">
              "Information is ingredients. Intelligence is the recipe that turns them into something useful."
            </p>
            <div className="text-sm text-gray-500 mb-6">5 min read</div>

            {/* Visual Comparison */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Information vs Intelligence Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    Raw Information
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• Unprocessed data points</li>
                    <li>• May contain errors</li>
                    <li>• Lacks context</li>
                    <li>• Overwhelming volume</li>
                    <li>• Limited decision value</li>
                  </ul>
                  <div className="mt-3 p-2 bg-red-50 rounded text-xs">
                    <strong>Example:</strong> "Three vehicles spotted moving north at 0800"
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Processed Intelligence
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• Verified and analyzed</li>
                    <li>• Contextualized</li>
                    <li>• Pattern-identified</li>
                    <li>• Synthesized insights</li>
                    <li>• Decision-ready</li>
                  </ul>
                  <div className="mt-3 p-2 bg-green-50 rounded text-xs">
                    <strong>Example:</strong> "Enemy reconnaissance element probing defenses, likely precursor to
                    assault within 12-24 hours"
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Raw Information</h3>
            <p className="text-gray-600 italic mb-3">
              "Like trying to solve a jigsaw puzzle when half the pieces are missing and the other half might be from
              different puzzles."
            </p>
            <p className="mb-4">
              Raw information consists of unprocessed data points, observations, and facts. It's the ingredients before
              cooking:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Unfiltered and often overwhelming in volume</li>
              <li>May contain errors, contradictions, or irrelevant details</li>
              <li>Lacks context and interpretation</li>
              <li>Has limited value for decision-making on its own</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Processed Intelligence</h3>
            <p className="text-gray-600 italic mb-3">
              "We take the chaos and turn it into clarity. It's like being a translator between reality and
              decision-makers."
            </p>
            <p className="mb-4">Processed intelligence is information that has been:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Verified for accuracy and reliability</li>
              <li>Contextualized within the broader situation</li>
              <li>Analyzed for patterns, trends, and implications</li>
              <li>Synthesized into coherent assessments</li>
              <li>Tailored to the needs of specific decision-makers</li>
            </ul>
          </div>

          {/* Section 3: Value of Intelligence */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Value of Intelligence</h2>
            <p className="text-gray-600 italic mb-4">
              "Good intelligence is like having tomorrow's newspaper today. Bad intelligence is like having yesterday's
              weather forecast."
            </p>
            <div className="text-sm text-gray-500 mb-6">5 min read</div>

            {/* Value Visualization */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Intelligence Impact Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-sm">National Security</h4>
                  <p className="text-xs text-gray-600">Threat prevention</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium text-sm">Business Strategy</h4>
                  <p className="text-xs text-gray-600">Market advantage</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-sm">Law Enforcement</h4>
                  <p className="text-xs text-gray-600">Crime prevention</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-medium text-sm">Military Operations</h4>
                  <p className="text-xs text-gray-600">Mission success</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Strategic Value</h3>
            <p className="text-gray-600 italic mb-3">
              "Strategic intelligence is like chess - you're thinking five moves ahead while your opponent is still
              figuring out how the pieces move."
            </p>
            <p className="mb-4">At the strategic level, intelligence provides:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Long-term threat and opportunity assessments</li>
              <li>Support for policy development and resource allocation</li>
              <li>Understanding of complex geopolitical, economic, or social trends</li>
              <li>Competitive advantage in business or national security contexts</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Operational Value</h3>
            <p className="text-gray-600 italic mb-3">
              "Operational intelligence is like having a really good weather forecast - it helps you decide whether to
              bring an umbrella or a tank."
            </p>
            <p className="mb-4">At the operational level, intelligence delivers:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Situational awareness for planning and execution</li>
              <li>Risk mitigation and opportunity identification</li>
              <li>Support for resource prioritization and deployment</li>
              <li>Early warning of threats or changes in the operating environment</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <p className="font-medium">Real-World Impact:</p>
              <p>
                Good intelligence doesn't just inform decisions—it can fundamentally change outcomes. From preventing
                terrorist attacks to identifying market opportunities worth millions, quality intelligence creates
                asymmetric advantages for those who possess it.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">The Cost of Poor Intelligence</h3>
            <p className="text-gray-600 italic mb-3">
              "Bad intelligence is like a GPS that's three years out of date - it'll confidently direct you into a lake
              that used to be a road."
            </p>
            <p className="mb-4">The absence or failure of intelligence can lead to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Strategic surprise and reactive decision-making</li>
              <li>Wasted resources on non-existent threats or missed opportunities</li>
              <li>Increased vulnerability to competitors or adversaries</li>
              <li>Catastrophic failures that could have been prevented</li>
            </ul>
          </div>
        </div>

        {/* Knowledge Check */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">Knowledge Check</h2>
          <p className="text-gray-600 italic mb-4">
            "Time to see if you've been paying attention or just admiring our excellent use of icons."
          </p>
          <p className="mb-6">Test your understanding of the key concepts from this topic:</p>

          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">
                1. What is the primary difference between information and intelligence?
              </p>
              <div className="space-y-2 pl-6">
                <div className="flex items-center">
                  <input type="radio" id="q1a" name="q1" className="mr-2" />
                  <label htmlFor="q1a">Intelligence is always classified, while information is not.</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1b" name="q1" className="mr-2" />
                  <label htmlFor="q1b">
                    Intelligence has been processed, analyzed, and contextualized, while information is raw data.
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1c" name="q1" className="mr-2" />
                  <label htmlFor="q1c">
                    Information is always accurate, while intelligence may contain uncertainties.
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">2. What is the main purpose of intelligence?</p>
              <div className="space-y-2 pl-6">
                <div className="flex items-center">
                  <input type="radio" id="q2a" name="q2" className="mr-2" />
                  <label htmlFor="q2a">To tell decision-makers exactly what actions to take</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2b" name="q2" className="mr-2" />
                  <label htmlFor="q2b">To reduce uncertainty and provide decision advantage</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2c" name="q2" className="mr-2" />
                  <label htmlFor="q2c">To collect as much information as possible</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
          <p className="text-gray-600 italic mb-4">
            "Ready to dive deeper? The intelligence cycle awaits - it's like a washing machine, but for information."
          </p>
          <p className="mb-4">Ready to continue your learning journey? Proceed to the next topic:</p>

          <Link
            href="/topics/intelligence-cycle"
            className="flex items-center justify-between bg-black hover:bg-yellow-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <span>The Intelligence Cycle</span>
            <ChevronLeft className="h-5 w-5 rotate-180" />
          </Link>

          <div className="mt-6 pt-6 border-t">
            <Link href="/learning-paths/foundations" className="text-blue-600 hover:text-blue-800">
              Return to Fundamentals of Intelligence
            </Link>
          </div>
        </div>
      </div>
    </LessonContainer>
  )
}
