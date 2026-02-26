import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 mt-auto border-t border-white/10 bg-slate-950 relative overflow-hidden z-10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-cyan-500/50 shadow-[0_0_30px_rgba(8,145,178,0.8)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-bold text-white tracking-wide">The Intel Analyst Academy</h3>
            </div>
            <p className="text-slate-400 font-light leading-relaxed">
              Professional education for intelligence analysts at all levels. Mastering the art of collection, analysis, and dissemination.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide border-b border-white/10 pb-2 inline-block">Learning Paths</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/learning-paths/foundations"
                  className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light"
                >
                  Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/strategic-intelligence"
                  className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light"
                >
                  Strategic Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/tactical-intelligence"
                  className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light"
                >
                  Tactical Intelligence
                </Link>
              </li>
              <li>
                <Link href="/learning-paths/osint" className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light">
                  OSINT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide border-b border-white/10 pb-2 inline-block">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/downloads" className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 font-light">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide border-b border-white/10 pb-2 inline-block">Secure Comms</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@TheIntelAnalystAcademy.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-light flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@TheIntelAnalystAcademy.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-light flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                  Request Intel Topics
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} The Intel Analyst Academy. All rights reserved.</p>
          <p className="text-sm">End-to-end encrypted learning platform.</p>
        </div>
      </div>
    </footer>
  )
}
