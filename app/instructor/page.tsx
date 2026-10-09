import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, BookOpen, ClipboardCheck, FlaskConical, MessageCircleQuestion, Presentation } from "lucide-react"
import { InstructorChat } from "@/components/instructor/instructor-chat"
import { PracticeGenerator } from "@/components/instructor/practice-generator"

export const metadata: Metadata = {
  title: "The Chief — AI Intelligence Instructor",
  description:
    "An AI instructor for intelligence analysis: explains techniques, questions your reasoning, evaluates your assessments, points you to the right lessons and writes fresh practice exercises.",
}

const CAN_DO = [
  { icon: Presentation, text: "Explains techniques — Admiralty grading, ACH, gaps, estimative language, I&W — with fictional examples." },
  { icon: MessageCircleQuestion, text: "Questions your reasoning instead of handing you answers." },
  { icon: ClipboardCheck, text: "Evaluates assessments you paste: BLUF, judgments, confidence, alternatives." },
  { icon: BookOpen, text: "Points you to real academy lessons — never invented links." },
  { icon: FlaskConical, text: "Writes fresh practice exercises around the skill you want to drill." },
]

export default function InstructorPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-14">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <img
          src="/mascots/the-chief.svg"
          alt="The Chief, the academy's owl instructor"
          width={96}
          height={96}
          className="h-24 w-24 rounded-2xl bg-slate-900 p-2 ring-1 ring-cyan-500/30"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">AI instructor</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">The Chief</h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Wise, all-seeing and mildly judgemental. The Chief teaches tradecraft the way a good senior analyst does:
            by asking the question you were hoping nobody would ask.
          </p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
        <InstructorChat variant="page" storageKey="general" />

        <aside className="space-y-5">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">What The Chief does</h2>
            <ul className="mt-3 space-y-3">
              {CAN_DO.map((item) => (
                <li key={item.text} className="flex gap-3 text-sm text-slate-300">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-sm text-slate-300">
            <p>
              Working through an exercise? Open <Link href="/exercises" className="text-cyan-300 hover:underline">a brief pack</Link>{" "}
              and press <span className="font-medium text-slate-100">Ask The Chief</span> — it can see your draft and will
              question it without giving the answers away.
            </p>
          </div>
          <div className="flex gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-xs text-slate-400">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p>
              The Chief is a training tool, not an operational intelligence product, and it&apos;s an AI — it can be
              wrong. Don&apos;t paste real case material, personal information or anything classified.
            </p>
          </div>
        </aside>
      </div>

      <section id="practice" className="scroll-mt-28">
        <PracticeGenerator />
      </section>
    </div>
  )
}
