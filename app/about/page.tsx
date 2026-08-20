import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" isCurrentPage>
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About the Intelligence Analyst Academy</h1>
          <p className="text-xl text-muted-foreground">
            Empowering intelligence professionals through accessible, high-quality education
          </p>
        </div>

        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              The Intelligence Analyst Academy was founded with a simple mission: to make high-quality intelligence
              analysis training accessible to everyone who needs it. We believe that proper training and education
              should not be limited by organizational resources or geographic location.
            </p>
            <p>
              Our platform serves complete beginners, students, law enforcement officers, and private sector analysts
              who need both foundational training and refresher modules. By providing open access to professional-grade
              educational resources, we aim to improve the standard of intelligence analysis across all sectors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Self-Paced Learning</h3>
                <p>
                  We understand that professionals have varying schedules and learning preferences. Our platform is
                  designed to allow you to learn at your own pace, revisiting material as needed and progressing
                  when you are ready.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
                <p>
                  Every module is built around real-world scenarios and applied techniques used by working analysts.
                  Theory is always paired with practical exercises so you can immediately apply what you learn.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Authored Content</h3>
                <p>
                  Our curriculum is developed and reviewed by experienced intelligence professionals from government,
                  law enforcement, and the private sector to ensure accuracy and relevance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Learning Paths</h3>
                <p>
                  Whether you are starting from scratch or deepening existing skills, our curated learning paths
                  guide you step-by-step through the competencies that matter most.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section id="pricing">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg">
                Choose the plan that fits your goals. Upgrade or cancel at any time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Tier */}
              <div className="border rounded-xl p-6 flex flex-col gap-4 bg-background">
                <div>
                  <h3 className="text-xl font-bold mb-1">Free</h3>
                  <p className="text-muted-foreground text-sm">Get started with no commitment</p>
                </div>
                <div className="text-4xl font-extrabold">
                  $0
                  <span className="text-base font-normal text-muted-foreground"> / month</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Access to all introductory topics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    1 guided learning path
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Community discussion access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold mt-0.5">✗</span>
                    <span className="text-muted-foreground">Progress tracking &amp; certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold mt-0.5">✗</span>
                    <span className="text-muted-foreground">Advanced &amp; specialist topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold mt-0.5">✗</span>
                    <span className="text-muted-foreground">Downloadable resources</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-2" asChild>
                  <Link href="/">Get Started Free</Link>
                </Button>
              </div>

              {/* Pro Tier */}
              <div className="border-2 border-primary rounded-xl p-6 flex flex-col gap-4 bg-background relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Pro</h3>
                  <p className="text-muted-foreground text-sm">For serious analysts and students</p>
                </div>
                <div className="text-4xl font-extrabold">
                  $19
                  <span className="text-base font-normal text-muted-foreground"> / month</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Everything in Free
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Unlimited learning paths
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Full access to all topics &amp; modules
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Progress tracking &amp; completion certificates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Downloadable worksheets &amp; templates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold mt-0.5">✗</span>
                    <span className="text-muted-foreground">Team management dashboard</span>
                  </li>
                </ul>
                <Button className="w-full mt-2" asChild>
                  <Link href="/">Start Pro — $19/mo</Link>
                </Button>
              </div>

              {/* Team Tier */}
              <div className="border rounded-xl p-6 flex flex-col gap-4 bg-background">
                <div>
                  <h3 className="text-xl font-bold mb-1">Team</h3>
                  <p className="text-muted-foreground text-sm">For agencies, units, and organizations</p>
                </div>
                <div className="text-4xl font-extrabold">
                  $49
                  <span className="text-base font-normal text-muted-foreground"> / month</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Everything in Pro
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Up to 25 team member seats
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Team management &amp; progress dashboard
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Bulk enrollment &amp; reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Priority email support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    Custom onboarding session
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-2" asChild>
                  <Link href="/">Contact Us for Team Access</Link>
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              All plans include a <strong>14-day free trial</strong> of Pro features. No credit card required to start.
              Questions? <Link href="/about" className="underline underline-offset-2">Contact our team</Link>.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Students &amp; Academics</h3>
                <p className="text-muted-foreground text-sm">
                  Build a strong analytical foundation before entering the workforce with structured, curriculum-aligned
                  learning paths.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
                <p className="text-muted-foreground text-sm">
                  Access practical intelligence tradecraft training designed for operational environments, from patrol
                  officers to dedicated analysts.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Private Sector Analysts</h3>
                <p className="text-muted-foreground text-sm">
                  Sharpen competitive intelligence, threat assessment, and open-source research skills relevant to
                  corporate and consulting roles.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of analysts building their skills on the Intelligence Analyst Academy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/">Explore Learning Paths</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/topics">Browse All Topics</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
