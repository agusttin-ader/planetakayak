import { siteConfig } from "@/data/site";

export function getWhatsAppE164(): string {
  const env = process.env.NEXT_PUBLIC_WHATSAPP_E164?.trim();
  return env || siteConfig.whatsappE164;
}

export function whatsappHref(text: string): string {
  const e164 = getWhatsAppE164();
  return `https://wa.me/${e164}?text=${encodeURIComponent(text)}`;
}

export function whatsappLinkWithText(text: string): { href: string } {
  return { href: whatsappHref(text) };
}

export function defaultWhatsappMessage(): string {
  return `Hola ${siteConfig.shortName}, quiero consultar disponibilidad y precios.`;
}
