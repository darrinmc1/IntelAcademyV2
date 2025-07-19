"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Shield, Eye, Network, Database, Search, Target, Globe, Lock, Zap, Brain } from "lucide-react"

const loadingMessages = [
  "Analyzing intelligence patterns...",
  "Processing classified data...",
  "Establishing secure connections...",
  "Decrypting intelligence reports...",
  "Mapping network relationships...",
  "Validating source credibility...",
  "Generating threat assessments...",
  "Compiling strategic insights...",
]

const intelligenceIcons = [Shield, Eye, Network, Database, Search, Target, Globe, Lock, Zap, Brain]

export function IntelligenceLoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 800)

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100))
    }, 50)

    return () => {
      clearInterval(messageTimer)
      clearInterval(progressTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.1)_49%,rgba(59,130,246,0.1)_51%,transparent_52%)] bg-[length:40px_40px]"
        />
      </div>

      {/* Floating Intelligence Icons */}
      <div className="absolute inset-0">
        {intelligenceIcons.map((Icon, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            className="absolute"
          >
            <Icon className="w-8 h-8 text-blue-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md mx-auto px-6">
        {/* Central Intelligence Hub */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-32 h-32 border-2 border-blue-500/30 rounded-full"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-2 border-2 border-blue-400/50 rounded-full"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-4 border-2 border-blue-300/70 rounded-full"
          />

          {/* Center Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Shield className="w-12 h-12 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Academy Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-2">The Intel Analyst Academy</h1>
          <p className="text-blue-300 text-lg">Advanced Intelligence Training</p>
        </motion.div>

        {/* Dynamic Loading Message */}
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-blue-200 text-sm">{loadingMessages[messageIndex]}</p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs text-blue-300 mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center space-x-2 text-green-400 text-sm"
        >
          <Lock className="w-4 h-4" />
          <span>Secure Connection Established</span>
        </motion.div>
      </div>
    </div>
  )
}
