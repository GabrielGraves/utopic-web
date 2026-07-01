"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, poster, className = "w-full h-full object-cover" }) {
  const videoRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadedRef.current) {
          loadedRef.current = true;
          el.preload = "auto";
          el.src = src;
          el.load();
          el.play().catch(() => {});
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted
      loop
      playsInline
      className={className}
    />
  );
}
