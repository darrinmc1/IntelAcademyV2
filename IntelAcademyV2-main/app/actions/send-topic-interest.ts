"use server"

import { z } from "zod"

const interestSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  topic: z.string().min(2, "Topic must be at least 2 characters"),
  message: z.string().optional(),
})

type InterestFormData = z.infer<typeof interestSchema>

export async function sendTopicInterest(formData: InterestFormData) {
  const validatedData = interestSchema.parse(formData)

  const userId = process.env.EMAILJS_USER_ID
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID

  if (!userId || !serviceId || !templateId) {
    throw new Error("EmailJS configuration (User ID, Service ID, or Template ID) is missing")
  }

  // Simulate a delay for demonstration
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // Actual EmailJS sending logic
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: {
          email: validatedData.email,
          topic: validatedData.topic,
          message: validatedData.message || "No additional message provided",
          to_name: "Admin",
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("EmailJS error response:", errorText)
      throw new Error("Failed to send email via EmailJS")
    }

    console.log("Topic interest submitted and email sent:", validatedData)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email notification")
  }
}
