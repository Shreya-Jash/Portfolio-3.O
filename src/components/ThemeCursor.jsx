import { useEffect, useRef } from "react";
import "../styles/cursor.css";

export default function ThemeCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const root = document.documentElement;
    const allowed = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const hide = () => {
      cancelAnimationFrame(frame);
      root.classList.remove("theme-cursor-on");
      cursor.classList.remove("is-visible", "is-pressed", "is-interactive");
    };
    const move = (event) => {
      const target = event.target;
      if (!allowed.matches || event.pointerType !== "mouse" ||
        target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe, :disabled')) {
        hide();
        return;
      }
      cancelAnimationFrame(frame);
      const { clientX, clientY } = event;
      const interactive = !!target.closest('a, button, summary, label, [role="button"]');
      frame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        cursor.classList.toggle("is-interactive", interactive);
        cursor.classList.add("is-visible");
        root.classList.add("theme-cursor-on");
      });
    };
    const down = () => cursor.classList.add("is-pressed");
    const up = () => cursor.classList.remove("is-pressed");
    const keyboard = () => hide();
    const leave = (event) => { if (!event.relatedTarget) hide(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", keyboard);
    window.addEventListener("scroll", hide, { passive: true });
    document.addEventListener("pointerout", leave);
    allowed.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("scroll", hide);
      document.removeEventListener("pointerout", leave);
      allowed.removeEventListener("change", hide);
    };
  }, []);
  return <div className="theme-cursor" ref={cursorRef} aria-hidden="true">
    <span className="theme-cursor__circle" />
    <span className="theme-cursor__core" />
  </div>;
}
