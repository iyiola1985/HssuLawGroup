import { Resend } from "resend";
import { NextResponse } from "next/server";
import { FIRM_CONTACT_EMAIL } from "@/lib/contact";

const MAX = { name: 200, email: 320, message: 8000 } as const;

function sanitize(str: unknown, max: number): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const honeypot = sanitize(o._honeypot, 50);
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(o.name, MAX.name);
  const email = sanitize(o.email, MAX.email);
  const message = sanitize(o.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete all fields." },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Please use the email address shown on this page.",
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? FIRM_CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    `Angela Hssu Law Website <onboarding@resend.dev>`;

  const resend = new Resend(apiKey);
  const subject = `Website enquiry from ${name}`;

  const text = [
    `Name: ${name}`,
    `Reply-to: ${email}`,
    "",
    message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
