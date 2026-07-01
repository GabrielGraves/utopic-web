"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ROUTES = [
  "/agency",
  "/about",
  "/label",
  "/artist/sailo",
  "/artist/alyosha",
  "/artist/db95",
  "/artist/adhila",
];

const IMAGES = [
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862717/sailo_rod3dv.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/alyosha_irvrpp.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/db95_qrzm1b.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/adhila_qysbbq.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/exhale_iryjbe.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/utopic-vier25_srlmqf.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/dsc00002_w0mvfm.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/exports226_c4njkj.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862716/stage_fxnxfa.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862714/7_asv1oa.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/16_tqrcjn.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/A6706407_t7khtp.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/A6706636_z1ucn9.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862714/events-42_nwenmb.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/events-45_o9clhp.webp",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/groove_tykzua.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/nfm0877_pfndlj.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862714/nfm0940_gj9nzs.jpg",
  "https://res.cloudinary.com/e3fssq6u/image/upload/v1782862715/dsc07952_jhrayt.jpg",
];

const prefetchLink = (href, as) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
};

export default function PrefetchOnLoad() {
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const idleCb = typeof requestIdleCallback !== "undefined" ? requestIdleCallback : (fn) => setTimeout(fn, 1);

    idleCb(() => {
      if (controller.signal.aborted) return;
      for (const route of ROUTES) {
        if (controller.signal.aborted) break;
        try { router.prefetch(route); } catch {}
      }
    });

    const imgIdleCb = typeof requestIdleCallback !== "undefined" ? requestIdleCallback : (fn) => setTimeout(fn, 1);
    imgIdleCb(() => {
      if (controller.signal.aborted) return;
      for (const src of IMAGES) {
        if (controller.signal.aborted) break;
        try { prefetchLink(src, "image"); } catch {}
      }
    }, { timeout: 3000 });

    return () => controller.abort();
  }, [router]);

  return null;
}
