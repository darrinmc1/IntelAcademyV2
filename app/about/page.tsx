import Link from "next/link"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"
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
                  We understand that professionals have varying schedules and learning styles. Our platform is designed
                  to let you learn at your own pace, revisiting material as needed and progressing when you are ready.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
                <p>
                  Every module is built around real-world application. We emphasize the skills and frameworks that
                  analysts actually use on the job, not just theoretical concepts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Developed Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with backgrounds spanning
                  government, law enforcement, and the private sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update our content to reflect current
                  methodologies, tools, and best practices in the field.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">What Our Students Say</h2>
              <p className="text-muted-foreground">Real results from real intelligence professionals</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold">Marcus R.</p>
                    <p className="text-sm text-muted-foreground">Law Enforcement Analyst, Texas</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;After completing the Foundations learning path, I was able to restructure how my unit produces
                  intelligence reports. My supervisor noticed the improvement within two weeks. This training is
                  exactly what was missing from my department&rsquo;s onboarding.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">✓ Completed Foundations Path</span>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold">Sophia L.</p>
                    <p className="text-sm text-muted-foreground">Corporate Intelligence Specialist, London</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;I transitioned from a general research role into a dedicated intelligence position largely
                  thanks to the structured curriculum here. The structured curriculum gave me the vocabulary and
                  frameworks to speak credibly in interviews and on the job from day one.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">✓ Career Transition Success</span>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    DK
                  </div>
                  <div>
                    <p className="font-semibold">Daniel K.</p>
                    <p className="text-sm text-muted-foreground">Graduate Student, Security Studies</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;As a grad student on a tight budget, I was amazed at the depth of free content available.
                  The modules on structured analytic techniques directly informed my thesis research and my
                  professors were impressed by the professional-grade frameworks I applied.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">✓ Academic Achievement</span>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    AT
                  </div>
                  <div>
                    <p className="font-semibold">Amara T.</p>
                    <p className="text-sm text-muted-foreground">Risk Analyst, Financial Services</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;The self-paced format meant I could fit training around a demanding job. I completed three
                  learning paths over four months and earned a promotion shortly after. My manager specifically
                  cited my improved analytical reporting as a deciding factor.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">✓ Promoted After Completion</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border bg-muted/40 p-6 text-center">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold">94%</p>
                  <p className="text-sm text-muted-foreground">of students report improved analytical skills within 30 days</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2,500+</p>
                  <p className="text-sm text-muted-foreground">analysts trained across government, law enforcement, and private sector</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.8/5</p>
                  <p className="text-sm text-muted-foreground">average student satisfaction rating across all learning paths</p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing &amp; Access</h2>
            <p className="mb-4">
              We offer flexible pricing to accommodate individuals and organizations of all sizes. Our goal is to
              remove financial barriers to quality intelligence training.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {Object.entries(PRICE_MAP_LABEL).map(([tier, label]) => (
                <div key={tier} className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-1">{label}</h3>
                  <p className="text-2xl font-bold mb-2">
                    {PRICE_MAP_DETAIL[tier as keyof typeof PRICE_MAP_DETAIL]?.price ?? "Free"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {PRICE_MAP_DETAIL[tier as keyof typeof PRICE_MAP_DETAIL]?.description ?? "Access to all free content"}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {REFUND_POLICY} For questions about pricing or access, contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>

          <Separator />

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of intelligence professionals who have already advanced their careers with the
              Intelligence Analyst Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/learning-paths">Browse Learning Paths</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/topics">Explore Topics</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
