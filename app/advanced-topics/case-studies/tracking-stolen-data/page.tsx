import type { Metadata } from "next"
import { CaseStudyArticle } from "@/components/case-study-article"
import { trackingStolenDataContent } from "@/content/case-studies/tracking-stolen-data"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata(
  "/advanced-topics/case-studies/tracking-stolen-data",
  "Tracking Stolen Data Through the Deep Web",
  "An illustrative case: how an analyst tested a claim that company data was circulating, wrote the judgment, and stayed on the lawful side of the file.",
)

export default function TrackingStolenDataCaseStudyPage() {
  return (
    <CaseStudyArticle
      kicker="Case study · Deep web research"
      title="Tracking Stolen Data Through the Deep Web"
      deck="How an analyst tested a claim that company data was being advertised, identified the file from records the company already held, and refused the shortcut that would have made the company a holder of the stolen copy."
      aside="The channel did not confess. A column header did, which is less exciting and considerably more usable."
      content={trackingStolenDataContent}
      backHref="/advanced-topics/deep-web-research"
      backLabel="← Back to Deep Web Research"
    />
  )
}
