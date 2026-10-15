import { redirect } from "next/navigation"

import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/learning-paths/data-collection-planning", "Data collection and planning", "This address points at the data collection planning path.")
export default function DataCollectionPlansRedirect() {
  redirect("/learning-paths/data-collection-planning")
}
