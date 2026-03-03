"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroRoleSwitcherProps = {
  roles: readonly string[];
  intervalMs?: number;
};

export function HeroRoleSwitcher({
  roles,
  intervalMs = 2200,
}: HeroRoleSwitcherProps) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || roles.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, roles.length, shouldReduceMotion]);

  if (roles.length === 0) return null;

  if (shouldReduceMotion) {
    return (
      <span className="text-[var(--color-accent-mint)]">{roles[0]}</span>
    );
  }

  return (
    <span className="inline-block min-h-[1.5rem] text-[var(--color-accent-mint)]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
