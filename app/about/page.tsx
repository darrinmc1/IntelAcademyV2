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

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-6">Core Intelligence Disciplines</h2>
            <p className="text-muted-foreground mb-8">
              Our curriculum is structured around four foundational intelligence disciplines, each designed to build
              practical, job-ready skills for modern analysts.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">🔍</span>
                  <h3 className="text-lg font-semibold">OSINT &amp; Open-Source Intelligence</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Master the collection and analysis of publicly available information. Learn advanced search
                  techniques, social media intelligence, and digital footprint analysis used by professional analysts.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Advanced web and database search operators</li>
                  <li>Social media monitoring and analysis</li>
                  <li>Source verification and credibility assessment</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">⚠️</span>
                  <h3 className="text-lg font-semibold">Threat Assessment</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Develop structured frameworks for identifying, evaluating, and communicating threats. Apply
                  proven methodologies used across government, law enforcement, and corporate security.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Structured analytic techniques (SATs)</li>
                  <li>Risk matrix construction and scoring</li>
                  <li>Threat actor profiling and intent analysis</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">🗺️</span>
                  <h3 className="text-lg font-semibold">Geospatial Intelligence (GEOINT)</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Interpret and exploit geographic and imagery data to support intelligence analysis. Understand
                  mapping tools, satellite imagery, and location-based pattern-of-life analysis.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Satellite and aerial imagery interpretation</li>
                  <li>GIS tools and geospatial data layers</li>
                  <li>Movement analysis and route mapping</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">💰</span>
                  <h3 className="text-lg font-semibold">Financial Intelligence (FININT)</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Trace financial flows, identify illicit networks, and support investigations through money
                  trail analysis. Essential skills for fraud, sanctions, and counter-terrorism finance work.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Follow-the-money investigative techniques</li>
                  <li>Beneficial ownership and corporate structure analysis</li>
                  <li>Cryptocurrency tracing fundamentals</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-3" aria-hidden="true">🎯</div>
                <h3 className="font-semibold mb-2">Practical Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Every module is built around real-world scenarios and hands-on exercises drawn from actual
                  intelligence workflows.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-3" aria-hidden="true">📋</div>
                <h3 className="font-semibold mb-2">Structured Frameworks</h3>
                <p className="text-sm text-muted-foreground">
                  Learn the analytic frameworks and tradecraft standards used by professional intelligence
                  agencies and private sector firms.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-3" aria-hidden="true">📝</div>
                <h3 className="font-semibold mb-2">Clear Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Master intelligence writing, briefing techniques, and how to present findings to
                  decision-makers with clarity and confidence.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Self-Paced Learning</h3>
                <p>
                  We understand that professionals have varying schedules and commitments. All courses are
                  designed for self-paced completion, so you can learn when it suits you — whether that is
                  early mornings, lunch breaks, or evenings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practitioner-Led Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence practitioners with backgrounds in
                  government, law enforcement, and the private sector. You learn from people who have done
                  the work, not just studied it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessible to All Levels</h3>
                <p>
                  Whether you are brand new to intelligence analysis or a seasoned professional looking to
                  sharpen a specific skill, our learning paths are structured to meet you where you are.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our content to reflect
                  new tools, techniques, threats, and best practices so your training stays relevant.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 bg-card">
                <h3 className="font-semibold mb-2">🏛️ Government &amp; Law Enforcement</h3>
                <p className="text-sm text-muted-foreground">
                  Officers and analysts seeking structured training to complement on-the-job experience
                  or prepare for new roles.
                </p>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h3 className="font-semibold mb-2">🏢 Private Sector Analysts</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate security, risk, and compliance professionals who need intelligence tradecraft
                  skills for business environments.
                </p>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h3 className="font-semibold mb-2">🎓 Students &amp; Career Changers</h3>
                <p className="text-sm text-muted-foreground">
                  Individuals building foundational knowledge to enter the intelligence, security,
                  or investigative professions.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing &amp; Access</h2>
            <p className="mb-4">
              We offer flexible access options to suit individuals and teams. Our goal is to keep
              professional-grade training affordable and accessible.
            </p>
            <p className="mb-4">
              {REFUND_POLICY}
            </p>
            <p>
              For questions about pricing, team licenses, or institutional access, contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline text-primary">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>

          <Separator />

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Explore our learning paths and begin building your intelligence analysis skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/learning-paths">Browse Learning Paths</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/topics">Explore All Topics</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
