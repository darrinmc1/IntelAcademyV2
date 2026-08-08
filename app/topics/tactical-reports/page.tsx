import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tactical Reports - The Intel Analyst Academy",
  description: "Learn how to write tactical intelligence reports to support immediate operations.",
}

const topicContent = `import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { StaticImage } from "@/components/static-image"
import { WhatsNext } from "@/components/whats-next"

<div className="text-slate-900 dark:text-white">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/topics">Topics</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/topics/report-writing">Report Writing</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/topics/tactical-reports">Tactical Reports</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <a href="/topics/report-writing" className="text-sm text-blue-500 hover:underline">
    &larr; Back to Report Writing
  </a>

  <h1 className="text-3xl font-bold mt-4 mb-4">Tactical Reports</h1>
  <p className="text-lg mb-6">Learn how to write tactical intelligence reports to support immediate operations and decision-making.</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <Card className="text-slate-900">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <h3 className="text-2xl font-semibold">45 minutes</h3>
        <p className="text-sm">Reading Time</p>
      </CardContent>
    </Card>
    <Card className="text-slate-900">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <h3 className="text-2xl font-semibold">Intermediate</h3>
        <p className="text-sm">Difficulty</p>
      </CardContent>
    </Card>
    <Card className="text-slate-900">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <h3 className="text-2xl font-semibold">Report Writing</h3>
        <p className="text-sm">Category</p>
      </CardContent>
    </Card>
  </div>

  <StaticImage
    src="/tactical-reports.png"
    alt="Tactical Reports"
    width={1200}
    height={675}
    priority
    className="rounded-lg mb-8"
  />

  <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
  <ul className="list-disc list-inside space-y-2 mb-8">
    <li>Structure and format of tactical reports</li>
    <li>Time-sensitive reporting techniques</li>
    <li>Operational intelligence requirements</li>
    <li>Clear and actionable language</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
  <p className="mb-4">
    Tactical reports are time-sensitive intelligence products designed to support immediate
    operational decisions. Unlike strategic reports, tactical reports focus on near-term
    threats, opportunities, and operational requirements.
  </p>

  <h2 className="text-2xl font-semibold mb-4">Key Components</h2>
  <h3 className="text-xl font-semibold mb-2">1. Executive Summary</h3>
  <p className="mb-4">
    Begin with a concise summary of the most critical information that decision-makers
    need to know immediately.
  </p>

  <h3 className="text-xl font-semibold mb-2">2. Situation Assessment</h3>
  <p className="mb-4">
    Provide context about the current operational environment and relevant background
    information.
  </p>

  <h3 className="text-xl font-semibold mb-2">3. Threat Analysis</h3>
  <p className="mb-4">
    Identify and assess immediate threats, including capability, intent, and timeline.
  </p>

  <h3 className="text-xl font-semibold mb-2">4. Recommendations</h3>
  <p className="mb-8">
    Offer specific, actionable recommendations based on the intelligence findings.
  </p>

  <h2 className="text-2xl font-semibold mb-4">The Purpose of Tactical Reports</h2>
  <p className="mb-4">
    Tactical intelligence reports serve a fundamentally different purpose from strategic assessments. While strategic intelligence informs long-term policy and planning, tactical reports support immediate operational decisions - often at the unit level, with timelines measured in hours or days rather than months or years.
  </p>
  <ul className="list-disc list-inside space-y-2 mb-8">
    <li>
      <strong>Actionable Timeliness:</strong> A tactical report that arrives after the operation has commenced has lost most of its value. Speed of production is the defining characteristic of effective tactical reporting.
    </li>
    <li>
      <strong>Specificity:</strong> Tactical reports focus on specific targets, locations, and timeframes. Where a strategic assessment might analyse "trends in terrorist financing," a tactical report identifies "the location of a known financier's safe house as of 0600 hours."
    </li>
    <li>
      <strong>Direct Consumer:</strong> The primary audience is the operator or tactical commander who will act on the intelligence. This shapes the format, language, and level of detail.
    </li>
  </ul>

  <h2 className="text-2xl font-semibold mb-4">Structure of a Tactical Report</h2>
  <p className="mb-4">
    While formats vary between agencies and mission types, effective tactical reports share common structural elements:
  </p>
  <ol className="list-decimal list-inside space-y-2 mb-8">
    <li>
      <strong>Heading:</strong> Classification level, report series identifier, date-time group, and warn order (a summary of the most critical information).
    </li>
    <li>
      <strong>Source Reliability:</strong> A clear statement of the source and its assessed reliability, using standard evaluation scales (e.g., A-F for source reliability, 1-6 for information credibility).
    </li>
    <li>
      <strong>Situation Overview:</strong> A concise description of the current situation relevant to the operational question. This section should be no more than a few sentences.
    </li>
    <li>
      <strong>Target Information:</strong> Specific details about the target - location (with grid coordinates if applicable), activity, numbers, equipment, movements, and predicted intent.
    </li>
    <li>
      <strong>Assessment:</strong> The analyst's judgement about likely developments, recommended courses of action, and confidence level in the assessment.
    </li>
    <li>
      <strong>Administrative Details:</strong> Dissemination restrictions, handling instructions, and point of contact for follow-up questions.
    </li>
  </ol>

  <h2 className="text-2xl font-semibold mb-4">Speed vs. Accuracy</h2>
  <p className="mb-4">
    Tactical intelligence exists in permanent tension between speed and accuracy:
  </p>
  <ul className="list-disc list-inside space-y-2 mb-8">
    <li>
      <strong>The 80% Rule:</strong> Many tactical intelligence units operate on the principle that an 80% accurate report delivered in time to act is more valuable than a 100% accurate report delivered after the operation. This is a calculated risk - the analyst must clearly communicate their confidence level so the operator can factor it into their risk assessment.
    </li>
    <li>
      <strong>Source Limitations:</strong> Tactical reports often rely on a single source or a limited number of sources. Analysts must resist the temptation to present single-source reporting as confirmed fact.
    </li>
    <li>
      <strong>Update Culture:</strong> Tactical reporting should be dynamic. The first report may be fragmentary; subsequent reports should refine, correct, and expand the initial picture. Analysts must be comfortable issuing corrections and updates without ego.
    </li>
  </ul>

  <h2 className="text-2xl font-semibold mb-4">Dissemination and Handling</h2>
  <p className="mb-4">
    Tactical intelligence is only useful if it reaches the right consumer at the right time through the right channel:
  </p>
  <ul className="list-disc list-inside space-y-2 mb-8">
    <li>
      <strong>Digital Dissemination:</strong> Modern tactical reporting systems deliver intelligence directly to handheld devices and vehicle-mounted terminals in near real-time.
    </li>
    <li>
      <strong>Verbal Briefings:</strong> For time-critical tactical intelligence, a verbal briefing delivered face-to-face or over encrypted voice channels may precede the written report.
    </li>
    <li>
      <strong>Classification and Caveats:</strong> Tactical reports often contain sensitive sources or methods. Proper classification, handling instructions, and dissemination restrictions protect both the intelligence and the sources who provided it.
    </li>
  </ul>

  <WhatsNext
    currentPage="https://theintelanalystacademy.com/topics/tactical-reports"
    nextLesson={{ title: "Intelligence Briefings", link: "/topics/intelligence-briefings" }}
    relatedLessons={[
      { title: "Report Writing Fundamentals", link: "/topics/report-writing-fundamentals" },
      { title: "Strategic Reports", link: "/topics/strategic-reports" },
    ]}
  />
</div>
`

export default function TacticalreportsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Tactical Reports"
        subtitle="Learn how to write tactical intelligence reports to support immediate operations."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="tactical-reports" />
      </MicroLesson>
    </LessonContainer>
  )
}
