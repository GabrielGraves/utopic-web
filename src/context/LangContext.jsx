"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import en from "@/lang/en";
import es from "@/lang/es";

const langs = { en, es };

const LangContext = createContext(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    return { locale: "en", setLocale: () => {}, t: (k) => k, tl: (d, f) => d?.[f] ?? "" };
  }
  return ctx;
}

export function LangProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("utopic-lang");
      if (saved === "en" || saved === "es") setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    try { localStorage.setItem("utopic-lang", locale); } catch {}
  }, [locale]);

  const setLocale = useCallback((l) => {
    if (l !== locale) setLocaleState(l);
  }, [locale]);

  const t = useCallback((key) => {
    const keys = key.split(".");
    let val = langs[locale];
    for (const k of keys) {
      if (val && val[k] !== undefined) val = val[k];
      else return key;
    }
    return val;
  }, [locale]);

  const tl = useCallback((data, field) => {
    if (locale === "es" && data?.[`${field}_es`] !== undefined) return data[`${field}_es`];
    return data?.[field] ?? "";
  }, [locale]);

  return (
    <LangContext.Provider value={{ locale, setLocale, t, tl }}>
      {children}
    </LangContext.Provider>
  );
}
