import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const inboxEmail = process.env.COPY_EMAIL;

  if (!apiKey || !fromEmail || !inboxEmail) {
    console.error("Contact form is missing RESEND_API_KEY, FROM_EMAIL or COPY_EMAIL");
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Bots tend to fill every field; quietly accept and drop the submission.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 320);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Name, a valid email and a message are required" }, { status: 400 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [inboxEmail],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend rejected contact email:", error);
      return NextResponse.json({ error: "Could not send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
