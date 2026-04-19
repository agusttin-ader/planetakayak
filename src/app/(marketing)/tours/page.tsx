import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { TourGridMotion } from "@/components/tours/TourGridMotion";
import { siteConfig } from "@/data/site";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tours en kayak",
  description: `Excursiones en kayak en Bariloche: ${tours.map((t) => t.name).join(", ")}. ${siteConfig.shortName}.`,
  openGraph: {
    title: `Tours en kayak · ${siteConfig.shortName}`,
    description: `Elegí tu experiencia en el Nahuel Huapi: ${tours.map((t) => t.name).join(", ")}.`,
    url: "/tours",
  },
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <Reveal className="max-w-3xl">
        <h1 className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] font-bold tracking-tight text-[var(--pk-ink)]">
          Tours en kayak
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--pk-ink-muted)] md:text-lg">
          Brazo Campanario, Isla Huemul y Río Limay: elegí la salida que mejor encaje con tu tiempo en
          Bariloche. Todas incluyen clase previa de remado y equipamiento según Prefectura Naval Argentina y
          Parques Nacionales.
        </p>
      </Reveal>
      <TourGridMotion className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-14 md:grid-cols-3 md:gap-8" />
    </div>
  );
}
