import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon as InfoCircle, Download, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Intelligence Meme Generator | The Intel Analyst Academy",
  description: "Create your own intelligence analysis memes",
}

export default function MemeGeneratorPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Intelligence Meme Generator</h1>
          <p className="text-xl text-muted-foreground">
            Create your own intelligence-themed memes for educational purposes
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-8 flex items-start gap-3">
          <InfoCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800">
              This tool is for creating unclassified, educational memes about intelligence concepts. Remember that humor
              in intelligence work should always be appropriate and never reveal sensitive information or methodologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="border rounded-lg p-4 h-full">
              <h2 className="text-xl font-semibold mb-4">Meme Preview</h2>
              <div className="aspect-square relative bg-gray-100 rounded-md overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Meme preview will appear here
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" disabled>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" disabled>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="border rounded-lg p-4 h-full">
              <h2 className="text-xl font-semibold mb-4">Meme Options</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Select Template</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Intelligence Cycle Chaos</option>
                    <option>Tactical vs Strategic</option>
                    <option>OSINT Stalker</option>
                    <option>Confirmation Bias</option>
                    <option>Source Reliability</option>
                    <option>Upload Your Own</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Top Text</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter top text" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Bottom Text</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter bottom text" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Font Style</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Impact (Classic)</option>
                    <option>Arial</option>
                    <option>Comic Sans MS</option>
                    <option>Times New Roman</option>
                  </select>
                </div>

                <Button className="w-full">Generate Meme</Button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Popular Templates</h2>
        <Tabs defaultValue="analyst" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analyst">Analyst Life</TabsTrigger>
            <TabsTrigger value="concepts">Intelligence Concepts</TabsTrigger>
            <TabsTrigger value="types">Intelligence Types</TabsTrigger>
          </TabsList>

          <TabsContent value="analyst" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Deadline Panic",
                "Information Overload",
                "Coffee Addiction",
                "Weekend Work",
                "Endless Meetings",
                "Classification Headache",
                "Report Feedback",
                "Budget Cuts",
              ].map((template) => (
                <TemplateCard key={template} name={template} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Intelligence Cycle",
                "Confirmation Bias",
                "Analysis Paralysis",
                "Source Reliability",
                "Intelligence Failure",
                "Competing Hypotheses",
                "Intelligence vs Information",
                "Estimative Language",
              ].map((template) => (
                <TemplateCard key={template} name={template} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="types" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "OSINT Stalker",
                "HUMINT Relationships",
                "SIGINT Listening",
                "GEOINT From Space",
                "Strategic Planning",
                "Tactical Response",
                "FININT Money Trail",
                "MASINT Sensors",
              ].map((template) => (
                <TemplateCard key={template} name={template} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-yellow-50 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-yellow-800 mb-2">Meme Creation Tips</h3>
          <ul className="list-disc pl-5 text-yellow-800 space-y-1">
            <li>Keep text concise - the best memes are quick to read</li>
            <li>Use relatable intelligence situations that other analysts will understand</li>
            <li>Avoid inside jokes that are too specific to your organization</li>
            <li>Remember: all memes must be unclassified and appropriate for professional settings</li>
            <li>Focus on common experiences in intelligence work for maximum relatability</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Share Your Creations</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Created a great intelligence meme? Submit it to our gallery to share with other analysts.
          </p>
          <Button asChild>
            <Link href="/resources/submit-meme">Submit to Gallery</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface TemplateCardProps {
  name: string
}

function TemplateCard({ name }: TemplateCardProps) {
  return (
    <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
      <div className="aspect-square relative bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm p-2 text-center">
          {name} Template
        </div>
      </div>
      <CardContent className="p-2">
        <p className="text-xs text-center truncate">{name}</p>
      </CardContent>
    </Card>
  )
}
