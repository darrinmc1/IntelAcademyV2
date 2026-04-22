import { Loader2 } from "lucide-react"

export default function VerifySearchLoading() {
  return (
    <div className="container py-8 flex flex-col items-center justify-center min-h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
      <p className="text-muted-foreground">Loading verification tool...</p>
    </div>
  )
}
