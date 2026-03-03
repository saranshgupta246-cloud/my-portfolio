export type ProofStatus = "draft" | "published";

export type Metric = {
  id: string;
  label: string;
  value: string;
  context?: string;
  status: ProofStatus;
  featured?: boolean;
};

export type GithubHighlight = {
  id: string;
  repo: string;
  description: string;
  url: string;
  status: ProofStatus;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  status: ProofStatus;
  featured?: boolean;
};

export type PublishedProof = {
  metrics: readonly Metric[];
  github: readonly GithubHighlight[];
  testimonials: readonly Testimonial[];
};

const metrics: readonly Metric[] = [
  {
    id: "m-1",
    label: "Projects Delivered",
    value: "18+",
    context: "Web products and experiments",
    status: "published",
    featured: true,
  },
  {
    id: "m-2",
    label: "Avg. Lighthouse",
    value: "95+",
    context: "Across recent builds",
    status: "published",
  },
  {
    id: "m-3",
    label: "Response Time",
    value: "<24h",
    context: "Client communication",
    status: "published",
  },
  {
    id: "m-4",
    label: "Open Source PRs",
    value: "30+",
    context: "Community contribution",
    status: "draft",
  },
] as const;

const github: readonly GithubHighlight[] = [
  {
    id: "g-1",
    repo: "portfolio-starter",
    description:
      "Reusable portfolio architecture with data-driven sections.",
    url: "https://github.com/",
    status: "published",
    featured: true,
  },
  {
    id: "g-2",
    repo: "motion-lab",
    description:
      "UI motion experiments focused on performance and accessibility.",
    url: "https://github.com/",
    status: "published",
  },
  {
    id: "g-3",
    repo: "chat-guardrails",
    description: "API chat patterns with validation and safe prompting.",
    url: "https://github.com/",
    status: "draft",
  },
] as const;

const testimonials: readonly Testimonial[] = [
  {
    id: "t-1",
    name: "Product Lead",
    role: "SaaS Startup",
    quote:
      "Clear execution, fast iteration, and excellent communication.",
    status: "published",
    featured: true,
  },
  {
    id: "t-2",
    name: "Founder",
    role: "Agency Client",
    quote: "Turned vague ideas into a polished product with strong UX.",
    status: "published",
  },
  {
    id: "t-3",
    name: "Engineering Manager",
    role: "Contract Team",
    quote: "Reliable delivery and thoughtful technical decisions.",
    status: "draft",
  },
] as const;

export function getPublishedProof(): PublishedProof {
  return {
    metrics: metrics.filter((item) => item.status === "published"),
    github: github.filter((item) => item.status === "published"),
    testimonials: testimonials.filter((item) => item.status === "published"),
  };
}
