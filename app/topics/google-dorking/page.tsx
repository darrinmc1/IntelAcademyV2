import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Dorking - The Intel Analyst Academy",
  description:
    "Use advanced search operators as authorized OSINT syntax — to find published material faster, document what you did, and stay inside the law.",
}

const topicContent = `Google already indexed the public web. "Dorking" is just using that index with a grammar instead of a shrug. It is search literacy, not a break-in. If your query only works by probing a system you are not allowed to use, you have left this lesson and entered a career conversation with counsel.

This academy teaches operators for finding published documents, official pages, news, and academic material you are authorized to collect. It does not teach hunting login panels, password files, backups, or "vulnerable systems." Those examples show up in too many internet cheat sheets. They are not tradecraft here.

## What the Technique Actually Is

Google Dorking (also called Google hacking in older literature) means combining search operators so the engine returns a narrower slice of what it has already crawled. You are querying an index of pages that were reachable without authentication when the crawler saw them.

- **It is not exploitation.** You are not bypassing a login, sending crafted packets, or testing credentials. If a page required a password, it should not be in the results. If it is, treat that as a handling problem, not a trophy.
- **It is not completeness.** The index is late, incomplete, and biased toward what webmasters allowed robots to see. A negative result is not proof of absence.
- **It is perishable.** Pages vanish. Caches update. Your notes need the query, the date, and a preservation step if the finding matters.

> Public is a legal status, not a quality rating. The first result is a lead. It is not a source until you evaluate it.

## Operators Worth Learning

Memorize a short set. Most "advanced" strings are just these, stacked.

- **Quotation marks.** \`"intelligence cycle"\` finds the phrase, not the words in any order. Use this before you add cleverness.
- **OR and minus.** \`briefing OR estimate -job -salary\` keeps the language of the discipline and drops the recruiting noise.
- **site:** Limits results to a domain or public suffix. \`site:state.gov "situation report"\` is how you stop drowning in blogs that quote the report.
- **filetype:** Restricts to a published format. \`filetype:pdf "annual threat assessment"\` is a document hunt, not a vault crack.
- **intitle: and inurl:** Words in the title or URL. Use them to find catalogs, reading rooms, and named publications — not "admin" pages.
- **before: / after:** Date bounds when the engine supports them. Time is a collection requirement. A 2014 PDF is not "current" because it ranked well.

Combining operators is the whole trick. \`site:europa.eu filetype:pdf "sanctions" after:2024-01-01\` is a lawful, boring, professional query. Boring is what you want. Excitement in search syntax usually means you are about to collect the wrong thing.

Do not use operators as a substitute for a requirement. "See what is out there" is how you spend a day and produce a bookmark folder.

## Authorized Uses in Analysis

These are the jobs the technique is for.

- **Finding the official text.** Governments, courts, companies, and NGOs publish PDFs and HTML that never appear in a normal keyword search because the title is bureaucratic and the page is three clicks down.
- **Reconstructing a public trail.** Press releases, dockets, transcripts, and hearing notices often live on a single domain. site: plus a date bound is usually enough.
- **Academic and grey literature.** Scholarly PDFs, preprints, and conference slides are open-source collection, provided you stay inside license and access rules your organization already has.
- **Your own exposure check, when tasked.** Some security teams use search to find documents their organization accidentally left on a public server. That is a defensive, authorized task. It is not a license to go looking at someone else's servers for sport.

Worked example. Requirement: "What has Country X's foreign ministry said, in official English, about the port dispute since June?" Query family: \`site:the-ministry-domain filetype:pdf OR filetype:html "port" after:2024-06-01\`. Then you read, source, and compare. You do not add \`inurl:login\` to "see what else is there." That is curiosity wearing a collection hat.

## Ethics, Law, and the Line You Do Not Cross

Search operators do not create new rights. They only change recall.

- **Authorization first.** Collect what your tasking and local law allow. "It was on Google" is not a defense if you used results to target systems, harass people, or bypass access controls.
- **No credential or vulnerability hunting.** Queries designed to surface password files, configuration backups, or administrative interfaces are offensive reconnaissance. They are out of scope for this lesson and for this academy.
- **Do not exploit a misconfiguration.** If you stumble on something that looks like it should not be public, stop, document within your rules, and escalate to the person who owns that decision. Do not download "everything in the directory" to be thorough.
- **Terms of service and rate.** Automated scraping, identity spoofing, and hammering an index are not clever. They are how accounts and cases die.
- **People are not puzzles.** Dorking for home addresses, children's schools, or medical data because you can type the syntax is not OSINT. It is a policy violation waiting for a date stamp.

If you need a rule you can remember under fatigue: if the query would embarrass you when pasted into the product's source note, do not run it.

## Document the Search or It Did Not Happen

Analysts lose arguments because they cannot reproduce a search from Tuesday.

- **Log the exact string, engine, date, and result count.** Future you will not remember which synonym worked.
- **Preserve what you cite.** Screenshot or archive a published page you rely on, using tools your organization approves. Engines and sites both move.
- **Record what you did not find.** A structured negative — "no official statement on the ministry site as of Wednesday" — is often the finding.
- **Cite the document, not the query.** The operator string is your method. The PDF is the source.

## Practice

Write three queries for this requirement: "Find official, published material on how City Y describes its port-security program, last 24 months." One should use site:, one filetype:, one a date bound. Then write a fourth query you will not run, and one sentence on why.

If your rejected query hunts for admin panels, backups, or "index of" dumps on systems you do not own, you understood the lesson. If it looks like your first three, start over.

## What This Lesson Is Not

It is not a library of exploit strings. It is not a promise of a personal "dork database" product. It is not permission to confuse Google's cache with a warrant. Learn the grammar, stay inside authorized collection, and spend the time you save on evaluation. Evaluation is the part search cannot do for you.
`

export default function GoogledorkingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Google Dorking"
        subtitle="Advanced search operators for authorized OSINT — syntax, not a skeleton key."
        humorSubtitle="If the query would look like a break-in in a footnote, it is a break-in."
        readTime={25}
        difficulty="Beginner"
        category="OSINT"
        mascot="foundations"
        mascotMessage="Search is a grammar. Judgment is still the job."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="google-dorking" />
      </MicroLesson>
    </LessonContainer>
  )
}
