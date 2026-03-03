import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
            {project.description}
          </p>
        </div>

        {project.year ? (
          <span className="shrink-0 text-xs text-[var(--color-text-secondary)]">
            {project.year}
          </span>
        ) : null}
      </header>

      <div className="mt-4 space-y-2">
        {project.outcome ? (
          <p className="text-sm text-[var(--color-text-primary)]">
            <span className="text-[var(--color-accent-mint)]">Outcome:</span>{" "}
            {project.outcome}
          </p>
        ) : null}
        {project.learned && project.learned.length > 0 ? (
          <p className="text-sm text-[var(--color-text-primary)]">
            <span className="text-[var(--color-accent-orange)]">Learned:</span>{" "}
            {project.learned.join(", ")}
          </p>
        ) : null}
      </div>

      {project.tags && project.tags.length > 0 ? (
        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--color-surface)] px-2 py-1 text-xs text-[var(--color-text-secondary)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-5 inline-flex rounded-md border border-[var(--color-accent-mint)] px-3 py-1.5 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-base)]"
          aria-label={`Open project ${project.title}`}
        >
          View Project
        </a>
      ) : null}
    </article>
  );
}
