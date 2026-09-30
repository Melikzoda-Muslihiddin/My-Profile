"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dict, type Lang } from "./translations";

type Theme = "dark" | "light";

interface SiteContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Dict;
  toasts: { id: number; message: string }[];
  showToast: (message: string) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  // hydrate persisted preferences after mount (avoids SSR mismatch)
  useEffect(() => {
    const savedLang = localStorage.getItem("site-language") as Lang | null;
    const savedTheme = localStorage.getItem("site-theme") as Theme | null;
    if (savedLang && translations[savedLang]) setLangState(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  // reflect theme on <body> + persist
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  // reflect language on <html lang> + persist
  useEffect(() => {
    document.documentElement.lang = lang === "tj" ? "tg" : lang;
    localStorage.setItem("site-language", lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    [],
  );

  const showToast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      lang,
      setLang,
      theme,
      toggleTheme,
      t: translations[lang],
      toasts,
      showToast,
    }),
    [lang, setLang, theme, toggleTheme, toasts, showToast],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx;
}
