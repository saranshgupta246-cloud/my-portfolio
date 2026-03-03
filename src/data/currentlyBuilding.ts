export type BuildItemStatus = "draft" | "published";

export type BuildItem = {
  id: string;
  title: string;
  summary: string;
  progress: string;
  stack: readonly string[];
  link?: string;
  status: BuildItemStatus;
  featured?: boolean;
};

export const currentlyBuilding: readonly BuildItem[] = [
  {
    id: "cb-1",
    title: "AI Portfolio Assistant",
    summary:
      "Chat assistant that answers only from portfolio data with validation and rate limiting.",
    progress: "In Progress",
    stack: ["Next.js", "TypeScript", "Anthropic API", "Zod"],
    link: "#",
    status: "published",
    featured: true,
  },
  {
    id: "cb-2",
    title: "Motion Performance Pass",
    summary:
      "Improving animation smoothness and reduced-motion behavior across key sections.",
    progress: "Planned",
    stack: ["Framer Motion", "Web Vitals"],
    status: "published",
  },
  {
    id: "cb-3",
    title: "Case Study CMS",
    summary:
      "Content workflow for writing and publishing richer project case studies.",
    progress: "Backlog",
    stack: ["MDX", "Content Collections"],
    status: "draft",
  },
] as const;

export function getPublishedCurrentlyBuilding(): readonly BuildItem[] {
  return currentlyBuilding.filter((item) => item.status === "published");
}
