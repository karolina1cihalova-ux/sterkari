"use client";

import { FormEvent, useState } from "react";
import { kontakt } from "@/content/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function Kontakt() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      preferredDate: String(data.get("preferredDate") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-20 bg-warm py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">{kontakt.title}</h2>
          <p className="mt-3 text-neutral-600">{kontakt.subtitle}</p>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6">
            <h3 className="font-bold text-charcoal">{kontakt.showroomTitle}</h3>
            <p className="mt-2 whitespace-pre-line text-sm text-neutral-600">
              {kontakt.showroomAddress}
            </p>
            <div className="grain mt-4 aspect-video w-full rounded-lg bg-neutral-200" aria-hidden />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal">
              {kontakt.form.name}
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal">
              {kontakt.form.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
              {kontakt.form.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal">
              {kontakt.form.preferredDate}
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-charcoal">
              {kontakt.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full rounded-full bg-charcoal py-3 text-sm font-semibold text-white uppercase tracking-wide hover:opacity-90 disabled:opacity-60"
          >
            {state === "submitting" ? "Odesílám…" : kontakt.form.submit}
          </button>
          {state === "success" && (
            <p className="text-sm font-medium text-green-700" role="status">
              {kontakt.form.success}
            </p>
          )}
          {state === "error" && (
            <p className="text-sm font-medium text-red-700" role="alert">
              {kontakt.form.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
