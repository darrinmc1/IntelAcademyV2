import {
  DISCLAIMER,
  PRICE_MAP_DETAIL,
  PRICE_MAP_LABEL,
  REFUND_POLICY,
  SITE_URL,
  getParseablePricing,
} from "@/lib/pricing"

export const academyBriefFaqs = [
  {
    question: "What is Academy Brief?",
    answer:
      "A one-job tool on The Intel Analyst Academy: paste a raw intel dump or notes and receive a structured brief using the academy method, with citations to real catalog topics and lessons. It is not a chat-with-the-site assistant.",
  },
  {
    question: "Is this an operational intelligence product?",
    answer: DISCLAIMER,
  },
  {
    question: "Which lessons does the brief cite?",
    answer:
      "Only real catalog topics and method lessons that exist on this site — for example Intelligence Report Components, Intelligence Briefings, Estimative Language, Analysis of Competing Hypotheses, and Recommendation Framework. Citations link to those pages.",
  },
  {
    question: "Is the Academy Brief preview free?",
    answer: "Yes. One structured-brief preview is free. Academy Brief is a training tool.",
  },
  {
    question: "What is free right now?",
    answer: `${PRICE_MAP_LABEL} ${PRICE_MAP_DETAIL}`,
  },
  {
    question: "Are payments set up?",
    answer: REFUND_POLICY,
  },
  {
    question: "What does the structured brief contain?",
    answer:
      "BLUF headline, key judgments with confidence, situation, analysis tied to the dump, source assessment, alternatives and gaps, recommendations, and academy lesson citations.",
  },
  {
    question: "What happens if the AI key is missing?",
    answer:
      "The tool still returns a training-preview brief: it organizes the pasted dump and attaches real catalog citations so you can practice the method. It is clearly labeled as a preview, not a live model output.",
  },
]

export function buildLlmTxt(): string {
  const pricing = getParseablePricing()
  const faqBlock = academyBriefFaqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")

  return `# The Intel Analyst Academy

> Professional education for intelligence analysts. Catalog of lessons on collection, analysis, reporting, and briefings.

Site: ${SITE_URL}
Product layer: Academy Brief (training tool / preview — not a separate brand or standalone SKU)
Job: Paste a raw intel dump or notes → structured brief using the academy method, citing real topics/lessons
Not: chat-with-site; not an operational intelligence product

${DISCLAIMER}

## Academy Brief

- URL: ${SITE_URL}/tools/academy-brief
- Input: pasted raw dump / analyst notes
- Output: BLUF, key judgments with confidence, situation, analysis, source assessment, alternatives/gaps, recommendations, lesson citations
- Citations: only real catalog hrefs such as /topics/intelligence-report-components, /topics/intelligence-briefings, /topics/estimative-language
- Free: 1 preview

## Access

${PRICE_MAP_LABEL}
${PRICE_MAP_DETAIL}
Payments live: ${pricing.paymentsLive}

## FAQs

${faqBlock}

## Catalog

Topics index: ${SITE_URL}/topics
Learning paths: ${SITE_URL}/learning-paths
Method spine:
- ${SITE_URL}/topics/intelligence-report-fundamentals
- ${SITE_URL}/topics/intelligence-report-components
- ${SITE_URL}/topics/intelligence-briefings
- ${SITE_URL}/topics/executive-summaries
- ${SITE_URL}/topics/estimative-language
- ${SITE_URL}/topics/analysis-competing-hypotheses
- ${SITE_URL}/topics/recommendation-framework
`
}

export function pricingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Coming soon",
    url: `${SITE_URL}/pricing`,
    description: `${PRICE_MAP_LABEL} ${PRICE_MAP_DETAIL}`,
  }
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: academyBriefFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Academy Brief",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/tools/academy-brief`,
    description:
      "Paste a raw intel dump or notes and receive a structured brief using The Intel Analyst Academy method, citing real catalog lessons. Training and education only.",
    isPartOf: {
      "@type": "WebSite",
      name: "The Intel Analyst Academy",
      url: SITE_URL,
    },
  }
}
