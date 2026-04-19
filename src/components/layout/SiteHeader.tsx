"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";
import { mainNavLinks } from "@/components/layout/nav-links";
import { easeOutExpo } from "@/lib/motion-ease";

function navLinkDesktop(active: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-[var(--pk-lake)]/15 text-[var(--pk-lake-deep)]"
      : "text-[var(--pk-ink-muted)] hover:bg-black/5 hover:text-[var(--pk-ink)]",
  ].join(" ");
}

function navLinkMobile(active: boolean) {
  return [
    "flex min-h-[48px] items-center rounded-xl px-3 py-3 text-base font-medium transition-colors active:bg-black/[0.06]",
    active
      ? "bg-[var(--pk-lake)]/15 text-[var(--pk-lake-deep)]"
      : "text-[var(--pk-ink-muted)] hover:bg-black/5 hover:text-[var(--pk-ink)]",
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Ir al contenido principal
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:gap-4 md:py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-[48px] max-w-[min(100%,260px)] items-center rounded-lg px-3 py-2 text-lg font-semibold tracking-tight text-[var(--pk-ink)] transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] sm:max-w-none sm:px-4 sm:text-xl"
          aria-label="Ir al inicio"
          scroll
          onClick={(e) => {
            setOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: reduce ? "auto" : "smooth",
              });
            }
          }}
        >
          <span className="truncate">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Principal">
          {mainNavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navLinkDesktop(pathname === href)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-full bg-[var(--pk-mist)] p-2.5 text-[var(--pk-ink)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-nav"
              className="relative z-50 border-t border-black/[0.06] bg-white/98 shadow-lg shadow-black/5 md:hidden"
              role="dialog"
              aria-modal="true"
              initial={reduce ? undefined : { opacity: 0, y: -12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: easeOutExpo }}
            >
              <nav className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-4 sm:px-6" aria-label="Principal móvil">
                {mainNavLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={navLinkMobile(pathname === href)}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
