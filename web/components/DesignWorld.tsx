"use client";

import { useSite } from "@/lib/site-context";
import { designTools, designWorks } from "@/lib/data";
import { cssVars } from "@/lib/css";

export default function DesignWorld() {
  const { t } = useSite();

  return (
    <div className="design-world">
      {/* DESIGN INTRO */}
      <section className="d-section d-hero" id="design">
        <div className="container">
          <div className="d-eyebrow reveal">{t.designEyebrow}</div>
          <h2 className="d-title reveal" dangerouslySetInnerHTML={{ __html: t.designTitle }} />
          <p className="d-lead reveal">{t.designLead}</p>

          <div className="d-stats reveal">
            <div className="d-stat">
              <strong>
                <span className="counter" data-target="6">
                  0
                </span>
                +
              </strong>
              <span>{t.dStat1}</span>
            </div>
            <div className="d-stat">
              <strong>
                <span className="counter" data-target="8">
                  0
                </span>
              </strong>
              <span>{t.dStat2}</span>
            </div>
            <div className="d-stat">
              <strong>{t.dStat3Val}</strong>
              <span>{t.dStat3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN TOOLS */}
      <section className="d-section">
        <div className="container">
          <h3 className="d-subtitle reveal">{t.designToolsTitle}</h3>
          <div className="d-tools">
            {designTools.map((tool, i) => (
              <article
                key={tool.name}
                className="d-tool reveal stagger-item"
                style={cssVars({ "--i": i })}
              >
                <div className="d-tool__top">
                  <span className="d-tool__badge">{tool.tag}</span>
                  <span className="d-tool__pct">{tool.level}%</span>
                </div>
                <h4 className="d-tool__name">{tool.name}</h4>
                <p className="d-tool__use">{tool.use}</p>
                <div className="d-tool__bar">
                  <span style={cssVars({ "--w": `${tool.level}%` })} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN WORKS */}
      <section className="d-section">
        <div className="container">
          <h3 className="d-subtitle reveal">{t.designWorksTitle}</h3>
          <p className="d-works-lead reveal">{t.designWorksLead}</p>
          <div className="d-gallery">
            {designWorks.map((work, i) => (
              <figure
                key={work.title}
                className="d-work reveal stagger-item"
                style={cssVars({ "--i": i })}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={work.image} alt={work.title} loading="lazy" />
                <figcaption className="d-work__cap">
                  <span className="d-work__tag">{work.tag}</span>
                  <span className="d-work__title">{work.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MENTOR CALLOUT */}
      <section className="d-section">
        <div className="container">
          <div className="d-mentor reveal">
            <div className="d-mentor__badge">{t.mentorBadge}</div>
            <h3>{t.mentorTitle}</h3>
            <p>{t.mentorText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
