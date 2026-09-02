import { CHECKOUT_STATUS, DISCLAIMER, REFUND_POLICY, SITE_URL, getParseablePricing, plans } from "@/lib/pricing"

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
    question: "How much does Academy Brief cost?",
    answer:
      "One free structured-brief preview. Academy Brief is included in Early Adopter ($5/month) and Pro ($10/month). There is no standalone Brief SKU. Payments are not live yet; lock-in follows the waitlist. No Stripe, Payment Links, or x402 checkout.",
  },
  {
    question: "What are the plans?",
    answer:
      "One map only: Free, Early Adopter $5/mo, and Pro $10/mo. Checkout isn't live — join the waitlist or contact us. No Explorer, Analyst, Professional, Enterprise, or standalone Brief SKU.",
  },
  {
    question: "What is the refund policy?",
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
  const planBlock = pricing.plans
    .map(
      (p) =>
        `- ${p.name}: ${p.currency} ${p.price}${p.period === "month" ? "/mo" : ` ${p.period}`} — Academy Brief: ${p.briefAllowance} — ${p.url}`,
    )
    .join("\n")

  return `# The Intel Analyst Academy

> Professional education for intelligence analysts. Catalog of lessons on collection, analysis, reporting, and briefings.

Site: ${SITE_URL}
Product layer: Academy Brief (training tool on paid plans — not a separate brand or standalone SKU)
Job: Paste a raw intel dump or notes → structured brief using the academy method, citing real topics/lessons
Not: chat-with-site; not an operational intelligence product

${DISCLAIMER}

## Academy Brief

- URL: ${SITE_URL}/tools/academy-brief
- Input: pasted raw dump / analyst notes
- Output: BLUF, key judgments with confidence, situation, analysis, source assessment, alternatives/gaps, recommendations, lesson citations
- Citations: only real catalog hrefs such as /topics/intelligence-report-components, /topics/intelligence-briefings, /topics/estimative-language
- Free: 1 preview
- Paid: included in Early Adopter ($5/mo) and Pro ($10/mo). No standalone Brief SKU.
- Checkout: waitlist only (no Stripe, Payment Links, or x402)

## Pricing

Parseable: ${SITE_URL}/pricing.json
Human: ${SITE_URL}/pricing
Currency: ${pricing.currency}
Payments live: ${pricing.paymentsLive}
Checkout: ${CHECKOUT_STATUS}
Refunds: ${REFUND_POLICY}
x402: false
stripe: false

One map: Free / Early Adopter $5/mo / Pro $10/mo. No Explorer, Analyst, Professional, Enterprise, or standalone Brief SKU.

${planBlock}

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
  const pricing = getParseablePricing()
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Intel Analyst Academy pricing",
    url: `${SITE_URL}/pricing`,
    itemListElement: plans.map((plan, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: plan.name,
      url: `${SITE_URL}${plan.href}`,
      price: plan.price,
      priceCurrency: plan.currency,
      availability: plan.available
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      description: plan.description,
      category: "Subscription",
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "includesAcademyBrief",
          value: String(plan.includesAcademyBrief),
        },
        {
          "@type": "PropertyValue",
          name: "briefAllowance",
          value: plan.briefAllowance,
        },
      ],
    })),
    additionalProperty: [
      { "@type": "PropertyValue", name: "x402", value: "false" },
      { "@type": "PropertyValue", name: "stripe", value: "false" },
      { "@type": "PropertyValue", name: "paymentsLive", value: String(pricing.paymentsLive) },
      { "@type": "PropertyValue", name: "refundPolicy", value: REFUND_POLICY },
    ],
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "1 free preview; included in Early Adopter ($5/mo) and Pro ($10/mo). No standalone SKU. Checkout is not live.",
    },
    description:
      "Paste a raw intel dump or notes and receive a structured brief using The Intel Analyst Academy method, citing real catalog lessons. Training and education only.",
    isPartOf: {
      "@type": "WebSite",
      name: "The Intel Analyst Academy",
      url: SITE_URL,
    },
  }
}
