"use client"

import { useCallback, useRef, useEffect } from "react"

interface AudioCueOptions {
  volume?: number
  enabled?: boolean
  respectUserPreferences?: boolean
}

export function useAudioCues(options: AudioCueOptions = {}) {
  const { volume = 0.3, enabled = true, respectUserPreferences = true } = options

  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const enabledRef = useRef(enabled)
  const isInitialized = useRef(false)

  const resumeAudio = useCallback(() => {
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume()
    }
  }, [])

  // Initialize audio context
  useEffect(() => {
    if (typeof window === "undefined" || isInitialized.current) return

    // Check user preferences for reduced motion/audio
    if (respectUserPreferences) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (prefersReducedMotion) {
        enabledRef.current = false
        return
      }
    }

    // Initialize Web Audio API
    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      gainNodeRef.current = audioContextRef.current.createGain()
      gainNodeRef.current.connect(audioContextRef.current.destination)
      gainNodeRef.current.gain.value = volume
      isInitialized.current = true
    } catch (error) {
      console.warn("Audio context not supported:", error)
      enabledRef.current = false
    }

    // Add a global event listener to resume audio on any user interaction
    const events: (keyof DocumentEventMap)[] = ["click", "keydown", "touchstart"]
    const resume = () => {
      resumeAudio()
      events.forEach((event) => document.removeEventListener(event, resume))
    }
    events.forEach((event) => document.addEventListener(event, resume, { once: true }))

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
      events.forEach((event) => document.removeEventListener(event, resume))
    }
  }, [volume, respectUserPreferences, resumeAudio])

  // Create oscillator-based sound
  const createTone = useCallback((frequency: number, duration: number, type: OscillatorType = "sine") => {
    if (!enabledRef.current || !audioContextRef.current || !gainNodeRef.current) return

    try {
      const oscillator = audioContextRef.current.createOscillator()
      const envelope = audioContextRef.current.createGain()

      oscillator.connect(envelope)
      envelope.connect(gainNodeRef.current)

      oscillator.frequency.value = frequency
      oscillator.type = type

      // Envelope for smooth attack and release
      const now = audioContextRef.current.currentTime
      envelope.gain.setValueAtTime(0, now)
      envelope.gain.linearRampToValueAtTime(0.1, now + 0.01) // Quick attack
      envelope.gain.exponentialRampToValueAtTime(0.001, now + duration) // Smooth decay

      oscillator.start(now)
      oscillator.stop(now + duration)
    } catch (error) {
      console.warn("Error creating audio tone:", error)
    }
  }, [])

  // Predefined audio cues
  const audioLibrary = {
    // Page transitions
    pageEnter: () => createTone(800, 0.15, "sine"), // Gentle ascending tone
    pageExit: () => createTone(600, 0.1, "sine"), // Gentle descending tone

    // Navigation
    navHover: () => createTone(1000, 0.05, "triangle"), // Subtle hover
    navClick: () => createTone(1200, 0.08, "square"), // Crisp click

    // Loading states
    loadingStart: () => {
      createTone(440, 0.1, "sine")
      setTimeout(() => createTone(554, 0.1, "sine"), 100)
    },
    loadingComplete: () => {
      createTone(659, 0.1, "sine")
      setTimeout(() => createTone(880, 0.15, "sine"), 80)
    },

    // Intelligence-themed sounds
    dataProcessing: () => {
      // Subtle data processing sound
      for (let i = 0; i < 3; i++) {
        setTimeout(() => createTone(800 + i * 100, 0.03, "square"), i * 50)
      }
    },

    secureAccess: () => {
      // Security clearance sound
      createTone(523, 0.08, "sine") // C note
      setTimeout(() => createTone(659, 0.08, "sine"), 100) // E note
      setTimeout(() => createTone(784, 0.12, "sine"), 200) // G note
    },

    alertSoft: () => createTone(880, 0.2, "triangle"), // Gentle alert
    confirmAction: () => {
      createTone(1047, 0.06, "sine") // High C
      setTimeout(() => createTone(523, 0.1, "sine"), 80) // Low C
    },

    // Error states
    errorSoft: () => createTone(220, 0.3, "sawtooth"), // Low, attention-getting

    // Success states
    successChime: () => {
      createTone(523, 0.1, "sine")
      setTimeout(() => createTone(659, 0.1, "sine"), 100)
      setTimeout(() => createTone(784, 0.15, "sine"), 200)
    },
  }

  const playSound = useCallback((soundName: keyof typeof audioLibrary) => {
    if (!enabledRef.current) return

    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        gainNodeRef.current = audioContextRef.current.createGain()
        gainNodeRef.current.connect(audioContextRef.current.destination)
        gainNodeRef.current.gain.value = volume
      } catch (error) {
        console.warn("Audio context not supported:", error)
        enabledRef.current = false
        return
      }
    }

    // Resume audio context if suspended (required by some browsers)
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume()
    }

    audioLibrary[soundName]()
  }, [volume])

  const setEnabled = useCallback((enabled: boolean) => {
    enabledRef.current = enabled
  }, [])

  const setVolume = useCallback((newVolume: number) => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = Math.max(0, Math.min(1, newVolume))
    }
  }, [])

  return {
    playSound,
    setEnabled,
    setVolume,
    isEnabled: enabledRef.current,
    audioLibrary: Object.keys(audioLibrary) as (keyof typeof audioLibrary)[],
  }
}
