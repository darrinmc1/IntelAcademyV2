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
                  We understand that professionals have varying schedules and commitments. Every course on our platform
                  is designed for self-paced completion, allowing you to learn when and where it suits you — with no
                  deadlines or time pressure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practitioner-Led Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence practitioners with real-world backgrounds in
                  government, law enforcement, and private sector analysis. You learn techniques that are actually used
                  in the field.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Skill Progression</h3>
                <p>
                  Courses are sequenced to build on each other logically — from foundational concepts through to
                  advanced tradecraft. Clear prerequisites and learning outcomes ensure you always know what to study
                  next and what you will be able to do upon completion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Theory is reinforced through case studies, worked examples, and scenario-based exercises drawn from
                  real intelligence challenges. Each module includes actionable techniques you can apply immediately.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-6">Course Catalogue Overview</h2>
            <p className="text-muted-foreground mb-8">
              We offer four core discipline tracks, each with a detailed syllabus, stated prerequisites, and a clear
              time commitment so you can plan your learning journey with confidence.
            </p>

            <div className="grid gap-8">

              {/* OSINT */}
              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Open Source Intelligence (OSINT)</h3>
                    <p className="text-muted-foreground text-sm">Beginner → Intermediate · 8–12 hours total</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="shrink-0">
                    <Link href="/learning-paths">View Learning Path</Link>
                  </Button>
                </div>
                <p className="mb-4">
                  Master the systematic collection and analysis of publicly available information. This track covers
                  the full OSINT lifecycle — from defining collection requirements through to finished intelligence
                  products — using free and commercial tooling.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Syllabus Highlights</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>OSINT fundamentals and legal boundaries</li>
                      <li>Search engine operators and dorking</li>
                      <li>Social media intelligence (SOCMINT)</li>
                      <li>Image and video verification (IMINT)</li>
                      <li>Domain, WHOIS, and IP analysis</li>
                      <li>Dark web monitoring basics</li>
                      <li>Structuring an OSINT report</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Prerequisites</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>No prior intelligence experience required</li>
                      <li>Basic computer literacy</li>
                      <li>Familiarity with web browsers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Learning Outcomes</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Conduct structured OSINT investigations</li>
                      <li>Verify digital media authenticity</li>
                      <li>Build subject profiles from open sources</li>
                      <li>Produce a professional OSINT report</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Threat Assessment */}
              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Threat Assessment & Analysis</h3>
                    <p className="text-muted-foreground text-sm">Intermediate · 10–14 hours total</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="shrink-0">
                    <Link href="/learning-paths">View Learning Path</Link>
                  </Button>
                </div>
                <p className="mb-4">
                  Develop the structured analytical techniques used to identify, evaluate, and communicate threats
                  across physical, cyber, and hybrid environments. Grounded in proven methodologies used by government
                  and corporate security teams.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Syllabus Highlights</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Threat actor profiling and typologies</li>
                      <li>Structured Analytic Techniques (SATs)</li>
                      <li>Risk and vulnerability matrices</li>
                      <li>Indicators and warning intelligence</li>
                      <li>Cognitive bias mitigation</li>
                      <li>Threat assessment report writing</li>
                      <li>Briefing decision-makers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Prerequisites</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Intelligence fundamentals (or equivalent)</li>
                      <li>Basic analytical writing skills</li>
                      <li>Recommended: OSINT track completion</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Learning Outcomes</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Apply SATs to real-world scenarios</li>
                      <li>Produce calibrated threat assessments</li>
                      <li>Identify and mitigate analytical bias</li>
                      <li>Communicate risk to non-technical audiences</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Geospatial Intelligence */}
              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Geospatial Intelligence (GEOINT)</h3>
                    <p className="text-muted-foreground text-sm">Beginner → Advanced · 12–16 hours total</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="shrink-0">
                    <Link href="/learning-paths">View Learning Path</Link>
                  </Button>
                </div>
                <p className="mb-4">
                  Learn to exploit satellite imagery, mapping platforms, and location data to answer intelligence
                  questions. This track progresses from reading basic maps through to advanced change-detection and
                  geolocation verification used in conflict-zone reporting and corporate site analysis.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Syllabus Highlights</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Fundamentals of geospatial analysis</li>
                      <li>Satellite imagery interpretation</li>
                      <li>Google Earth Pro and open mapping tools</li>
                      <li>Geolocation and chronolocation techniques</li>
                      <li>Change detection and pattern-of-life analysis</li>
                      <li>AIS/flight tracking for maritime and air intel</li>
                      <li>Annotating and presenting geospatial findings</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Prerequisites</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>No prior GIS experience required</li>
                      <li>Basic map-reading ability helpful</li>
                      <li>Access to a desktop or laptop computer</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Learning Outcomes</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Geolocate images and video footage</li>
                      <li>Detect infrastructure changes over time</li>
                      <li>Track vessels and aircraft using open data</li>
                      <li>Produce annotated geospatial intelligence products</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Intelligence */}
              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Financial Intelligence (FININT)</h3>
                    <p className="text-muted-foreground text-sm">Intermediate → Advanced · 10–15 hours total</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="shrink-0">
                    <Link href="/learning-paths">View Learning Path</Link>
                  </Button>
                </div>
                <p className="mb-4">
                  Understand how money moves and how to follow it. This track covers the analytical frameworks and
                  open-source tools used to investigate financial networks, beneficial ownership structures, sanctions
                  evasion, and illicit finance — essential skills for compliance, law enforcement, and investigative
                  analysts.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Syllabus Highlights</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Introduction to financial intelligence</li>
                      <li>Corporate registry and beneficial ownership research</li>
                      <li>Sanctions lists and screening tools</li>
                      <li>Cryptocurrency tracing fundamentals</li>
                      <li>Money laundering typologies</li>
                      <li>Open-source financial data sources</li>
                      <li>Writing financial intelligence assessments</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Prerequisites</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Basic understanding of business structures</li>
                      <li>Analytical writing experience recommended</li>
                      <li>Recommended: OSINT track completion</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Learning Outcomes</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Map corporate ownership networks</li>
                      <li>Identify sanctions exposure and evasion patterns</li>
                      <li>Trace basic cryptocurrency transactions</li>
                      <li>Produce financial intelligence assessments</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing & Access</h2>
            <p className="mb-4">
              Many foundational modules are available free of charge. Premium tracks and advanced modules are
              available through a one-time course purchase or a platform subscription. All purchases are covered by
              our {REFUND_POLICY} refund policy.
            </p>
            <p className="mb-6">
              For questions about access, billing, or institutional licensing, contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline text-primary">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
            <Button asChild>
              <Link href="/learning-paths">Browse All Learning Paths</Link>
            </Button>
          </section>

        </div>
      </div>
    </div>
  )
}
