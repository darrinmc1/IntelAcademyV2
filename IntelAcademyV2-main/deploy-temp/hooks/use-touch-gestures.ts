"use client"

import type React from "react"

import { useState, useCallback } from "react"

interface TouchPosition {
  x: number
  y: number
}

interface SwipeDirection {
  horizontal: "left" | "right" | null
  vertical: "up" | "down" | null
}

interface UseTouchGesturesOptions {
  threshold?: number
  onSwipe?: (direction: SwipeDirection) => void
  onPinch?: (scale: number) => void
  onRotate?: (angle: number) => void
}

export function useTouchGestures({ threshold = 50, onSwipe, onPinch, onRotate }: UseTouchGesturesOptions = {}) {
  const [touchStart, setTouchStart] = useState<TouchPosition | null>(null)
  const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null)
  const [pinchDistance, setPinchDistance] = useState<number | null>(null)
  const [rotation, setRotation] = useState<number | null>(null)

  // Calculate distance between two touch points
  const getDistance = (touches: React.TouchList): number => {
    if (touches.length < 2) return 0

    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  // Calculate rotation angle between two touch points
  const getRotation = (touches: React.TouchList): number => {
    if (touches.length < 2) return 0

    return (
      (Math.atan2(touches[1].clientY - touches[0].clientY, touches[1].clientX - touches[0].clientX) * 180) / Math.PI
    )
  }

  // Handle touch start
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single touch - track for swipe
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      })
      setTouchEnd(null)
    } else if (e.touches.length === 2) {
      // Two touches - track for pinch/zoom and rotation
      setPinchDistance(getDistance(e.touches))
      setRotation(getRotation(e.touches))
    }
  }, [])

  // Handle touch move
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 1) {
        // Track single touch movement
        setTouchEnd({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        })
      } else if (e.touches.length === 2 && pinchDistance !== null && rotation !== null) {
        // Track pinch/zoom
        const currentDistance = getDistance(e.touches)
        const scale = currentDistance / pinchDistance

        if (onPinch) {
          onPinch(scale)
        }

        // Track rotation
        const currentRotation = getRotation(e.touches)
        const angle = currentRotation - rotation

        if (onRotate) {
          onRotate(angle)
        }
      }
    },
    [pinchDistance, rotation, onPinch, onRotate],
  )

  // Handle touch end
  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return

    // Calculate swipe distance
    const horizontalDistance = touchEnd.x - touchStart.x
    const verticalDistance = touchEnd.y - touchStart.y

    // Determine swipe direction if threshold is met
    const direction: SwipeDirection = {
      horizontal: null,
      vertical: null,
    }

    if (Math.abs(horizontalDistance) > threshold) {
      direction.horizontal = horizontalDistance > 0 ? "right" : "left"
    }

    if (Math.abs(verticalDistance) > threshold) {
      direction.vertical = verticalDistance > 0 ? "down" : "up"
    }

    // Call onSwipe if a direction was detected
    if ((direction.horizontal || direction.vertical) && onSwipe) {
      onSwipe(direction)
    }

    // Reset touch positions
    setTouchStart(null)
    setTouchEnd(null)
    setPinchDistance(null)
    setRotation(null)
  }, [touchStart, touchEnd, threshold, onSwipe])

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}
