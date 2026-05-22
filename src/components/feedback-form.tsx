"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {

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

        location.reload();
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-16 space-y-6 rounded-2xl border border-white/10 bg-slate-900 p-8"
    >

      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 outline-none"
      />

      <Textarea
        placeholder="Your feedback"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 outline-none"
      />

      <Button>Submit Feedback</Button>
       
      

    </form>
  );
}