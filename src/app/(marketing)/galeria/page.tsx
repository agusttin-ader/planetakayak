import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { IMAGE_QUALITY } from "@/lib/image-quality";

export const metadata: Metadata = {
  title: "Galería",
  description: `Fotos de paseos en kayak en Bariloche con ${siteConfig.shortName}.`,
  openGraph: {
    title: `Galería · ${siteConfig.shortName}`,
    description: "Paisajes del Nahuel Huapi y momentos en el agua.",
    url: "/galeria",
  },
  alternates: { canonical: "/galeria" },
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    alt: "Kayak en agua turquesa con montañas de fondo",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    alt: "Lago y bosque en la Patagonia",
  },
  {
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
    alt: "Cordillera reflejada en el lago",
  },
  {
    src: "https://images.unsplash.com/photo-1504280396547-39c4c2b5b4a7?w=1200&q=80",
    alt: "Campamento y naturaleza junto al agua",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    alt: "Montañas y niebla matinal",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "Cumbres nevadas sobre el lago",
  },
] as const;

export default function GaleriaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--pk-ink)]">Galería</h1>
        <p className="mt-4 text-lg text-[var(--pk-ink-muted)]">
          Algunas postales del Nahuel Huapi, el río y los cerros que acompañan cada salida.
        </p>
      </header>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img) => (
          <li
            key={img.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5 shadow-sm"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={IMAGE_QUALITY.gallery}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-sm text-[var(--pk-ink-muted)]">
        Más fotos y videos del día a día en{" "}
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline"
        >
          Instagram
        </a>
        .
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/tours"
          className="inline-flex rounded-full bg-[var(--pk-lake-deep)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--pk-lake)]"
        >
          Ver tours
        </Link>
      </div>
    </div>
  );
}
