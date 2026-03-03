import type { TimelineMilestone } from "@/data/timeline";

type BuildTimelineProps = {
  items: readonly TimelineMilestone[];
};

export function BuildTimeline({ items }: BuildTimelineProps) {
  if (items.length === 0) return null;

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="timeline-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        Build Timeline
      </h2>

      <ol className="mt-8 space-y-6 border-l border-[var(--color-surface)] pl-6">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent-mint)]"
            />
            <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                {item.phase}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                {item.summary}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
