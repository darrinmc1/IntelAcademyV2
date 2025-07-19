"use client"

import { useState } from "react"
import { useSpatialAudio } from "@/hooks/use-spatial-audio"
import { Volume2, VolumeX, Settings } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function SpatialAudioControls() {
  const [isOpen, setIsOpen] = useState(false)
  const [volume, setVolume] = useState(30)
  const [enabled, setEnabled] = useState(true)
  const [roomSize, setRoomSize] = useState<"small" | "medium" | "large">("medium")
  const [environment, setEnvironment] = useState<"office" | "bunker" | "server_room" | "command_center">(
    "command_center",
  )

  const { isInitialized } = useSpatialAudio({
    volume: volume / 100,
    enabled,
    roomSize,
    environmentType: environment,
  })

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Control Panel */}
      {isOpen && (
        <div className="mb-4 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-lg p-4 w-80">
          <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Spatial Audio Settings</span>
          </h3>

          {/* Enable/Disable */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
                className="rounded"
              />
              <span>Enable 3D Audio</span>
            </label>
          </div>

          {/* Volume Control */}
          <div className="mb-4">
            <label className="block text-sm text-slate-300 mb-2">Volume: {volume}%</label>
            <Slider
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          {/* Room Size */}
          <div className="mb-4">
            <label className="block text-sm text-slate-300 mb-2">Room Size</label>
            <select
              value={roomSize}
              onChange={(e) => setRoomSize(e.target.value as any)}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Environment */}
          <div className="mb-4">
            <label className="block text-sm text-slate-300 mb-2">Environment</label>
            <select
              value={environment}
              onChange={(e) => setEnvironment(e.target.value as any)}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm"
            >
              <option value="office">Office</option>
              <option value="bunker">Bunker</option>
              <option value="server_room">Server Room</option>
              <option value="command_center">Command Center</option>
            </select>
          </div>

          {/* Status */}
          <div className="text-xs text-slate-400">Status: {isInitialized ? "Initialized" : "Loading..."}</div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        {enabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>
    </div>
  )
}
