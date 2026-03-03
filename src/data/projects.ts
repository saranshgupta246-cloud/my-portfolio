export type ProjectStatus = "draft" | "published";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  outcome?: string;
  learned?: string[];
  status: ProjectStatus;
  featured?: boolean;
  url?: string;
  year?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Design System",
    slug: "design-system",
    description: "Component library and design tokens for product teams.",
    outcome: "Adopted across 3 products; 40% faster UI iteration.",
    learned: ["Token-driven theming", "Accessibility audits"],
    status: "published",
    featured: true,
    url: "https://example.com",
    year: "2024",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    title: "Dashboard Redesign",
    slug: "dashboard-redesign",
    description: "Analytics dashboard with real-time charts and filters.",
    outcome: "Reduced time-to-insight by 50%.",
    learned: ["Data viz performance", "Progressive disclosure"],
    status: "published",
    featured: false,
    year: "2023",
    tags: ["Next.js", "D3"],
  },
  {
    id: "3",
    title: "WIP Experiment",
    slug: "wip-experiment",
    description: "Work in progress; not ready for prime time.",
    status: "draft",
    featured: false,
  },
];

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.status === "published");
}
