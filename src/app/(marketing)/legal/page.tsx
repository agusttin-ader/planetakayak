import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad y términos",
  description: `Política de privacidad y términos de uso del sitio de ${siteConfig.name}.`,
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacidad y términos · ${siteConfig.shortName}`,
    description: "Información legal del sitio web.",
    url: "/legal",
  },
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--pk-ink)]">
          Privacidad y términos
        </h1>
        <p className="mt-4 text-[var(--pk-ink-muted)]">
          Información sobre el uso de este sitio y el tratamiento de datos cuando nos contactás por los
          canales indicados.
        </p>
      </header>

      <div className="mt-12 space-y-12 text-[var(--pk-ink-muted)]">
        <section aria-labelledby="privacidad">
          <h2 id="privacidad" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Privacidad
          </h2>
          <p className="mt-4 leading-relaxed">
            El hosting del sitio puede registrar datos técnicos habituales (por ejemplo tipo de navegador o
            dirección IP aproximada). Si en el futuro se incorporan herramientas de analítica o publicidad,
            se informará en esta página. Los mensajes enviados por WhatsApp se rigen por las políticas de
            Meta/WhatsApp.
          </p>
        </section>

        <section aria-labelledby="terminos">
          <h2 id="terminos" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Términos de uso
          </h2>
          <p className="mt-4 leading-relaxed">
            La información sobre tours y precios puede actualizarse según temporada, clima y disponibilidad.
            La contratación se formaliza por los medios que indique {siteConfig.shortName} al momento de la
            reserva.
          </p>
        </section>

        <section aria-labelledby="propiedad">
          <h2 id="propiedad" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Contenidos
          </h2>
          <p className="mt-4 leading-relaxed">
            Los textos y la identidad de marca pertenecen a {siteConfig.shortName} o se utilizan con la
            autorización correspondiente. Las imágenes cumplen una función ilustrativa en esta versión del
            sitio.
          </p>
        </section>
      </div>
    </div>
  );
}
