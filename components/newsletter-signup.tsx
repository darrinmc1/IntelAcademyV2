import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-10 my-12">
      <div className="container px-4 md:px-6">
        <div className="glass-panel-heavy border-cyan-500/20 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto shadow-[0_0_40px_rgba(8,145,178,0.1)] relative overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center justify-center space-y-6 text-center relative z-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-white">
                Stay <span className="text-gradient-primary">Updated</span>
              </h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl font-light">
                Subscribe to our intel briefings for the latest tutorials, methodologies, and community updates.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50 h-12"
                  placeholder="Enter your encrypted endpoint (email)"
                  type="email"
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-cyan-600 hover:bg-cyan-500 text-white glow-primary-hover shadow-[0_0_15px_rgba(8,145,178,0.3)] transition-all"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-slate-500 font-light tracking-wide">
                We respect your operational security. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
