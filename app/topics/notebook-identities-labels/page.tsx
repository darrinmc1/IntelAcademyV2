import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Identities Labels - The Intel Analyst Academy",
  description: "Learn how to use identity and label item properties in i2 Analyst&amp;apos;s Notebook for effective chart creation.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
title: "Identities and Labels in Analyst's Notebook | The Intel Analyst Academy",
description:
"Learn how to use identity and label item properties in i2 Analyst's Notebook for effective chart creation.",

← Back to Analyst's Notebook Learning Path

# Identities and Labels in Analyst's Notebook

Master the fundamental concepts of identities and labels for effective chart creation and analysis

## Understanding Identities and Labels

Identities and labels are fundamental components in i2 Analyst's Notebook. They provide the foundation for
creating meaningful visualizations and conducting effective analysis.

### Identities in Analyst's Notebook

An identity in Analyst's Notebook is a unique identifier for an entity or link. Identities serve several
important purposes:

- They uniquely identify each item on your chart
- They allow the software to recognize when two items represent the same real-world entity
- They enable merging of duplicate entities during data import
- They support matching operations across different charts

When creating entities manually, you'll assign identities through the entity properties. When importing
data, identities are typically mapped from a unique field in your dataset.

### Labels in Analyst's Notebook

Labels are the visible text that appears on your chart items. Effective labeling is crucial for chart
readability and analysis:

- Labels provide context and meaning to the visual elements
- They can display key attributes of an entity or relationship
- They can be formatted to highlight important information
- They support search operations within your chart

Analyst's Notebook provides flexible options for configuring labels, including multi-line labels, custom
formatting, and conditional display based on attributes.

## Best Practices for Identities and Labels
Consider these best practices when working with identities and labels in your charts:

- Use consistent naming conventions for identities
- Include sufficient detail in labels to make entities distinguishable
- Keep labels concise to avoid visual clutter
- Use formatting (bold, color, etc.) sparingly to highlight key information
- Consider using multi-line labels to organize information logically
- Ensure that identity fields are properly mapped during data imports

### Related Topics

-

Creating a Chart

-

Editing Chart Items

-

Creating Entity Relationship Charts

### Next Steps

-

Creating a Chart

-

Example Materials in Analyst's Notebook

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

`

export default function NotebookidentitieslabelsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Identities and Labels in Analyst&#x27;s Notebook"
        subtitle="Learn how to use identity and label item properties in i2 Analyst&amp;apos;s Notebook for effective chart creation."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="notebook-identities-labels" />
      </MicroLesson>
    </LessonContainer>
  )
}
