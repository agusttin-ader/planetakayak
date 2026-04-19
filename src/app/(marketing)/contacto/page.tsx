import type { Metadata } from "next";
import { CtaWhatsapp } from "@/components/cta/CtaWhatsapp";
import { siteConfig } from "@/data/site";
import { defaultWhatsappMessage, whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacto de ${siteConfig.name}: WhatsApp, email y ubicación en San Carlos de Bariloche.`,
  openGraph: {
    title: `Contacto · ${siteConfig.shortName}`,
    description: "Escribinos para coordinar tu salida en kayak.",
    url: "/contacto",
  },
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const wa = whatsappHref(defaultWhatsappMessage());

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--pk-ink)]">Contacto</h1>
        <p className="mt-4 text-lg text-[var(--pk-ink-muted)]">
          Coordinamos cupos y horarios por mensaje. También podés escribirnos por email.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <section id="consultas" className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[var(--pk-ink)]">Consultas</h2>
          <dl className="mt-6 space-y-4 text-[var(--pk-ink-muted)]">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--pk-ink-soft)]">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  className="font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir chat en WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--pk-ink-soft)]">
                Teléfono
              </dt>
              <dd className="mt-1">{siteConfig.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--pk-ink-soft)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  className="font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8">
            <CtaWhatsapp className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a]">
              Consultar por WhatsApp
            </CtaWhatsapp>
          </div>
        </section>

        <section aria-labelledby="ubicacion" className="overflow-hidden rounded-2xl border border-black/10 bg-[var(--pk-surface)] shadow-sm">
          <h2 id="ubicacion" className="sr-only">
            Ubicación
          </h2>
          <div className="aspect-video w-full bg-black/10">
            <iframe
              title="Mapa de San Carlos de Bariloche"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${siteConfig.coordinates.longitude - 0.08}%2C${siteConfig.coordinates.latitude - 0.06}%2C${siteConfig.coordinates.longitude + 0.08}%2C${siteConfig.coordinates.latitude + 0.06}&layer=mapnik&marker=${siteConfig.coordinates.latitude}%2C${siteConfig.coordinates.longitude}`}
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-[var(--pk-ink)]">{siteConfig.city}</p>
            <p className="mt-1 text-sm text-[var(--pk-ink-muted)]">
              Punto de referencia en la zona. El lugar exacto de encuentro lo coordinamos al confirmar tu
              reserva.
            </p>
            <p className="mt-4 text-xs text-[var(--pk-ink-soft)]">Mapa © OpenStreetMap contributors.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
