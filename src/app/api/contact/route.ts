import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const { fullName, email, subject, message } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name is required and must be at least 2 characters.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "A valid email address is required.",
        },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          error: "Subject is required and must be at least 3 characters.",
        },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is required and must be at least 10 characters.",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "medjahdi.abdeldjalil08@gmail.com";
    const senderEmail =
      process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    // If Resend is NOT configured, be completely transparent as required:
    // "If email service credentials have not been configured, clearly explain what needs to be configured rather than pretending the form is working."
    if (!resendApiKey) {
      console.warn(
        "[VENOM DEV Contact Form] Notice: RESEND_API_KEY is not defined in environment variables. Simulated submission log:",
        {
          from: `${fullName} <${email}>`,
          to: receiverEmail,
          subject: `[VENOM DEV Inquiry] ${subject}`,
          timestamp: new Date().toISOString(),
          messageContent: message,
        }
      );

      return NextResponse.json(
        {
          success: false,
          configured: false,
          error:
            "Email service is not yet configured. Please set RESEND_API_KEY in your .env.local file to enable direct email delivery to " +
            receiverEmail +
            ". In the meantime, you can reach out directly via Telegram (@venom_ff31) or mailto link.",
        },
        { status: 503 }
      );
    }

    // Attempt real dispatch using Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `VENOM DEV Contact <${senderEmail}>`,
        to: [receiverEmail],
        reply_to: email,
        subject: `[VENOM DEV Portfolio] ${subject} - from ${fullName}`,
        html: `
          <div style="background-color: #050505; color: #FFFFFF; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; border-radius: 12px; border: 1px solid #9B7CFF;">
            <div style="margin-bottom: 24px;">
              <h2 style="color: #9B7CFF; margin: 0 0 6px 0; font-size: 22px;">New Client Inquiry — VENOM DEV</h2>
              <p style="color: #38CFFF; margin: 0; font-size: 14px;">Received from portfolio website</p>
            </div>
            <div style="background-color: #111116; padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Sender Name:</strong> ${escapeHtml(fullName)}</p>
              <p style="margin: 0 0 10px 0;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #38CFFF;">${escapeHtml(email)}</a></p>
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
              <p style="margin: 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="background-color: #161622; padding: 20px; border-radius: 8px; border-left: 4px solid #38CFFF;">
              <h4 style="margin: 0 0 10px 0; color: #A7A7B5; font-size: 14px; text-transform: uppercase;">Message Content:</h4>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #FFFFFF;">${escapeHtml(message)}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #A7A7B5;">
              VENOM DEV — BUILD. AUTOMATE. INNOVATE.
            </div>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("[VENOM DEV Resend Error]:", errorData);
      return NextResponse.json(
        {
          success: false,
          error:
            errorData.message ||
            "Failed to send email via Resend delivery service.",
        },
        { status: 502 }
      );
    }

    const data = await resendResponse.json();

    return NextResponse.json({
      success: true,
      message: "Message delivered successfully! Abdeldjalil will get back to you soon.",
      data,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("[VENOM DEV Contact Route Error]:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
