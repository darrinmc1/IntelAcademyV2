#!/usr/bin/env python3
"""Batch 3: Expand more lesson pages."""
import re, os

TOPICS_DIR = "/workspace/intel-academy/app/topics"

EXPANSIONS = {
    "intelligence-failures": """
## Lessons from Major Intelligence Failures

Studying intelligence failures is one of the most effective ways to improve analytical tradecraft. Each failure reveals specific vulnerabilities in collection, analysis, or dissemination that analysts must guard against in their own work.

- **The Pattern of Failure:** Most intelligence failures follow a recognisable pattern: ambiguous signals, organisational pressure toward consensus, confirmation bias in evaluating evidence, and communication breakdowns between analysts and decision-makers.
- **Systemic vs. Individual Failure:** While it is tempting to attribute intelligence failures to individual incompetence, the most instructive failures are systemic — they reveal weaknesses in organisational culture, analytical methodology, and the relationship between intelligence producers and consumers.
- **The Failure of Imagination:** The 9/11 Commission Report coined this phrase to describe the inability of analysts to imagine novel attack scenarios. Failures of imagination occur when analysts extrapolate from past patterns rather than thinking creatively about how adversaries might adapt.

## Pearl Harbor — The Classic Case

The Japanese attack on Pearl Harbor on December 7, 1941 remains the most studied intelligence failure in history, not because American intelligence lacked warnings but because it failed to act on the warnings it had:

- **Signals Were Present:** American intelligence had broken Japanese diplomatic codes and knew that Japan was preparing for major military action. The US expected an attack somewhere — but assumed it would target the Philippines or Southeast Asia, not Hawaii.
- **The Failure of Analysis:** Analysts suffered from what would later be called "mirror imaging" — they assumed Japan would act rationally according to American strategic logic. From the Japanese perspective, a preemptive strike on the Pacific Fleet made strategic sense.
- **Communication Breakdown:** Warnings were transmitted through multiple channels but never reached the tactical commanders who needed them. A warning message was sent by telegram rather than encrypted radio, arriving hours after the attack began.
- **Lessons for Modern Analysts:** Always consider what an adversary might do, not just what seems strategically rational from your own perspective. Ensure that analytical assessments reach operational consumers through the most direct and timely channels available.

## Iraq WMD — Confirmation Bias in Action

The 2003 Iraq WMD assessment represents a failure of analytical methodology rather than a failure of collection: analysts had access to the same intelligence but drew conclusions that the evidence did not support:

- **The Intelligence Community Assessment:** The 2002 National Intelligence Estimate concluded that Iraq possessed weapons of mass destruction and was actively reconstituting its nuclear program. This assessment was later shown to be fundamentally wrong.
- **Confirmation Bias:** Analysts interpreted ambiguous evidence as confirming their existing beliefs about Iraqi intentions. A truck intercepted at the Syrian border became "evidence of WMD transfer" rather than a routine smuggling operation. Satellite imagery of activity at suspected weapons sites was interpreted as WMD-related when it was likely routine maintenance.
- **Groupthink and Advocacy:** The intelligence community operated under implicit pressure to produce conclusions that supported the administration's policy direction. Dissenting views were marginalised, and alternative hypotheses were not systematically considered.
- **Lessons for Modern Analysts:** ACH was developed partly in response to this failure. The key lesson: actively seek out evidence that contradicts your working hypothesis. If you cannot find such evidence, you are not looking hard enough.

## The Cuban Missile Crisis — A Success Story

The Cuban Missile Crisis is often studied as an intelligence success, close-run, but the analytical process holds valuable lessons:

- **Detection Through Multiple Sources:** U-2 reconnaissance photography detected the missile sites, but the intelligence was cross-checked against HUMINT reporting from Cuban sources, SIGINT intercepts of Soviet communications, and defector debriefs. Multi-source correlation was key.
- **Structured Analysis Under Pressure:** The EXCOMM deliberated under extreme time pressure but maintained structured analytical discipline — systematically evaluating the consequences of air strikes, blockade, diplomacy, and inaction before recommending a course.
- **Red Team Thinking:** Attorney General Robert Kennedy explicitly played devil's advocate, challenging assumptions and forcing the team to test their conclusions against the worst-case scenario. This red team function prevented groupthink.
- **Lessons for Modern Analysts:** Even under extreme time pressure, structured analytical techniques improve outcomes. The crisis also demonstrated the importance of having someone in the room whose explicit role is to challenge consensus.
""",

    "report-writing-pitfalls": """
## Common Report Writing Mistakes

Even experienced intelligence analysts fall into predictable writing traps. Recognising these pitfalls is the first step toward avoiding them:

- **Hedge Words and Weasel Language:** Phrases like "it is assessed that," "it is believed that," and "there is a possibility that" drain confidence from your writing without adding precision. Every hedge word should have a specific meaning and be used deliberately, not habitually.
- **Buried Conclusions:** The most important finding of the report should appear in the first paragraph, ideally the first sentence. Analysts sometimes feel they need to "build the case" before stating the conclusion. Intelligence consumers do not have time for this. State the conclusion, then support it.
- **Passive Voice Overuse:** "It was determined that the threat actor was operating from the following IP addresses" should be "We determined the threat actor operated from these IP addresses." Passive voice obscures responsibility and weakens analytical assertions.
- **Jargon and Acronyms:** Intelligence writing is notorious for unexplained acronyms and discipline-specific jargon. A report that cannot be understood by an intelligent generalist is a report that will not influence decision-making. Define every acronym on first use and prefer plain language.
- **Overqualification:** Every analytical judgement exists on a spectrum of uncertainty. But qualifying every sentence with "it is possible that" or "the available evidence suggests that" makes even confident assessments sound weak. Reserve qualification for judgements that genuinely require it.

## Structure and Flow

Poor report structure is the most common reason analytical products go unread:

- **The Inverted Pyramid:** Place the most important information at the top. A decision-maker should be able to read the first paragraph and understand the key judgement. Subsequent paragraphs provide supporting detail in descending order of importance.
- **The Wall of Text:** Blocks of text longer than six sentences discourage reading. Break long paragraphs into shorter ones. Use subheadings to guide the reader through the report's structure. Use bullet points for lists of facts or options.
- **Missing Signposts:** Each section should begin with a sentence that tells the reader what this section covers. "The following section examines three alternative explanations for the observed activity" is a signpost. Without signposts, readers must infer the structure from the content — and often get it wrong.
- **Weak Transitions:** Jumping between topics without transitional sentences confuses readers. "Having established the threat actor's capabilities, we now turn to their likely intent" connects two sections and helps the reader follow the analytical argument.

## Audience Awareness

The most common cause of ineffective intelligence writing is writing for the wrong audience:

- **Know Your Consumer:** A tactical report for an operator needs specific, actionable details and minimal background. A strategic assessment for a policy-maker needs context, alternatives, and implications. Writing the wrong type of report for the consumer guarantees it will not be read.
- **Assume Limited Time:** Most intelligence consumers have more reading than time. Write as if the reader will only read the first paragraph. If the key judgement is not in that paragraph, you have failed.
- **Provide Executive Summary:** For reports longer than two pages, include an executive summary or key judgements section at the beginning. This section should be self-contained — the reader should understand the assessment without reading the supporting text.
- **Answer the Question:** Before writing, confirm what question the consumer wants answered. A brilliantly written report that answers the wrong question is worse than a mediocre report that answers the right one.

## Handling Uncertainty

Intelligence reports must communicate what is known, what is not known, and how confident the analyst is in their assessment:

- **The Confidence Scale:** Use a standardised confidence scale consistently — for example, High Confidence (well-supported by multiple sources), Moderate Confidence (plausible but with gaps), and Low Confidence (speculative or single source). Define what each level means in the report's front matter.
- **Source Limitations:** Be explicit about the limitations of your sources. A report based on a single source of unknown reliability should carry a lower confidence level than one based on multiple corroborated sources, regardless of how compelling the single source appears.
- **Alternative Explanations:** Acknowledge alternative explanations for the observed phenomena, even if you ultimately reject them. This demonstrates analytical rigour and prevents consumers from discovering alternatives you failed to consider.
- **What Would Change Your Assessment:** The most valuable thing an analyst can tell a consumer is what new information would change their assessment. This empowers the consumer to monitor the situation and understand when the analytical picture has fundamentally shifted.
""",

    "multi-source-integration": """
## The Principle of Multi-Source Integration

Multi-source integration is the core methodology of intelligence analysis — combining information from multiple collection disciplines to produce assessments that are more reliable than any single source could support. The whole is genuinely greater than the sum of its parts when sources are integrated effectively.

- **The Analogy of the Blind Men and the Elephant:** Each collection discipline provides a partial view of reality. HUMINT reveals intent but may be influenced by the source's agenda. SIGINT reveals communication patterns but not their meaning. GEOINT reveals physical activity but not its purpose. Only by integrating all perspectives does the complete picture emerge.
- **Convergence vs. Redundancy:** When multiple independent sources converge on the same conclusion, confidence increases exponentially. But analysts must distinguish genuine convergence (two sources independently pointing to the same conclusion) from redundancy (the same underlying information reported through different channels).
- **Source Complementarity:** The most analytically valuable combinations are those where sources complement each other's strengths and weaknesses. A satellite image showing construction at a suspected weapons site (GEOINT) combined with a defector report describing the facility's purpose (HUMINT) is more valuable than two satellite images of the same site.

## The Integration Methodology

Effective multi-source integration follows a structured analytical process:

1. **Source Assessment:** Before integrating, assess each source independently — its reliability, access, motivation, and track record. A source with a history of accurate reporting should be weighted differently from a first-time source of unknown reliability.
2. **Temporal Alignment:** Confirm that sources are reporting on the same timeframe. A SIGINT intercept from today and a HUMINT report from three months ago may appear to converge but actually describe different situations. Align all sources to a common temporal reference before integrating.
3. **Geospatial Correlation:** Confirm that sources are reporting on the same location. Different place names, coordinate systems, or geographic descriptions can lead analysts to integrate reports about completely different places.
4. **Cross-Cueing:** Use information from one source to task or refine collection through another. A HUMINT report identifying a new target can cue satellite imagery collection to confirm the target's existence and location. This iterative process between collection disciplines produces intelligence that no single source could generate independently.
5. **Inconsistency Analysis:** When sources contradict each other, the contradiction itself is analytically valuable. It may indicate deception, source manipulation, or a fundamental misunderstanding of the situation. Inconsistencies should be investigated, not explained away.

## Common Integration Challenges

Multi-source integration presents persistent challenges that analysts must navigate:

- **The Single Source Trap:** A compelling report from a single source can feel like confirmation when it is actually the only evidence for a conclusion. Analysts must consciously resist the temptation to treat single-source reporting as confirmed by the fact that it fits their hypothesis.
- **Source Contamination:** When multiple sources draw on the same underlying information — both citing the same news report, both debriefing the same informant — they appear to corroborate each other but actually represent a single source. Analysts must trace each source to its root.
- **Inconsistent Terminology:** Different collection disciplines use different terminology to describe the same phenomena. A "facility" in GEOINT may be a "location" in HUMINT and a "target" in SIGINT. Standardising terminology across sources is tedious but essential for accurate integration.
- **Classification Barriers:** Sources at different classification levels may be difficult to integrate because the analyst cannot freely combine information in a single product. Release caveats, dissemination restrictions, and classification differences create practical barriers to integration that require tradecraft to navigate.

## Practical Integration Techniques

Experienced analysts develop specific techniques for integrating across sources:

- **The All-Source Matrix:** A structured spreadsheet or database that captures information from each source in a common format. Each row represents an entity or event; columns represent what each source reports about it. This allows rapid comparison and gap identification.
- **Temporal Sequencing:** Place all-source information on a common timeline, regardless of the collection discipline. Temporal sequencing often reveals patterns — a HUMINT report of a meeting followed by a SIGINT intercept of unusual communications — that individual source analysis would miss.
- **Source Weighting:** Assign explicit confidence weights to each source and factor these into the overall assessment. A well-established source with a history of reliable reporting should carry more weight than a first-time source, even when both report the same information.
- **Red Team Integration:** Before finalising an all-source assessment, have a colleague independently review the evidence and attempt to reach a different conclusion. This tests whether the integration process is sound or whether it reflects the original analyst's biases.
""",

    "intelligence-report-types": """
## The Intelligence Report Taxonomy

Intelligence reports are not a single product type but a family of related products, each designed for a specific purpose, consumer, and timeframe. Understanding the taxonomy of intelligence reports helps analysts choose the right format for their findings and helps consumers know what to expect from each product type:

- **Current Intelligence:** Short, timely reports on recent or ongoing events. Designed to keep consumers informed of developments as they occur. Examples include the President's Daily Brief, situation reports (SITREPs), and intelligence bulletins.
- **Estimative Intelligence:** Forward-looking assessments about likely future developments. These are the most analytically demanding products, requiring the analyst to weigh uncertainty, consider alternatives, and make probability judgements. National Intelligence Estimates are the most prominent type.
- **Research Intelligence:** In-depth studies of specific topics, countries, or issues. These are longer-form products that provide comprehensive background, analysis, and forecasting. They may take weeks or months to produce.
- **Warning Intelligence:** Products specifically designed to alert consumers to imminent threats or emerging crises. Warning intelligence emphasises timeliness over completeness and is often delivered through dedicated warning channels.
- **Scientific and Technical Intelligence (S&T):** Reports focused on adversary technological capabilities, weapons systems, and scientific developments. These require specialised analytical expertise and often draw heavily on MASINT and SIGINT sources.

## The President's Daily Brief (PDB)

The PDB is the highest-profile intelligence product in the US system and represents the gold standard for concise, actionable intelligence writing:

- **Format:** The PDB is typically 10-15 pages, containing 6-12 articles. Each article is a single page or less. The format forces analysts to distil complex issues into their most essential elements.
- **Consumer-Focused:** The PDB is written for a single consumer — the President — and their specific information needs. This consumer focus is so intense that PDB writers typically rotate through the White House to understand the President's decision-making style and priorities.
- **Actionable Content:** Every PDB article addresses a question the President might ask or a decision the President might face. Articles that inform without enabling action are candidates for removal.
- **Sources and Methods Protected:** The PDB does not cite sources or explain collection methods in the article text. Source information is handled through separate classification markings and handling instructions.

## Intelligence Reports in Law Enforcement

Law enforcement intelligence reports differ from national security reporting in important ways:

- **Evidentiary Standards:** Law enforcement intelligence must meet higher evidentiary standards because it may be used in criminal proceedings. Analysts must document their sources, methods, and reasoning more thoroughly than in national security reporting.
- **Actionable vs. Background:** Law enforcement intelligence emphasises actionable information — specific individuals, locations, targets, and timings — that can support arrest, search, or surveillance operations.
- **Sharing Restrictions:** Law enforcement intelligence is subject to stricter dissemination controls due to privacy laws, grand jury secrecy, and ongoing investigation sensitivities. Reports carry specific handling caveats that limit sharing.
- **Longer Product Lifecycle:** Intelligence developed for criminal investigations may have evidentiary value for years after production, requiring more careful archiving and chain-of-custody documentation than perishable national security assessments.

## Writing for Different Consumers

Adapting report style to the consumer is a critical analytical skill:

- **Senior Decision-Makers:** Short, direct, bottom-line up front. These consumers have limited time and need the key judgement in the first paragraph. Supporting detail can follow, but the conclusion must lead.
- **Operational Consumers:** Specific, actionable, and time-sensitive. Operators need to know who, what, where, when, and how in the first few lines. They also need to know the reliability of the intelligence so they can factor uncertainty into their operational planning.
- **Analytical Peers:** Detailed, rigorous, and well-sourced. Other analysts need to understand the methodology, the sources, and the analytical reasoning that produced the assessment. They will evaluate the product's logic and evidentiary basis.
- **External Partners:** Contextual, collaborative, and appropriately sanitised. Intelligence shared with foreign partners or other agencies must provide enough context to be useful while protecting sources, methods, and sensitive collection capabilities.
""",

    "intelligence-report-components": """
## Anatomy of an Intelligence Report

Every intelligence report, regardless of type or format, shares common structural components. Understanding these components helps analysts write more effective reports and helps consumers navigate them efficiently:

- **The Header Block:** Classification level, report series identifier, date-time group, and dissemination caveats. The header tells the consumer what they are reading, how it should be handled, and when it was produced.
- **The Key Judgement or Bottom Line:** A one-to-three-sentence summary of the most important analytical finding. This is the most read section of any report and should be self-contained — the consumer should understand the assessment without reading further.
- **The Body:** The analytical argument supported by evidence. The body is structured to guide the reader from the key judgement through the supporting reasoning to the implications. Effective bodies use subheadings, short paragraphs, and a logical flow from most to least important.
- **The Outlook or Implications:** What the assessment means for the consumer — what decisions are informed, what risks are highlighted, what actions are recommended. Intelligence that does not identify implications has not completed its analytical mission.
- **Source References:** Documentation of the sources and methods underlying the assessment. In finished intelligence, source references may be abbreviated or classified separately, but they must exist to support analytical accountability.

## The Title

The title is the most important single element of any intelligence report. A good title tells the consumer what the report is about, what the key judgement is, and why they should read it:

- **Informative, Not Cute:** "Storm Clouds Over the Pacific: Strategic Implications of Regional Military Modernisation" is a less effective title than "Southeast Asian Military Modernisation Accelerates Beyond Projections." The consumer should know the assessment from the title alone.
- **Include the Key Judgement Where Possible:** A title that incorporates the main finding — "Iranian Nuclear Enrichment Reaches Weapons-Grade Threshold" — is more useful than "Status of Iranian Nuclear Enrichment." The former tells the consumer both the topic and the conclusion.
- **Avoid Unnecessary Qualifiers:** Titles that begin with "An Assessment of" or "Preliminary Thoughts on" can be deleted without changing the meaning. Every word should earn its place.

## The Executive Summary

For reports longer than two pages, the executive summary is mandatory. It should be self-contained — the consumer should understand the assessment, the supporting reasoning, and the implications without reading the main body:

- **Length:** Executive summaries should not exceed one page. If the summary needs more than one page, the report itself may be too long.
- **Structure:** Key judgement first, followed by the two to four most important supporting points, followed by the implications for the consumer. This structure mirrors the inverted pyramid of the full report.
- **Language:** The executive summary should use the same language as the main body. Different terminology in the summary and the body confuses consumers and undermines confidence in the assessment's rigour.
- **Standalone Utility:** A consumer who only reads the executive summary should understand the assessment well enough to make an informed decision. If the summary requires reference to the main body, it has failed its purpose.

## Analytical Rigour in Report Structure

Beyond formatting, the structure of an intelligence report reflects the rigour of the analytical process:

- **Transparency:** The report should make clear how the analyst reached their conclusion. What evidence was considered? What alternative explanations were evaluated? What assumptions were made?
- **Confidence Communication:** Every assessment should include a confidence statement — high, moderate, or low — that reflects the quality and quantity of supporting evidence. Confidence should be stated explicitly, not implied through hedging language.
- **Assumption Caveats:** Key assumptions should be identified and their potential impact on the assessment discussed. "This assessment assumes that current economic trends continue. A sharp recession would fundamentally alter the strategic calculus."
- **Outlier Scenarios:** Acknowledging outlier scenarios — low-probability, high-impact events — demonstrates analytical thoroughness and prepares consumers for possibilities they might not have considered. Outlier scenarios should be clearly labelled as such, not presented as alternative primary assessments.
""",

    "socmint-techniques": """
## What Is SOCMINT?

Social Media Intelligence (SOCMINT) is the collection and analysis of information from social media platforms for intelligence purposes. As social media has become a primary channel for human communication, SOCMINT has evolved from a niche OSINT subset to a core intelligence discipline in its own right — often generating insights unavailable through any other collection method.

- **The Scale of Social Media:** Over 4.5 billion people use social media globally. Twitter/X generates 500 million posts per day. Facebook processes 4 petabytes of new data daily. This volume creates both unprecedented collection opportunities and unprecedented analytical challenges.
- **Unmediated Access:** Unlike HUMINT, which depends on source access and willingness, SOCMINT accesses user-generated content directly. Unlike SIGINT, which captures communications content that may be encrypted, SOCMINT collects publicly shared information. This direct access is both SOCMINT's greatest strength and its most significant ethical challenge.
- **Real-Time Awareness:** Social media often breaks news faster than traditional media or official channels. SOCMINT can provide early warning of protests, natural disasters, military movements, and terrorist attacks — sometimes before the participants themselves have fully organised.

## SOCMINT Collection Methods

SOCMINT collection operates across several methodological dimensions:

- **Keyword and Hashtag Monitoring:** The most basic SOCMINT technique. Track specific keywords, hashtags, or phrases across platforms to identify discussions of interest. Boolean operators (AND, OR, NOT) allow precise targeting. For intelligence purposes, keyword lists should be developed in the target language by native speakers to capture colloquial and slang usage.
- **Account Tracking:** Monitor specific accounts of interest — official government accounts, known threat actors, influential commentators, journalists in target regions. Account tracking reveals patterns in posting behaviour, changes in rhetoric, and shifts in network connections.
- **Network Analysis:** Map the connections between accounts — who follows whom, who retweets or shares whose content, who comments on whose posts. Network analysis can identify influential nodes, information flow patterns, and coordinated inauthentic behaviour (bot networks, propaganda amplification).
- **Geolocation:** Extract location information from social media content — geotags on posts, location information in profile metadata, place names in text content, and visual cues in photographs. Geolocation enables mapping of events, movements, and social phenomena to specific places.
- **Temporal Analysis:** Analyse posting patterns over time — time of day, day of week, seasonal variations. Temporal analysis can identify the operating hours of target organisations, the sleep schedules of individuals, and the timing of coordinated information operations.

## SOCMINT Analysis Techniques

Raw social media data requires significant analytical processing to produce intelligence value:

- **Sentiment Analysis:** Assess the emotional tone of social media content — positive, negative, or neutral. Sentiment analysis can gauge public reaction to events, measure the effectiveness of propaganda, and identify emerging grievances before they manifest as protest or violence.
- **Influence Assessment:** Identify which accounts or narratives are driving the conversation. Metrics include reach (how many people see the content), engagement (how many interact with it), and amplification (how many share or repeat it). Accounts with high influence but low legitimate following may be bot networks.
- **Disinformation Detection:** Identify coordinated inauthentic behaviour — networks of accounts that amplify each other's content, repurpose content across multiple accounts, or post with unnatural frequency or timing. Pattern-of-life analysis on account behaviour is the primary detection methodology.
- **Narrative Tracking:** Follow the evolution of stories, themes, and narratives across social media over time. Narrative tracking reveals how information operations develop, how propaganda themes are adapted to local contexts, and how counter-narratives emerge.

## Ethical and Legal Considerations

SOCMINT operates in a complex ethical and legal environment that analysts must navigate carefully:

- **Public vs. Private Information:** SOCMINT collects publicly available information — content shared without privacy restrictions. However, the distinction between public and private is increasingly blurry on social media. Information that is technically public (a Facebook post shared with "Friends") may be shared with an expectation of limited visibility.
- **Platform Terms of Service:** Collecting social media data may violate platform terms of service, even when the information is publicly accessible. Analysts must understand the terms of service governing each platform and ensure their collection methods are authorised.
- **Attribution Risks:** SOCMINT analysts may identify individuals who did not intend to be identified, creating risks of harassment, prosecution, or physical harm. Responsible SOCMINT practice includes minimising the collection and retention of personally identifiable information that is not directly relevant to the intelligence requirement.
- **Operational Security:** SOCMINT collection activities may be detected by adversaries, particularly when monitoring accounts associated with threat actors. Analysts should use operational security measures appropriate to the threat environment, including anonymised collection platforms and careful management of their digital footprint.
""",

    "conclusion-development": """
## Developing Analytical Conclusions

Drawing conclusions is the culmination of the analytical process — the moment when evidence, reasoning, and judgement combine to produce an assessment that informs decision-making. Despite its central importance, conclusion development is often the least structured part of the analytical workflow, left to instinct rather than methodology.

- **Evidence to Inference to Conclusion:** The analytical chain runs from evidence (what we observe) through inference (what we deduce from the evidence) to conclusion (what we assess based on our inferences). Each step in this chain should be explicit and defensible.
- **Degrees of Certainty:** Conclusions are rarely certain. Effective analytical conclusions communicate what the analyst knows, what they infer, their level of confidence in the inference, and what would change that confidence.
- **The Threshold Decision:** At what point does evidence justify a conclusion? Different analytical problems require different evidentiary thresholds. A warning about an imminent attack may be justified by fragmentary evidence; a policy recommendation affecting billions of dollars requires a higher standard.

## The Reasoning Process

Strong conclusions rest on explicit reasoning that can be examined, challenged, and improved:

- **Deductive Reasoning:** Moves from general principles to specific conclusions. If all observed cases follow a pattern, the next case is expected to follow the same pattern. Deductive reasoning works well for stable, well-understood phenomena but fails when conditions change or novel situations arise.
- **Inductive Reasoning:** Moves from specific observations to general conclusions. Based on multiple observations of a pattern, the analyst infers that the pattern is general. Inductive reasoning is the foundation of pattern-of-life analysis and works well for identifying trends.
- **Abductive Reasoning:** Moves from observed effects to inferred causes. Given that we observe phenomenon X, what is the most likely explanation? Abductive reasoning — inference to the best explanation — is the most common form of analytical reasoning in intelligence and the most prone to cognitive bias.
- **Structured Reasoning Techniques:** Methodologies like Analysis of Competing Hypotheses, Key Assumptions Check, and Indicators Validation force analysts to make their reasoning explicit and systematic, reducing reliance on intuition and reducing vulnerability to bias.

## Communicating Confidence

Confidence is the analyst's assessment of the likelihood that their conclusion is correct, given the available evidence:

- **High Confidence:** The conclusion is supported by multiple independent sources, the evidence is consistent and mutually reinforcing, and the analytical reasoning is robust. High confidence is rare and should be reserved for conclusions that are very unlikely to be wrong.
- **Moderate Confidence:** The conclusion is plausible, the evidence is generally consistent but may have gaps, and alternative explanations cannot be ruled out. Most important intelligence assessments fall into this category.
- **Low Confidence:** The conclusion is speculative, based on limited or ambiguous evidence, and alternative explanations are equally or more plausible. Low-confidence assessments are still valuable — they inform consumers what might be true — but they must be clearly caveated.
- **Confidence vs. Probability:** Confidence is not the same as probability. An analyst can be highly confident that a 40% probability event will occur (because the underlying dynamics are well understood) or have low confidence that a 90% probability event will occur (because the evidence is poor).

## Common Conclusion Errors

Even experienced analysts make predictable errors when drawing conclusions:

- **Premature Closure:** The tendency to stop considering alternatives once a plausible conclusion is reached. The most common analytical error, premature closure short-circuits the reasoning process and leaves the analyst vulnerable to missing contradictory evidence.
- **False Consensus:** Assuming that a plausible conclusion is widely shared. Analysts may assume their reasoning is obvious, failing to recognise that alternative interpretations of the same evidence are equally plausible to reasonable observers.
- **Overconfidence:** The gap between what analysts know and what they think they know is well documented. Overconfident conclusions are more likely to be wrong but less likely to be questioned by consumers.
- **Anchoring:** The tendency to give disproportionate weight to the first information received. An initial assessment of a situation, even if later contradicted by evidence, continues to influence the analyst's conclusion.
""",

    "intelligence-cycle": """
## The Intelligence Cycle Framework

The intelligence cycle is the foundational process model that describes how raw information is transformed into finished intelligence. While variations exist across different intelligence services, the core structure remains consistent and provides a common language for describing intelligence work:

- **Why a Cycle?** The intelligence cycle is depicted as a closed loop because intelligence production is continuous. Outputs generate new requirements, which drive new collection, which produces new information for analysis, and so on. Understanding this iterative nature is essential for effective intelligence management.
- **Process vs. Reality:** The intelligence cycle is an idealised model. In practice, intelligence work is messier — phases overlap, feedback loops operate informally, and time pressure compresses the process. However, the cycle provides a useful framework for managing, evaluating, and improving intelligence operations.
- **Consumer-Centric:** The cycle places the consumer (the decision-maker who needs intelligence) at the centre. All intelligence activities exist to serve consumer needs. Intelligence that does not inform a decision or support a policy is intelligence that should not be produced.

## Phase 1: Direction

Direction is the most critical and often the most neglected phase of the intelligence cycle. It establishes what intelligence is needed, why it is needed, and how it will be used:

- **Requirements Definition:** Intelligence requirements are formal statements of what decision-makers need to know. Good requirements are specific, answerable, and prioritised. A vague requirement like "tell me about the security situation in the region" produces unfocused collection and generic analysis.
- **Priority Setting:** Not all intelligence requirements are equally important. Priority Intelligence Requirements (PIRs) receive the bulk of collection and analytical resources. Other requirements are satisfied on a time-available basis or deferred.
- **Collection Planning:** Based on requirements, collection managers identify which sources and methods are best suited to collect the needed information. Collection planning considers source availability, reliability, timeliness, and the risk of revealing collection capabilities.
- **Consumer Engagement:** The most effective direction phase involves direct engagement between analysts and consumers. Analysts who understand their consumer's decision-making context produce more relevant intelligence. This engagement should be continuous, not limited to the direction phase.

## Phase 2: Collection

Collection transforms intelligence requirements into raw information gathered from a variety of sources:

- **HUMINT (Human Intelligence):** Information gathered from human sources — defectors, informants, diplomatic reporting, and debriefings. HUMINT provides insight into intentions, plans, and decision-making processes that technical collection cannot access.
- **SIGINT (Signals Intelligence):** Interception and analysis of communications signals (COMINT) and electronic signals (ELINT). SIGINT provides access to adversary communications, radar emissions, and electronic systems.
- **GEOINT (Geospatial Intelligence):** Imagery and geospatial data collected from satellites, aircraft, and UAVs. GEOINT provides visual confirmation of physical activity, infrastructure, and military deployments.
- **OSINT (Open Source Intelligence):** Information from publicly available sources — media, academic publications, social media, government reports. OSINT has grown dramatically in importance with the expansion of digital information.
- **MASINT (Measurement and Signature Intelligence):** Technical data from specialised sensors — radar, infrared, acoustic, nuclear, chemical. MASINT detects and characterises physical phenomena that other disciplines cannot observe.

## Phase 3: Processing

Raw collected data is rarely usable in its original form. Processing converts raw data into formats suitable for analysis:

- **Decryption and Decoding:** Encrypted communications must be decrypted. Coded messages must be decoded. This processing may be automated (technical decryption) or manual (linguistic translation).
- **Translation:** Foreign language materials must be translated into the language of the consuming intelligence service. Translation quality directly affects analytical quality — mistranslation of a single word can change the meaning of an entire intelligence report.
- **Technical Processing:** Satellite imagery must be geo-referenced and corrected for atmospheric distortion. SIGINT intercepts must be separated by frequency and signal type. MASINT data must be calibrated against known signatures.
- **Data Reduction:** The volume of collected data far exceeds analytical capacity. Processing includes triage — selecting which data merits further analysis and which should be archived or discarded.

## Phase 4: Analysis

Analysis is the core of the intelligence cycle — the phase where raw information is transformed into finished intelligence:

- **Integration:** Analysts combine information from multiple sources and disciplines into a coherent picture. Integration requires evaluating the reliability of each source, reconciling inconsistencies, and identifying gaps.
- **Interpretation:** Analysts assign meaning to the integrated information. What does this activity signify? What are the adversary's intentions? How confident should we be in our interpretation?
- **Assessment:** Analysts produce judgements about current situations and future developments. Assessments communicate what is known, what is inferred, and what remains uncertain.
- **Production:** Analytical judgements are formatted into intelligence products — briefs, reports, estimates, warnings — appropriate for the consumer and the decision context.

## Phase 5: Dissemination

Intelligence that is not delivered to the consumer who needs it has no value. Dissemination ensures that finished intelligence reaches the right consumers at the right time through the right channels:

- **Push Dissemination:** Intelligence is actively sent to consumers based on their standing requirements. Push dissemination ensures that consumers receive relevant intelligence without having to request it.
- **Pull Dissemination:** Consumers access intelligence through databases, portals, or libraries. Pull dissemination allows consumers to search for intelligence relevant to emerging needs but requires them to know what they are looking for.
- **Tailored Dissemination:** Different consumers receive different versions of the same intelligence product, tailored to their clearance level, need-to-know, and decision-making context.

## Phase 6: Feedback

Feedback closes the intelligence cycle and drives continuous improvement:

- **Consumer Feedback:** Did the intelligence meet the consumer's needs? Was it timely? Was it relevant? Was it actionable? Direct consumer feedback is the most valuable input for improving intelligence production.
- **Analytical Accountability:** Were the assessments accurate? What was missed? What would the analyst do differently? Systematic review of past assessments — including assessments that were right and those that were wrong — improves analytical tradecraft.
- **Process Improvement:** Feedback should lead to changes in requirements, collection strategies, analytical methods, and production formats. An intelligence organisation that does not learn from feedback is an organisation that repeats its mistakes.
""",

    "good-intelligence-report": """
## Defining a Good Intelligence Report

A good intelligence report is not simply a well-written document. It is a document that meets the consumer's needs, informs a decision, and withstands scrutiny. These criteria are more demanding than standard writing quality and require specific analytical tradecraft:

- **Timeliness:** A perfectly accurate report that arrives after the decision has been made has failed its mission. Timeliness is the first criterion of intelligence quality. Reports must be produced fast enough to be actionable, even at the cost of some completeness or polish.
- **Relevance:** The report must address a question the consumer is actually asking, not a question the analyst finds interesting. Relevance requires continuous consumer engagement — analysts who do not understand their consumer's decisions cannot produce relevant intelligence.
- **Accuracy:** The report's factual claims must be correct and its analytical judgements must be well-supported. Accuracy is tested over time as events unfold. A track record of accurate reporting builds the credibility that makes future assessments influential.
- **Actionability:** The report should enable the consumer to make a decision or take an action that they would not have taken without the intelligence. Reports that inform without enabling action may be interesting but are not fully successful.

## The Characteristics of Effective Intelligence Writing

Beyond meeting the basic criteria, the best intelligence reports share specific writing characteristics:

- **Clarity:** The report's message should be understandable on first reading. Complex ideas should be explained simply, not simplified — there is a difference between making something accessible and dumbing it down. Avoid jargon, unexplained acronyms, and convoluted sentence structures.
- **Concision:** Every sentence should serve a purpose. Information that does not support the key judgement, provide essential context, or enable the consumer to evaluate the assessment should be cut. Shorter reports are more likely to be read in full.
- **Conviction:** Tentative language erodes consumer confidence. A well-supported assessment should be stated with appropriate conviction. Reserve hedging for genuine uncertainty, not as a default posture to avoid being wrong.
- **Coherence:** The report should tell a logical story from beginning to end. Each section should build on the previous one, and the structure should guide the reader naturally toward the conclusion. Disorganised reports force consumers to do the analytical work themselves.

## From Data to Insight

The most valuable intelligence reports do more than present data — they provide insight:

- **Data Is Not Intelligence:** A chart showing increased military activity at a border crossing is data. The intelligence is the assessment that this activity indicates preparation for a cross-border operation within 72 hours. The distinction between presenting data and providing insight is the most important skill an analyst develops.
- **Adding Value:** The analyst's value lies in what they add to the raw data — context, comparison, interpretation, and judgement. A report that simply summarises what is already known from open sources has not added value.
- **Connecting the Dots:** Intelligence consumers see fragments. The analyst's job is to connect those fragments into a coherent picture that the consumer could not construct alone. This requires integrating information across sources, disciplines, and timeframes.
- **Telling the Consumer Something New:** A good intelligence report tells the consumer something they did not already know. This may be a new fact, a new interpretation, or a new connection between existing facts. Reports that confirm what the consumer already believes are less valuable than reports that challenge or refine their understanding.

## Practical Quality Checks

Before publishing any intelligence report, analysts should apply systematic quality checks:

- **The So What Test:** If the consumer's response to the report would be "so what?" — if it does not inform a decision or change their understanding — the report needs revision or should not be published.
- **The Straw Man Test:** Have you presented the strongest version of alternative explanations, or have you set up weak alternatives that are easy to dismiss? A rigorous assessment engages seriously with competing interpretations.
- **The Source Test:** Can you trace every factual claim to a specific source? Is the source reliable for this specific claim? Would you defend this source attribution to a sceptical reviewer?
- **The Confidence Check:** Is your stated confidence level consistent with the evidence? Have you communicated what is uncertain as clearly as what is certain? Consumers should understand not just what you think but how sure you are.
- **The Consumer Test:** Would the intended consumer understand this report without additional explanation? If not, revise for clarity before publication.
""",

    "main-body-organization": """
## Structuring the Main Body

The main body of an intelligence report carries the analytical argument from the key judgement to the supporting evidence. Its structure determines whether the consumer follows and accepts the reasoning or becomes confused and disengaged:

- **The Logical Flow:** The main body should present information in a logical sequence that builds toward the conclusion. Common organising principles include chronological (what happened, in order), thematic (by topic or issue), comparative (alternative explanations evaluated side by side), and analytical (problem definition, evidence, analysis, conclusion).
- **Subheadings as Roadmap:** Subheadings guide the reader through the structure and allow them to skip to sections of interest. Effective subheadings are informative, not generic. "Evidence from SIGINT Sources" is better than "Sources." "Implications for Regional Stability" is better than "Outlook."
- **Paragraph Unity:** Each paragraph should develop a single idea. The first sentence states the idea; subsequent sentences support, explain, or qualify it. Paragraphs that cover multiple ideas confuse readers and weaken the analytical argument.
- **Transitions Between Sections:** Each section should connect to the next through a transitional sentence or paragraph. "Having established the threat actor's capabilities, this section assesses their likely intent" tells the reader where they are in the argument and what comes next.

## Evidence Presentation

How evidence is presented affects how it is received by the consumer:

- **Source Attribution in Context:** The most relevant source information should appear with the evidence, not in a footnote or appendix. "SIGINT intercepts from June 12 indicate the target is moving toward the border" is more effective than "The target is moving toward the border (Source: SIGINT intercept, June 12)."
- **Evaluating Evidence Quality:** The consumer should understand the quality of the evidence supporting each claim. High-confidence evidence (multiple corroborated sources) can be stated directly. Lower-confidence evidence should be caveated: "A single source of unknown reliability reports that..."
- **Visual Evidence:** Where available, visual evidence — images, maps, graphs, timelines — should be integrated into the body, not relegated to an appendix. A well-chosen visual can convey information more efficiently than paragraphs of text.
- **Negative Evidence:** The absence of expected evidence can be as informative as its presence. When expected evidence is absent, note this explicitly: "Despite extensive collection against this target, no communications intercepts have been observed in the past 72 hours, which is inconsistent with normal operating patterns."

## Managing Length

Intelligence reports should be as long as necessary and as short as possible:

- **The Two-Page Rule:** For most intelligence consumers, two pages is the ideal report length. Longer reports should justify their length through the complexity or importance of the subject, not through verbose writing.
- **Information Layering:** Longer reports can use information layering to serve multiple consumers. The first page contains the key judgement and supporting evidence. Subsequent pages provide additional depth, context, and methodological detail. A time-pressed consumer reads the first page; an analyst with more time reads the full report.
- **Annexes for Supporting Detail:** Detailed technical information, methodological descriptions, and comprehensive source references belong in annexes, not the main body. The body tells the story; annexes provide the supporting evidence.
- **Kill Your Darlings:** The most painful editing step is cutting information the analyst worked hard to develop. If information does not directly support the key judgement or enable the consumer to evaluate it, it should be cut regardless of how interesting or well-researched it is.

## Adapting Structure to Content

Different types of analytical problems require different structural approaches:

- **Descriptive Reports:** For reports that describe a situation or event, a chronological or geographic structure works best. Describe what happened, when it happened, where it happened, and who was involved before assessing significance.
- **Predictive Reports:** For reports that forecast future developments, a structure that presents the assessment, then the supporting evidence, then alternative scenarios works best. The consumer should understand the primary assessment before being presented with alternatives.
- **Warning Reports:** For warning intelligence, the structure should lead with the warning, then the evidence supporting it, then the time window for action. Warning reports should minimise background and context — if the consumer needs to act in hours, they do not need a history lesson.
- **Estimative Reports:** For estimates of adversary capabilities or intentions, a structure that presents the key judgement, then the evidence, then alternative explanations, then implications for the consumer, provides the analytical depth estimative consumers need.
""",

    "osint-workflow": """
## The OSINT Workflow

Open Source Intelligence requires a structured workflow to manage the volume, variety, and velocity of publicly available information. Without a systematic approach, analysts quickly become overwhelmed by data and produce analysis that is reactive rather than purposeful:

- **The OSINT Cycle:** OSINT follows a modified intelligence cycle tailored to the unique characteristics of open sources. The phases — planning, collection, processing, analysis, and dissemination — are the same, but the methods and tools at each phase differ significantly from classified intelligence disciplines.
- **Source Saturation:** The greatest challenge in OSINT is not finding information but filtering it. An analyst monitoring a single country's social media activity may encounter thousands of potentially relevant posts per day. Effective OSINT workflows prioritise triage and filtering over broad collection.
- **The OSINT Toolchain:** Professional OSINT operations use a stack of specialised tools — social media monitoring platforms, web scrapers, data visualisation tools, and analytical frameworks. The toolchain should be matched to the specific intelligence requirement, not dictated by what tools are available or familiar.

## Phase 1: Planning

OSINT planning begins with the intelligence requirement and works backward to identify the most productive open sources:

- **Source Mapping:** Identify which open sources are most likely to contain the needed information. For a requirement about military movements, satellite imagery from commercial providers and local social media posts may be the most productive sources. For a requirement about economic conditions, government statistics and financial news may be more relevant.
- **Collection Strategy:** Determine how each source will be collected, at what frequency, and for what duration. Some sources (government websites) can be collected once; others (social media feeds) require continuous monitoring.
- **Resource Allocation:** OSINT collection can be resource-intensive. Prioritise sources and collection frequencies based on their expected contribution to the intelligence requirement. A satellite image that costs thousands of dollars per frame should be tasked only when the expected intelligence value justifies the cost.
- **Legal and Ethical Boundaries:** Before collection begins, confirm that the planned collection is within authorised legal and ethical boundaries. Different jurisdictions have different laws regarding web scraping, social media monitoring, and data retention. OSINT analysts must know and respect these boundaries.

## Phase 2: Collection

OSINT collection gathers publicly available information from identified sources:

- **Web Scraping:** Automated tools collect data from websites at scale. Web scraping can collect thousands of pages per hour but must respect website terms of service and robots.txt instructions. For intelligence purposes, scraped data should be timestamped and source-tagged for future verification.
- **Social Media Monitoring:** Dedicated tools monitor social media platforms for keywords, hashtags, account activity, and network changes. Social media monitoring should be configured to minimise false positives while capturing relevant activity.
- **Media Monitoring:** News aggregation services and RSS feeds collect articles from traditional media sources. Media monitoring provides coverage of official statements, reported events, and editorial commentary that may not appear on social media.
- **Database Access:** Many open source databases require registration, subscription, or academic affiliation. Corporate registries, patent databases, academic journals, and government data portals are valuable OSINT sources that require active access management.
- **Human Collection:** Some open source information is best collected through human interaction — interviews with subject matter experts, attendance at conferences, engagement with online communities. This form of OSINT collection requires tradecraft more similar to HUMINT than to technical collection.

## Phase 3: Processing and Triage

Raw OSINT data must be processed before it can be analysed:

- **Deduplication:** The same information often appears across multiple sources. Deduplication prevents the analyst from treating a single event as multiple corroborated reports.
- **Translation:** Foreign language sources must be translated. Machine translation (Google Translate, DeepL) is adequate for triage but should not be relied upon for final analysis. Critical foreign language content should be translated by a qualified linguist.
- **Verification:** Open source information varies enormously in reliability. Each piece of information should be assessed for plausibility, source reliability, and consistency with other available information before it is used in analysis.
- **Triage:** Not all collected information merits analysis. Triage rules should be established during the planning phase based on the intelligence requirement. Information that clearly does not meet the requirement should be archived without detailed analysis.

## Phase 4: Analysis

OSINT analysis applies the same analytical tradecraft as other intelligence disciplines:

- **Source Evaluation:** Each open source should be evaluated using the same criteria applied to classified sources — access, motivation, history of reliability, and potential for deception. The fact that a source is "open" does not make it more reliable than a classified source.
- **Cross-Source Integration:** OSINT information should be integrated across sources before conclusions are drawn. A single social media post is not a trend; a single news article is not a confirmed fact. Patterns across multiple independent sources carry analytical weight.
- **Temporal Analysis:** When was the information published? Has the source updated or corrected it? Is the information still current? Open source information decays rapidly — a news article from six months ago may no longer reflect the current situation.
- **Geospatial Correlation:** Where possible, geolocate OSINT information to specific places. A social media post about a protest is more valuable when it can be geolocated to a specific intersection at a specific time.

## Phase 5: Dissemination

OSINT products follow the same dissemination standards as classified intelligence:

- **Source Transparency:** Unlike classified intelligence, which protects sources through classification markings, OSINT products can often cite sources directly. However, analyst should consider whether citing a source could endanger the source or reveal analytical methods.
- **Timeliness:** OSINT products may have shorter shelf lives than classified products because the underlying open sources are updated continuously. Date and time stamps on OSINT products are essential for consumers to assess currency.
- **Methodological Transparency:** OSINT consumers benefit from understanding how the information was collected and analysed. A brief methodological note — sources used, search terms, timeframe — helps consumers evaluate the product's reliability and relevance.
""",

    "operational-reports": """
## The Role of Operational Reports

Operational reports are the primary vehicle for communicating intelligence that directly supports ongoing operations. Unlike strategic assessments, which inform long-term planning, operational reports are produced and consumed in the same timeframe as the operations they support — often hours or minutes before the operation commences:

- **Time-Sensitive Production:** Operational reports must be produced quickly enough to inform the operation they support. A tactical report that arrives after the operation has begun has lost most of its value. This time pressure shapes every aspect of operational reporting — format, length, source requirements, and dissemination channels.
- **Action-Oriented Content:** Operational reports focus on specific, actionable information — the location and activity of a target, the security situation along a planned route, the presence of civilians or friendly forces in an area of operations. Information that does not directly support operational decision-making is excluded, regardless of its analytical interest.
- **Direct Consumer Relationship:** Operational reports are typically consumed by the operators or tactical commanders who will act on the intelligence. This direct relationship — often face-to-face or through a dedicated communications channel — allows for immediate clarification, refinement, and follow-up that formal reporting channels cannot provide.

## Structure of an Operational Report

Operational reports follow a standardised format that allows operators to extract critical information rapidly:

- **The SALUTE Format:** A widely used template for tactical intelligence reports: Size (how many), Activity (what are they doing), Location (where are they), Unit (who are they), Time (when was the information collected), Equipment (what are they carrying or using). SALUTE reports are concise, structured, and immediately usable.
- **The SITREP (Situation Report):** A broader format that covers the current situation, friendly force status, enemy activity, and significant events since the last report. SITREPs are the standard reporting format for ongoing operations and are produced at regular intervals or when significant changes occur.
- **The SPOT Report:** A short, urgent report of time-sensitive information that cannot wait for the next scheduled SITREP. SPOT reports are used for imminent threats, significant enemy movements, or unexpected developments that require immediate command attention.
- **The ACE Report:** Army, Casualties, Equipment — a format used to report battle damage, casualties, and equipment status. ACE reports are essential for maintaining situational awareness of friendly force readiness during prolonged operations.

## Operational Report Writing Standards

Writing for operational consumers requires specific adaptations from standard intelligence writing:

- **Bottom Line Up Front:** The most critical information — the threat to the operation, the change in the situation, the time-sensitive development — must appear in the first sentence. Operational consumers do not have time to read background before reaching the essential information.
- **Specificity Over Generality:** "The target was observed at 0630 hours moving from Location A to Location B in a white Toyota HiLux, licence plate ABC-123, accompanied by two unidentified males" is an operational report. "The target was seen leaving his residence in the morning with associates" is not.
- **Grid Coordinates:** Location information in operational reports should include grid coordinates (MGRS or lat/long) in addition to place names. "Near the market in the northern district" is not sufficiently precise for an operation. "Grid: 38T 0546789 1234567" is precise.
- **Confidence Indicators:** Operational consumers need to know how reliable the intelligence is so they can factor uncertainty into their planning. A report that does not include a confidence assessment forces the operator to guess at the intelligence's reliability.
- **Source Protection:** Operational reports may need to protect sensitive sources while still providing enough information for the operator to assess reliability. Standard caveats like "Source: HUMINT-3" (a source of known reliability reporting through established channels) provide the operator with a reliability framework without revealing source identity.

## The Intelligence-Operations Interface

The relationship between intelligence producers and operational consumers is critical to operational success:

- **Embedded Analysts:** Many military and law enforcement organisations embed intelligence analysts directly with operational units. Embedded analysts develop a deeper understanding of operational needs and can produce more relevant intelligence faster than analysts working from a remote headquarters.
- **The Intelligence Push:** In a well-functioning intelligence-operations relationship, intelligence is pushed to operators based on their anticipated needs, not pulled based on requests. The analyst anticipates what the operator will need next and produces it before being asked.
- **After-Action Review:** Following every operation, the intelligence that supported it should be reviewed. What was accurate? What was missed? What could have been better? The after-action review is the most effective mechanism for improving operational intelligence.
- **Trust Development:** Operators trust intelligence they have seen validated through operational outcomes. New intelligence units or analysts must build this trust over time through consistent, accurate reporting. Trust once broken — through an inaccurate report that leads to a failed operation — is difficult to rebuild.
""",

    "intelligence-ethics": """
## The Ethical Framework for Intelligence

Intelligence professionals operate in a uniquely challenging ethical environment. They are authorised to deceive, to collect information without the subject's knowledge or consent, and in some circumstances to influence events covertly. These authorities, necessary for effective intelligence work, create ethical obligations that distinguish intelligence from other information professions:

- **The Necessity of Deception:** Intelligence work cannot be conducted transparently. The very nature of the profession requires deception — of adversaries, of targets, and sometimes of allies. The ethical question is not whether deception occurs but how it is constrained, authorised, and reviewed.
- **The Public Trust Paradox:** Intelligence agencies operate in secret on behalf of a public that cannot directly observe their activities. This creates a unique trust relationship: the public must trust that intelligence activities are lawful, necessary, and proportionate, without being able to verify this directly.
- **Consequences of Failure:** Ethical failures in intelligence — unauthorised surveillance, torture, political manipulation — can destroy the trust relationship between an intelligence service and the society it serves. The intelligence professional's individual ethical decisions contribute to or undermine this institutional trust.

## Core Ethical Principles

Several principles guide ethical decision-making in intelligence:

- **Proportionality:** The intrusiveness of intelligence collection must be proportionate to the threat or requirement. Collecting information about a suspected terrorist's communications network is proportionate; collecting the communications of everyone within a three-mile radius of the target is not.
- **Minimisation:** Intelligence agencies should collect the minimum information necessary to satisfy a valid requirement and should minimise the retention and dissemination of information about individuals who are not intelligence targets. This principle is embedded in US signals intelligence procedures through "incidental collection" minimisation rules.
- **Accountability:** Intelligence activities should be subject to oversight — internal (inspectors general, legal review), external (legislative oversight committees, judicial review), and in some cases public (declassified reports, historical releases). Accountability mechanisms ensure that intelligence activities remain within authorised boundaries.
- **Lawfulness:** Intelligence activities must be conducted within the legal framework of the society the intelligence service serves. This includes domestic law, international law, and the laws of armed conflict where applicable. The rule of law is not suspended for intelligence activities.

## Ethical Challenges in Intelligence Analysis

Analysts face distinctive ethical challenges in their daily work:

- **Policy Advocacy vs. Objective Analysis:** The most persistent ethical challenge for intelligence analysts is maintaining analytical independence from policy preferences. Analysts who tailor their assessments to support a preferred policy outcome are not providing intelligence — they are providing advocacy. The ethical obligation is to report what the evidence shows, not what the consumer wants to hear.
- **Cherry-Picking Evidence:** The inclination to select evidence that supports a preferred conclusion while discounting contradictory evidence is both a cognitive bias and an ethical failure. Analysts have an affirmative ethical obligation to seek out and fairly consider evidence that challenges their working hypotheses.
- **Classification and Secrecy:** Analysts must navigate the tension between transparency (providing consumers with enough information to evaluate the assessment) and secrecy (protecting sources and methods). Using classification to hide analytical weaknesses — rather than to protect legitimate sources — is an ethical violation.
- **Speaking Truth to Power:** Analysts have an ethical obligation to communicate their assessments clearly and honestly, even when the assessment is unwelcome or contradicts established policy. The intelligence professional's duty is to the facts, not to organisational or political convenience.
""",

    "recommendation-framework": """
## What Makes a Good Recommendation?

Intelligence recommendations are analytical judgements that go beyond assessment to suggest specific actions. A well-constructed recommendation is specific, actionable, grounded in evidence, and sensitive to the consumer's decision-making context:

- **Specific, Not Generic:** "Improve collection against the target" is not a useful recommendation. "Task a satellite over Location X within the next 48 hours to confirm the presence of identified equipment" is a useful recommendation. Specificity enables action.
- **Actionable by the Consumer:** A recommendation must be directed at a consumer who has the authority to implement it. Recommending a policy change to an intelligence analyst who cannot change policy is futile. Recommending a shift in collection priorities to a collection manager who controls those priorities is actionable.
- **Grounded in the Assessment:** Recommendations should follow logically from the analytical assessment. A recommendation that is not supported by the preceding analysis appears arbitrary and reduces confidence in the overall product.
- **Timed and Prioritised:** Recommendations should indicate when action is needed and how the consumer should prioritise among multiple recommendations. "Recommendation 1 (Priority): Confirm target location within 24 hours. Recommendation 2 (Routine): Develop additional sources on the target's support network."

## The Recommendation Structure

Effective recommendations follow a consistent structure:

1. **Action Verb:** Begin with a clear action verb — Task, Deploy, Monitor, Engage, Report, Prepare, Authorise. The action verb tells the consumer what you want them to do.
2. **Target of Action:** Specify who or what the action should be directed toward. Monitor "the identified communication node" rather than monitoring "suspicious activity."
3. **Rationale:** Briefly explain why this action is recommended. The rationale connects the recommendation to the analytical assessment. "Task satellite imagery of Location X because the assessment identifies it as the most likely storage site for the identified equipment."
4. **Timeline:** Indicate when the action should be taken. "Within 48 hours," "Before the next steering committee meeting," "At the first indication of movement."
5. **Expected Outcome:** Describe what the recommended action is expected to achieve. "This will confirm the equipment's presence and location, enabling follow-on collection or action."

## Common Recommendation Mistakes

Even experienced analysts make predictable errors when formulating recommendations:

- **The False Precision Trap:** Recommending actions with a degree of precision that the intelligence cannot support. "Deploy assets to Grid 123456" is only useful if the intelligence is precise enough to warrant that specific targeting. Recommending at a higher level of precision than the intelligence supports is counterproductive.
- **The "More Collection" Default:** The most common intelligence recommendation is "collect more information." While sometimes appropriate, this recommendation should be reserved for cases where additional collection would genuinely change the analytical picture. Recommending more collection when the existing evidence is sufficient delays decision-making unnecessarily.
- **Ignoring Consumer Constraints:** Recommendations that are technically sound but practically impossible — requiring resources the consumer does not have, timelines the consumer cannot meet, or authorities the consumer does not possess — frustrate consumers and undermine the analyst's credibility.
- **The False Choice:** Presenting only two options when more exist. "Either authorise direct action or accept the threat" presents a false choice that ignores intermediate options like enhanced monitoring, passive collection, or diplomatic engagement.

## Integrating Recommendations into Reports

Recommendations should be integrated into the intelligence report structure, not appended as an afterthought:

- **Placement:** Recommendations appear after the key judgement and supporting evidence, as the logical conclusion of the analytical argument. They should not precede the evidence that supports them.
- **Prioritisation:** When multiple recommendations are offered, they should be prioritised. The consumer should know which action is most important and which can be deferred.
- **Explicit Connection:** Each recommendation should be explicitly connected to the preceding analysis. "Based on the assessment that [key judgement], we recommend [specific action]."
- **Separate Recommendations from Findings:** Avoid the common error of embedding recommendations within analytical findings. "The target is likely at Location X, and we should task imagery" confuses assessment with recommendation. Keep them structurally separate.
""",
}

def expand_page(slug):
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    with open(path) as f:
        content = f.read()
    
    if slug in EXPANSIONS and '`\n\nexport default function' in content:
        content = content.replace('`\n\nexport default function', EXPANSIONS[slug] + '\n`\n\nexport default function')
        with open(path, 'w') as f:
            f.write(content)
        new_lines = len(content.split('\n'))
        print(f"  {slug}: expanded to {new_lines} lines")
        return True
    else:
        print(f"  {slug}: SKIP")
        return False

for slug in EXPANSIONS:
    expand_page(slug)

print("\nDone.")
