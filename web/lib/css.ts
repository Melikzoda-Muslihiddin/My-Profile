import type { CSSProperties } from "react";

/** Build a style object that carries CSS custom properties (--var). */
export function cssVars(vars: Record<string, string | number>): CSSProperties {
  return vars as unknown as CSSProperties;
}
