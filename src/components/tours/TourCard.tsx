import Image from "next/image";
import Link from "next/link";
import { IMAGE_QUALITY } from "@/lib/image-quality";
import { formatPriceArs, type Tour } from "@/data/tours";

type Props = {
  tour: Tour;
};

export function TourCard({ tour }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white transition-[transform] duration-300 hover:-translate-y-0.5">
      <Link
        href={`/tours/${tour.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pk-accent)] focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
          <Image
            src={tour.coverImageSrc}
            alt={tour.coverAlt}
            fill
            quality={IMAGE_QUALITY.tourCover}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 400px"
            className={`object-cover ${tour.coverObjectPositionClass ?? "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent pb-4 pl-5 pr-5 pt-14">
            <p className="inline-flex rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white">
              {tour.level}
            </p>
          </div>
        </div>
        <div className="space-y-2 px-1 pt-5">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--pk-ink)] group-hover:text-[var(--pk-accent-deep)]">
            {tour.name}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--pk-ink-muted)]">
            {tour.shortDescription}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--pk-ink-soft)]">
              {tour.durationLabel}
            </p>
            <p className="text-base font-semibold text-[var(--pk-accent-deep)]">
              Desde {formatPriceArs(tour.priceArs)}
            </p>
          </div>
          <span className="inline-flex pt-1 text-sm font-semibold text-[var(--pk-accent-deep)]">
            Ver tour →
          </span>
        </div>
      </Link>
    </article>
  );
}
