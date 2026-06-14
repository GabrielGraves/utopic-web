"use client";

import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval]);

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-low">
        <img src={images[0]} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container-low group">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
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
    </div>
  );
}
