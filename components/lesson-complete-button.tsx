'use client'

import { useState } from 'react'
import { CheckCircle2, Target } from 'lucide-react'
import { useUser } from '@/components/user-provider'
import { toast } from 'sonner'

interface LessonCompleteButtonProps {
  slug: string
  lessonTitle?: string
}

export function LessonCompleteButton({
  slug,
  lessonTitle,
}: LessonCompleteButtonProps) {
  const { profile, markLessonCompleted, isLoaded } = useUser()
  const [justCompleted, setJustCompleted] = useState(false)

  if (!isLoaded) {
    return <div className="bg-white/5 animate-pulse rounded-xl h-16 w-full" />
  }

  const isCompleted = profile?.lessonsCompleted.includes(slug)

  const handleComplete = async () => {
    await markLessonCompleted(slug)
    setJustCompleted(true)
    // XP gain toast
    toast.success('+100 XP earned!', {
      description: 'Another mission accomplished, Agent.',
    })
    setTimeout(() => setJustCompleted(false), 3000)
  }

  if (isCompleted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          <div>
            <p className="text-emerald-300 font-semibold">Mission Accomplished</p>
            <p className="text-emerald-400/70 text-sm">
              Lesson complete — nice work, Agent!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={handleComplete}
      className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3 ${
        justCompleted
          ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950'
          : ''
      }`}
    >
      <Target className="w-5 h-5" />
      <span>Mark as Complete — Mission Accomplished</span>
    </button>
  )
}
