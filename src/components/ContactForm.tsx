"use client";

import { useState, type FormEvent } from "react";
import { contactContent } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "Something went wrong sending your message. Please try again, or call us directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-accent-100 bg-accent-100/60 p-8">
        <h3 className="font-serif text-xl font-semibold text-navy-900">
          Thanks — your message has been sent.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
          We&apos;ll come back to you directly as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="text-sm text-charcoal/60">{contactContent.formNote}</p>

      {/* Honeypot field — hidden from real users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy-900"
        >
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 block w-full rounded-sm border border-neutral-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-900 focus:outline-none"
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-900"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 block w-full rounded-sm border border-neutral-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-900 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy-900"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 block w-full rounded-sm border border-neutral-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-900 focus:outline-none"
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-900"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 block w-full resize-none rounded-sm border border-neutral-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-900 focus:outline-none"
          placeholder="Tell us about your property and what you're looking for"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-sm bg-navy-900 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
