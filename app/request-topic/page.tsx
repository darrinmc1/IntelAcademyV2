import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Request a Topic | The Intel Analyst Academy",
  description: "Suggest new intelligence analysis training topics for the academy.",
}

export default function RequestTopic() {
  return (
    <>
      <PageHero
        title="Request a"
        accentTitle="Training Topic"
        subtitle="Don't see what you're looking for? Let us know what topics you'd like us to cover next."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request a Topic" }]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="glass-panel-heavy rounded-2xl p-8 border border-white/10">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-1">Topic Request Form</h2>
              <p className="text-slate-400 font-light text-sm">
                Please provide as much detail as possible to help us understand your needs.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic-title" className="text-slate-300">Topic Title</Label>
                <Input
                  id="topic-title"
                  placeholder="e.g., Advanced Social Media Intelligence Techniques"
                  className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-slate-300">Category</Label>
                <Select>
                  <SelectTrigger className="bg-slate-900/50 border-white/10 text-white focus:ring-cyan-500/50">
                    <SelectValue placeholder="Select a category" className="text-slate-500" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/10 text-white">
                    <SelectItem value="foundations">Foundations of Intelligence</SelectItem>
                    <SelectItem value="osint">OSINT</SelectItem>
                    <SelectItem value="analysts-notebook">Analyst&apos;s Notebook</SelectItem>
                    <SelectItem value="analytical-techniques">Analytical Techniques</SelectItem>
                    <SelectItem value="data-collection">Data Collection</SelectItem>
                    <SelectItem value="excel">Excel for Analysts</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-300">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you'd like to learn about this topic and why it would be valuable."
                  rows={5}
                  className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience-level" className="text-slate-300">Your Experience Level</Label>
                <Select>
                  <SelectTrigger className="bg-slate-900/50 border-white/10 text-white focus:ring-cyan-500/50">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/10 text-white">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email <span className="text-slate-500 font-light">(optional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50"
                />
                <p className="text-xs text-slate-500 font-light">
                  We&apos;ll only use this to notify you when your requested topic is available.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white rounded-full py-6 text-base glow-primary-hover border border-cyan-400/30 shadow-[0_0_15px_rgba(8,145,178,0.3)]"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
