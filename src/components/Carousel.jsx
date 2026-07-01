"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function Carousel({ images, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const displayed = useRef(new Set());

  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval]);

  useEffect(() => {
    displayed.current.add(current);
  }, [current]);

  const resolve = (img) => (typeof img === "string" ? { src: img, objectPosition: "center" } : img);

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    const { src, objectPosition } = resolve(images[0]);
    return (
      <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-low">
        <img src={src} alt="" className="w-full h-full object-cover" style={{ objectPosition }} />
      </div>
    );
  }

  const currentImg = resolve(images[current]);
  const nextIdx = (current + 1) % images.length;
  const nextImg = resolve(images[nextIdx]);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container-low group">
      <img
        key={current}
        src={currentImg.src}
        alt=""
        className="w-full h-full object-cover"
        style={{ objectPosition: currentImg.objectPosition }}
      />
      <button
        onClick={() => setCurrent((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:bg-primary/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={() => setCurrent((i) => (i + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:bg-primary/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
      <link rel="prefetch" href={nextImg.src} as="image" />
    </div>
  );
}
