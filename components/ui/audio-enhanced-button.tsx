"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useAudioCues } from "@/hooks/use-audio-cues"
import type { ReactNode, ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface AudioEnhancedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
  soundType?: "click" | "confirm" | "secure" | "nav"
}

export function AudioEnhancedButton({
  children,
  variant = "primary",
  size = "md",
  soundType = "click",
  className,
  onMouseEnter,
  onClick,
  ...props
}: AudioEnhancedButtonProps) {
  const { playSound } = useAudioCues({ volume: 0.1 })

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-slate-600 hover:bg-slate-700 text-white",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const soundMap = {
    click: "navClick",
    confirm: "confirmAction",
    secure: "secureAccess",
    nav: "navHover",
  } as const

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound("navHover")
    onMouseEnter?.(e)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound(soundMap[soundType])
    onClick?.(e)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      className={cn(
        "rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}
