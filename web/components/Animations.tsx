"use client";

import { useEffect } from "react";

/**
 * Global scroll-driven effects, ported from the vanilla site:
 *  - reveal-on-scroll (adds `.show` to `.reveal` elements)
 *  - number counters (animates `.counter` text up to data-target)
 * A MutationObserver re-scans the DOM so elements added later
 * (e.g. after a projects filter change) are still picked up.
 */
export default function Animations() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.target || "0");
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 30));
          const update = () => {
            current += step;
            if (current >= target) {
              el.textContent = String(target);
            } else {
              el.textContent = String(current);
              requestAnimationFrame(update);
            }
          };
          update();
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.show)").forEach((el) =>
        revealObserver.observe(el),
      );
      document.querySelectorAll<HTMLElement>(".counter").forEach((el) => {
        if (!el.dataset.counted) {
          el.dataset.counted = "1";
          counterObserver.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
