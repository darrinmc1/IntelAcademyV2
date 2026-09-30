import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trade-Based Money Laundering - The Intel Analyst Academy",
  description:
    "How analysts spot trade-based money laundering by comparing invoices, shipping documents, customs data, and payments, including over- and under-invoicing and phantom goods.",
}

const topicContent = `Trade-based money laundering moves value by lying about a commercial transaction.
The bank sees a payment for goods. The port may see a container. Customs may see a
declaration. Somewhere in that set, the price, the quantity, or the goods themselves
do not match the rest. The gap is the money, wearing a bill of lading as a costume.

Cash placement is loud. A trade invoice can be quiet, because buying and selling
across borders is what honest companies do all day. This lesson is how you compare
the documents instead of admiring the word "invoice."


An invoice is a claim: this buyer owes this seller this amount for this thing. If
you can inflate or shrink that claim, you can move value between colluding parties
while every individual form looks like commerce.

You are not learning how to build a false shipment. You are learning the four
distortions analysts compare, and the records that make each one visible.

### Over-invoicing

The buyer pays more than the goods are worth. Value moves from buyer to seller on
top of any real trade. If the buyer sits where illicit funds need a reason to leave,
the extra price is the exit. Your check is the unit price against a credible market
range for that good, on that route, in that season. "Expensive" is not a finding.
"Four times the published trade range, with no quality difference in the description"
is a finding you can write.

### Under-invoicing

The buyer pays less than the goods are worth. Value moves the other way: the seller
is giving something away, or the real payment is happening somewhere else. Under-invoicing
also shows up in customs fraud that has nothing to do with laundering. Motive is a
hypothesis. The price gap is the fact.

### Multiple invoicing

The same shipment is used to justify more than one payment. One container, two
banks, two stories. This one dies quickly if you can tie payments to a single
transport document and a single set of container or bill numbers. If you cannot,
say you cannot. Duplicate invoices are a lead only when the shipment identifiers match.

### Phantom or misdescribed goods

Nothing shipped, or something else shipped. The payment still moved. Phantom trade
is the version with no boat. Misdescription is the version with a boat and the wrong
noun: "plastic household articles" in the declaration, machinery on the invoice, or
a weight that cannot belong to the goods named. You do not need to be a commodity
specialist to notice that a declared tonne of cotton does not weigh what the
container's paperwork says. You need the two numbers in the same paragraph.


Trade laundering collapses when one document has to agree with another. Collect the
set, then make them argue.

### The comparison set

- **Commercial invoice.** Who sells, who buys, what good, what unit price, what quantity, what total, what Incoterms or delivery terms if stated.
- **Transport document.** Bill of lading, air waybill, or equivalent. Shipper, consignee, ports, dates, weight, and a reference number you can reuse.
- **Customs declaration.** What the border was told. Description, tariff heading if you have it, quantity, value, origin.
- **Payment record.** Who paid whom, through which institutions, on what date, against which invoice number.

If you hold only the payment, you hold a wire with a memo line. Memo lines are
literature. The other three documents are the test.

### A usable discrepancy is specific

Write discrepancies as pairs:

- Invoice quantity 10,000 units; bill of lading weight consistent with about 400.
- Invoice unit price several times a published range you cite; no grade or specification that would explain it.
- Payment thirty days before the bill of lading exists, and no warehouse or prepayment term in the contract.
- Consignee on the bill of lading is not the buyer on the invoice, and nobody can say who the consignee is.

"The trade looks suspicious" is what you say before you have done this. After you
have done this, you have a list.


Unit price is the cleanest tell, and the easiest one to botch.

### Do the arithmetic in the open

- State the unit: per kilogram, per piece, per container. Mixing units is how honest exports get accused.
- State the comparator: a customs average, a commodity quote, a prior shipment between the same parties, or the company's own earlier invoices. Name it.
- State the band you would still call ordinary. Commodities move. A modest gap is trade. A gap that would put the buyer out of business if the goods were real is a question.
- State what you do not know: quality, brand, warranty, or a long-term contract price.

If you cannot name the comparator, do not invent a percentage and call it analysis.
Say the price cannot be checked yet, and task the check.

### Quantity and route

A buyer with no warehouse, no staff, and a pattern of high-value shipments is a
profile problem wearing a trade costume. So is a route that adds ports without a
freight reason you can explain. Transshipment happens in real logistics. It is a
fact to explain, not a slogan. Ask who controlled the goods at each leg and whether
the documents were rewritten there.


Some trade schemes never intend the invoice to match a market price, because the
invoice is only there to satisfy a bank or a currency control. The classic teaching
example is offset arrangements in which goods flow one way and a separate, informal
settlement covers the rest. You will see this discussed as the Black Market Peso
Exchange and under other local names.

For an analyst, the visible half is often boring: a firm importing ordinary goods,
paying an exporter, with prices that are a little off and paperwork that is a little
thin. The other half of the settlement may be cash, a third-country payment, or a
debt cancelled somewhere you cannot see. Brief what you can see. Label the offset
as a hypothesis if you do not have it. Do not draw the invisible half in ink.

Informal value transfer sits next to this. People move obligations without moving
a bank payment that matches the goods. Your chart should show a dashed line when
the settlement is inferred, and a solid line only when a payment record exists.
Dashed lines are allowed. Pretending they are solid is not.


A note on goods that are restricted, dual-use, or sanctioned: the identity of the
good can matter as much as the price. Misdescription is then not only a laundering
question. It may be an export-control or sanctions question, which is a different
legal regime and often a different office. This lesson will not teach you commodity
classification or how to ship anything. It will tell you to copy the description
exactly as each document states it, and to flag a mismatch for the people whose
job includes the control list. Quote the documents. Do not upgrade yourself into
a licensing authority because you once read a headline about sensors.


Most ugly trade is not laundering. It is sloppy paperwork, a middleman taking a
fat margin, transfer pricing for tax, or a clerk who copied last year's invoice.
Those are still worth naming, because a briefing that yells "laundering" at a tax
structure will not be invited back.

Hold the laundering judgment until you can say most of the following:

- The parties are linked, or you have a reason to think they are colluding.
- The price or quantity gap is large against a named comparator.
- The payment and the goods do not describe the same event.
- A benign explanation was considered: quality, contract price, routing, or a documented prepayment.

If you have the gap and not the link, brief the gap and task the ownership. The
next lesson, on shells and beneficial ownership, is where that task usually goes.


**Scenario.** You hold four documents for one supposed shipment of ceramic tiles
from a trading company in Country A to an importer in Country B.

- Invoice: 2,000 square metres, unit price about eight times a published export range for ordinary ceramic tile, total paid in full.
- Bill of lading: one container, weight in a range that freight forwarders would treat as far too light for that quantity of tile, consignee is a different company than the invoice buyer.
- Customs declaration in Country B: "plastic kitchenware," a much lower value, filed a week after the payment.
- Payment: one wire from the invoice buyer to the trading company, invoice number in the reference, no other trade between them in the past year.

**Write the comparison, not a speech:**

- Three discrepancies, each as a pair of documents that disagree.
- Which discrepancy could still be a paperwork error, and which one is hardest to explain as a mistake.
- Whether you will call this a laundering finding or a trade-document lead. Pick one and justify it in four lines.
- The ownership question you still cannot answer from these four pages.

If your write-up never mentions the weight, the container did not get a vote. It
should.`

export default function TradeBasedMoneyLaunderingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Trade-Based Money Laundering"
        subtitle="Compare the invoice, the shipment, the customs line, and the payment. The laundering, when it is there, is the gap between them."
        humorSubtitle="The memo line says tiles. The container weighs about as much as a polite excuse."
        readTime={18}
        difficulty="Intermediate"
        category="Financial Intelligence"
        mascot="foundations"
        mascotMessage="Put the four documents in one note. If they still agree, you may not have a scheme. You may have trade."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="trade-based-money-laundering" />
      </MicroLesson>
    </LessonContainer>
  )
}
