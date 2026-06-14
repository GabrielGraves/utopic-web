"use client";

import events from "@/data/events.json";
import media from "@/data/media.json";
import pastIterations from "@/data/past-iterations.json";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import MediaCard from "@/components/MediaCard";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";

export default function HomePage() {
  const { t } = useLang();
  const activeEvents = events.filter((e) => e.status === "active");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
                {t("home.upcomingEvents")}
              </h1>
              <p className="text-on-surface-variant text-lg">
                {t("home.subtitle")}
              </p>
            </div>
            <div className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary/30 pb-2 whitespace-nowrap">
              {t("home.scrollToExplore")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto mt-32 pt-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
                {t("home.pastIterations")}
              </h2>
              <p className="text-on-surface-variant mt-2">
                {t("home.pastIterationsSub")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pastIterations.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-square bg-surface-container"
              >
                <div className="w-full h-full bg-surface-container-highest" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto mt-32 pt-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
                {t("home.multimedia")}
              </h2>
              <p className="text-on-surface-variant mt-2">
                {t("home.multimediaSub")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {media.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
