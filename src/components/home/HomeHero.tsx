"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { CtaWhatsapp } from "@/components/cta/CtaWhatsapp";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { siteConfig } from "@/data/site";
import { easeHero, easeOutExpo } from "@/lib/motion-ease";

const bgEase = easeOutExpo;
const contentEase = easeHero;

export function HomeHero() {
  const reduce = useReducedMotion();

  const contentVariants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { staggerChildren: 0, delayChildren: 0 }
        : {
            staggerChildren: 0.038,
            delayChildren: 0.02,
          },
    },
  };

  const lineVariants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.4, ease: contentEase },
    },
  };

  const fadeOnlyVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { duration: 0.32, ease: contentEase },
    },
  };

  const ctaVariants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.38, ease: contentEase },
    },
  };

  return (
    <section className="relative isolate min-h-[85svh] overflow-hidden bg-[var(--pk-sky)] md:min-h-[min(88vh,920px)]">
      <motion.div
        className="pointer-events-none absolute inset-0 origin-center will-change-transform"
        initial={reduce ? undefined : { scale: 1.05 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{
          duration: reduce ? 0 : 1.15,
          ease: bgEase,
        }}
      >
        <Image
          src="/images/hero-1.jpg"
          alt="Kayak en el Nahuel Huapi, Bariloche"
          fill
          priority
          quality={92}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-6xl flex-col justify-end px-4 pb-8 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4.5rem)] sm:px-6 md:min-h-[min(88vh,920px)] md:pb-10 md:pt-28 lg:px-8">
        <motion.div
          className="max-w-2xl pb-2 md:pb-8"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/95 drop-shadow sm:text-sm"
            variants={lineVariants}
          >
            Nahuel Huapi · Bariloche
          </motion.p>
          <motion.h1
            className="mt-2 max-w-[22ch] text-[clamp(1.85rem,5.2vw+0.55rem,3.75rem)] font-bold leading-[1.08] tracking-tight text-white drop-shadow-md md:max-w-none"
            variants={lineVariants}
          >
            Kayak entre espejos de agua y montaña
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-white/95 drop-shadow sm:text-lg"
            variants={lineVariants}
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.p
            className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 drop-shadow"
            variants={fadeOnlyVariants}
          >
            {siteConfig.paymentNote}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            variants={ctaVariants}
          >
            <CtaWhatsapp className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#25D366] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#20bd5a] sm:flex-none">
              Consultar por WhatsApp
            </CtaWhatsapp>
            <Link
              href="/tours"
              className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-white/50 bg-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/30 sm:flex-none"
            >
              Ver tours
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <WaveDivider fillClassName="fill-white" />
    </section>
  );
}
