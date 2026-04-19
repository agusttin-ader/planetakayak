export type TourLevel = "iniciación" | "intermedio" | "avanzado";

export type Tour = {
  slug: string;
  name: string;
  priceArs: number;
  shortDescription: string;
  durationLabel: string;
  level: TourLevel;
  includes: string[];
  highlights: string[];
  detailParagraphs: string[];
  coverImageSrc: string;
  coverAlt: string;
  coverObjectPositionClass?: string;
  whatsappPrefill: string;
  discountNote?: string;
};

export function formatPriceArs(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const tours: Tour[] = [
  {
    slug: "brazo-campanario",
    name: "Brazo Campanario",
    priceArs: 110_000,
    shortDescription:
      "El mismo brazo que se ve desde el mirador: playas de arena y vista a los cerros López, Catedral, Otto y más.",
    durationLabel: "Nahuel Huapi · consultar horarios",
    level: "iniciación",
    includes: [
      "Clase previa de habilidades básicas de remado",
      "Equipos para seguridad, rescate y confort según normas de la Prefectura Naval Argentina y Parques Nacionales",
    ],
    highlights: [
      "Paradas en playas de arena",
      "Vista a cerros como López, Bella Vista, Catedral y Millaqueo",
      "Recorrido por el brazo del lago",
    ],
    detailParagraphs: [
      "Brazo Campanario: se recorre el brazo que es el mismo que se ve desde el famoso mirador; tiene varias playas, algunas de arena (se puede ir parando en todas) y vista a los principales cerros: López, Bella Vista, Catedral, Capilla, Millaqueo, Otto, entre otros.",
      "Se incluye una clase previa de habilidades básicas de remado. Se proveen todos los equipos para seguridad, rescate y confort conforme a las normas de la Prefectura Naval Argentina y Parques Nacionales.",
    ],
    coverImageSrc: "/images/tour1.jpg",
    coverAlt: "Kayak en el lago con montañas de fondo en Bariloche",
    whatsappPrefill:
      "Hola Planeta Kayak, quiero consultar la excursión Brazo Campanario. Fecha tentativa: ",
    discountNote: "Consultá por descuentos a grupos y Turismo Nacional.",
  },
  {
    slug: "isla-huemul",
    name: "Isla Huemul",
    priceArs: 150_000,
    shortDescription:
      "Veriles, paredones y playas; aguas transparentes, navegación sobre el Don Luis e historia del proyecto Huemul.",
    durationLabel: "Nahuel Huapi · consultar horarios",
    level: "iniciación",
    includes: [
      "Clase previa de habilidades básicas de remado",
      "Equipos para seguridad, rescate y confort según normas de la Prefectura Naval Argentina y Parques Nacionales",
    ],
    highlights: [
      "Embarcación hundida el Don Luis",
      "Paredones bajo y sobre el agua",
      "Historia del proyecto Huemul",
    ],
    detailParagraphs: [
      "Isla Huemul: se cruza a la isla recorriendo en particular sus veriles, paredones y distintas playas. Se puede navegar sobre una embarcación hundida (el Don Luis). Suele cautivar con la transparencia de sus aguas, a varios metros de profundidad.",
      "Navegar sobre montañas: el pasado de hielo del Nahuel Huapi resulta evidente al navegar la isla Huemul. Un glaciar de 600 metros sobre el actual lago cubría los cordones montañosos, hasta que en estado líquido definió este cuerpo de agua. Por eso la continuidad de la montaña se observa en la isla en sus paredones de hasta 40 metros de altura, tanto por fuera como debajo del agua, lo cual desde un kayak —y singularmente desde esta embarcación— se puede disfrutar por completo.",
      "Es una excursión completa y sorprendente no solo en la belleza natural sino muy rica en historia. El proyecto Huemul es el origen de la ciencia y la tecnología en el país.",
      "Siempre se incluye una clase previa de habilidades básicas de remado. Se proveen todos los equipos para seguridad, rescate y confort conforme a las normas de la Prefectura Naval Argentina y Parques Nacionales.",
    ],
    coverImageSrc: "/images/hero-2.jpg",
    coverAlt: "Kayak en el Nahuel Huapi, vista desde la embarcación",
    whatsappPrefill:
      "Hola Planeta Kayak, quiero consultar la excursión Isla Huemul. Fecha tentativa: ",
    discountNote: "Consultá por descuentos a grupos y Turismo Nacional.",
  },
  {
    slug: "rio-limay",
    name: "Río Limay",
    priceArs: 275_000,
    shortDescription:
      "Descenso del río con traslado desde Bariloche; Valle Encantado, formaciones rocosas y picada regional en Confluencia.",
    durationLabel: "Jornada completa · salida mañana · regreso ~19 h",
    level: "intermedio",
    includes: [
      "Traslado a cargo de la empresa (circuito según programa vigente)",
      "Recorrido sobre el agua en el tramo descripto en la excursión",
      "Picada regional en Confluencia al finalizar el recorrido acuático",
      "Paradas en el traslado a pedido —por ejemplo el “anfiteatro del Limay”",
    ],
    highlights: [
      "Valle Encantado en ~6 km de recorrido",
      "Formaciones como El Dedo de Dios o Los leones enamorados",
      "Playas de arena para mates y fotos",
    ],
    detailParagraphs: [
      "Se desciende sobre un tramo del río a 67 km de Bariloche (20 km aprox. de Villa Llanquín) para ingresar en los 6 km de recorrido sobre el Valle Encantado y observar, además de toda la belleza que ofrece el río y su cuerpo montañoso, el escenario de formaciones rocosas que simulan El Dedo de Dios, Los leones enamorados, etc. Son varias las playas de arena sobre las que se puede descender por descanso, fotos o mates. Finalmente en Confluencia espera el desembarco con una exquisita picada regional.",
      "El traslado está a cargo de la empresa. Durante el mismo se realizan paradas a pedido de los pasajeros; por ejemplo en el “anfiteatro del Limay”, lugar privilegiado para contemplar y hacer fotos.",
      "Se busca a los pasajeros a horario a convenir durante la mañana y se regresa aproximadamente a la ciudad a las 19 h.",
      "Podés consultar promociones o descuentos sin traslado según lo que tengamos vigente al momento de reservar.",
    ],
    coverImageSrc: "/images/tour3.jpg",
    coverAlt: "Río entre montañas en la Patagonia",
    coverObjectPositionClass: "object-[center_82%]",
    whatsappPrefill:
      "Hola Planeta Kayak, quiero consultar la excursión Río Limay (con o sin traslado). Fecha tentativa: ",
    discountNote: "Preguntá por descuentos sin traslado al reservar.",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return tours.map((t) => t.slug);
}
