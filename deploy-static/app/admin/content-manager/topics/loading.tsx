import { Skeleton } from "@/components/ui/skeleton"

export default function TopicsContentManagerLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Skeleton className="h-4 w-[150px] mr-4" />
        <Skeleton className="h-8 w-[250px]" />
      </div>

      <Skeleton className="h-4 w-[350px]" />

      <div className="border rounded-md">
        <div className="bg-muted p-4 flex justify-between items-center">
          <Skeleton className="h-5 w-[100px]" />
          <Skeleton className="h-9 w-[120px] rounded-md" />
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center justify-between p-2 border-b">
                  <div>
                    <Skeleton className="h-5 w-[200px]" />
                    <Skeleton className="h-4 w-[150px] mt-1" />
                  </div>
                  <Skeleton className="h-8 w-[80px] rounded-md" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
