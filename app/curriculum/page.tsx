import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Target, Zap, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Curriculum | Intel Analyst Academy",
  description: "Complete intelligence analysis curriculum with structured learning paths, modules, and certifications.",
}

const curriculumTracks = [
  {
    name: "Intelligence Fundamentals",
    duration: "8 weeks",
    difficulty: "Beginner",
    modules: [
      { name: "What is Intelligence", duration: "2 hours", outcomes: ["Understand the intelligence cycle", "Learn intelligence types", "Identify career paths"] },
      { name: "Information vs Intelligence", duration: "1.5 hours", outcomes: ["Distinguish data from actionable intelligence", "Learn evaluation methods"] },
      { name: "Intelligence Ethics & Law", duration: "2 hours", outcomes: ["Understand legal frameworks", "Learn ethical decision-making"] },
      { name: "Intelligence Cycle Deep Dive", duration: "3 hours", outcomes: ["Master direction and planning", "Learn requirements management"] },
    ],
    color: "from-blue-500 to-blue-600",
    icon: BookOpen,
  },
  {
    name: "OSINT & Collection",
    duration: "10 weeks",
    difficulty: "Intermediate",
    modules: [
      { name: "OSINT Fundamentals", duration: "2 hours", outcomes: ["Master public source analysis", "Learn search techniques"] },
      { name: "Advanced Google Dorking", duration: "1.5 hours", outcomes: ["Become an expert searcher", "Find hidden information"] },
      { name: "SOCMINT & Digital Techniques", duration: "2 hours", outcomes: ["Analyze social media intelligence", "Track online activity"] },
      { name: "Real-Time OSINT Workflows", duration: "3 hours", outcomes: ["Build practical workflows", "Integrate multiple sources"] },
      { name: "OSINT Tools & Automation", duration: "2.5 hours", outcomes: ["Use industry tools", "Automate collection"] },
    ],
    color: "from-green-500 to-green-600",
    icon: Zap,
  },
]

export default function CurriculumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Intelligence Analysis Curriculum</h1>
            <p className="text-xl text-slate-300 mb-6">
              A comprehensive, structured learning program designed to take you from foundational concepts to expert-level intelligence analysis.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5" />
                <span>44 weeks total</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <BookOpen className="w-5 h-5" />
                <span>20+ modules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-5 h-5" />
                <span>4 certification tracks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {curriculumTracks.map((track, idx) => {
              const Icon = track.icon
              return (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <div className={`bg-gradient-to-r ${track.color} p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Icon className="w-8 h-8 mt-1" />
                        <div>
                          <h2 className="text-2xl font-bold">{track.name}</h2>
                          <div className="flex gap-4 mt-2 text-sm">
                            <span>Duration: {track.duration}</span>
                            <span>•</span>
                            <span>Level: {track.difficulty}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="secondary" size="sm">
                        <Link href="/learning-paths">Start Learning</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50">
                    <h3 className="font-semibold text-lg mb-4">Modules & Learning Outcomes</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {track.modules.map((module, midx) => (
                        <Card key={midx} className="border-slate-200">
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-base">{module.name}</CardTitle>
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {module.duration}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm text-slate-600">
                              {module.outcomes.map((outcome, oidx) => (
                                <li key={oidx} className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold mt-1">•</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Intelligence Analysis?</h2>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Link href="/learning-paths">View Learning Paths</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
