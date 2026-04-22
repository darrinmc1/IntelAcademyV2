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

export default function LearnMore() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Learn More About the Academy</h1>
          <p className="text-xl text-muted-foreground">
            Discover how our platform empowers intelligence professionals through accessible, high-quality education
          </p>
        </div>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                The Intelligence Analyst Academy was founded with a clear purpose: to democratize access to high-quality
                intelligence analysis training. We believe that proper education in this field should not be limited by
                organizational resources, geographic location, or career stage.
              </p>
              <p>
                By providing open access to professional-grade educational resources, we aim to elevate the standard of
                intelligence analysis across all sectors—from law enforcement and national security to private sector
                and academic research.
              </p>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/collaborative-intelligence-hub.png"
                alt="Intelligence analysts collaborating"
                fill
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
                  Our platform is designed to accommodate busy professionals. Learn at your own pace with content
                  organized into digestible mini-topics that can be completed in 5-15 minutes.
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
                <CardTitle>Community-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our community forum provides a space for intelligence professionals to connect, share insights, and
                  help each other grow. Learning is enhanced through peer support and collaboration.
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
                    Our learning paths provide a structured journey through intelligence analysis topics, from
                    foundational concepts to advanced techniques. Each path includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Bite-sized mini-topics (5-15 minutes each)</li>
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
                  <h3 className="text-xl font-bold mb-2">Community Forum</h3>
                  <p className="mb-4">
                    Our forum is a vibrant space for intelligence professionals to connect, share knowledge, and solve
                    problems together. The forum features:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Discussions organized by topic and specialty</li>
                    <li>Case study analyses and collaborative problem-solving</li>
                    <li>Tool recommendations and reviews</li>
                    <li>Career advice and professional development</li>
                    <li>Moderated discussions to maintain quality and professionalism</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/forum">Join the Discussion</Link>
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
                    We provide a variety of free resources to enhance your intelligence analysis workflow:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Analysis templates and worksheets</li>
                    <li>Reference guides and cheat sheets</li>
                    <li>Tool configuration guides</li>
                    <li>Report templates and examples</li>
                    <li>Training materials for team leaders</li>
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
                  <p className="mb-4">We're constantly working to improve the Academy with new features:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Interactive sandbox environment for practicing analysis techniques</li>
                    <li>Digital badges and certifications to recognize your achievements</li>
                    <li>Gamification elements to make learning more engaging</li>
                    <li>Expert webinars and Q&A sessions</li>
                    <li>Advanced simulation exercises</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/coming-soon">Learn About Future Plans</Link>
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
                  <li>Connect with mentors and peers</li>
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
                  <li>Learn cutting-edge analytical techniques</li>
                  <li>Share knowledge with the community</li>
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
                  Yes, all of our educational content is completely free and accessible without registration. We believe
                  in removing barriers to quality intelligence education. In the future, we may introduce premium
                  features like certification or advanced simulations, but our core educational content will always
                  remain free.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who creates the content?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Our content is developed by a team of experienced intelligence professionals with backgrounds in law
                  enforcement, national security, military intelligence, and private sector analysis. All content
                  undergoes peer review to ensure accuracy, relevance, and practical value.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often is new content added?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We add new topics and resources every month. Our content development is guided by community requests
                  and emerging trends in the intelligence field. You can request specific topics through our "Request a
                  Topic" feature, and we prioritize content based on community interest.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use the content for training my team?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Our content is designed to be used for both individual learning and team training. Many of our
                  resources include discussion questions and exercises that can be used in group settings. We encourage
                  organizations to incorporate our materials into their training programs.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I contribute to the Academy?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We welcome contributions from experienced professionals! You can contribute by participating in forum
                  discussions, suggesting topics, providing feedback on existing content, or applying to join our
                  content development team. Contact us through the form below if you&apos;re interested in contributing.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Get Involved</h2>
            <p className="text-center mb-8">
              There are many ways to participate in and contribute to the Intelligence Analyst Academy community
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Join the Community</h3>
                <p className="mb-4">
                  Participate in discussions, share insights, and connect with fellow intelligence professionals.
                </p>
                <Button asChild>
                  <Link href="/forum">Visit the Forum</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Request a Topic</h3>
                <p className="mb-4">
                  Don&apos;t see what you&apos;re looking for? Let us know what topics you&apos;d like us to cover next.
                </p>
                <Button asChild>
                  <Link href="/request-topic">Submit a Request</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="mb-4">
                  Have questions, feedback, or want to discuss collaboration opportunities? Reach out to our team.
                </p>
                <Button asChild>
                  <Link href="/about#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="mb-6 text-xl">
              Explore our learning paths and begin your journey to becoming a more effective intelligence analyst.
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
