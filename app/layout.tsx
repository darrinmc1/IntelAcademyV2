import type React from "react"
import "./globals.css"
import "./button-animations.css"

import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { AnimatedBackground } from "@/components/ui/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Intel Analyst Academy",
  description: "Learn intelligence analysis techniques and methodologies",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 flex flex-col relative`}>
        <AnimatedBackground />
        <Header />
        <main className="flex-grow z-10">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}