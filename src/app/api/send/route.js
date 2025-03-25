import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const copyEmail = process.env.COPY_EMAIL;

if (!resend || !fromEmail || !copyEmail) {
  throw new Error("Missing required environment variables");
}

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [email], // Only send to original sender
      bcc: [copyEmail], // BCC the copy to maintain privacy
      subject: "Thank you for your message!", // Fixed subject line
      react: (
        <div className="font-sans max-w-2xl mx-auto p-6 bg-white rounded-lg">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-gray-500 text-sm">Automated Confirmation</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <p className="text-gray-700 text-lg mb-4">
              Hi there,{" "}
              <span className="font-semibold">thank you for reaching out!</span>{" "}
              👋✨
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is an automated confirmation that your message has been
              received. I'll review it and respond within 24 hours.
            </p>

            {/* Message Preview */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Your Sent Message
              </h3>
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {message}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            <div className="mb-3">
              <p className="font-medium text-gray-700">Best regards,</p>
              <p className="text-blue-600">Daxil Vala</p>
            </div>
            <div className="text-xs space-y-1">
              <p className="text-gray-400">
                This email is an automated confirmation. Please do not reply
                directly to this message as it is not monitored.
              </p>
            </div>
          </div>
        </div>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
