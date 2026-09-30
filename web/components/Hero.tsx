"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/lib/site-context";

export default function Hero() {
  const { t } = useSite();
  const [typed, setTyped] = useState("");

  // typing / deleting loop, restarts whenever the language (phrases) change
  useEffect(() => {
    const phrases = t.typed;
    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = phrases[pi];
      setTyped(word.slice(0, ci));

      if (!deleting && ci < word.length) {
        ci++;
        timer = setTimeout(tick, 65);
      } else if (!deleting && ci === word.length) {
        deleting = true;
        timer = setTimeout(tick, 1600);
      } else if (deleting && ci > 0) {
        ci--;
        timer = setTimeout(tick, 30);
      } else {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        timer = setTimeout(tick, 200);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, [t.typed]);

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__left reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            <span>{t.eyebrow}</span>
          </div>

          <h1 className="hero__title">
            <span className="mono prompt">muslihiddin@dev</span>
            <span className="mono path"> ~ %</span>
            <span className="typed-line">
              <span>{typed}</span>
              <span className="caret">█</span>
            </span>
          </h1>

          <p className="hero__lead" dangerouslySetInnerHTML={{ __html: t.heroText }} />

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              {t.viewProjects}
            </a>
            <a className="btn btn--ghost" href="#design">
              {t.viewDesign}
            </a>
            <a className="btn btn--ghost" href="#contact">
              {t.contactMe}
            </a>
          </div>

          <div className="hero__stats">
            <div className="stat">
              <strong className="mono">
                <span className="counter" data-target="40">
                  0
                </span>
                +
              </strong>
              <span>{t.stat1Text}</span>
            </div>
            <div className="stat">
              <strong className="mono">
                <span className="counter" data-target="8">
                  0
                </span>
                +
              </strong>
              <span>{t.stat2Text}</span>
            </div>
            <div className="stat">
              <strong className="mono">∞</strong>
              <span>{t.stat3Text}</span>
            </div>
          </div>
        </div>

        <div className="hero__right reveal reveal-right">
          <div className="terminal floating">
            <div className="terminal__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="terminal__title mono">muslihiddin — bash</span>
            </div>
            <div className="terminal__body mono">
              <p>
                <span className="t-prompt">$</span> whoami
              </p>
              <p className="t-out">Muslihiddin Melikzoda</p>
              <p>
                <span className="t-prompt">$</span> cat role.txt
              </p>
              <p className="t-out">Fullstack Dev · UI/UX Designer · Mentor</p>
              <p>
                <span className="t-prompt">$</span> ls ./stack
              </p>
              <p className="t-out">next.js react typescript c++ node prisma</p>
              <p>
                <span className="t-prompt">$</span> cat flagship.txt
              </p>
              <p className="t-out">Tuyona.tj — wedding marketplace 💍</p>
              <p>
                <span className="t-prompt">$</span> cat now.txt
              </p>
              <p className="t-out">design mentor @ Academy SoftClub</p>
              <p>
                <span className="t-prompt">$</span> status
              </p>
              <p className="t-out t-ok">● open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
