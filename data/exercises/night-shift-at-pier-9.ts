import type { Exercise } from "@/lib/exercises/types"

/**
 * Beginner — crime series linkage and source grading.
 * Teaching core: Admiralty grading, circular reporting (R3/R6), and the one
 * diagnostic detail everybody misses (the locked junction box in R2).
 * Entirely fictional: people, companies and places are invented.
 */
export const nightShiftAtPier9: Exercise = {
  slug: "night-shift-at-pier-9",
  title: "Night Shift at Pier 9",
  level: "Beginner",
  domain: "Crime analysis",
  estimatedMinutes: 25,
  skills: ["Admiralty source grading", "Spotting circular reporting", "Linking a crime series", "Writing a BLUF"],
  summary:
    "Five break-ins at a port logistics park in nineteen days. A van, a pawn record, two whispers about the same brothers — and one detail everybody ignores.",
  scenario: {
    setting:
      "Pier 9 Logistics Park is a fenced compound of 22 storage and bonded-warehouse units on the Port Calder waterfront. Between 2 and 20 August there were five overnight break-ins. Tenants are furious, the security contractor is defensive, and the local paper has started using the words 'crime wave'. The Harbour Crime Unit wants to know whether it is dealing with one problem or five before it commits two detectives to it for a month. You have six pieces of reporting. Some are better than others.",
    requester: "Detective Sergeant Imogen Vale, Harbour Crime Unit, Port Calder Police",
    keyQuestion:
      "Are the five Pier 9 break-ins the work of one group, and what is the most likely explanation for how they keep getting in unseen?",
    deadline: "Written assessment by 1200 tomorrow. DS Vale briefs her inspector at 1400.",
  },
  reports: [
    {
      id: "R1",
      title: "Incident summary: Pier 9 break-ins",
      sourceType: "Official record",
      source:
        "Port Calder Police records system. Compiled by the Harbour Crime Unit's intake officer from attending officers' reports and tenant statements.",
      dateTime: "21 Aug, 0900 (covers 2–20 Aug)",
      body: `Five incidents, all at Pier 9 Logistics Park, all between 0140 and 0420:
• 02 Aug (Unit 6) — padlock cut on roller door; power tools taken.
• 07 Aug (Unit 11) — padlock cut; e-bike batteries and chargers taken. East-side CCTV camera found disconnected.
• 11 Aug (Unit 14) — padlock cut; 12 cordless drills taken. Tenant recorded the serial numbers.
• 16 Aug (Unit 3) — padlock cut; 40 tool batteries taken. East-side camera disconnected.
• 20 Aug (Unit 19) — padlock cut; tool kits taken. East-side camera disconnected.
In all five, the goods were new, boxed and easy to resell. No fingerprints recovered. Bolt-cutter marks on the padlocks look similar but have not been forensically compared.`,
      expected: {
        reliability: "B",
        credibility: 2,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [1, 2],
        rationale:
          "Police records are dependable and accountable (A–B), but this is a summary compiled from tenants and attending officers rather than independent forensics, so 'probably true' (2) fits best. Some analysts give 1 for the dates and times, which several tenants confirm — defensible.",
        flags: [
          "The identical method and the east camera going down three times are the backbone of any linkage argument.",
          "The bolt-cutter marks have NOT been compared. Similar-looking is not forensic linkage.",
        ],
      },
    },
    {
      id: "R2",
      title: "Security supervisor's shift log",
      sourceType: "Human source (first-hand)",
      source:
        "Night supervisor at Sentrel Security, the park's contracted guard company. Has given the Harbour Crime Unit six reports in two years; five were later corroborated.",
      dateTime: "20 Aug, 0630",
      body: `A white van with roof ladder racks was seen idling with its lights off near the east gate on the nights of 07, 16 and 20 Aug — the same nights the east camera went down. On 16 Aug I got a partial plate: ZQ-4, then two characters I couldn't read. The van left towards Kessler Bay each time.
The east camera's power and network run through a junction box behind a locked steel gate inside the compound. After 16 Aug and 20 Aug the box was found closed and locked, no damage, with the cable unplugged inside. Keys to that gate are held by Sentrel staff (four people) and two tenant site managers. I have checked our key register: no keys are recorded missing.`,
      expected: {
        reliability: "B",
        credibility: 2,
        acceptableReliability: ["B", "C"],
        acceptableCredibility: [2, 3],
        rationale:
          "A first-hand observer with a solid record (five of six reports corroborated): usually reliable, B. The van sightings line up exactly with the camera outages in R1, so the information is probably true (2) — but nobody has independently confirmed the van or the plate yet.",
        flags: [
          "The locked, undamaged junction box is the most diagnostic detail in the pack: it points to someone with a key.",
          "The supervisor is reporting something that implicates his own company's keyholders — a statement against interest, which usually adds credibility.",
        ],
      },
    },
    {
      id: "R3",
      title: "Crime Stoppers tip",
      sourceType: "Anonymous tip",
      source:
        "Anonymous phone call to the Crime Stoppers line. No call-back number. No previous reporting can be linked to the caller.",
      dateTime: "18 Aug, 2215",
      body: `Caller states: "The Pier 9 jobs are the Haskett brothers from Kessler Bay. They're flogging the tools at the Sunday market on the foreshore. Everyone knows it."
The caller would not say how they know. The call lasted 40 seconds.`,
      expected: {
        reliability: "F",
        credibility: 3,
        acceptableReliability: ["F"],
        acceptableCredibility: [3, 4, 6],
        rationale:
          "An anonymous caller with no track record: reliability cannot be judged (F). E would mean you know the source has been unreliable before — you don't. The content is partly consistent with R5 (a Haskett did sell stolen drills), so 'possibly true' (3) is fair; 6 is defensible if you grade it in isolation.",
        flags: ["'Everyone knows it' is rumour language. The caller gives no basis for the claim."],
      },
    },
    {
      id: "R4",
      title: "Online listing: Kessler Bay Buy Swap Sell",
      sourceType: "Open source",
      source:
        "Public post in a community buy-and-sell group, captured by the Harbour Crime Unit's online monitoring. The seller account ('tradie_deals_88') was created three weeks ago and has no other posts or profile details.",
      dateTime: "17 Aug, 0912 (post time)",
      body: `"40 x 18V tool batteries, brand new in packaging, plus 2 e-bike batteries. Cash only. Pick up Kessler Bay. No time wasters."
The photo shows boxed batteries of the same brand and model as those stolen from Unit 3 on 16 Aug. Batch numbers are not visible. The post was deleted at 1430 the same day.`,
      expected: {
        reliability: "F",
        credibility: 3,
        acceptableReliability: ["F"],
        acceptableCredibility: [2, 3, 6],
        rationale:
          "The listing itself is a captured fact, but the account behind it is unknown (F). Same brand, same model, same quantity the day after 40 were stolen makes it more than coincidence — 'possibly true' (3) that these are the stolen goods, and some analysts would argue 2. It is not confirmed: no batch numbers.",
        flags: [
          "The listing proves an offer was made, not that the batteries are stolen. Keep the fact and the inference apart.",
          "Deleting the post within hours is suggestive, not proof.",
        ],
      },
    },
    {
      id: "R5",
      title: "Second-hand dealer register and serial check",
      sourceType: "Official record",
      source:
        "Statutory register kept by Calder Cash Exchange, a licensed second-hand dealer that must record each seller's photo ID. Serial check run by the Harbour Crime Unit against the Unit 14 stock list.",
      dateTime: "Register entry 12 Aug, 1047; serial check 19 Aug",
      body: `Seller presented a driver licence in the name of Marcus HASKETT, address Kessler Bay. Sold 4 cordless drills, new in box, for $380 in total.
Police serial check: 2 of the 4 serials match drills stolen from Unit 14 on 11 Aug. The other 2 serials are not on any stolen-property list.
The dealer's counter CCTV is kept for 30 days. It has not yet been requested.`,
      expected: {
        reliability: "B",
        credibility: 1,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [1, 2],
        rationale:
          "Statutory dealer registers are reliable records (A–B; B allows for a borrowed or false ID). The key fact — two serials match stolen stock — is confirmed by an independent police check (1). Note what it confirms: drills from one incident were sold under Marcus Haskett's licence. Not that he stole them, and not that he's linked to the other four incidents.",
        flags: [
          "Confirms one link to one incident — not the series.",
          "Identity rests on the licence. The counter CCTV would confirm who actually sold the drills, and it is deleted after 30 days.",
        ],
      },
    },
    {
      id: "R6",
      title: "Information report: registered source HS-219",
      sourceType: "Human source (second-hand)",
      source:
        "Registered informant handled by a Kessler Bay patrol constable. Four of HS-219's five previous reports were corroborated.",
      dateTime: "19 Aug, 1630",
      body: `HS-219 states: "Word around Kessler Bay is that the Haskett brothers are doing the Pier 9 warehouses and selling the gear at the Sunday market."
HS-219 did not see any of this personally and could not say who he heard it from.
Handler's comment: source is usually on the money, but this is pub talk.`,
      expected: {
        reliability: "B",
        credibility: 3,
        acceptableReliability: ["B", "C"],
        acceptableCredibility: [3, 4],
        rationale:
          "A source with a good track record (B) passing on something he didn't witness. Grade the information on its own merits: it is hearsay, almost word for word the anonymous tip in R3 — possibly true (3) at best. Crucially, it does not corroborate R3: the two very likely share an origin, so together they are one rumour, not two sources.",
        flags: [
          "Near-identical wording to R3 ('Haskett brothers', 'Sunday market'): probable circular reporting.",
          "A reliable source can pass on unreliable information. B3 is a perfectly normal grade.",
        ],
      },
    },
  ],
  modelAnswer: {
    mustAddress: {
      label: "the keyholder question — the east-camera junction box was found locked and undamaged",
      keywords: ["keyholder", "key-holder", "key holder", "keys", "key access", "insider", "inside help", "inside job", "guard", "staff", "junction box", "sentrel"],
    },
    bluf: "We assess the five Pier 9 break-ins are likely the work of one group (moderate confidence): same method, same time window, same van. There is a roughly even chance they have help from a keyholder — the east-camera junction box was found locked and undamaged after two outages (low confidence). The only hard link to a name is Marcus Haskett's sale of drills from one incident; claims that the 'Haskett brothers' run the series are uncorroborated.",
    keyJudgments: [
      {
        statement:
          "It is likely (60–75%) that one group committed all five break-ins, based on the identical method (cut padlocks, boxed resale goods), the 0140–0420 window, and the same van seen on the three nights the east camera went down (R1, R2).",
        confidence: "moderate",
      },
      {
        statement:
          "There is a roughly even chance (45–55%) that the group has help from someone with keys to the east-camera junction box, because the box was found locked and undamaged after two outages (R2). This rests on one observation and could also be explained by a copied key or a box left unlocked.",
        confidence: "low",
      },
      {
        statement:
          "Reporting that the Haskett brothers run the series is uncorroborated: the anonymous tip (R3) and HS-219 (R6) very likely repeat the same local rumour, and the dealer record (R5) ties Marcus Haskett to goods from one incident only.",
        confidence: "moderate",
      },
    ],
    gaps: [
      {
        id: "G1",
        gap: "Who owns or uses the white van with the partial plate ZQ-4__?",
        whyItMatters:
          "The van is the only physical link across three of the five nights. Resolving it could tie the series to named people — or to a keyholder.",
        collection:
          "Partial-plate query against the vehicle registry (white vans, ZQ-4 prefix, Kessler Bay area); ANPR on the port approach roads; canvass nearby businesses' cameras.",
        keywords: ["van", "plate", "zq", "rego", "registration", "vehicle", "anpr"],
        minMatches: 1,
      },
      {
        id: "G2",
        gap: "Who has access to the junction-box keys, and where were the keyholders on the nights of the break-ins?",
        whyItMatters:
          "The box was found locked and undamaged after two outages. Either someone used a key, or the lock was picked or a key copied — each points the investigation somewhere different.",
        collection:
          "Interview the six keyholders; Sentrel rosters and gate-access logs; examine the lock for tampering; check for copied keys.",
        keywords: ["key", "junction", "box", "insider", "staff", "guard", "keyholder", "sentrel", "cctv", "camera", "roster", "access"],
        minMatches: 2,
      },
      {
        id: "G3",
        gap: "Did Marcus Haskett actually sell the drills, and how did he come by them?",
        whyItMatters:
          "The register proves his licence was used for one sale of stolen goods from one incident. Whether he is a burglar, a fence, or someone who lent his licence is unknown.",
        collection:
          "Request the dealer's counter CCTV before the 30-day retention runs out; interview Marcus Haskett; trace the other two drills.",
        keywords: ["marcus", "pawn", "dealer", "licence", "license", "counter cctv", "sold the drills", "calder cash", "identity", "fence"],
        minMatches: 1,
      },
      {
        id: "G4",
        gap: "Are the anonymous tip (R3) and HS-219's report (R6) independent — where did the 'Haskett brothers' story start?",
        whyItMatters:
          "If both trace back to one rumour, the Haskett case rests on a single unverified claim plus one pawn sale.",
        collection: "Ask HS-219's handler to establish where the source heard it; re-contact Crime Stoppers for any call metadata.",
        keywords: ["rumour", "rumor", "same source", "independent", "circular", "where did", "origin", "word around", "tip", "informant", "hs-219", "crime stoppers", "anonymous"],
        minMatches: 2,
      },
      {
        id: "G5",
        gap: "Are the batteries in the online listing the ones stolen from Unit 3 — and who is behind 'tradie_deals_88'?",
        whyItMatters:
          "A match would link a second incident to a seller, and identifying the account holder could connect the sales to the van or the Hasketts.",
        collection:
          "Legal request to the platform for account details; compare batch numbers with the Unit 3 stock list; an approved test purchase.",
        keywords: ["listing", "listed", "online", "post", "account", "tradie_deals", "tradie deals", "batteries", "buy swap", "seller", "facebook", "marketplace"],
        minMatches: 2,
      },
      {
        id: "G6",
        gap: "Do the bolt-cutter marks on the five padlocks match?",
        whyItMatters: "Tool-mark comparison could physically link the incidents. Right now linkage rests on method and timing alone.",
        collection: "Submit the cut padlocks for forensic tool-mark comparison.",
        keywords: ["bolt", "cutter", "padlock", "tool mark", "toolmark", "tool-mark", "forensic", "fingerprint", "dna"],
        minMatches: 1,
      },
    ],
    hypotheses: [
      {
        id: "H1",
        statement:
          "A single outside crew (possibly the Haskett brothers) is committing all five break-ins and reselling the goods, without inside help.",
        kind: "alternative",
        keywords: ["haskett", "brothers", "one group", "single group", "same group", "one crew", "single crew", "same crew", "same offender", "organised", "organized", "outside crew", "external"],
        minMatches: 1,
        matrix: { R1: "C", R2: "I", R3: "C", R4: "C", R5: "C", R6: "C" },
        assessment:
          "Fits the method and timing, but struggles with R2: an outside crew without a key would have to force the junction box, and it was found locked and undamaged. Only survives if a key was copied or the box was left unlocked.",
      },
      {
        id: "H2",
        statement:
          "A single crew is committing the series with help from someone who holds keys to the east-camera junction box (a guard or tenant manager).",
        kind: "lead",
        keywords: ["insider", "inside job", "inside help", "key", "guard", "security staff", "staff", "sentrel", "keyholder", "manager", "employee", "junction"],
        minMatches: 1,
        matrix: { R1: "C", R2: "C", R3: "C", R4: "C", R5: "C", R6: "C" },
        assessment:
          "Fits everything in the pack, including the locked, undamaged junction box. Weakest point: that rests on a single observation (R2) — the box could simply have been left unlocked.",
      },
      {
        id: "H3",
        statement: "The break-ins are unrelated, opportunistic thefts by different offenders.",
        kind: "null",
        keywords: ["unrelated", "opportunistic", "different offenders", "different people", "separate", "not linked", "unconnected", "coincid", "multiple offenders", "copycat"],
        minMatches: 1,
        matrix: { R1: "I", R2: "I", R3: "I", R4: "N", R5: "N", R6: "I" },
        assessment:
          "Hard to sustain: identical method, the same 0140–0420 window, the same camera taken down three times and the same van seen on those nights. R3 and R6 also contradict it — but they're one rumour, so don't let them do the heavy lifting.",
      },
    ],
    indicators: [
      "Plate ZQ-4__ resolves to a van linked to the Hasketts (strengthens the one-group judgment) or to a Sentrel guard or tenant manager (strengthens the keyholder judgment).",
      "Another break-in where the junction box is opened without damage (strengthens the keyholder judgment) — or found forced (weakens it).",
      "Serials or batch numbers from Units 3, 6, 11 or 19 surface in dealer registers or listings tied to the same seller.",
      "HS-219 can name an independent, first-hand source — that would make R6 genuine corroboration of R3.",
      "The dealer's counter CCTV shows someone other than Marcus Haskett using his licence.",
    ],
    commonMistakes: [
      "Counting R3 and R6 as two independent sources. Same names, same market, same phrasing: one rumour, heard twice.",
      "Grading the anonymous caller E (unreliable). You know nothing about the caller — that's F.",
      "Treating the online listing as proof the batteries are stolen. The listing is a fact; what it shows is an inference.",
      "Missing the locked, undamaged junction box — the single most diagnostic detail in the pack.",
      "Naming the Haskett brothers as responsible with high confidence on the strength of one pawn sale and a rumour.",
      "Opening the BLUF with a timeline of the incidents instead of the answer.",
    ],
    teachingPoints: [
      "Reliability (the source) and credibility (the information) are graded separately. A reliable informant passing on pub talk is a perfectly normal B3.",
      "Corroboration needs independence. Two reports that trace back to one rumour are one report.",
      "In ACH the useful evidence is the evidence that's inconsistent with some hypotheses — here, the locked junction box.",
      "Keep facts and judgments apart: 'drills from Unit 14 were sold under Marcus Haskett's licence' is a fact; 'the Hasketts did it' is a judgment.",
    ],
  },
  relatedLessons: [
    "/topics/evidence-based-conclusions",
    "/topics/crime-linkage-techniques",
    "/topics/modus-operandi-analysis-techniques",
    "/topics/multi-source-integration",
    "/topics/analysis-competing-hypotheses",
    "/topics/executive-summaries-mastery",
  ],
}
