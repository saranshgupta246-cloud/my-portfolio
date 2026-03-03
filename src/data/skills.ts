export type SkillStatus = "draft" | "published";

export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  status: SkillStatus;
  featured?: boolean;
}

export const skills: Skill[] = [
  {
    id: "1",
    name: "React",
    category: "Frontend",
    level: "expert",
    status: "published",
    featured: true,
  },
  {
    id: "2",
    name: "TypeScript",
    category: "Language",
    level: "advanced",
    status: "published",
    featured: true,
  },
  {
    id: "3",
    name: "Accessibility",
    category: "Practices",
    level: "advanced",
    status: "published",
    featured: false,
  },
  {
    id: "4",
    name: "Design Systems",
    category: "Practices",
    level: "intermediate",
    status: "published",
    featured: false,
  },
  {
    id: "5",
    name: "Rust",
    category: "Language",
    level: "beginner",
    status: "draft",
    featured: false,
  },
];

export function getPublishedSkills(): Skill[] {
  return skills.filter((s) => s.status === "published");
}
