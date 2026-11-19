import { useEffect } from "react";

export default function useCardLight(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    const enabled = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!root) return;
    let frame = 0;
    let active;
    const clear = () => {
      cancelAnimationFrame(frame);
      active?.classList.remove("card-light-active");
      active = null;
    };
    const move = (event) => {
      if (!enabled.matches || event.pointerType === "touch") return;
      const card = event.target.closest(".skills-group, .background-card, .experience-item, .home__portrait-stage");
      if (card !== active) {
        clear();
        active = card;
      }
      if (!card) return;
      cancelAnimationFrame(frame);
      const { clientX, clientY } = event;
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--light-x", `${clientX - rect.left}px`);
        card.style.setProperty("--light-y", `${clientY - rect.top}px`);
        card.classList.add("card-light-active");
      });
    };
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", clear);
    // Reset stale coordinates if the page scrolls beneath a stationary pointer.
    window.addEventListener("scroll", clear, { passive: true });
    enabled.addEventListener("change", clear);
    return () => {
      clear();
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", clear);
      window.removeEventListener("scroll", clear);
      enabled.removeEventListener("change", clear);
    };
  }, [rootRef]);
}
