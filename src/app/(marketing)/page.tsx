import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { CtaWhatsapp } from "@/components/cta/CtaWhatsapp";
import { Reveal } from "@/components/motion/Reveal";
import { TourGridMotion } from "@/components/tours/TourGridMotion";
import { siteConfig } from "@/data/site";
import { defaultWhatsappMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Inicio",
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} — Kayak en Bariloche`,
    description: siteConfig.tagline,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.35rem,2vw+1rem,1.875rem)] font-bold tracking-tight text-[var(--pk-ink)]">
                Tours destacados
              </h2>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-[var(--pk-ink-muted)] md:text-[1.05rem]">
                Brazo Campanario, Isla Huemul y Río Limay: tres salidas para descubrir el Nahuel Huapi y el
                Limay con guías y todo el equipo incluido.
              </p>
            </div>
            <Link
              href="/precios"
              className="inline-flex min-h-[48px] shrink-0 items-center text-sm font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline"
            >
              Ver precios →
            </Link>
          </Reveal>
          <TourGridMotion />
        </div>
        <WaveDivider fillClassName="fill-[var(--pk-mist)]" />
      </section>

      <Reveal>
        <div className="bg-[var(--pk-mist)] pb-16 pt-10 md:pb-20 md:pt-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-[clamp(1.35rem,2vw+1rem,1.875rem)] font-bold tracking-tight text-[var(--pk-ink)]">
                Seguinos en Instagram
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--pk-ink-muted)] md:text-[1.05rem]">
                Condiciones del lago, fotos del día y novedades del equipo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[var(--pk-accent-deep)] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--pk-accent)] sm:flex-none"
              >
                Ir a @pplanetakayak
              </a>
              <CtaWhatsapp
                message={defaultWhatsappMessage()}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[var(--pk-ink)] shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition hover:bg-[var(--pk-accent-soft)] sm:flex-none"
              >
                Coordinar por WhatsApp
              </CtaWhatsapp>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 pb-[max(7rem,env(safe-area-inset-bottom)+5rem)] pt-14 sm:px-6 md:pb-36 md:pt-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.35rem,2vw+1rem,1.875rem)] font-bold tracking-tight text-[var(--pk-ink)]">
            Antes de salir al agua
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--pk-ink-muted)] md:text-lg">
            Qué llevar, seguridad y políticas: todo en un solo lugar para llegar tranquilo al encuentro.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/informacion"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--pk-accent-deep)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--pk-accent)]"
            >
              Información importante
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline"
            >
              Ubicación y contacto
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
