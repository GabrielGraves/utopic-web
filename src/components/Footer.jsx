"use client";

import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-surface-container-lowest border-t border-white/10">
      <div className="flex justify-center items-center px-8 md:px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="text-center">
          <div className="text-xl font-black text-primary font-headline mb-4">
            UTOPIC
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.05em] text-white/50">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
