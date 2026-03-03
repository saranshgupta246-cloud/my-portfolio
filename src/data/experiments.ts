export type ExperimentStatus = "draft" | "published";

export type Experiment = {
  id: string;
  title: string;
  summary: string;
  tech: readonly string[];
  link?: string;
  status: ExperimentStatus;
  featured?: boolean;
};

export const experiments: readonly Experiment[] = [
  {
    id: "exp-animated-cards",
    title: "Animated Card Playground",
    summary:
      "Explored hover tilt, glow edges, and layered motion for portfolio cards.",
    tech: ["Framer Motion", "CSS Variables", "Next.js"],
    link: "#",
    status: "published",
    featured: true,
  },
  {
    id: "exp-terminal-ui",
    title: "Terminal UI Micro-interactions",
    summary:
      "Built terminal-style UI with keyboard-friendly interactions and subtle effects.",
    tech: ["React", "Tailwind", "TypeScript"],
    status: "published",
  },
  {
    id: "exp-webgl-bg",
    title: "WebGL Background Study",
    summary:
      "Prototype for high-fidelity background visuals with adaptive performance.",
    tech: ["WebGL", "Shaders"],
    status: "draft",
  },
] as const;

export function getPublishedExperiments(): readonly Experiment[] {
  return experiments.filter((item) => item.status === "published");
}
