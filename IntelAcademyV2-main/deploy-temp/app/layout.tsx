// app/layout.tsx - Remove "use client" and unused imports
import type React from "react"
import "./globals.css"
import "./button-animations.css"

import { Inter } from "next/font/google"
import { EnvWarningSuppressor } from "@/components/env-warning-suppressor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutWrapper } from "@/components/layout-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The The Intel Analyst Academy",
  description: "Learn intelligence analysis techniques and methodologies",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <EnvWarningSuppressor /> */}
        <Header />
        <main className="flex-grow">
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