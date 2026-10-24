import Link from "next/link"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/coming-soon/community-forums",
  "Community forums",
  "Community forums are not open yet.",
)

export default function CommunityForumsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Community forums</h1>
      <p className="text-muted-foreground mb-6">
        The forum is not open. There are no categories, moderators, badges, or private messages. The placeholder is
        the whole product for now.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/forum">Forum placeholder</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact form</Link>
        </Button>
      </div>
    </div>
  )
}
