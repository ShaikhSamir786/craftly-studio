import nodemailer from "nodemailer";
import { getUserEmailTemplate } from "@/emails/user-template";
import { getAdminEmailTemplate } from "@/emails/admin-template";
import { config } from "@/config/config";

const { smtpHost, smtpPort, smtpUser, smtpPass, contactEmail } = config.mailConfig;

const createTransporter = () => {
  // If SMTP environment variables are missing, fallback to logging
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP environment variables are missing. Emails will not be sent, only logged to console.");
    return null;
  }
  
  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // True for port 465, false for 587 or other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

export async function sendContactEmails(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  const transporter = createTransporter();
  
  const adminHtml = getAdminEmailTemplate(data);
  const userHtml = getUserEmailTemplate(data.name, data.message);
  
  const adminText = `
New Project Inquiry from ${data.name}
  
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}

Message:
${data.message}
  `.trim();

  const userText = `
Hi ${data.name},

Thank you for reaching out to Craftly Studio.

We've received your inquiry and appreciate you taking the time to contact us.

Our team will review your project requirements and get back to you within 24 hours.

Here's a copy of your message:
-------------------------------------
${data.message}
-------------------------------------

If your request is urgent, feel free to reply directly to this email.

Best regards,
Craftly Studio Team
  `.trim();

  if (!transporter) {
    console.log("=== MOCK EMAIL SERVICE (SMTP_HOST / USER / PASS missing) ===");
    console.log(`[Admin Notification] Sending to: ${contactEmail}`);
    console.log(`Subject: New Project Inquiry from ${data.name}`);
    console.log(`Body:\n${adminText}`);
    console.log("-----------------------------------------");
    console.log(`[User Auto-Reply] Sending to: ${data.email}`);
    console.log(`Subject: Thank you for reaching out to Craftly Studio 🚀`);
    console.log(`Body:\n${userText}`);
    console.log("===========================================================");
    return { success: false, error: "SMTP settings not configured" };
  }

  try {
    // 1. Send admin notification
    await transporter.sendMail({
      from: `"Craftly Studio Contact" <${smtpUser}>`,
      to: contactEmail,
      subject: `New Project Inquiry from ${data.name}`,
      text: adminText,
      html: adminHtml,
      replyTo: data.email, // Allows admin to click "Reply" to respond directly to the user
    });

    // 2. Send user auto-reply
    await transporter.sendMail({
      from: `"Craftly Studio" <${smtpUser}>`,
      to: data.email,
      subject: `Thank you for reaching out to Craftly Studio 🚀`,
      text: userText,
      html: userHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Nodemailer error: Failed to send emails", error);
    throw error;
  }
}
