"use client";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-[17px] text-ink placeholder:text-muted transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent-soft";

export default function ContactForm() {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  // After a successful send, return the button to normal so another message can go.
  useEffect(() => {
    if (status !== "sent") return;
    const t = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(t);
  }, [status]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        {
          from_name: data.get("name"),
          from_email: data.get("email"),
          message: data.get("message"),
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY }
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[15px] font-medium">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-[15px] font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={field}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-[15px] font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="What's on your mind?"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`inline-flex min-h-[48px] min-w-[10.5rem] items-center justify-center gap-2 rounded-full px-6 font-medium text-bg transition-[transform,opacity,background-color] duration-300 hover:opacity-90 active:scale-[0.96] disabled:opacity-60 ${
            status === "sent" ? "bg-live" : "bg-accent"
          }`}
        >
          {status === "sent" ? (
            <>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                <path
                  d="M4 10.5l4 4 8-9"
                  className="check-draw"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sent
            </>
          ) : status === "sending" ? (
            "Sending…"
          ) : (
            "Send message"
          )}
        </button>
        <p role="status" aria-live="polite" className="text-[15px]">
          {status === "sent" && (
            <span className="text-live">Message sent. I'll get back to you soon.</span>
          )}
          {status === "error" && (
            <span className="text-ink">
              That didn't go through. Try again, or email me at{" "}
              <a className="text-accent underline underline-offset-4" href="mailto:riyasunil2025@gmail.com">
                riyasunil2025@gmail.com
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
