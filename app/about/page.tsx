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
                  We understand that professionals have varying schedules and commitments. Our courses are designed
                  to be completed at your own pace, allowing you to fit learning around your existing responsibilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is grounded in real-world scenarios and practical exercises. We focus on skills
                  you can apply immediately in your professional role.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Developed Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with decades of combined
                  experience across government, law enforcement, and private sector roles.
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
            <h2 className="text-2xl font-bold mb-2 text-center">What Our Students Say</h2>
            <p className="text-muted-foreground text-center mb-8">
              Real outcomes from analysts who trained with the Intelligence Analyst Academy
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold">Marcus R.</p>
                    <p className="text-sm text-muted-foreground">Former Law Enforcement Officer</p>
                  </div>
                </div>
                <p className="text-sm mb-3">
                  &ldquo;After completing the Foundations and Structured Analytic Techniques paths, I landed a role as an
                  intelligence analyst at a federal agency within 3 months. The practical exercises were exactly what
                  hiring managers wanted to see on my resume.&rdquo;
                </p>
                <p className="text-xs font-medium text-primary">✓ Hired as Intelligence Analyst within 3 months</p>
              </div>

              <div className="border rounded-lg p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    ST
                  </div>
                  <div>
                    <p className="font-semibold">Sarah T.</p>
                    <p className="text-sm text-muted-foreground">Private Sector Risk Consultant</p>
                  </div>
                </div>
                <p className="text-sm mb-3">
                  &ldquo;I used the Academy to upskill before moving into corporate intelligence. The self-paced format
                  meant I could study around my full-time job. My manager specifically commented on my structured
                  analytical approach during my first performance review.&rdquo;
                </p>
                <p className="text-xs font-medium text-primary">✓ Promoted to Senior Risk Analyst within 6 months</p>
              </div>

              <div className="border rounded-lg p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    JK
                  </div>
                  <div>
                    <p className="font-semibold">James K.</p>
                    <p className="text-sm text-muted-foreground">Graduate Student, Security Studies</p>
                  </div>
                </div>
                <p className="text-sm mb-3">
                  &ldquo;As a grad student with no prior intelligence background, I was worried the content would be too
                  advanced. The beginner paths were perfectly structured and gave me the vocabulary and frameworks
                  I needed to excel in my program and internship interviews.&rdquo;
                </p>
                <p className="text-xs font-medium text-primary">✓ Secured competitive intelligence internship</p>
              </div>

              <div className="border rounded-lg p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    AP
                  </div>
                  <div>
                    <p className="font-semibold">Anika P.</p>
                    <p className="text-sm text-muted-foreground">Cybersecurity Analyst</p>
                  </div>
                </div>
                <p className="text-sm mb-3">
                  &ldquo;I needed to add threat intelligence skills to my cybersecurity background. The Academy&apos;s
                  modules on collection and analysis gave me a framework I now use daily. It&apos;s the most
                  cost-effective professional development I&apos;ve invested in.&rdquo;
                </p>
                <p className="text-xs font-medium text-primary">✓ Transitioned into Threat Intelligence role</p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing & Access</h2>
            <p className="mb-4">
              We offer flexible pricing options to accommodate individuals and organizations of all sizes.
              Our goal is to make quality intelligence training accessible without compromising on content quality.
            </p>
            <p className="mb-6">
              {REFUND_POLICY}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/learning-paths">Explore Learning Paths</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`mailto:${SUPPORT_EMAIL}`}>Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
