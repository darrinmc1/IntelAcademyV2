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

const curriculumTracks = [
  {
    id: "osint",
    title: "Open Source Intelligence (OSINT)",
    description: "Master the collection and analysis of publicly available information from digital and physical sources.",
    totalDuration: "18 hours",
    totalLessons: 24,
    color: "bg-blue-500",
    modules: [
      {
        title: "Module 1: OSINT Foundations",
        duration: "3 hrs",
        lessons: [
          { name: "What is OSINT? History and Legal Framework", duration: "25 min" },
          { name: "The Intelligence Cycle Applied to Open Sources", duration: "30 min" },
          { name: "Source Reliability and Information Credibility", duration: "35 min" },
          { name: "Digital Footprint Awareness and Analyst OPSEC", duration: "30 min" },
        ],
        outcomes: ["Understand the legal and ethical boundaries of OSINT", "Apply the intelligence cycle to open-source collection", "Evaluate source credibility using structured frameworks"],
      },
      {
        title: "Module 2: Social Media Intelligence (SOCMINT)",
        duration: "4 hrs",
        lessons: [
          { name: "Platform Architectures and Data Structures", duration: "40 min" },
          { name: "Advanced Search Operators and Boolean Logic", duration: "45 min" },
          { name: "Account Verification and Identity Analysis", duration: "50 min" },
          { name: "Network Mapping and Relationship Analysis", duration: "45 min" },
        ],
        outcomes: ["Conduct advanced searches across major social platforms", "Verify digital identities using multi-source corroboration", "Map social networks to identify key nodes and influencers"],
      },
      {
        title: "Module 3: Web and Deep Web Research",
        duration: "4 hrs",
        lessons: [
          { name: "Search Engine Optimization for Intelligence", duration: "40 min" },
          { name: "Domain and IP Investigation Techniques", duration: "50 min" },
          { name: "WHOIS, DNS Records, and Infrastructure Analysis", duration: "45 min" },
          { name: "Archived Web Content and Wayback Analysis", duration: "45 min" },
        ],
        outcomes: ["Use advanced search operators to surface hidden information", "Trace digital infrastructure to identify actors and organizations", "Recover and analyze historical web content"],
      },
      {
        title: "Module 4: Imagery and Geolocation",
        duration: "4 hrs",
        lessons: [
          { name: "Photo Metadata Extraction and Analysis", duration: "40 min" },
          { name: "Reverse Image Search Techniques", duration: "35 min" },
          { name: "Geolocation from Visual Clues", duration: "55 min" },
          { name: "Chronolocation and Event Verification", duration: "50 min" },
        ],
        outcomes: ["Extract and interpret EXIF and metadata from digital images", "Geolocate images using environmental and architectural clues", "Verify the time and location of events using open-source imagery"],
      },
      {
        title: "Module 5: Reporting and Dissemination",
        duration: "3 hrs",
        lessons: [
          { name: "Structuring OSINT Reports for Different Audiences", duration: "40 min" },
          { name: "Citation Standards and Source Documentation", duration: "35 min" },
          { name: "Visualization Tools for OSINT Findings", duration: "45 min" },
        ],
        outcomes: ["Produce professional OSINT reports tailored to consumer needs", "Document sources to intelligence community standards", "Create compelling visualizations of complex OSINT findings"],
      },
    ],
  },
  {
    id: "threat",
    title: "Threat Assessment",
    description: "Develop systematic frameworks for identifying, evaluating, and communicating threats across domains.",
    totalDuration: "20 hours",
    totalLessons: 26,
    color: "bg-red-500",
    modules: [
      {
        title: "Module 1: Threat Assessment Fundamentals",
        duration: "4 hrs",
        lessons: [
          { name: "Defining Threat, Risk, and Vulnerability", duration: "30 min" },
          { name: "Threat Actor Typologies and Motivations", duration: "45 min" },
          { name: "Structured Analytic Techniques Overview", duration: "50 min" },
          { name: "Cognitive Biases in Threat Analysis", duration: "55 min" },
        ],
        outcomes: ["Distinguish between threat, risk, vulnerability, and consequence", "Categorize threat actors by capability, intent, and opportunity", "Apply structured analytic techniques to reduce cognitive bias"],
      },
      {
        title: "Module 2: Indicators and Warning Analysis",
        duration: "4 hrs",
        lessons: [
          { name: "Indicator Development and Management", duration: "50 min" },
          { name: "Warning Intelligence Methodologies", duration: "45 min" },
          { name: "Pattern of Life Analysis", duration: "55 min" },
          { name: "Anomaly Detection and Significance Testing", duration: "50 min" },
        ],
        outcomes: ["Develop and maintain indicator lists for specific threat scenarios", "Apply warning intelligence frameworks to emerging situations", "Identify meaningful anomalies within established patterns"],
      },
      {
        title: "Module 3: Violent Extremism and Terrorism",
        duration: "5 hrs",
        lessons: [
          { name: "Radicalization Pathways and Models", duration: "55 min" },
          { name: "Ideological Frameworks of Extremist Groups", duration: "60 min" },
          { name: "Attack Planning Cycles and Pre-Incident Indicators", duration: "65 min" },
          { name: "Counter-Terrorism Intelligence Frameworks", duration: "60 min" },
        ],
        outcomes: ["Analyze radicalization processes using established behavioral models", "Identify pre-attack indicators across different threat typologies", "Apply counter-terrorism intelligence frameworks to case studies"],
      },
      {
        title: "Module 4: Threat Communication and Briefing",
        duration: "4 hrs",
        lessons: [
          { name: "Writing Threat Assessments for Decision-Makers", duration: "55 min" },
          { name: "Confidence Levels and Uncertainty Language", duration: "45 min" },
          { name: "Verbal Briefing Techniques", duration: "50 min" },
          { name: "Threat Matrix and Dashboard Design", duration: "50 min" },
        ],
        outcomes: ["Write clear, actionable threat assessments for non-technical audiences", "Communicate analytical confidence using standardized language", "Design threat matrices that support executive decision-making"],
      },
    ],
  },
  {
    id: "geospatial",
    title: "Geospatial Intelligence (GEOINT)",
    description: "Analyze geographic data and imagery to derive intelligence about activities, patterns, and environments.",
    totalDuration: "16 hours",
    totalLessons: 20,
    color: "bg-green-500",
    modules: [
      {
        title: "Module 1: Geospatial Fundamentals",
        duration: "3 hrs",
        lessons: [
          { name: "Coordinate Systems, Projections, and Datums", duration: "40 min" },
          { name: "Map Reading and Terrain Analysis", duration: "45 min" },
          { name: "Introduction to GIS Concepts", duration: "35 min" },
          { name: "Geospatial Data Types and Formats", duration: "40 min" },
        ],
        outcomes: ["Interpret coordinate systems and geographic projections", "Conduct terrain analysis to assess operational environments", "Work with common geospatial data formats and tools"],
      },
      {
        title: "Module 2: Satellite and Aerial Imagery Analysis",
        duration: "5 hrs",
        lessons: [
          { name: "Imagery Collection Platforms and Sensors", duration: "50 min" },
          { name: "Photointerpretation Keys and Techniques", duration: "60 min" },
          { name: "Change Detection and Temporal Analysis", duration: "65 min" },
          { name: "Infrastructure and Facility Analysis", duration: "60 min" },
        ],
        outcomes: ["Identify and interpret features in satellite and aerial imagery", "Conduct change detection analysis across time-series imagery", "Analyze facilities and infrastructure for intelligence value"],
      },
      {
        title: "Module 3: Movement and Activity Pattern Analysis",
        duration: "4 hrs",
        lessons: [
          { name: "Route Analysis and Chokepoint Identification", duration: "55 min" },
          { name: "Activity Pattern Recognition", duration: "50 min" },
          { name: "Maritime and Aviation Domain Awareness", duration: "55 min" },
          { name: "Geofencing and Area of Interest Monitoring", duration: "60 min" },
        ],
        outcomes: ["Identify critical routes and chokepoints in operational environments", "Recognize and analyze patterns of activity from geospatial data", "Monitor maritime and aviation domains using open-source tools"],
      },
      {
        title: "Module 4: GEOINT Products and Reporting",
        duration: "4 hrs",
        lessons: [
          { name: "Map Production Standards and Symbology", duration: "50 min" },
          { name: "Annotated Imagery Reports", duration: "55 min" },
          { name: "Integrating GEOINT with Other Intelligence Disciplines", duration: "55 min" },
        ],
        outcomes: ["Produce professional geospatial intelligence products", "Create annotated imagery reports to intelligence standards", "Integrate geospatial analysis with OSINT and other INT disciplines"],
      },
    ],
  },
  {
    id: "financial",
    title: "Financial Intelligence (FININT)",
    description: "Trace financial flows, identify illicit networks, and support investigations through monetary analysis.",
    totalDuration: "22 hours",
    totalLessons: 28,
    color: "bg-yellow-500",
    modules: [
      {
        title: "Module 1: Financial Intelligence Foundations",
        duration: "4 hrs",
        lessons: [
          { name: "The Role of FININT in Intelligence Operations", duration: "35 min" },
          { name: "Global Financial System Architecture", duration: "50 min" },
          { name: "Legal Frameworks: AML, CTF, and Sanctions", duration: "55 min" },
          { name: "Financial Data Sources and Access Methods", duration: "40 min" },
        ],
        outcomes: ["Understand how financial intelligence supports broader analytical objectives", "Navigate the global financial system and its key institutions", "Apply AML and CTF legal frameworks to financial investigations"],
      },
      {
        title: "Module 2: Money Laundering and Illicit Finance",
        duration: "5 hrs",
        lessons: [
          { name: "Money Laundering Typologies and Red Flags", duration: "60 min" },
          { name: "Shell Companies, Nominees, and Beneficial Ownership", duration: "65 min" },
          { name: "Trade-Based Money Laundering", duration: "60 min" },
          { name: "Cryptocurrency and Digital Asset Tracing", duration: "75 min" },
        ],
        outcomes: ["Identify money laundering typologies across placement, layering, and integration", "Trace beneficial ownership through complex corporate structures", "Analyze cryptocurrency transactions to identify illicit flows"],
      },
      {
        title: "Module 3: Terrorist Financing",
        duration: "4 hrs",
        lessons: [
          { name: "Terrorist Financing Methods and Channels", duration: "55 min" },
          { name: "Hawala and Informal Value Transfer Systems", duration: "50 min" },
          { name: "Sanctions Evasion Techniques", duration: "55 min" },
          { name: "Disruption Strategies and Case Studies", duration: "60 min" },
        ],
        outcomes: ["Map terrorist financing networks and funding sources", "Analyze informal value transfer systems and their intelligence value", "Identify sanctions evasion techniques and countermeasures"],
      },
      {
        title: "Module 4: Corporate and Fraud Intelligence",
        duration: "5 hrs",
        lessons: [
          { name: "Corporate Registry Analysis and Due Diligence", duration: "60 min" },
          { name: "Financial Statement Analysis for Investigators", duration: "70 min" },
          { name: "Fraud Schemes and Detection Methods", duration: "65 min" },
          { name: "Asset Tracing and Recovery Fundamentals", duration: "65 min" },
        ],
        outcomes: ["Conduct corporate due diligence using public registries and filings", "Analyze financial statements to identify anomalies and fraud indicators", "Apply asset tracing methodologies to support recovery efforts"],
      },
      {
        title: "Module 5: FININT Reporting and Case Presentation",
        duration: "4 hrs",
        lessons: [
          { name: "Structuring Financial Intelligence Reports", duration: "50 min" },
          { name: "Link Analysis and Network Visualization", duration: "55 min" },
          { name: "Presenting Financial Evidence to Non-Specialists", duration: "55 min" },
        ],
        outcomes: ["Produce structured financial intelligence reports for law enforcement and policy audiences", "Create link analysis charts to visualize financial networks", "Communicate complex financial findings to non-specialist decision-makers"],
      },
    ],
  },
]

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
                  We understand that professionals have varying schedules and learning styles. All courses are
                  designed to be completed at your own pace, with no deadlines or time pressure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practitioner-Led Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with real-world operational
                  backgrounds across government, law enforcement, and the private sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Tracks</h3>
                <p>
                  Whether you are building foundational skills or deepening expertise in a specific discipline,
                  our learning tracks provide a clear, progressive path from beginner to advanced practitioner.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Applied Methodology</h3>
                <p>
                  Every module emphasizes practical application. Lessons are grounded in real case studies,
                  exercises, and scenarios drawn from actual intelligence operations and investigations.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Course Curriculum</h2>
              <p className="text-muted-foreground">
                Explore the detailed curriculum for each of our four intelligence analysis tracks. Each track is
                structured into progressive modules covering foundational concepts through advanced practitioner skills.
              </p>
            </div>

            <div className="grid gap-8">
              {curriculumTracks.map((track) => (
                <div key={track.id} className="border rounded-lg overflow-hidden">
                  <div className="p-6 bg-muted/40">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`inline-block w-3 h-3 rounded-full ${track.color}`} />
                        <h3 className="text-xl font-bold">{track.title}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {track.totalDuration}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          {track.totalLessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                          {track.modules.length} modules
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{track.description}</p>
                  </div>

                  <div className="divide-y">
                    {track.modules.map((mod, modIdx) => (
                      <details key={modIdx} className="group">
                        <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-muted/20 transition-colors list-none">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-muted text-xs font-bold text-muted-foreground">
                              {modIdx + 1}
                            </span>
                            <span className="font-semibold">{mod.title}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground hidden sm:inline">{mod.duration} &bull; {mod.lessons.length} lessons</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </summary>

                        <div className="px-6 pb-5 pt-2 bg-muted/10">
                          <div className="mb-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Lessons</p>
                            <ul className="space-y-2">
                              {mod.lessons.map((lesson, lessonIdx) => (
                                <li key={lessonIdx} className="flex items-center justify-between text-sm py-2 px-3 rounded-md bg-background border">
                                  <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{lesson.name}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">{lesson.duration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Learning Outcomes</p>
                            <ul className="space-y-1.5">
                              {mod.outcomes.map((outcome, outcomeIdx) => (
                                <li key={outcomeIdx} className="flex items-start gap-2 text-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <p className="mb-4">
              The Intelligence Analyst Academy offers flexible pricing to accommodate individuals and organizations
              of all sizes. Our goal is to make professional intelligence training as accessible as possible.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {Object.entries(PRICE_MAP_LABEL).map(([key, label]) => (
                <div key={key} className="border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-1">{label}</h3>
                  <p className="text-2xl font-bold mb-2">{PRICE_MAP_DETAIL[key as keyof typeof PRICE_MAP_DETAIL]}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{REFUND_POLICY}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Have questions about our courses, pricing, or organizational licensing? We are here to help.
            </p>
            <p className="mb-6">
              Reach out to our team at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline underline-offset-4">
                {SUPPORT_EMAIL}
              </a>
              . We typically respond within one business day.
            </p>
            <Button asChild>
              <Link href="/learning-paths">Explore Learning Paths</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
