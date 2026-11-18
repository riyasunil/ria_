"use client";
import { useEffect, useRef, useState } from "react";

export const sections = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

// Tracks the section nearest the top of the viewport. State only changes
// when the active section changes, not on every scroll event.
function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        const first = sections.find((s) => visible.get(s.id));
        if (first) setActive(first.id);
      },
      // A band across the upper middle of the screen.
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function SideNav() {
  const active = useActiveSection();
  return (
    <nav aria-label="Sections" className="mt-14">
      <ul className="space-y-1">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group flex min-h-[44px] items-center gap-4 font-display text-3xl transition-colors duration-300 xl:text-4xl ${
                  isActive ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-px w-8 origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? "scale-x-[1.75]" : "scale-x-100 group-hover:scale-x-125"
                  }`}
                />
                <span
                  className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// The tab underline is one element that glides between links. It's moved with
// translateX/scaleX against a 100px base width, so it never triggers layout.
function useIndicator(active, linkRefs) {
  const [box, setBox] = useState(null);
  useEffect(() => {
    const measure = () => {
      const el = linkRefs.current[active];
      if (!el) return;
      setBox({ x: el.offsetLeft + 10, w: el.offsetWidth - 20 });
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, linkRefs]);
  return box;
}

export function TopBar() {
  const active = useActiveSection();
  const linkRefs = useRef({});
  const box = useIndicator(active, linkRefs);
  const hasMoved = useRef(false);
  useEffect(() => {
    if (box) {
      const t = setTimeout(() => (hasMoved.current = true), 0);
      return () => clearTimeout(t);
    }
  }, [box]);

  return (
    <header className="topbar sticky top-0 z-30 border-b border-line lg:hidden">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4 sm:px-8">
        <a href="#about" className="flex min-h-[44px] items-center font-display text-2xl">
          ria
        </a>
        <nav aria-label="Sections" className="relative">
          <ul className="flex">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    ref={(el) => (linkRefs.current[s.id] = el)}
                    href={`#${s.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-h-[44px] items-center px-2.5 text-[15px] transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <span
            aria-hidden="true"
            className="tab-indicator absolute bottom-2 left-0 h-0.5 w-[100px] origin-left rounded-full bg-accent"
            style={{
              opacity: box ? 1 : 0,
              transform: box ? `translateX(${box.x}px) scaleX(${box.w / 100})` : undefined,
              transition: hasMoved.current
                ? "transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms"
                : "opacity 200ms",
            }}
          />
        </nav>
      </div>
      <span
        aria-hidden="true"
        className="read-progress absolute inset-x-0 -bottom-px h-0.5 bg-accent"
      />
    </header>
  );
}
