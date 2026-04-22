import { Skeleton } from "@/components/ui/skeleton"

export default function ContentManagerLoading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[350px] mt-2" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="rounded-lg border bg-card text-card-foreground shadow">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-[120px]" />
                  <Skeleton className="h-4 w-[60px] rounded-full" />
                </div>
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-2/3 mt-1" />
                <div className="mt-4">
                  <Skeleton className="h-9 w-[80px] rounded-md" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
