import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MessageSquare, Users, Zap, RefreshCw, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "About | The Intel Analyst Academy",
  description: "Empowering intelligence professionals through accessible, high-quality education.",
}

export default function About() {
  return (
    <>
      <PageHero
        title="About the"
        accentTitle="Intel Analyst Academy"
        subtitle="Empowering intelligence professionals through accessible, high-quality education — from beginner to expert."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Our <span className="text-gradient-primary">Mission</span>
          </h2>
          <div className="glass-panel-heavy rounded-2xl p-8 border border-white/10">
            <p className="text-slate-300 leading-relaxed mb-4">
              The Intelligence Analyst Academy was founded with a simple mission: to make high-quality intelligence
              analysis training accessible to everyone who needs it. We believe that proper training and education
              should not be limited by organisational resources or geographic location.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our platform serves complete beginners, students, law enforcement officers, and private sector analysts
              who need both foundational training and refresher modules. By providing open access to professional-grade
              educational resources, we aim to elevate the standard of intelligence analysis across all sectors.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our <span className="text-gradient-primary">Approach</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Self-Paced Learning",
                body: "Learn at your own pace with content organised into digestible mini-topics completable in 5–15 minutes.",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10",
                border: "border-cyan-500/20",
              },
              {
                icon: Target,
                title: "Practical Focus",
                body: "Every skill we teach is immediately applicable — from OSINT techniques to advanced analytical methodologies.",
                color: "text-indigo-400",
                bg: "bg-indigo-500/10",
                border: "border-indigo-500/20",
              },
              {
                icon: Users,
                title: "Community-Driven",
                body: "Our forum connects intelligence professionals to share insights, case studies, and career guidance.",
                color: "text-blue-400",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
              },
              {
                icon: RefreshCw,
                title: "Continuously Evolving",
                body: "We regularly update content and add new topics based on community feedback and emerging field trends.",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
              },
            ].map(({ icon: Icon, title, body, color, bg, border }) => (
              <div
                key={title}
                className={`glass-panel rounded-xl p-6 border ${border} hover:border-opacity-50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] group`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${bg} ${border} border mb-4`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel-heavy rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">General Inquiries</h3>
              </div>
              <a
                href="mailto:info@TheIntelAnalystAcademy.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors font-light"
              >
                info@TheIntelAnalystAcademy.com
              </a>
            </div>

            <div className="glass-panel-heavy rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Content Requests</h3>
              </div>
              <p className="text-slate-400 font-light mb-4">
                Have a specific topic you&apos;d like us to cover?
              </p>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-6 glow-primary-hover border border-cyan-400/30">
                <Link href="/request-topic">Request a Topic</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
