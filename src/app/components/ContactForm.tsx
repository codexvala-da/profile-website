"use client";

import { useState } from "react";
import { Check, LoaderCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fg placeholder:text-subtle outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
      </label>
      {/* Honeypot: hidden from people, often filled in by bots. */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {status === "sending" && <LoaderCircle className="size-4 animate-spin" />}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-ok">
              <Check className="size-4" /> Thanks, I&apos;ll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-600 dark:text-red-400">
              Something went wrong. Please email me directly instead.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
