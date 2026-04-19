import Link from "next/link";
import { FooterWave } from "@/components/ui/FooterWave";
import { siteConfig } from "@/data/site";
import { defaultWhatsappMessage, whatsappHref } from "@/lib/whatsapp";

export function SiteFooter() {
  const wa = whatsappHref(defaultWhatsappMessage());
  const year = new Date().getFullYear();

  return (
    <>
      <FooterWave />
      <footer className="relative z-10 mt-auto bg-[var(--pk-footer)] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-x-8 sm:px-6 md:grid-cols-3 md:gap-10 lg:px-8">
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/80">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-white/70">
              {siteConfig.city}, {siteConfig.region}, Argentina
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Consultas</p>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <span className="text-white/60">Teléfono: </span>
                {siteConfig.phoneDisplay}
              </li>
              <li>
                <span className="text-white/60">Email: </span>
                <a className="underline underline-offset-2" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-white/60">Instagram: </span>
                <a
                  className="underline underline-offset-2"
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @pplanetakayak
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 font-medium text-emerald-200 underline-offset-2 hover:underline"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Legales</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-white/85 underline-offset-2 hover:underline" href="/legal">
                  Privacidad y términos
                </Link>
              </li>
              <li>
                <Link className="text-white/85 underline-offset-2 hover:underline" href="/informacion">
                  Información importante
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/55">
            © {year} {siteConfig.shortName}. Paseos en kayak en Bariloche.
          </p>
        </div>
      </footer>
    </>
  );
}
