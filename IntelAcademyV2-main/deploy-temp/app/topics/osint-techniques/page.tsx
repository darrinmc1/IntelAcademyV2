import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LessonVideo } from "@/components/lesson-video"

export const metadata: Metadata = {
  title: "OSINT Techniques | The Intel Analyst Academy",
  description: "Learn advanced OSINT techniques for intelligence gathering and analysis.",
}

export default function OSINTTechniquesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths">Learning Paths</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths/osint">OSINT</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/osint-techniques" isCurrentPage>
              OSINT Techniques
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/learning-paths/osint" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to OSINT Learning Path
          </Link>
        </Button>
      </div>

      <h1 className="text-4xl font-bold mb-6">OSINT Techniques: Digital Stalking for Professionals</h1>

      <div className="relative w-full h-48 md:h-64 mb-6">
        <Image
          src="/images/osint/social-media-intelligence-diagram.png"
          alt="OSINT Techniques Illustration"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Add the video component */}
      <LessonVideo
        title="Advanced OSINT Techniques for Intelligence Analysts"
        description="Master the art of finding everything people wish you couldn't"
        category="osint"
        lessonSlug="osint-techniques"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        duration="17:42"
      />

      <div className="prose max-w-none">
        <p className="lead">
          Welcome to OSINT Techniques, where we teach you how to find out everything about someone without ever having
          to engage in that horrifying activity known as "talking to people." These techniques are what separate the
          professional intelligence analyst from your ex who just checks your Instagram stories.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p className="italic">
            "An OSINT analyst is just a stalker with a government paycheck and better tools." —{" "}
            <span className="font-semibold">Anonymous Intelligence Officer who definitely exists</span>
          </p>
        </div>

        <h2>The Art of Digital Dumpster Diving</h2>
        <p>
          OSINT is essentially professional dumpster diving, except the dumpster is the entire internet and you don't
          need to worry about raccoons (unless you're investigating certain parts of Reddit). Here are some techniques
          that will make you the person everyone regrets sharing information with:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3>Advanced Search Operators (AKA "Hacking" According to Movies)</h3>
            <p>
              Using advanced search operators is like having a skeleton key to the internet's filing cabinet. While your
              colleagues type "John Smith company" into Google, you're typing "intitle:resume intext:\"John Smith\"
              filetype:pdf" and finding his resume, salary history, and that embarrassing poetry blog from 2006.
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3>Reverse Image Search (CSI: Enhance, But Real)</h3>
            <p>
              Reverse image searching is like having a superpower that ruins vacations. That innocent beach photo
              reveals not just the location, but the hotel, the restaurant they visited after, and somehow their high
              school GPA. It's what happens when "I know that place!" becomes a technical skill.
            </p>
          </div>
        </div>

        <h2>Social Media Intelligence: Where Privacy Goes to Die</h2>
        <p>
          Social media is an OSINT analyst's dream—a place where people voluntarily document their lives, opinions,
          connections, and that weird phase where they were really into fermenting vegetables. Here's how to turn
          someone's oversharing into actionable intelligence:
        </p>

        <ul>
          <li>
            <strong>Cross-Platform Analysis:</strong> Because nothing says "thorough" like finding someone's LinkedIn,
            then their Twitter, then their old MySpace page that still has "Crawling" by Linkin Park on autoplay
          </li>
          <li>
            <strong>Temporal Analysis:</strong> Tracking posting patterns to determine when someone is most active
            online, which is both useful intelligence and slightly creepy when you say it out loud
          </li>
          <li>
            <strong>Network Mapping:</strong> Creating a visualization of someone's connections that looks suspiciously
            like the wall of a conspiracy theorist, but with better software and less red string
          </li>
          <li>
            <strong>Sentiment Analysis:</strong> Using software to determine if someone is happy, sad, or just being
            sarcastic—a task at which AI is about as effective as your dad trying to understand your teenage mood swings
          </li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <h3 className="font-bold">Analyst Humor Corner</h3>
          <p>
            Q: How many OSINT analysts does it take to change a lightbulb?
            <br />
            A: None. They already know your purchase history, the store where you bought the bulb, your electrical usage
            patterns, and have predicted when it will burn out next.
          </p>
        </div>

        <h2>Geolocation: Finding People Who Think They're Hidden</h2>
        <p>
          Geolocation techniques are what turn "somewhere in Europe" into "third table from the left at the café on Rue
          Saint-Honoré in Paris at approximately 3:42 PM local time on Tuesday." It's like playing "Where's Waldo?"
          except Waldo didn't know he was playing and is now concerned about his operational security.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div>
            <h3>Metadata Analysis (The Data About the Data About the Data)</h3>
            <p>
              Metadata is the gift that keeps on giving. That innocent photo contains the exact coordinates, the device
              model, the time it was taken, and somehow your cholesterol levels. It's like finding someone's diary, but
              the diary was written by their phone without their knowledge.
            </p>
          </div>
          <div>
            <h3>Shadow Analysis (Yes, Really)</h3>
            <p>
              Advanced analysts can determine location and time from the shadows in photos. "The shadow is approximately
              2.3 meters long at a 43-degree angle, which means this was taken at 4:17 PM on April 23rd in Albuquerque,
              New Mexico." Meanwhile, you still can't figure out which way is north without Google Maps.
            </p>
          </div>
        </div>

        <h2>The OSINT Analyst's Toolkit (Digital Lockpicking Set)</h2>
        <p>
          Every professional needs their tools. While a plumber has a wrench and a doctor has a stethoscope, an OSINT
          analyst has software that makes your browser history look like evidence in a criminal investigation:
        </p>

        <ul>
          <li>
            <strong>Maltego:</strong> For when you want your intelligence analysis to look like you're hacking the
            Matrix
          </li>
          <li>
            <strong>Shodan:</strong> The search engine that finds internet-connected devices and makes you realize why
            you should never connect your refrigerator to WiFi
          </li>
          <li>
            <strong>Wayback Machine:</strong> For finding what people said before they realized it was a bad idea to say
            it
          </li>
          <li>
            <strong>Social Analyzer:</strong> Because manually checking 300 social media platforms would take too long
            and carpal tunnel is a real concern
          </li>
        </ul>

        <h2>Ethical Considerations (The Part Everyone Skips)</h2>
        <p>
          Just because you <em>can</em> find information doesn't mean you <em>should</em>. OSINT powers come with OSINT
          responsibilities:
        </p>

        <ul>
          <li>Respect privacy boundaries (the legal kind, not the "I'll definitely get away with this" kind)</li>
          <li>
            Use information ethically (finding someone's address: potentially legitimate; ordering 50 pizzas to that
            address: definitely not legitimate)
          </li>
          <li>Remember that just because information is public doesn't mean collecting it can't be creepy</li>
          <li>
            Consider the impact of your actions (the difference between an analyst and a stalker is methodology,
            authorization, and sometimes just a paycheck)
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h3 className="font-semibold mb-2">Key Takeaways (For Those Who Just Scrolled to the Bottom)</h3>
          <ul className="space-y-1">
            <li>
              OSINT techniques turn publicly available information into intelligence that seems magically obtained
            </li>
            <li>
              Advanced search operators make you look like a hacker in movies but are actually just fancy Googling
            </li>
            <li>Social media is a goldmine of information people don't realize they're sharing</li>
            <li>Geolocation can find people with disturbing precision based on seemingly innocent details</li>
            <li>With great OSINT power comes great OSINT responsibility—don't be creepy</li>
            <li>The best OSINT is done so well that the subject never knows they were researched</li>
          </ul>
        </div>

        <p>
          Remember: In the world of intelligence, the person who can find out everything about someone without ever
          meeting them isn't weird—they're just well-trained. (But they're also a little weird. Let's be honest.)
        </p>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Related Topics</CardTitle>
          <CardDescription>Continue your journey into the digital abyss</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/google-dorking-thumb.png" alt="Google Dorking" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">Google Dorking Techniques</h3>
                  <p className="text-sm text-muted-foreground">20 min read</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/topics/google-dorking" className="flex items-center">
                  Start <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/socmint-techniques-thumb.png" alt="SOCMINT Techniques" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">Social Media Intelligence (SOCMINT) Techniques</h3>
                  <p className="text-sm text-muted-foreground">25 min read</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/topics/socmint-techniques" className="flex items-center">
                  Start <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/deep-web-research-thumb.png" alt="Deep Web Research" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">Deep Web Research Techniques</h3>
                  <p className="text-sm text-muted-foreground">30 min read</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/topics/deep-web-research" className="flex items-center">
                  Start <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
