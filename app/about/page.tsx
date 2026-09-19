import Link from "next/link"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"
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

        {/* Success Metrics */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg bg-muted">
              <div className="text-3xl font-bold tracking-tight mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <div className="text-3xl font-bold tracking-tight mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <div className="text-3xl font-bold tracking-tight mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Expert-Led Modules</div>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <div className="text-3xl font-bold tracking-tight mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </section>

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
                  We understand that professionals have varying schedules and commitments. Our platform is designed
                  to let you learn at your own pace, revisiting material as needed and progressing when you are ready.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is built around real-world scenarios and practical exercises. We focus on skills
                  you can apply immediately in your role, not just theoretical knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p>
                  Our content is developed and reviewed by experienced intelligence professionals with backgrounds
                  in government, law enforcement, and the private sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our curriculum to reflect the
                  latest methodologies, tools, and best practices in the field.
                </p>
              </div>
            </div>
          </section>

          {/* Student Testimonials */}
          <section>
            <h2 className="text-2xl font-bold mb-6">What Our Graduates Say</h2>
            <div className="grid gap-6 md:grid-cols-1">
              <div className="p-6 rounded-lg border bg-card">
                <p className="text-base mb-4 italic">
                  &ldquo;After completing the Foundations learning path, I landed a role as an intelligence analyst at a federal contractor within 3 months. The structured curriculum and practical exercises gave me the confidence to ace my interviews and hit the ground running on day one.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">JM</div>
                  <div>
                    <div className="font-semibold text-sm">James M.</div>
                    <div className="text-xs text-muted-foreground">Intelligence Analyst, Federal Contractor — Hired 3 months after completing the program</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <p className="text-base mb-4 italic">
                  &ldquo;As a law enforcement officer transitioning into a fusion center role, I needed to quickly build my analytical skills. The Academy&rsquo;s modules on structured analytic techniques were exactly what I needed. I completed the course in 6 weeks and received a promotion within my department shortly after.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">SR</div>
                  <div>
                    <div className="font-semibold text-sm">Sarah R.</div>
                    <div className="text-xs text-muted-foreground">Fusion Center Analyst, State Law Enforcement — Promoted after 6 weeks of training</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <p className="text-base mb-4 italic">
                  &ldquo;I was a recent college graduate with a political science degree and no idea how to break into the intelligence field. The Academy gave me a clear roadmap, practical skills, and the vocabulary to speak credibly in interviews. I now work as a competitive intelligence analyst at a Fortune 500 company.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">AT</div>
                  <div>
                    <div className="font-semibold text-sm">Aisha T.</div>
                    <div className="text-xs text-muted-foreground">Competitive Intelligence Analyst, Fortune 500 — Career pivot from recent graduate</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <p className="text-base mb-4 italic">
                  &ldquo;I&rsquo;ve taken several online courses in this space, but the Intelligence Analyst Academy stands out for its depth and real-world relevance. The OSINT and geospatial modules alone were worth the price. I use techniques from this course every single week in my current role.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">DK</div>
                  <div>
                    <div className="font-semibold text-sm">David K.</div>
                    <div className="text-xs text-muted-foreground">Senior OSINT Analyst, Private Sector — 8 years of industry experience</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing &amp; Access</h2>
            <p className="mb-4">
              We offer flexible pricing options to accommodate individuals, teams, and organizations of all sizes.
              Our goal is to make professional intelligence training as accessible as possible.
            </p>
            <p className="mb-6">
              All courses include lifetime access to materials, regular content updates, and access to our
              community of intelligence professionals.
            </p>
            <Button asChild>
              <Link href="/learning-paths">Explore Learning Paths</Link>
            </Button>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <p className="mb-4">{REFUND_POLICY}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              Have questions about our courses or need support? Reach out to us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline font-medium">
                {SUPPORT_EMAIL}
              </a>
              . We typically respond within one business day.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
