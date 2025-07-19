import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon as InfoCircle, Upload, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Submit Intelligence Meme | The Intel Analyst Academy",
  description: "Submit your intelligence analysis memes to our gallery",
}

export default function SubmitMemePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Submit Your Intelligence Meme</h1>
          <p className="text-xl text-muted-foreground">Share your humor with the intelligence community</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-8 flex items-start gap-3">
          <InfoCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800">
              All submitted memes will be reviewed before being added to our gallery. Please ensure your meme is
              appropriate for a professional setting and does not contain any sensitive or classified information.
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Meme Submission Form</CardTitle>
            <CardDescription>Fill out the details below to submit your intelligence meme</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Meme Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Give your meme a catchy title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Briefly explain your meme and which intelligence concept it relates to"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Related Intelligence Concept</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select a concept</option>
                  <option>Intelligence Cycle</option>
                  <option>OSINT</option>
                  <option>HUMINT</option>
                  <option>SIGINT</option>
                  <option>GEOINT</option>
                  <option>Strategic Intelligence</option>
                  <option>Tactical Intelligence</option>
                  <option>Operational Intelligence</option>
                  <option>Cognitive Biases</option>
                  <option>Source Evaluation</option>
                  <option>Intelligence Ethics</option>
                  <option>Report Writing</option>
                  <option>Analyst Life</option>
                  <option>Other (specify in description)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Upload Your Meme</label>
                <div className="border-2 border-dashed rounded-md p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">PNG, JPG or GIF (max. 2MB)</p>
                  <input type="file" className="hidden" accept="image/*" />
                  <Button variant="outline" size="sm" className="mt-4">
                    Select File
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm">
                  I confirm this meme contains no classified or sensitive information and is appropriate for a
                  professional setting
                </label>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/resources/intelligence-memes">Cancel</Link>
            </Button>
            <Button>Submit Meme</Button>
          </CardFooter>
        </Card>

        <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-1">Submission Guidelines</h3>
            <ul className="list-disc pl-5 text-yellow-800 space-y-1 text-sm">
              <li>All memes must be unclassified and appropriate for professional settings</li>
              <li>Avoid inside jokes that are too specific to your organization</li>
              <li>Do not include any personally identifiable information</li>
              <li>Humor should be respectful and not target specific individuals</li>
              <li>Memes should relate to intelligence concepts or analyst experiences</li>
              <li>Educational value is important - the best memes teach while entertaining</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Need Inspiration?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our existing meme gallery or use our meme generator to create your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/resources/intelligence-memes">Browse Meme Gallery</Link>
            </Button>
            <Button asChild>
              <Link href="/resources/meme-generator">Use Meme Generator</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
