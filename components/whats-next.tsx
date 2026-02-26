import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  FileText,
  GraduationCap,
  BookOpen,
  Search,
  BarChart2,
  Shield,
  Globe,
  Brain,
  Target,
  Lightbulb,
  Network,
  Map,
  TrendingUp,
  Users,
  Mic,
  Eye,
  Database,
  Award,
  type LucideIcon,
} from "lucide-react"

// ─── Legacy API ──────────────────────────────────────────────────────────────

export interface NextTopicOption {
  title: string
  description: string
  path: string
}

// ─── New API ─────────────────────────────────────────────────────────────────

export interface WhatsNextItem {
  title: string
  description: string
  href: string
  icon?: string
}

// ─── Icon map for string → component lookup ──────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  FileText,
  GraduationCap,
  BookOpen,
  Search,
  BarChart2,
  Shield,
  Globe,
  Brain,
  Target,
  Lightbulb,
  Network,
  Map,
  TrendingUp,
  Users,
  Mic,
  Eye,
  Database,
  Award,
  ArrowRight,
}

function DynamicIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = name ? (ICON_MAP[name] ?? ArrowRight) : ArrowRight
  return <Icon className={className} />
}

// ─── Combined props ───────────────────────────────────────────────────────────

interface WhatsNextProps {
  // New API
  title?: string
  items?: WhatsNextItem[]
  // Legacy API
  anotherTopic?: NextTopicOption
  moreLearning?: NextTopicOption
  advancedLearning?: NextTopicOption
}

export function WhatsNext({
  title,
  items,
  anotherTopic,
  moreLearning,
  advancedLearning,
}: WhatsNextProps) {
  // ── New "items array" API ─────────────────────────────────────────────────
  if (items && items.length > 0) {
    return (
      <section className="mt-16 py-10 border-t border-gray-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            {title ?? "What's Next?"}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Continue your intelligence analysis journey with these recommended topics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.href}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 shrink-0 text-blue-600">
                    <DynamicIcon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                <Link href={item.href} className="mt-auto">
                  <Button className="w-full group">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}

            {/* Static: Questions / Feedback card */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Questions or Suggestions?</h3>
              <p className="text-gray-600 mb-4 flex-1">
                Have a topic in mind or feedback on this page? Let us know!
              </p>
              <div className="flex flex-col space-y-2 mt-auto">
                <Link href="/request-topic">
                  <Button className="w-full group">
                    Request a New Topic
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/forum">
                  <Button className="w-full group" variant="outline">
                    Visit Our Forum
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

  // ── Legacy "named slots" API ──────────────────────────────────────────────
  return (
    <section className="mt-16 py-10 border-t border-gray-200">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title ?? "What's Next?"}
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Continue your intelligence analysis journey with these recommended learning paths
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {anotherTopic ? (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Another Topic</h3>
              <p className="text-gray-600 mb-4 h-20">{anotherTopic.description}</p>
              <Link href={anotherTopic.path} className="mt-auto">
                <Button className="w-full group">
                  {anotherTopic.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Explore More Topics</h3>
              <p className="text-gray-600 mb-4 h-20">Browse our full catalog of intelligence topics.</p>
              <Link href="/learning-paths" className="mt-auto">
                <Button className="w-full group">
                  View All Topics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {moreLearning ? (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">More Learning in This Area</h3>
              <p className="text-gray-600 mb-4 h-20">{moreLearning.description}</p>
              <Link href={moreLearning.path} className="mt-auto">
                <Button className="w-full group">
                  {moreLearning.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Explore Learning Paths</h3>
              <p className="text-gray-600 mb-4 h-20">Discover more learning paths to expand your knowledge.</p>
              <Link href="/learning-paths" className="mt-auto">
                <Button className="w-full group">
                  View Learning Paths
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          {advancedLearning ? (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">More Advanced Learning</h3>
              <p className="text-gray-600 mb-4 h-20">{advancedLearning.description}</p>
              <Link href={advancedLearning.path} className="mt-auto">
                <Button className="w-full group" variant="outline">
                  {advancedLearning.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-3">Advanced Topics</h3>
              <p className="text-gray-600 mb-4 h-20">Challenge yourself with our advanced topics.</p>
              <Link href="/advanced-topics" className="mt-auto">
                <Button className="w-full group" variant="outline">
                  View Advanced Topics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-3">Questions or Suggestions?</h3>
            <p className="text-gray-600 mb-4 h-20">
              Have a topic in mind or feedback on this page? Let us know!
            </p>
            <div className="flex flex-col space-y-2 mt-auto">
              <Link href="/request-topic">
                <Button className="w-full group">
                  Request a New Topic
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/forum">
                <Button className="w-full group" variant="outline">
                  Visit Our Forum
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
