"use client";

import { createContext, useContext, useState } from "react";
import BookingModal from "@/components/BookingModal";

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [artist, setArtist] = useState("");

  return (
    <BookingContext.Provider value={{ openBooking: (a) => { setArtist(a || ""); setOpen(true); } }}>
      {children}
      <BookingModal open={open} onClose={() => setOpen(false)} artist={artist} />
    </BookingContext.Provider>
  );
}
