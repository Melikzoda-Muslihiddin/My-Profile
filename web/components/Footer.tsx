"use client";

import { useSite } from "@/lib/site-context";

export default function Footer() {
  const { t } = useSite();

  return (
    <footer>
      <div className="container footer-inner">
        <span className="mono">{t.footerLeft}</span>
        <span className="mono">{t.footerRight}</span>
      </div>
    </footer>
  );
}
