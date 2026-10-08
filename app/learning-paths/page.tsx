import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/learning-paths", "Learning paths", "Learning paths for working analysts, from foundations to specialist disciplines.")

import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
