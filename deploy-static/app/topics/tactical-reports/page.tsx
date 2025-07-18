import Link from "next/link"
import { ArrowLeft, Clock, FileText, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import {
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

export default function TacticalReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
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
            <BreadcrumbLink href="/learning-paths/report-writing">Report Writing</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/tactical-reports" isCurrentPage>
              Tactical Reports
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <Link 
          href="/learning-paths/report-writing"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Report Writing
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">Tactical Reports</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to write tactical intelligence reports to support immediate operations and decision-making.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            45 minutes
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            Intermediate
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Structure and format of tactical reports</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Time-sensitive reporting techniques</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Operational intelligence requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Clear and actionable language</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="prose max-w-none">
        <h2>Overview</h2>
        <p>
          Tactical reports are time-sensitive intelligence products designed to support immediate 
          operational decisions. Unlike strategic reports, tactical reports focus on near-term 
          threats, opportunities, and operational requirements.
        </p>

        <h2>Key Components</h2>
        <h3>1. Executive Summary</h3>
        <p>
          Begin with a concise summary of the most critical information that decision-makers 
          need to know immediately.
        </p>

        <h3>2. Situation Assessment</h3>
        <p>
          Provide context about the current operational environment and relevant background 
          information.
        </p>

        <h3>3. Threat Analysis</h3>
        <p>
          Identify and assess immediate threats, including capability, intent, and timeline.
        </p>

        <h3>4. Recommendations</h3>
        <p>
          Offer specific, actionable recommendations based on the intelligence findings.
        </p>
      </div>

      <WhatsNext 
        currentPath="/topics/tactical-reports"
        suggestions={[
          {
            title: "Strategic Reports",
            description: "Learn to write comprehensive strategic intelligence reports",
            href: "/topics/strategic-reports",
            estimatedTime: "60 minutes"
          },
          {
            title: "Intelligence Briefings",
            description: "Master the art of oral intelligence presentations",
            href: "/topics/intelligence-briefings", 
            estimatedTime: "30 minutes"
          }
        ]}
      />
    </div>
  )
}
