"use client";

import { FormEvent, useState } from "react";
import { chatConfig } from "@/data/chat";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  async function sendMessage(raw: string) {
    const text = raw.trim();
    if (!text || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = (await res.json()) as { reply?: string };
      const reply = data.reply?.trim() || chatConfig.errorFallback;

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: chatConfig.errorFallback },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <>
      <button
        type="button"
        aria-label={chatConfig.openLabel}
        onClick={() => setIsOpen((prev) => !prev)}
        className="focus-ring fixed bottom-4 right-4 z-50 rounded-full border border-[var(--color-accent-mint)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-text-primary)] shadow-lg sm:bottom-6 sm:right-6"
      >
        {chatConfig.title}
      </button>

      {isOpen ? (
        <section
          aria-label={chatConfig.title}
          className="fixed inset-x-3 bottom-20 z-50 flex h-[70vh] max-h-[36rem] flex-col overflow-hidden rounded-xl border border-[var(--color-surface)] bg-[var(--color-base)]/95 backdrop-blur sm:inset-x-auto sm:right-6 sm:w-[min(92vw,24rem)]"
        >
          <header className="flex items-center justify-between border-b border-[var(--color-surface)] px-4 py-3">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
              {chatConfig.title}
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={chatConfig.closeLabel}
              className="focus-ring rounded px-2 py-1 text-xs text-[var(--color-text-secondary)]"
            >
              {chatConfig.closeLabel}
            </button>
          </header>

          <div className="border-b border-[var(--color-surface)] px-3 py-3">
            <p className="text-xs text-[var(--color-text-secondary)]">
              {chatConfig.welcome}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {chatConfig.suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => void sendMessage(prompt)}
                  className="focus-ring rounded-full border border-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text-primary)]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.length === 0 ? (
              <p className="text-sm text-[var(--color-text-secondary)]">
                {chatConfig.welcome}
              </p>
            ) : (
              messages.map((message, index) => (
                <article
                  key={`${message.role}-${index}`}
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    message.role === "user"
                      ? "ml-4 border-[var(--color-accent-mint)] text-[var(--color-text-primary)] sm:ml-8"
                      : "mr-4 border-[var(--color-surface)] text-[var(--color-text-secondary)] sm:mr-8"
                  }`}
                >
                  <p className="mb-1 text-[10px] uppercase tracking-[0.1em]">
                    {message.role === "user"
                      ? chatConfig.userLabel
                      : chatConfig.assistantName}
                  </p>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </article>
              ))
            )}
            {isLoading ? (
              <p className="text-xs text-[var(--color-text-secondary)]">
                {chatConfig.thinkingLabel}
              </p>
            ) : null}
          </div>

          <form onSubmit={onSubmit} className="border-t border-[var(--color-surface)] p-3">
            <label htmlFor="chat-input" className="sr-only">
              Message
            </label>
            <div className="flex gap-2">
              <input
                id="chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={chatConfig.placeholder}
                className="w-full rounded-md border border-[var(--color-surface)] bg-transparent px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="focus-ring rounded-md border border-[var(--color-accent-orange)] px-3 py-2 text-sm text-[var(--color-text-primary)] disabled:opacity-60"
              >
                {chatConfig.sendLabel}
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </>
  );
}

