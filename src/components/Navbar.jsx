"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useLang();

  const NAV_ITEMS = [
    { label: t("nav.events"), href: "/" },
    { label: t("nav.agency"), href: "/agency" },
    { label: t("nav.label"), href: "/label" },
    { label: t("nav.merch"), href: "/merch" },
    { label: t("nav.about"), href: "/about" },
  ];

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const linkClass = (href) =>
    `transition-colors duration-300 ${
      isActive(href)
        ? "text-primary border-b border-primary pb-1"
        : "text-white/70 hover:text-primary"
    }`;

  const mobileLinkClass = (href) =>
    `flex items-center gap-4 pl-4 text-lg uppercase tracking-[0.05em] transition-all rounded-xl py-3 ${
      isActive(href)
        ? "text-primary bg-surface-container-high/50"
        : "text-white/70 hover:bg-surface-container-highest hover:text-white"
    }`;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(77,166,255,0.06)] flex justify-between items-center px-6 h-16">
        <Link href="/">
          <img src="/utopic-logo.png" alt="UTOPIC" className="h-8 md:h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight uppercase text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-highest rounded-full p-1 border border-white/5">
            <button onClick={() => setLocale("en")} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${locale === "en" ? "bg-primary text-on-primary-fixed" : "text-white/50 hover:text-white"}`}>
              EN
            </button>
            <button onClick={() => setLocale("es")} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${locale === "es" ? "bg-primary text-on-primary-fixed" : "text-white/50 hover:text-white"}`}>
              ES
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed right-0 top-0 h-full w-[80vw] max-w-sm z-[110] bg-background shadow-[32px_0_64px_rgba(26,140,255,0.1)] flex flex-col p-8 gap-6 transition-transform duration-500 ease-in-out font-headline ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Link href="/">
            <img src="/utopic-logo.png" alt="UTOPIC" className="h-8 w-auto" />
          </Link>
          <button
            className="text-white/70 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={mobileLinkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <div className="flex items-center bg-surface-container rounded-full p-1 border border-white/5 w-fit">
            <button onClick={() => setLocale("en")} className={`px-6 py-2 rounded-full text-[10px] font-bold transition-all duration-300 ${locale === "en" ? "bg-primary text-on-primary-fixed" : "text-white/50 hover:text-white"}`}>
              EN
            </button>
            <button onClick={() => setLocale("es")} className={`px-6 py-2 rounded-full text-[10px] font-bold transition-all duration-300 ${locale === "es" ? "bg-primary text-on-primary-fixed" : "text-white/50 hover:text-white"}`}>
              ES
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
