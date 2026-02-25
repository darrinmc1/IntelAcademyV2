import { Resend } from 'resend';

export const sendTopicRequestEmail = async (email: string, topic: string, description: string) => {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    throw new Error("Email service not configured");
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@TheIntelAnalystAcademy.com.au', // Replace with your email address
      subject: 'New Topic Request',
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Topic:</strong> ${topic}</p><p><strong>Description:</strong> ${description}</p>`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};