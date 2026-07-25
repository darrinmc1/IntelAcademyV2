import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OSINT Techniques - The Intel Analyst Academy",
  description: "Learn about osint techniques in intelligence analysis.",
}

const topicContent = `You'll learn core OSINT techniques including search engine operators, social media intelligence, public records research, and how to verify what you find. These skills form the foundation of modern intelligence gathering.

{/* What is OSINT */}

## What is OSINT?

Open Source Intelligence (OSINT) is intelligence derived from openly available sources. That includes news articles, social media, government databases, corporate filings, academic papers, blogs, forums, podcasts, YouTube videos, and literally anything else you can access without breaking in or hacking.

Here's the kicker: 80-90% of intelligence typically comes from open sources. You don't need classified access to be a valuable intelligence analyst. You need to know where to look and how to verify what you find.

OSINT is legal when conducted properly, ethical, and incredibly powerful. It's the foundation of modern intelligence analysis.

OSINT analysts are basically professional Googlers. But don't let the simplicity fool you — there's a reason "Google it" isn't an intelligence methodology.

{/* Core Techniques */}

## Core OSINT Techniques

{/* Search Engine Operators */}

### Search Engine Operators

Advanced search syntax to refine and target your queries. Google dorking, Bing, specialized search engines.

{/* Social Media Intelligence */}

### Social Media Intelligence

Mining profiles, metadata, connections, and behavior patterns across LinkedIn, Twitter, Facebook, Instagram, and niche platforms.

{/* Public Records */}

### Public Records

Government databases, court records, corporate filings, property records, business licenses, and regulatory documents.

{/* Website Analysis */}

### Website Analysis

WHOIS lookups, DNS records, archive.org snapshots, technology stack identification, and historical site changes.

{/* Image & Video Analysis */}

### Image & Video Analysis

Reverse image search, EXIF metadata extraction, geolocation analysis, facial recognition tools, and video analysis techniques.

{/* Google Dorking */}

### Google Dorking Basics

Google dorking uses advanced search operators to refine results with surgical precision. Here are the most useful ones:

site: domain.com
Limit results to a specific domain. Example: site:tesla.com earnings

filetype: pdf
Find specific file types. Example: Company X filetype:pdf quarterly

intitle: "title text"
Search for specific text in page titles. Example: intitle:confidential internal

inurl: path/to/page
Search for text in URLs. Example: inurl:admin login

"exact phrase"
Search for exact phrases. Example: "security vulnerability" "discovered"

Start broad, then narrow. "Company X" → "Company X filetype:pdf" → "Company X filetype:pdf confidential". Each step refines your results and helps you find exactly what you're looking for.

Google dorking sounds illegal. It isn't. It's just using search operators that Google themselves documented. You're literally reading the manual.

{/* The OSINT Workflow */}

### The OSINT Workflow

Just like the intelligence cycle, OSINT has its own process. Good OSINT work is systematic and documentable:

1

#### Plan
Define your objectives, identify what information you need, determine key search terms and sources.

2

#### Collect
Execute your searches across multiple sources. Document every source and search query you use.

3

#### Process
Organize findings by source type, timeline, and relevance. Flag gaps and contradictions.

4

#### Analyse
Evaluate reliability, identify patterns, connect dots, assess confidence levels, develop assessments.

5

#### Report
Present findings with sources, methodology, confidence levels, and recommendations for further collection.

{/* Deep Dive: Ethics and Legal Boundaries */}

Just because you CAN find something doesn't mean you CAN USE it or SHOULD. OSINT operates in a gray area, and understanding the boundaries is critical.

#### What You CAN Do:

-

Collect publicly available information

-

Use information that's been shared on public websites or social media

-

Access government databases, court records, and public registries

-

Use archive.org to review historical versions of websites

#### What You CANNOT Do:

-

Hack into systems or access unauthorized databases

-

Violate website terms of service or robots.txt directives

-

Harass, stalk, or threaten individuals

-

Access private information (private social media accounts, passwords, etc.)

-

Misrepresent yourself to gain access to information

#### The Gray Areas:

Some activities exist in legal gray zones depending on jurisdiction, organization policy, and context:

-

Scraping websites (check terms of service and legal jurisdiction)

-

Using information from deleted social media posts (if you have screenshots)

-

Following individuals on social media to monitor their activity

When in doubt, ask your organization's legal or compliance team. Reputation is everything in intelligence work.

{/* Field Exercise */}

Using only publicly available information and a search engine, find 3 pieces of verifiable information about any public company (not a person).

Document your sources and the search queries you used to find them. For example:

Example Setup:

Company: Apple Inc.

Information 1: Latest quarterly revenue

Source: SEC filings (10-Q)

Search Query: site:sec.gov Apple 10-Q 2024

When researching a public company, a structured approach yields better results:

Step 1 - Define what you're looking for: Revenue, executive team, strategic goals, recent news, competitive positioning, market share.

Step 2 - Identify sources by reliability: SEC filings (highest reliability), company website, analyst reports (medium reliability), news articles, social media (lower reliability, but useful for trends).

Step 3 - Use search operators: site:sec.gov for filings, site:investors.[company].com for investor relations, filetype:pdf for whitepapers and reports.

Step 4 - Cross-reference: Find the same information from multiple sources. If three independent sources say the same thing, confidence is higher.

Step 5 - Document everything: Write down where you found it, when you found it, and how reliable you think the source is.

{/* Debrief */}

{/* Next Lesson */}
`

export default function OsinttechniquesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="OSINT Techniques"
        subtitle="Learn about osint techniques in intelligence analysis."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="osint-techniques" />
      </MicroLesson>
    </LessonContainer>
  )
}
