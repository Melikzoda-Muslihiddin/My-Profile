"use client";

import { useSite } from "@/lib/site-context";
import { contacts } from "@/lib/data";

export default function About() {
  const { t } = useSite();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__index mono">// 01</span>
          <h2>{t.aboutTitle}</h2>
        </div>

        <div className="about-grid">
          <article className="card profile-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="profile-card__photo"
              src="/photo_2026-03-24_09-43-39.jpg"
              alt="Muslihiddin Melikzoda — Fullstack Developer and Designer"
            />
            <h3>Muslihiddin Melikzoda</h3>
            <small className="mono">@mel1kow · Dushanbe, TJ</small>
            <div className="socials">
              <a href={`mailto:${contacts.email}`}>email</a>
              <a href={contacts.telegram.url} target="_blank" rel="noopener">
                telegram
              </a>
              <a href={contacts.github} target="_blank" rel="noopener">
                github
              </a>
            </div>
          </article>

          <div className="about-text reveal reveal-right">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>

            <div className="info-grid mono">
              <div className="info-row">
                <span className="info-key">role</span>
                <span className="info-val">Fullstack Dev · Designer · Mentor</span>
              </div>
              <div className="info-row">
                <span className="info-key">based</span>
                <span className="info-val">Dushanbe, Tajikistan</span>
              </div>
              <div className="info-row">
                <span className="info-key">now</span>
                <span className="info-val">Academy SoftClub</span>
              </div>
              <div className="info-row">
                <span className="info-key">flagship</span>
                <span className="info-val">Tuyona.tj</span>
              </div>
              <div className="info-row">
                <span className="info-key">status</span>
                <span className="info-val info-ok">● open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
