"use client";
import { Children, useEffect, useRef, useState } from "react";

// Phones: a native horizontal scroller that snaps card by card, with the next
// card peeking in, plus page dots. sm and up: a plain two-column grid.
export default function ProjectCarousel({ children, labels }) {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = [...list.children];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(items.indexOf(e.target));
        }
      },
      { root: list, threshold: 0.6 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i) => {
    const list = listRef.current;
    const item = list?.children[i];
    if (!item) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({
      left: item.offsetLeft - list.offsetLeft - 16,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="reveal">
      <ul
        ref={listRef}
        aria-label="Projects"
        className="carousel no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
      >
        {Children.map(children, (child) => (
          <li className="w-[84%] shrink-0 snap-start sm:w-auto">{child}</li>
        ))}
      </ul>

      <div className="mt-3 flex items-center justify-center sm:hidden" role="group" aria-label="Choose a project">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${labels?.[i] ?? `project ${i + 1}`}`}
            aria-current={active === i ? "true" : undefined}
            className="grid h-11 w-7 place-items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                active === i ? "w-5 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
