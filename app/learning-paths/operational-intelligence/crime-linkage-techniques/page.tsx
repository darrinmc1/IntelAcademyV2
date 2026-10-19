import { redirect } from "next/navigation"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/topics/crime-linkage-techniques",
  "Crime linkage techniques",
  "This address points at the written crime linkage lesson.",
)

export default function CrimeLinkageTechniquesRedirect() {
  redirect("/topics/crime-linkage-techniques")
}
