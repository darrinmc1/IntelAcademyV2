import { redirect } from "next/navigation"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/topics/what-is-crime-series-analysis",
  "Crime series analysis",
  "This address points at the written crime series lesson.",
)

export default function CrimeSeriesAnalysisRedirect() {
  redirect("/topics/what-is-crime-series-analysis")
}
