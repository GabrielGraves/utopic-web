"use client";

import aboutMedia from "@/data/about-media.json";
import cabina from "@/data/cabina.json";
import agencies from "@/data/agencies.json";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";

const experienceIcons = [
  <svg key="sunglasses" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M2 12h3l1.5-3h3L11 12h2l1.5-3h3L19 12h3"/><circle cx="6" cy="14" r="2"/><circle cx="18" cy="14" r="2"/></svg>,
  <svg key="fan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-10 h-10"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.15"/></svg>,
  <svg key="headphones" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M4 17.5V12a8 8 0 1 1 16 0v5.5"/><path d="M4 17.5a2 2 0 0 0 2 2H6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4v5zm16 0a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2v5z"/></svg>,
  <svg key="ribbon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 0v8"/><path d="M8 12l-4 8h16l-4-8"/></svg>,
  <svg key="sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/><path d="M8 16l-2 4M16 16l2 4M12 18v4"/></svg>,
  <svg key="fruit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 4C8 4 5 7 5 11c0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z"/><path d="M12 8a3 3 0 0 0-3 3"/></svg>,
  <svg key="candy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M9 9l-4 4c-.8.8-.8 2 0 2.8l2.8 2.8c.8.8 2 .8 2.8 0l4-4"/><path d="M15 9l4-4M13 11l2-2M11 13l2 2"/><path d="M9 15l-2-2"/></svg>,
  <svg key="icecream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M6 12a6 6 0 1 1 12 0"/><path d="M8 12l2 9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1l2-9"/></svg>,
  <svg key="massage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="8" r="3"/><path d="M12 11v6"/><path d="M8 14l-3 3M16 14l3 3M12 17l-2 4M12 17l2 4"/></svg>,
  <svg key="camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z"/><circle cx="12" cy="13" r="4"/></svg>,
];

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
                    <div className="font-headline text-5xl md:text-7xl font-black text-primary">9+</div>
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
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
            <div className="flex justify-center gap-4 xl:gap-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative w-36 lg:w-44 xl:w-52 h-96">
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_rgba(77,166,255,0.5)] -translate-x-1/2 -translate-y-1/2 z-10" />
                  {i % 2 === 0 ? (
                    <div className="absolute left-0 right-0 text-center pb-12" style={{ bottom: "50%" }}>
                      <div className="font-headline text-2xl xl:text-3xl font-black text-white/20 select-none leading-none">
                        {item.year}
                      </div>
                      <h3 className="font-headline text-sm xl:text-base font-bold text-white mt-1 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-xs xl:text-sm mt-2 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  ) : (
                    <div className="absolute left-0 right-0 text-center pt-12" style={{ top: "50%" }}>
                      <div className="font-headline text-2xl xl:text-3xl font-black text-white/20 select-none leading-none">
                        {item.year}
                      </div>
                      <h3 className="font-headline text-sm xl:text-base font-bold text-white mt-1 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm mt-2 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_rgba(77,166,255,0.5)] -translate-x-[6.5px] z-10" />
                  <div className="font-headline text-2xl font-black text-white/20 select-none leading-none">
                    {item.year}
                  </div>
                  <h3 className="font-headline text-lg font-bold text-white mt-0.5 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1 leading-relaxed font-light max-w-xl">
                    {item.desc}
                  </p>
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8 whitespace-pre-line">
                {t("about.moreThanAParty")}
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light tracking-wide">
                {t("about.experienceText")}
              </p>
            </div>

            {aboutMedia.stand.gallery?.length > 0 && (
              <div className="relative">
                <Carousel images={aboutMedia.stand.gallery} interval={3000} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="font-headline text-3xl md:text-5xl font-black text-primary/80">{t("about.stand")}</div>
                  <div className="font-headline text-xl md:text-2xl font-bold text-white -mt-1">{t("about.standUtopic")}</div>
                  <div className="w-10 h-px bg-primary/40 my-2" />
                  <div className="font-label text-[9px] text-white/60 uppercase tracking-[0.3em]">{t("about.standSub")}</div>
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden mask-gradient py-6">
            <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
              {[...t("experience"), ...t("experience")].map((label, i) => (
                <div
                  key={`${label}-${i}`}
                  className="group relative w-[120px] aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-surface-container-low border border-white/[0.06] overflow-hidden shrink-0 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(77,166,255,0.15)] transition-all duration-500"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group-hover:scale-125 group-hover:rotate-[-8deg] transition-all duration-500 text-white/70">
                      {experienceIcons[i % experienceIcons.length]}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-3 px-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <span className="block font-label text-[10px] text-white/80 uppercase tracking-[0.15em] text-center font-bold leading-tight">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary/50" />
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-bold">{t("about.stage")}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8 whitespace-pre-line">
                {t("about.stageTitle")}
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-lg">
                {t("about.stageText")}
              </p>
            </div>
            {aboutMedia.stage.gallery?.length > 0 && (
              <Carousel images={aboutMedia.stage.gallery} interval={3000} />
            )}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {cabina.map((item) => {
              const initials = item.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
              return (
                <a
                  key={item.id}
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-highest border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {item.photo ? (
                    <img src={item.photo} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-headline text-3xl font-black text-white/10">{initials}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-white/60 group-hover:text-primary transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="font-headline text-sm font-bold text-white group-hover:text-primary transition-colors leading-tight uppercase">
                      {item.name}
                    </span>
                  </div>
                </a>
              );
            })}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {agencies.map((agency) => {
              const initials = agency.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
              return (
                <a
                  key={agency.id}
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative aspect-square rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ${agency.fit === "contain" ? "bg-black" : "bg-surface-container-highest"}`}
                >
                  {agency.photo ? (
                    <img src={agency.photo} alt={agency.name} className={`absolute inset-0 w-full h-full transition-transform duration-500 ${agency.fit === "contain" ? "object-contain p-3" : "object-cover group-hover:scale-105"}`} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-headline text-3xl font-black text-white/10">{initials}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-center">
                    <span className="font-headline text-sm font-bold text-white/80 group-hover:text-primary transition-colors leading-tight uppercase text-center">
                      {agency.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
