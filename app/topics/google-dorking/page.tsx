import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Dorking - The Intel Analyst Academy",
  description: "Master advanced Google search operators for effective OSINT investigations.",
}

const topicContent = `By the end of this lesson, you'll be able to:

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
## What is Google Dorking?

Google Dorking - also known as Google hacking - is the practice of using advanced search operators to find information that website owners did not intend to make publicly accessible, or that is difficult to locate through standard searches. For intelligence analysts, Google Dorking is a core OSINT technique for discovering exposed data, identifying vulnerabilities, and mapping digital infrastructure.

- **Beyond the Search Bar:** Most users type a few keywords and click the first result. Google Dorking uses the full power of Google's search syntax to target specific file types, domains, date ranges, and page structures that standard searches miss.
- **Legal and Ethical Boundaries:** Google Dorking accesses information that Google has already indexed from publicly accessible pages. It does not involve hacking, bypassing authentication, or exploiting vulnerabilities. However, the information discovered may reveal security weaknesses or expose data that the owner considers sensitive. Analysts should document their searches and ensure their activities remain within authorised collection parameters.

## Essential Google Dork Operators

Mastering these operators is the foundation of effective Google Dorking:

- **site: - Target a specific domain or subdomain.** \`site:gov classified\` returns all pages on .gov domains containing the word "classified." \`site:example.com filetype:pdf\` returns all PDF files hosted on example.com.
- **filetype: - Restrict results to a specific file format.** Critical for finding documents, spreadsheets, and presentations that may contain sensitive information. \`filetype:xls salary\` finds salary spreadsheets. \`filetype:pdf confidential\` finds PDFs labelled as confidential.
- **intitle: - Find pages with specific words in the title.** \`intitle:"index of"\` is one of the most famous dorks - it finds directory listings that reveal the file structure of web servers. \`intitle:"classified" filetype:pdf\` finds PDFs with "classified" in their title.
- **inurl: - Search for specific text in the URL.** \`inurl:admin\` finds login pages and admin panels. \`inurl:passwd\` finds pages that may expose password files. \`inurl:wp-admin\` targets WordPress admin interfaces.
- **intext: - Search for text in the body of the page.** More specific than a standard keyword search. \`intext:"confidential" intext:"not for distribution" site:example.com\` finds pages on a specific domain that contain both phrases.
- **cache: - View Google's cached version of a page.** Essential for preserving content that may have been removed or changed since Google last indexed it. \`cache:example.com/sensitive-document.pdf\` retrieves the indexed version even if the original has been taken down.

## Combining Operators for Intelligence Collection

The true power of Google Dorking comes from combining operators in targeted search strings:

- **Finding Exposed Documents:** \`site:example.com filetype:pdf intitle:confidential\` - finds PDFs labelled as confidential on the target domain.
- **Identifying Vulnerable Systems:** \`inurl:"/cgi-bin/" site:target.gov filetype:cgi\` - identifies CGI scripts that may have known vulnerabilities.
- **Mapping Network Infrastructure:** \`site:*.target.org intitle:"index of"\` - finds exposed directory listings across all subdomains.
- **Discovering Login Portals:** \`inurl:login inurl:admin site:target.com\` - finds administrative login pages that may be targets for credential testing.
- **Locating Backup Files:** \`filetype:bak site:example.com\` - finds backup files (\`.bak\`) that often contain older versions of sensitive documents that were insufficiently secured.

## Documenting and Preserving Findings

Google Dorking discoveries are often ephemeral. Pages may be removed, access may be restricted, or Google's cache may be updated. Proper documentation is essential:

- **Capture Timestamps:** Record the date and time of each dork query. If a page is later removed, the timestamped discovery establishes that the information was publicly accessible at the time of collection.
- **Preserve Evidence:** Use tools like the Wayback Machine to archive discovered pages, and take screenshots or PDF captures with visible timestamps. Google's cached view also serves as a preservation record.
- **Log Query Parameters:** Document the exact search string used. Different operators and combinations produce different results, and the ability to reproduce a search is important for both analytical rigour and potential evidentiary requirements.
- **Chain of Discovery:** In operational settings, document the process that led from a broad search to a specific discovery. The analytical path is often as important as the finding itself.

## Intelligence Applications

Google Dorking has proven valuable in numerous intelligence and investigative contexts:

- **Corporate Intelligence:** Discovering competitor pricing lists, unreleased product documentation, or internal strategy documents exposed through misconfigured servers.
- **Investigative Journalism:** Journalists have used Google Dorking to uncover police manuals, government contracts, and internal corporate communications that were inadvertently made public.
- **Cybersecurity Assessment:** Red teams and penetration testers use Google Dorking as a reconnaissance tool to identify exposed assets, vulnerable systems, and potential entry points before conducting more intrusive testing.
- **Counter-Intelligence:** Monitoring for exposed sensitive data within one's own organisation - discovering that a sensitive document has been inadvertently indexed before adversaries find it.`

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
