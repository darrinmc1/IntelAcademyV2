#!/usr/bin/env python3
"""Expand short lesson pages with richer content."""

import re, os

TOPICS_DIR = "/workspace/intel-academy/app/topics"

# Content expansions keyed by lesson slug
# Each entry adds sections to the existing topicContent
EXPANSIONS = {
    "what-is-osint": """
## OSINT Collection Methods

Open source intelligence draws from an enormous range of publicly available information. Understanding the categories of OSINT sources helps analysts know where to look and how to evaluate what they find.

- **Published Media:** Newspapers, journals, magazines, books, and government reports. These often provide verified, authoritative information but may lag behind current events.
- **Broadcast Media:** Television, radio, and podcasts. News broadcasts can provide real-time information from conflict zones or disaster areas, though the analyst must account for editorial bias.
- **Online Sources:** Websites, forums, blogs, social media platforms, and video-sharing sites. The internet has democratised access to information but also introduced unprecedented volumes of noise and disinformation.
- **Commercial Data:** Satellite imagery, financial data, shipping records, and business registries. Commercial providers now offer capabilities once reserved for national intelligence agencies.
- **Grey Literature:** Conference proceedings, academic preprints, technical reports, and working papers. These sit between published and unpublished — often rich in detail but inconsistent in quality control.

## Evaluating OSINT Sources

Not all open sources are equally reliable. Analysts must apply the same source evaluation criteria used in classified intelligence collection:

- **Proximity:** How close is the source to the event or information? A first-hand account carries more weight than a third-hand retelling.
- **Motivation:** Why is the source sharing this information? Propaganda, disinformation, and commercial interests can all colour what appears to be objective reporting.
- **Corroboration:** Can the information be confirmed through independent sources? Single-source OSINT should always be treated as provisional.
- **Timeliness:** When was the information collected or published? OSINT decays rapidly — a social media post from six months ago may no longer reflect the current situation.

## OSINT Tools and Techniques

Professional OSINT practitioners use a range of specialised tools to collect, filter, and analyse open source data efficiently:

- **Search Operators:** Advanced Google operators (site:, filetype:, intitle:, inurl:) allow precise targeting of information within specific domains or file formats.
- **Social Media Analysis Tools:** Tools like Maltego, SpiderFoot, and theHarvester automate the collection of publicly available information about individuals, domains, and organisations.
- **Image Analysis:** Reverse image search (Google Images, TinEye) and metadata extraction (EXIF data) can reveal the origin, location, and history of photographs.
- **Archived Content:** Services like the Wayback Machine allow analysts to view historical versions of websites, uncovering content that has since been removed or altered.
""",

    "masint-explained": """
## MASINT Sensor Types

MASINT encompasses a diverse range of sensor technologies, each designed to detect specific physical phenomena:

- **Radar MASINT:** Analyses radar emissions to determine the size, shape, composition, and movement patterns of objects. Synthetic Aperture Radar (SAR) can produce high-resolution images through cloud cover and at night.
- **Infrared MASINT:** Detects heat signatures emitted by objects. This is critical for identifying hidden facilities, monitoring industrial activity, and tracking moving targets in darkness.
- **Acoustic MASINT:** Captures and analyses sound waves — from submarine propeller signatures to the acoustic profile of missile launches. Underwater acoustic MASINT (sonar) is a cornerstone of naval intelligence.
- **Chemical and Biological MASINT:** Detects trace chemicals or biological agents in the air, water, or soil. Used for weapons monitoring, environmental assessment, and counter-proliferation.
- **Nuclear MASINT:** Monitors radiation signatures to detect nuclear weapons development, reactor operations, and radioactive material movement.

## The MASINT Collection Cycle

MASINT operations follow a structured lifecycle similar to other intelligence disciplines:

1. **Requirements Definition:** Intelligence consumers identify gaps that MASINT can fill — for example, confirming whether a facility is operational based on heat signatures.
2. **Sensor Tasking:** Collection managers select the appropriate sensor types and platforms (satellite, aircraft, drone, ground station) and task them against the target.
3. **Data Collection:** Sensors gather raw physical data, often in vast quantities. A single satellite pass can generate terabytes of radar or infrared data.
4. **Processing and Exploitation:** Raw sensor data is processed into analysable formats — converting radar returns into images, or acoustic signals into frequency profiles.
5. **Analysis and Reporting:** Trained analysts interpret the processed data, extract intelligence value, and produce reports for consumers.

## Challenges in MASINT

MASINT presents unique challenges that distinguish it from other intelligence disciplines:

- **Data Volume:** MASINT sensors generate enormous quantities of data. Processing and storing this data requires significant computational infrastructure and specialised software.
- **Signature Libraries:** Interpreting MASINT data requires extensive libraries of known signatures — the acoustic profile of a particular helicopter model, the infrared signature of a specific missile type. Building and maintaining these libraries is resource-intensive.
- **Environmental Interference:** Weather, terrain, and atmospheric conditions can degrade sensor performance. Cloud cover blocks optical sensors, thermal gradients distort acoustic signals, and electromagnetic interference affects radar.
- **Analyst Expertise:** MASINT analysts require deep scientific and engineering knowledge. The shortage of qualified personnel is a persistent constraint on MASINT capabilities across nearly all intelligence services.
""",

    "timeline-visualization": """
## Why Timeline Visualisation Matters

Timelines are one of the most powerful analytical tools available to intelligence analysts. They transform a jumble of dates, events, and observations into a structured narrative that reveals patterns, gaps, and connections that would otherwise remain hidden.

- **Identifying Sequences:** A timeline shows the chronological order of events, helping analysts understand cause and effect — what happened before, during, and after a critical decision or incident.
- **Spotting Gaps:** When events cluster in certain periods and leave others empty, those gaps can be as informative as the events themselves. A three-month silence in communications may indicate operational security, a change in leadership, or something more significant.
- **Revealing Correlations:** Placing multiple data streams on the same timeline (financial transactions, travel records, communications intercepts) can reveal correlations that no single source would expose.

## Building an Analytical Timeline

Effective timeline construction follows a systematic process:

1. **Data Collection:** Gather all relevant date-stamped information from available sources. This includes not only obvious events but also metadata — when a document was created, when a phone was last active, when a bank account was opened.
2. **Triage and Filtering:** Not every data point belongs on the timeline. Filter for events that are relevant to the analytical question, significant in their own right, or potentially connected to other events.
3. **Normalisation:** Standardise date formats and time zones. Analysts working across multiple time zones must convert all timestamps to a single reference (typically UTC) to avoid misalignments.
4. **Visual Arrangement:** Lay out events chronologically using a tool that allows flexible grouping, colour-coding, and annotation. The physical arrangement should make patterns visible at a glance.

## Key Timeline Patterns

Experienced analysts recognise several recurring patterns in timeline analysis:

- **The Acceleration Pattern:** Events increase in frequency over time, suggesting escalating activity — preparation for an attack, a diplomatic push, or a financial crisis building momentum.
- **The Rhythmic Pattern:** Events recur at regular intervals — weekly meetings, monthly shipments, annual conferences. Deviations from the rhythm can signal disruption or deception.
- **The Trigger Pattern:** A single event is followed by a cascade of related activity. Identifying the trigger event helps analysts distinguish causation from mere correlation.
- **The Lull Before the Storm:** An unexplained period of quiet preceding a major event. This pattern often indicates operational security — adversaries going dark before an operation.

## Digital Timeline Tools

Modern intelligence analysis relies on specialised timeline tools and techniques:

- **Analyst's Notebook:** IBM i2 Analyst's Notebook provides dedicated timeline visualisation with linked analysis, allowing analysts to connect events, entities, and relationships in a single view.
- **Maltego:** While primarily a link analysis tool, Maltego's timeline view helps analysts sequence digital relationships and communications patterns.
- **Custom Spreadsheets:** For many analytical problems, a well-structured spreadsheet with conditional formatting, filters, and sorting provides the most flexible timeline environment.
- **Gantt-Style Tools:** Project management tools adapted for intelligence analysis can visualise overlapping activities, duration of operations, and resource allocation over time.
""",

    "tactical-reports": """
## The Purpose of Tactical Reports

Tactical intelligence reports serve a fundamentally different purpose from strategic assessments. While strategic intelligence informs long-term policy and planning, tactical reports support immediate operational decisions — often at the unit level, with timelines measured in hours or days rather than months or years.

- **Actionable Timeliness:** A tactical report that arrives after the operation has commenced has lost most of its value. Speed of production is the defining characteristic of effective tactical reporting.
- **Specificity:** Tactical reports focus on specific targets, locations, and timeframes. Where a strategic assessment might analyse "trends in terrorist financing," a tactical report identifies "the location of a known financier's safe house as of 0600 hours."
- **Direct Consumer:** The primary audience is the operator or tactical commander who will act on the intelligence. This shapes the format, language, and level of detail.

## Structure of a Tactical Report

While formats vary between agencies and mission types, effective tactical reports share common structural elements:

1. **Heading:** Classification level, report series identifier, date-time group, and warn order (a summary of the most critical information).
2. **Source Reliability:** A clear statement of the source and its assessed reliability, using standard evaluation scales (e.g., A-F for source reliability, 1-6 for information credibility).
3. **Situation Overview:** A concise description of the current situation relevant to the operational question. This section should be no more than a few sentences.
4. **Target Information:** Specific details about the target — location (with grid coordinates if applicable), activity, numbers, equipment, movements, and predicted intent.
5. **Assessment:** The analyst's judgement about likely developments, recommended courses of action, and confidence level in the assessment.
6. **Administrative Details:** Dissemination restrictions, handling instructions, and point of contact for follow-up questions.

## Speed vs. Accuracy

Tactical intelligence exists in permanent tension between speed and accuracy:

- **The 80% Rule:** Many tactical intelligence units operate on the principle that an 80% accurate report delivered in time to act is more valuable than a 100% accurate report delivered after the operation. This is a calculated risk — the analyst must clearly communicate their confidence level so the operator can factor it into their risk assessment.
- **Source Limitations:** Tactical reports often rely on a single source or a limited number of sources. Analysts must resist the temptation to present single-source reporting as confirmed fact.
- **Update Culture:** Tactical reporting should be dynamic. The first report may be fragmentary; subsequent reports should refine, correct, and expand the initial picture. Analysts must be comfortable issuing corrections and updates without ego.

## Dissemination and Handling

Tactical intelligence is only useful if it reaches the right consumer at the right time through the right channel:

- **Digital Dissemination:** Modern tactical reporting systems deliver intelligence directly to handheld devices and vehicle-mounted terminals in near real-time.
- **Verbal Briefings:** For time-critical tactical intelligence, a verbal briefing delivered face-to-face or over encrypted voice channels may precede the written report.
- **Classification and Caveats:** Tactical reports often contain sensitive sources or methods. Proper classification, handling instructions, and dissemination restrictions protect both the intelligence and the sources who provided it.
""",

    "notebook-importing-data": """
## Why Import Data Matters

Analyst's Notebook is most powerful when it works with real data rather than manually entered information. Importing data from structured sources saves time, reduces errors, and enables analysis at scales that would be impractical with manual entry.

- **Time Efficiency:** Manually entering hundreds of entities and links is impractical for any real-world investigation. Importing from spreadsheets, databases, or structured text files can reduce days of data entry to minutes.
- **Consistency:** Automated imports apply consistent formatting, reducing the risk of duplicate entries, inconsistent naming, or missed connections.
- **Scale:** As investigations grow, the volume of data quickly exceeds the capacity of manual methods. Importing allows analysts to work with thousands of entities and relationships.

## Supported Data Formats

Analyst's Notebook can import data from a variety of structured formats:

- **CSV and Excel:** The most common import method. Columns in the spreadsheet map to entity or link attributes in the chart. A simple spreadsheet with columns for "Name," "Role," "Phone Number," and "Last Contact Date" can become a fully populated analysis chart in minutes.
- **XML:** Structured XML files allow more complex imports, including hierarchical relationships, nested attributes, and conditional formatting rules.
- **Database Connections:** Analyst's Notebook can connect directly to SQL databases, importing data from existing case management systems, intelligence databases, or commercial data sources.
- **API Feeds:** Custom scripts and integrations can feed data from REST APIs directly into Analyst's Notebook, enabling near-real time analysis of streaming data.

## The Import Workflow

A structured import process ensures data integrity and maximises analytical value:

1. **Data Preparation:** Before importing, clean and normalise the source data. Standardise date formats, remove duplicates, resolve inconsistencies in names or identifiers, and ensure that relationship data includes both endpoints.
2. **Schema Mapping:** Define how fields in the source data map to entity types, link types, and attributes in Analyst's Notebook. For example, a "phone_number" column in the spreadsheet maps to the "Phone" attribute of a "Person" entity type.
3. **Import Execution:** Run the import and review the results immediately. Check entity counts, link counts, and attribute values to confirm the import matched expectations.
4. **Validation:** Spot-check imported data against the source to ensure accuracy. Pay particular attention to links — incorrectly imported relationships are harder to spot than missing entities.
5. **Cleanup:** Remove or merge any duplicate entities created by the import process. Apply styling to distinguish imported data from manually entered data.

## Common Import Pitfalls

Even experienced analysts encounter common issues when importing data:

- **Date Format Mismatches:** Different systems use different date formats (DD/MM/YYYY vs MM/DD/YYYY, Unix timestamps, ISO 8601). Ensure your import settings match the source data format.
- **Unicode and Special Characters:** Names and locations may include characters that don't translate cleanly between systems. Test imports with a small sample before running a full import.
- **Duplicate Entities:** If the same person appears in multiple source records with slightly different names ("John Smith" vs "Jon Smith"), the import will create separate entities that must be manually merged.
- **Missing Link Endpoints:** Relationship data (calls, meetings, transactions) requires both a source and a target. Records missing one endpoint will fail to import as links.
""",

    "notebook-social-network-analysis": """
## What is Social Network Analysis?

Social Network Analysis (SNA) is a methodological approach to understanding social structures through the mapping and measurement of relationships and flows between connected entities. In intelligence analysis, SNA transforms a collection of individual data points into a picture of group dynamics, influence patterns, and organisational structure.

- **Nodes and Ties:** The fundamental building blocks of any network. Nodes represent entities (people, organisations, locations, accounts) and ties represent relationships or interactions between them (phone calls, meetings, financial transactions, emails).
- **Networks as Structures:** SNA treats networks as structures with measurable properties — density, centrality, clustering, and brokerage. These properties reveal things about the network that no individual data point can show.
- **Dynamic Analysis:** Networks are not static. SNA can track how relationships form, strengthen, weaken, and dissolve over time, revealing the evolution of criminal or terrorist organisations.

## Key SNA Metrics for Intelligence

Several network metrics have proven particularly valuable in intelligence analysis:

- **Degree Centrality:** The number of direct connections a node has. A high-degree node is well-connected and may serve as a hub for information flow. In a criminal network, high-degree individuals are often communicators or coordinators.
- **Betweenness Centrality:** Measures how often a node sits on the shortest path between other nodes. High-betweenness nodes act as bridges between different parts of the network. Removing them can fragment the network — making them priority targets for disruption.
- **Closeness Centrality:** How quickly a node can reach all other nodes in the network. High-closeness nodes have efficient access to information and can disseminate messages rapidly.
- **Eigenvector Centrality:** A measure of influence that accounts not just for how many connections a node has, but how well-connected those connections are. A node connected to influential nodes is itself more influential.

## Network Roles and Signatures

SNA enables analysts to identify specific roles within a network based on structural position:

- **The Hub:** A central node with many connections. Hubs are visible but vulnerable — their high degree makes them easier to identify through surveillance.
- **The Broker (or Gatekeeper):** A node that bridges otherwise separate clusters. Brokers control information flow between groups and are critical to network cohesion.
- **The Isolate:** A node with few or no connections. In intelligence networks, isolates may be sleeper agents, compartmented cells, or individuals under active investigation.
- **The Liaison:** A node connected to multiple clusters without belonging fully to any. Liaisons facilitate coordination between different groups or cells.

## Applying SNA in Investigations

SNA moves from academic concept to operational tool through a systematic analytical process:

1. **Define the Network Boundary:** Which entities should be included? A criminal network's boundaries are rarely clear. Start with known targets and expand outward through their connections.
2. **Collect Relationship Data:** Gather all available data about interactions between entities — call records, financial transactions, travel together, shared addresses, communications content.
3. **Build the Matrix:** Convert relationship data into a matrix where rows and columns are entities and cells indicate the presence, frequency, or strength of a relationship.
4. **Visualise and Analyse:** Import the matrix into Analyst's Notebook or a dedicated SNA tool. Apply centrality metrics, identify clusters, and look for structural anomalies.
5. **Interpret and Report:** Translate network metrics into operational judgements. "N32 has the highest betweenness centrality" becomes "N32 appears to be the primary link between the two cells — disrupting this node would fragment communications."
""",

    "notebook-identities-labels": """
## The Importance of Identity Resolution

In any intelligence investigation, the fundamental analytical task is connecting identities to individuals. A single person may use multiple names, aliases, phone numbers, email addresses, social media accounts, and physical addresses. Identity resolution — determining which identifiers belong to the same person — is the foundation upon which all other analysis rests.

- **The Identity Problem:** A target uses a burner phone with one number, a social media account under a pseudonym, an encrypted messaging account tied to an email address registered in another country, and occasionally meets contacts using an alias. Without identity resolution, these appear to be separate individuals.
- **Resolution Confidence:** Identity resolution is rarely certain. Analyst's Notebook allows analysts to assign confidence levels to identity links, making it possible to work with probabilistic associations while tracking the strength of the evidence.

## Types of Identifiers

Analyst's Notebook supports a wide range of identifier types, each with different evidential weight:

- **Biographic Identifiers:** Name, date of birth, place of birth, nationality. These are relatively stable but can be falsified. A person may have multiple names (legal name, maiden name, alias, nom de guerre).
- **Biometric Identifiers:** Fingerprints, facial recognition data, voice samples, iris scans. These are the most reliable identifiers but the least commonly available in open source investigations.
- **Documentary Identifiers:** Passport numbers, national ID numbers, driver's licence numbers. These link a person to a legal identity but may be forged or shared.
- **Digital Identifiers:** Phone numbers (MSISDN, IMSI, IMEI), email addresses, social media usernames, IP addresses, cryptocurrency wallet addresses. Digital identifiers are abundant but ephemeral — they change frequently and can be anonymised.
- **Behavioural Identifiers:** Communication patterns, travel routes, operational tradecraft, linguistic markers. These are the most subtle identifiers and often the hardest for adversaries to change.

## Link Analysis Techniques

Once identities are resolved, link analysis reveals how individuals relate to each other and to events:

- **Associational Links:** Two individuals are known to have met, spoken, or transacted. These are direct links that form the backbone of network analysis.
- **Temporal Links:** Two individuals were in the same location at the same time — not necessarily together, but their presence creates a potential association worth investigating.
- **Transactional Links:** Financial transfers, phone calls, text messages, emails. These leave documentary evidence and are the most verifiable type of link.
- **Attributional Links:** Two individuals share an attribute — same address, same employer, same educational institution. These are weaker than associational links but can generate leads.

## Best Practices for Label Management

Effective label and identity management in Analyst's Notebook requires disciplined workflow practices:

- **Consistent Naming Conventions:** Establish a standard format for entity names at the start of every investigation. Full names with surname first (SMITH, John) reduces sorting and searching problems.
- **Source Attribution:** Every label and identity link should be attributed to its source. When information comes from multiple sources, track which source provided which identifier.
- **Confidence Scoring:** Use a consistent confidence scale for identity resolution. A rule of thumb: a confirmed phone number linked to a known address scores higher than two individuals using the same type of disposable phone.
- **Regular Review:** As investigations progress, new information may confirm or challenge existing identity resolutions. Periodically review resolved identities against fresh data.
- **Deconfliction:** In larger investigations, multiple analysts may be working on the same targets. Centralised identity management prevents duplicated effort and conflicting conclusions.
""",

    "real-time-osint": """
## What Is Real-Time OSINT?

Real-time OSINT refers to the collection, processing, and analysis of open source information as it is created, with minimal delay between publication and exploitation. Where traditional OSINT might analyse a situation days or weeks after the fact, real-time OSINT operates in the same timeframe as the events themselves — often providing intelligence before traditional classified sources can respond.

- **The Speed Advantage:** Real-time OSINT can detect events as they unfold — a protest, a military movement, a natural disaster — sometimes before official channels are aware. This makes it invaluable for situational awareness and early warning.
- **The Noise Problem:** Real-time sources generate enormous volumes of data. Separating signal from noise in real-time requires automated filtering, triage, and validation that traditional OSINT methods don't need.
- **Verification Challenge:** Speed and accuracy are in tension in real-time OSINT. Early reports of an event may be inaccurate, misleading, or deliberately deceptive. The analyst must provide timely intelligence without sacrificing reliability.

## Real-Time OSINT Sources

Different sources offer different trade-offs between speed, reliability, and depth:

- **Social Media Platforms:** Twitter/X, Telegram, Reddit, and Facebook are the primary real-time OSINT sources. They offer immediacy and diversity of perspectives, but vary enormously in reliability. Telegram channels operated by known groups are often more reliable than anonymous posts on X.
- **Live Streaming:** YouTube Live, Twitch, and dedicated streaming platforms allow analysts to observe events as they happen. Open-source intelligence cells monitoring the Ukraine conflict, for example, have used live drone feeds and dashcam streams to track military movements.
- **Public Safety Feeds:** Police scanners, emergency service broadcasts, and air traffic control communications are increasingly available through platforms like Broadcastify. These provide raw, unmediated information about incidents as they unfold.
- **Sensor Networks:** Publicly accessible webcams, traffic cameras, and environmental sensors provide continuous data streams. Platforms like EarthCam and Windy aggregate thousands of live camera feeds from around the world.
- **Official Channels:** Government press releases, military social media accounts, and official statements often break news faster than traditional media. While these sources carry their own biases, they are authoritative within their domain.

## Real-Time OSINT Tools

Dedicated tools help analysts manage the volume and velocity of real-time OSINT:

- **Social Media Monitoring:** Tools like TweetDeck, Hootsuite, and Brandwatch allow analysts to monitor multiple keywords, accounts, and hashtags across platforms in real-time. For intelligence purposes, custom monitoring solutions with Boolean search capabilities are preferred.
- **Alert Systems:** Google Alerts, Talkwalker Alerts, and custom RSS feeds provide notifications when new content matches specific search criteria. These free tools can be surprisingly effective for early warning.
- **OSINT Dashboards:** Platforms like Echosec and Social Links aggregate multiple real-time sources into a single dashboard, with geolocation filtering, sentiment analysis, and export capabilities.
- **Browser Extensions:** Extensions like Video DownloadHelper, RSS Subscription, and Wayback Machine integration help analysts capture and preserve real-time content before it is deleted or modified.

## Verification in Real-Time

Real-time OSINT is only as valuable as its accuracy. Verification must be built into the workflow:

- **Source Authentication:** Before trusting a real-time source, verify its identity. Is the social media account verified? Does the account have a history of reliable reporting? Is the source in a position to know the information they're sharing?
- **Cross-Validation:** Do not rely on a single real-time source. Confirm significant information through at least two independent sources before reporting it as fact.
- **Geolocation:** Whenever possible, verify the location of reported events using geospatial data — check the reported location against maps, satellite imagery, and other geolocated content.
- **Temporal Consistency:** Does the chronology of reported events make sense? Inconsistencies in timestamps, lighting conditions, weather, or other temporal markers can indicate fabricated or misattributed content.
- **Open Source Forensics:** For visual content, examine metadata, reverse image search, and check for signs of manipulation. Deepfakes and AI-generated content are an increasing challenge for real-time OSINT verification.
""",
}

def fix_and_expand(slug):
    """Fix boilerplate and add expanded content."""
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    with open(path) as f:
        content = f.read()
    
    # Fix leftover export lines inside topicContent
    content = re.sub(r'\n\s*\)\s*\n\s*export default \w+Page\n\s*`', '\n`', content)
    content = re.sub(r'\n\s*export default \w+Page\n\s*`', '\n`', content)
    content = re.sub(r'\n\s*\)\n\s*`', '\n`', content)
    
    # Add expanded content before the closing backtick
    if slug in EXPANSIONS and '`\n\nexport default function' in content:
        content = content.replace('`\n\nexport default function', EXPANSIONS[slug] + '\n`\n\nexport default function')
    elif slug in EXPANSIONS and content.rstrip().endswith('`'):
        content = content.rstrip()[:-1] + EXPANSIONS[slug] + '\n`'
    
    with open(path, 'w') as f:
        f.write(content)
    
    new_lines = len(content.split('\n'))
    print(f"  DONE {slug}: expanded")

for slug in EXPANSIONS:
    fix_and_expand(slug)

print("\nAll expansions complete.")
