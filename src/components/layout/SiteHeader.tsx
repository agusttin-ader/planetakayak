"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";
import { mainNavLinks } from "@/components/layout/nav-links";
import { drawerPanelSpring, easeOutExpo } from "@/lib/motion-ease";

function navLinkDesktop(active: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-[var(--pk-lake)]/15 text-[var(--pk-lake-deep)]"
      : "text-[var(--pk-ink-muted)] hover:bg-black/5 hover:text-[var(--pk-ink)]",
  ].join(" ");
}

function navDrawerLink(active: boolean) {
  return [
    "flex min-h-[56px] items-center justify-between gap-4 rounded-xl px-4 py-4 text-lg leading-snug font-semibold tracking-tight transition-colors active:bg-black/[0.06] sm:text-xl",
    active ? "bg-[var(--pk-lake)]/15 text-[var(--pk-lake-deep)]" : "text-[var(--pk-ink)] hover:bg-black/[0.04]",
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

  function logoClick(e: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }

  const panelTransition = reduce ? { duration: 0.14, ease: easeOutExpo } : drawerPanelSpring;

  return (
    <header
      className={[
        "sticky top-0 z-40 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]",
        open && "shadow-none",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[160] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Ir al contenido principal
      </a>
      <div
        className={[
          "relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:gap-4 md:py-4 lg:px-8",
          open && "z-[130] bg-white md:z-auto md:bg-transparent",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Link
          href="/"
          className="inline-flex min-h-[48px] max-w-[min(100%,280px)] items-center rounded-lg px-3 py-2 text-xl font-semibold tracking-tight text-[var(--pk-ink)] transition-colors hover:bg-black/[0.04] active:bg-black/[0.06] sm:max-w-none sm:px-4"
          aria-label="Ir al inicio"
          scroll
          onClick={logoClick}
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
          className="inline-flex min-h-[52px] min-w-[52px] shrink-0 items-center justify-center rounded-lg p-3 text-[var(--pk-ink)] [-webkit-tap-highlight-color:transparent] outline-none transition-colors hover:bg-black/[0.05] active:bg-black/[0.08] focus-visible:ring-2 focus-visible:ring-[var(--pk-lake-deep)]/35 focus-visible:ring-offset-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="flex h-5 w-7 flex-col justify-between" aria-hidden>
            <span
              className={[
                "block h-[3.5px] w-full origin-center rounded-full bg-current transition-transform",
                reduce ? "duration-0" : "duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open && "translate-y-[8px] rotate-45",
              ]
                .filter(Boolean)
                .join(" ")}
            />
            <span
              className={[
                "block h-[3.5px] w-full rounded-full bg-current transition-opacity",
                reduce ? "duration-0" : "duration-200 ease-out",
                open && "opacity-0",
              ]
                .filter(Boolean)
                .join(" ")}
            />
            <span
              className={[
                "block h-[3.5px] w-full origin-center rounded-full bg-current transition-transform",
                reduce ? "duration-0" : "duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open && "-translate-y-[8px] -rotate-45",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="nav-panel"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
            className="fixed inset-0 z-[120] flex h-[100dvh] w-full max-w-[100vw] flex-col overflow-hidden bg-white pb-[env(safe-area-inset-bottom)] pt-[calc(env(safe-area-inset-top)+5rem)] outline-none ring-0 md:hidden"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={panelTransition}
          >
            <nav
              className="mx-auto min-h-0 w-full max-w-6xl flex-1 overflow-y-auto overscroll-contain px-5 pb-8 pt-2 sm:px-8"
              aria-label="Principal móvil"
            >
              {mainNavLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={navDrawerLink(pathname === href)}
                  onClick={() => setOpen(false)}
                >
                  <span>{label}</span>
                  <svg
                    className="h-6 w-6 shrink-0 text-[var(--pk-ink-soft)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
