'use server'

import { createClient } from '@supabase/supabase-js'
import {
  VALID_FEEDBACK_TYPES,
  feedbackTypeForCategory,
  forceFeedbackIntent,
  normalizeFeedbackCategory,
  type FeedbackCategory,
  type FeedbackType,
} from '@/lib/submission-intent'

export type FeedbackResult = { ok: boolean; message: string; id?: string }

// Create Supabase client with service role (server-side only)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)

type FeedbackRow = {
  category: FeedbackCategory
  rating: number | null
  message: string
  page: string | null
  email: string | null
  ip_address: string | null
  page_url: string | null
  page_title: string | null
  feedback_type: FeedbackType
  status: 'new'
  intent: 'feedback'
}

/**
 * Submit feedback to the feedback queue ONLY.
 *
 * HARD RULE: this action must never insert into `topic_requests`, never call
 * generate-coming-soon scripts, and never treat Suggestion / Content Request
 * as a new lesson topic. Client-supplied intent/channel is ignored.
 */
export async function submitFeedbackAction(args: {
  category: string
  rating?: number
  message: string
  page?: string
  email?: string
  ip?: string
  page_url?: string
  page_title?: string
  feedback_type?: FeedbackType
  // Accepted so older clients can send them; always discarded.
  intent?: string
  channel?: string
  topic_title?: string
}): Promise<FeedbackResult> {
  const { intent } = forceFeedbackIntent()

  const category = normalizeFeedbackCategory(args.category)
  if (!category) {
    return { ok: false, message: 'Invalid feedback category' }
  }

  if (args.feedback_type && !VALID_FEEDBACK_TYPES.includes(args.feedback_type)) {
    return { ok: false, message: 'Invalid feedback type' }
  }

  if (!args.message?.trim()) {
    return { ok: false, message: 'Feedback message is required' }
  }

  if (args.rating && (args.rating < 1 || args.rating > 5)) {
    return { ok: false, message: 'Rating must be between 1 and 5' }
  }

  const row: FeedbackRow = {
    category,
    rating: args.rating || null,
    message: args.message.trim(),
    page: args.page || null,
    email: args.email?.trim() || null,
    ip_address: args.ip || null,
    page_url: args.page_url || null,
    page_title: args.page_title || null,
    feedback_type: args.feedback_type || feedbackTypeForCategory(category),
    status: 'new',
    intent,
  }

  try {
    const inserted = await insertFeedbackRow(row)
    if (!inserted.ok) {
      return { ok: false, message: inserted.message }
    }

    return {
      ok: true,
      message: 'Thank you for your feedback. We appreciate your input!',
      id: inserted.id,
    }
  } catch (error) {
    console.error('submitFeedbackAction error:', error)
    return { ok: false, message: 'Failed to submit feedback. Please try again.' }
  }
}

async function insertFeedbackRow(
  row: FeedbackRow
): Promise<{ ok: true; id?: string } | { ok: false; message: string }> {
  const { data, error } = await supabase.from('feedback').insert([row]).select()

  if (!error) {
    return { ok: true, id: data?.[0]?.id }
  }

  // Older Supabase schemas may not have `intent` yet. Retry without it so
  // feedback still lands in the queue instead of failing open into topics.
  const missingIntentColumn =
    /intent/i.test(error.message || '') && /column/i.test(error.message || '')
  if (missingIntentColumn) {
    const { intent: _intent, ...withoutIntent } = row
    const retry = await supabase.from('feedback').insert([withoutIntent]).select()
    if (!retry.error) {
      return { ok: true, id: retry.data?.[0]?.id }
    }
    console.error('Supabase insert error (retry):', retry.error)
    return { ok: false, message: 'Failed to submit feedback. Please try again.' }
  }

  console.error('Supabase insert error:', error)
  return { ok: false, message: 'Failed to submit feedback. Please try again.' }
}
