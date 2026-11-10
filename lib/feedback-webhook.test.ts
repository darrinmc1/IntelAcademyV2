import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  DEFAULT_FEEDBACK_WEBHOOK_URL,
  notifyFeedbackWebhook,
} from './feedback-webhook'

describe('notifyFeedbackWebhook', () => {
  const originalEnv = process.env.FEEDBACK_WEBHOOK_URL
  const originalSecret = process.env.KD7_WEBHOOK_SECRET

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    if (originalEnv === undefined) {
      delete process.env.FEEDBACK_WEBHOOK_URL
    } else {
      process.env.FEEDBACK_WEBHOOK_URL = originalEnv
    }
    if (originalSecret === undefined) {
      delete process.env.KD7_WEBHOOK_SECRET
    } else {
      process.env.KD7_WEBHOOK_SECRET = originalSecret
    }
  })

  it('GETs the default creator-run URL', () => {
    delete process.env.FEEDBACK_WEBHOOK_URL
    delete process.env.KD7_WEBHOOK_SECRET
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    notifyFeedbackWebhook()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe(DEFAULT_FEEDBACK_WEBHOOK_URL)
    expect(init).toMatchObject({ method: 'GET', cache: 'no-store' })
    expect(init.headers['X-KD7-Secret']).toBeUndefined()
    expect(warn.mock.calls.flat().join(' ')).toBe(
      'KD7_WEBHOOK_SECRET is unset; calling feedback webhook without X-KD7-Secret'
    )
  })

  it('uses FEEDBACK_WEBHOOK_URL when set', () => {
    process.env.FEEDBACK_WEBHOOK_URL = 'https://example.test/feedback-hook'
    delete process.env.KD7_WEBHOOK_SECRET
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)
    vi.spyOn(console, 'warn').mockImplementation(() => {})

    notifyFeedbackWebhook()

    expect(fetchMock).toHaveBeenCalledWith(
      'https://example.test/feedback-hook',
      expect.objectContaining({ method: 'GET' })
    )
  })

  it('sends X-KD7-Secret from the server env var', () => {
    delete process.env.FEEDBACK_WEBHOOK_URL
    process.env.KD7_WEBHOOK_SECRET = 'test-shared-secret'
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    notifyFeedbackWebhook()

    const [, init] = fetchMock.mock.calls[0]
    expect(init.headers).toMatchObject({
      Accept: 'application/json',
      'X-KD7-Secret': 'test-shared-secret',
    })
    expect(warn).not.toHaveBeenCalled()
  })

  it('still calls the webhook without the header when the secret is missing', () => {
    delete process.env.FEEDBACK_WEBHOOK_URL
    process.env.KD7_WEBHOOK_SECRET = '   '
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok'))
    vi.stubGlobal('fetch', fetchMock)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    expect(() => notifyFeedbackWebhook()).not.toThrow()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [, init] = fetchMock.mock.calls[0]
    expect(init.method).toBe('GET')
    expect(init.headers['X-KD7-Secret']).toBeUndefined()
    expect(warn).toHaveBeenCalledTimes(1)
    const warning = warn.mock.calls.flat().join(' ')
    expect(warning).toContain('KD7_WEBHOOK_SECRET')
    expect(warning).not.toContain('test-shared-secret')
    expect(warning.trim()).toBe(
      'KD7_WEBHOOK_SECRET is unset; calling feedback webhook without X-KD7-Secret'
    )
  })

  it('does not throw when fetch rejects', async () => {
    delete process.env.FEEDBACK_WEBHOOK_URL
    delete process.env.KD7_WEBHOOK_SECRET
    const fetchMock = vi.fn().mockRejectedValue(new Error('network down'))
    vi.stubGlobal('fetch', fetchMock)
    vi.spyOn(console, 'warn').mockImplementation(() => {})
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
