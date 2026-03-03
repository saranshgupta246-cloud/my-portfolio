import type { PublishedProof } from "@/data/proof";

type ProofProps = {
  proof: PublishedProof;
};

export function Proof({ proof }: ProofProps) {
  const hasContent =
    proof.metrics.length > 0 ||
    proof.github.length > 0 ||
    proof.testimonials.length > 0;

  if (!hasContent) return null;

  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="proof-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        Proof
      </h2>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
          <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
            Metrics
          </h3>
          <ul className="mt-4 space-y-3">
            {proof.metrics.map((item) => (
              <li key={item.id}>
                <p className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {item.value}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {item.label}
                </p>
                {item.context ? (
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {item.context}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
          <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
            GitHub Highlights
          </h3>
          <ul className="mt-4 space-y-3">
            {proof.github.map((item) => (
              <li key={item.id}>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {item.repo}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-2 inline-flex rounded-md border border-[var(--color-accent-mint)] px-2.5 py-1 text-xs text-[var(--color-text-primary)] hover:bg-[var(--color-base)]"
                  aria-label={`Open repository ${item.repo}`}
                >
                  Open Repo
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
          <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
            Testimonials
          </h3>
          <ul className="mt-4 space-y-4">
            {proof.testimonials.map((item) => (
              <li key={item.id}>
                <blockquote className="text-sm leading-6 text-[var(--color-text-primary)]">
                  &quot;{item.quote}&quot;
                </blockquote>
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                  {item.name} • {item.role}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
