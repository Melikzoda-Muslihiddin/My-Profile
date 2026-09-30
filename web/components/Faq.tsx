"use client";

import { useState } from "react";
import { useSite } from "@/lib/site-context";

export default function Faq() {
  const { t } = useSite();
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__index mono">// 05</span>
          <h2>{t.faqTitle}</h2>
        </div>

        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item reveal${open === i ? " open" : ""}`}>
              <button
                className="faq-trigger"
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon mono">+</span>
              </button>
              <div className="faq-content">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
