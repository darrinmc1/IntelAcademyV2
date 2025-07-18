"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSpatialAudio } from "@/hooks/use-spatial-audio"
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react"

interface ScenarioEvent {
  id: string
  time: number
  description: string
  position: { x: number; y: number; z: number }
  sound: string
  duration: number
}

interface IntelligenceScenario {
  id: string
  title: string
  description: string
  duration: number
  events: ScenarioEvent[]
}

export function IntelligenceScenarioTheater() {
  const { playPositionalSound, updateListener, createAmbientEnvironment, isInitialized } = useSpatialAudio({
    environmentType: "command_center",
    roomSize: "large",
  })

  const [currentScenario, setCurrentScenario] = useState<IntelligenceScenario | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [activeEvents, setActiveEvents] = useState<ScenarioEvent[]>([])

  const scenarios: IntelligenceScenario[] = [
    {
      id: "cyber_breach",
      title: "Cyber Security Breach",
      description: "A coordinated cyber attack on critical infrastructure",
      duration: 30,
      events: [
        {
          id: "initial_alert",
          time: 0,
          description: "Security alert triggered",
          position: { x: -0.8, y: 0, z: 0.3 },
          sound: "securityAlert",
          duration: 2,
        },
        {
          id: "server_access",
          time: 3,
          description: "Unauthorized server access detected",
          position: { x: 0.8, y: 0, z: 0.5 },
          sound: "hardDriveAccess",
          duration: 1,
        },
        {
          id: "comms_chatter",
          time: 5,
          description: "Emergency communications activated",
          position: { x: 0, y: 0, z: -0.8 },
          sound: "incomingTransmission",
          duration: 3,
        },
        {
          id: "data_exfil",
          time: 8,
          description: "Data exfiltration in progress",
          position: { x: 0.6, y: 0, z: 0.2 },
          sound: "dataTransmission",
          duration: 4,
        },
        {
          id: "countermeasures",
          time: 12,
          description: "Deploying countermeasures",
          position: { x: -0.5, y: 0, z: -0.3 },
          sound: "encryptionProcess",
          duration: 3,
        },
        {
          id: "satellite_backup",
          time: 16,
          description: "Switching to satellite backup",
          position: { x: 0, y: 0.5, z: 0 },
          sound: "satelliteLink",
          duration: 2,
        },
        {
          id: "threat_contained",
          time: 20,
          description: "Threat contained",
          position: { x: 0, y: 0, z: 0 },
          sound: "radarPing",
          duration: 1,
        },
      ],
    },
    {
      id: "surveillance_op",
      title: "Surveillance Operation",
      description: "Coordinated surveillance of high-value target",
      duration: 25,
      events: [
        {
          id: "target_spotted",
          time: 0,
          description: "Target acquired on radar",
          position: { x: -0.7, y: 0, z: 0.4 },
          sound: "radarPing",
          duration: 1,
        },
        {
          id: "team_deploy",
          time: 3,
          description: "Surveillance team deploying",
          position: { x: -0.3, y: 0, z: -0.6 },
          sound: "footsteps",
          duration: 2,
        },
        {
          id: "comms_check",
          time: 6,
          description: "Communications check",
          position: { x: 0, y: 0, z: -0.8 },
          sound: "radioStatic",
          duration: 1,
        },
        {
          id: "data_collection",
          time: 9,
          description: "Intelligence gathering",
          position: { x: 0.5, y: 0, z: -0.3 },
          sound: "keyboardTyping",
          duration: 3,
        },
        {
          id: "target_move",
          time: 13,
          description: "Target on the move",
          position: { x: 0.8, y: 0, z: 0.2 },
          sound: "incomingTransmission",
          duration: 2,
        },
        {
          id: "satellite_track",
          time: 16,
          description: "Satellite tracking engaged",
          position: { x: 0, y: 0.5, z: 0 },
          sound: "satelliteLink",
          duration: 2,
        },
        {
          id: "mission_complete",
          time: 20,
          description: "Mission completed",
          position: { x: 0, y: 0, z: 0 },
          sound: "dataTransmission",
          duration: 1,
        },
      ],
    },
    {
      id: "emergency_response",
      title: "Emergency Response",
      description: "Coordinated response to national security threat",
      duration: 35,
      events: [
        {
          id: "threat_detected",
          time: 0,
          description: "Threat level elevated",
          position: { x: 0, y: 0, z: 0 },
          sound: "securityAlert",
          duration: 3,
        },
        {
          id: "all_stations",
          time: 4,
          description: "All stations alert",
          position: { x: -0.8, y: 0, z: 0.5 },
          sound: "radarPing",
          duration: 1,
        },
        {
          id: "database_query",
          time: 6,
          description: "Database analysis initiated",
          position: { x: 0.8, y: 0, z: 0.5 },
          sound: "serverHum",
          duration: 4,
        },
        {
          id: "field_teams",
          time: 10,
          description: "Field teams mobilizing",
          position: { x: -0.6, y: 0, z: -0.4 },
          sound: "incomingTransmission",
          duration: 2,
        },
        {
          id: "intel_analysis",
          time: 13,
          description: "Intelligence analysis",
          position: { x: 0.5, y: 0, z: -0.3 },
          sound: "dataTransmission",
          duration: 5,
        },
        {
          id: "coordination",
          time: 18,
          description: "Multi-agency coordination",
          position: { x: 0, y: 0, z: -0.8 },
          sound: "radioStatic",
          duration: 3,
        },
        {
          id: "satellite_intel",
          time: 22,
          description: "Satellite intelligence",
          position: { x: 0, y: 0.5, z: 0 },
          sound: "satelliteLink",
          duration: 2,
        },
        {
          id: "threat_neutralized",
          time: 26,
          description: "Threat neutralized",
          position: { x: 0, y: 0, z: 0 },
          sound: "encryptionProcess",
          duration: 2,
        },
        {
          id: "all_clear",
          time: 30,
          description: "All clear signal",
          position: { x: 0, y: 0, z: 0 },
          sound: "radarPing",
          duration: 1,
        },
      ],
    },
  ]

  useEffect(() => {
    if (isInitialized) {
      createAmbientEnvironment()
    }
  }, [isInitialized, createAmbientEnvironment])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && currentScenario) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 0.1
          if (newTime >= currentScenario.duration) {
            setIsPlaying(false)
            return currentScenario.duration
          }
          return newTime
        })
      }, 100)
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentScenario])

  useEffect(() => {
    if (!currentScenario) return

    const currentEvents = currentScenario.events.filter(
      (event) => currentTime >= event.time && currentTime <= event.time + event.duration,
    )

    // Trigger new events
    currentEvents.forEach((event) => {
      if (!activeEvents.find((ae) => ae.id === event.id)) {
        playPositionalSound(event.sound as any, event.position)
      }
    })

    setActiveEvents(currentEvents)
  }, [currentTime, currentScenario, playPositionalSound, activeEvents])

  const handlePlay = () => {
    if (!currentScenario) return
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    setActiveEvents([])
  }

  const handleScenarioSelect = (scenario: IntelligenceScenario) => {
    setCurrentScenario(scenario)
    setCurrentTime(0)
    setIsPlaying(false)
    setActiveEvents([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Intelligence Scenario Theater</h1>
          <p className="text-blue-200">Experience immersive 3D audio scenarios from real intelligence operations</p>
        </div>

        {/* Scenario Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {scenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                currentScenario?.id === scenario.id
                  ? "bg-blue-900/50 border-blue-400"
                  : "bg-slate-800/30 border-slate-600 hover:border-slate-500"
              }`}
              onClick={() => handleScenarioSelect(scenario)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold mb-2">{scenario.title}</h3>
              <p className="text-sm text-slate-300 mb-2">{scenario.description}</p>
              <div className="text-xs text-blue-300">Duration: {scenario.duration}s</div>
            </motion.div>
          ))}
        </div>

        {currentScenario && (
          <>
            {/* Playback Controls */}
            <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{currentScenario.title}</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={isPlaying ? handlePause : handlePlay}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? "Pause" : "Play"}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-300 mb-2">
                  <span>{currentTime.toFixed(1)}s</span>
                  <span>{currentScenario.duration}s</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${(currentTime / currentScenario.duration) * 100}%` }}
                  />
                </div>
              </div>

              {/* Event Timeline */}
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Event Timeline</h3>
                  <Volume2 className="w-5 h-5 text-blue-400" />
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {currentScenario.events.map((event) => {
                    const isActive = activeEvents.find((ae) => ae.id === event.id)
                    const isPast = currentTime > event.time + event.duration
                    const isFuture = currentTime < event.time

                    return (
                      <motion.div
                        key={event.id}
                        className={`p-2 rounded text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600/50 border border-blue-400"
                            : isPast
                              ? "bg-green-900/30 border border-green-600/30"
                              : isFuture
                                ? "bg-slate-700/30 border border-slate-600/30"
                                : "bg-slate-700/50 border border-slate-600/50"
                        }`}
                        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 0.5, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
                      >
                        <div className="flex justify-between items-center">
                          <span>{event.description}</span>
                          <span className="text-xs opacity-75">{event.time}s</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* 3D Visualization */}
            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">3D Audio Visualization</h3>
              <div className="relative w-full h-64 bg-slate-900/50 rounded border border-blue-500/30 overflow-hidden">
                {/* Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="scenario-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#3b82f6" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#scenario-grid)" />
                  </svg>
                </div>

                {/* Active Events */}
                <AnimatePresence>
                  {activeEvents.map((event) => {
                    const x = (event.position.x + 1) * 50 // Convert -1,1 to 0,100%
                    const y = (event.position.z + 1) * 50

                    return (
                      <motion.div
                        key={event.id}
                        className="absolute w-8 h-8 bg-blue-500 rounded-full border-2 border-blue-300"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
                          <div className="bg-slate-800/90 px-2 py-1 rounded border border-slate-600">
                            {event.description}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {/* Listener Position */}
                <div
                  className="absolute w-4 h-4 bg-green-400 rounded-full border-2 border-green-300"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-75" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
