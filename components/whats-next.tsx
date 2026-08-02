import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import * as Icons from "lucide-react"

export interface NextTopicOption {
  title: string
  description: string
  path: string
}

export interface WhatsNextItem {
  title: string
  description: string
  href: string
  icon?: string
}

interface WhatsNextProps {
  anotherTopic?: NextTopicOption
  moreLearning?: NextTopicOption
  advancedLearning?: NextTopicOption
  title?: string
  items?: WhatsNextItem[]
}

const cardClasses = "bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"

const getIconComponent = (iconName?: string) => {
  if (!iconName) return null
  const iconMap: Record<string, React.ComponentType<any>> = {
    FileText: Icons.FileText,
    BookOpen: Icons.BookOpen,
    Target: Icons.Target,
    Zap: Icons.Zap,
    Compass: Icons.Compass,
    Rocket: Icons.Rocket,
    Code: Icons.Code,
    Brain: Icons.Brain,
    Award: Icons.Award,
    BarChart3: Icons.BarChart3,
    Globe: Icons.Globe,
    Layers: Icons.Layers,
  }
  return iconMap[iconName] || null
}

export function WhatsNext({ anotherTopic, moreLearning, advancedLearning, title, items }: WhatsNextProps) {
  // If items prop is provided, render items-based layout
  if (items && items.length > 0) {
    return (
      <section className="mt-16 py-10 border-t border-white/10">
        <div className="container">
          {title && <h2 className="text-3xl font-bold text-center mb-8 text-white">{title}</h2>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, idx) => {
              const IconComponent = getIconComponent(item.icon)
              return (
                <div key={idx} className={cardClasses}>
                  {IconComponent && (
                    <div className="mb-3">
                      <IconComponent className="h-6 w-6 text-cyan-400" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 mb-4 h-20">{item.description}</p>
                  <Link href={item.href} className="mt-auto">
                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Original behavior: render with anotherTopic/moreLearning/advancedLearning
  return (
    <section className="mt-16 py-10 border-t border-white/10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What&apos;s Next?</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Continue your intelligence analysis journey with these recommended learning paths
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Another Topic */}
          {anotherTopic ? (
            <div className={cardClasses}>
              <h3 className="text-xl font-semibold mb-3 text-white">Another Topic</h3>
              <p className="text-slate-400 mb-4 h-20">{anotherTopic.description}</p>
              <Link href={anotherTopic.path} className="mt-auto">
                <Button className="w-full group">
                  {anotherTopic.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className={cardClasses}>
              <h3 className="text-xl font-semibold mb-3 text-white">Explore More Topics</h3>
              <p className="text-slate-400 mb-4 h-20">Browse our full catalog of intelligence topics.</p>
              <Link href="/learning-paths" className="mt-auto">
                <Button className="w-full group">
                  View All Topics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {/* More Learning in This Area */}
          {moreLearning ? (
            <div className={cardClasses}>
              <h3 className="text-xl font-semibold mb-3 text-white">More Learning in This Area</h3>
              <p className="text-slate-400 mb-4 h-20">{moreLearning.description}</p>
              <Link href={moreLearning.path} className="mt-auto">
                <Button className="w-full group">
                  {moreLearning.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className={cardClasses}>
              <h3 className="text-xl font-semibold mb-3 text-white">Explore Learning Paths</h3>
              <p className="text-slate-400 mb-4 h-20">Discover more learning paths to expand your knowledge.</p>
              <Link href="/learning-paths" className="mt-auto">
                <Button className="w-full group">
                  View Learning Paths
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {/* More Advanced Learning */}
          {advancedLearning ? (
            <div className={cardClasses}>
              <h3 className="text-xl font-semibold mb-3 text-white">More Advanced Learning</h3>
              <p className="text-slate-400 mb-4 h-20">{advancedLearning.description}</p>
              <Link href={advancedLearning.path} className="mt-auto">
                <Button className="w-full group" variant="outline">
                  {advancedLearning.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className={cardClasses}>
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced Topics</h3>
              <p className="text-slate-400 mb-4 h-20">Challenge yourself with our advanced topics.</p>
              <Link href="/advanced-topics" className="mt-auto">
                <Button className="w-full group" variant="outline">
                  View Advanced Topics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {/* Request Content / Feedback */}
          <div className={cardClasses}>
            <h3 className="text-xl font-semibold mb-3 text-white">Questions or Suggestions?</h3>
            <p className="text-slate-400 mb-4 h-20">
              Have a topic in mind or feedback on this page? Let us know!
            </p>
            <div className="flex flex-col space-y-2 mt-auto">
              <Link href="/request-topic">
                <Button className="w-full group">
                  Request a New Topic
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/feedback">
                <Button className="w-full group" variant="outline">
                  Send Feedback
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNext
