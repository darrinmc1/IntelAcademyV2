export const DEFAULT_FEEDBACK_WEBHOOK_URL =
  'https://n8n.peelboss.com/webhook/feedback-creator-run'

/**
 * Kick for Empire — Feedback to GitHub Issue.
 * The webhook is GET today (same creator-run the daily cron sweeper hits).
 * Awaited with a short timeout: on Vercel an un-awaited fetch can be cut off
 * when the function returns, so the kick would silently never arrive.
 * Must never throw to the caller — failures are logged only.
 */
export async function notifyFeedbackWebhook(): Promise<void> {
  try {
    const webhookUrl =
      process.env.FEEDBACK_WEBHOOK_URL?.trim() || DEFAULT_FEEDBACK_WEBHOOK_URL
    if (!webhookUrl) return

    await fetch(webhookUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: AbortSignal.timeout(4000),
    })
  } catch (err) {
    console.error('feedback webhook notify failed (non-fatal):', err)
  }
}
