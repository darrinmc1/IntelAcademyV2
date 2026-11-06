import type { Metadata } from "next"
import { CaseStudyArticle } from "@/components/case-study-article"
import { hiddenCriminalInfrastructureContent } from "@/content/case-studies/hidden-criminal-infrastructure"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata(
  "/advanced-topics/case-studies/hidden-criminal-infrastructure",
  "Uncovering a Hidden Criminal Infrastructure",
  "An illustrative case: three supplier invoices that were one campaign, and the point at which the judgment was allowed to stop.",
)

export default function HiddenCriminalInfrastructureCaseStudyPage() {
  return (
    <CaseStudyArticle
      kicker="Case study · Deep web research"
      title="Uncovering a Hidden Criminal Infrastructure"
      deck="How an analyst showed that three apparently separate supplier frauds were one set of paperwork, and why the wider service stayed a cautious judgment instead of a story."
      aside="Three suppliers, one template, and a registered office that also sells pot plants. The concealment was admin."
      content={hiddenCriminalInfrastructureContent}
      backHref="/advanced-topics/deep-web-research"
      backLabel="← Back to Deep Web Research"
    />
  )
}
