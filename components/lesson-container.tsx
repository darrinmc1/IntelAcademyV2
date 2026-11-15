import type { ReactNode } from "react"
import { headers } from "next/headers"
import { AutoLessonComplete } from "@/components/auto-lesson-complete"
import { TopicWhereNext } from "@/components/topic-where-next"
import { DownloadLessonButton } from "@/components/download-lesson-button"
import { LessonVideoPlayer } from "@/components/lesson-video-player"
import { AccountGate } from "@/components/account-gate"
import { UsageTracker } from "@/components/usage-tracker"
import { getCurrentUser } from "@/lib/auth"
import { isAccountsGateEnabled } from "@/lib/accounts-gate"
import { lessonAccess } from "@/lib/content-access"
import { normalizeEntitlement } from "@/lib/entitlement"
import { topics } from "@/data/topics-catalog"

interface LessonContainerProps {
  children: ReactNode
  className?: string
}

function topicSlug(pathname: string): string | null {
  const match = pathname.match(/^\/topics\/([a-z0-9-]+)\/?$/)
  if (!match) return null
  const slug = match[1]
  const known = topics.some((topic) => topic.href === `/topics/${slug}`)
  return known ? slug : null
}

export async function LessonContainer({ children, className = "" }: LessonContainerProps) {
  const headerStore = await headers()
  const pathname = headerStore.get("x-pathname") || ""
  const slug = topicSlug(pathname)
  let gate: "need_account" | "coming_soon" | null = null

  if (slug && isAccountsGateEnabled()) {
    const user = await getCurrentUser()
    const decision = lessonAccess({
      slug,
      signedIn: !!user,
      entitlement: normalizeEntitlement(user?.entitlement, user?.plan),
      entitlementPath: user?.entitlementPath,
      role: user?.role,
    })
    if (decision !== "allow") gate = decision
  }

  return (
    <div className={`w-full mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 py-6 ${className}`}>
      <div className="flex justify-end mb-4">
        <DownloadLessonButton />
      </div>
      <LessonVideoPlayer />
      {gate ? (
        <AccountGate
          mode={gate}
          nextPath={pathname || `/topics/${slug}`}
          title={gate === "need_account" ? "Create a free account to read this lesson" : "This lesson is not in the free sample"}
        />
      ) : (
        <>
          {slug && isAccountsGateEnabled() ? <UsageTracker resource={pathname} /> : null}
          {children}
        </>
      )}
      <div className="mt-10 pt-8 border-t border-white/10">
        <AutoLessonComplete />
        <TopicWhereNext />
      </div>
    </div>
  )
}

export default LessonContainer
