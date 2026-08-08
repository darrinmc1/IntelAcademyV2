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

export const metadata: Metadata = {
  title: "Tactical Reports | The Intel Analyst Academy",
  description: "Learn how to write tactical intelligence reports to support immediate operations.",
}

<div className="dark:text-slate-900">
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

  <a href="/topics/report-writing" className="text-sm text-blue-500 hover:underline mt-4 inline-block">
    &larr; Back to Report Writing
  </a>

  <Card className="mt-6 bg-white shadow-lg rounded-lg">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tactical Reports</h1>
          <p className="text-lg text-slate-700 mb-4">
            Learn how to write tactical intelligence reports to support immediate operations and decision-making.
          </p>

          <div className="flex items-center text-slate-600 mb-4">
            <span className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
              </svg>
              45 minutes
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 1a4 4 0 00-4 4v2H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4zm-6 4a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Intermediate
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 mb-3">What You'll Learn</h2>
          <ul className="list-disc list-inside text-slate-700 mb-6 space-y-1">
            <li>Structure and format of tactical reports</li>
            <li>Time-sensitive reporting techniques</li>
            <li>Operational intelligence requirements</li>
            <li>Clear and actionable language</li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <StaticImage
            src="/tactical-reports.png"
            alt="Tactical Reports"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-slate-900 mb-3">Overview</h2>
      <p className="text-slate-700 mb-4">
        Tactical reports are time-sensitive intelligence products designed to support immediate
        operational decisions. Unlike strategic reports, tactical reports focus on near-term
        threats, opportunities, and operational requirements.
      </p>

      <h2 className="text-2xl font-semibold text-slate-900 mb-3">Key Components</h2>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Executive Summary</h3>
      <p className="text-slate-700 mb-4">
        Begin with a concise summary of the most critical information that decision-makers
        need to know immediately.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Situation Assessment</h3>
      <p className="text-slate-700 mb-4">
        Provide context about the current operational environment and relevant background
        information.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Threat Analysis</h3>
      <p className="text-slate-700 mb-4">
        Identify and assess immediate threats, including capability, intent, and timeline.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mb-2">4. Recommendations</h3>
      <p className="text-slate-700 mb-4">
        Offer specific, actionable recommendations based on the intelligence findings.
      </p>

      <h2 className="text-2xl font-semibold text-slate-900 mb-3">The Purpose of Tactical Reports</h2>
      <p className="text-slate-700 mb-4">
        Tactical intelligence reports serve a fundamentally different purpose from strategic assessments. While strategic intelligence informs long-term policy and planning, tactical reports support immediate operational decisions - often at the unit level, with timelines measured in hours or days rather than months or years.
      </p>
      <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1">
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

      <h2 className="text-2xl font-semibold text-slate-900 mb-3">Structure of a Tactical Report</h2>
      <p className="text-slate-700 mb-4">
        While formats vary between agencies and mission types, effective tactical reports share common structural elements:
      </p>
      <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-1">
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

      <h2 className="text-2xl font-semibold text-slate-900 mb-3">Speed vs. Accuracy</h2>
      <p className="text-slate-700 mb-4">
        Tactical intelligence exists in permanent tension between speed and accuracy:
      </p>
      <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1">
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

      <h2 className="text-2xl font-semibold text-slate-900 mb-3">Dissemination and Handling</h2>
      <p className="text-slate-700 mb-4">
        Tactical intelligence is only useful if it reaches the right consumer at the right time through the right channel:
      </p>
      <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1">
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
        links={[
          { title: "Introduction to Intelligence Analysis", url: "/topics/introduction-to-intelligence-analysis" },
          { title: "Strategic Intelligence Reports", url: "/topics/strategic-intelligence-reports" },
          { title: "Estimative Intelligence", url: "/topics/estimative-intelligence" },
        ]}
      />
    </CardContent>
  </Card>
</div>`

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
