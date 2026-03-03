import { me } from "@/data/me";

export type ChatConfig = {
  title: string;
  assistantName: string;
  welcome: string;
  placeholder: string;
  sendLabel: string;
  openLabel: string;
  closeLabel: string;
  thinkingLabel: string;
  userLabel: string;
  suggestedPrompts: readonly string[];
  errorFallback: string;
  leadCaptureLine: string;
};

export const chatConfig: ChatConfig = {
  title: "AI Assistant",
  assistantName: me.name,
  welcome: "Ask me about my projects, skills, or availability.",
  placeholder: "Type your question...",
  sendLabel: "Send",
  openLabel: "Open AI assistant",
  closeLabel: "Close AI assistant",
  thinkingLabel: "Thinking...",
  userLabel: "You",
  suggestedPrompts: [
    "What projects have you built?",
    "Are you available for hire?",
    "Show me your best work",
  ],
  errorFallback: `I'm not sure, reach me at ${me.email}`,
  leadCaptureLine: "If you'd like to hire me, share your name and email.",
};

