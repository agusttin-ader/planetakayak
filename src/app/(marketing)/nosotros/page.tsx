import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `${siteConfig.name}: kayak en Bariloche y el Nahuel Huapi.`,
  openGraph: {
    title: `Nosotros · ${siteConfig.shortName}`,
    description:
      "Conocé los paisajes de Bariloche desde el agua. Planeta Kayak en San Carlos de Bariloche.",
    url: "/nosotros",
  },
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--pk-ink)]">Nosotros</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--pk-ink-muted)]">
          Somos <strong className="font-semibold text-[var(--pk-ink)]">{siteConfig.name}</strong>. Nacimos
          con la idea de que quien nos visite pueda conocer desde el agua los paisajes de Bariloche y del
          Parque Nacional Nahuel Huapi: una mirada distinta del cerro, el bosque y el lago.
        </p>
      </header>

      <div className="mt-12 space-y-10 text-[var(--pk-ink-muted)]">
        <section aria-labelledby="ubicacion">
          <h2 id="ubicacion" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Dónde estamos
          </h2>
          <p className="mt-4 leading-relaxed">
            Estamos en <strong className="font-semibold text-[var(--pk-ink)]">{siteConfig.city}</strong>,{" "}
            {siteConfig.region}, Argentina. Ofrecemos salidas en kayak en circuitos como Brazo Campanario,
            Isla Huemul y Río Limay.
          </p>
        </section>

        <section aria-labelledby="experiencia">
          <h2 id="experiencia" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Experiencia y estándares
          </h2>
          <p className="mt-4 leading-relaxed">
            Trabajamos con clase previa de remado y equipamiento acorde a las normas de la Prefectura Naval
            Argentina y Parques Nacionales. Miles de personas ya navegaron con nosotros y dejaron sus
            valoraciones en nuestras publicaciones y canales.
          </p>
        </section>

        <section aria-labelledby="pagos-nosotros">
          <h2 id="pagos-nosotros" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Pagos
          </h2>
          <p className="mt-4 leading-relaxed">{siteConfig.paymentNote}</p>
        </section>
      </div>

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/informacion"
          className="inline-flex rounded-full bg-[var(--pk-forest)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--pk-forest-soft)]"
        >
          Información importante
        </Link>
        <Link
          href="/contacto"
          className="inline-flex rounded-full bg-[var(--pk-accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--pk-accent-deep)] hover:bg-[var(--pk-accent)] hover:text-white"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
