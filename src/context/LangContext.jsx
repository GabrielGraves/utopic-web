"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "@/lang/en";
import es from "@/lang/es";

const langs = { en, es };

const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("utopic-lang");
    if (saved === "es" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l) => {
    setLocaleState(l);
    localStorage.setItem("utopic-lang", l);
    document.documentElement.lang = l;
  }, []);

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
    if (locale === "es" && data[`${field}_es`] !== undefined) return data[`${field}_es`];
    return data[field];
  }, [locale]);

  return (
    <LangContext.Provider value={{ locale, setLocale, t, tl }}>
      {children}
    </LangContext.Provider>
  );
}
