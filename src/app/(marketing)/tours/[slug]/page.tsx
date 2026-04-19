import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaWhatsapp } from "@/components/cta/CtaWhatsapp";
import { Reveal } from "@/components/motion/Reveal";
import { formatPriceArs, getTourBySlug, getAllTourSlugs } from "@/data/tours";
import { siteConfig } from "@/data/site";
import { IMAGE_QUALITY } from "@/lib/image-quality";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) {
    return { title: "Tour no encontrado" };
  }
  const title = tour.name;
  const description = tour.shortDescription;
  return {
    title,
    description,
    openGraph: {
      title: `${tour.name} · ${siteConfig.shortName}`,
      description,
      url: `/tours/${tour.slug}`,
      images: [{ url: tour.coverImageSrc, width: 1200, height: 630, alt: tour.coverAlt }],
    },
    alternates: { canonical: `/tours/${tour.slug}` },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return (
    <article className="pb-16 md:pb-24">
      <header className="bg-white">
        <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl bg-black/10 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.4)] sm:aspect-[21/9] sm:rounded-[1.75rem] md:aspect-[24/9] md:min-h-[240px]">
            <Image
              src={tour.coverImageSrc}
              alt={tour.coverAlt}
              fill
              priority
              quality={IMAGE_QUALITY.tourDetail}
              className={`object-cover ${tour.coverObjectPositionClass ?? "object-center"}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/85 sm:text-xs">
                {tour.durationLabel} · {tour.level}
              </p>
              <h1 className="mt-2 text-[clamp(1.5rem,4vw+0.5rem,2.25rem)] font-bold leading-tight tracking-tight text-white md:text-4xl">
                {tour.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 sm:gap-12 sm:px-6 md:grid-cols-[1fr,minmax(260px,340px)] md:gap-14 md:pt-16 lg:px-8">
        <div className="min-w-0 space-y-10 md:space-y-12">
          <Reveal>
            <section aria-labelledby="tour-desc">
              <h2 id="tour-desc" className="sr-only">
                Descripción del tour
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[var(--pk-ink-muted)] md:text-lg">
                {tour.detailParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section aria-labelledby="tour-includes">
              <h2 id="tour-includes" className="text-xl font-semibold text-[var(--pk-ink)] md:text-2xl">
                Qué incluye
              </h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--pk-ink-muted)] md:text-[1.05rem]">
                {tour.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section aria-labelledby="tour-highlights">
              <h2 id="tour-highlights" className="text-xl font-semibold text-[var(--pk-ink)] md:text-2xl">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-x-8 gap-y-3 text-sm text-[var(--pk-ink-muted)] sm:grid-cols-2 md:text-base">
                {tour.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[var(--pk-accent)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.04} className="md:self-start">
          <aside className="h-fit space-y-5 rounded-3xl bg-[var(--pk-mist)] px-5 py-7 sm:px-6 md:sticky md:top-24 md:max-w-none">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--pk-ink-soft)]">
                Precio de referencia
              </p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-[var(--pk-ink)] md:text-3xl">
                {formatPriceArs(tour.priceArs)}
              </p>
              <p className="mt-2 text-xs text-[var(--pk-ink-muted)]">
                Precio por persona. Puede variar según temporada o promociones al reservar.
              </p>
              {tour.discountNote ? (
                <p className="mt-3 text-sm font-medium text-[var(--pk-accent-deep)]">{tour.discountNote}</p>
              ) : null}
            </div>
            <div className="border-t border-black/10 pt-5">
              <p className="text-sm font-semibold text-[var(--pk-ink)]">¿Querés esta salida?</p>
              <p className="mt-2 text-sm text-[var(--pk-ink-muted)]">
                Coordinamos fecha y cupos por WhatsApp. Podés mencionar grupo y experiencia previa.
              </p>
            </div>
            <CtaWhatsapp
              message={tour.whatsappPrefill}
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3.5 text-center text-sm font-semibold text-white hover:bg-[#20bd5a]"
            >
              Consultar esta excursión
            </CtaWhatsapp>
            <Link
              href="/precios"
              className="block text-center text-sm font-semibold text-[var(--pk-lake-deep)] underline-offset-4 hover:underline"
            >
              Ver todos los precios
            </Link>
            <Link
              href="/informacion"
              className="block text-center text-sm font-medium text-[var(--pk-ink-muted)] hover:text-[var(--pk-ink)]"
            >
              Información importante antes de salir
            </Link>
          </aside>
        </Reveal>
      </div>
    </article>
  );
}
