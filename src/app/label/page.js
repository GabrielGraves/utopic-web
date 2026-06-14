"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";

export default function LabelPage() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-[radial-gradient(circle_at_center,#1a1919_0%,#000000_100%)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-4">
            <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-semibold animate-pulse">
              {t("label.initializing")}
            </span>
          </div>

          <h1 className="font-headline font-black text-6xl md:text-[9rem] leading-none tracking-tighter text-white uppercase select-none">
            {t("label.theLabel")}
          </h1>

          <div className="mt-4 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <h2 className="font-headline font-light text-4xl md:text-7xl text-primary/40 italic tracking-tight lowercase">
              {t("label.comingSoon")}
            </h2>
          </div>

          <div className="mt-20 relative group">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-primary/20 bg-surface-container-high flex items-center justify-center shadow-[0_0_50px_rgba(77,166,255,0.1)]">
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#4da6ff]" />
              </div>
            </div>

            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 text-left">
              <div className="h-px w-24 bg-primary/30" />
              <p className="font-label text-[10px] text-white/40 uppercase tracking-widest">
                {t("label.releasePhase")}
              </p>
              <p className="font-label text-[10px] text-primary uppercase tracking-widest">
                {t("label.encodedInVoid")}
              </p>
            </div>
          </div>

          <button className="mt-12 group relative px-10 py-4 overflow-hidden border border-primary/30 hover:border-primary transition-colors">
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-headline tracking-[0.3em] text-xs uppercase text-white font-bold">
              {t("label.accessVoid")}
            </span>
          </button>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </main>
      <Footer />
    </>
  );
}
