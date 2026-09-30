import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cryptocurrency Tracing for Analysts - The Intel Analyst Academy",
  description:
    "A practical analyst's view of blockchain tracing: what a public ledger shows, what clustering can suggest, where off-ramps matter, and what a trace does not prove.",
}

const topicContent = `Cryptocurrency tracing is accounting with a public ledger and a worse vocabulary.
Most of the drama in public conversation is about whether a coin is "anonymous."
The analyst's question is duller and more useful: which transactions can I cite,
which cluster of addresses is only a hypothesis, and where does the value have to
meet an institution that knows a customer's name.

This lesson will not teach you to hide funds, to break a service, or to operate
a mixer. It will teach you what a trace can support in a briefing, and the
sentences that should stay out of one.


A blockchain is a shared list of transactions. Depending on the asset, that list
shows addresses and amounts, or accounts and amounts, with a time. It does not
show a passport. An address is a pseudonym. It stays a pseudonym until something
outside the chain ties it to a person, a company, or a service.

### Two shapes you will actually meet

- **Unspent-output systems.** Bitcoin is the usual example. Value sits in outputs. A transaction spends one or more earlier outputs and creates new ones. There is no running "balance" on the chain in the way a bank statement has a balance. Analysts talk about inputs and outputs. If you describe a bitcoin movement as "the account balance," you are importing a bank metaphor the ledger does not have.
- **Account systems.** Many other assets look more like an account that sends to another account. That is easier to narrate and easier to over-believe. An account can still be one of many controlled by the same person, or a temporary pass-through.

You do not need to run a node to brief. You do need to know which shape you are
looking at, because the chart looks different and the mistakes are different.

### What you can cite

Cite a transaction identifier, a time, an amount, and the addresses or accounts
the ledger itself shows. Those are observations. "This output was spent in the
following transaction" is the kind of sentence a public ledger will back.

### What you must label as a hypothesis

"These addresses belong to the same person." "This is the change coming back."
"This cluster is the exchange." Some of those become solid when a service confirms
them or when the target uses the address in the open. Until then they are
hypotheses with a method. Put the method in the footnote, not in the adjective.


People like blockchains because they think the trail ends at the water. In practice
the interesting moments are where value enters from ordinary money and where it
leaves back to ordinary money. Those are the on-ramp and the off-ramp: exchanges,
brokers, payment processors, and sometimes over-the-counter desks that bank their
customers the old-fashioned way.

### Why the ramp matters

A public ledger can show that value moved from address A to a deposit address a
service has used. It cannot, by itself, show you the customer file. The customer
file lives at the service, and you get it the way you get other financial records:
a lawful request, a formal channel, or material the service has already made
public. "We traced it to an exchange" is a tasking line, not a closed case.

### The sentence that overclaims

"The target cashed out at the exchange" is often one hop further than the evidence.
What you may have is: value moved to an address you assess, with stated confidence,
as a deposit address of a named service. Who clicked the button, whose account
received the eventual payout, and whether the service froze anything are facts
you do not have until the service, or another record, says so.

Write the hop you have. Task the hop you want.


Clustering is the art of suggesting that many addresses are one actor. Commercial
tracing tools do this at scale. You should understand the idea well enough to
know when the tool is guessing.

### Heuristics, in plain language

- **Common spend.** If one transaction spends outputs from several addresses at once, those addresses were controlled together at that moment, or someone went to a lot of trouble to make it look that way. It is a strong hint. It is still a hint about control at the time of that spend, not a biography.
- **Change.** In unspent-output systems, a payment often creates an output back to the sender. Tools try to guess which output is the change. They are wrong often enough that you do not brief "the target's wallet" off one change guess. You brief "the tool assessed this output as change" and you look for a second reason.
- **Service heuristics.** Deposit patterns, known hot wallets published by a service, and seizure announcements can anchor a cluster to a business. Prefer anchors you can cite: the service's own statement, a prior official attribution, or a transaction the service will confirm. A colored blob in a commercial tool is a lead until you know why it is that color.

### When the tool and the story disagree

If the tool merges two clusters and your other holdings say those people are not
the same, do not let the color win. Tools encode assumptions. Your file may have
a fact the tool never saw. Note the disagreement. It is part of the analysis, not
an embarrassment.


Some services and some assets are built to make the public trail harder to follow.
Mixing services take inputs from many users and pay outputs that are difficult to
tie back one-for-one. Privacy-focused assets try to hide amounts or counterparties
on the public record. None of that is a reason to invent a continuation you cannot
see, and none of it is a puzzle this lesson will help you pick apart.

What you can still say, honestly:

- Value moved into a service or an asset type that breaks naive one-to-one tracing, at a time you can cite.
- You cannot show where that value came back out, if you cannot.
- Any later funds you like for the same story are a separate hypothesis until an off-chain fact joins them: timing plus a named account, a service's records, or the target's own admission in a channel you can use.

"It went into a mixer, therefore the withdrawal three days later is the same money"
is a wish. Timing can support a request for records. Timing is not the records.


A trace answers a narrow question: how did this value move between these observed
points on this ledger. It does not, alone, prove any of the following.

- **Identity.** An address is not a person. A cluster is not a person. A person is a conclusion from off-chain evidence.
- **Intent.** Paying an address is not a motive. The memo, the chat log, the invoice, or the witness does motive. The chain does the payment.
- **Origin of the whole balance.** Coins get mixed with other coins in ordinary use. "This output descends from a theft" can be true of a slice of value and false as a description of everything the address ever touched. Say the slice.
- **Exclusivity.** Other paths may exist. If you followed one, say you followed one.

Confidence language belongs here as much as in any other product. High confidence
that a transaction identifier exists is cheap. High confidence that a named person
controlled the address is expensive. Do not spend the expensive word on the cheap fact.


Use a sequence you can explain to someone who does not own a tracing tool.

- **Fix the question.** Which value, which time window, which decision. "Trace everything this person ever did" is not a question.
- **Anchor the start.** A seizure, a known payment, a deposit the bank already tied to a customer, an address the subject published. No anchor, no trace. You would be wandering.
- **Walk only cited hops.** Transaction identifiers in the note. Screenshots are illustrations. The identifier is the evidence.
- **Mark hypotheses in a different pen.** Clusters, change guesses, and "probably the exchange" do not get the same line style as a transaction you can point to.
- **Stop at the ramp or at the break.** Write the request for the off-chain record. Name the service, the time, the amount, and the transaction identifier.
- **Corroborate.** A chat, a bank payout, a registry, a travel record, an admission. The chain is the spine. It is not the whole body.

If the off-chain record contradicts the cluster, believe the record you can source,
and demote the cluster. The ledger did not lie. The guess about who stood behind
an address did.


**Scenario.** A fraud case includes a victim payment in bitcoin. You can cite one
transaction: the victim's address pays address V. A tracing tool then shows three
further hops and paints the last cluster orange, labeled as a large exchange. A
second, smaller output at hop two is labeled "possible change" and later sends a
modest amount to an address that appears in the target's public social-media bio.

**Write the briefing lines, carefully:**

- One sentence you can say at high confidence, using only the victim transaction.
- One sentence for the orange cluster, with the confidence and the missing fact.
- Whether the social-media address identifies the target as the owner of address V, or only joins a later hypothesis. Say which.
- The lawful request you would send the exchange: what you have, what you want, and the decision it would change.
- The sentence you will delete, the one that says the target "cashed out" because the tool used the color orange.

Orange is not an identity. It is a suggestion that you go and get one.`

export default function CryptocurrencyTracingForAnalystsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Cryptocurrency Tracing for Analysts"
        subtitle="What a public ledger can cite, what a cluster only suggests, and why the off-ramp is a request for a name rather than the name itself."
        humorSubtitle="The chain of custody is a transaction hash. The rest is a hypothesis in a brighter color."
        readTime={20}
        difficulty="Intermediate"
        category="Financial Intelligence"
        mascot="foundations"
        mascotMessage="Cite the hop you can point at. Task the hop that has a customer file."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="cryptocurrency-tracing-for-analysts" />
      </MicroLesson>
    </LessonContainer>
  )
}
