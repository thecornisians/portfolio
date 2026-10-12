import { challengeSecret, verifyChallenge } from "../../lib/contactChallenge";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message, website, challengeToken, challengeAnswer } = req.body || {};

  const secret = challengeSecret();
  if (!secret) {
    return res.status(503).json({ error: "Verification is unavailable. Please reach out by email." });
  }
  if (website || !verifyChallenge(challengeToken, challengeAnswer, secret)) {
    return res.status(400).json({
      error: "Please enter the code from the verification image. If it has expired, try a new code.",
    });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  const apiKey = process.env.RESEND_KEYS || process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Missing RESEND_KEYS or RESEND_API_KEY in environment variables.");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <hello@corneliusowans.com>",
        to: ["thecornisians@gmail.com"],
        reply_to: email,
        subject: `[Portfolio Inquiry] ${subject || "New Message"} - from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #111; margin-top: 0;">New Message from Portfolio</h2>
            <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject || "No subject"}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap; color: #333; line-height: 1.6;">${message}</div>
            <p style="font-size: 12px; color: #888; margin-top: 24px;">This message was submitted via the contact form on your portfolio website.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error:", data);
      return res.status(response.status).json({
        error: data.message || "Failed to deliver email through Resend.",
      });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error("Contact API Server Error:", err);
    return res.status(500).json({ error: "Internal server error. Please try again later." });
  }
}
