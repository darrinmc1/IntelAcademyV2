import { Skeleton } from "@/components/ui/skeleton"

export default function TopicEditorLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Skeleton className="h-4 w-24 mr-4" />
        <Skeleton className="h-8 w-64" />
      </div>

      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>

      <Skeleton className="h-[500px] w-full" />
    </div>
  )
}
