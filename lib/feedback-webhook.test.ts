import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  DEFAULT_FEEDBACK_WEBHOOK_URL,
  notifyFeedbackWebhook,
} from './feedback-webhook'

describe('notifyFeedbackWebhook', () => {
  const originalEnv = process.env.FEEDBACK_WEBHOOK_URL

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    if (originalEnv === undefined) {
      delete process.env.FEEDBACK_WEBHOOK_URL
    } else {
      process.env.FEEDBACK_WEBHOOK_URL = originalEnv
    }
  })

  it('GETs the default creator-run URL', () => {
    delete process.env.FEEDBACK_WEBHOOK_URL
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)

    notifyFeedbackWebhook()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe(DEFAULT_FEEDBACK_WEBHOOK_URL)
    expect(init).toMatchObject({ method: 'GET', cache: 'no-store' })
  })

  it('uses FEEDBACK_WEBHOOK_URL when set', () => {
    process.env.FEEDBACK_WEBHOOK_URL = 'https://example.test/feedback-hook'
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)

    notifyFeedbackWebhook()

    expect(fetchMock).toHaveBeenCalledWith(
      'https://example.test/feedback-hook',
      expect.objectContaining({ method: 'GET' })
    )
  })

  it('does not throw when fetch rejects', async () => {
    delete process.env.FEEDBACK_WEBHOOK_URL
    const fetchMock = vi.fn().mockRejectedValue(new Error('network down'))
    vi.stubGlobal('fetch', fetchMock)
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => notifyFeedbackWebhook()).not.toThrow()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledWith(
        'feedback webhook notify failed (non-fatal):',
        expect.any(Error)
      )
    })
  })
})
