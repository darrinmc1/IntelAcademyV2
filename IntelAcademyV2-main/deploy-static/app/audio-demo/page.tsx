"use client"

import { useState } from "react"
import { AudioEnhancedButton } from "@/components/ui/audio-enhanced-button"
import { AudioLoadingScreen } from "@/components/transitions/audio-loading-screen"
import { AudioSectionReveal } from "@/components/transitions/audio-section-reveal"
import { useAudioCues } from "@/hooks/use-audio-cues"
import { Volume2, VolumeX, Play } from "lucide-react"

export default function AudioDemoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const { playSound, setEnabled, audioLibrary } = useAudioCues()

  const handleToggleAudio = () => {
    const newState = !audioEnabled
    setAudioEnabled(newState)
    setEnabled(newState)
    if (newState) {
      playSound("confirmAction")
    }
  }

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 4000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <AudioLoadingScreen isLoading={isLoading} />

      <div className="container mx-auto px-6 py-12">
        <AudioSectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Audio-Enhanced Experience</h1>
            <p className="text-xl text-blue-200">Experience the The Intel Analyst Academy with immersive audio cues</p>
          </div>
        </AudioSectionReveal>

        <AudioSectionReveal delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Audio Controls */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Audio Controls</h2>
                <AudioEnhancedButton
                  onClick={handleToggleAudio}
                  variant="ghost"
                  soundType="confirm"
                  className="flex items-center space-x-2"
                >
                  {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                  <span>{audioEnabled ? "Disable" : "Enable"} Audio</span>
                </AudioEnhancedButton>
              </div>
              <p className="text-blue-200">
                Toggle audio cues on/off. The system respects your browser&apos;s motion preferences.
              </p>
            </div>

            {/* Sound Library Demo */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Sound Library</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {audioLibrary.map((soundName) => (
                  <AudioEnhancedButton
                    key={soundName}
                    onClick={() => playSound(soundName)}
                    variant="secondary"
                    className="flex items-center space-x-2 justify-start"
                  >
                    <Play className="w-4 h-4" />
                    <span className="capitalize">{soundName.replace(/([A-Z])/g, " $1").trim()}</span>
                  </AudioEnhancedButton>
                ))}
              </div>
            </div>

            {/* Transition Demo */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Transition Demo</h2>
              <div className="space-y-4">
                <AudioEnhancedButton onClick={handleLoadingDemo} soundType="secure" className="w-full">
                  Trigger Loading Sequence
                </AudioEnhancedButton>
                <p className="text-blue-200 text-sm">
                  Experience the full audio-enhanced loading sequence with progress sounds and completion chimes.
                </p>
              </div>
            </div>

            {/* Button Variants */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Interactive Elements</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <AudioEnhancedButton variant="primary" soundType="confirm">
                    Primary Action
                  </AudioEnhancedButton>
                  <AudioEnhancedButton variant="secondary" soundType="click">
                    Secondary Action
                  </AudioEnhancedButton>
                  <AudioEnhancedButton variant="ghost" soundType="nav">
                    Ghost Button
                  </AudioEnhancedButton>
                  <AudioEnhancedButton variant="danger" soundType="click">
                    Danger Action
                  </AudioEnhancedButton>
                </div>
                <p className="text-blue-200 text-sm">
                  Each button type has distinct hover and click sounds to provide clear audio feedback.
                </p>
              </div>
            </div>
          </div>
        </AudioSectionReveal>

        <AudioSectionReveal delay={0.4}>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">Intelligence-Themed Audio Design</h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our audio system uses carefully crafted tones and frequencies that evoke professionalism, security, and
              technological sophistication - perfect for the intelligence analysis environment.
            </p>
          </div>
        </AudioSectionReveal>
      </div>
    </div>
  )
}
