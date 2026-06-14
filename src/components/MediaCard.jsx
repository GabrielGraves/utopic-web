"use client";

import { useLang } from "@/context/LangContext";

export default function MediaCard({ item }) {
  const { t, tl } = useLang();
  const { type, embed_url } = item;

  const platformIcon = {
    youtube: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    soundcloud: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.56 8.87V17h8.64c1.1 0 1.99-.89 1.99-1.99 0-1.08-.86-1.97-1.93-1.99.15-.55.2-1.13.14-1.75a5.14 5.14 0 00-4.17-4.59c-2.46-.45-4.78.82-5.57 3.09a4.48 4.48 0 00-.1.1zM2 12.82v4.16h2.24v-4.16H2zm3.37-2.36v6.52h2.24v-6.52H5.37zm3.37-1.72v8.24h2.24V8.74H8.74zm-6.72 5.3v2.88h2.24v-2.88H2.02z" />
      </svg>
    ),
    spotify: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  };

  return (
    <div className="group bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1 shadow-2xl">
      <div className="aspect-video bg-surface-container-highest relative overflow-hidden">
        <iframe
          src={embed_url}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={item.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary">{platformIcon[type]}</span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
            {type === "youtube" ? t("media.video") : type === "soundcloud" ? t("media.set") : t("media.playlist")}
          </span>
        </div>
        <h3 className="font-headline text-lg font-bold text-white group-hover:text-primary transition-colors">
          {tl(item, "title")}
        </h3>
        <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
          {tl(item, "description")}
        </p>
      </div>
    </div>
  );
}
