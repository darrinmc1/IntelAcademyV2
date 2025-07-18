import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, Satellite, Map, Camera, Globe, Layers, MapPin } from "lucide-react"
import { LessonContainer } from "@/components/lesson-container"

export const metadata: Metadata = {
  title: "GEOINT Fundamentals | Intelligence Analyst Academy",
  description: "Learn the basics of Geospatial Intelligence and satellite imagery analysis",
}

export default function GeointFundamentalsPage() {
  return (
    <LessonContainer>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link href="/learning-paths" className="flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back to Learning Paths</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">GEOINT Fundamentals</h1>
          <p className="text-gray-600">
            Master the art of seeing the world from above and understanding what it all means.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span className="mr-4">18 min total</span>
            <span>Intermediate level</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Section 1: What is GEOINT */}
          <div className="border-b p-6">
            <h2 className="text-2xl font-bold mb-2">What is Geospatial Intelligence (GEOINT)?</h2>
            <p className="text-gray-600 italic mb-4">
              "It&apos;s like being a detective, but your crime scene is the entire planet and your magnifying glass is a
              satellite."
            </p>
            <div className="text-sm text-gray-500 mb-6">6 min read</div>

            {/* Visual Representation */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Satellite className="h-5 w-5 mr-2 text-blue-600" />
                GEOINT Data Sources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Satellite className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-sm">Satellite Imagery</h4>
                  <p className="text-xs text-gray-600">High-resolution photos from space</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-medium text-sm">Aerial Photography</h4>
                  <p className="text-xs text-gray-600">Aircraft-based imaging</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Map className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-sm">Geographic Data</h4>
                  <p className="text-xs text-gray-600">Maps, terrain, coordinates</p>
                </div>
              </div>
            </div>

            <p className="mb-4">
              Geospatial Intelligence (GEOINT) is the analysis and visual representation of security issues through
              imagery and mapping technologies. It&apos;s essentially the intelligence discipline that answers the question
              &quot;What&apos;s happening where?&quot;
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Core Components of GEOINT</h3>
            <p className="text-gray-600 italic mb-3">
              &quot;Think of it as Google Earth, but with superpowers and a security clearance.&quot;
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Imagery Intelligence (IMINT):</strong> Analysis of visual imagery from satellites and aircraft
              </li>
              <li>
                <strong>Geographic Information Systems (GIS):</strong> Digital mapping and spatial analysis tools
              </li>
              <li>
                <strong>Geospatial Analysis:</strong> Understanding relationships between locations and events
              </li>
              <li>
                <strong>Cartographic Products:</strong> Maps, charts, and visual representations
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="font-medium">Fun Fact:</p>
              <p>
                Modern satellite imagery can be so detailed that analysts can identify individual vehicles, but contrary
                to what movies show, you still can't read license plates from space. Yet.
              </p>
            </div>
          </div>

          {/* Section 2: GEOINT Applications */}
          <div className="border-b p-6">
            <h2 className="text-2xl font-bold mb-2">GEOINT Applications</h2>
            <p className="text-gray-600 italic mb-4">
              &quot;From tracking bad guys to predicting natural disasters - if it happens on Earth, we&apos;re probably watching
              it from space.&quot;
            </p>
            <div className="text-sm text-gray-500 mb-6">6 min read</div>

            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  National Security
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Military facility monitoring</li>
                  <li>• Border security surveillance</li>
                  <li>• Weapons proliferation tracking</li>
                  <li>• Terrorist activity detection</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                  <Layers className="h-4 w-4 mr-2" />
                  Environmental Monitoring
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Climate change tracking</li>
                  <li>• Deforestation monitoring</li>
                  <li>• Natural disaster assessment</li>
                  <li>• Agricultural analysis</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Law Enforcement
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Crime scene analysis</li>
                  <li>• Drug cultivation detection</li>
                  <li>• Human trafficking routes</li>
                  <li>• Evidence correlation</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                  <Camera className="h-4 w-4 mr-2" />
                  Commercial Applications
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Urban planning</li>
                  <li>• Infrastructure monitoring</li>
                  <li>• Market analysis</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Military and Defense Applications</h3>
            <p className="text-gray-600 italic mb-3">
              &quot;When you absolutely, positively need to know what&apos;s in that building overnight - satellite imagery is
              there for you.&quot;
            </p>
            <p className="mb-4">
              GEOINT plays a crucial role in military operations by providing situational awareness, target
              identification, and battle damage assessment. It helps commanders understand the terrain, enemy positions,
              and potential threats.
            </p>

            <h3 className="text-xl font-semibold mb-3">Civilian and Commercial Uses</h3>
            <p className="text-gray-600 italic mb-3">
              &quot;Not just for spies anymore - now your pizza delivery app uses the same technology that tracks missile
              sites.&quot;
            </p>
            <p className="mb-4">
              Beyond military applications, GEOINT supports disaster response, urban planning, environmental monitoring,
              and commercial intelligence. Companies use geospatial analysis for market research, site selection, and
              supply chain optimization.
            </p>
          </div>

          {/* Section 3: GEOINT Challenges */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">GEOINT Challenges and Limitations</h2>
            <p className="text-gray-600 italic mb-4">
              &quot;Cloud cover is the natural enemy of satellite analysts everywhere. Mother Nature: 1, Intelligence
              Community: 0.&quot;
            </p>
            <div className="text-sm text-gray-500 mb-6">6 min read</div>

            <h3 className="text-xl font-semibold mb-3">Technical Challenges</h3>
            <p className="text-gray-600 italic mb-3">
              &quot;Sometimes the most sophisticated satellite in the world is defeated by a simple cloud. It&apos;s humbling,
              really.&quot;
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Weather Dependencies:</strong> Clouds, storms, and atmospheric conditions can obscure imagery
              </li>
              <li>
                <strong>Resolution Limitations:</strong> Even the best satellites have physical limits on detail
              </li>
              <li>
                <strong>Temporal Constraints:</strong> Satellites can't be everywhere at once
              </li>
              <li>
                <strong>Data Volume:</strong> Managing and analyzing massive amounts of imagery data
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Analytical Challenges</h3>
            <p className="text-gray-600 italic mb-3">
              &quot;Is that a missile launcher or a really unfortunate-looking playground equipment? Context is everything.&quot;
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Image Interpretation:</strong> Distinguishing between similar-looking objects
              </li>
              <li>
                <strong>Change Detection:</strong> Identifying what's different between images taken at different times
              </li>
              <li>
                <strong>Cultural Context:</strong> Understanding local customs and normal activities
              </li>
              <li>
                <strong>Deception and Camouflage:</strong> Adversaries actively try to hide or mislead
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-medium">Reality Check:</p>
              <p>
                Despite what you see in movies, you can&apos;t just &quot;enhance&quot; a blurry satellite image to read someone&apos;s text
              messages. Physics still applies, even in intelligence work.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">The Future of GEOINT</h3>
            <p className="text-gray-600 italic mb-3">
              &quot;AI is getting really good at spotting things in satellite imagery. Soon, the computers might be better
              analysts than we are. Job security? What&apos;s that?&quot;
            </p>
            <p className="mb-4">
              Emerging technologies like artificial intelligence, machine learning, and hyperspectral imaging are
              revolutionizing GEOINT capabilities. Automated change detection, pattern recognition, and real-time
              analysis are becoming standard tools.
            </p>
          </div>
        </div>

        {/* Knowledge Check */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">Knowledge Check</h2>
          <p className="text-gray-600 italic mb-4">
            &quot;Time to see if you can tell a missile site from a water park. Hint: one has more slides.&quot;
          </p>
          <p className="mb-6">Test your understanding of GEOINT fundamentals:</p>

          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">1. What is the primary purpose of GEOINT?</p>
              <div className="space-y-2 pl-6">
                <div className="flex items-center">
                  <input type="radio" id="q1a" name="q1" className="mr-2" />
                  <label htmlFor="q1a">To take pretty pictures of Earth from space</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1b" name="q1" className="mr-2" />
                  <label htmlFor="q1b">To analyze and understand security issues through imagery and mapping</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1c" name="q1" className="mr-2" />
                  <label htmlFor="q1c">To replace Google Maps with classified versions</label>
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">2. What is the biggest natural enemy of satellite imagery analysts?</p>
              <div className="space-y-2 pl-6">
                <div className="flex items-center">
                  <input type="radio" id="q2a" name="q2" className="mr-2" />
                  <label htmlFor="q2a">Cloud cover</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2b" name="q2" className="mr-2" />
                  <label htmlFor="q2b">Satellite malfunctions</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2c" name="q2" className="mr-2" />
                  <label htmlFor="q2c">Budget cuts</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
          <p className="text-gray-600 italic mb-4">
            &quot;Ready to explore more intelligence disciplines? The world of intelligence is vast, and we&apos;ve got satellites
            watching all of it.&quot;
          </p>
          <p className="mb-4">Continue your intelligence education with related topics:</p>

          <div className="space-y-3">
            <Link
              href="/topics/imagery-analysis-techniques"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Imagery Analysis Techniques
            </Link>
            <Link
              href="/topics/gis-for-intelligence"
              className="block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              GIS for Intelligence Analysis
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t">
            <Link href="/learning-paths" className="text-blue-600 hover:text-blue-800">
              Return to Learning Paths
            </Link>
          </div>
        </div>
      </div>
    </LessonContainer>
  )
}
