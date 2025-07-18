import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resendApiKey = process.env.RESEND_API_KEY || '';
let resend: Resend | null = null;

if (resendApiKey) {
  try {
    resend = new Resend(resendApiKey);
  } catch (error) {
    console.error('Failed to initialize Resend:', error);
  }
}

export const sendTopicRequestEmail = async (email: string, topic: string, description: string) => {
  // If Resend is not initialized, log the request instead of sending
  if (!resend) {
    console.log('Email would be sent (API key missing):', {
      to: 'info@TheIntelAnalystAcademy.com.au',
      subject: 'New Topic Request',
      content: { email, topic, description }
    });
    return; // Return without error to allow the app to function
  }
  
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@TheIntelAnalystAcademy.com.au', // Replace with your email address
      subject: 'New Topic Request',
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Topic:</strong> ${topic}</p><p><strong>Description:</strong> ${description}</p>`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw error to prevent build failures
    console.log('Email request details:', { email, topic, description });
  }
};