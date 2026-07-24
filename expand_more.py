#!/usr/bin/env python3
"""Expand remaining short lesson pages."""
import re, os

TOPICS_DIR = "/workspace/intel-academy/app/topics"

EXPANSIONS = {
    "notebook-example-materials": """
## Selecting Examples for Analysis

The examples and materials you include in an Analyst's Notebook chart are not neutral — they shape how others interpret the data. Careful selection and annotation of example materials ensures that the analysis is transparent, reproducible, and defensible.

- **Representative Examples:** Choose examples that fairly represent the broader dataset. Cherry-picking examples that support a preferred conclusion undermines analytical integrity.
- **Anomalous Examples:** Include examples that contradict the prevailing pattern. These are often where the most valuable intelligence insights emerge — the data point that doesn't fit reveals the limits of your understanding.
- **Temporal Spread:** Ensure examples span the full timeframe of the investigation. Including only recent examples may miss early indicators; including only old examples may miss current developments.

## Annotating Example Materials

Raw data is rarely meaningful without context. Effective annotation of example materials adds analytical value:

- **Source Attribution:** Every example must be traceable to its source. Include the source identifier, collection method, date of collection, and assessed reliability.
- **Relevance Statement:** Briefly explain why this particular example was included. What analytical question does it illuminate? What hypothesis does it support or challenge?
- **Confidence Indicators:** Where the example involves interpretation or inference (rather than direct observation), indicate the analyst's confidence level. This allows consumers to weigh the evidence appropriately.
- **Cross-References:** Link example materials to related entities, events, or reports in the chart. A well-annotated chart allows consumers to follow the analytical trail from raw data to finished assessment.

## Using Templates Effectively

Analyst's Notebook templates standardise the presentation of common entity and link types, saving time and ensuring consistency:

- **Entity Templates:** Pre-configure standard entity types (Person, Organisation, Location, Event) with the attributes most relevant to your investigation. For example, a Person template might include fields for Name, Alias, DOB, Phone, Email, and Status.
- **Link Templates:** Standardise how different relationship types are displayed. A phone call link might show duration and frequency; a financial link might show amount and currency.
- **Chart Templates:** For recurring investigation types (fraud networks, terrorist cells, organised crime groups), create chart templates that pre-populate the analytical framework, saving setup time on each new case.
""",

    "notebook-creating-chart": """
## Creating Your First Chart

Starting a new chart in Analyst's Notebook requires planning beyond simply placing entities on the canvas. A well-structured chart begins with a clear analytical question and a defined scope.

- **Define the Question:** Every Intelligence chart should answer a specific analytical question. Before creating the chart, write down the question in one sentence. This focus prevents the chart from becoming an undirected collection of data.
- **Set Boundaries:** Determine what data will be included and what will be left out. An investigation into a fraud ring may include financial records and communications data but exclude unrelated personal relationships.
- **Choose the Chart Type:** Analyst's Notebook offers different chart types for different analytical needs — link charts for relationship analysis, timeline charts for temporal analysis, and combination charts for multi-dimensional problems.

## Entity Creation Best Practices

Entities are the building blocks of any chart. Consistent entity creation practices prevent confusion as the chart grows:

- **Single Instance Rule:** Each real-world person, organisation, or location should appear exactly once in the chart. Duplicate entities are the most common error in Analyst's Notebook charts and can lead to incorrect analytical conclusions.
- **Attribute Completeness:** Fill in all available attributes for each entity. An entity with only a name provides limited analytical value — one with phone numbers, addresses, associations, and notes provides a rich analytical target.
- **Entity Naming:** Use a consistent naming convention from the start. A recommended approach: SURNAME, Given Name for individuals; full legal name for organisations; City, Country for locations.
- **Icon Selection:** Choose entity icons that communicate meaning at a glance. Use standard icons for common entity types and reserve custom icons for specific categories that appear frequently in your investigation.

## Building Links Between Entities

Links define the structure of the chart and require as much care as entity creation:

- **Link Direction:** Understand when links should be directed (A calls B) versus undirected (A and B are siblings). Directed links enable analysis of flow and hierarchy.
- **Link Semantics:** Use precise link types rather than generic "associated with" links. A "subscriber of" link between a person and a phone number carries more analytical weight than a generic "related to" link.
- **Temporal Links:** Where possible, include temporal attributes on links — when a call was made, when a transaction occurred. Temporal links enable timeline analysis and can reveal patterns and rhythms.
- **Strength and Frequency:** Where data supports it, encode the strength or frequency of a relationship as a link attribute. A phone number that appears 200 times in call records is more significant than one that appears twice.
""",

    "excel-fundamentals-for-analysts": """
## Excel as an Analytical Tool

Microsoft Excel is one of the most versatile tools available to intelligence analysts. While specialised analytical platforms have their place, Excel's accessibility, flexibility, and breadth of functionality make it indispensable for data preparation, preliminary analysis, and rapid reporting.

- **Universal Access:** Excel is available on nearly every intelligence workstation. Unlike specialised analytical tools, there is no licensing barrier or training prerequisite to begin working with data in Excel.
- **Data Agnostic:** Excel can ingest data from CSV exports, database queries, manual entry, web scraping, and API feeds. This flexibility makes it the ideal first stop for heterogeneous data arriving from multiple collection sources.
- **Rapid Prototyping:** Before building a complex analytical model in a dedicated platform, Excel allows analysts to explore the data, test hypotheses, and identify patterns that warrant deeper investigation.

## Essential Excel Functions for Analysts

Mastering a core set of Excel functions dramatically increases analytical productivity:

- **VLOOKUP and XLOOKUP:** The most important functions for intelligence analysis. They allow analysts to cross-reference data between tables — matching phone numbers to subscriber records, transaction IDs to account holders, or addresses to case files. XLOOKUP, available in modern Excel, is more flexible and should be preferred where available.
- **PivotTables:** The single most powerful feature in Excel for intelligence analysis. PivotTables allow analysts to aggregate, group, and summarise large datasets with drag-and-drop simplicity. A PivotTable can reveal patterns in thousands of call records — most frequent contacts, busiest times of day, numbers that appear across multiple cases — in seconds.
- **FILTER and SORT:** Dynamic filtering capabilities allow analysts to isolate subsets of data for focused examination. Combined with conditional formatting, filtering turns a static spreadsheet into an interactive analytical workspace.
- **TEXT Functions:** LEFT, RIGHT, MID, FIND, and CONCATENATE are essential for cleaning and normalising messy data — extracting area codes from phone numbers, separating full names into first and last, or standardising date formats across datasets.
- **Conditional Formatting:** Applied intelligently, conditional formatting can highlight outliers, flag anomalies, and reveal patterns that would be invisible in raw numerical data. For example, highlighting all transactions above a threshold or all calls shorter than 30 seconds.

## Data Cleaning Workflows

Real-world data is almost never analysis-ready. Analysts typically spend 60-80% of their time cleaning and preparing data before meaningful analysis can begin:

1. **Remove Duplicates:** Use Excel's Remove Duplicates feature to identify and eliminate redundant records. For more nuanced deconfliction, use COUNTIF or UNIQUE functions to flag potential matches for manual review.
2. **Standardise Formats:** Ensure consistent date formats (use ISO 8601: YYYY-MM-DD), number formats (remove currency symbols for computational analysis), and text casing across all datasets.
3. **Handle Missing Data:** Decide how to treat blank cells — exclude the record, flag for follow-up, or impute based on other available data. Document the decision so analytical conclusions are reproducible.
4. **Validate Against Source:** Spot-check cleaned data against the original source to ensure the cleaning process didn't introduce errors. This is especially important when data has been manipulated through multiple formulas and transformations.
""",

    "what-is-strategic-intelligence": """
## Defining Strategic Intelligence

Strategic intelligence is intelligence that supports long-term policy, planning, and decision-making at the highest levels of an organisation or government. Unlike tactical intelligence, which addresses immediate operational questions, strategic intelligence provides the contextual understanding that shapes how decision-makers think about the future.

- **Time Horizon:** Strategic intelligence typically looks months to years ahead. It identifies emerging trends, assesses long-term risks and opportunities, and provides the foundation for policy development and resource allocation.
- **Scope:** Strategic intelligence is broad. It integrates political, economic, military, social, and technological factors into a comprehensive picture that no single source or discipline can provide alone.
- **Consumer:** The primary consumers of strategic intelligence are senior decision-makers — heads of state, cabinet ministers, military commanders, corporate boards. These consumers have limited time and require concise, authoritative assessments that speak directly to their decisions.

## The Strategic Intelligence Cycle

Strategic intelligence follows a modified intelligence cycle that emphasises deep analysis over rapid production:

1. **Direction and Prioritisation:** Strategic intelligence requirements are set by senior consumers. These are typically broad, persistent questions rather than time-sensitive taskings. "What will the geopolitical landscape look like in five years?" is a strategic intelligence requirement.
2. **Collection Across Disciplines:** Strategic intelligence draws on all available collection disciplines — HUMINT, SIGINT, GEOINT, OSINT, and MASINT. It also integrates non-traditional sources such as academic research, think tank reports, economic data, and cultural analysis.
3. **Integration and Synthesis:** This is the core of strategic intelligence. Analysts integrate information from multiple sources, disciplines, and methodologies into a coherent assessment that accounts for complexity, uncertainty, and competing explanations.
4. **Long-Form Production:** Strategic intelligence is typically delivered through longer-form products — National Intelligence Estimates, strategic assessments, annual threat assessments. These products are structured to provide both deep analysis and executive summaries.
5. **Review and Update:** Strategic intelligence products are living documents. They are reviewed and updated as new information becomes available, ensuring they remain relevant to evolving consumer needs.

## Key Characteristics of Strategic Analysis

Strategic analysis differs from other forms of intelligence analysis in several important ways:

- **Emphasis on Drivers and Dynamics:** Strategic analysis focuses not just on what is happening but on why — the underlying drivers, structural factors, and systemic dynamics that shape events. This is necessarily more interpretive than descriptive.
- **Scenario Development:** Strategic intelligence often uses scenario analysis to explore alternative futures. Scenarios help consumers understand that the future is not predetermined and prepare for multiple possible outcomes.
- **Indicators and Warnings:** Strategic intelligence identifies indicators — observable events or conditions that signal a change in the strategic environment. An indicator for a geopolitical shift might be a change in trade policy, a military deployment, or a leadership transition.
- **Long-Term Forecasting:** Strategic intelligence makes forecasts about the future, always with attendant caveats about uncertainty. The value of a strategic forecast is not in being right or wrong but in providing a framework for thinking about what might happen and why.

## Strategic Intelligence Products

Common strategic intelligence products include:

- **National Intelligence Estimates (NIEs):** The highest-level coordinated intelligence assessments in the US system, NIEs represent the consensus judgement of the entire Intelligence Community on a strategic issue.
- **Strategic Early Warning Reports:** Products that identify emerging threats or opportunities before they become obvious, giving decision-makers time to prepare or respond.
- **Capability Assessments:** Evaluations of an adversary's military, economic, or technological capabilities over a multi-year timeframe.
- **Regional Strategic Assessments:** Comprehensive analyses of a country or region's political, economic, and security trajectory, typically produced annually.
""",

    "analysis-competing-hypotheses": """
## What is Analysis of Competing Hypotheses?

Analysis of Competing Hypotheses (ACH) is one of the most widely taught structured analytical techniques in the intelligence community. Developed by Richards Heuer, ACH addresses a fundamental cognitive challenge: analysts naturally gravitate toward a single explanation and interpret subsequent evidence to support it. ACH forces the systematic consideration of multiple explanations before evidence is evaluated.

- **The Core Insight:** ACH inverts the natural analytical process. Instead of asking "what does the evidence tell me?", ACH asks "if this hypothesis were true, what evidence would I expect to see?" This reframing reduces confirmation bias.
- **Not a Prediction Tool:** ACH is not designed to predict the future. It is designed to evaluate which explanation best fits the available evidence, given the inherent uncertainties of intelligence analysis.
- **When to Use ACH:** ACH is most valuable for analytical problems where there are multiple plausible explanations, where the stakes of getting it wrong are high, and where the analyst has sufficient evidence to discriminate between hypotheses.

## The ACH Process

ACH follows a structured eight-step process:

1. **Identify the Possible Hypotheses:** Generate a set of plausible explanations for the phenomenon under investigation. Include the null hypothesis — that the observed situation is the result of normal, innocent activity. Analysts often stop at two or three hypotheses; the technique works best when at least four or five are considered.
2. **List the Evidence and Assumptions:** Catalogue all relevant evidence, including the absence of expected evidence. Distinguish between confirmed facts, reported information, and analytical assumptions.
3. **Build the Matrix:** Create a matrix with hypotheses as columns and evidence as rows. For each cell, assess whether the evidence is consistent (+), inconsistent (-), or irrelevant (N/A) to the hypothesis.
4. **Refine the Matrix:** Re-examine each entry. Evidence that appears consistent with all hypotheses may be too general to be diagnostic. Evidence that is inconsistent with a hypothesis is analytically valuable and should be scrutinised for accuracy.
5. **Draw Tentative Conclusions:** The hypothesis with the fewest and least damaging inconsistencies is tentatively the strongest. However, also consider the hypothesis that would be most damaging if wrong — sensitivity to being wrong is an important analytical consideration.
6. **Consider the Sensitivity of Conclusions:** Test how robust the conclusion is to changes in key assumptions. If a single piece of evidence shifts the assessment, the conclusion is fragile and should be caveated accordingly.
7. **Identify Diagnostic Evidence:** Determine what new evidence would change the assessment. This focuses future collection efforts and gives consumers a basis for monitoring the situation.
8. **Document the Reasoning:** The ACH matrix itself serves as documentation of the analytical process, allowing reviewers and consumers to understand how the conclusion was reached.

## Common ACH Mistakes

Even experienced analysts make predictable errors when applying ACH:

- **Including the Hypothesis You Want to Be True:** Analysts may unconsciously include a favoured hypothesis and then treat the matrix as confirmation. The technique works best when hypotheses are generated before evidence is reviewed.
- **Neglecting the Null Hypothesis:** The "nothing unusual is happening" hypothesis is often dismissed too quickly. Strategic surprises often occur because analysts rejected the null hypothesis based on ambiguous evidence.
- **Evidence that Fits Everything:** Generic evidence — "the country has a history of regional tensions" — is consistent with many hypotheses and is not diagnostically useful. ACH works best when evidence is specific and discriminating.
- **Treating ACH Output as Truth:** ACH is a thinking tool, not a truth machine. The matrix reflects the analyst's current understanding and is limited by the quality and completeness of available evidence.
""",

    "analysts-notebook-fundamentals": """
## What is Analyst's Notebook?

IBM i2 Analyst's Notebook is the most widely used visual analysis tool in law enforcement, intelligence, and corporate security. It transforms complex relational data into visual charts that reveal patterns, networks, and connections that would be difficult or impossible to see in text-based formats.

- **Visual Analysis Paradigm:** Unlike database tools that present data in tables or text tools that present data in reports, Analyst's Notebook works on a visual canvas where entities (people, places, things) are represented as icons and their relationships as connecting lines. This visual representation leverages the human brain's exceptional pattern-recognition capabilities.
- **Multi-Dimensional Analysis:** Analyst's Notebook supports multiple analytical dimensions simultaneously — network analysis (who is connected to whom), temporal analysis (when events occurred), geospatial analysis (where events occurred), and hierarchical analysis (organisational structures).
- **Enterprise Integration:** Analyst's Notebook can integrate with existing intelligence databases, case management systems, and data feeds, allowing analysts to work with live data rather than static exports.

## The Analyst's Notebook Interface

New users should familiarise themselves with the core interface components:

- **The Chart Canvas:** The main workspace where entities and links are placed and arranged. The canvas supports unlimited zoom, pan, and layering, allowing analysts to work with charts ranging from a handful of entities to thousands.
- **The Entity Palette:** A toolbar containing standard entity icons (Person, Organisation, Location, Vehicle, Communication, Financial, etc.). Entities are dragged from the palette onto the canvas.
- **The Link Palette:** Defines the types of relationships that can be drawn between entities — ownership, communication, association, temporal, and custom link types.
- **The Attributes Panel:** Displays and allows editing of detailed information about the selected entity or link. Each entity type has configurable attribute fields.
- **The Conditioned View Panel:** Allows analysts to create rule-based views that highlight specific patterns — for example, highlighting all entities connected to a particular phone number in red.

## Core Analytical Capabilities

Analyst's Notebook provides several analytical capabilities that distinguish it from generic charting tools:

- **Link Analysis:** The core capability — identifying and visualising connections between entities. Link analysis reveals hidden relationships, communication chains, and organisational structures.
- **Timeline Analysis:** Chart entities and events on a common timeline to reveal sequences, gaps, and temporal patterns. Timeline analysis is essential for understanding the chronology of complex investigations.
- **Social Network Analysis:** Built-in SNA metrics (degree centrality, betweenness centrality, etc.) quantify the structural position of entities within a network. These metrics can identify key players, brokers, and peripheral actors.
- **Entity Resolution:** Tools to identify and merge duplicate entities — when the same person appears under slightly different names or with different identifying information across multiple data sources.
- **Chart Comparison:** Compare two versions of a chart to identify what has changed — new entities, new links, or relationships that have been modified or removed.
""",

    "entity-relationship-charts": """
## What Are Entity-Relationship Charts?

Entity-relationship (ER) charts are a visual analytical tool used to map and analyse the connections between people, organisations, locations, events, and other entities relevant to an intelligence investigation. Unlike generic association charts, ER charts in an intelligence context incorporate analytical weighting, temporal context, and evidentiary standards.

- **Beyond Simple Association:** An ER chart does more than show who knows whom. It incorporates the nature, strength, direction, and duration of relationships, as well as the evidentiary basis for each connection.
- **Dynamic Analysis:** ER charts are not static products. As new information becomes available, entities and relationships are added, modified, or removed. The evolving chart itself becomes a record of the analytical process.
- **Hypothesis Testing:** ER charts are a tool for testing hypotheses about structure and relationships. Does the chart suggest a hierarchical organisation or a distributed network? Are key individuals connected to multiple otherwise separate clusters?

## Building an Entity-Relationship Chart

Effective ER charts follow a systematic construction process:

1. **Entity Identification:** Identify all relevant entities from available source material. This includes not only obvious entities (named individuals, known organisations) but also latent entities that emerge from the data (common phone numbers, shared addresses, recurring patterns).
2. **Relationship Extraction:** For each pair of entities, determine whether a relationship exists and, if so, what type. Relationship types include direct communication, financial transaction, shared location, common membership, and familial association.
3. **Strength and Confidence Assessment:** Not all relationships are equally significant. A single phone call between two numbers is weaker evidence of a relationship than 200 calls over six months. Assign relationship strength and analytical confidence based on the available evidence.
4. **Temporal Placement:** Place entities and relationships in time where possible. Knowing when a relationship was active is often as important as knowing it existed. A relationship that ended before the investigation period may be irrelevant; one that began during the investigation period may be highly significant.
5. **Visual Arrangement:** Arrange entities on the chart to reveal patterns. Place central or high-value entities near the centre, cluster related entities together, and use proximity to indicate relationship strength.

## Key Patterns to Identify

ER charts are particularly effective at revealing several recurring structural patterns:

- **The Star Pattern:** A central entity connected to many peripheral entities with few connections among themselves. This pattern suggests a hub-and-spoke structure, common in drug trafficking networks and intelligence rings where cell members communicate through a single handler.
- **The Chain Pattern:** Entities connected in a linear sequence — A connects to B, B connects to C, C connects to D. Chains often indicate hierarchical communication paths or supply chains. Identifying chain breakpoints reveals critical nodes for disruption.
- **The Cluster Pattern:** Multiple entities with dense interconnections forming a distinct group, with few connections to entities outside the group. Clusters indicate cohesive sub-groups — teams, cells, or departments within larger organisations.
- **The Bridge Pattern:** An entity that connects two otherwise separate clusters. Bridge entities are analytically significant because they control information flow between groups and are often the most effective targets for network disruption.
- **The Isolate Pattern:** An entity with no connections in the chart. Isolates may be irrelevant to the investigation, may represent entities whose connections haven't yet been discovered, or may be deliberately compartmented operatives.

## Analytical Pitfalls

Common mistakes in ER chart construction and interpretation include:

- **Over-Inclusion:** Including every entity and relationship without analytical triage produces an unreadable chart. Apply the "so what?" test — if removing an entity wouldn't change the analytical picture, consider whether it needs to be in the chart.
- **Assuming Absence Means Absence:** The absence of a visible connection does not mean no connection exists. It may mean the connection operates through channels not captured in available data — encrypted communications, in-person meetings, or cutout intermediaries.
- **Presenting Correlation as Causation:** Two entities that both connect to a third entity are not necessarily connected to each other. A correlation in the chart may reflect a common activity rather than a direct relationship.
""",

    "google-dorking": """
## What is Google Dorking?

Google Dorking — also known as Google hacking — is the practice of using advanced search operators to find information that website owners did not intend to make publicly accessible, or that is difficult to locate through standard searches. For intelligence analysts, Google Dorking is a core OSINT technique for discovering exposed data, identifying vulnerabilities, and mapping digital infrastructure.

- **Beyond the Search Bar:** Most users type a few keywords and click the first result. Google Dorking uses the full power of Google's search syntax to target specific file types, domains, date ranges, and page structures that standard searches miss.
- **Legal and Ethical Boundaries:** Google Dorking accesses information that Google has already indexed from publicly accessible pages. It does not involve hacking, bypassing authentication, or exploiting vulnerabilities. However, the information discovered may reveal security weaknesses or expose data that the owner considers sensitive. Analysts should document their searches and ensure their activities remain within authorised collection parameters.

## Essential Google Dork Operators

Mastering these operators is the foundation of effective Google Dorking:

- **site: — Target a specific domain or subdomain.** `site:gov classified` returns all pages on .gov domains containing the word "classified." `site:example.com filetype:pdf` returns all PDF files hosted on example.com.
- **filetype: — Restrict results to a specific file format.** Critical for finding documents, spreadsheets, and presentations that may contain sensitive information. `filetype:xls salary` finds salary spreadsheets. `filetype:pdf confidential` finds PDFs labelled as confidential.
- **intitle: — Find pages with specific words in the title.** `intitle:"index of"` is one of the most famous dorks — it finds directory listings that reveal the file structure of web servers. `intitle:"classified" filetype:pdf` finds PDFs with "classified" in their title.
- **inurl: — Search for specific text in the URL.** `inurl:admin` finds login pages and admin panels. `inurl:passwd` finds pages that may expose password files. `inurl:wp-admin` targets WordPress admin interfaces.
- **intext: — Search for text in the body of the page.** More specific than a standard keyword search. `intext:"confidential" intext:"not for distribution" site:example.com` finds pages on a specific domain that contain both phrases.
- **cache: — View Google's cached version of a page.** Essential for preserving content that may have been removed or changed since Google last indexed it. `cache:example.com/sensitive-document.pdf` retrieves the indexed version even if the original has been taken down.

## Combining Operators for Intelligence Collection

The true power of Google Dorking comes from combining operators in targeted search strings:

- **Finding Exposed Documents:** `site:example.com filetype:pdf intitle:confidential` — finds PDFs labelled as confidential on the target domain.
- **Identifying Vulnerable Systems:** `inurl:"/cgi-bin/" site:target.gov filetype:cgi` — identifies CGI scripts that may have known vulnerabilities.
- **Mapping Network Infrastructure:** `site:*.target.org intitle:"index of"` — finds exposed directory listings across all subdomains.
- **Discovering Login Portals:** `inurl:login inurl:admin site:target.com` — finds administrative login pages that may be targets for credential testing.
- **Locating Backup Files:** `filetype:bak site:example.com` — finds backup files (`.bak`) that often contain older versions of sensitive documents that were insufficiently secured.

## Documenting and Preserving Findings

Google Dorking discoveries are often ephemeral. Pages may be removed, access may be restricted, or Google's cache may be updated. Proper documentation is essential:

- **Capture Timestamps:** Record the date and time of each dork query. If a page is later removed, the timestamped discovery establishes that the information was publicly accessible at the time of collection.
- **Preserve Evidence:** Use tools like the Wayback Machine to archive discovered pages, and take screenshots or PDF captures with visible timestamps. Google's cached view also serves as a preservation record.
- **Log Query Parameters:** Document the exact search string used. Different operators and combinations produce different results, and the ability to reproduce a search is important for both analytical rigour and potential evidentiary requirements.
- **Chain of Discovery:** In operational settings, document the process that led from a broad search to a specific discovery. The analytical path is often as important as the finding itself.

## Intelligence Applications

Google Dorking has proven valuable in numerous intelligence and investigative contexts:

- **Corporate Intelligence:** Discovering competitor pricing lists, unreleased product documentation, or internal strategy documents exposed through misconfigured servers.
- **Investigative Journalism:** Journalists have used Google Dorking to uncover police manuals, government contracts, and internal corporate communications that were inadvertently made public.
- **Cybersecurity Assessment:** Red teams and penetration testers use Google Dorking as a reconnaissance tool to identify exposed assets, vulnerable systems, and potential entry points before conducting more intrusive testing.
- **Counter-Intelligence:** Monitoring for exposed sensitive data within one's own organisation — discovering that a sensitive document has been inadvertently indexed before adversaries find it.
""",
}

def expand_page(slug):
    path = os.path.join(TOPICS_DIR, slug, "page.tsx")
    with open(path) as f:
        content = f.read()
    
    # Add expanded content before the closing backtick
    if slug in EXPANSIONS and '`\n\nexport default function' in content:
        content = content.replace('`\n\nexport default function', EXPANSIONS[slug] + '\n`\n\nexport default function')
        with open(path, 'w') as f:
            f.write(content)
        new_lines = len(content.split('\n'))
        print(f"  {slug}: expanded to {new_lines} lines")
        return True
    else:
        print(f"  {slug}: SKIP - pattern not found")
        return False

for slug in EXPANSIONS:
    expand_page(slug)

print("\nAll expansions complete.")
