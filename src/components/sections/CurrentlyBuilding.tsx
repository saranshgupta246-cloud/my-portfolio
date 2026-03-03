import type { BuildItem } from "@/data/currentlyBuilding";

type CurrentlyBuildingProps = {
  items: readonly BuildItem[];
};

export function CurrentlyBuilding({ items }: CurrentlyBuildingProps) {
  if (items.length === 0) return null;

  return (
    <section
      id="currently-building"
      aria-labelledby="currently-building-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="currently-building-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        Currently Building
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <span className="rounded-full border border-[var(--color-surface)] px-2 py-0.5 text-xs text-[var(--color-accent-mint)]">
                {item.progress}
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
              {item.summary}
            </p>

            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label={`${item.title} stack`}
            >
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--color-surface)] px-2 py-1 text-xs text-[var(--color-text-secondary)]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {item.link ? (
              <a
                href={item.link}
                className="focus-ring mt-5 inline-flex rounded-md border border-[var(--color-accent-orange)] px-3 py-1.5 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-base)]"
                aria-label={`Open details for ${item.title}`}
              >
                View Details
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
