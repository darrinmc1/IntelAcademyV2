import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Target Profiling - The Intel Analyst Academy",
  description: "Master the art of target profiling — building comprehensive intelligence profiles of persons of interest through structured analysis and confidence-based gap assessment.",
}

const topicContent = `import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
MicroLesson,
MissionBriefing,
DeepDive,
ProTip,
JokeAside,
FieldExercise,
Debrief,
NextLessonLink,
} from "@/components/micro-lesson"
import WhatsNext from "@/components/whats-next"

export const metadata: Metadata = {
title: "Target Profiling | The Intel Analyst Academy",
description:
"Master the art of target profiling — building comprehensive intelligence profiles of persons of interest through structured analysis and confidence-based gap assessment.",

Target profiling is the systematic process of constructing a comprehensive operational
picture of a person of interest — their identity, associations, capabilities, intentions,
and vulnerabilities. It is not guesswork, not stereotyping, and certainly not the
dramatised version you have seen on television. It is a structured analytical method
designed to answer one question: _who are we dealing with, and what can they do?_

In this lesson, you will learn the five-factor framework that underpins every credible
profile, how to identify and manage gaps in your knowledge, and when your profile has
outlived its usefulness. By the end, you will know how to build a living document that
informs operations rather than gathering dust in a folder labelled "unsorted."

{/* ---- Section 1: Profiles Are Not Character Assassination ---- */}

Let us clear something up immediately: intelligence target profiling has almost nothing
in common with what you see on crime procedurals. The FBI profiler who stares at a crime
scene photo and declares the suspect "is a white male in his thirties who lives with
his mother and collects porcelain dolls" is performing a specific type of behavioural
criminal profiling. That is a different discipline.

### What Target Profiling Actually Is

Target profiling in an intelligence context is the methodical collection, collation, and
analysis of information about a specific person of interest to enable operational
decision-making. It answers practical questions: Where does this person operate? Who do
they trust? What resources can they mobilise? What pressure points exist? It is not about
diagnosing psychological disorders — leave that to psychiatrists.

### What It Is Not

- **Not guesswork:** Every claim in a profile must trace back to a source, even if that source has caveats.
- **Not stereotyping:** Profiling by ethnicity, nationality, or religion is not analysis — it is prejudice with a filing system.
- **Not a biography:** You are not writing a Wikipedia entry. Irrelevant personal details that do not affect operational outcomes are noise.
- **Not permanent:** Targets change. Their circumstances, loyalties, and capabilities evolve. Your profile must keep up or become a liability.

If your profile reads like a police detective's dramatic monologue in a crime drama's
third act, you have missed the point. Real profiling is more spreadsheet than screenplay.

### The Operational Purpose

A well-constructed target profile serves multiple operational purposes: it identifies
collection requirements (what you still need to find out), informs engagement strategies
(how to approach or disrupt), supports risk assessments (how dangerous is this person
really), and enables predictive analysis (what are they likely to do next). Without a
profile, you are operating with your hands tied behind your back.

Keep a "known unknowns" log alongside your profile. Every time you add a fact,
note one thing you still do not know. This keeps your ego in check and your collection
manager employed.

{/* ---- Section 2: The Five-Factor Framework ---- */}

The five-factor framework provides a structured approach to building a target profile.
These five lenses ensure you cover the critical dimensions of any person of interest
without getting lost in irrelevant detail. Think of them as the pillars that hold up a
credible operational picture.

### 1. Identity — Who Are They?

This goes beyond a name and date of birth. True identity profiling covers aliases, known
variations of their name across different scripts, documents (passports, ID cards, birth
certificates), biometric data where available, and digital footprints. Many targets
operate under multiple identities simultaneously. Your job is to connect the dots and
confirm which identity is legitimate in which context.

### 2. Associations — Who Do They Know?

Mapping a target's network is often more valuable than anything you learn about the
individual in isolation. Associations include family ties (both biological and marital),
business partners, political affiliations, known co-conspirators, and social or
ideological connections. A target's network reveals their access, their constraints, and
their potential successors. When the target goes quiet, their network often keeps talking.

### 3. Capabilities — What Can They Do?

Capabilities encompass the resources a target can mobilise. Financial resources (liquid
assets, funding streams, access to credit), technical skills (cyber capabilities,
explosives knowledge, tradecraft), physical resources (vehicles, weapons, safe houses,
communications equipment), and organisational support (backing from a state, group, or
institution). Assess not just what they have, but what they could acquire given time and
motivation.

### 4. Intent — What Do They Want?

Intent is the hardest factor to assess and the most critical. It combines the target's
stated goals, observed behaviours, historical patterns, and expressed grievances or
ambitions. Look for disconnects between what they say and what they do. A target who
publicly advocates for peace while privately stockpiling weapons has told you everything
you need to know — you just have to be paying attention.

### 5. Vulnerabilities — Where Are They Weak?

Vulnerabilities are the pressure points that can be exploited. These include personal
vices (gambling, substance use, extramarital affairs), financial pressures (debt,
embezzlement, dependence on a single income source), legal vulnerabilities (outstanding
warrants, pending investigations, citizenship issues), and psychological or emotional
weak points (ego, paranoia, loyalty conflicts). Note: identifying a vulnerability is not
the same as exploiting it. Your role is analysis, not action — unless your job description
says otherwise.

"Intent" is the factor that keeps analysts awake at night. Capabilities you can
photograph. Intent you can only infer — and your inference is only as good as your last
piece of intelligence.

Lay out the five factors as columns in a simple table. Rate each factor on a scale of
1–5 for both "what we know" and "confidence in what we know." The gap between
these two scores tells you exactly where to focus your collection efforts.

{/* ---- Section 3: The Empty Chair ---- */}

In target profiling, what you do not know is often more important than what you do know.
Unacknowledged gaps in your knowledge are the leading cause of operational failures.
The empty chair is a conceptual tool: imagine the target sitting across from you. What
questions would you ask? Which of them can you already answer? The unanswered questions
are your gaps.

### Gap Analysis Fundamentals

Gap analysis is the systematic identification of missing information within each of the
five factors. It is not an admission of failure — it is a professional necessity. A mature
analyst knows their gaps and accounts for them in every assessment. An immature analyst
fills gaps with assumptions and calls it analysis.

### Confidence Levels

Every piece of information in a profile should carry a confidence label. A standard
framework uses three levels:

- **High confidence:** Corroborated by multiple independent, reliable sources. The information is as close to confirmed as intelligence gets.
- **Moderate confidence:** Supported by one reliable source or multiple sources with caveats. Plausible but not proven.
- **Low confidence:** Based on single-source reporting, uncorroborated claims, or inference. Use with extreme caution.

When a critical gap exists in a high-risk area — for example, you do not know whether the
target has access to explosives — you must flag it explicitly in your assessment. The
empty chair is not an embarrassment. It is a collection requirement.

### The Danger of Assumption Filling

Human brains hate uncertainty. We are wired to fill gaps with plausible stories. This is
how intelligence failures happen. An analyst who assumes a target is not armed because
there is no evidence of weapons is making a dangerous logical leap. Absence of evidence
is not evidence of absence. The empty chair reminds you to keep that gap visible and
labelled until you have real data.

Take a real or hypothetical person of interest — a local political figure, a corporate
executive, or a known criminal actor in your area. Create a simple five-factor table
with two columns: "Known" and "Unknown." Spend 15 minutes filling in what you
actually know from memory or open sources. Then review your "Unknown" column. For
each gap, write a single intelligence requirement question starting with "What,"
"Who," or "How."

Example: Instead of writing "we don't know his funding source," write "What
legitimate or illegitimate sources provide the target's primary income?"

Time: 15 minutes | Tools: Notebook, browser for open-source checks

{/* ---- Section 4: Living Documents ---- */}

A target profile is never finished. The moment you declare it complete is the moment it
begins to decay. Targets move, change jobs, acquire new skills, lose old connections,
and shift their priorities. Your profile must evolve with them — or it becomes dangerous
misinformation dressed up as analysis.

### When to Update

Routine updates should happen on a schedule determined by the target's activity level.
A high-priority target involved in ongoing operations might need weekly updates. A
dormant person of interest might be reviewed quarterly. Trigger events should also prompt
unscheduled updates: a change in the target's known location, a major financial
transaction, a new association with a known actor, or any significant change in their
observable behaviour.

### When to Start Over

Sometimes an update is not enough. You need to start from scratch when:

- The target has undergone a fundamental identity change (new name, new country, new appearance through surgery or prolonged disguise).
- Your previous profile contained significant errors that have cascaded into multiple downstream assessments.
- The operational context has shifted so dramatically that the original profiling framework no longer applies — for example, a criminal target who has become a political actor.
- Your confidence in the existing profile has collapsed below an acceptable threshold due to source reliability issues or contradictory reporting.

### Profile Hygiene Best Practices

- **Version control:** Every update should be timestamped and attributed. Who changed what, when, and based on what source?
- **Confidence decay markings:** Information that has not been corroborated within a set time period should automatically downgrade in confidence.
- **Source freshness tags:** Each data point should carry the date of its last confirmation. Stale sources are not sources at all.
- **Peer review:** Profiles should be reviewed by at least one other analyst before operational use. Four eyes catch more than two.

Set a calendar reminder to review every active profile at least once per quarter.
If the reminder fires and you realise nothing has changed on the target in three
months, ask yourself: is that because nothing has changed, or because we stopped
collecting? The answer determines your next move.

)
`

export default function TargetprofilingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Target Profiling"
        subtitle="Master the art of target profiling — building comprehensive intelligence profiles of persons of interest through structu"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="target-profiling" />
      </MicroLesson>
    </LessonContainer>
  )
}
