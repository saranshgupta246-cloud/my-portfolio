import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type WorkProps = {
  projects: readonly Project[];
};

export function Work({ projects }: WorkProps) {
  if (projects.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="work-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        Work
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
