type TerminalBoxProps = {
  lines: readonly string[];
  title?: string;
};

export function TerminalBox({ lines, title = "terminal" }: TerminalBoxProps) {
  if (lines.length === 0) return null;

  return (
    <section
      aria-label={title}
      className="overflow-hidden rounded-xl border border-[var(--color-surface)] bg-[var(--color-surface)]/70"
    >
      <header className="flex items-center gap-2 border-b border-[var(--color-surface)] px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-orange)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-mint)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-secondary)]/60" />
        <p className="ml-2 text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
          {title}
        </p>
      </header>

      <pre className="overflow-x-auto px-4 py-4 text-sm leading-6 text-[var(--color-text-primary)]">
        <code>
          {lines.map((line, idx) => (
            <span key={`${line}-${idx}`} className="block">
              {line}
            </span>
          ))}
        </code>
      </pre>
    </section>
  );
}
