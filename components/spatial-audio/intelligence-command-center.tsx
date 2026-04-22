"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useSpatialAudio } from "@/hooks/use-spatial-audio"
import { Radar, Database, Radio, Shield, Monitor, Satellite } from "lucide-react"

interface CommandStation {
  id: string
  name: string
  position: { x: number; y: number; z: number }
  icon: React.ComponentType<{ className?: string }>
  sounds: string[]
  active: boolean
}

export function IntelligenceCommandCenter() {
  const { playPositionalSound, updateListener, createAmbientEnvironment, isInitialized } = useSpatialAudio({
    environmentType: "command_center",
    roomSize: "large",
  })

  const [listenerPosition, setListenerPosition] = useState({ x: 0, y: 0, z: 0 })
  const [listenerRotation, setListenerRotation] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const commandStations: CommandStation[] = [
    {
      id: "radar",
      name: "Radar Station",
      position: { x: -0.8, y: 0, z: 0.5 },
      icon: Radar,
      sounds: ["radarPing", "dataTransmission"],
      active: true,
    },
    {
      id: "database",
      name: "Database Server",
      position: { x: 0.8, y: 0, z: 0.5 },
      icon: Database,
      sounds: ["serverHum", "hardDriveAccess"],
      active: true,
    },
    {
      id: "comms",
      name: "Communications",
      position: { x: 0, y: 0, z: -0.8 },
      icon: Radio,
      sounds: ["incomingTransmission", "radioStatic"],
      active: false,
    },
    {
      id: "security",
      name: "Security Console",
      position: { x: -0.5, y: 0, z: -0.3 },
      icon: Shield,
      sounds: ["securityAlert", "keyboardTyping"],
      active: true,
    },
    {
      id: "analysis",
      name: "Analysis Workstation",
      position: { x: 0.5, y: 0, z: -0.3 },
      icon: Monitor,
      sounds: ["keyboardTyping", "dataTransmission"],
      active: true,
    },
    {
      id: "satellite",
      name: "Satellite Uplink",
      position: { x: 0, y: 0.5, z: 0 },
      icon: Satellite,
      sounds: ["satelliteLink", "encryptionProcess"],
      active: false,
    },
  ]

  useEffect(() => {
    if (isInitialized) {
      createAmbientEnvironment()
    }
  }, [isInitialized, createAmbientEnvironment])

  // Handle mouse movement for listener positioning
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = (e.clientX - rect.left - centerX) / centerX
    const y = (e.clientY - rect.top - centerY) / centerY

    const newPosition = { x: x * 0.5, y: 0, z: y * 0.5 }
    setListenerPosition(newPosition)

    // Calculate forward direction based on mouse position
    const forward = { x: -x * 0.3, y: 0, z: -1 }
    updateListener(newPosition, forward)
  }

  // Handle station interaction
  const handleStationClick = (station: CommandStation) => {
    const randomSound = station.sounds[Math.floor(Math.random() * station.sounds.length)]
    playPositionalSound(randomSound as any, station.position)
  }

  // Convert 3D position to 2D screen coordinates
  const positionToScreen = (pos: { x: number; y: number; z: number }) => {
    const scale = 200
    return {
      x: pos.x * scale,
      y: pos.z * scale,
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Intelligence Command Center</h1>
          <p className="text-blue-200 mb-4">
            Move your mouse to navigate the 3D audio space. Click stations to trigger positional audio.
          </p>
          <div className="text-sm text-blue-300">
            Listener Position: X: {listenerPosition.x.toFixed(2)}, Z: {listenerPosition.z.toFixed(2)}
          </div>
        </div>

        {/* 3D Command Center View */}
        <div
          ref={containerRef}
          className="relative w-full h-96 bg-slate-800/30 rounded-lg border border-blue-500/30 overflow-hidden cursor-crosshair"
          onMouseMove={handleMouseMove}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Center Point (Listener) */}
          <motion.div
            className="absolute w-4 h-4 bg-green-400 rounded-full border-2 border-green-300 shadow-lg"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${listenerPosition.x * 200}px, ${listenerPosition.z * 200}px)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
          </motion.div>

          {/* Command Stations */}
          {commandStations.map((station) => {
            const screenPos = positionToScreen(station.position)
            const Icon = station.icon

            return (
              <motion.div
                key={station.id}
                className={`absolute w-12 h-12 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  station.active
                    ? "bg-blue-600/80 border-blue-400 hover:bg-blue-500/90"
                    : "bg-slate-600/80 border-slate-400 hover:bg-slate-500/90"
                }`}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${screenPos.x}px, ${screenPos.y}px)`,
                }}
                onClick={() => handleStationClick(station)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  station.active
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.7)",
                          "0 0 0 10px rgba(59, 130, 246, 0)",
                          "0 0 0 0 rgba(59, 130, 246, 0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: station.active ? Number.POSITIVE_INFINITY : 0,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Station Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-center whitespace-nowrap">
                  <div className="bg-slate-800/90 px-2 py-1 rounded border border-slate-600">{station.name}</div>
                </div>

                {/* Audio Range Indicator */}
                <div
                  className={`absolute inset-0 rounded-full border opacity-30 ${
                    station.active ? "border-blue-400" : "border-slate-400"
                  }`}
                  style={{
                    width: "120px",
                    height: "120px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </motion.div>
            )
          })}

          {/* Audio Waves Visualization */}
          <div className="absolute inset-0 pointer-events-none">
            {commandStations
              .filter((s) => s.active)
              .map((station) => {
                const screenPos = positionToScreen(station.position)
                return (
                  <motion.div
                    key={`wave-${station.id}`}
                    className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) translate(${screenPos.x}px, ${screenPos.y}px)`,
                    }}
                    animate={{
                      scale: [1, 3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeOut",
                      delay: Math.random() * 2,
                    }}
                  />
                )
              })}
          </div>
        </div>

        {/* Control Panel */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commandStations.map((station) => (
            <div
              key={station.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                station.active ? "bg-blue-900/30 border-blue-500/50" : "bg-slate-800/30 border-slate-600/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <station.icon className="w-5 h-5" />
                <h3 className="font-semibold">{station.name}</h3>
                <div className={`w-2 h-2 rounded-full ${station.active ? "bg-green-400" : "bg-slate-400"}`} />
              </div>
              <div className="text-sm text-slate-300 mb-3">
                Position: ({station.position.x.toFixed(1)}, {station.position.z.toFixed(1)})
              </div>
              <div className="flex flex-wrap gap-2">
                {station.sounds.map((sound) => (
                  <button
                    key={sound}
                    onClick={() => playPositionalSound(sound as any, station.position)}
                    className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded transition-colors"
                  >
                    {sound}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">3D Audio Instructions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-300 mb-2">Navigation</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Move mouse to change listener position</li>
                <li>• Green dot represents your location</li>
                <li>• Audio pans based on station positions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-300 mb-2">Interaction</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Click stations to trigger sounds</li>
                <li>• Active stations pulse with blue light</li>
                <li>• Use headphones for best experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
