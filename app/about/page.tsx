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
                  designed to allow you to learn at your own pace, revisit material as needed, and track your progress
                  over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is built around real-world scenarios and practical exercises. We focus on skills you
                  can apply immediately in your work, not just theoretical knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Developed Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with decades of combined
                  experience across government, law enforcement, and private sector roles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our content to reflect the latest
                  methodologies, tools, and best practices in the field.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section id="pricing">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Pricing Plans</h2>
              <p className="text-muted-foreground text-lg">
                Choose the plan that fits your learning goals. Upgrade or cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Tier */}
              <div className="border rounded-xl p-6 flex flex-col gap-4 bg-background">
                <div>
                  <h3 className="text-xl font-bold mb-1">Free</h3>
                  <p className="text-muted-foreground text-sm">Get started with the fundamentals at no cost.</p>
                </div>
                <div className="text-4xl font-extrabold">
                  $0
                  <span className="text-base font-normal text-muted-foreground"> / month</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Access to 10 introductory topics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> 1 guided learning path
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Community discussion forums
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span> <span className="text-muted-foreground">Progress tracking &amp; certificates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span> <span className="text-muted-foreground">Advanced modules &amp; case studies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span> <span className="text-muted-foreground">Priority support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-2" asChild>
                  <Link href="/register">Get Started Free</Link>
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
                  <p className="text-muted-foreground text-sm">For analysts serious about advancing their skills.</p>
                </div>
                <div className="text-4xl font-extrabold">
                  $29
                  <span className="text-base font-normal text-muted-foreground"> / month</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Full access to all 100+ topics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> All guided learning paths
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Progress tracking &amp; completion certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Advanced case studies &amp; exercises
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Downloadable reference materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span> <span className="text-muted-foreground">Team management dashboard</span>
                  </li>
                </ul>
                <Button className="w-full mt-2" asChild>
                  <Link href="/register">Start Pro — $29/mo</Link>
                </Button>
              </div>

              {/* Team Tier */}
              <div className="border rounded-xl p-6 flex flex-col gap-4 bg-background">
                <div>
                  <h3 className="text-xl font-bold mb-1">Team</h3>
                  <p className="text-muted-foreground text-sm">Built for agencies, units, and organizations.</p>
                </div>
                <div className="text-4xl font-extrabold">
                  $99
                  <span className="text-base font-normal text-muted-foreground"> / month</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Everything in Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Up to 25 team member seats
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Team management &amp; admin dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Aggregate progress &amp; reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Priority email &amp; chat support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Custom onboarding session
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-2" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              All plans include a <strong>14-day free trial</strong>. No credit card required to start. Cancel anytime.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Students &amp; Beginners</h3>
                <p className="text-muted-foreground">
                  Build a solid foundation in intelligence analysis principles, methodologies, and professional
                  standards from the ground up.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
                <p className="text-muted-foreground">
                  Access specialized training modules designed for law enforcement intelligence functions, including
                  criminal intelligence and threat assessment.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Private Sector Analysts</h3>
                <p className="text-muted-foreground">
                  Apply intelligence tradecraft to competitive intelligence, risk analysis, and corporate security
                  functions with our business-focused modules.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of intelligence professionals who are advancing their skills with the Intelligence Analyst
              Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/learning-paths">Explore Learning Paths</Link>
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
