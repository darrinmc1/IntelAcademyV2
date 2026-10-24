import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  alternates: { canonical: "/coming-soon/community-forum" },
  title: "Community Forum",
  description: "The community forum is not open.",
}

export default function CommunityForumPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">Community forum</h1>
      <p className="text-muted-foreground mb-6">
        There is no forum to join. No expert moderation, no member directory, and no category pages behind this one.
        Written lessons are the thing that exists.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/learning-paths">Learning paths</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact form</Link>
        </Button>
      </div>
    </div>
  )
}
