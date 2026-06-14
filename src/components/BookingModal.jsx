"use client";

import { useState, useEffect } from "react";
import artists from "@/data/artists.json";

export default function BookingModal({ open, onClose, artist: initialArtist }) {
  const [form, setForm] = useState({
    artista: "",
    fecha: "",
    ciudad: "",
    productora: "",
    club: "",
    duracion: "",
    email: "",
    telefono: "",
    lineup: "",
    promotor: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) setForm((f) => ({ ...f, artista: initialArtist || "" }));
  }, [open, initialArtist]);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setDone(true);
    } catch {
      alert("Error al enviar. Intentá de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full bg-surface-container-low border border-white/10 rounded-xl px-5 py-4 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <>
      <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-0 z-[210] flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-background border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_0_60px_rgba(77,166,255,0.15)] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tight">
              {done ? "Enviado" : "Book Now"}
            </h2>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {done ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-on-surface-variant text-lg">¡Gracias! Te respondemos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <select name="artista" value={form.artista} onChange={handleChange} className={`${inputClass} appearance-none`}>
                <option value="">Seleccionar Artista</option>
                {artists.map((a) => <option key={a.id} value={a.name}>{a.name}</option>)}
              </select>
              <input name="fecha" type="date" placeholder="Fecha" value={form.fecha} onChange={handleChange} className={inputClass} />
              <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} className={inputClass} />
              <input name="productora" placeholder="Productora" value={form.productora} onChange={handleChange} className={inputClass} />
              <input name="club" placeholder="Club" value={form.club} onChange={handleChange} className={inputClass} />
              <input name="duracion" placeholder="Duración del Set" value={form.duracion} onChange={handleChange} className={inputClass} />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className={inputClass} />
              <input name="telefono" placeholder="Número de Teléfono" value={form.telefono} onChange={handleChange} className={inputClass} />
              <input name="lineup" placeholder="Line Up Tentativo" value={form.lineup} onChange={handleChange} className={inputClass} />
              <input name="promotor" placeholder="Nombre del Promotor" value={form.promotor} onChange={handleChange} className={inputClass} />
              <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} />
              <button type="submit" disabled={sending}
                className="w-full py-4 bg-primary text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_30px_rgba(77,166,255,0.4)] transition-all disabled:opacity-50 mt-2">
                {sending ? "Enviando..." : "Enviar Consulta"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
