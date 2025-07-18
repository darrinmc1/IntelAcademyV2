import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TopicNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl font-bold mb-4">Topic Not Found</h2>
      <p className="text-muted-foreground mb-6">The topic you're looking for doesn't exist or has been removed.</p>
      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/admin/content-manager/topics">Back to Topics</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/content-manager/topics/new">Create New Topic</Link>
        </Button>
      </div>
    </div>
  )
}
