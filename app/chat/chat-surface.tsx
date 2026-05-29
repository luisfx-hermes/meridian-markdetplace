"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const starterMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I am the Meridian AI commerce assistant. Ask me to compare vendors, draft a product listing, or build a launch checklist.",
  },
  {
    id: 2,
    role: "user",
    text: "Help me launch a premium marketplace for local makers.",
  },
  {
    id: 3,
    role: "assistant",
    text: "Start with three high-trust categories, invite 20 vetted vendors, publish a concierge onboarding flow, and use curated collections to create the first shopper journey.",
  },
];

const suggestions = [
  "Draft a vendor onboarding email",
  "Create a launch checklist",
  "Write a marketplace hero section",
  "Suggest trust signals for sellers",
];

function createAssistantReply(prompt: string) {
  return `Here is a Meridian-ready starting point for “${prompt}”: define the customer promise, pick one primary vendor segment, add proof points, and turn the next step into a clear call to action.`;
}

export function ChatSurface() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState("");

  const nextId = useMemo(
    () => messages.reduce((max, message) => Math.max(max, message.id), 0) + 1,
    [messages],
  );

  function sendMessage(text: string) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: nextId, role: "user", text: trimmed },
      { id: nextId + 1, role: "assistant", text: createAssistantReply(trimmed) },
    ]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#09090b] text-zinc-50">
      <header className="border-b border-zinc-800 bg-zinc-950/80 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-zinc-50 text-sm font-black text-zinc-950">
              M
            </span>
            <span>
              <span className="block text-sm font-semibold">Meridian AI</span>
              <span className="block text-xs text-zinc-500">Elements chat surface</span>
            </span>
          </Link>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Static demo
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-6 sm:px-6">
        <section className="mb-5 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black/30">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            AI SDK Elements inspired
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Chat with your marketplace copilot
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            This page is the public GitHub Pages chat surface. It mirrors the AI
            Elements chatbot layout with message bubbles, prompt suggestions,
            and a composer while staying static-export friendly.
          </p>
        </section>

        <section className="flex min-h-[620px] flex-1 flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div>
              <p className="font-semibold">Meridian Assistant</p>
              <p className="text-xs text-zinc-500">Commerce strategy chat</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="size-2 rounded-full bg-emerald-400" />
              Ready
            </div>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-4 py-6 sm:px-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-3xl px-5 py-4 text-sm leading-6 sm:max-w-[70%] ${
                    message.role === "user"
                      ? "bg-emerald-300 text-zinc-950"
                      : "border border-zinc-800 bg-zinc-900 text-zinc-100"
                  }`}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                    {message.role === "user" ? "You" : "Assistant"}
                  </p>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 bg-zinc-950 p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  className="shrink-0 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs text-zinc-300 transition hover:border-emerald-300/40 hover:text-emerald-100"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-3 rounded-3xl border border-zinc-800 bg-zinc-900 p-2"
            >
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Meridian AI about vendors, listings, launch plans..."
                rows={1}
                className="max-h-32 min-h-12 flex-1 resize-none bg-transparent px-3 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
              />
              <button
                type="submit"
                className="rounded-2xl bg-zinc-50 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-200"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
