import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Información importante",
  description:
    "Medios de pago, seguridad según Prefectura y Parques Nacionales, qué llevar y clima en Bariloche. Planeta Kayak.",
  openGraph: {
    title: `Información importante · ${siteConfig.shortName}`,
    description:
      "Lo esencial antes de tu excursión: equipamiento, pagos y recomendaciones en el Nahuel Huapi.",
    url: "/informacion",
  },
  alternates: { canonical: "/informacion" },
};

export default function InformacionPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--pk-ink)]">
          Información importante
        </h1>
        <p className="mt-4 text-lg text-[var(--pk-ink-muted)]">
          Todo lo que conviene saber antes de salir al agua. Para fechas y cupos, escribinos por WhatsApp.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        <section aria-labelledby="pagos">
          <h2 id="pagos" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Pagos
          </h2>
          <p className="mt-4 text-[var(--pk-ink-muted)]">{siteConfig.paymentNote}</p>
        </section>

        <section aria-labelledby="seguridad">
          <h2 id="seguridad" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Seguridad y equipo
          </h2>
          <p className="mt-4 text-[var(--pk-ink-muted)]">
            En cada excursión incluimos clase previa de habilidades básicas de remado y equipos para
            seguridad, rescate y confort según las normas de la Prefectura Naval Argentina y Parques
            Nacionales.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--pk-ink-muted)]">
            <li>Seguí las indicaciones del guía y el uso del chaleco y demás elementos.</li>
            <li>La actividad puede modificarse o posponerse si el clima o el río/lago no están en condiciones.</li>
          </ul>
        </section>

        <section aria-labelledby="que-llevar">
          <h2 id="que-llevar" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Qué llevar
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--pk-ink-muted)]">
            <li>Ropa cómoda, segunda muda y protección solar.</li>
            <li>Calzado que pueda mojarse o sandalias ajustadas.</li>
            <li>Toalla pequeña y bolsa seca para objetos personales si aplica.</li>
          </ul>
        </section>

        <section aria-labelledby="rio-limay">
          <h2 id="rio-limay" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Excursión Río Limay
          </h2>
          <p className="mt-4 text-[var(--pk-ink-muted)]">
            Incluye traslado desde Bariloche a cargo de la empresa, con paradas a pedido (por ejemplo en el
            “anfiteatro del Limay”). La búsqueda es por la mañana a horario a convenir y el regreso a la
            ciudad es aproximadamente a las 19 h. Consultá por descuentos sin traslado si corresponde.
          </p>
        </section>

        <section aria-labelledby="clima">
          <h2 id="clima" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Clima en Bariloche
          </h2>
          <p className="mt-4 text-[var(--pk-ink-muted)]">
            El viento y la nubosidad cambian rápido. En temporada alta conviene reservar con anticipación.
          </p>
        </section>

        <section aria-labelledby="cancelaciones">
          <h2 id="cancelaciones" className="text-2xl font-semibold text-[var(--pk-ink)]">
            Cancelaciones y políticas
          </h2>
          <p className="mt-4 text-[var(--pk-ink-muted)]">
            Las condiciones de cancelación, señas y reprogramación las confirma el equipo al momento de la
            reserva.
          </p>
        </section>
      </div>

      <p className="mt-14 text-center text-sm text-[var(--pk-ink-muted)]">
        ¿Dudas?{" "}
        <Link className="font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline" href="/contacto">
          Escribinos
        </Link>
        .
      </p>
    </div>
  );
}
