"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-lg p-8 shadow-2xl"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
              />
              <span className="text-slate-700 font-medium">Loading...</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
