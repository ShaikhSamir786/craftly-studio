export function getUserEmailTemplate(name: string, message: string): string {
  // Escape message HTML to avoid XSS injections in email client
  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Craftly Studio</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f9fafb;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    .header {
      background-color: #ffffff;
      padding: 32px 32px 20px 32px;
      border-bottom: 1px solid #f3f4f6;
      text-align: center;
    }
    .logo {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      text-decoration: none;
      letter-spacing: -0.025em;
    }
    .logo-accent {
      color: #ff6b3d;
    }
    .content {
      padding: 32px;
    }
    h1 {
      font-size: 22px;
      font-weight: 700;
      color: #0f172a;
      margin-top: 0;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: #4b5563;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .badge {
      display: inline-block;
      background-color: rgba(255, 107, 61, 0.1);
      color: #ff6b3d;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 20px;
      margin-bottom: 24px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .message-copy {
      background-color: #f3f4f6;
      border-left: 4px solid #ff6b3d;
      border-radius: 8px;
      padding: 20px;
      margin: 24px 0;
      font-style: italic;
      color: #374151;
      font-size: 15px;
      line-height: 22px;
    }
    .cta-container {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #f3f4f6;
      text-align: center;
    }
    .footer {
      background-color: #f9fafb;
      padding: 24px 32px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer-text {
      font-size: 14px;
      color: #9ca3af;
      margin: 0 0 12px 0;
      line-height: 20px;
    }
    .social-links {
      margin-bottom: 16px;
    }
    .social-link {
      display: inline-block;
      margin: 0 8px;
      color: #ff6b3d;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }
    .social-link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="logo">
          Craftly<span class="logo-accent">Studio</span>
        </div>
      </div>
      <div class="content">
        <div class="badge">Inquiry Received</div>
        <h1>Hi ${name},</h1>
        <p>Thank you for reaching out to Craftly Studio. We appreciate you taking the time to contact us.</p>
        <p>Our team is currently reviewing your project requirements. We make it a priority to get back to you with detailed feedback or scheduling options within <strong>24 hours</strong>.</p>
        
        <p>Here is a copy of your message for your records:</p>
        <div class="message-copy">
          ${escapedMessage}
        </div>
        
        <p>If your request is urgent or you want to share more materials, feel free to reply directly to this email.</p>
        
        <div class="cta-container">
          <p style="margin-bottom: 0; font-size: 15px; font-weight: 600; color: #0f172a;">Best regards,</p>
          <p style="margin-top: 4px; margin-bottom: 0; font-size: 15px; color: #ff6b3d; font-weight: 700;">Craftly Studio Team</p>
        </div>
      </div>
      <div class="footer">
        <div class="social-links">
          <a href="https://craftlystudio.com" class="social-link">Website</a>
          <a href="mailto:hello@craftlystudio.com" class="social-link">Email Us</a>
        </div>
        <p class="footer-text">Building modern websites & digital experiences.</p>
        <p class="footer-text" style="font-size: 12px; margin-bottom: 0;">&copy; ${new Date().getFullYear()} Craftly Studio. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
