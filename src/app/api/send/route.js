import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <div className="font-sans max-w-2xl mx-auto p-6 bg-white">
          {/* Header */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{subject}</h1>
          </div>

          {/* Greeting */}
          <div className="mb-6">
            <p className="text-gray-700 mb-4">Hello,</p>
            <p className="text-gray-700">
              Thank you for reaching out! I&apos;ve received your message and
              will get back to you as soon as possible.
            </p>
          </div>

          {/* Message Content */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Your Message:
            </h2>
            <p className="text-gray-600 whitespace-pre-line">{message}</p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
            <p>Best regards,</p>
            <p>Your Name</p>
            <p className="mt-2">
              This is an automated message. Please do not reply directly to this
              email.
            </p>
          </div>
        </div>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
