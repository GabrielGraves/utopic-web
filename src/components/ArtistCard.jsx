import Link from "next/link";

export default function ArtistCard({ artist }) {
  const { name, genres, photo_url } = artist;
  const slug = artist.slug || name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/artist/${slug}`}
      className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1 shadow-2xl h-full block"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          src={photo_url}
          alt={name}
          loading="lazy"
        />
        <div className="absolute inset-0 artist-card-gradient" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 pt-0">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-2 block">
            {genres || "ELECTRONIC"}
          </span>
          <h3 className="font-headline text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            {name}
          </h3>
          <span className="block w-full text-center py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-label text-[10px] uppercase tracking-widest rounded-xl hover:bg-primary hover:text-on-primary-fixed hover:border-transparent transition-all duration-300">
            View Profile
          </span>
        </div>
      </div>
    </Link>
  );
}
