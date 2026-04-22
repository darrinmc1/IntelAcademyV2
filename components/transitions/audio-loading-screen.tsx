"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Shield, Eye, Database, Network } from "lucide-react"
import { useAudioCues } from "@/hooks/use-audio-cues"

interface AudioLoadingScreenProps {
  isLoading: boolean
  message?: string
}

export function AudioLoadingScreen({
  isLoading,
  message = "Accessing Intelligence Systems...",
}: AudioLoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(message)
  const { playSound } = useAudioCues({ volume: 0.15 })

  const loadingMessages = [
    "Initializing secure connection...",
    "Authenticating credentials...",
    "Loading intelligence modules...",
    "Preparing workspace...",
    "Access granted.",
  ]

  useEffect(() => {
    if (!isLoading) return

    // Play initial loading sound
    playSound("loadingStart")
    playSound("secureAccess")

    let progressInterval: NodeJS.Timeout
    let messageInterval: NodeJS.Timeout

    // Progress simulation with audio cues
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + Math.random() * 15, 100)

        // Play progress sounds at certain milestones
        if (prev < 25 && newProgress >= 25) {
          playSound("dataProcessing")
        } else if (prev < 50 && newProgress >= 50) {
          playSound("dataProcessing")
        } else if (prev < 75 && newProgress >= 75) {
          playSound("dataProcessing")
        } else if (prev < 100 && newProgress >= 100) {
          playSound("successChime")
        }

        return newProgress
      })
    }, 200)

    // Message cycling with audio
    let messageIndex = 0
    messageInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length) {
        setCurrentMessage(loadingMessages[messageIndex])
        playSound("navHover") // Subtle sound for message change
        messageIndex++
      }
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
    }
  }, [isLoading, playSound])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Animated Icons */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-4"
          >
            <div className="relative w-full h-full">
              <Shield className="absolute inset-0 w-full h-full text-blue-400" />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-2"
              >
                <Eye className="w-full h-full text-blue-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -top-4 -left-8"
          >
            <Database className="w-6 h-6 text-blue-500/60" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -top-4 -right-8"
          >
            <Network className="w-6 h-6 text-blue-500/60" />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="text-sm text-blue-300 font-mono">{Math.round(progress)}% Complete</div>
        </div>

        {/* Loading Message */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-white font-medium"
        >
          {currentMessage}
        </motion.div>

        {/* Intel Academy Branding */}
        <div className="text-blue-400/60 text-sm font-mono">The Intel Analyst Academy</div>
      </div>
    </motion.div>
  )
}
