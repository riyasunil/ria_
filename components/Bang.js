"use client";
import { useRef } from "react";

// The "!" in the greeting: tilts once on load, wiggles again when tapped.
export default function Bang() {
  const ref = useRef(null);
  const wiggle = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("again");
    void el.offsetWidth; // restart the animation
    el.classList.add("again");
  };
  return (
    <em ref={ref} onPointerDown={wiggle} className="bang text-accent">
      !
    </em>
  );
}
