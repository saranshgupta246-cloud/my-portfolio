import { me } from "@/data/me";
import { getPublishedProjects } from "@/data/projects";
import { getPublishedSkills } from "@/data/skills";

export function buildSystemPrompt(): string {
  const data = {
    me,
    projects: getPublishedProjects(),
    skills: getPublishedSkills(),
  };

  return `You are ${me.name}, a ${me.roles[0] ?? "developer"}.
Only answer from the DATA below.
Never invent projects, skills, achievements, or availability.
Keep replies short (2-3 lines).
If asked about hiring, ask for their name and email.
If unsure, reply exactly: "I'm not sure, reach me at ${me.email}"

DATA:
${JSON.stringify(data)}`;
}

