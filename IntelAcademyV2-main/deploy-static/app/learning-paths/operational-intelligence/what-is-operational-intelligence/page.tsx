import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function WhatIsOperationalIntelligence() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/learning-paths/operational-intelligence" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Operational Intelligence
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight">
          Decoding Operational Intelligence
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          The unsung hero that turns grand plans into ground-level reality.
        </p>

        <div className="relative w-full h-72 mb-12 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/operational-intelligence-header.png"
            alt="Operational Intelligence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <Card className="mb-12 p-6 bg-secondary/50">
          <p className="text-xl font-medium text-center">
            Think of intelligence as a family. <b className="text-primary">Strategic Intelligence</b> is the
            philosophical parent dreaming about the future. <b className="text-destructive">Tactical Intelligence</b> is
            the hyperactive kid focused on the here and now. And{" "}
            <b className="text-accent-foreground">Operational Intelligence</b>? It&apos;s the cool, pragmatic older sibling
            actually making sure the family vacation happens.
          </p>
        </Card>

        <Separator className="my-12" />

        <h2 className="text-3xl font-bold mb-4">
          <span className="text-primary">Definition:</span> What Is This Stuff, Really?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Operational intelligence is the connective tissue between high-level strategy and on-the-ground action. It&apos;s
          the intelligence required for planning and executing specific operations. It answers the question: &quot;Okay, we
          want to achieve X. How do we *actually* do it without setting the building on fire... unless that&apos;s the
          plan?&quot;
        </p>
        <ul className="space-y-3 list-disc list-inside mb-8">
          <li>
            <b>Supports the Now-ish:</b> Focuses on operations happening now or in the near future. It&apos;s less &quot;what if?&quot;
            and more &quot;what&apos;s next?&quot;
          </li>
          <li>
            <b>Knows the Enemy (and Ourselves):</b> Dives into capabilities, vulnerabilities, and likely actions of all
            players. It's the pre-game analysis.
          </li>
          <li>
            <b>The &quot;Why&quot; for the &quot;What&quot;:</b> Provides the crucial context for tactical teams. It&apos;s the mission briefing
            that prevents boots-on-the-ground from just winging it.
          </li>
          <li>
            <b>Makes Dreams a Reality:</b> Translates vague strategic goals like "disrupt the network" into concrete
            operational plans.
          </li>
        </ul>

        <div className="relative h-96 w-full rounded-lg overflow-hidden my-12 shadow-lg">
          <Image
            src="/intelligence-levels-comparison.png"
            alt="Comparison of Strategic, Operational, and Tactical Intelligence"
            fill
            className="object-contain p-4"
          />
        </div>

        <Separator className="my-12" />

        <h2 className="text-3xl font-bold mb-6">The Goldilocks of Intelligence: Key Characteristics</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Time Horizon</h3>
            <p>
              Not too long, not too short. We&apos;re talking days, weeks, maybe a few months. It&apos;s the sweet spot between
              tactical&apos;s &quot;RIGHT NOW!&quot; and strategic&apos;s &quot;By the next decade...&quot;.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Level of Detail</h3>
            <p>
              More specific than a vague strategic memo, but broader than a single tactical report. It&apos;s about seeing
              the patterns, not just the individual pixels. Just right.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Decision Support</h3>
            <p>
              This is for the sergeants, the field managers, the people who have to turn the General&apos;s grand speech into
              a workable plan. They&apos;re the real MVPs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Analytical Focus</h3>
            <p>
              It&apos;s all about pattern recognition and trend analysis. Basically, it&apos;s like being a psychic, but you have
              to show your work and use data instead of a crystal ball.
            </p>
          </div>
        </div>

        <Separator className="my-12" />

        <h2 className="text-3xl font-bold mb-6 text-center">Where the Magic Happens: Real-World Applications</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">Law Enforcement</h3>
              <ul className="space-y-3">
                <li>🕵️‍♂️ Spotting the next big crime spree before it becomes a hit Netflix series.</li>
                <li>🗺️ Putting cops where the criminals are, not where the donuts are.</li>
                <li>🎯 Precision policing, because a sledgehammer is a poor tool for surgery.</li>
                <li>🤝 Getting different police departments to actually talk to each other.</li>
                <li>🔮 Predictive policing: Minority Report, but with more spreadsheets and fewer ethical quandaries.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center text-red-600">National Security</h3>
              <ul className="space-y-3">
                <li>💣 Planning counter-terrorism ops with surgical precision.</li>
                <li>🛂 Securing borders against threats bigger than a badly declared souvenir.</li>
                <li>💡 Keeping the lights on and the bad guys out of our critical infrastructure.</li>
                <li>👀 Watching the watchers who are watching us. It gets meta.</li>
                <li>🐱 Herding the multi-agency cats into a coherent, effective force.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <h2 className="text-3xl font-bold mb-6">The Secret Sauce: The Operational Intelligence Process</h2>
        <p className="mb-6 text-muted-foreground">
          It&apos;s not just guesswork. There&apos;s a recipe! Follow it, and you get delicious, actionable intelligence. Skip a
          step, and you get a burnt, inedible mess of bad decisions.
        </p>

        <div className="relative h-96 w-full rounded-lg overflow-hidden my-12 shadow-lg">
          <Image
            src="/operational-intelligence-process.png"
            alt="Operational Intelligence Process"
            fill
            className="object-contain p-4"
          />
        </div>

        <Separator className="my-12" />

        <h2 className="text-3xl font-bold mb-6">The Analyst&apos;s Toolbox: Tools & Techniques</h2>
        <p className="mb-6 text-muted-foreground">
          Analysts aren&apos;t just staring at walls waiting for inspiration. They use a powerful toolkit to connect the
          dots.
        </p>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 list-none p-0">
          <li className="bg-secondary/30 p-4 rounded-lg">
            <b>Crime Mapping:</b> Making maps that tell a story, not just how to get to Starbucks.
          </li>
          <li className="bg-secondary/30 p-4 rounded-lg">
            <b>Link Analysis:</b> The professional version of connecting red string on a corkboard.
          </li>
          <li className="bg-secondary/30 p-4 rounded-lg">
            <b>Temporal Analysis:</b> Basically, being a time detective to see when things are most likely to go down.
          </li>
          <li className="bg-secondary/30 p-4 rounded-lg">
            <b>Statistical Analysis:</b> Using math to prove you&apos;re not just making stuff up.
          </li>
          <li className="bg-secondary/30 p-4 rounded-lg">
            <b>Network Analysis:</b> Understanding who's who in the zoo of criminal organizations.
          </li>
          <li className="bg-secondary/30 p-4 rounded-lg">
            <b>Predictive Analytics:</b> The closest you can get to a crystal ball without getting laughed out of the
            briefing room.
          </li>
        </ul>

        <Separator className="my-12" />

        <Card className="bg-muted/50 my-12">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">The TL;DR (Too Long; Didn&apos;t Read)</h3>
            <ul className="space-y-2 text-center">
              <li>✅ It&apos;s the bridge between big ideas and getting stuff done.</li>
              <li>✅ Focuses on the "soon-ish" future to support current ops.</li>
              <li>✅ It's all about finding patterns and predicting the next move.</li>
              <li>✅ It's the secret weapon of effective mid-level leaders.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-12 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/learning-paths/operational-intelligence">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Path
            </Link>
          </Button>
          <Button asChild>
            <Link href="/topics/domestic-terrorism-monitoring">
              Next Topic: Domestic Terrorism Monitoring <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
