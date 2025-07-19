"use client"
import { IntelligenceCommandCenter } from "@/components/spatial-audio/intelligence-command-center"
import { IntelligenceScenarioTheater } from "@/components/spatial-audio/intelligence-scenario-theater"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Headphones, Info } from "lucide-react"

export default function SpatialAudioDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-blue-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">3D Spatial Audio Experience</h1>
              <p className="text-blue-200">Immersive intelligence scenarios with positional audio</p>
            </div>
            <div className="flex items-center space-x-4 text-blue-300">
              <Headphones className="w-6 h-6" />
              <span className="text-sm">Headphones Recommended</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Requirements Notice */}
      <div className="bg-blue-900/30 border border-blue-500/50 mx-6 mt-6 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-blue-100 font-medium mb-1">3D Audio Requirements</p>
            <ul className="text-blue-200 space-y-1">
              <li>• Use headphones or stereo speakers for best experience</li>
              <li>• Modern browser with Web Audio API support required</li>
              <li>• Audio will respect your browser&apos;s motion preferences</li>
              <li>• Click anywhere to enable audio context if needed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="command-center" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-600">
            <TabsTrigger
              value="command-center"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Command Center
            </TabsTrigger>
            <TabsTrigger
              value="scenario-theater"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Scenario Theater
            </TabsTrigger>
          </TabsList>

          <TabsContent value="command-center" className="mt-6">
            <IntelligenceCommandCenter />
          </TabsContent>

          <TabsContent value="scenario-theater" className="mt-6">
            <IntelligenceScenarioTheater />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
