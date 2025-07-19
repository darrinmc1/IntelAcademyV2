"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  fps: number
  memoryUsage: number
  renderTime: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") {
      return
    }

    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measurePerformance = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))

        // Safely check for memory API
        let memoryUsage = 0
        try {
          // @ts-ignore - performance.memory is available in Chrome
          if (performance.memory) {
            // @ts-ignore
            memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024
          }
        } catch (error) {
          // Memory API not available
        }

        setMetrics({
          fps,
          memoryUsage: Math.round(memoryUsage),
          renderTime: Math.round(currentTime - lastTime),
        })

        frameCount = 0
        lastTime = currentTime
      }

      animationId = requestAnimationFrame(measurePerformance)
    }

    animationId = requestAnimationFrame(measurePerformance)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Show/hide with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setIsVisible(!isVisible)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isVisible])

  if (!isVisible || process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-sm font-mono z-50">
      <div className="space-y-1">
        <div>
          FPS: <span className={metrics.fps < 30 ? "text-red-400" : "text-green-400"}>{metrics.fps}</span>
        </div>
        {metrics.memoryUsage > 0 && (
          <div>
            Memory:{" "}
            <span className={metrics.memoryUsage > 100 ? "text-red-400" : "text-green-400"}>
              {metrics.memoryUsage}MB
            </span>
          </div>
        )}
        <div>Render: {metrics.renderTime}ms</div>
      </div>
      <div className="text-xs text-gray-400 mt-2">Ctrl+Shift+P to toggle</div>
    </div>
  )
}
