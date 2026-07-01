"use client";

import events from "@/data/events.json";
import media from "@/data/media.json";
import pastIterations from "@/data/past-iterations.json";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import MediaCard from "@/components/MediaCard";
import PastIterationCard from "@/components/PastIterationCard";
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastIterations.map((item) => (
              <PastIterationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto mt-32 pt-32 border-t border-white/5">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-16">
            {t("home.upcomingEvents")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeEvents.map((event) => (
              <EventCard key={event.id} event={event} />
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
