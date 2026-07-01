"use client";

import Carousel from "./Carousel";
import VideoPlayer from "./VideoPlayer";
import { useLang } from "@/context/LangContext";

export default function PastIterationCard({ item }) {
  const { t } = useLang();

  const posterSrc = item.gallery?.[0] ? (typeof item.gallery[0] === "string" ? item.gallery[0] : item.gallery[0].src) : item.image;

  return (
    <div className="group relative bg-surface-container-low rounded-xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(77,166,255,0.15)]">
      {item.video ? (
        <div className="aspect-video overflow-hidden relative">
          <VideoPlayer src={item.video} poster={posterSrc} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="font-headline text-2xl md:text-3xl font-black text-white tracking-tighter">
              {item.title}
            </div>
            <div className="font-label text-[10px] text-primary uppercase tracking-[0.2em] mt-1">
              {item.date}
            </div>
          </div>
        </div>
      ) : item.gallery?.[0] ? (
        <div className="aspect-video overflow-hidden relative">
          <img
            src={item.gallery[0]}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="font-headline text-2xl md:text-3xl font-black text-white tracking-tighter">
              {item.title}
            </div>
            <div className="font-label text-[10px] text-primary uppercase tracking-[0.2em] mt-1">
              {item.date}
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
          <div className="text-center">
            <div className="font-headline text-2xl md:text-3xl font-black text-white/80 tracking-tighter">
              {item.title}
            </div>
            <div className="font-label text-[10px] text-primary uppercase tracking-[0.2em] mt-1">
              {item.date}
            </div>
          </div>
        </div>
      )}

      {item.image && (
        <div className="grid grid-cols-2 gap-2 p-2">
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container relative">
            <div className="absolute inset-0">
              <Carousel images={item.gallery} />
            </div>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container">
            <img src={item.image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {item.gallery?.length > 0 && !item.image && (
        <div className="grid grid-cols-2 gap-2 p-2">
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container relative">
            <div className="absolute inset-0">
              <Carousel images={item.gallery} />
            </div>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container">
            <img src={item.gallery[item.gallery.length - 1]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {item.facebook_album && (
        <div className="px-4 pb-4 pt-1">
          <a
            href={item.facebook_album}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] font-label uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            {t("home.viewAlbum")}
          </a>
        </div>
      )}
    </div>
  );
}
