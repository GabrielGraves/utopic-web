"use client";

import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  const FOOTER_LINKS = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Resident Advisor", href: "https://ra.co" },
    { label: "Soundcloud", href: "https://soundcloud.com" },
    { label: t("footer.privacy"), href: "#" },
    { label: t("footer.contact"), href: "#" },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-16 w-full max-w-screen-2xl mx-auto gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-black text-primary font-headline mb-4">
            UTOPIC
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.05em] text-white/50">
            {t("footer.rights")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="font-body text-[10px] uppercase tracking-[0.05em] text-white/50 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
