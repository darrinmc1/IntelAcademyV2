export const DEFAULT_FEEDBACK_WEBHOOK_URL =
  'https://n8n.peelboss.com/webhook/feedback-creator-run'

/**
 * Fire-and-forget kick for Empire — Feedback to GitHub Issue.
 * The webhook is GET today (same creator-run the daily cron sweeper hits).
 * Must never throw to the caller — failures are logged only.
 */
export function notifyFeedbackWebhook() {
  try {
    const webhookUrl =
      process.env.FEEDBACK_WEBHOOK_URL?.trim() || DEFAULT_FEEDBACK_WEBHOOK_URL
    if (!webhookUrl) return

    void fetch(webhookUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    }).catch((err) => {
      console.error('feedback webhook notify failed (non-fatal):', err)
    })
  } catch (err) {
    console.error('feedback webhook notify failed (non-fatal):', err)
  }
}
