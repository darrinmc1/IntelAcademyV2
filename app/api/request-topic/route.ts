import { NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // Throttle: max 5 requests per IP per 10 minutes.
    const limit = rateLimit(`request-topic:${getClientIp(request)}`, 5, 10 * 60 * 1000);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: `Too many requests. Try again in ${limit.retryAfter}s.` },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
      );
    }

    const { email, topic, description } = await request.json();

    if (!email || !topic) {
      return NextResponse.json(
        { error: 'Email and topic are required' },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(String(email)) || String(email).length > 254) {
      return NextResponse.json({ error: 'Please provide a valid email' }, { status: 400 });
    }
    if (String(topic).length > 200 || String(description || '').length > 2000) {
      return NextResponse.json({ error: 'Your submission is too long' }, { status: 400 });
    }

    const { sendTopicRequestEmail } = await import('@/lib/email');
    await sendTopicRequestEmail(String(email), String(topic), String(description || ''));

    return NextResponse.json({ message: 'Topic request sent successfully' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 }
    );
  }
}
