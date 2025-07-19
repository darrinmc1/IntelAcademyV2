import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/image"
import { RequestTopicForm } from "./request-topic-form"
import { Toaster } from "@/components/ui/toaster"

export default function ComingSoon() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Coming Soon</h1>
          <p className="text-muted-foreground">
            We&apos;re constantly working to improve the Intelligence Analyst Academy. Here&apos;s a preview of what&apos;s coming
            next.
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-60 md:h-auto">
                <Image
                  src="/online-forum-threads.png"
                  alt="Community Forum"
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder.svg?key=yg30t"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">Community Forum</CardTitle>
                  <CardDescription>Expected Launch: Q2 2023</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p>
                    Connect with fellow intelligence analysts, share insights, and collaborate on challenges in our
                    upcoming community forum.
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Discuss intelligence analysis techniques and methodologies</li>
                    <li>Share resources and tools with the community</li>
                    <li>Get feedback on your analysis approaches</li>
                    <li>Network with professionals in the field</li>
                    <li>Participate in moderated discussions on current topics</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild className="w-full">
                      <Link href="/coming-soon/community-forum">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* NEW: Community Forums Section */}
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-60 md:h-auto md:order-last">
                <Image
                  src="/forum-preview-banner.png"
                  alt="Community Forums"
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder.svg?key=4llau"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">Community Forums</CardTitle>
                  <CardDescription>Expected Launch: Q3 2023</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p>
                    Join specialized discussion forums focused on different intelligence disciplines and methodologies.
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Topic-specific forums for each intelligence discipline</li>
                    <li>Expert-moderated discussions on advanced techniques</li>
                    <li>Case study analysis and collaborative problem-solving</li>
                    <li>Private forums for verified professionals</li>
                    <li>Regular Q&A sessions with industry experts</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild className="w-full">
                      <Link href="/coming-soon/community-forums">Explore Forums</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-60 md:h-auto">
                <Image
                  src="/immersive-learning-lab.png"
                  alt="Interactive Sandbox Environment"
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder.svg?key=dhe1b"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">Interactive Sandbox Environment</CardTitle>
                  <CardDescription>Expected Launch: Q3 2023</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p>
                    Practice your intelligence analysis skills in realistic simulations with our upcoming sandbox
                    environment.
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Realistic intelligence scenarios based on sanitized real-world cases</li>
                    <li>Interactive data sets to practice analytical techniques</li>
                    <li>Simulated intelligence collection and analysis workflows</li>
                    <li>Feedback on your analytical process and conclusions</li>
                    <li>Adjustable difficulty levels for beginners through experts</li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-60 md:h-auto md:order-last">
                <Image
                  src="/digital-badge-display.png"
                  alt="Badges & Certification"
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder.svg?key=4nwmm"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">Badges & Certification</CardTitle>
                  <CardDescription>Expected Launch: Q4 2023</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p>
                    Earn recognition for your achievements and showcase your expertise with digital badges and
                    certificates.
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Skill-based badges for completing learning paths</li>
                    <li>Specialty certifications for domain expertise</li>
                    <li>Shareable credentials for your professional profiles</li>
                    <li>Progressive achievement system to track your growth</li>
                    <li>Industry-recognized credentials to boost your career</li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-60 md:h-auto">
                <Image
                  src="/learning-adventure.png"
                  alt="Gamification"
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder.svg?key=lcb3v"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl">Gamification</CardTitle>
                  <CardDescription>Expected Launch: Q1 2024</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p>Level up your learning with XP points, achievements, and competitive challenges.</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Experience points (XP) for completing tutorials and exercises</li>
                    <li>Achievement system for mastering specific skills</li>
                    <li>Leaderboards for friendly competition</li>
                    <li>Timed challenges to test your analytical speed</li>
                    <li>Unlock advanced content as you progress</li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <RequestTopicForm />
        </div>
      </div>
      <Toaster />
    </div>
  )
}
