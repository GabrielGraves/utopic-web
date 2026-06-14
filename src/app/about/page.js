"use client";

import aboutMedia from "@/data/about-media.json";
import partners from "@/data/partners.json";
import cabina from "@/data/cabina.json";
import agencies from "@/data/agencies.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";

const experienceIcons = ["🕶️", "🪭", "🎧", "🎀", "✨", "🍉", "🍬", "🍦", "💆", "📸"];

export default function AboutPage() {
  const { t } = useLang();
  const timeline = t("timeline");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-8">
        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-primary/50" />
                <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.subtitle")}</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-8 whitespace-pre-line">
                {t("about.losComienzos")}
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl font-light tracking-wide">
                {t("about.story")}{" "}
                <span className="text-white font-medium">{t("about.tranceRoom")}</span>
                {t("about.storyEnd")}
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/20 bg-surface-container-high flex items-center justify-center shadow-[0_0_80px_rgba(77,166,255,0.15)]">
                  <div className="text-center">
                    <div className="font-headline text-5xl md:text-7xl font-black text-primary">6+</div>
                    <div className="font-label text-[10px] text-white/50 uppercase tracking-[0.3em] mt-1">{t("about.years")}</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/10" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 via-surface-container-low to-surface-container-low border border-white/5 p-10 md:p-16 lg:p-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-primary/50" />
                <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.evolution")}</span>
              </div>
              <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase mb-8 leading-[0.9] whitespace-pre-line">
                {t("about.utopicSurge")}
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light tracking-wide">
                {t("about.evolutionText")}{" "}
                <span className="text-white font-medium">{t("about.evolutionTextBold")}</span>
                {t("about.evolutionTextEnd")}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-12 bg-primary/50" />
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.timeline")}</span>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent -translate-x-1/2" />
            <div className="space-y-24">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:order-2 md:pl-16"}`}>
                    <div className="inline-block">
                      <span className="font-headline text-7xl md:text-9xl font-black text-white/5 select-none leading-none">
                        {item.year}
                      </span>
                      <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mt-2 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant mt-3 leading-relaxed max-w-md font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(77,166,255,0.5)] -translate-x-1/2 mt-2 z-10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary/50" />
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.experience")}</span>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-3">
              <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8 whitespace-pre-line">
                {t("about.moreThanAParty")}
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light tracking-wide">
                {t("about.experienceText")}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="w-full aspect-square max-w-xs mx-auto rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-center overflow-hidden">
                  {aboutMedia.stand.image_url ? (
                    <img src={aboutMedia.stand.image_url} alt={aboutMedia.stand.alt} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-8">
                      <div className="font-headline text-6xl font-black text-primary/80">{t("about.stand")}</div>
                      <div className="font-headline text-3xl font-bold text-white mt-2">{t("about.standUtopic")}</div>
                      <div className="w-16 h-px bg-primary/30 mx-auto my-6" />
                      <div className="font-label text-[10px] text-white/40 uppercase tracking-[0.3em]">{t("about.standSub")}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {t("experience").map((label, i) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface-container-low border border-white/5 hover:bg-surface-container-high hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {experienceIcons[i]}
                </span>
                <span className="font-label text-[10px] text-white/60 uppercase tracking-[0.15em] text-center font-bold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low border border-white/5">
            {aboutMedia.stage.image_url && (
              <div className="absolute inset-0">
                <img src={aboutMedia.stage.image_url} alt={aboutMedia.stage.alt} className="w-full h-full object-cover opacity-20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-primary/50" />
                  <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.stage")}</span>
                </div>
                <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8 whitespace-pre-line">
                  {t("about.stageTitle")}
                </h2>
                <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-lg">
                  {t("about.stageText")}
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-3 gap-4">
                {["🎵", "💡", "🎨"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-surface-container-highest border border-white/5 flex items-center justify-center text-3xl md:text-4xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-12 bg-primary/50" />
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.partners")}</span>
          </div>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase mb-16 leading-[0.9] whitespace-pre-line">
            {t("about.confiaron")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group aspect-square rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-center p-8 hover:bg-surface-container-high hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                {partner.logo_url ? (
                  <img src={partner.logo_url} alt={partner.name} className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <span className="font-headline text-sm text-white/30 text-center uppercase tracking-wider font-bold">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-12 bg-primary/50" />
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.cabina")}</span>
          </div>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase mb-16 leading-[0.9] whitespace-pre-line">
            {t("about.pasaron")}
          </h2>
          <div className="flex flex-wrap gap-4">
            {cabina.map((item) => (
              <a
                key={item.id}
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-surface-container-low border border-white/5 hover:bg-surface-container-high hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-headline text-sm font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-12 bg-primary/50" />
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.agencies")}</span>
          </div>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase mb-16 leading-[0.9] whitespace-pre-line">
            {t("about.trabajamos")}
          </h2>
          <div className="flex flex-wrap gap-4">
            {agencies.map((agency) => (
              <a
                key={agency.id}
                href={agency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-5 rounded-xl bg-surface-container-low border border-white/5 hover:bg-surface-container-high hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <span className="font-headline text-base font-bold text-white/60 group-hover:text-white transition-colors tracking-tight">
                  {agency.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
