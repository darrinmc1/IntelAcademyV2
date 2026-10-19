import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, FileText, FlaskConical, GraduationCap, KeyRound, Lightbulb, ListChecks, PenLine, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExerciseStatus } from "@/components/exercises/exercise-status"
import { exerciseCards } from "@/data/exercises"

export const metadata: Metadata = {
  title: "Practical Intelligence Exercises",
  description:
    "Work a fictional brief pack end to end: grade the sources, find the intelligence gaps, test competing hypotheses and write the assessment — then get marked against an expert answer key, with critique from The Chief.",
}

const WORKFLOW = [
  { icon: ListChecks, title: "Evaluate", text: "Grade every report on the Admiralty scale." },
  { icon: Search, title: "Find the gaps", text: "Name the unknowns that would change your answer." },
  { icon: Lightbulb, title: "Hypothesise", text: "Test each report against every explanation." },
  { icon: PenLine, title: "Assess", text: "BLUF, key judgments, confidence, indicators." },
  { icon: GraduationCap, title: "Debrief", text: "Answer-key marking plus The Chief's critique." },
]

const LEVEL_STYLES: Record<string, string> = {
  Beginner: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  Intermediate: "border-amber-500/40 bg-amber-500/10 text-amber-200",
  Advanced: "border-rose-500/40 bg-rose-500/10 text-rose-200",
}

export default function ExercisesPage() {
  const cards = exerciseCards()
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Practical exercises</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Practise on a brief pack, not a quiz.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Each exercise drops you into a fictional tasking with several reports of very uneven quality. You do what an
          analyst actually does — grade the sources, find the gaps, test competing explanations and write the
          assessment — and then get marked against an expert answer key.
        </p>
      </header>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="How an exercise works">
        {WORKFLOW.map((w, i) => (
          <li key={w.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500">{i + 1}</span>
              <w.icon className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-semibold text-slate-100">{w.title}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{w.text}</p>
          </li>
        ))}
      </ol>

      <section aria-labelledby="library">
        <h2 id="library" className="text-xl font-semibold text-slate-50">
          The library
        </h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.slug} className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${LEVEL_STYLES[c.level]}`}>{c.level}</span>
                <span className="text-xs text-slate-400">{c.domain}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-50">
                <Link href={`/exercises/${c.slug}`} className="hover:text-cyan-300">
                  {c.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />~{c.estimatedMinutes} min
                </span>
                <span className="inline-flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  {c.reportCount} reports
                </span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <li key={s} className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <ExerciseStatus slug={c.slug} />
                <Button asChild size="sm" className="ml-auto">
                  <Link href={`/exercises/${c.slug}`}>
                    Open the brief pack
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-6">
          <div className="flex items-center gap-3">
            <img src="/mascots/the-chief.svg" alt="" aria-hidden="true" width={40} height={40} className="rounded-full bg-slate-800 ring-1 ring-cyan-500/30" />
            <h2 className="text-lg font-semibold text-slate-50">Want a fresh one?</h2>
          </div>
          <p className="mt-3 text-sm text-slate-300">
            The Chief, the academy&apos;s AI instructor, can write a new practice brief pack built around the trap you
            want to practise — circular reporting, source grading, competing hypotheses and more. It can also question
            your reasoning while you work.
          </p>
          <Button asChild variant="secondary" size="sm" className="mt-4">
            <Link href="/instructor#practice">
              <FlaskConical className="mr-1 h-4 w-4" />
              Meet The Chief
            </Link>
          </Button>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center gap-3">
            <KeyRound className="h-5 w-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-slate-50">How marking works</h2>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-medium text-slate-100">The answer key decides.</span> Source grades, gaps and
              hypotheses are compared with an expert solution, with defensible ranges rather than one &ldquo;right&rdquo;
              grade.
            </li>
            <li>
              <span className="font-medium text-slate-100">The Chief coaches.</span> When live, the AI instructor reads
              your reasoning, credits good gaps the key missed and rewrites your BLUF. Coaching, not gospel.
            </li>
            <li>
              <span className="font-medium text-slate-100">Everything is fictional.</span> People, organisations and
              places are invented. This is training, not operational intelligence.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
