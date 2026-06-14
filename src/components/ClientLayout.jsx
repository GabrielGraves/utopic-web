"use client";

import { LangProvider } from "@/context/LangContext";
import { BookingProvider } from "@/context/BookingContext";

export default function ClientLayout({ children }) {
  return (
    <LangProvider>
      <BookingProvider>{children}</BookingProvider>
    </LangProvider>
  );
}
