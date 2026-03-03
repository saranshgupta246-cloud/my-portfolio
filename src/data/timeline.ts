export type TimelineStatus = "draft" | "published";

export type TimelineMilestone = {
  id: string;
  phase: string;
  period: string;
  summary: string;
  status: TimelineStatus;
  featured?: boolean;
};

export const timeline: readonly TimelineMilestone[] = [
  {
    id: "tl-1",
    phase: "Foundation",
    period: "2024 Q4",
    summary:
      "Set up a strong frontend base with Next.js, TypeScript, and reusable UI patterns.",
    status: "published",
    featured: true,
  },
  {
    id: "tl-2",
    phase: "Product Thinking",
    period: "2025 Q1",
    summary:
      "Shifted from just shipping UI to shipping user outcomes and measurable results.",
    status: "published",
  },
  {
    id: "tl-3",
    phase: "AI Integration",
    period: "2025 Q2",
    summary:
      "Started building AI-assisted features with safer prompts and structured data flows.",
    status: "published",
  },
  {
    id: "tl-4",
    phase: "Realtime Systems",
    period: "2025 Q3",
    summary:
      "Explored streaming interfaces and event-driven architecture for interactive apps.",
    status: "draft",
  },
] as const;

export function getPublishedTimeline(): readonly TimelineMilestone[] {
  return timeline.filter((item) => item.status === "published");
}
