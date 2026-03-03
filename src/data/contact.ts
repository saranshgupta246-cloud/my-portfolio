import { me } from "@/data/me";

export type ContactMethodStatus = "draft" | "published";

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href: string;
  status: ContactMethodStatus;
  featured?: boolean;
};

export type ContactCopy = {
  heading: string;
  subheading: string;
  methodsHeading: string;
  availability: string;
  closingLine: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
};

export const contactCopy: ContactCopy = {
  heading: "Contact",
  subheading: "Let's build something valuable together.",
  methodsHeading: "Reach Me",
  availability: "Available for freelance and contract projects.",
  closingLine:
    "Tell me what you want to build. I'll reply quickly with a practical plan.",
  primaryCtaLabel: "Book a Call",
  primaryCtaHref: `mailto:${me.email}?subject=Project%20Inquiry`,
};

export const contactMethods: readonly ContactMethod[] = [
  {
    id: "cm-1",
    label: "Email",
    value: me.email,
    href: `mailto:${me.email}`,
    status: "published",
    featured: true,
  },
  {
    id: "cm-2",
    label: "GitHub",
    value: "github.com/your-handle",
    href: "https://github.com/",
    status: "published",
  },
  {
    id: "cm-3",
    label: "LinkedIn",
    value: "linkedin.com/in/your-handle",
    href: "https://www.linkedin.com/",
    status: "published",
  },
  {
    id: "cm-4",
    label: "X",
    value: "x.com/your-handle",
    href: "https://x.com/",
    status: "draft",
  },
] as const;

export function getPublishedContactMethods(): readonly ContactMethod[] {
  return contactMethods.filter((item) => item.status === "published");
}
