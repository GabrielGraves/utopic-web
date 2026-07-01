import artists from "@/data/artists.json";
import ArtistClient from "./client";

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug || artist.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function ArtistPage({ params }) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const artist = artists.find(
    (a) => (a.slug || a.name.toLowerCase().replace(/\s+/g, "-")) === decoded
  );

  if (!artist) return null;

  return <ArtistClient artist={artist} />;
}
