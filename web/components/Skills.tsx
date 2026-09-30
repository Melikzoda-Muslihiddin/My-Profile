"use client";

import { useSite } from "@/lib/site-context";
import { techStack } from "@/lib/data";

export default function Skills() {
  const { t } = useSite();

  const groups = [
    {
      title: "frontend",
      items: [
        ["HTML / CSS", t.lvlConfident, "strong"],
        ["JavaScript (ES6+)", t.lvlConfident, "strong"],
        ["TypeScript", t.lvlConfident, "strong"],
        ["Tailwind CSS", t.lvlConfident, "strong"],
      ],
    },
    {
      title: "frameworks & state",
      items: [
        ["React", t.lvlConfident, "strong"],
        ["Next.js (App Router)", t.lvlConfident, "strong"],
        ["Redux / Zustand", t.lvlConfident, "strong"],
        ["shadcn/ui", t.lvlComfortable, "mid"],
      ],
    },
    {
      title: "backend & languages",
      items: [
        ["Node.js / API Routes", t.lvlComfortable, "mid"],
        ["Prisma · PostgreSQL", t.lvlComfortable, "mid"],
        ["C++", t.lvlComfortable, "mid"],
        ["NextAuth / Auth", t.lvlComfortable, "mid"],
      ],
    },
    {
      title: "tooling",
      items: [
        ["Git / GitHub", t.lvlConfident, "strong"],
        ["Vercel / Deploy", t.lvlConfident, "strong"],
        ["REST APIs", t.lvlConfident, "strong"],
        ["Responsive / a11y", t.lvlConfident, "strong"],
      ],
    },
  ] as const;

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__index mono">// 02</span>
          <h2>{t.skillsTitle}</h2>
        </div>
        <p className="section__lead reveal">{t.skillsText}</p>

        <div className="skills-grid">
          {groups.map((group) => (
            <article key={group.title} className="card skill-group reveal stagger-item">
              <h3 className="mono">
                <span className="t-prompt">#</span> {group.title}
              </h3>
              <ul className="skill-list">
                {group.items.map(([name, label, tone]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <span className={`lvl lvl--${tone}`}>{label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="chip-list reveal">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
