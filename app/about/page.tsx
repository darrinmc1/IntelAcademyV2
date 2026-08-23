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
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is built around real-world scenarios and case studies drawn from open-source
                  intelligence work, ensuring that what you learn translates directly into on-the-job performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Authored Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals and educators who bring
                  decades of combined operational and analytical expertise to every lesson.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our content to reflect new
                  methodologies, tools, and tradecraft standards so your skills stay current.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Pricing Section */}
          <section id="pricing">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the plan that fits your goals. Every tier includes lifetime access to purchased content,
                progress tracking, and completion certificates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Free Tier */}
              <div className="border rounded-xl p-6 flex flex-col gap-4 bg-background">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">Starter</p>
                  <p className="text-4xl font-bold">Free</p>
                  <p className="text-muted-foreground text-sm mt-1">No credit card required</p>
                </div>
                <Separator />
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Access to all foundational modules</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Core analytical frameworks</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Progress tracking dashboard</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Community discussion access</li>
                  <li className="flex items-start gap-2"><span className="text-muted-foreground font-bold mt-0.5">–</span><span className="text-muted-foreground">Advanced tradecraft modules</span></li>
                  <li className="flex items-start gap-2"><span className="text-muted-foreground font-bold mt-0.5">–</span><span className="text-muted-foreground">Completion certificates</span></li>
                  <li className="flex items-start gap-2"><span className="text-muted-foreground font-bold mt-0.5">–</span><span className="text-muted-foreground">Downloadable resources</span></li>
                </ul>
                <Button variant="outline" className="w-full mt-auto" asChild>
                  <Link href="/">Get Started Free</Link>
                </Button>
              </div>

              {/* Professional Tier */}
              <div className="border-2 border-primary rounded-xl p-6 flex flex-col gap-4 bg-primary/5 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">Professional</p>
                  <p className="text-4xl font-bold">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                  <p className="text-muted-foreground text-sm mt-1">or $399/year — save 32%</p>
                </div>
                <Separator />
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Everything in Starter</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Full advanced tradecraft library</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Verified completion certificates</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Downloadable templates &amp; tools</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>New content as it releases</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Priority email support</li>
                  <li className="flex items-start gap-2"><span className="text-muted-foreground font-bold mt-0.5">–</span><span className="text-muted-foreground">Team seats &amp; admin dashboard</span></li>
                </ul>
                <Button className="w-full mt-auto" asChild>
                  <Link href="/">Start 7-Day Free Trial</Link>
                </Button>
              </div>

              {/* Team Tier */}
              <div className="border rounded-xl p-6 flex flex-col gap-4 bg-background">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">Team</p>
                  <p className="text-4xl font-bold">$299<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                  <p className="text-muted-foreground text-sm mt-1">Up to 10 seats — $30/seat/mo</p>
                </div>
                <Separator />
                <ul className="flex flex-col gap-2 text-sm flex-1">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Everything in Professional</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Team admin dashboard</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Bulk seat management</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Aggregate progress reporting</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Custom onboarding session</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Dedicated account manager</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Volume discounts for 10+ seats</li>
                </ul>
                <Button variant="outline" className="w-full mt-auto" asChild>
                  <Link href="/">Contact Sales</Link>
                </Button>
              </div>
            </div>

            {/* ROI Metrics */}
            <div className="rounded-xl border bg-muted/40 p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Why Analysts Invest in Professional Training</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary mb-1">3×</p>
                  <p className="text-sm text-muted-foreground">faster time-to-competency compared to on-the-job learning alone</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-1">87%</p>
                  <p className="text-sm text-muted-foreground">of graduates report improved analytical output within 30 days</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-1">$0</p>
                  <p className="text-sm text-muted-foreground">risk — cancel anytime, keep access through your billing period</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Government and non-profit discounts available.{" "}
              <Link href="/" className="underline underline-offset-4 hover:text-foreground">Contact us</Link>{" "}
              to learn more.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Government &amp; Military</h3>
                <p className="text-sm text-muted-foreground">
                  Structured refresher training and foundational courses for analysts at all classification levels,
                  using entirely open-source methodologies.
                </p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
                <p className="text-sm text-muted-foreground">
                  Practical crime and threat analysis frameworks designed for investigators, fusion center staff,
                  and intelligence officers.
                </p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Private Sector &amp; Students</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate security, competitive intelligence, and academic learners building professional-grade
                  analytical skills from the ground up.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Advance Your Skills?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of analysts who have accelerated their careers with Intelligence Analyst Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">Start Learning Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
