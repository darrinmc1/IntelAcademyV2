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
          <p className="text-xl text-muted-foreground mb-8">
            Empowering intelligence professionals through accessible, high-quality education
          </p>
          {/* Primary CTA — hero-level conversion */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/enroll">Enroll for Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/learning-paths">Explore Learning Paths</Link>
            </Button>
          </div>
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
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p>
                  Every module is built around real-world scenarios and techniques used by working analysts. Theory is
                  always paired with practical exercises so skills transfer directly to your role.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Authored Content</h3>
                <p>
                  Our curriculum is developed by experienced intelligence professionals with backgrounds spanning
                  government, law enforcement, and the private sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Updated</h3>
                <p>
                  The intelligence landscape evolves rapidly. We regularly update existing modules and add new content
                  to keep pace with emerging methodologies and threats.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Mid-page secondary CTA — users who have read enough to consider enrolling */}
          <section className="text-center py-4">
            <h2 className="text-2xl font-bold mb-3">Ready to advance your skills?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of analysts who have already started their learning journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/enroll">Start Learning Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing &amp; Access</h2>
            <p className="mb-4">
              We offer flexible access options to suit individuals and organizations of all sizes. Many foundational
              modules are available at no cost, with premium content available through our subscription plans.
            </p>
            <p className="mb-6">
              {REFUND_POLICY} For questions about pricing or enterprise licensing, contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline text-primary">
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
            {/* Tertiary CTA — pricing-aware users ready to commit */}
            <Button asChild variant="outline">
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
