import type { Me } from "@/data/me";
import { HeroRoleSwitcher } from "./HeroRoleSwitcher";

type HeroProps = {
  me: Me;
};

export function Hero({ me }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24"
    >
      <p className="text-sm tracking-[0.2em] text-[var(--color-text-secondary)]">
        {me.name}
      </p>

      <h1
        id="hero-heading"
        className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-6xl"
      >
        {me.headline}
      </h1>

      <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
        <HeroRoleSwitcher roles={me.roles} />
      </p>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
        {me.bio}
      </p>

      <a
        href={`mailto:${me.email}`}
        className="focus-ring mt-8 inline-flex rounded-md border border-[var(--color-accent-mint)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
      >
        {me.email}
      </a>
    </section>
  );
}
