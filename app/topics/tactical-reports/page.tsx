import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tactical Reports - The Intel Analyst Academy",
  description: "Learn how to write tactical intelligence reports to support immediate operations.",
}

const topicContent = `import Link from "next/link"
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

Home

Topics

Report Writing

Tactical Reports

Back to Report Writing

# Tactical Reports

Learn how to write tactical intelligence reports to support immediate operations and decision-making.

45 minutes

Intermediate

## What You'll Learn

Structure and format of tactical reports

Time-sensitive reporting techniques

Operational intelligence requirements

Clear and actionable language

## Overview

Tactical reports are time-sensitive intelligence products designed to support immediate
operational decisions. Unlike strategic reports, tactical reports focus on near-term
threats, opportunities, and operational requirements.

## Key Components
### 1. Executive Summary

Begin with a concise summary of the most critical information that decision-makers
need to know immediately.

### 2. Situation Assessment

Provide context about the current operational environment and relevant background
information.

### 3. Threat Analysis

Identify and assess immediate threats, including capability, intent, and timeline.

### 4. Recommendations

Offer specific, actionable recommendations based on the intelligence findings.

)
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
