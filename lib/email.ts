import { Resend } from 'resend';

export const sendTopicRequestEmail = async (
  email: string,
  topic: string,
  description: string
) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Missing RESEND_API_KEY environment variable');
    throw new Error('Email service not configured');
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1e3a5f;color:white;padding:20px;border-radius:8px 8px 0 0">
        <h2 style="margin:0">New Topic Request — Intel Analyst Academy</h2>
      </div>
      <div style="background:#f9f9f9;padding:20px;border:1px solid #ddd;border-top:none;border-radius:0 0 8px 8px">
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Details:</strong> ${description || '(none provided)'}</p>
      </div>
    </div>`;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@TheIntelAnalystAcademy.com.au',
      replyTo: email,
      subject: `New Topic Request: ${topic}`,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};