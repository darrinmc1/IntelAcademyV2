import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" isCurrentPage>
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About the Intelligence Analyst Academy</h1>
          <p className="text-xl text-muted-foreground">
            Empowering intelligence professionals through accessible, high-quality education
          </p>
        </div>

        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              The Intelligence Analyst Academy was founded with a simple mission: to make high-quality intelligence
              analysis training accessible to everyone who needs it. We believe that proper training and education
              should not be limited by organizational resources or geographic location.
            </p>
            <p>
              Our platform serves complete beginners, students, law enforcement officers, and private sector analysts
              who need both foundational training and refresher modules. By providing open access to professional-grade
              educational resources, we aim to improve the standard of intelligence analysis across all sectors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Self-Paced Learning</h3>
                <p>
                  We understand that professionals have varying schedules and learning preferences. Our platform is
                  designed to allow you to learn at your own pace, revisiting material as needed and progressing
                  when you are ready.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is built around real-world scenarios and practical exercises. We focus on skills
                  you can apply immediately in your professional role, not just theoretical knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Developed Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with decades of combined
                  experience across government, law enforcement, and private sector intelligence roles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our content to reflect the latest
                  methodologies, tools, and best practices in the field.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-2 text-center">Student Success Stories</h2>
            <p className="text-muted-foreground text-center mb-8">
              Real outcomes from professionals who trained with the Intelligence Analyst Academy
            </p>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground" aria-label="Student initials">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold text-base">Marcus R.</p>
                    <p className="text-sm text-muted-foreground">Senior Intelligence Analyst, Federal Agency</p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                  &ldquo;After completing the Structured Analytic Techniques path, I was promoted to Senior Analyst within 6 months. The practical frameworks I learned here directly improved the quality of my assessments.&rdquo;
                </blockquote>
                <p className="text-xs font-medium text-primary">&#10003; Promoted to Senior Analyst within 6 months</p>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground" aria-label="Student initials">
                    JT
                  </div>
                  <div>
                    <p className="font-semibold text-base">Jamie T.</p>
                    <p className="text-sm text-muted-foreground">Intelligence Officer, Metropolitan Police</p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                  &ldquo;I transitioned from patrol to an intelligence role with no formal training. The Academy&rsquo;s foundational courses gave me the confidence and skills to contribute from day one. My supervisor noticed the difference immediately.&rdquo;
                </blockquote>
                <p className="text-xs font-medium text-primary">&#10003; Successfully transitioned to intelligence role in under 3 months</p>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground" aria-label="Student initials">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold text-base">Sofia L.</p>
                    <p className="text-sm text-muted-foreground">Competitive Intelligence Manager, Fortune 500</p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                  &ldquo;The private sector intelligence modules were exactly what I needed. I used the OSINT and analysis frameworks to build a competitive intelligence function from scratch. Our team now delivers insights that directly influence executive strategy.&rdquo;
                </blockquote>
                <p className="text-xs font-medium text-primary">&#10003; Built a new CI function; recognized as top internal team of the year</p>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground" aria-label="Student initials">
                    DK
                  </div>
                  <div>
                    <p className="font-semibold text-base">Daniel K.</p>
                    <p className="text-sm text-muted-foreground">Graduate Student, Security Studies</p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                  &ldquo;As a student with no professional experience, the Academy bridged the gap between academic theory and real-world practice. I landed a graduate analyst internship at a think tank — the interviewer specifically praised my knowledge of analytic tradecraft.&rdquo;
                </blockquote>
                <p className="text-xs font-medium text-primary">&#10003; Secured competitive analyst internship before graduation</p>
              </div>

            </div>
          </section>

          <Separator />

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of intelligence professionals who have accelerated their careers with the Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/learning-paths">Browse Learning Paths</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/topics">Explore All Topics</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
