import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/5 bg-surface/50 py-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-text-secondary">
          © {currentYear} Portfolio. All rights reserved.
        </p>
        <nav aria-label="Footer links">
          <ul className="flex items-center gap-6" role="list">
            <li>
              <Link
                href="#contact"
                className="focus-ring rounded text-sm text-text-secondary transition-colors hover:text-text-primary"
                aria-label="Go to contact section"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
