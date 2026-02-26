import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strips characters that could be used for email header injection */
function sanitizeField(value: string): string {
  return value.replace(/[\r\n]/g, '').trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, topic, description } = body;

    if (!email || !topic) {
      return NextResponse.json(
        { error: 'Email and topic are required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (topic.length > 200) {
      return NextResponse.json(
        { error: 'Topic must be 200 characters or fewer' },
        { status: 400 }
      );
    }

    const safeEmail = sanitizeField(email);
    const safeTopic = sanitizeField(topic);
    const safeDescription = sanitizeField(description || '');

    const { sendTopicRequestEmail } = await import('@/lib/email');
    await sendTopicRequestEmail(safeEmail, safeTopic, safeDescription);

    return NextResponse.json({ message: 'Topic request sent successfully' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 }
    );
  }
}
