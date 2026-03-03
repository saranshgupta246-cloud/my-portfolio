import type { Experiment } from "@/data/experiments";

type ExperimentsProps = {
  experiments: readonly Experiment[];
};

export function Experiments({ experiments }: ExperimentsProps) {
  if (experiments.length === 0) return null;

  return (
    <section
      id="experiments"
      aria-labelledby="experiments-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="experiments-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        Experiments
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {experiments.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5"
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
              {item.summary}
            </p>

            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label={`${item.title} technologies`}
            >
              {item.tech.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[var(--color-surface)] px-2 py-1 text-xs text-[var(--color-text-secondary)]"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {item.link ? (
              <a
                href={item.link}
                className="focus-ring mt-5 inline-flex rounded-md border border-[var(--color-accent-orange)] px-3 py-1.5 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-base)]"
                aria-label={`Open experiment ${item.title}`}
              >
                Open Experiment
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
