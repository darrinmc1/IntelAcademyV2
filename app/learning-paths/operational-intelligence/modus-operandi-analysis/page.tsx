import { redirect } from "next/navigation"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/topics/modus-operandi-analysis-techniques",
  "Modus operandi analysis",
  "This address points at the written modus operandi lesson.",
)

export default function ModusOperandiAnalysisRedirect() {
  redirect("/topics/modus-operandi-analysis-techniques")
}
