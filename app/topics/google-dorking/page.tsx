import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Dorking - The Intel Analyst Academy",
  description: "Master advanced Google search operators for effective OSINT investigations.",
}

const topicContent = `import type { Metadata } from "next"
import { Search, Shield, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LessonContainer } from "@/components/lesson-container"
import {
MicroLesson,
MissionBriefing,
DeepDive,
FieldExercise,
ProTip,
JokeAside,
Debrief,
} from "@/components/micro-lesson"

export const metadata: Metadata = {
title: "Google Dorking Techniques | The Intel Analyst Academy",
description: "Master advanced Google search operators for effective OSINT investigations.",

By the end of this lesson, you'll be able to:

- Understand the fundamentals of Google dorking and its intelligence applications
- Master essential and advanced Google search operators
- Apply dorking techniques to real-world OSINT investigations
- Develop a personal library of effective dork queries
- Maintain ethical standards in your search activities

"Making Google do things it didn't know it could do, legally and ethically"

Google Dorking, also known as Google Hacking, involves using advanced search operators to find specific
information that might not be easily discoverable through normal search queries. These techniques are
essential for OSINT practitioners who need to efficiently locate relevant information from the vast amount of
data available on the internet.

"Your new superpowers for finding needles in the internet haystack"

Basic Operators

site:
Search within a specific website
Example: site:linkedin.com "John Smith"

filetype:
Find specific file types
Example: filetype:pdf "annual report"

intitle:
Search in page titles
Example: intitle:"employee directory"

Advanced Operators

inurl:
Search in URLs
Example: inurl:admin login

cache:
View cached version of pages
Example: cache:example.com

related:
Find similar websites
Example: related:cnn.com

"Where search operators meet real-world intelligence gathering"

Finding Employee Information
Locate organizational charts and employee directories

site:company.com filetype:pdf "organizational chart"

Searches for PDF organizational charts on the company's website

Document Discovery
Find sensitive documents that may have been inadvertently exposed

filetype:xls "confidential" OR "internal use only"

Searches for Excel files containing confidential information

Social Media Intelligence
Gather information from social media platforms

site:twitter.com "target company" "layoffs"
Searches for tweets about layoffs at a specific company

Just like a good spy never blows their cover, a good analyst never violates the terms of service. Be the professional your target's security team didn't know they needed to worry about.

"When basic dorking isn't enough and you need to go deeper"

### Combining Operators
Multiple operators can be combined for more precise searches:

site:linkedin.com intitle:"Chief Executive Officer" "New York"
Finds LinkedIn profiles of CEOs in New York

### Wildcard Searches
Use asterisks (*) as wildcards for unknown terms:

"John Smith" * "software engineer"

Finds pages mentioning John Smith with any word between his name and "software engineer"

### Date Range Searches
Use Google's tools to filter by date ranges for time-sensitive intelligence.

"Professional tips from analysts who've been there, dorked that"

- Start with broad searches and gradually narrow down with specific operators
- Keep detailed records of your search queries and results
- Use VPNs and consider operational security when conducting sensitive searches
- Verify information found through dorking with additional sources
- Stay updated on new search operators and techniques
- Practice regularly to maintain and improve your dorking skills

Create a personal collection of effective dork queries for different types of investigations. This "dork
library" will save time and improve consistency in your OSINT research.

)
`

export default function GoogledorkingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Google Dorking"
        subtitle="Master advanced Google search operators for effective OSINT investigations."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="google-dorking" />
      </MicroLesson>
    </LessonContainer>
  )
}
