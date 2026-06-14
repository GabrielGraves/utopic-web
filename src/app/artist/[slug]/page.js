"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import artists from "@/data/artists.json";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";
import { useBooking } from "@/context/BookingContext";

export default function ArtistProfile({ params }) {
  const { t } = useLang();
  const { openBooking } = useBooking();
  const { slug } = use(params);
  const decoded = decodeURIComponent(slug);
  const artist = artists.find(
    (a) => a.name.toLowerCase().replace(/\s+/g, "-") === decoded
  );

  if (!artist) notFound();

  const { name, genres, bio, photo_url, social, gallery, youtube } = artist;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          <Link
            href="/agency"
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("artist.backToRoster")}
          </Link>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 relative group w-full">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={photo_url} alt={name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="font-headline text-primary uppercase tracking-[0.3em] text-xs font-bold">{genres}</span>
                <h1 className="font-headline text-6xl md:text-8xl font-black mt-4 leading-tight tracking-tighter text-glow">{name}</h1>
              </div>

              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4 text-white/40 uppercase tracking-widest text-[10px] font-bold">
                  <span className="w-12 h-px bg-white/20" />
                  {t("artist.biography")}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg font-light tracking-wide">{bio}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-4">
                <button onClick={() => openBooking(name)} className="bg-gradient-to-r from-primary to-primary-dim text-black px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(77,166,255,0.4)] transition-all active:scale-95">
                  {t("artist.bookNow")}
                </button>
                <a href="#" className="flex items-center gap-3 text-white border border-white/10 px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t("artist.presskit")}
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5 mt-auto">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">{t("artist.social")}</div>
                  <div className="flex gap-4 mt-2">
                    {social?.instagram && (
                      <a href={social.instagram} className="text-white/40 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
                    {social?.soundcloud && (
                      <a href={social.soundcloud} className="text-white/40 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <svg className="w-6 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.56 8.87V17h8.64c1.1 0 1.99-.89 1.99-1.99 0-1.08-.86-1.97-1.93-1.99.15-.55.2-1.13.14-1.75a5.14 5.14 0 00-4.17-4.59c-2.46-.45-4.78.82-5.57 3.09a4.48 4.48 0 00-.1.1zM2 12.82v4.16h2.24v-4.16H2zm3.37-2.36v6.52h2.24v-6.52H5.37zm3.37-1.72v8.24h2.24V8.74H8.74zm-6.72 5.3v2.88h2.24v-2.88H2.02z" />
                        </svg>
                      </a>
                    )}
                    {social?.spotify && (
                      <a href={social.spotify} className="text-white/40 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                      </a>
                    )}
                    {social?.tiktok && (
                      <a href={social.tiktok} className="text-white/40 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">{t("artist.availability")}</div>
                  <div className="font-headline text-sm text-white">{t("artist.worldwide")}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">{t("artist.labels")}</div>
                  <div className="font-headline text-sm text-white">UTOPIC</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">{t("artist.book")}</div>
                  <div className="font-headline text-sm text-white">
                    <a href="mailto:gabriel@utopicworldwide.com" className="hover:text-primary transition-colors">gabriel@utopicworldwide.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {(gallery?.length > 0 || youtube) && (
            <div className="mt-24 pt-24 border-t border-white/5">
              <div className="grid md:grid-cols-2 gap-12">
                {gallery?.length > 0 && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px w-8 bg-primary/50" />
                      <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold">GALLERY</span>
                    </div>
                    <Carousel images={gallery} />
                  </div>
                )}
                {youtube && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px w-8 bg-primary/50" />
                      <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold">SET</span>
                    </div>
                    <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-low">
                      <iframe src={youtube} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" title={`${name} set`} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
