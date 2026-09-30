"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/lib/site-context";
import { projects, type Project } from "@/lib/data";
import { cssVars } from "@/lib/css";

type Filter = "all" | "fullstack" | "frontend";

const FILTERS: Filter[] = ["all", "fullstack", "frontend"];

export default function Projects() {
  const { t } = useSite();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // lock scroll + close on Escape while modal is open
  useEffect(() => {
    if (!active) return;
    document.body.classList.add("nav-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__index mono">// 03</span>
          <h2>{t.projectsTitle}</h2>
        </div>

        <div className="projects-top reveal">
          <p className="section__lead">{t.projectsText}</p>
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? t.filterAll : f}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {list.map((p, i) => (
            <article
              key={p.title}
              className="card project reveal stagger-item"
              style={cssVars({ "--i": i })}
            >
              <div className="project__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="project__link" onClick={() => setActive(p)}>
                  → view details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* modal */}
      <div className={`modal${active ? " open" : ""}`}>
        <div className="modal__overlay" onClick={() => setActive(null)} />
        {active && (
          <div className="modal__dialog">
            <button className="modal__close" onClick={() => setActive(null)} aria-label="Close">
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.image} alt={active.title} />
            <div className="modal__body">
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="chip-list">
                {active.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="btn btn--primary"
                href={active.link}
                target="_blank"
                rel="noopener"
              >
                {active.cta || t.openGithub}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
