import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Evidence Documentation - The Intel Analyst Academy",
  description: "Learn how to properly document, preserve, and report on digital evidence for intelligence and legal proceedings.",
}

const topicContent = `"Learn how to properly document, preserve, and report on digital evidence for intelligence and legal proceedings.",

Digital evidence -- social media posts, emails, server logs, metadata, device images,
and OSINT screenshots -- forms the backbone of modern intelligence analysis. But
unlike a physical document in a filing cabinet, digital evidence can be altered,
deleted, or rendered inadmissible by a single procedural error. This lesson covers the
digital evidence lifecycle, forensic imaging, hash verification, metadata preservation,
legal admissibility standards, OSINT documentation best practices, chain of custody
procedures, and the most common documentation failures that can torpedo an otherwise
solid case.

Digital evidence follows a lifecycle from identification through disposition. Each
stage has specific requirements, and a failure at any stage can compromise everything
that follows.

### The Six Stages

- **Identification:** Recognizing that digital evidence exists and is
relevant. This sounds obvious, but analysts routinely overlook evidence hiding in
metadata, browser caches, deleted files, and cloud backups.

- **Collection:** Acquiring the evidence in a forensically sound manner.
The golden rule: **never work on the original.** Create a forensic
image and work on the copy.

- **Preservation:** Ensuring the evidence remains unaltered from
collection through analysis through presentation. This is where hash values become
your best friend.

- **Analysis:** Examining the evidence to extract intelligence value.
Document every step -- every search, every filter, every tool used.

- **Reporting:** Presenting your findings in a format that is clear,
accurate, and defensible. Include methodology, tools, and limitations.

- **Disposition:** What happens to the evidence when the case is closed?
Retention schedules, destruction procedures, and legal holds all apply.

Stage 0 of the digital evidence lifecycle, which nobody teaches but everyone
experiences: "Wait, you mean I was supposed to save that before the suspect deleted
their account?"

### Forensic Imaging

A forensic image is a bit-for-bit copy of a digital storage device -- not just the
visible files, but the entire disk including deleted data, slack space, and unallocated
sectors. This is fundamentally different from simply copying files to a USB drive.

- **Use write-blockers.** Before imaging a device, connect it through a
hardware or software write-blocker to prevent any accidental modification. Plugging
a suspect's hard drive directly into your workstation without a write-blocker can
alter timestamps and metadata, potentially rendering the evidence contestable.

- **Full disk image vs. logical image.** A full disk image captures
everything. A logical image captures only the file system (visible files and
folders). Use full disk images whenever possible -- the data in slack space and
unallocated sectors can be the most valuable evidence.

- **Document the imaging process.** Record the device make, model, serial
number, the imaging tool and version used, the start and end time, and any errors
encountered.

### Hash Verification: MD5 and SHA

Hash algorithms produce a fixed-length "fingerprint" of a file or disk image. If even
a single bit changes, the hash changes completely. This is your proof that the
evidence has not been altered.

- **MD5 (Message Digest 5):** Produces a 128-bit hash. Fast and widely
used, but cryptographically weak -- collisions have been demonstrated. Still
accepted in many jurisdictions but increasingly supplemented or replaced by SHA.

- **SHA-1:** Produces a 160-bit hash. More secure than MD5 but also
showing its age. Google demonstrated a SHA-1 collision in 2017.

- **SHA-256:** The current gold standard. Produces a 256-bit hash with no
known practical collisions. Use this as your primary verification method.

**Best practice:** Generate both MD5 and SHA-256 hashes at the time of
imaging. Record them in your chain of custody documentation. Verify them again before
analysis begins and after analysis concludes. If the hashes do not match at any point,
stop everything and investigate.

Always hash the original device **before** creating the forensic image,
then hash the forensic image after creation and compare. Matching hashes prove your
image is an exact copy. Document this comparison in your case notes with timestamps.
This single step has saved more cases from admissibility challenges than any other
forensic procedure.

### Metadata: The Evidence About the Evidence

Metadata -- the data about data -- is often more valuable than the content itself. An
email's body might say "meet me at the park," but the metadata tells you who sent it,
when, from what device, through which servers, and whether it was forwarded.

- **File metadata:** Creation date, modification date, last accessed
date, author, file size, and application used. Be aware that simply opening a file
can change the "last accessed" timestamp -- another reason to work on copies.

- **Email metadata:** Full headers including Received fields, Message-ID,
originating IP address, client information, and routing path.

- **Image metadata (EXIF):** Camera model, GPS coordinates, date/time,
exposure settings. EXIF data has located suspects, disproved alibis, and
authenticated photographs -- but it can also be stripped or faked, so corroborate.

- **Web page metadata:** HTTP headers, server timestamps, caching
information, SSL certificate details.

### Legal Admissibility Standards

Even in intelligence contexts where you may never enter a courtroom, understanding
legal admissibility standards makes your documentation more rigorous and your analysis
more defensible.

- **Authenticity:** Can you prove the evidence is what you claim it is?
Hash values, chain of custody logs, and forensic imaging reports establish
authenticity.

- **Integrity:** Can you prove the evidence has not been altered? This is
where your hash verification at every stage becomes critical.

- **Reliability:** Were the tools and methods used to collect and analyze
the evidence accepted by the relevant professional community? Use industry-standard
tools (EnCase, FTK, Autopsy) and document their version numbers.

- **Proportionality:** Was the collection method proportionate to the
investigation? Over-collection raises legal and ethical concerns.

A defense attorney's favorite question about digital evidence: "Can you prove, beyond
a reasonable doubt, that no one in your 47-person task force accidentally opened this
file and changed the timestamp?" If you cannot, start praying your hash logs are in
order.

### Documenting OSINT: Screenshots Are Not Enough

Open-source intelligence presents unique documentation challenges because the source
material can change or disappear at any moment. A social media post can be deleted, a
website can be edited, and an entire platform can go offline. Your documentation must
capture not just what you saw, but enough context to prove it existed.

- **Full-page screenshots with browser chrome.** Capture the URL bar,
timestamp, and browser interface -- not just the content area. This establishes when
and where the content was observed.

- **Archive the page.** Use tools like the Wayback Machine, Archive.today,
or Hunchly to create independent archives. A screenshot on your hard drive proves
you have a screenshot; an archived version on a third-party platform proves the
content existed independently.

- **Save the page source.** HTML source code preserves hidden metadata,
embedded links, and structural information that screenshots cannot capture.

- **Record your methodology.** Document the search terms, platforms,
tools, and dates used. Another analyst should be able to retrace your steps.

- **Hash your screenshots.** Generate SHA-256 hashes of your screenshot
files immediately after capture to prove they have not been altered.

### Chain of Custody Procedures

Chain of custody is the documented, unbroken record of who had possession of the
evidence, when, and what they did with it. In digital evidence, this includes not just
physical devices but files, images, and data sets.

- **Log every transfer.** When evidence passes from one person to another
-- even within the same team -- record the date, time, persons involved, reason for
transfer, and the condition/hash of the evidence at that point.

- **Secure storage.** Digital evidence should be stored on encrypted,
access-controlled media. A forensic image sitting on an unencrypted shared drive is
a chain of custody nightmare.

- **Access logs.** Maintain logs of who accessed the evidence and when.
Many forensic tools generate these automatically -- make sure the feature is enabled.

- **Version control.** If you create derivative products (extracted files,
parsed data, filtered datasets), each derivative should be linked back to the
original evidence with its own hash and chain of custody entry.

### Common Documentation Failures

The most frequent failures are not dramatic. They are mundane, preventable, and
devastating:

- **Failing to hash at the time of collection.** Generating a hash days
or weeks later proves the file has not changed since the hash was generated -- not
since it was collected.

- **Working on the original.** Opening the original file, even just to
"take a quick look," can alter metadata and break the evidentiary chain.

- **Incomplete screenshots.** Cropping out the URL bar or timestamp
because "it looked cleaner" eliminates the very information that establishes
provenance.

- **Gaps in the chain of custody log.** "I think Bob had the drive over
the weekend" is not a chain of custody entry.

- **Not documenting tools and versions.** "I used some forensic tool" is
not defensible. "I used EnCase Forensic v8.12, build 8.12.0.237" is.

Create a **digital evidence checklist** and use it every single time.
The checklist should cover: device identification, write-blocker verification,
imaging, hash generation and comparison, chain of custody entry, secure storage
confirmation, and tool/version documentation. Checklists are not a sign of
inexperience -- they are a sign of professionalism. Pilots use them. Surgeons use
them. You should too.

)
`

export default function DigitalevidencedocumentationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Digital Evidence Documentation"
        subtitle="Learn how to properly document, preserve, and report on digital evidence for intelligence and legal proceedings."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="digital-evidence-documentation" />
      </MicroLesson>
    </LessonContainer>
  )
}
