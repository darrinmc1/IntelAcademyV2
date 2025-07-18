import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Subscribe to our newsletter for the latest tutorials, resources, and community updates.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
