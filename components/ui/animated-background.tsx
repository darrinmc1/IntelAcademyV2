"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        setMounted(true)
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        setReducedMotion(mq.matches)
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    if (!mounted) return null

    // Static fallback for users who prefer reduced motion
    if (reducedMotion) {
        return (
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]" />
                <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-600/20 blur-[150px]" />
                <div className="absolute -bottom-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-600/15 blur-[100px]" />
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
            {/* Deep Cyber Mesh Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Animated Glowing Orbs */}
            <motion.div
                className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"
                animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-600/20 blur-[150px]"
                animate={{ x: [0, -70, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
                className="absolute -bottom-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-600/15 blur-[100px]"
                animate={{ x: [0, 100, 0], y: [0, -20, 0], scale: [1, 1.5, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            />
        </div>
    )
}
