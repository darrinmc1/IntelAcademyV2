// lib/email.ts - Resend transactional send
// Install: npm i resend
//
// Usage:
//   import { sendWelcome, sendAdminNotification } from "@/lib/email";
//   await sendWelcome({ email, name });

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM ?? "noreply@example.com";
const REPLY_TO = process.env.RESEND_REPLY_TO ?? undefined;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Our site";
const NOTIFY = process.env.NOTIFY_EMAIL; // e.g. darrinmc1@yahoo.com

const resend = apiKey ? new Resend(apiKey) : null;

type SendResult = { ok: true } | { ok: false; reason: string };

async function send(
  to: string | string[],
  subject: string,
  html: string
): Promise<SendResult> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set - skipping send", { to, subject });
    return { ok: false, reason: "resend_not_configured" };
  }
  if (FROM === "noreply@example.com") {
    console.warn(
      "[email] RESEND_FROM not set - using placeholder that Resend will reject. Set RESEND_FROM to a verified sender.",
      { to, subject }
    );
  }
  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    replyTo: REPLY_TO,
  });
  if (error) {
    console.error("[email] send failed", { to, subject, from: FROM, error });
    return { ok: false, reason: error.name ?? "send_error" };
  }
  console.log("[email] sent", { to, subject, id: data?.id });
  return { ok: true };
}

export async function sendWelcome(args: { email: string; name?: string }) {
  const subject = `Welcome to ${SITE_NAME}`;
  const greeting = args.name ? `Hi ${args.name},` : "Hi there,";
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #2E4A7C;">Welcome to ${SITE_NAME}</h2>
      <p>${greeting}</p>
      <p>Thanks for signing up. You'll be the first to know about new modules, updates, and early-access features.</p>
      <p>If this wasn't you, just ignore this email and you won't hear from us again.</p>
      <p style="margin-top: 32px; color: #888; font-size: 14px;">- The ${SITE_NAME} team</p>
    </div>
  `;
  return send(args.email, subject, html);
}

export async function sendAdminNotification(args: {
  kind: "subscribe" | "feedback";
  payload: Record<string, unknown>;
}) {
  if (!NOTIFY) {
    console.warn("[email] NOTIFY_EMAIL not set - skipping admin notification", {
      kind: args.kind,
    });
    return { ok: false as const, reason: "notify_email_not_set" };
  }
  const subject =
    args.kind === "subscribe"
      ? `[${SITE_NAME}] New subscriber`
      : `[${SITE_NAME}] New feedback`;
  const rows = Object.entries(args.payload)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px;color:#666;">${k}</td><td style="padding:4px 12px;"><code>${String(v)}</code></td></tr>`
    )
    .join("");
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px;">
      <h3 style="color:#2E4A7C;">${subject}</h3>
      <table style="border-collapse:collapse;">${rows}</table>
    </div>
  `;
  return send(NOTIFY, subject, html);
}

export async function sendTopicRequestEmail(
  email: string,
  topic: string,
  description: string
) {
  if (!NOTIFY) {
    console.warn("[email] NOTIFY_EMAIL not set - skipping topic request email");
    return { ok: false as const, reason: "notify_email_not_set" };
  }
  const subject = "[" + SITE_NAME + "] New Topic Request: " + topic;
  const html = "<h3>" + subject + "</h3><p>From: " + email + "</p><p>Topic: " + topic + "</p><p>" + description + "</p>";
  return send(NOTIFY, subject, html);
}

// ---------------------------------------------------------------------------
// Content review workflow notifications
// ---------------------------------------------------------------------------

function shell(title: string, body: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color:#2E4A7C;">${title}</h2>
      ${body}
      <p style="margin-top:32px;color:#888;font-size:14px;">- ${SITE_NAME}</p>
    </div>
  `;
}

/** Sent to the admin/reviewer inbox when an editor submits content. */
export async function sendReviewSubmitted(args: {
  contentTitle: string;
  editorName: string;
  submissionId: string;
}) {
  if (!NOTIFY) {
    console.warn("[email] NOTIFY_EMAIL not set - skipping review-submitted email");
    return { ok: false as const, reason: "notify_email_not_set" };
  }
  const subject = `[${SITE_NAME}] Review needed: ${args.contentTitle}`;
  const html = shell(
    "New content awaiting review",
    `<p><strong>${args.editorName}</strong> submitted "<strong>${args.contentTitle}</strong>" for review.</p>
     <p>Open the reviews dashboard to approve or reject it.</p>`
  );
  return send(NOTIFY, subject, html);
}

/** Sent to the editor when their content is approved and published. */
export async function sendReviewApproved(args: {
  to: string;
  contentTitle: string;
  reviewerName: string;
  comments?: string;
}) {
  const subject = `[${SITE_NAME}] Approved: ${args.contentTitle}`;
  const note = args.comments
    ? `<p style="color:#444;">Reviewer note: ${args.comments}</p>`
    : "";
  const html = shell(
    "Your content is live ✅",
    `<p>"<strong>${args.contentTitle}</strong>" was approved by ${args.reviewerName} and is now published.</p>${note}`
  );
  return send(args.to, subject, html);
}

/** Sent to the editor when their content is rejected. */
export async function sendReviewRejected(args: {
  to: string;
  contentTitle: string;
  reviewerName: string;
  feedback: string;
}) {
  const subject = `[${SITE_NAME}] Changes requested: ${args.contentTitle}`;
  const html = shell(
    "Changes requested",
    `<p>"<strong>${args.contentTitle}</strong>" was reviewed by ${args.reviewerName} and needs revisions before it can go live.</p>
     <p style="background:#f6f6f6;border-left:3px solid #2E4A7C;padding:12px;"><strong>Feedback:</strong><br/>${args.feedback}</p>
     <p>Edit and resubmit when ready.</p>`
  );
  return send(args.to, subject, html);
}

/** Sent to a user who requested a 4-digit PIN reset. Link expires in 1 hour. */
export async function sendPinResetEmail(
  email: string,
  codename: string,
  resetUrl: string
) {
  const subject = `Reset your ${SITE_NAME} PIN`;
  const html = shell(
    "PIN reset requested",
    `<p>Agent <strong>${codename}</strong>,</p>
     <p>Click below to set a new 4-digit PIN. This link expires in 1 hour.</p>
     <p style="text-align:center;margin:28px 0;">
       <a href="${resetUrl}" style="background:#2E4A7C;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:bold;display:inline-block;">Reset your PIN</a>
     </p>
     <p style="font-size:12px;color:#666;">Or paste this link into your browser:<br/>${resetUrl}</p>
     <p style="font-size:12px;color:#666;">If you didn't request this, ignore this email — your PIN won't change.</p>`
  );
  return send(email, subject, html);
}
