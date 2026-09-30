"use client";

import { useSite } from "@/lib/site-context";

export default function Experience() {
  const { t } = useSite();

  const steps = [
    { year: "now", title: t.step1Title, text: t.step1Text },
    { year: "uni", title: t.step2Title, text: t.step2Text },
    { year: "2024+", title: t.step3Title, text: t.step3Text },
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__index mono">// 04</span>
          <h2>{t.experienceTitle}</h2>
        </div>

        <div className="timeline">
          {steps.map((step) => (
            <article key={step.year} className="timeline-item reveal stagger-item">
              <span className="timeline-year mono">{step.year}</span>
              <div className="timeline-body">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
