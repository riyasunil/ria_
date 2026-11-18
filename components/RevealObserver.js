"use client";
import { useEffect } from "react";

// Content is fully visible in the server HTML (<html class="no-js">). Only once
// this script is running do we drop `no-js` and let `.reveal` elements start
// hidden, so a JS failure never blanks the page.
//
// Reveals play in both directions: an element hides again once it's fully off
// screen, remembering which edge it left by, and comes back in from that edge.
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const els = [...document.querySelectorAll(".reveal")];

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      root.classList.remove("no-js");
      return;
    }

    // Anything already on screen is shown before hiding kicks in (no flicker).
    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > vh * 0.08) el.classList.add("is-in");
    }
    root.classList.remove("no-js");

    // Show once an element is a little way inside the viewport, from either edge.
    const enter = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-in");
        }
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0 }
    );

    // Hide only once it's completely out of view, with a buffer so nothing
    // visibly disappears.
    const exit = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) continue;
          const el = e.target;
          el.dataset.from = e.boundingClientRect.top < 0 ? "top" : "bottom";
          el.classList.remove("is-in");
        }
      },
      { rootMargin: "15% 0px 15% 0px", threshold: 0 }
    );

    els.forEach((el) => {
      enter.observe(el);
      exit.observe(el);
    });
    return () => {
      enter.disconnect();
      exit.disconnect();
    };
  }, []);
  return null;
}
