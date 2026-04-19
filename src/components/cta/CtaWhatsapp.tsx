import type { ReactNode } from "react";
import { defaultWhatsappMessage, whatsappHref } from "@/lib/whatsapp";

type Props = {
  message?: string;
  className?: string;
  children: ReactNode;
};

export function CtaWhatsapp({ message, className, children }: Props) {
  const text = message ?? defaultWhatsappMessage();
  const href = whatsappHref(text);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
