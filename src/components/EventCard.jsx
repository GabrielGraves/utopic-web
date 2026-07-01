const STATUS_LABELS = {
  active: "Activo",
  draft: "Borrador",
};

export default function EventCard({ event }) {
  const {
    series_name,
    chapter,
    title,
    date,
    venue,
    headliners,
    co_producers,
    status,
    flyer_url,
    ticket_link,
  } = event;

  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 border border-white/5 hover:border-primary/30">
      <div className="relative aspect-video overflow-hidden bg-black">
        {flyer_url && (
          <img src={flyer_url} alt={title} className="absolute inset-0 w-full h-full object-contain" />
        )}
        {!flyer_url && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-headline font-bold text-base tracking-[0.3em] text-on-surface-variant uppercase select-none opacity-60">
              {series_name}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-background/80 text-white rounded-md border border-white/10 backdrop-blur-sm">
          {STATUS_LABELS[status] || status}
        </span>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
            {series_name}
          </span>
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            {chapter}
          </span>
        </div>

        <h3 className="font-headline text-sm font-bold tracking-tight mb-1.5 uppercase leading-tight">
          {title}
        </h3>

        <div className="space-y-0 font-label text-[10px] text-on-surface-variant mb-2">
          <p>{formattedDate}</p>
          <p>{venue}</p>
        </div>

        <div className="space-y-0.5 mb-2">
          <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">
            {headliners.join(" · ")}
          </p>
          {co_producers?.length > 0 && (
            <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">
              Con {co_producers.join(" · ")}
            </p>
          )}
        </div>

        {ticket_link ? (
          <a
            href={ticket_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-1.5 rounded-lg border border-primary/20 bg-surface-variant/50 text-white font-headline text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary-fixed hover:border-primary transition-all duration-300"
          >
            Tickets
          </a>
        ) : (
          <button
            disabled
            className="block w-full text-center py-1.5 rounded-lg border border-white/10 text-on-surface-variant font-headline text-[10px] uppercase tracking-[0.2em] cursor-not-allowed"
          >
            Próximamente
          </button>
        )}
      </div>
    </article>
  );
}
