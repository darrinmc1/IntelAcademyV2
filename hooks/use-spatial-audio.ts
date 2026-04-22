"use client"

import { useCallback, useRef, useEffect, useState } from "react"

interface SpatialPosition {
  x: number // -1 to 1 (left to right)
  y: number // -1 to 1 (back to front)
  z: number // -1 to 1 (down to up)
}

interface SpatialAudioOptions {
  volume?: number
  enabled?: boolean
  roomSize?: "small" | "medium" | "large"
  environmentType?: "office" | "bunker" | "server_room" | "command_center"
}

export function useSpatialAudio(options: SpatialAudioOptions = {}) {
  const { volume = 0.3, enabled = true, roomSize = "medium", environmentType = "command_center" } = options

  const audioContextRef = useRef<AudioContext | null>(null)
  const listenerRef = useRef<AudioListener | null>(null)
  const convolverRef = useRef<ConvolverNode | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Room impulse response data (simplified)
  const roomConfigs = {
    small: { size: 5, reverb: 0.3, absorption: 0.7 },
    medium: { size: 10, reverb: 0.5, absorption: 0.5 },
    large: { size: 20, reverb: 0.8, absorption: 0.3 },
  }

  const environmentAmbience = {
    office: { baseFreq: 200, noise: 0.1, hum: 60 },
    bunker: { baseFreq: 100, noise: 0.05, hum: 50 },
    server_room: { baseFreq: 400, noise: 0.2, hum: 120 },
    command_center: { baseFreq: 300, noise: 0.15, hum: 80 },
  }

  // Initialize spatial audio context
  useEffect(() => {
    if (typeof window === "undefined" || !enabled) return

    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      listenerRef.current = audioContextRef.current.listener

      // Set up master gain
      masterGainRef.current = audioContextRef.current.createGain()
      masterGainRef.current.connect(audioContextRef.current.destination)
      masterGainRef.current.gain.value = volume

      // Create convolver for room simulation
      convolverRef.current = audioContextRef.current.createConvolver()
      convolverRef.current.connect(masterGainRef.current)

      // Generate impulse response for room acoustics
      generateImpulseResponse()

      // Set initial listener position (center of room)
      if (listenerRef.current.positionX) {
        listenerRef.current.positionX.value = 0
        listenerRef.current.positionY.value = 0
        listenerRef.current.positionZ.value = 0
        listenerRef.current.forwardX.value = 0
        listenerRef.current.forwardY.value = 0
        listenerRef.current.forwardZ.value = -1
        listenerRef.current.upX.value = 0
        listenerRef.current.upY.value = 1
        listenerRef.current.upZ.value = 0
      }

      setIsInitialized(true)
    } catch (error) {
      console.warn("Spatial audio not supported:", error)
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [enabled, volume])

  // Generate impulse response for room acoustics
  const generateImpulseResponse = useCallback(() => {
    if (!audioContextRef.current || !convolverRef.current) return

    const config = roomConfigs[roomSize]
    const sampleRate = audioContextRef.current.sampleRate
    const length = sampleRate * config.reverb
    const impulse = audioContextRef.current.createBuffer(2, length, sampleRate)

    for (let channel = 0; channel < 2; channel++) {
      const channelData = impulse.getChannelData(channel)
      for (let i = 0; i < length; i++) {
        const decay = Math.pow(1 - i / length, 2)
        channelData[i] = (Math.random() * 2 - 1) * decay * config.absorption
      }
    }

    convolverRef.current.buffer = impulse
  }, [roomSize])

  // Create 3D positioned audio source
  const createSpatialSource = useCallback(
    (frequency: number, duration: number, position: SpatialPosition, type: OscillatorType = "sine") => {
      if (!audioContextRef.current || !isInitialized) return null

      try {
        const oscillator = audioContextRef.current.createOscillator()
        const panner = audioContextRef.current.createPanner()
        const gainNode = audioContextRef.current.createGain()

        // Configure panner for 3D audio
        panner.panningModel = "HRTF"
        panner.distanceModel = "inverse"
        panner.refDistance = 1
        panner.maxDistance = 10000
        panner.rolloffFactor = 1
        panner.coneInnerAngle = 360
        panner.coneOuterAngle = 0
        panner.coneOuterGain = 0

        // Set position
        if (panner.positionX) {
          panner.positionX.value = position.x * 10
          panner.positionY.value = position.y * 10
          panner.positionZ.value = position.z * 10
        }

        // Configure oscillator
        oscillator.frequency.value = frequency
        oscillator.type = type

        // Connect audio graph
        oscillator.connect(gainNode)
        gainNode.connect(panner)
        panner.connect(convolverRef.current!)
        panner.connect(masterGainRef.current!) // Direct + reverb

        // Envelope
        const now = audioContextRef.current.currentTime
        gainNode.gain.setValueAtTime(0, now)
        gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration)

        oscillator.start(now)
        oscillator.stop(now + duration)

        return { oscillator, panner, gainNode }
      } catch (error) {
        console.warn("Error creating spatial audio source:", error)
        return null
      }
    },
    [isInitialized],
  )

  // Update listener position and orientation
  const updateListener = useCallback(
    (position: SpatialPosition, forward: SpatialPosition, up: SpatialPosition = { x: 0, y: 1, z: 0 }) => {
      if (!listenerRef.current || !isInitialized) return

      try {
        if (listenerRef.current.positionX) {
          listenerRef.current.positionX.value = position.x * 10
          listenerRef.current.positionY.value = position.y * 10
          listenerRef.current.positionZ.value = position.z * 10
          listenerRef.current.forwardX.value = forward.x
          listenerRef.current.forwardY.value = forward.y
          listenerRef.current.forwardZ.value = forward.z
          listenerRef.current.upX.value = up.x
          listenerRef.current.upY.value = up.y
          listenerRef.current.upZ.value = up.z
        }
      } catch (error) {
        console.warn("Error updating listener position:", error)
      }
    },
    [isInitialized],
  )

  // Intelligence scenario audio library
  const spatialAudioLibrary = {
    // Command center sounds
    radarPing: (position: SpatialPosition) => createSpatialSource(1000, 0.1, position, "sine"),
    dataTransmission: (position: SpatialPosition) => {
      const source = createSpatialSource(800, 0.3, position, "square")
      // Add frequency modulation for data effect
      if (source?.oscillator && audioContextRef.current) {
        const lfo = audioContextRef.current.createOscillator()
        const lfoGain = audioContextRef.current.createGain()
        lfo.frequency.value = 10
        lfoGain.gain.value = 50
        lfo.connect(lfoGain)
        lfoGain.connect(source.oscillator.frequency)
        lfo.start()
        lfo.stop(audioContextRef.current.currentTime + 0.3)
      }
      return source
    },

    // Server room ambience
    serverHum: (position: SpatialPosition) => createSpatialSource(120, 2.0, position, "sawtooth"),
    coolingFan: (position: SpatialPosition) => createSpatialSource(200, 1.5, position, "triangle"),
    hardDriveAccess: (position: SpatialPosition) => createSpatialSource(400, 0.2, position, "square"),

    // Communication sounds
    radioStatic: (position: SpatialPosition) => {
      const source = createSpatialSource(2000, 0.5, position, "sawtooth")
      // Add noise modulation
      return source
    },
    incomingTransmission: (position: SpatialPosition) => {
      // Multi-tone alert
      createSpatialSource(800, 0.1, position, "sine")
      setTimeout(() => createSpatialSource(1000, 0.1, position, "sine"), 100)
      setTimeout(() => createSpatialSource(1200, 0.1, position, "sine"), 200)
    },

    // Alert systems
    securityAlert: (position: SpatialPosition) => {
      // Alternating tones
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const freq = i % 2 === 0 ? 880 : 1100
          createSpatialSource(freq, 0.2, position, "square")
        }, i * 300)
      }
    },

    // Environmental
    footsteps: (position: SpatialPosition) => createSpatialSource(150, 0.1, position, "triangle"),
    doorOpen: (position: SpatialPosition) => createSpatialSource(300, 0.3, position, "sawtooth"),
    keyboardTyping: (position: SpatialPosition) => createSpatialSource(1500, 0.05, position, "square"),

    // Intelligence operations
    satelliteLink: (position: SpatialPosition) => {
      // Ascending frequency sweep
      const source = createSpatialSource(400, 1.0, position, "sine")
      if (source?.oscillator && audioContextRef.current) {
        source.oscillator.frequency.exponentialRampToValueAtTime(1200, audioContextRef.current.currentTime + 1.0)
      }
      return source
    },

    encryptionProcess: (position: SpatialPosition) => {
      // Rapid frequency changes
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const freq = 600 + Math.random() * 400
          createSpatialSource(freq, 0.05, position, "square")
        }, i * 50)
      }
    },
  }

  const playPositionalSound = useCallback(
    (soundName: keyof typeof spatialAudioLibrary, position: SpatialPosition) => {
      if (!isInitialized || !enabled) return

      // Resume audio context if suspended
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume()
      }

      spatialAudioLibrary[soundName](position)
    },
    [isInitialized, enabled],
  )

  // Create ambient environment
  const createAmbientEnvironment = useCallback(() => {
    if (!isInitialized || !enabled) return

    const config = environmentAmbience[environmentType]

    // Create ambient hum
    const ambientSource = createSpatialSource(config.baseFreq, 10, { x: 0, y: 0, z: 0 }, "sawtooth")
    if (ambientSource?.gainNode) {
      ambientSource.gainNode.gain.value = 0.02 // Very quiet ambient
    }

    // Add random environmental sounds
    const environmentalSounds = () => {
      if (Math.random() < 0.3) {
        const randomPos: SpatialPosition = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 0.5,
          z: (Math.random() - 0.5) * 2,
        }

        switch (environmentType) {
          case "server_room":
            if (Math.random() < 0.5) {
              playPositionalSound("serverHum", randomPos)
            } else {
              playPositionalSound("hardDriveAccess", randomPos)
            }
            break
          case "command_center":
            if (Math.random() < 0.3) {
              playPositionalSound("radarPing", randomPos)
            } else if (Math.random() < 0.6) {
              playPositionalSound("dataTransmission", randomPos)
            }
            break
        }
      }

      setTimeout(environmentalSounds, 3000 + Math.random() * 5000)
    }

    setTimeout(environmentalSounds, 2000)
  }, [isInitialized, enabled, environmentType, playPositionalSound])

  return {
    playPositionalSound,
    updateListener,
    createAmbientEnvironment,
    isInitialized,
    spatialAudioLibrary: Object.keys(spatialAudioLibrary) as (keyof typeof spatialAudioLibrary)[],
  }
}
