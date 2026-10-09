import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/topics/suspicious-activity-reports" },
  title: "Suspicious Activity Reports",
  description:
    "How analysts use suspicious activity reports and financial intelligence unit reporting: what a filing is, how red flags cluster, and what a SAR does not prove.",
}

const topicContent = `A suspicious activity report is a financial institution's statement that something
in an account or a transaction does not have an honest explanation yet. It is not a
charge, not a conviction, and not a substitute for your own analysis. In the United
States the filing goes to the financial intelligence unit. Other countries run the
same idea under other names. The analyst's problem is identical everywhere: a large
pile of cautious paperwork, a smaller pile of files that matter, and a duty not to
treat the pile as the finding.

The basics lesson introduced currency transaction reports and suspicious activity
reports as instruments. This lesson is about how you read them, cluster them, and
brief them without pretending a checkbox is a case.


Institutions file because a rule or a judgment told them to. Two different products
fall out of that, and analysts mix them up when they are in a hurry.

### Mandatory threshold reports

A currency transaction report, or its equivalent outside the United States, is filed
because a cash transaction crossed a legal line. Nobody had to suspect a crime. The
report is a fact about cash and a threshold. It becomes interesting when it joins a
pattern: repeated filings, related parties, or a business that should not be handling
that much cash.

### Suspicion reports

A suspicious activity report is filed because someone at the institution thought the
activity might be illicit, might be hiding something, or might have no business
purpose they could defend. The standard is suspicion, not proof. Good filers include
the facts that bothered them. Weak filers include a category code and a sentence that
could describe half their customers.

Read the narrative before you read the category code. Codes are for sorting. Narratives
are for thinking.

### What the subject is not owed

In the usual design of these systems, the institution does not tell the customer that
a suspicion report was filed. That rule exists so a case can be looked at before the
target starts shredding the interesting parts. It also means you do not casually
confirm a filing to a person who does not have a reason to know. Gossip is not
liaison. If you are unsure who may be told, that is a question for your unit's rules,
not for the group chat.


A financial intelligence unit is the national office that receives these filings,
stores them, and can share them with the authorities allowed to see them. In the
United States that office is FinCEN. Other countries have their own units. Many of
those units can ask each other for information through arrangements such as the Egmont
Group. You do not need the org chart memorized. You need the idea: the filing is a
domestic report, and a cross-border question is a request, not a vibe.

### What you can expect a unit to know

- That a named institution filed on a named subject, on a date, about a described activity.
- Sometimes, that several institutions filed on related parties who never appear in one account.
- Almost never, the full story of the crime. The unit has what banks could see. Banks see their own customers, not the whole scheme.

### What a request has to carry

If you ask a unit, or ask your own office to ask, specify the subject, the time
window, the activity you already have, and the decision the answer would change.
"Send everything on this person" is how backlogs are built. A usable request sounds
like: "Did any institution file on these three companies between March and August,
and do the narratives mention consulting invoices or property deposits?"


Volume is the point of the system and the misery of the system. Most filings will
never become a case. Triage is the work.

### A practical order of reading

- **Identity.** Who is named, and who is only a counterparty? Parties in the narrative sometimes never make the structured fields.
- **Behavior, not the adjective.** "Suspicious wire" is the filer's mood. Dates, amounts, countries, and stated purposes are the behavior.
- **What the institution already excluded.** Serious filers say what they asked the customer and why the answer failed. That negative result is intelligence.
- **What is missing.** No occupation, no expected activity, no counterparties. A thin filing can still be true. It cannot carry a briefing alone.

### Clustering

One report is an anecdote. A cluster is a lead. Cluster on things that are hard to
fake by accident:

- The same person or company appearing as subject, beneficiary, or signatory.
- The same address, formation agent, or phone on parties that claim to be unrelated.
- The same narrative shape: incoming "loan," same-day outflow, no repayment activity.
- Timing that matches another case you already hold. Say the match is a hypothesis until the identifiers line up.

Do not cluster on "wire transfer" or "cash." Those are methods the whole economy uses.
You will rediscover banking.


Red flags are not a secret list you recite to sound trained. They are mismatches
between the activity and a plausible life or business. Use families, then make them
specific to the file.

### Families worth knowing

- **Profile mismatch.** The activity does not fit the occupation, the age of the account, or the business the customer described at onboarding.
- **Pass-through.** Funds arrive and leave quickly, with the account holding almost nothing. The account is a pipe. Pipes have owners. Find out who benefits.
- **Purpose that cannot be checked.** "Consulting," "marketing," "commission," and "investment" are lawful words. They are also the words people use when they do not have a contract, a deliverable, or a project name.
- **Geography without a reason.** Counterparties in places the customer has no staff, no customers, and no suppliers. The country is not the red flag. The missing reason is.
- **Dormant, then busy.** An account sleeps, then moves an amount that would have been the customer's whole year. Ask what changed. Sometimes the answer is a real inheritance. Sometimes the answer is a new arrangement.
- **Third parties who do not belong.** Payments to or from people who are not employees, not vendors, and not family, described as favors. Favors that recur are a business.

A single flag is a question. Three unrelated flags on the same parties are a reason
to open a file. Write the flags as facts. "The customer is evasive" is the filer's
characterization. Prefer "the customer did not provide an invoice when asked on 12 May."


A suspicion report can be wrong, late, defensive, or brilliant. Institutions sometimes
file to manage their own risk, not because they have found a scheme. Treat the filing
as a source with a bias: the source is worried about regulatory exposure, and that
worry is not the same thing as your intelligence requirement.

You may brief:

- That a named institution reported a described pattern on a date.
- The facts inside the narrative that you can also see in records you hold.
- The cluster, if you built one from multiple filings or from filings plus other holdings.

You may not brief:

- That the subject committed the crime named in the category code.
- A precise "confidence" you did not earn. If you have one filing and no corroboration, say that.
- Any detail your dissemination rules do not allow out of the financial-intelligence channel. When in doubt, the rule beats the prose.

A clean line for a product: "A financial institution filed a suspicion report on
4 April describing same-day pass-through of incoming wires to a newly formed company.
We have not corroborated the beneficial owner. The filing is a lead, not a finding."


**Scenario.** You have three suspicion narratives from three banks, none of which
mention each other.

Bank A: personal account of a restaurant manager, cash deposits just under the
reporting threshold, twice a week for two months, funds wired onward as "family
support."

Bank B: a new company, "North Pier Consulting," received those wires. The only
outbound payments are to a property account and to a person Bank B cannot identify
beyond a name.

Bank C: that same property account, six months earlier, was the subject of a filing
about a deposit from an unrelated trading company described as a "loan" with no
repayment schedule in the file.

**Your task:**

- Say whether this is one cluster or three anecdotes, and which identifiers do the joining.
- Name the red-flag family for each narrative in one sentence of facts, not adjectives.
- Write the request you would send for more filings: subjects, window, and the question.
- Write the sentence you will not put in the briefing, the one that treats a category code as a conviction.

If the three banks filed, the subject did not fail to be noticed. The remaining
question is whether anyone has read the three notices as one story.`

export default function SuspiciousActivityReportsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Suspicious Activity Reports"
        subtitle="How filings reach a financial intelligence unit, how to triage them, and how to brief a report without promoting it to a verdict."
        humorSubtitle="The narrative is the lead. The category code is the filing cabinet's opinion."
        readTime={18}
        difficulty="Intermediate"
        category="Financial Intelligence"
        mascot="foundations"
        mascotMessage="Read the narrative before the checkbox. The checkbox was having a long day."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="suspicious-activity-reports" />
      </MicroLesson>
    </LessonContainer>
  )
}
