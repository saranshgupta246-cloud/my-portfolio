import type { ContactCopy, ContactMethod } from "@/data/contact";

type ContactProps = {
  copy: ContactCopy;
  methods: readonly ContactMethod[];
};

export function Contact({ copy, methods }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="contact-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        {copy.heading}
      </h2>

      <p className="mt-3 text-base text-[var(--color-text-secondary)]">
        {copy.subheading}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
          <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
            {copy.methodsHeading}
          </h3>

          <ul className="mt-4 space-y-3">
            {methods.map((method) => (
              <li key={method.id} className="text-sm">
                <span className="mr-2 text-[var(--color-text-secondary)]">
                  {method.label}:
                </span>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring rounded text-[var(--color-text-primary)] hover:text-[var(--color-accent-mint)]"
                  aria-label={`Open ${method.label}`}
                >
                  {method.value}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
          <p className="text-sm text-[var(--color-accent-mint)]">
            {copy.availability}
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
            {copy.closingLine}
          </p>

          <a
            href={copy.primaryCtaHref}
            className="focus-ring mt-5 inline-flex rounded-md border border-[var(--color-accent-orange)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-base)]"
          >
            {copy.primaryCtaLabel}
          </a>
        </article>
      </div>
    </section>
  );
}

