import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-24">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Master Intelligence Analysis</h1>
        <p className="text-xl text-muted-foreground mb-8">Gain the critical skills and knowledge to excel in the field of intelligence analysis with our comprehensive, expert-led courses.</p>
        <div className="flex justify-center gap-4">
          <Link href="/courses">
            <Button size="lg">Explore Courses</Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">View Pricing</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Intel Analyst Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Expert-Led Instruction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn from seasoned intelligence professionals with real-world experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Covering everything from foundational concepts to advanced analytical techniques.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Practical Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Engage with hands-on labs, case studies, and simulations to hone your skills.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 w-full bg-secondary rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Flexible Learning Options</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Self-Paced Learning</CardTitle>
              <CardDescription>Learn on your own schedule.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> Access to all course materials</li>
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> Lifetime access to purchased courses</li>
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> Community forum access</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-3xl font-bold mb-4">$49<span className="text-lg font-normal">/course</span></p>
              <Link href="/pricing" className="w-full">
                <Button className="w-full">Choose Plan</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-sm border-primary border-2 shadow-lg">
            <CardHeader>
              <CardTitle>All-Access Subscription</CardTitle>
              <CardDescription>Unlimited access to everything.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> All Self-Paced features</li>
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> All current and future courses</li>
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> Exclusive webinars and Q&A sessions</li>
                <li><Check className="h-4 w-4 inline-block mr-2 text-primary" /> Priority support</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-3xl font-bold mb-4">$299<span className="text-lg font-normal">/year</span></p>
              <Link href="/pricing" className="w-full">
                <Button className="w-full">Start Learning</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Skills?</h2>
        <p className="text-xl text-muted-foreground mb-12">Join a growing community of intelligence professionals and gain the edge you need. Explore our course catalog or choose a subscription that fits your learning goals.</p>
        <div className="flex justify-center gap-4">
          <Link href="/courses">
            <Button size="lg">View All Courses</Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">Compare Plans</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
