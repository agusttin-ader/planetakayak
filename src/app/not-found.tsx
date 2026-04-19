import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <>
      <LocalBusinessJsonLd />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--pk-ink-soft)]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold text-[var(--pk-ink)]">
            Página no encontrada
          </h1>
          <p className="mt-2 max-w-md text-[var(--pk-ink-muted)]">
            El enlace puede haber cambiado. Volvé al inicio para seguir navegando.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--pk-lake-deep)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--pk-lake)]"
          >
            Ir al inicio
          </Link>
          <p className="sr-only">{siteConfig.name}</p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
