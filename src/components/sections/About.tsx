import type { Me } from "@/data/me";
import { TerminalBox } from "@/components/ui/TerminalBox";

type AboutProps = {
  me: Me;
};

export function About({ me }: AboutProps) {
  const terminalLines = [
    `$ whoami`,
    me.name,
    `$ role`,
    me.roles.join(" | "),
    `$ contact`,
    me.email,
    ...(me.location ? ["$ location", me.location] : []),
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="about-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        About
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5">
          <p className="text-base leading-7 text-[var(--color-text-secondary)]">
            {me.bio}
          </p>
        </article>

        <TerminalBox lines={terminalLines} title="about.sh" />
      </div>
    </section>
  );
}
