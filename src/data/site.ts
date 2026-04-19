export const siteConfig = {
  name: "Planeta Kayak Bariloche",
  shortName: "Planeta Kayak",
  tagline:
    "Somos Planeta Kayak: te llevamos a pasear en kayak por distintos circuitos de Bariloche y el Parque Nacional Nahuel Huapi. Entrá y mirá las promos vigentes.",
  description:
    "Servicio de paseo en kayak en Bariloche. Excursiones Brazo Campanario, Isla Huemul y Río Limay. Ubicados en San Carlos de Bariloche, Argentina.",
  paymentNote: "Aceptamos todo tipo de pago en nuestras excursiones.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://planetakayak.com.ar",
  locale: "es_AR",
  language: "es",
  city: "San Carlos de Bariloche",
  region: "Río Negro",
  postalCode: "R8400",
  country: "AR",
  instagram: "https://www.instagram.com/pplanetakayak/",
  phoneDisplay: "+54 9 294 577 936",
  whatsappE164: "549294577936",
  email: "info@planetakayak.com.ar",
  coordinates: {
    latitude: -41.1335,
    longitude: -71.3103,
  },
} as const;
