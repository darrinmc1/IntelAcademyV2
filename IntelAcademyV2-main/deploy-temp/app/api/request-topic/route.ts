import { sendTopicRequestEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, topic, description } = await request.json();
    await sendTopicRequestEmail(email, topic, description);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}