"use client";

import artists from "@/data/artists.json";
import Navbar from "@/components/Navbar";
import ArtistCard from "@/components/ArtistCard";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";
import { useBooking } from "@/context/BookingContext";

export default function AgencyPage() {
  const { t } = useLang();
  const { openBooking } = useBooking();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12 mb-16">
            <div>
              <span className="font-label text-primary text-xs uppercase tracking-[0.2em] mb-4 block">
                {t("agency.utopicManagement")}
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none">
                {t("agency.theRoster")}
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-on-surface-variant font-light text-lg leading-relaxed">
                {t("agency.description")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low mt-24 py-32 px-8 -mx-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 whitespace-pre-line">
              {t("agency.bringTheSound")}
            </h2>
            <button onClick={openBooking} className="bg-primary text-on-primary-fixed font-headline font-bold py-6 px-16 rounded-xl text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(77,166,255,0.3)]">
              {t("agency.contactAgency")}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
