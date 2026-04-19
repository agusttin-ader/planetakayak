"use client";

import { TourCard } from "@/components/tours/TourCard";
import { TourCardReveal } from "@/components/motion/TourCardReveal";
import { tours } from "@/data/tours";

type Props = {
  className?: string;
};

export function TourGridMotion({ className = "mt-10 grid gap-10 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-8" }: Props) {
  return (
    <div className={className}>
      {tours.map((tour, i) => (
        <TourCardReveal key={tour.slug} index={i}>
          <TourCard tour={tour} />
        </TourCardReveal>
      ))}
    </div>
  );
}
