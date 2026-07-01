"use client";

import { LangProvider } from "@/context/LangContext";
import { BookingProvider } from "@/context/BookingContext";
import PrefetchOnLoad from "@/components/PrefetchOnLoad";

export default function ClientLayout({ children }) {
  return (
    <LangProvider>
      <BookingProvider>
        <PrefetchOnLoad />
        {children}
      </BookingProvider>
    </LangProvider>
  );
}
