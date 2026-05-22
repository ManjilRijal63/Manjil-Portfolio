"use client";

import { useState } from "react";

export default function FeedbackPage() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {

      const response = await fetch("/api/feedback", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          message,
        }),
      });

      if (response.ok) {
        alert("Feedback submitted!");

        setName("");
        setMessage("");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">

      <h1 className="mb-12 text-center text-5xl font-bold">
        Feedback
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-white/10 bg-slate-900 p-8"
      >

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 outline-none"
        />

        <textarea
          placeholder="Your feedback"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 outline-none"
        />

        <button
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold"
        >
          Submit Feedback
        </button>

      </form>

    </main>
  );
}