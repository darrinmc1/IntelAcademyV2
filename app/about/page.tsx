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
                  We understand that professionals have varying schedules and commitments. Every course and module on
                  our platform is designed for self-paced completion, so you can learn when it suits you — whether
                  that is early morning, during a lunch break, or late at night.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
                <p>
                  Theory without application has limited value. Our curriculum emphasises real-world scenarios,
                  structured analytic techniques, and case studies drawn from open-source intelligence so that
                  learners can immediately apply what they study.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Progression</h3>
                <p>
                  Courses are organised into clearly defined learning paths that guide you from foundational concepts
                  through to advanced analytic methods, ensuring no critical knowledge gaps along the way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly review and update our content to reflect
                  current methodologies, emerging threats, and best practices recognised across the profession.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-6">Course Curriculum Overview</h2>
            <p className="mb-8 text-muted-foreground">
              Our curriculum is structured into progressive modules that build on each other. Below is a breakdown of
              the core learning areas covered across the Academy's courses.
            </p>

            <div className="grid gap-6">
              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Module 1</span>
                    <h3 className="text-xl font-bold mt-1">Foundations of Intelligence Analysis</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">~3–4 hours</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Establish a solid grounding in what intelligence analysis is, where it is used, and the core
                  principles that underpin professional analytic work.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>The intelligence cycle and its stages</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Types of intelligence: OSINT, HUMINT, SIGINT</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Analyst roles and responsibilities</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Key definitions and terminology</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Introduction to analytic standards</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Ethics and legal considerations</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Module 2</span>
                    <h3 className="text-xl font-bold mt-1">Structured Analytic Techniques (SATs)</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">~5–6 hours</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Learn the most widely used structured analytic techniques that help analysts challenge assumptions,
                  reduce cognitive bias, and produce more reliable assessments.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Analysis of Competing Hypotheses (ACH)</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Key Assumptions Check</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Red Team Analysis</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>SWOT and PESTLE frameworks</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Indicators and warnings analysis</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Applying SATs to real scenarios</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Module 3</span>
                    <h3 className="text-xl font-bold mt-1">Cognitive Bias and Critical Thinking</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">~3–4 hours</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Understand how cognitive biases affect analytic judgement and develop strategies to mitigate their
                  impact on your assessments.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Common cognitive biases in analysis</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Confirmation bias and anchoring</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Mirror imaging and groupthink</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Debiasing techniques and practices</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Building a critical thinking mindset</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Self-assessment exercises</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Module 4</span>
                    <h3 className="text-xl font-bold mt-1">Intelligence Writing and Reporting</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">~4–5 hours</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Master the craft of writing clear, concise, and actionable intelligence products that effectively
                  communicate findings to decision-makers.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Intelligence report formats and structures</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Writing for different audiences</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Expressing uncertainty and confidence levels</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Source citation and handling caveats</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Briefing notes and executive summaries</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Common writing pitfalls to avoid</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Module 5</span>
                    <h3 className="text-xl font-bold mt-1">Open Source Intelligence (OSINT)</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">~5–7 hours</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Develop practical skills in collecting, evaluating, and exploiting open-source information from
                  digital, media, and public record sources.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>OSINT principles and legal boundaries</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Search engine operators and techniques</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Social media intelligence (SOCMINT)</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Geolocation and imagery analysis</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Source credibility and verification</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Building an OSINT workflow</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Module 6</span>
                    <h3 className="text-xl font-bold mt-1">Threat Assessment and Risk Analysis</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">~4–5 hours</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Apply intelligence analysis skills to assess threats, evaluate risk, and support decision-making
                  across law enforcement, corporate, and national security contexts.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Threat vs. risk: key distinctions</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Threat actor profiling and intent</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Vulnerability and impact assessment</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Risk matrices and scoring models</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Communicating risk to stakeholders</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>Case study: applied threat assessment</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Ready to start learning? Explore our full library of courses and learning paths.
              </p>
              <Button asChild>
                <Link href="/learning-paths">Browse Learning Paths</Link>
              </Button>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Beginners &amp; Students</h3>
                <p className="text-sm text-muted-foreground">
                  No prior experience required. Our foundational modules introduce every concept from scratch,
                  giving newcomers a clear pathway into the profession.
                </p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
                <p className="text-sm text-muted-foreground">
                  Officers and investigators seeking structured analytic training to enhance their operational
                  intelligence capabilities and reporting standards.
                </p>
              </div>
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">Private Sector Analysts</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate security, risk, and competitive intelligence professionals looking for recognised
                  frameworks and refresher training aligned with industry standards.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing &amp; Access</h2>
            <p className="mb-4">
              We offer flexible access options to suit individuals and organisations. Many foundational topics are
              available free of charge, while premium courses and full learning paths are available through a
              one-time purchase or subscription.
            </p>
            <p className="mb-4">
              {REFUND_POLICY}
            </p>
            <p>
              For organisational licensing, bulk access, or any questions about our courses, please contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
