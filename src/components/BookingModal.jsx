"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import artists from "@/data/artists.json";

export default function BookingModal({ open, onClose, artist: initialArtist }) {
  const { t } = useLang();
  const [code, setCode] = useState("+54");
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
    if (Object.values(form).some((v) => !v.trim?.() && v !== undefined)) {
      alert(t("booking.error"));
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, telefono: `${code} ${form.telefono}` }),
      });
      if (!res.ok) throw new Error("Server error");
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
              {done ? t("booking.sent") : t("booking.title")}
            </h2>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {done ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4 text-green-500">✓</div>
              <p className="text-on-surface-variant text-lg">{t("booking.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <select name="artista" value={form.artista} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                <option value="">{t("booking.artist")}</option>
                {artists.map((a) => <option key={a.id} value={a.name}>{a.name}</option>)}
              </select>
              <input name="fecha" type="date" value={form.fecha} onChange={handleChange} required className={inputClass} />
              <input name="ciudad" placeholder={t("booking.city")} value={form.ciudad} onChange={handleChange} required className={inputClass} />
              <input name="productora" placeholder={t("booking.producer")} value={form.productora} onChange={handleChange} required className={inputClass} />
              <input name="club" placeholder={t("booking.club")} value={form.club} onChange={handleChange} required className={inputClass} />
              <input name="duracion" placeholder={t("booking.duration")} value={form.duracion} onChange={handleChange} required className={inputClass} />
              <input type="email" name="email" placeholder={t("booking.email")} value={form.email} onChange={handleChange} required className={inputClass} />
              <div className="flex gap-2 items-start">
                <select value={code} onChange={(e) => setCode(e.target.value)} className="w-[140px] shrink-0 bg-surface-container-low border border-white/10 rounded-xl px-3 py-4 text-white font-body text-sm focus:outline-none focus:border-primary/50 transition-colors">
                  <option value="+54">AR +54</option>
                  <option value="+34">ES +34</option>
                  <option value="+1">US +1</option>
                  <option value="+52">MX +52</option>
                  <option value="+57">CO +57</option>
                  <option value="+56">CL +56</option>
                  <option value="+51">PE +51</option>
                  <option value="+598">UY +598</option>
                  <option value="+44">UK +44</option>
                  <option value="+49">DE +49</option>
                  <option value="+33">FR +33</option>
                  <option value="+39">IT +39</option>
                  <option value="+31">NL +31</option>
                  <option value="+32">BE +32</option>
                  <option value="+48">PL +48</option>
                  <option value="+351">PT +351</option>
                  <option value="+41">CH +41</option>
                  <option value="+43">AT +43</option>
                  <option value="+420">CZ +420</option>
                  <option value="+40">RO +40</option>
                  <option value="+36">HU +36</option>
                  <option value="+46">SE +46</option>
                  <option value="+45">DK +45</option>
                  <option value="+55">BR +55</option>
                  <option value="+593">EC +593</option>
                  <option value="+58">VE +58</option>
                </select>
                <input name="telefono" type="tel" placeholder={t("booking.phone")} value={form.telefono} onChange={handleChange} required className={`${inputClass} flex-1`} />
              </div>
              <input name="lineup" placeholder={t("booking.lineup")} value={form.lineup} onChange={handleChange} required className={inputClass} />
              <input name="promotor" placeholder={t("booking.promotor")} value={form.promotor} onChange={handleChange} required className={inputClass} />
              <textarea name="mensaje" placeholder={t("booking.message")} value={form.mensaje} onChange={handleChange} rows={3} required className={`${inputClass} resize-none`} />
              <button type="submit" disabled={sending}
                className="w-full py-4 bg-primary text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_30px_rgba(77,166,255,0.4)] transition-all disabled:opacity-50 mt-2">
                {sending ? t("booking.sending") : t("booking.send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
