import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"

export default function Forum() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Community Forum</h1>
          <p className="text-muted-foreground mt-2">Connect with peers, ask questions, and share insights</p>
        </div>
        <div className="flex gap-4">
          <Input type="search" placeholder="Search discussions..." className="w-full md:w-[300px]" />
          <Button>New Discussion</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Discussions</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="osint">OSINT</TabsTrigger>
          <TabsTrigger value="link-analysis">Link Analysis</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="career">Career Advice</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6" />
      </Tabs>

      <ComingSoonOverlay
        title="Community Forum"
        description="Secure comms channel is being prepared. Agents will be notified when it opens."
        backHref="/"
        backLabel="Back to Home"
      />
    </div>
  )
}
