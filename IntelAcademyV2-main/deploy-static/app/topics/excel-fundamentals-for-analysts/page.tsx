import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Excel Fundamentals for Analysts | The Intel Analyst Academy",
  description:
    "Master essential Excel functions and features specifically relevant to intelligence analysis workflows.",
}

export default function ExcelFundamentalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/learning-paths/excel-for-analysts" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Excel for Analysts Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Excel Fundamentals for Analysts</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Master the spreadsheet software that&apos;s simultaneously the most loved and hated tool in intelligence analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <Image
                src="/excel-dashboard-insights.png"
                alt="Excel dashboard with data visualizations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Welcome to Excel: Where Intelligence Analysts Develop Their First Gray Hairs</h2>
            <p>
              Excel: the unsung hero of intelligence analysis and the cause of countless midnight panic attacks when you
              realize you accidentally sorted only half your data. This course will help you navigate the treacherous
              waters of spreadsheets without losing your sanity.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 my-6">
              <h3 className="text-amber-800 font-medium mb-2">Excel Survival Tip #1</h3>
              <p className="text-amber-700 mb-0">
                Always save your work every 5 minutes. Excel doesn&apos;t crash because it hates you personally, but
                sometimes it sure feels that way.
              </p>
            </div>

            <h2>Key Skills You&apos;ll Develop (Besides Patience)</h2>
            <ul>
              <li>
                <strong>Data Organization</strong> - Learn to structure your data so it doesn&apos;t resemble a Jackson
                Pollock painting
              </li>
              <li>
                <strong>Formula Mastery</strong> - Move beyond SUM() and into the magical realm of VLOOKUP() where
                analysts gain their mystical powers
              </li>
              <li>
                <strong>Pivot Tables</strong> - Turn mountains of incomprehensible data into slightly smaller, slightly
                more comprehensible mountains
              </li>
              <li>
                <strong>Data Visualization</strong> - Create charts that don&apos;t make your supervisor question your career
                choices
              </li>
              <li>
                <strong>Keyboard Shortcuts</strong> - Impress colleagues by navigating Excel like a caffeinated concert
                pianist
              </li>
            </ul>

            <h2>Why Excel Matters in Intelligence Analysis</h2>
            <p>
              Despite the existence of fancier, more expensive tools, Excel remains the duct tape of intelligence
              analysis: not always pretty, but it holds everything together. Whether you're tracking threat actors or
              analyzing crime patterns, Excel is often the first tool analysts reach for—right after coffee.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6">
              <h3 className="text-blue-800 font-medium mb-2">The Excel Analyst&apos;s Mantra</h3>
              <p className="text-blue-700 italic mb-0">
                &quot;I will not fear the spreadsheet. The spreadsheet is the mind-killer. The spreadsheet is the
                little-death that brings total obliteration. I will face my spreadsheet. I will permit it to pass over
                me and through me.&quot;
              </p>
            </div>

            <h2>Common Excel Pitfalls (That We Promise You&apos;ll Still Fall Into)</h2>
            <ul>
              <li>
                <strong>The Accidental Sort</strong> - When you sort one column but not the others, creating data chaos
                that would make Thanos proud
              </li>
              <li>
                <strong>The Circular Reference</strong> - Excel&apos;s version of a time paradox, guaranteed to make your
                computer fans sound like a jet engine
              </li>
              <li>
                <strong>The &quot;Where Did My Formula Go?&quot;</strong> - The mystery that occurs when you accidentally paste
                values over your carefully crafted formulas
              </li>
              <li>
                <strong>The &quot;Why Is This Cell Showing ###?&quot;</strong> - Excel&apos;s cryptic way of saying &quot;your column isn&apos;t
                wide enough&quot; instead of just, you know, telling you that
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Course Materials</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/excel-templates-for-analysts" className="text-primary hover:underline">
                    Excel Templates for Analysts (No Comic Sans, We Promise)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/excel-formula-cheatsheet" className="text-primary hover:underline">
                    Formula Cheatsheet (For When Google Fails You)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/excel-keyboard-shortcuts" className="text-primary hover:underline">
                    Keyboard Shortcuts That Make You Look Like a Wizard
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Next Topics</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/excel-data-organization" className="text-primary hover:underline">
                      Data Organization: Bringing Order to Chaos
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/excel-pivot-tables" className="text-primary hover:underline">
                      Pivot Tables: Excel&apos;s Answer to &quot;But What Does It All Mean?&quot;
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/excel-data-visualization" className="text-primary hover:underline">
                      Data Visualization: Making Pretty Pictures That Actually Mean Something
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
