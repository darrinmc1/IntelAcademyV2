import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./button-animations.css"
import { WaitlistPopup } from "@/components/waitlist-popup"

import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { UserProvider } from "@/components/user-provider"
import { AuthProvider } from "@/components/auth-provider"
import { Toaster } from "sonner"
import { HumorProvider } from "@/components/humor-provider"
import { FeedbackWidget } from "@/components/feedback-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "The Intel Analyst Academy",
    template: "%s | The Intel Analyst Academy",
  },
  description:
    "Master intelligence analysis techniques and methodologies — from OSINT and threat assessment to geospatial and financial intelligence.",
  metadataBase: new URL("https://www.theintelanalystacademy.com"),
  openGraph: {
    siteName: "The Intel Analyst Academy",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var handleChunkError = function(msg) {
                  if (msg.indexOf('ChunkLoadError') > -1 || msg.indexOf('Loading chunk') > -1) {
                    console.warn('ChunkLoadError detected. Checking rate limit before automatic reload...');
                    var now = Date.now();
                    var lastReload = sessionStorage.getItem('last_chunk_reload');
                    if (!lastReload || (now - parseInt(lastReload, 10) > 10000)) {
                      sessionStorage.setItem('last_chunk_reload', now.toString());
                      window.location.reload();
                    }
                  }
                };
                window.addEventListener('error', function(event) {
                  var msg = event.message || '';
                  handleChunkError(msg);
                }, true);
                window.addEventListener('unhandledrejection', function(event) {
                  var reason = (event.reason && event.reason.message) || '';
                  handleChunkError(reason);
                });
              })();
            `
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 flex flex-col relative`}>
        <UserProvider>
          <AuthProvider>
            <HumorProvider>
              <AnimatedBackground />
              <Header />
              <main className="flex-grow z-10">
                <LayoutWrapper>
                  {children}
                </LayoutWrapper>
              </main>
              <Footer />
              <ScrollToTop />
              <FeedbackWidget />
              <Toaster position="top-right" theme="dark" richColors />
            </HumorProvider>
          </AuthProvider>
        </UserProvider>
        <WaitlistPopup />
      </body>
    </html>
  )
}
