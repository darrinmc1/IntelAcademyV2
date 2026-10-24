import Image from "next/image"
import Link from "next/link"
import { CheckCircle, FileText, Lightbulb, Users, BookOpen, MessageSquare, Download } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/learn-more", "Learn more", "How the academy is organised, and who the lessons are written for.")
export default function LearnMore() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Learn More About the Academy</h1>
          <p className="text-xl text-muted-foreground">
            How the lessons are organised, and what the site does not do.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                The Intel Analyst Academy publishes written lessons on intelligence analysis. You can read them
                without a paid plan. Video lessons are not available yet.
              </p>
              <p>
                By providing open access to professional-grade educational resources, we aim to improve the standard of
                intelligence analysis across all sectors - from law enforcement and national security to private sector
                and academic research.
              </p>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/collaborative-intelligence-hub.png"
                alt="Intelligence analysts collaborating"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Learning Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Self-Paced Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Most lessons take a few minutes. Read them in any order inside a path, or follow the path from the top.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Practical Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We emphasize practical, applicable skills that you can immediately implement in your work. Everything
                  we teach is designed to make you more effective in real-world scenarios.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>No forum yet</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  There is no discussion board. Feedback is for mistakes on a page. A topic request is for a lesson
                  that does not exist yet.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <Tabs defaultValue="learning-paths" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
            <TabsContent value="learning-paths" className="space-y-4">
              <div className="flex items-start gap-4">
                <BookOpen className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Structured Learning Paths</h3>
                  <p className="mb-4">
                    A learning path is a reading order. Each path page lists the lessons that exist. A path includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Short written lessons, most of them a few minutes</li>
                    <li>Clear learning objectives and outcomes</li>
                    <li>Practical examples and case studies</li>
                    <li>Recommended resources for further learning</li>
                    <li>Progressive skill development from beginner to advanced</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/learning-paths">Explore Learning Paths</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="community" className="space-y-4">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Forum</h3>
                  <p className="mb-4">
                    The forum page is a placeholder. It does not have threads, members, or moderators.
                  </p>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/forum">See the placeholder</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <div className="flex items-start gap-4">
                <Download className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Downloads & Templates</h3>
                  <p className="mb-4">
                    The downloads page has PDF templates and checklists that are actually on the server:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Report, collection, and timeline templates</li>
                    <li>Checklists for bias, assumptions, OSINT, and writing</li>
                    <li>A short primer handbook</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/downloads">Access Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="upcoming" className="space-y-4">
              <div className="flex items-start gap-4">
                <FileText className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                  <p className="mb-4">Two things are not on the site yet:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Video lessons</li>
                    <li>A forum</li>
                  </ul>
                  <p className="mb-4">
                    Practical exercises and Academy Brief are already live. There is no sandbox, badge scheme, or webinar series.
                  </p>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/waitlist">Join the list</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>New Analysts</CardTitle>
                <CardDescription>Building foundational knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For those just starting their intelligence career, we provide structured learning paths that cover
                  fundamental concepts, methodologies, and tools. Our content helps you:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Understand core intelligence principles</li>
                  <li>Learn essential analytical techniques</li>
                  <li>Develop critical thinking skills</li>
                  <li>Build a professional foundation</li>
                  <li>Request a topic that is not written yet</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Experienced Professionals</CardTitle>
                <CardDescription>Refining advanced skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For seasoned analysts, we offer advanced content to help you stay current with evolving methodologies
                  and technologies. Our resources help you:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deepen expertise in specialized areas</li>
                  <li>Learn modern analytical techniques</li>
                  <li>Send a correction when a lesson is wrong</li>
                  <li>Stay current with emerging trends</li>
                  <li>Develop leadership and mentoring skills</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Law Enforcement</CardTitle>
                <CardDescription>Supporting public safety</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For law enforcement intelligence units, we provide specialized content focused on criminal
                  intelligence, tactical support, and investigative analysis:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Criminal network analysis techniques</li>
                  <li>Tactical intelligence support methods</li>
                  <li>Case management best practices</li>
                  <li>Evidence-based analytical approaches</li>
                  <li>Legal and ethical considerations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Private Sector</CardTitle>
                <CardDescription>Business intelligence applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For corporate security and business intelligence professionals, we offer content tailored to private
                  sector needs:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Competitive intelligence methodologies</li>
                  <li>Threat assessment frameworks</li>
                  <li>Due diligence and risk analysis</li>
                  <li>Executive protection intelligence</li>
                  <li>Corporate security intelligence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is the content really free?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Written lessons are free to read. You can register if you want an account. Video is not available yet,
                  and the site does not take a card.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who creates the content?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Lessons are written for this academy. They are not a named agency&apos;s product, and they are not peer
                  reviewed by an outside board. If a page is wrong, send a correction.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often is new content added?</AccordionTrigger>
              <AccordionContent>
                <p>
                  New lessons are published when they are finished. You can request a subject that is not on the site.
                  That request is not a promise of a date.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use the content for training my team?</AccordionTrigger>
              <AccordionContent>
                <p>
                  You can use the written lessons in your own training. The practical exercises are the group task.
                  There is no separate team-leader pack.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I contribute to the Academy?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Request a missing topic, or send feedback on a page that is already up. There is no contributor
                  programme and no forum to post in. Use the contact form if you need a person.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Get Involved</h2>
            <p className="text-center mb-8">
              Three things you can actually do from this page.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Read a path</h3>
                <p className="mb-4">
                  Start with Foundations if the vocabulary is new. Otherwise pick the discipline you already work in.
                </p>
                <Button asChild>
                  <Link href="/learning-paths">Learning paths</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Request a new topic</h3>
                <p className="mb-4">
                  Don&apos;t see the lesson subject yet? Request a new topic — not a bug report on an existing page.
                </p>
                <Button asChild>
                  <Link href="/request-topic">Request a new topic</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="mb-4">
                  Have questions, feedback, or want to discuss collaboration opportunities? Reach out to our team.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact form</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="mb-6 text-xl">
              Pick a path and read the first lesson. The exercises are there when you want to try the method.
            </p>
            <Button asChild size="lg">
              <Link href="/learning-paths">Browse Learning Paths</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
