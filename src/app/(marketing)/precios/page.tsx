import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { formatPriceArs, tours } from "@/data/tours";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Valores de excursiones Planeta Kayak en Bariloche — Brazo Campanario, Isla Huemul y Río Limay. Consultá por WhatsApp.",
  openGraph: {
    title: `Precios · ${siteConfig.shortName}`,
    description: `Brazo Campanario, Isla Huemul y Río Limay. ${siteConfig.paymentNote}`,
    url: "/precios",
  },
  alternates: { canonical: "/precios" },
};

export default function PreciosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <Reveal>
        <header>
          <h1 className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] font-bold tracking-tight text-[var(--pk-ink)]">
            Precios
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-[var(--pk-ink-muted)] md:text-lg">
            Valores vigentes por persona. Descuentos y condiciones particulares los coordinamos al reservar.
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.06} className="mt-10">
        <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="inline-block min-w-full rounded-2xl bg-white align-middle ring-1 ring-black/[0.06]">
            <table className="w-full min-w-[280px] text-left text-sm">
              <caption className="border-b border-black/[0.06] bg-[var(--pk-mist)] px-4 py-3 text-left text-base font-semibold text-[var(--pk-ink)]">
                Excursiones — precios por persona
              </caption>
              <thead className="bg-black/[0.02] text-xs font-semibold uppercase tracking-wide text-[var(--pk-ink-soft)]">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Excursión
                  </th>
                  <th scope="col" className="px-4 py-3 text-right">
                    Precio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] text-[var(--pk-ink-muted)]">
                {tours.map((tour) => (
                  <tr key={tour.slug}>
                    <th scope="row" className="px-4 py-4 font-medium text-[var(--pk-ink)]">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="hover:text-[var(--pk-accent-deep)] hover:underline"
                      >
                        {tour.name}
                      </Link>
                    </th>
                    <td className="px-4 py-4 text-right tabular-nums text-[var(--pk-ink)]">
                      {formatPriceArs(tour.priceArs)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <ul className="space-y-3 text-sm leading-relaxed text-[var(--pk-ink-muted)]">
          <li>
            <strong className="font-semibold text-[var(--pk-ink)]">Medios de pago:</strong>{" "}
            {siteConfig.paymentNote}
          </li>
          <li>
            <strong className="font-semibold text-[var(--pk-ink)]">Descuentos:</strong> preguntá por
            beneficios para grupos y Turismo Nacional en Brazo Campanario e Isla Huemul; en Río Limay, por
            opciones sin traslado cuando haya promociones vigentes.
          </li>
        </ul>
      </Reveal>

      <Reveal delay={0.12} className="mt-10">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/informacion"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--pk-forest)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--pk-forest-soft)]"
          >
            Información importante
          </Link>
          <Link
            href="/contacto"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--pk-accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--pk-accent-deep)] hover:bg-[var(--pk-accent)] hover:text-white"
          >
            Contacto
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
