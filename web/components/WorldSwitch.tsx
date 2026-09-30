"use client";

import { useSite } from "@/lib/site-context";

export default function WorldSwitch() {
  const { t } = useSite();

  return (
    <div className="world-switch" aria-hidden="true">
      <div className="container">
        <p className="world-switch__code mono">
          <span className="t-prompt">$</span> {t.switchCmd}
        </p>
        <div className="world-switch__line">
          <span className="world-switch__from mono">{t.switchFrom}</span>
          <span className="world-switch__arrow">⟶</span>
          <span className="world-switch__to">{t.switchTo}</span>
        </div>
      </div>
    </div>
  );
}
