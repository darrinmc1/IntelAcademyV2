import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon as InfoCircle, Download, Share2, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Intelligence Memes | The Intel Analyst Academy",
  description: "Educational memes about intelligence concepts and analyst life",
}

export default function IntelligenceMemesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Intelligence Analyst Memes</h1>
          <p className="text-xl text-muted-foreground">
            Learning through laughter: Intelligence concepts explained with memes
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-8 flex items-start gap-3">
          <InfoCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800">
              These educational memes are designed to make intelligence concepts more memorable through humor. Share
              them with your colleagues for a laugh, but remember that humor is subjective and some memes might only be
              funny to those who have experienced the unique challenges of intelligence work.
            </p>
          </div>
        </div>

        <Tabs defaultValue="concepts" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="concepts">Intelligence Concepts</TabsTrigger>
            <TabsTrigger value="analyst-life">Analyst Life</TabsTrigger>
            <TabsTrigger value="intelligence-types">Intelligence Types</TabsTrigger>
          </TabsList>

          <TabsContent value="concepts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Intelligence Cycle Meme */}
              <MemeCard
                title="The Intelligence Cycle"
                description="What the textbook shows vs. what actually happens"
                imagePath="/intelligence-cycle-reality.png"
                altText="Intelligence cycle meme showing the ideal cycle vs the chaotic reality"
                concept="Intelligence Cycle"
                conceptLink="/topics/intelligence-cycle"
              />

              {/* Analysis of Competing Hypotheses Meme */}
              <MemeCard
                title="Analysis of Competing Hypotheses"
                description="When you eliminate all other possibilities, whatever remains must be the truth... or you missed something"
                imagePath="/competing-hypotheses-drake.png"
                altText="Sherlock Holmes meme about analysis of competing hypotheses"
                concept="Analytical Techniques"
                conceptLink="/learning-paths/analytical-techniques"
              />

              {/* Cognitive Biases Meme */}
              <MemeCard
                title="Confirmation Bias"
                description="When you only see what you want to see"
                imagePath="/confirmation-bias-butterfly.png"
                altText="Meme about confirmation bias showing selective perception"
                concept="Cognitive Biases"
                conceptLink="/topics/cognitive-biases"
              />

              {/* Intelligence vs Information Meme */}
              <MemeCard
                title="Information vs. Intelligence"
                description="Not the same thing, no matter how many times people use them interchangeably"
                imagePath="/information-vs-intelligence-office.png"
                altText="Office meme showing Pam saying they're the same picture about information and intelligence"
                concept="Intelligence Fundamentals"
                conceptLink="/topics/information-vs-intelligence"
              />
            </div>
          </TabsContent>

          <TabsContent value="analyst-life" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deadline Meme */}
              <MemeCard
                title="Intelligence Deadlines"
                description="When they need the analysis 'ASAP'"
                imagePath="/intelligence-deadline-spongebob.png"
                altText="Meme about impossible intelligence deadlines"
                concept="Report Writing"
                conceptLink="/learning-paths/report-writing"
              />

              {/* Source Reliability Meme */}
              <MemeCard
                title="Source Reliability"
                description="When your most reliable source is 'some guy on Twitter'"
                imagePath="/source-reliability-twitter.png"
                altText="Meme about questionable source reliability in intelligence"
                concept="Source Evaluation"
                conceptLink="/learning-paths/source-evaluation"
              />

              {/* Information Overload Meme */}
              <MemeCard
                title="Information Overload"
                description="When you have to read 500 pages by tomorrow morning"
                imagePath="/information-overload-reading.png"
                altText="Meme about information overload in intelligence analysis"
                concept="Intelligence Processing"
                conceptLink="/topics/intelligence-processing"
              />

              {/* Tactical vs Strategic Meme */}
              <MemeCard
                title="Tactical vs. Strategic Analysts"
                description="Different timelines, different problems, same caffeine addiction"
                imagePath="/tactical-vs-strategic-caffeine.png"
                altText="Meme comparing tactical and strategic intelligence analysts"
                concept="Intelligence Types"
                conceptLink="/topics/strategic-vs-tactical"
              />
            </div>
          </TabsContent>

          <TabsContent value="intelligence-types" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* OSINT Meme */}
              <MemeCard
                title="OSINT Analysts"
                description="Professional stalkers with government paychecks"
                imagePath="/osint-stalking.png"
                altText="Meme about OSINT analysts being professional stalkers"
                concept="OSINT"
                conceptLink="/learning-paths/osint"
              />

              {/* HUMINT Meme */}
              <MemeCard
                title="HUMINT Collectors"
                description="Making friends for all the wrong reasons"
                imagePath="/humint-friends.png"
                altText="Meme about HUMINT collectors making questionable friendships"
                concept="HUMINT"
                conceptLink="/topics/humint-basics"
              />

              {/* SIGINT Meme */}
              <MemeCard
                title="SIGINT Analysts"
                description="When you hear 'Can you hear me now?' in your sleep"
                imagePath="/sigint-listening.png"
                altText="Meme about SIGINT analysts always listening"
                concept="SIGINT"
                conceptLink="/topics/sigint-intro"
              />

              {/* GEOINT Meme */}
              <MemeCard
                title="GEOINT Analysts"
                description="When you can tell what someone had for lunch from space"
                imagePath="/geoint-satellite.png"
                altText="Meme about GEOINT analysts seeing everything from satellites"
                concept="GEOINT"
                conceptLink="/topics/geoint-basics"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-yellow-50 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-yellow-800 mb-2">Analyst Humor Corner</h3>
          <p className="text-yellow-800">How many intelligence analysts does it take to change a light bulb?</p>
          <p className="text-yellow-800 mt-2 italic">
            We can neither confirm nor deny the existence of a light bulb, but we assess with moderate confidence that
            if such a light bulb did exist, it would require between 1-5 analysts to change it, depending on
            classification levels and whether Mercury is in retrograde.
          </p>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Create Your Own Intelligence Meme</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a funny intelligence concept you want to illustrate? Create your own meme and share it with fellow
            analysts. Just remember to keep it unclassified!
          </p>
          <Button asChild className="mr-4">
            <Link href="/resources/meme-generator">Create Meme</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/submit-meme">Submit Your Meme</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface MemeCardProps {
  title: string
  description: string
  imagePath: string
  altText: string
  concept: string
  conceptLink: string
}

function MemeCard({ title, description, imagePath, altText, concept, conceptLink }: MemeCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardFooter className="flex justify-between p-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href={conceptLink} className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>Learn about {concept}</span>
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
