import { useEffect } from "react";

// Content stays visible without animation support or JavaScript motion setup.
export default function useSignalMotion(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !window.IntersectionObserver || !Element.prototype.animate) return;

    const animations = new Set();
    let observer;
    const groups = [
      ".home__copy > *", ".home__portrait-card", ".home__focus-item",
      ".section-heading", ".skills-group", ".experience-item",
      ".background-card", ".contact-det", ".form-con",
    ];
    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          const siblings = Array.from(target.parentElement.children);
          const delay = Math.min(siblings.indexOf(target), 4) * 75;
          const animation = target.animate([
            { opacity: 0, transform: "translateY(24px) scale(0.985)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ], { duration: 700, delay, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          target.classList.add("signal-arrived");
          if (target.classList.contains("skills-group")) {
            target.querySelectorAll(".skill-tile").forEach((tile, index) => {
              const tileAnimation = tile.animate([
                { opacity: 0, transform: "translateY(10px) scale(0.94)" },
                { opacity: 1, transform: "translateY(0) scale(1)" },
              ], { duration: 550, delay: delay + 140 + index * 55,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
              animations.add(tileAnimation);
              tileAnimation.onfinish = () => animations.delete(tileAnimation);
            });
          }
        });
      }, { threshold: 0.12 });
      root.querySelectorAll(groups.join(",")).forEach((node) => observer.observe(node));
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, [rootRef]);
}
