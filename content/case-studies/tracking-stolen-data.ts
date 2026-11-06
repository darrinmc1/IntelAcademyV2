export const trackingStolenDataContent = `This is an illustration with invented details. Northwind Components, the people, the dates, and the file names are made up. The method is not. It is how an analyst tests a claim that company data is circulating somewhere the company is not supposed to go, writes a judgment a manager can use, and stays on the lawful side of the file.

## What this case is not

It is not a guide to closed criminal channels. It does not describe how to find one, join one, buy a file, download a sample, or talk to the person offering it. Those acts are offences, or the start of one, and they are also bad analysis: you do not raise confidence in a judgment by committing the harm you are assessing.

Lena Cho, the analyst in this story, never sees the channel. She is not given a way in, and she does not ask for one. Her sources are a report from a provider her company already pays, and records Northwind already holds. If your case only moves when someone fetches the stolen file, you do not have a case yet. You have a temptation.

The related lesson [Deep Web Research for Intelligence Analysts](/topics/deep-web-research-for-intel-analysts) draws the line between ordinary unindexed material and places you are not authorised to enter. This case stays on the authorised side of that line. [Source evaluation](/learning-paths/source-evaluation) is the habit underneath it.

## The situation

Northwind Components is a fictional mid-sized manufacturer in Brisbane. It keeps a payroll file and a customer export because finance has to pay people and ship parts. It does not run a intelligence shop. It has one analyst, Lena, a security manager, a privacy officer, and a lawyer who would prefer a quiet quarter.

On Monday 3 March, the contracted reporting provider sends Lena a note. A closed channel, which the provider will not and should not invite her into, is advertising what it calls a Northwind payroll and customer export. The provider's note includes four things and nothing else: a claimed row count of 48,216, a list of column names in a stated order, a description of three rows with the personal values removed, and a handle the advertisement uses. There is no price in the note Lena is willing to repeat, and there does not need to be. A price would not tell her whether the file is hers.

The security manager wants two answers by Friday. Is this our data, and who took it? Lena writes both questions down and then crosses out the second one as the task for this week. Who took it is a fine question. It is not the one the evidence can carry yet. Promising it on Monday is how analysts invent a culprit to match a handle.

## State the question before you touch the evidence

She rewrites the task in one sentence, the way [Intelligence Report Fundamentals](/topics/intelligence-report-fundamentals) insists on.

The question is: does the advertisement describe a Northwind file we can identify, and if it does, which file, as of which date?

Not: who is the criminal. Not: how do we get the file back from the channel. Not: can we confirm it by looking. The first question can be answered from Northwind's own records. The others cannot, not lawfully, and not this week.

She also writes the starting judgment, so later she can see whether it moved.

Starting judgment, low confidence: a criminal advertisement may refer to Northwind data. We cannot yet tell whether the file is real, current, or ours. The handle is a name on an advertisement, not an identified person.

Low confidence is not modesty. It is the accurate description of one second-hand report. [Estimative language](/topics/estimative-language) exists so that "may" does not quietly become "is" between Monday and the board pack.

## Grade the source before you grade the claim

Two sources are stacked here, and they are not equally useful.

The provider is known. Northwind has a contract, a named analyst on the other end, and a record of earlier reports that were specific enough to check. Lena grades the provider as generally reliable. That grade does not transfer to the advertisement. The provider is reporting what someone else claimed, inside a place Northwind cannot see. A reliable narrator of an unevaluated claim is still an unevaluated claim.

She sends one question back, in writing: what did you observe yourselves, and what were you told? The answer matters. "We saw a post that said these column names" is a different source from "a partner told us they heard about a Northwind file." The first is a description of an artefact. The second may be the same story wearing a second letterhead.

She also asks whether any other report of this file traces to a different origin, or only to this provider. Circular reporting is a favourite of breach rumours. Three firms quoting one bulletin is one source. It feels like three because the logos differ.

She does not ask the provider to fetch her a copy, to message the handle, or to buy a sample "for validation." If the provider offered that, the answer would be no, and the no would go in the log. Validation that requires possession of stolen personal data is not validation. It is how the company acquires a second breach and how the analyst acquires a problem the lawyer will describe without smiling.

## The test that does not require the file

Northwind can regenerate its own exports. That is the whole trick, and it is less cinematic than people hope.

Lena asks finance for the data dictionary and the export job log. She does not need the customer rows. She needs the shape of the file the company knows how to make.

She compares three things the provider listed against three things Northwind can check without leaving the building.

- Column order. The advertised columns match a payroll-and-customer extract that only job NC-EXPORT-14 writes, in that order. Other Northwind extracts share some of the same fields and none of the same sequence. A column list is dull. It is also hard to invent by guessing, which is why it is worth more than a dramatic handle.
- Row count. The advertisement says 48,216. NC-EXPORT-14 on 14 February produced 48,216 rows. A round number would have been weaker. This one is specific, and it matches a run she can point at.
- Age. A manager remembers a 2022 incident that "was probably the same thing." The 2022 file had about 12,000 rows and a different column set. Same company name, different file. Memory is not a source. The old incident report is.

She writes the comparison in a table with three columns: what was claimed, what Northwind holds, and whether they match. She does not paste the provider's redacted rows into the ticket system, where half the company can read them. The provider PDF goes into the incident folder with the access the lawyer sets. The assessment describes the test. It does not reproduce the personal data to prove she was thorough. Thorough, in this job, is often what you refused to copy.

The job log then does something the advertisement cannot. It shows NC-EXPORT-14 ran twice on 14 February. Once on the schedule. Once under a finance-officer account, after which the file was copied to a workstation share. That is a lead for the people who are allowed to investigate staff access. It is not a finding that the officer stole the file. Accounts are not people. People are not findings. Lena writes the log line into the investigation note and keeps it out of every wider draft.

## What changed the judgment

By Wednesday the dataset judgment has moved, and the attribution judgment has not. Those are different sentences. Analysts get into trouble when they let one ride on the other.

Revised judgment, high confidence on the file and low confidence on the person: the advertised file is the Northwind extract produced by NC-EXPORT-14 on 14 February. We do not know who removed it from the network. The handle in the advertisement is not identified as that person.

What changed the file judgment was the match on column order and row count to a job only Northwind runs, plus the exclusion of the 2022 file. What did not change it was a better view of the channel. Lena still has not seen the channel. She does not need to. The company can recognise its own paperwork.

On Friday the provider sends a second note. The same handle advertised two other firms' files the same week, in the same wording, with the same shape of claim. Lena treats that as a new source statement from the same provider, not as a revelation. It is consistent with a reseller who lists whatever arrives. It is also consistent with other explanations she cannot test, including coincidence and a provider who is itself summarising one rumour. She does not promote the handle to "the threat actor."

The judgment she had been tempted to write on Monday, that the named handle stole Northwind's file, is rejected. The reason goes in the product, not in a side conversation: we have no observation connecting that name to our export, and the same name was attached to other firms' claims in the same week. A reseller is possible. An identified intruder is not supported.

The staff account is handled the same way. It is a collection task for the investigation, under the rules HR and legal already have for looking at an employee's access. It is not a sentence in the incident summary that names a colleague. If the account was used by someone else, or by a support session, the summary would have accused the wrong person in writing. Writing is where loose attribution goes to become a fact.

## The reporting path

The path is short on purpose. A stolen-data case grows extra readers every time someone forwards "just in case." Lena keeps a list of who received which version.

1. Monday, to the security manager only. One page: the question, the starting judgment, the source grade, the test she will run, and the things she will not do. The last list is not colour. It is how the manager knows the plan does not include buying the file.
2. Wednesday, to the incident lead, the privacy officer, and the lawyer. The revised judgment, the confidence split, the comparison table, the assumptions, and the gaps. No staff name. No customer rows. No invitation to "see the sample."
3. The lawyer decides what Northwind must tell regulators, staff, or customers. Lena does not post a warning on the intranet because it feels responsible. Notification is a legal act with a clock. Analysts who start that clock by accident do not get thanked.
4. A referral pack for the police cybercrime unit, sent only when the lawyer says to send it. It contains the judgment, the provider's reference number, the export job identifier, the date of the matching run, and a plain statement that Northwind did not purchase, download, or communicate with the seller. It does not contain the personal data. The police do not need 48,216 rows to open a conversation, and Northwind does not need to hand its staff and customers to a second filing cabinet.

Assumptions, written where a reader can find them:

- The provider described the column list accurately.
- NC-EXPORT-14 is the only job that writes columns in that order.
- The 14 February row count in the log is the count of that file, not a later edit.

Gaps, also written down:

- We do not know who copied the file off the share.
- We do not know whether the advertisement's file is complete or a description of it.
- We do not know whether the handle is a reseller, a braggart, or a name attached by someone else.
- We will not close those gaps by entering the channel.

A collection task is allowed when it uses material the company may already hold or a question a contracted provider can answer without fetching stolen data. Ask IT for the rest of the export log. Ask finance whether the second run was expected. Ask the provider to confirm observation versus hearsay. Do not task anyone to obtain the dump, identify the seller's account, or "keep an eye on the channel." A task written that way will be read later as an instruction. Write the task you are prepared to defend.

## Legal and ethical boundaries

The boundaries are the work, not a footer.

Do not buy stolen data. Not as a sample, not with a corporate card, not through a vendor who offers to stand in the middle so your name is absent. The offence does not become a method because a purchase order was raised.

Do not access a system, forum, or server you are not authorised to access. A report that describes a closed channel is not permission to enter it. Authority comes from the company and the law, not from curiosity, and not from a manager saying "just have a look" in a corridor. If the authority is unclear, stop and ask the lawyer in writing. A verbal wave is a poor exhibit.

Do not ask a colleague to do it so that your name stays off the log. Delegating an offence is still the offence, with an extra paragraph for the both of you.

If a copy of the file arrives unsolicited, do not forward it, do not open it on a work laptop to "see if it is real," and do not delete it in a panic before anyone has decided the handling rule. Tell the lawyer and follow the rule they set. Possession is a decision. It should be theirs.

Do not put personal data in the assessment to prove the point. Describe the match. The readers who need the rows are few, and they already have a lawful reason and a folder.

Do not name a person as responsible because their account appears in a log. Record the account as a lead, in the investigation record, under the policy that already governs staff inquiries. Wider products get the judgment about the file. They do not get a suspect.

Record the refusals. In a later review, the paragraph that says what you did not do is worth more than a confident attribution you cannot source. Reviews are where dramatic Monday judgments go to be read aloud.

## What good looks like on Friday

The product that leaves on Friday is dull enough to trust.

Northwind assesses with high confidence that the file described to us on 3 March is the extract produced by job NC-EXPORT-14 on 14 February. Confidence is high because the column order is distinctive to that job and the row count matches that run, and because the 2022 incident was a different file. We do not assess who removed the file from the network. A finance-officer account ran an unscheduled copy to a workstation share that day. That is an investigative lead, not an attribution. The advertisement's handle is not assessed as the person who took the file. The same handle was attached to other firms' claims the same week, which is consistent with resale and insufficient for identification.

A reader can disagree with that paragraph. They cannot say they were not told what is known, what is not, and what was refused. That is the standard. The channel did not confess. A column header did, and only about the file.

## Mistakes this case is built to prevent

- Treating the handle as the intruder because a name feels like an answer.
- Letting the file judgment and the person judgment share one confidence word.
- Confirming the breach by acquiring the stolen file.
- Pasting personal data into a ticket so that more people hold it than the thief did.
- Naming a staff member from an account log.
- Calling three quotations of one provider "corroboration."
- Starting customer notification yourself because the silence felt worse than the duty.
- Filing the refusals nowhere. If it is not written, the next analyst will be asked to be braver than you were, which in this context means less careful.

## Practice

Use a file your organisation already holds. Do not go looking for a criminal channel to make the exercise realistic. Realistic, here, is the comparison.

1. Write the question in one sentence. Make it about identifying a dataset, not naming a person.
2. Separate the source you trust from the claim they carried. One sentence each.
3. List three features of the dataset you could check against your own records without copying personal data into the answer. Column order, a count, a job name, a date.
4. Write the judgment twice: once about the file, once about who took it. Give each its own confidence, using the scale in [Estimative language](/topics/estimative-language).
5. Write four lines on what you will not do, including any step that would mean buying, downloading, or requesting the data from the person offering it.
6. Name the reporting path: who gets the first note, who decides notification, who sends anything outside the building.

If the person judgment is more confident than the file judgment, start again. You have done the exciting half, which is the half the evidence does not support.

Back to [Deep Web Research](/advanced-topics/deep-web-research), or read the companion case [Uncovering a Hidden Criminal Infrastructure](/advanced-topics/case-studies/hidden-criminal-infrastructure).
`
