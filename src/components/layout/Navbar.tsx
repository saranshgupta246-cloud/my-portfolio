"use client";

import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/5 bg-base/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="focus-ring rounded font-medium text-text-primary"
          aria-label="Go to home"
        >
          Portfolio
        </Link>

        <ul className="hidden items-center gap-6 md:flex" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="focus-ring rounded text-sm text-text-secondary transition-colors hover:text-text-primary"
                aria-label={`Go to ${label} section`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="focus-ring rounded-md border border-[var(--color-surface)] px-3 py-1 text-xs text-text-primary md:hidden"
          aria-label="Go to contact section"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

