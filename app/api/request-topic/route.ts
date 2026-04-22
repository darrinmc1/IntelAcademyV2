import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, topic, description } = await request.json();

    if (!email || !topic) {
      return NextResponse.json(
        { error: 'Email and topic are required' },
        { status: 400 }
      );
    }

    const { sendTopicRequestEmail } = await import('@/lib/email');
    await sendTopicRequestEmail(email, topic, description || '');

    return NextResponse.json({ message: 'Topic request sent successfully' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 }
    );
  }
}
