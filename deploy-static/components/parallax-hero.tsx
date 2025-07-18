"use client"

import { useScrollParallax } from "@/hooks/use-scroll-parallax"
import Image from "next/image"

export function ParallaxHero() {
  const scrollY = useScrollParallax()

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/intelligence-analysis-dashboard.png"
          alt="Intelligence Analysis Dashboard"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Floating Intelligence Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full opacity-60 animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Intelligence Analyst Academy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Master the art and science of intelligence analysis with cutting-edge training
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/learning-paths"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Start Learning →
            </a>
            <a
              href="/learn-more"
              className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
