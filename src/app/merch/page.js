"use client";

import products from "@/data/merch.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LangContext";

export default function MerchPage() {
  const { t, tl } = useLang();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-primary text-xs uppercase tracking-[0.2em] mb-4 block">
                {t("merch.utopicMerch")}
              </span>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4 uppercase">
                {t("merch.merchandise")}
              </h1>
              <p className="text-on-surface-variant text-lg">
                {t("merch.description")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1 shadow-2xl"
              >
                <div className="aspect-square bg-surface-container-highest flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:scale-110 transition-transform duration-500" />
                  <div className="text-white/10 font-headline font-black text-8xl select-none">U</div>
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold">
                    {tl(product, "category")}
                  </span>
                  <div className="flex justify-between items-center mt-2">
                    <h3 className="font-headline text-xl font-bold text-white">
                      {tl(product, "name")}
                    </h3>
                    <span className="font-headline text-lg font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                  <button className="w-full mt-4 py-3 bg-primary/10 border border-primary/20 text-primary font-label text-[10px] uppercase tracking-widest rounded-xl hover:bg-primary hover:text-on-primary-fixed hover:border-transparent transition-all duration-300 font-bold">
                    {t("merch.addToCart")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
