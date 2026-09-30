"use client";

import { useEffect, useRef, useState } from "react";
import { useSite } from "@/lib/site-context";
import type { Lang } from "@/lib/translations";

const NAV_LINKS: { href: string; key: keyof ReturnType<typeof useSite>["t"]; design?: boolean }[] = [
  { href: "#about", key: "navAbout" },
  { href: "#skills", key: "navSkills" },
  { href: "#projects", key: "navProjects" },
  { href: "#design", key: "navDesign", design: true },
  { href: "#faq", key: "navFaq" },
  { href: "#contact", key: "navContact" },
];

const LANGS: Lang[] = ["en", "ru", "tj"];

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [designMode, setDesignMode] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;

      if (progressRef.current) {
        progressRef.current.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : "0%";
      }

      setScrolled(scrollTop > 10);

      const designEl = document.getElementById("design");
      const faqEl = document.getElementById("faq");
      if (designEl && faqEl) {
        setDesignMode(
          scrollTop >= designEl.offsetTop - 90 && scrollTop < faqEl.offsetTop - 90,
        );
      }

      let current = "";
      document.querySelectorAll("main section[id]").forEach((sec) => {
        if (scrollTop >= (sec as HTMLElement).offsetTop - 120) current = sec.id;
      });
      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress-bar" ref={progressRef} />

      <header
        className={`navbar${scrolled ? " scrolled" : ""}${designMode ? " nav-design-mode" : ""}`}
      >
        <div className="container navbar__inner">
          <a className="brand" href="#home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo_2026-03-24_09-43-39.jpg"
              className="brand__logo"
              alt="Muslihiddin Melikzoda — portrait"
            />
            <span className="brand__name">
              melikow<span className="brand__dot">.</span>dev
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${link.design ? "nav-design" : ""}${
                  activeId === link.href.slice(1) ? " active" : ""
                }`}
              >
                {t[link.key]}
              </a>
            ))}
          </nav>

          <div className="top-actions">
            <div className="lang-switch">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  className={`lang-btn${lang === l ? " active" : ""}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span>{theme === "light" ? "◑" : "◐"}</span>
            </button>
            <button
              type="button"
              className="burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {t[link.key]}
          </a>
        ))}
      </div>
    </>
  );
}
