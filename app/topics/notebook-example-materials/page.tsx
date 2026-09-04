import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Example Materials - The Intel Analyst Academy",
  description:
    "Learn how to use i2 Analyst's Notebook sample charts and import specs as training wheels — and how not to treat vendor fiction as a case.",
}

const topicContent = `Vendor example charts exist so you can break something that is not a live investigation. They are sandboxes. They are not tradecraft, not evidence, and not a license to copy a pretty layout onto a real target set and call it analysis.

This lesson is how to use the example materials that ship with Analyst's Notebook, what to steal (the mechanics), and what to leave (the story).

## What You Are Looking At

Typical example packs include sample .anb charts, import specifications, and toy data. Menu paths move between versions. If Help > Example Materials is gone, look in the install directory or the vendor's current training pack. The job does not change.

- **Sample charts.** Pre-built networks and timelines that show entity types, link types, and a layout that already "worked" for a fictional problem.
- **Import specifications.** Maps from columns in a CSV or spreadsheet to entities and links. This is the part that saves you days when it is right and ruins you when it is wrong.
- **Toy data.** Clean, complete, and unlike your Tuesday file. If your real import looks this tidy, someone already analyzed it.

> An example chart that looks like a finished case is a brochure. Your case will be uglier. That is not a software problem.

## How to Learn From a Sample Chart

Open one. Do not admire it. Interrogate it.

- **Read the entity and link types as a vocabulary.** What did they decide "Person" versus "Identity" meant? Write your shop's rule before you copy theirs.
- **Find the date fields.** If the timeline view is empty, the example cheated with labels. Real work needs actual dates.
- **Find the source fields.** Examples often skip reliability. You will not. Add the attribute you will need in court or in a review.
- **Break the layout on purpose.** Apply a different layout. If the finding disappears, the finding was the layout. That is a useful scare.
- **Ask what question the chart answers.** If you cannot name it, the example is a demo, not a method.

Worked habit: pick one sample, write a three-line assessment as if it were tasked, then list three things the chart cannot support (intent, completeness, currentness). If you cannot list three, you trusted the brochure.

## Import Specs Are Where Shops Get Hurt

The example import that creates a Person from column A and a Phone from column B is a gift until column A is a nickname and column B is a shared desk phone.

- **Map fields as judgments.** "Name" to Person is a judgment that this string is an identity. Record the rule.
- **Watch merge keys.** Examples merge cleanly because the vendor made unique IDs. Your file has three spellings and a blank.
- **Type the relationship in the spec.** An untyped "associated" import is how you birth a hairball before lunch.
- **Keep a rejected-row log.** Example specs assume every row is good. Yours will not be. The rejects are often the finding.

Practice on the toy file first. Then run the spec on a copy of real data. Then look at a sample of created nodes and ask whether you believe each one. If you skip that, you automated a rumor.

## Selection and Annotation When You Build Your Own "Examples"

Sometimes you put exemplars into a chart for a consumer: a typical call, a contradictory payment, a first-seen date. That is a product choice.

- **Representative plus anomalous.** If every example supports the lead, you are briefing a campaign.
- **Source on the object.** Identifier, date collected, reliability. A pretty icon is not a citation.
- **Why this one.** One sentence. If you cannot say why it is on the glass, it is clutter.
- **Time spread.** Recent-only samples hide the start. Old-only samples hide the now.

Templates (entity, link, chart) are how you stop reinventing "Person" every Monday. They are not how you stop thinking. A fraud template used on a missing-person problem will smuggle the wrong questions.

## What This Academy Will Not Ship

We are not bundling vendor files. We do not have a license to redistribute Analyst's Notebook examples. Coming Soon: academy-authored toy CSVs for import practice. Until then, use the vendor pack you already have, or a spreadsheet you invented with fake names.

Do not upload live case data into a training chart you will screenshot for class. That is a dissemination decision, not a learning hack.

## Practice

Open any sample chart (or sketch one from memory if you do not have the software in front of you). Write: the question it could support, one import rule you would change, and one attribute you would add before a real job. If your answer is "it looks professional," you have not started.
`

export default function NotebookexamplematerialsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Example Materials in Analyst's Notebook"
        subtitle="Use vendor samples as sandboxes — not as a finished case you can photocopy."
        humorSubtitle="If the toy data imports cleanly, it is not your data. Enjoy it while it lasts."
        readTime={20}
        difficulty="Beginner"
        category="Analyst Notebook"
        mascot="foundations"
        mascotMessage="Steal the mechanics. Leave the story. The story is fiction with a help menu."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="notebook-example-materials" />
      </MicroLesson>
    </LessonContainer>
  )
}
