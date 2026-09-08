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
                  We understand that professionals have varying schedules and learning styles. Our courses are
                  designed to be completed at your own pace, allowing you to balance training with your existing
                  responsibilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is built around real-world scenarios and practical exercises. We focus on skills
                  you can apply immediately in your work, not just theoretical knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Developed Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with backgrounds in
                  government, law enforcement, and the private sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our content to reflect the
                  latest tools, techniques, and best practices in the field.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-6">Core Intelligence Modules</h2>
            <p className="text-muted-foreground mb-8">
              Our curriculum is organized into four specialized intelligence disciplines. Each module delivers
              structured learning objectives, hands-on exercises, and a clear progression from foundational
              concepts to advanced tradecraft.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">OSINT — Open Source Intelligence</h3>
                <p className="text-muted-foreground mb-3">
                  Master the systematic collection and analysis of publicly available information. This module
                  covers search engine operators, social media investigation, dark web awareness, digital
                  footprint analysis, and source verification techniques used by professional analysts.
                </p>
                <ul className="text-sm space-y-1 mb-4 list-disc list-inside text-muted-foreground">
                  <li>Advanced search operators and Boolean logic</li>
                  <li>Social media OSINT and account attribution</li>
                  <li>Image and geolocation verification</li>
                  <li>Source credibility assessment frameworks</li>
                  <li>Operational security during collection</li>
                </ul>
                <Button asChild variant="outline" size="sm">
                  <Link href="/learning-paths">Explore OSINT Curriculum</Link>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Threat Assessment</h3>
                <p className="text-muted-foreground mb-3">
                  Develop structured methodologies for identifying, evaluating, and communicating threats.
                  This module covers threat actor profiling, risk matrices, behavioral indicators, and
                  the production of actionable threat intelligence reports.
                </p>
                <ul className="text-sm space-y-1 mb-4 list-disc list-inside text-muted-foreground">
                  <li>Threat actor taxonomy and profiling</li>
                  <li>Structured analytic techniques (SATs)</li>
                  <li>Risk and vulnerability assessment models</li>
                  <li>Indicators of compromise and warning signs</li>
                  <li>Threat report writing and dissemination</li>
                </ul>
                <Button asChild variant="outline" size="sm">
                  <Link href="/learning-paths">Explore Threat Assessment Curriculum</Link>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Geospatial Intelligence (GEOINT)</h3>
                <p className="text-muted-foreground mb-3">
                  Learn to extract intelligence from geographic data, satellite imagery, and mapping tools.
                  This module covers coordinate systems, imagery analysis, terrain assessment, and the
                  integration of geospatial data into all-source intelligence products.
                </p>
                <ul className="text-sm space-y-1 mb-4 list-disc list-inside text-muted-foreground">
                  <li>Satellite and aerial imagery interpretation</li>
                  <li>Coordinate systems and grid references</li>
                  <li>Open-source mapping tools and GIS basics</li>
                  <li>Pattern-of-life analysis using location data</li>
                  <li>Terrain and infrastructure assessment</li>
                </ul>
                <Button asChild variant="outline" size="sm">
                  <Link href="/learning-paths">Explore GEOINT Curriculum</Link>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Financial Intelligence (FININT)</h3>
                <p className="text-muted-foreground mb-3">
                  Understand how money moves and how to follow it. This module covers financial network
                  analysis, money laundering typologies, sanctions screening, cryptocurrency tracing,
                  and the production of financial intelligence assessments.
                </p>
                <ul className="text-sm space-y-1 mb-4 list-disc list-inside text-muted-foreground">
                  <li>Financial network mapping and link analysis</li>
                  <li>Money laundering stages and red flags</li>
                  <li>Sanctions lists and screening procedures</li>
                  <li>Cryptocurrency and blockchain tracing basics</li>
                  <li>Corporate structure and beneficial ownership research</li>
                </ul>
                <Button asChild variant="outline" size="sm">
                  <Link href="/learning-paths">Explore FININT Curriculum</Link>
                </Button>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
                <p className="text-muted-foreground">
                  Officers and investigators seeking structured intelligence training to support criminal
                  investigations, threat assessment, and public safety operations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Private Sector Analysts</h3>
                <p className="text-muted-foreground">
                  Corporate security teams, risk consultants, and due diligence professionals who need
                  rigorous, repeatable analytical frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Students & Researchers</h3>
                <p className="text-muted-foreground">
                  Academic researchers, journalism students, and self-directed learners building a
                  foundation in intelligence analysis and open-source research.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing & Access</h2>
            <p className="mb-4">
              We offer flexible access options to suit individuals and organizations. Many foundational
              topics are available at no cost, with premium modules available through our subscription plans.
            </p>
            <p className="mb-4">
              {REFUND_POLICY}
            </p>
            <p className="text-muted-foreground">
              For organizational licensing, bulk access, or questions about our curriculum, contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-foreground">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our full curriculum and begin building your intelligence analysis skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/learning-paths">View All Learning Paths</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/topics">Browse All Topics</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
