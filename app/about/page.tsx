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
                  We understand that professionals have varying schedules and commitments. Every course and learning
                  path on our platform is designed to be completed at your own pace, with no deadlines or time
                  pressure. Pick up where you left off whenever it suits you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Theory without practice is incomplete. Our curriculum emphasizes real-world scenarios, case studies,
                  and hands-on exercises drawn from actual intelligence analysis workflows so you can apply skills
                  immediately on the job.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Curriculum</h3>
                <p>
                  Each learning path is carefully sequenced so foundational concepts are mastered before advanced
                  topics are introduced. Clear module breakdowns and time estimates help you plan your study sessions
                  and track progress with confidence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Authored Content</h3>
                <p>
                  All course material is written and reviewed by experienced intelligence professionals with backgrounds
                  spanning government, law enforcement, and private sector analysis. You learn from practitioners, not
                  just theorists.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
            <p className="mb-6 text-muted-foreground">
              Our curriculum is organized into focused learning paths, each targeting a distinct skill set. Below is a
              representative overview of the core modules and outcomes you can expect across our most popular paths.
            </p>

            <div className="grid gap-8">
              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-semibold">Foundations of Intelligence Analysis</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">⏱ Approx. 4–6 hours</span>
                </div>
                <p className="mb-4 text-muted-foreground">
                  The essential starting point for anyone entering the intelligence analysis field. No prior experience required.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Module Breakdown</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 1 — The Intelligence Cycle (45 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 2 — Collection Disciplines: HUMINT, SIGINT, OSINT (60 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 3 — Analytical Thinking &amp; Cognitive Biases (50 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 4 — Structured Analytic Techniques (SATs) (75 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 5 — Writing Intelligence Assessments (60 min)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Explain each phase of the intelligence cycle</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Distinguish between primary collection disciplines</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Identify and mitigate common cognitive biases</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Apply at least three structured analytic techniques</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Produce a clear, concise intelligence assessment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-semibold">Open Source Intelligence (OSINT)</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">⏱ Approx. 5–7 hours</span>
                </div>
                <p className="mb-4 text-muted-foreground">
                  A practical deep-dive into collecting, verifying, and analysing publicly available information using professional-grade tools and tradecraft.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Module Breakdown</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 1 — OSINT Fundamentals &amp; Legal Boundaries (40 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 2 — Search Engine Operators &amp; Advanced Queries (55 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 3 — Social Media Intelligence (SOCMINT) (70 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 4 — Geospatial &amp; Imagery Analysis (65 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 5 — Source Verification &amp; Credibility Assessment (60 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 6 — Building an OSINT Workflow (50 min)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Conduct advanced open-source research within legal guidelines</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Exploit social media platforms for intelligence collection</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Geolocate images and verify visual content</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Assess source credibility and detect disinformation</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Build a repeatable, documented OSINT collection workflow</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-semibold">Threat Assessment &amp; Risk Analysis</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">⏱ Approx. 6–8 hours</span>
                </div>
                <p className="mb-4 text-muted-foreground">
                  An intermediate-to-advanced path covering systematic threat evaluation methodologies used across government and private sector environments.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Module Breakdown</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 1 — Threat vs. Risk: Key Distinctions (35 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 2 — Threat Actor Profiling &amp; Motivation Analysis (70 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 3 — Vulnerability &amp; Consequence Assessment (65 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 4 — Risk Matrices &amp; Prioritisation Frameworks (60 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 5 — Communicating Risk to Decision-Makers (55 min)</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Module 6 — Case Studies: Real-World Threat Assessments (80 min)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Differentiate threat, vulnerability, and risk concepts</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Profile threat actors using structured frameworks</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Construct and interpret risk matrices</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Prioritise threats based on likelihood and impact</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Deliver concise risk briefings to non-technical stakeholders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/learning-paths">Browse All Learning Paths</Link>
              </Button>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who Our Courses Are For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">New Analysts</h3>
                <p className="text-sm text-muted-foreground">
                  No prior experience required. Our foundational paths build core competencies from the ground up,
                  covering the intelligence cycle, analytic writing, and structured thinking in under six hours.
                </p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Law Enforcement &amp; Security</h3>
                <p className="text-sm text-muted-foreground">
                  Practical modules tailored to operational environments — threat assessment, OSINT tradecraft, and
                  report writing designed for professionals who need actionable skills, not academic theory.
                </p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Experienced Practitioners</h3>
                <p className="text-sm text-muted-foreground">
                  Targeted refresher modules and advanced topics let seasoned analysts sharpen specific skills,
                  stay current with evolving methodologies, and fill gaps without repeating content they already know.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing &amp; Access</h2>
            <p className="mb-4">
              We offer flexible access options to suit individuals and organisations of all sizes. Many foundational
              topics are available free of charge so you can evaluate the quality of our content before committing.
            </p>
            <p className="mb-4">
              Premium learning paths unlock the full module library, downloadable resources, and priority support.
              All purchases are covered by our {REFUND_POLICY} refund policy — no questions asked.
            </p>
            <p>
              For team or organisational licensing enquiries, please contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline text-primary">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">How long does it take to complete a learning path?</h3>
                <p className="text-muted-foreground">
                  Each learning path displays an estimated completion time on its overview page. Most paths range from
                  4 to 8 hours of study, broken into short modules you can complete in 30–60 minute sessions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Do I need any prior knowledge to get started?</h3>
                <p className="text-muted-foreground">
                  Our foundational paths require no prior intelligence background. Intermediate and advanced paths
                  list recommended prerequisites on their course pages so you can choose the right starting point.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Will I receive a certificate upon completion?</h3>
                <p className="text-muted-foreground">
                  Completion certificates are available for all premium learning paths. Certificates detail the
                  modules covered, total study hours, and the date of completion — suitable for CPD portfolios and
                  professional development records.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Can I access courses on mobile devices?</h3>
                <p className="text-muted-foreground">
                  Yes. The platform is fully responsive and optimised for smartphones and tablets, so you can study
                  during commutes or whenever a desktop is not available.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-6">
              Explore our full library of intelligence analysis courses and find the learning path that matches your
              goals and experience level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/learning-paths">Explore Learning Paths</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/topics">Browse All Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
