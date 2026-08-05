'use server'

import { createClient } from '@supabase/supabase-js'

export type FeedbackResult = { ok: boolean; message: string; id?: string }

const VALID_CATEGORIES = ['Bug', 'Suggestion', 'Content Request', 'Other']
const VALID_FEEDBACK_TYPES = ['bug', 'suggestion', 'feature_request', 'content_request', 'general']

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

/**
 * Submit feedback to Supabase with page-specific context.
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
  feedback_type?: 'bug' | 'suggestion' | 'feature_request' | 'content_request' | 'general'
}): Promise<FeedbackResult> {
  // Validate
  if (!args.category || !VALID_CATEGORIES.includes(args.category)) {
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

  try {
    // Insert into Supabase
    const { data, error } = await supabase
      .from('feedback')
      .insert([
        {
          category: args.category,
          rating: args.rating || null,
          message: args.message.trim(),
          page: args.page || null,
          email: args.email?.trim() || null,
          ip_address: args.ip || null,
          page_url: args.page_url || null,
          page_title: args.page_title || null,
          feedback_type: args.feedback_type || 'general',
          status: 'new',
        },
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return { ok: false, message: 'Failed to submit feedback. Please try again.' }
    }

    const feedbackId = data?.[0]?.id

    // TODO: Send admin notification email (use your existing sendAdminNotification)
    // For now, just return success
    // await sendAdminNotification({
    //   kind: 'feedback',
    //   payload: {
    //     category: args.category,
    //     rating: args.rating ? `${args.rating}/5` : ' - ',
    //     message: args.message,
    //     page: args.page || ' - ',
    //     email: args.email || ' - ',
    //     page_url: args.page_url || ' - ',
    //     page_title: args.page_title || ' - ',
    //     feedback_type: args.feedback_type || 'general',
    //   },
    // })

    return {
      ok: true,
      message: 'Thank you for your feedback. We appreciate your input!',
      id: feedbackId,
    }
  } catch (error) {
    console.error('submitFeedbackAction error:', error)
    return { ok: false, message: 'Failed to submit feedback. Please try again.' }
  }
}