"use client";

import { useEffect, useState } from "react";
import ResumeLink from "./ResumeLink";

const links = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight whichever section is crossing the upper part of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[46rem] items-center justify-between px-6">
        <a
          href="#"
          aria-label="Back to top"
          className="flex size-8 items-center justify-center rounded-lg bg-fg font-serif text-[15px] text-bg transition-opacity hover:opacity-85"
        >
          DV
        </a>
        <nav aria-label="Sections" className="flex items-center gap-4 text-sm sm:gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`relative transition-colors hover:text-fg ${
                active === link.id ? "text-fg" : "text-muted"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-opacity ${
                  active === link.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
          <ResumeLink className="hidden rounded-full border border-line bg-surface px-3.5 py-1 transition-colors hover:border-fg sm:inline-block">
            Resume
          </ResumeLink>
        </nav>
      </div>
    </header>
  );
}
