import type { Exercise } from "@/lib/exercises/types"

/**
 * Advanced — strategic / cyber threat assessment with attribution under
 * uncertainty. Teaching core: the intrusion chain (who got access, who used
 * it, who claimed it), intent vs activity, media-laundered circular
 * reporting (R7), and a forecast that doesn't depend on solving attribution.
 * Entirely fictional: states, agencies, companies, groups and places are invented.
 */
export const drySeason: Exercise = {
  slug: "dry-season",
  title: "Dry Season",
  level: "Advanced",
  domain: "Strategic & cyber threat",
  estimatedMinutes: 45,
  skills: ["Attribution under uncertainty", "Circular reporting via media", "ACH with deception", "Indicators & warnings"],
  summary:
    "Three regional water utilities, one remote-access product, three candidate culprits and a newspaper that has already decided. The minister wants a six-month outlook.",
  scenario: {
    setting:
      "Over five weeks, intruders got into the remote pump-station management systems of three regional water utilities in the state of New Arden. Nobody lost water, but at one site a treatment setpoint was changed and reverted by an operator within minutes. The intrusions come as New Arden negotiates the Tarrant Corridor agreement — a contentious water-and-mining deal opposed by local activists and by the neighbouring Republic of Velantia, which says it threatens its own river supply. Ministers are hearing different stories from different people. The Department of Home Security wants one assessment.",
    requester: "Director, Critical Infrastructure Resilience, New Arden Department of Home Security",
    keyQuestion:
      "Who is most likely behind the intrusions at the three utilities, and what is the outlook for the next six months?",
    deadline: "Ministerial brief due Friday 1700. The minister reads the first paragraph only.",
  },
  reports: [
    {
      id: "R1",
      title: "Regulator's consolidated incident report",
      sourceType: "Official record",
      source:
        "New Arden Water Regulator, compiled from mandatory incident notifications. Each utility reported its own incident.",
      dateTime: "Issued 12 Sep (covers 4 Aug – 9 Sep)",
      body: `Ardmore Valley Water (4 Aug), Brennick Water (19 Aug) and Calloway Shire Water (9 Sep) each detected unauthorised log-ins to StationView Remote, the product all three use to manage pump stations remotely.
At Ardmore and Brennick the intruders viewed screens and downloaded configuration files but changed nothing. At Calloway a disinfection setpoint was altered; an operator noticed within six minutes and reverted it. No effect on water quality.
All three were running a StationView version without the security update released in May. No ransom demand or extortion contact has been reported by any of the three utilities.`,
      expected: {
        reliability: "B",
        credibility: 2,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [1, 2],
        rationale:
          "A regulator compiling mandatory notifications: accountable and usually reliable (A–B). The facts come from each victim describing its own incident — probably true (2), with the caveat that victims can only report what they detected.",
        flags: [
          "Viewing and downloading configurations without changing anything looks like reconnaissance or access-testing, not disruption.",
          "Weeks without a ransom or extortion demand are evidence too — a profit-driven crew usually cashes in fast.",
        ],
      },
    },
    {
      id: "R2",
      title: "Vendor security advisory",
      sourceType: "Interested party",
      source:
        "StationView Software, the product's vendor. Its advisories are usually accurate on technical detail, but it has commercial and legal reasons to minimise its own role.",
      dateTime: "15 Sep",
      body: `"A vulnerability affecting StationView Remote versions earlier than 6.4 allows authentication bypass. A fix was released on 14 May and customers were notified. We have no evidence that StationView's own systems were compromised. The incidents in New Arden involved unpatched installations."
The advisory does not say how many customers remain unpatched.`,
      expected: {
        reliability: "C",
        credibility: 3,
        acceptableReliability: ["B", "C", "D"],
        acceptableCredibility: [2, 3],
        rationale:
          "Accurate on technical facts but with an obvious interest in blaming unpatched customers: fairly reliable (C). The vulnerability and patch date are easy to check and probably true; the claim that its own systems are clean is self-assessed. Overall possibly true (3) — 2 is defensible if you grade only the technical facts.",
        flags: ["A known, patched vulnerability means almost anyone could have done this. It does nothing for attribution."],
      },
    },
    {
      id: "R3",
      title: "Commercial threat intelligence blog",
      sourceType: "Open source (commercial)",
      source:
        "Public blog post by Brightmoor Threat Intelligence, a private security company. Its technical analysis is usually sound; one of its four previous attributions in this region was later withdrawn.",
      dateTime: "18 Sep",
      body: `Brightmoor attributes the intrusions to GRAPHITE LYNX, a group it assesses works for Velantian intelligence. Evidence cited: (1) two IP addresses used against Brennick were used by GRAPHITE LYNX in a 2024 campaign; (2) a script fragment found at Ardmore resembles code from that campaign.
Brightmoor does not say whether the IP addresses belong to a hosting provider shared with other customers. Brightmoor sells GRAPHITE LYNX detection rules to utilities.`,
      expected: {
        reliability: "C",
        credibility: 3,
        acceptableReliability: ["B", "C"],
        acceptableCredibility: [3, 4],
        rationale:
          "Competent, but with a mixed attribution record and a commercial interest in the GRAPHITE LYNX story (C). The technical overlaps are real but weak: reused IP addresses and similar code can come from shared infrastructure, public tooling or deliberate imitation. Possibly true (3).",
        flags: [
          "Infrastructure reuse is weak attribution evidence — especially when the hosting is shared (see R6).",
          "Brightmoor sells the detection product for the actor it names.",
        ],
      },
    },
    {
      id: "R4",
      title: "Hacktivist claim of responsibility",
      sourceType: "Self-claimed actor",
      source:
        "Public post on the channel of the Dry Rivers Collective, a protest group opposed to the Tarrant Corridor agreement. Of its three previous hacking claims, one was verified and two were false.",
      dateTime: "21 Sep",
      body: `"We took New Arden's water — Ardmore, Brennick, Calloway. Next time the taps go dry. Kill the Corridor deal."
The post includes a screenshot of a pump-station control screen. Brennick Water has confirmed the screenshot is genuine and matches the screen the intruders viewed on 19 Aug.
Nothing in the post relates to Ardmore or Calloway beyond their names, which were reported in the media on 16 Sep.`,
      expected: {
        reliability: "D",
        credibility: 3,
        acceptableReliability: ["C", "D", "E"],
        acceptableCredibility: [2, 3],
        rationale:
          "One true claim in three: not usually reliable (D). The screenshot is genuine, so the group had access to Brennick — or to someone who did. But the Ardmore and Calloway names were public five days before the claim, so naming them adds nothing. Possibly true (3).",
        flags: [
          "A genuine screenshot proves access to one site, not responsibility for three.",
          "The other two site names were already in the news on 16 Sep.",
        ],
      },
    },
    {
      id: "R5",
      title: "Partner liaison report",
      sourceType: "Partner intelligence",
      source:
        "Report passed by an allied government's intelligence service through official liaison. The partner is usually reliable; it does not share its sources.",
      dateTime: "17 Sep",
      body: `"We assess with moderate confidence that Velantian intelligence has been tasked since early this year to prepare options to put pressure on countries pursuing the Tarrant Corridor agreement, including options against critical infrastructure. We have no information linking this tasking to specific incidents in New Arden."`,
      expected: {
        reliability: "B",
        credibility: 3,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [2, 3],
        rationale:
          "An allied service with a good record (B), reporting intent and its own moderate-confidence assessment with sources withheld — possibly true (3). Read the last sentence twice: the partner explicitly does not link this to the intrusions.",
        flags: [
          "This is intent, not activity. It makes H1 more plausible without tying anyone to these intrusions.",
          "The partner's own confidence is moderate. Don't quietly upgrade it.",
        ],
      },
    },
    {
      id: "R6",
      title: "National cyber response centre technical note",
      sourceType: "Official technical",
      source:
        "New Arden Cyber Response Centre (NACRC), from its forensic work at Calloway Shire Water and its own monitoring of criminal forums.",
      dateTime: "20 Sep",
      body: `The tool found at Calloway is a commodity remote-access program sold on criminal forums since 2023. Its command-and-control servers are rented from a 'bulletproof' hosting provider widely used by ransomware affiliates — the same provider that hosts the IP addresses Brightmoor links to GRAPHITE LYNX (R3).
On 21 Jul, two weeks before the first intrusion, a seller on a criminal access-broker forum advertised "remote access, 3 x water utilities, New Arden, StationView, $9,000". The listing was marked sold on 28 Jul. NACRC cannot see who bought it.`,
      expected: {
        reliability: "A",
        credibility: 2,
        acceptableReliability: ["A", "B"],
        acceptableCredibility: [1, 2],
        rationale:
          "The national cyber centre working from first-hand forensics (A). The tool and hosting findings are probably true (2); the forum listing was observed directly, though the seller's claims can't be verified and the buyer is unknown.",
        flags: [
          "The access-broker listing is the most diagnostic item in the pack: it explains where the access came from — and why several different actors might claim it.",
          "Shared bulletproof hosting undercuts the infrastructure argument in R3.",
        ],
      },
    },
    {
      id: "R7",
      title: "National newspaper report",
      sourceType: "Open source (media)",
      source:
        "The Arden Herald, a mainstream national newspaper with a good accuracy record. The article quotes an unnamed 'senior government official'.",
      dateTime: "22 Sep",
      body: `"A senior government official said the attacks had 'all the hallmarks of Velantia' and that intelligence agencies were 'increasingly confident' of Velantian involvement. The official cited 'private sector analysis and partner reporting'."`,
      expected: {
        reliability: "C",
        credibility: 3,
        acceptableReliability: ["B", "C", "F"],
        acceptableCredibility: [3, 4, 6],
        rationale:
          "The paper reports accurately what it's told (B), but the real source is an anonymous official you can't assess — C is a fair compromise and F is defensible. The official names his own sources: 'private sector analysis and partner reporting' — almost certainly R3 and R5. This is those two reports again, with more confidence and less nuance.",
        flags: [
          "Circular reporting: the official is very likely repeating R3 and R5. It is not a third, independent source.",
          "'Increasingly confident' contradicts the partner's own statement that it has nothing linking its assessment to these incidents.",
        ],
      },
    },
  ],
  modelAnswer: {
    mustAddress: {
      label: "where the access came from (the broker listing) and whether a state was behind it",
      keywords: ["broker", "bought", "sold", "velantia", "state-linked", "state-sponsored", " state ", "nation-state"],
    },
    bluf: "The three water-utility intrusions very likely began with access bought from a criminal broker (moderate confidence). Who bought it is unresolved: Velantian state involvement is a roughly even chance (low confidence), and the Dry Rivers Collective is unlikely to be behind all three. Media claims of 'Velantian hallmarks' recycle the same two sources. Whoever it was, further attempts against unpatched StationView sites are very likely over the next six months.",
    keyJudgments: [
      {
        statement:
          "Access to all three utilities very likely came from a criminal access broker: three New Arden StationView utilities were advertised and sold two weeks before the first intrusion (R6), and all three were unpatched (R1, R2).",
        confidence: "moderate",
      },
      {
        statement:
          "There is a roughly even chance (45–55%) that a Velantian state-linked group bought and used that access. The behaviour — reconnaissance, configuration theft, no extortion — fits pre-positioning (R1) and the partner reports Velantian intent (R5); but the technical case rests on hosting shared with criminals (R3, R6), and the 'hallmarks' media reporting recycles the same two sources (R7).",
        confidence: "low",
      },
      {
        statement:
          "It is unlikely (20–40%) that the Dry Rivers Collective conducted all three intrusions. Its screenshot proves access to Brennick only, and it named the other sites five days after the media did (R4).",
        confidence: "moderate",
      },
      {
        statement:
          "Further intrusion attempts against unpatched StationView installations in New Arden are very likely (80–93%) over the next six months, regardless of who was responsible.",
        confidence: "moderate",
      },
    ],
    gaps: [
      {
        id: "G1",
        gap: "Who bought the access advertised on the broker forum — and was it the access used in the intrusions?",
        whyItMatters:
          "This is the hinge of the whole assessment. A state buyer, an activist buyer or a ransomware buyer each points to a different six-month outlook.",
        collection:
          "NACRC and partner collection on the forum seller and buyer; tracing the $9,000 payment; comparing the advertised access details with the intrusion vectors.",
        keywords: ["buyer", "bought", "purchas", "broker", "forum", "listing", "advertis", "9,000", "9000", "who paid"],
        minMatches: 1,
      },
      {
        id: "G2",
        gap: "Is there state-specific tooling or tradecraft on any of the three networks, beyond shared hosting and similar code?",
        whyItMatters:
          "Commodity tools and shared bulletproof hosting are weak attribution. Bespoke GRAPHITE LYNX tooling would move the state hypothesis substantially.",
        collection:
          "Full forensic examination at Ardmore and Brennick, not just Calloway; request Brightmoor's underlying technical data; partner technical comparison.",
        keywords: ["tooling", "tradecraft", "ttp", "malware", "bespoke", "custom", "forensic", "unique", "implant", "graphite", "signature", "code"],
        minMatches: 1,
      },
      {
        id: "G3",
        gap: "What did the intruders take and why — what is in the downloaded configuration files, and was the Calloway change deliberate?",
        whyItMatters:
          "Stolen configurations are what you'd want for future disruption (pre-positioning). A deliberate setpoint change could be a test or a signal; an accidental one points to a clumsier actor.",
        collection: "Utility forensics on what was accessed; interview the Calloway operator; review session logs around the change.",
        keywords: ["configuration", "config", "download", "setpoint", "disinfection", "deliberate", "calloway change", "what they took", "what was taken", "files", "intent behind"],
        minMatches: 1,
      },
      {
        id: "G4",
        gap: "How many other utilities run unpatched StationView — what is the exposure?",
        whyItMatters: "The six-month outlook depends less on who did it than on how many doors are still open.",
        collection:
          "Regulator survey of StationView installations and patch status; vendor customer data via the regulator; internet-exposure scanning by NACRC.",
        keywords: ["unpatched", "patch", "other utilities", "exposure", "exposed", "vulnerab", "how many", "remaining", "attack surface"],
        minMatches: 1,
      },
      {
        id: "G5",
        gap: "What sourcing sits behind the partner's intent assessment and the official's 'hallmarks' quote — are they independent of Brightmoor?",
        whyItMatters: "If R5 and R7 trace back to R3, the case for Velantia is one commercial blog post told three times.",
        collection: "Liaison request to the partner for sourcing caveats; find out internally who briefed the media and on what basis.",
        keywords: ["independent", "independence", "circular", "sourcing", "liaison", "herald", "newspaper", "media", "hallmarks", "same source", "repeat"],
        minMatches: 1,
      },
      {
        id: "G6",
        gap: "Did the Dry Rivers Collective have first-hand access, or did it get the screenshot from someone else?",
        whyItMatters:
          "An activist group that bought or was handed access would explain a genuine screenshot without it being the intruder at all three sites.",
        collection:
          "Monitor the channel for non-public detail from Ardmore or Calloway; check whether the screenshot appeared anywhere first; partner reporting on the group's capability.",
        keywords: ["dry rivers", "hacktivist", "collective", "screenshot", "activist"],
        minMatches: 1,
      },
    ],
    hypotheses: [
      {
        id: "H1",
        statement:
          "A Velantian state-linked group (such as GRAPHITE LYNX) conducted the intrusions — possibly using bought access — to prepare pressure options over the Tarrant Corridor deal.",
        kind: "lead",
        keywords: ["velantia", "state", "nation", "government", "graphite", "lynx", "pre-position", "preposition", "espionage", "apt"],
        minMatches: 1,
        matrix: { R1: "C", R2: "C", R3: "C", R4: "N", R5: "C", R6: "N", R7: "C" },
        assessment:
          "The least inconsistent hypothesis — nothing in the pack contradicts it — but its support is soft: intent reporting (R5), a technical overlap undercut by shared hosting (R3 vs R6) and a media quote that recycles both (R7). Hence a roughly even chance, at low confidence.",
      },
      {
        id: "H2",
        statement: "The Dry Rivers Collective conducted the intrusions as protest against the Tarrant Corridor agreement.",
        kind: "alternative",
        keywords: ["hacktivist", "dry rivers", "activist", "protest", "collective"],
        minMatches: 1,
        matrix: { R1: "N", R2: "C", R3: "I", R4: "C", R5: "N", R6: "N", R7: "I" },
        assessment:
          "The screenshot is real, so the group had access to Brennick at some point — possibly bought or passed on. But its claim over the other two sites added nothing beyond what was already public, and its record is one true claim in three.",
      },
      {
        id: "H3",
        statement:
          "Profit-motivated criminals conducted the intrusions — access brokering, with ransomware or extortion to follow — with no state or activist direction.",
        kind: "alternative",
        keywords: ["criminal", "ransomware", "extort", "profit", "financial", "money", "cybercrim", "broker", "crime group"],
        minMatches: 1,
        matrix: { R1: "I", R2: "C", R3: "N", R4: "N", R5: "N", R6: "C", R7: "N" },
        assessment:
          "Explains where the access came from (R6) but not what happened next: weeks of quiet reconnaissance with no ransomware or extortion is odd behaviour for a profit-driven crew. Very likely part of the story; unlikely to be the whole of it.",
      },
    ],
    indicators: [
      "New access-broker listings naming New Arden utilities or StationView (raises the outlook whoever the actor is).",
      "Bespoke GRAPHITE LYNX tooling found at Ardmore or Brennick (raises H1 sharply).",
      "Intrusions or disruption timed to Tarrant Corridor negotiation milestones (raises H1 — coercive signalling).",
      "Dry Rivers publishes non-public detail from Ardmore or Calloway (raises H2).",
      "A ransom or extortion demand to any of the three utilities (raises H3).",
      "The partner shares sourcing that links its intent reporting to these incidents (raises H1 and confidence in it).",
    ],
    commonMistakes: [
      "Counting Brightmoor (R3), the partner (R5) and the newspaper (R7) as three confirmations. R7 says outright its source is 'private sector analysis and partner reporting'.",
      "Reading the partner's intent assessment as evidence of activity. It explicitly says it has nothing linking the tasking to these incidents.",
      "Taking the hacktivist screenshot as proof of all three intrusions.",
      "Skipping the access-broker listing — the most diagnostic item in the pack.",
      "Attributing with high confidence on IP overlap. Shared bulletproof hosting means many tenants.",
      "Forecasting without a timeframe, a probability or indicators. 'Further attacks are possible' tells a minister nothing.",
    ],
    teachingPoints: [
      "Separate the intrusion chain: who got access, who used it and who claimed it can be three different actors.",
      "Intent and activity are different questions. A partner reporting intent doesn't make that actor responsible for this activity.",
      "Media and anonymous officials can turn weak assessments into confident headlines. Trace every claim back to its original source.",
      "A useful outlook doesn't have to wait for attribution: the open door (unpatched systems) drives the forecast.",
    ],
  },
  relatedLessons: [
    "/topics/analysis-competing-hypotheses",
    "/topics/indicators-warnings",
    "/topics/strategic-forecasting",
    "/topics/cognitive-biases",
    "/topics/threat-assessment-methodologies",
    "/topics/multi-source-integration",
  ],
}
