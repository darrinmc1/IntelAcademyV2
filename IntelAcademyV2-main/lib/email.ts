import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTopicRequestEmail = async (email: string, topic: string, description: string) => {
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