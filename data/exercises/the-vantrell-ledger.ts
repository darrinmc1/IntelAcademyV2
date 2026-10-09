import type { Exercise } from "@/lib/exercises/types"

/**
 * Intermediate — financial intelligence / trade-based money laundering.
 * Teaching core: red flags vs evidence, registry data is "as filed",
 * non-diagnostic evidence (R6), and the H1-vs-H3 problem (laundering vs
 * capital flight) that only the origin of funds can settle.
 * Entirely fictional: people, companies, places and jurisdictions are invented.
 */
export const theVantrellLedger: Exercise = {
  slug: "the-vantrell-ledger",
  title: "The Vantrell Ledger",
  level: "Intermediate",
  domain: "Financial intelligence",
  estimatedMinutes: 35,
  skills: ["Financial red flags", "Beneficial ownership", "Trade-based money laundering", "Competing hypotheses"],
  summary:
    "A fourteen-month-old freight company moves $2.9 million in four months, and the pumps it imports weigh less than they should. Laundering, a tax dodge — or a messy but honest business?",
  scenario: {
    setting:
      "Vantrell Freight Pty Ltd banks with Tallowmere Mutual, a mid-sized regional bank. Transaction monitoring flagged the account last week and the relationship manager has since visited the company. The bank must decide whether to lodge a suspicious matter report with the regulator and whether to keep the customer. You work in the bank's financial crime intelligence team. You do not decide — you assess, so the people who decide can do it properly. All amounts are in dollars.",
    requester: "Priya Nandakumar, Head of Financial Crime Investigations, Tallowmere Mutual Bank",
    keyQuestion:
      "Is Vantrell Freight likely being used to move illicit funds through trade — and what do we still need to know before the bank acts?",
    deadline: "Assessment to the Financial Crime Committee, Thursday 0900.",
  },
  reports: [
    {
      id: "R1",
      title: "Transaction monitoring alert summary",
      sourceType: "Bank system data",
      source:
        "Tallowmere Mutual's transaction monitoring system, extracted and checked by the alerts team. Covers 1 May – 31 Aug.",
      dateTime: "3 Sep",
      body: `Inbound: 37 transfers totalling $2,864,000 from 11 companies. 29 of the 37 are round amounts ($50,000, $75,000, $95,000). Four of the 11 paying companies list the same registered office as Vantrell: Suite 4, 18 Merchant Lane, an accountant's virtual office.
Outbound: 31 international transfers totalling $2,790,000, usually within 48 hours of an inbound payment — 64% to Velantia Pumpworks Ltd (Republic of Velantia), 36% to an account in the Marrick Islands held by Orrin Bay Trading Ltd.
The balance has never exceeded $40,000. No payroll, rent or utility payments go through this account.`,
      expected: {
        reliability: "A",
        credibility: 1,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [1, 2],
        rationale:
          "The bank's own transaction records are about as reliable as sources get (A), and the amounts and counterparties are confirmed by the records themselves (1). What the transactions mean is analysis; the data is not in doubt.",
        flags: [
          "'No payroll, rent or utility payments' is a gap, not proof: Vantrell may pay those from another bank.",
          "Four payers sharing Vantrell's registered office is a red flag — but small firms often share one accountant.",
        ],
      },
    },
    {
      id: "R2",
      title: "Company registry extract: Vantrell Freight Pty Ltd",
      sourceType: "Official record",
      source: "Government corporate registry search, run by you this morning.",
      dateTime: "4 Sep",
      body: `Registered 14 months ago. Sole director: Callum BRIGHTWATER. Registered office: Suite 4, 18 Merchant Lane (shared with 31 other companies).
Sole shareholder: Orrin Bay Holdings Ltd, incorporated in the Marrick Islands. The Marrick Islands do not publish shareholder or beneficial-ownership registers.
Brightwater is also director of two other companies registered in the last 18 months at the same address. Neither has lodged financial reports.`,
      expected: {
        reliability: "A",
        credibility: 2,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [1, 2, 3],
        rationale:
          "The registry is an authoritative record (A) — of what the company filed, not of what is true. Directors and shareholders can be nominees. 'Probably true' (2) is the usual grade for self-declared registry data.",
        flags: [
          "An offshore parent in a secrecy jurisdiction is a risk factor, not evidence of laundering.",
          "Orrin Bay Holdings owns Vantrell; Orrin Bay Trading receives 36% of its outbound money (R1). The registry can't tell you whether they're related — but you should ask.",
        ],
      },
    },
    {
      id: "R3",
      title: "Partner agency trade data: Vantrell imports",
      sourceType: "Partner agency data",
      source:
        "Border agency import declarations, provided under a formal information-sharing arrangement. The weight comparison was prepared by a border agency trade analyst.",
      dateTime: "6 Sep",
      body: `Three consignments declared as "industrial centrifugal pumps" from Velantia Pumpworks Ltd; consignee Vantrell Freight, Port Calder. Total declared value: $2,130,000. Total gross weight on the bills of lading: 18,400 kg.
Analyst comment: "Pumps of the declared models at this value would typically ship at 55,000–70,000 kg. Either the declared value is inflated roughly threefold or the description is wrong. No physical inspection was carried out on any of the three consignments."`,
      expected: {
        reliability: "B",
        credibility: 2,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [2, 3],
        rationale:
          "A government partner with a formal data-sharing arrangement: usually reliable (B; A is defensible for the raw declarations). The over-valuation finding is an analyst's comparison without physical inspection — probably true (2), not confirmed (1).",
        flags: [
          "Over-invoicing imports is a classic way to move value offshore — but goods described wrongly would produce the same numbers.",
          "Nobody has actually looked at the pumps.",
        ],
      },
    },
    {
      id: "R4",
      title: "Trade press profile",
      sourceType: "Open source",
      source:
        "Article in Cargo Ledger, an industry newsletter, published six months ago. Generally accurate, but its company profiles are based on interviews with the companies themselves.",
      dateTime: "Published 11 Mar",
      body: `"Vantrell Freight is one of Port Calder's fastest-growing importers, says director Callum Brightwater. 'Our Velantian partners give us an edge on price,' he said. The company now employs 40 staff and runs a 3,000-square-metre warehouse on the Port Calder industrial estate."`,
      expected: {
        reliability: "C",
        credibility: 3,
        acceptableReliability: ["B", "C"],
        acceptableCredibility: [3, 4],
        rationale:
          "A generally accurate publication (B–C), but every fact in the piece comes from the company and none was checked. Possibly true (3) — and once you've read R5 (two staff, a shared unit), 'doubtful' (4) is defensible for the 40-staff, 3,000 m² claim.",
        flags: ["This is the company talking, reprinted. It isn't independent reporting."],
      },
    },
    {
      id: "R5",
      title: "Relationship manager's site visit note",
      sourceType: "Human source (first-hand)",
      source:
        "Tallowmere Mutual relationship manager, eleven years with the bank. Her previous site-visit reports have been accurate.",
      dateTime: "5 Sep, 1415",
      body: `Visited the address on file: Unit 7, Lot 22, Port Calder industrial estate. It is a small shared unit (roughly 300 m²) with signage for Vantrell and three other businesses. Two people present; one described them as "the operations team". No pumps, pallets or forklifts visible.
Mr Brightwater was friendly and said the pumps "go straight from the wharf to customers' sites, so there's nothing to see here". He offered to send invoices.`,
      expected: {
        reliability: "B",
        credibility: 2,
        acceptableReliability: ["A", "B", "C"],
        acceptableCredibility: [1, 2, 3],
        rationale:
          "An experienced first-hand observer with a good record (B). What she saw is probably true (2) — but it is one visit on one afternoon. It sits badly with the 40 staff and 3,000 m² warehouse claimed in R4.",
        flags: [
          "'Nothing to see here' fits an honest business that ships direct — and one that has nothing to ship. Not diagnostic on its own.",
        ],
      },
    },
    {
      id: "R6",
      title: "Letter from Vantrell's accountant",
      sourceType: "Subject-provided",
      source:
        "Letter from Vantrell's external accountant, sent in response to the bank's request for information. The accountant's firm runs the virtual office at Suite 4, 18 Merchant Lane.",
      dateTime: "8 Sep",
      body: `"The round-sum payments are customer deposits for pump orders. Vantrell forwards them to the manufacturer, Velantia Pumpworks, and to its regional distributor, Orrin Bay Trading, which handles shipping. Pumps are delivered directly from the wharf to customers. Three sample invoices are attached."
The attached invoices show unit prices matching the declared customs values. They are on Vantrell letterhead and are not signed by any customer.`,
      expected: {
        reliability: "C",
        credibility: 3,
        acceptableReliability: ["C", "D"],
        acceptableCredibility: [3, 4],
        rationale:
          "The subject explaining itself through a paid adviser — who also runs the virtual office that several payers share (C at best; D is defensible). The explanation is possibly true (3), but the 'evidence' is Vantrell's own invoices, which naturally match Vantrell's own customs declarations. They prove consistency, not value.",
        flags: [
          "The explanation fits every hypothesis — legitimate business, laundering and capital flight alike. It is non-diagnostic.",
          "Invoices a company issues itself can't verify that company's prices.",
        ],
      },
    },
  ],
  modelAnswer: {
    mustAddress: {
      label: "the over-invoicing picture — value moving offshore through inflated import prices",
      keywords: ["over-invoic", "overinvoic", "over-valu", "overvalu", "inflat", "launder", "offshore", "value transfer", "trade-based", "trade based", "tbml"],
    },
    bluf: "We assess it is likely Vantrell Freight is being used to move value offshore through over-invoiced pump imports (moderate confidence). We cannot yet say whether that money is criminal proceeds or the owners' own funds avoiding tax: the origin of the $2.9 million paid in by 11 companies is the deciding unknown. A legitimate-business explanation is unlikely, and the accountant's letter fits every hypothesis, so it does not reduce concern.",
    keyJudgments: [
      {
        statement:
          "It is likely (60–75%) that Vantrell's imports are over-invoiced to move value offshore, based on the roughly threefold weight-to-value gap (R3), inflows forwarded overseas within 48 hours with no operating costs on the account (R1), and premises that don't match the claimed operation (R5).",
        confidence: "moderate",
      },
      {
        statement:
          "We cannot distinguish laundering of criminal proceeds from tax-motivated capital flight (low confidence either way). It turns on where the inflows from the 11 paying companies originate — four of which share Vantrell's registered office.",
        confidence: "low",
      },
      {
        statement:
          "A fully legitimate explanation is unlikely (20–40%). The accountant's letter (R6) is consistent with every hypothesis, and invoices Vantrell issued itself cannot verify Vantrell's prices.",
        confidence: "moderate",
      },
    ],
    gaps: [
      {
        id: "G1",
        gap: "Where does the money paid in by the 11 companies come from — and are they real customers who received pumps?",
        whyItMatters:
          "This decides between laundering (criminal origin) and capital flight or tax evasion (clean money moved offshore). Four of the payers share Vantrell's registered office.",
        collection:
          "Due diligence on the 11 payers (registry, financial reports, adverse media); request delivery records and customer contracts; check whether any payers bank with Tallowmere.",
        keywords: ["payer", "paying", "pays", "paid in", "inbound", "source of funds", "source of the funds", "origin of the funds", "origin of funds", "where the money", "where does the money", "11 compan", "eleven compan", "customers"],
        minMatches: 1,
      },
      {
        id: "G2",
        gap: "Who is the beneficial owner behind Orrin Bay Holdings — and is it connected to Orrin Bay Trading?",
        whyItMatters:
          "If the person who owns Vantrell also controls where 36% of its money goes, the 'distributor' payments may be the owner paying himself offshore.",
        collection:
          "Request a beneficial-ownership declaration from Vantrell; commercial corporate databases; correspondent-bank enquiries; ask the director directly at a customer review.",
        keywords: ["beneficial", "ubo", "orrin bay holdings", "who owns", "who controls", "ultimate", "ownership", "shareholder", "parent"],
        minMatches: 1,
      },
      {
        id: "G3",
        gap: "Are Velantia Pumpworks and Orrin Bay Trading genuine, independent businesses?",
        whyItMatters:
          "Trade-based laundering needs a cooperative counterparty. A real, unrelated manufacturer selling at market prices would undercut the over-invoicing theory.",
        collection:
          "Open-source checks on Velantia Pumpworks (trade listings, export records); correspondent-bank enquiries; check whether Orrin Bay Trading exists anywhere outside these payments.",
        keywords: ["velantia pumpworks", "pumpworks", "supplier", "manufacturer", "distributor", "orrin bay trading", "recipient", "counterpart", "outbound", "overseas"],
        minMatches: 1,
      },
      {
        id: "G4",
        gap: "What are the goods actually worth — do the pumps exist and match the declared models?",
        whyItMatters:
          "The over-valuation finding (R3) rests on shipping weights alone. Inspection or independent pricing would confirm or kill the over-invoicing hypothesis.",
        collection:
          "Ask the border agency to inspect the next consignment; independent price benchmarking for the declared models; delivery confirmations from customers.",
        keywords: ["inspect", "physical", "real value", "true value", "actual value", "declared value", "weight", "pumps exist", "price", "pricing", "benchmark", "over-invoic", "overinvoic", "over-valu", "overvalu"],
        minMatches: 1,
      },
      {
        id: "G5",
        gap: "Does Vantrell have real operations — staff, premises, other bank accounts?",
        whyItMatters:
          "R4 claims 40 staff and a 3,000 m² warehouse; R5 found two people in a shared unit; the account shows no payroll or rent. Operations elsewhere would weaken the front-company reading.",
        collection:
          "Ask Vantrell for its other bank accounts and payroll arrangements; check tax registrations and employee numbers; a second, unannounced site visit.",
        keywords: ["staff", "employees", "payroll", "warehouse", "premises", "operations", "other bank", "other account", "rent", "real business", "genuine business"],
        minMatches: 1,
      },
    ],
    hypotheses: [
      {
        id: "H1",
        statement:
          "Vantrell is being used for trade-based money laundering: illicit funds paid in by front or complicit companies are moved offshore under cover of over-invoiced pump imports.",
        kind: "lead",
        keywords: ["launder", "tbml", "trade-based", "trade based", "illicit", "proceeds", "dirty money", "criminal money", "front compan", "layering", "integration"],
        minMatches: 1,
        matrix: { R1: "C", R2: "C", R3: "C", R4: "N", R5: "C", R6: "C" },
        assessment:
          "Fits R1, R2, R3 and R5: the textbook trade-based laundering picture. But nothing in the pack shows the inflows are criminal proceeds — which is the 'laundering' part.",
      },
      {
        id: "H2",
        statement: "Vantrell is a genuine, fast-growing importer with poor paperwork; the anomalies have innocent explanations.",
        kind: "null",
        keywords: ["legitimate", "legit", "genuine", "innocent", "honest", "real business", "lawful", "bona fide", "poor documentation", "paperwork", "sloppy", "badly run", "messy"],
        minMatches: 1,
        matrix: { R1: "I", R2: "N", R3: "I", R4: "C", R5: "I", R6: "C" },
        assessment:
          "Struggles with three separate pieces of evidence: the weight-to-value gap (R3), money leaving within 48 hours with no operating costs (R1), and a site that doesn't look like a $2.8 million pump business (R5). Not impossible — just increasingly expensive to believe.",
      },
      {
        id: "H3",
        statement:
          "The money is clean but is being moved offshore to avoid tax or capital controls, using inflated import prices (tax evasion / capital flight).",
        kind: "alternative",
        keywords: ["tax", "evasion", "capital flight", "avoid", "profit shifting", "transfer pricing", "own money", "owner's money", "owners' money", "capital control", "exchange control"],
        minMatches: 1,
        matrix: { R1: "C", R2: "C", R3: "C", R4: "N", R5: "C", R6: "C" },
        assessment:
          "Fits exactly as well as H1. If the 11 payers are real customers paying with clean money, inflated import prices would be shifting profit offshore — a crime, but tax crime rather than laundering of criminal proceeds. Nothing in the pack separates H1 from H3.",
      },
    ],
    indicators: [
      "The 11 payers turn out to be genuine customers with traceable pump deliveries (weakens H1; points to H3 or H2).",
      "Physical inspection or price benchmarking shows the pumps are worth what was declared (weakens H1 and H3).",
      "Orrin Bay Trading is linked to Orrin Bay Holdings or to Mr Brightwater (strengthens H3 — or H1 if the inflows prove dirty).",
      "The payers' own accounts are fed by cash-intensive or scam-linked deposits (strengthens H1 over H3).",
      "Vantrell discloses other accounts carrying payroll and rent for a real 40-person operation (weakens the front-company reading).",
    ],
    commonMistakes: [
      "Treating the offshore parent as proof of laundering. Secrecy jurisdictions are a risk factor; plenty of lawful companies use them.",
      "Accepting the accountant's letter as an explanation. It's the subject's story, and it fits laundering just as well as honesty.",
      "Grading the company registry as 'confirmed'. It records what was filed, not what is true.",
      "Forgetting the capital-flight / tax-evasion alternative. Over-invoicing moves value; it doesn't tell you whose value it is.",
      "Writing 'the bank should close the account'. That's the business's decision — give options and their trade-offs.",
      "Missing the 'Orrin Bay' name overlap between the parent company (R2) and the outbound recipient (R1).",
    ],
    teachingPoints: [
      "Red flags are reasons to ask questions, not conclusions. Stack them up and look for the explanation that survives all of them.",
      "Non-diagnostic evidence (R6) can feel reassuring while telling you nothing. If it fits every hypothesis, it doesn't help you choose.",
      "Laundering needs criminal proceeds. Without the origin of funds you can show value is moving — not that it's dirty.",
      "Name collisions are leads, not links. 'Orrin Bay Holdings' and 'Orrin Bay Trading' could be one owner, or a coincidence a registry check would settle.",
    ],
  },
  relatedLessons: [
    "/topics/trade-based-money-laundering",
    "/topics/shell-companies-beneficial-ownership",
    "/topics/suspicious-activity-reports",
    "/topics/money-laundering-stages",
    "/topics/financial-network-mapping",
    "/topics/analysis-competing-hypotheses",
  ],
}
