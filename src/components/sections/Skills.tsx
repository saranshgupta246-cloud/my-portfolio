import type { Skill } from "@/data/skills";

type SkillsProps = {
  skills: readonly Skill[];
};

export function Skills({ skills }: SkillsProps) {
  if (skills.length === 0) return null;

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(grouped);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="skills-heading"
        className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl"
      >
        Skills
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {categories.map(([category, categorySkills]) => (
          <article
            key={category}
            className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/60 p-5"
            aria-labelledby={`skills-${category}`}
          >
            <h3
              id={`skills-${category}`}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]"
            >
              {category}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <li
                  key={skill.id}
                  className="rounded-full border border-[var(--color-surface)] px-3 py-1 text-sm text-[var(--color-text-primary)]"
                >
                  {skill.name}
                  {skill.level ? (
                    <span className="ml-2 text-xs text-[var(--color-text-secondary)]">
                      ({skill.level})
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
