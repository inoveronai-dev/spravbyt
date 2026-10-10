/**
 * Centralized homepage content and verified destinations for SPRAVBYT s.r.o.
 * Unimplemented internal routes intentionally link to the live site where verified.
 */

export const site = {
  name: "SPRAVBYT s.r.o.",
  tagline: "Správa bytových domov",
  city: "Banská Bystrica",
  foundedYear: 1996,
  phoneDisplay: "048 / 416 40 55",
  phoneHref: "tel:+421484164055",
  email: "spravbytbb@gmail.com",
  emailHref: "mailto:spravbytbb@gmail.com",
  addressLines: ["Dlhá ulica 2039/2", "974 05 Banská Bystrica"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dlhá+ulica+2039%2F2%2C+974+05+Banská+Bystrica",
  logoSrc: "/logo-spravbyt.png",
  logoAlt: "SPRAVBYT s.r.o. — Správa bytových domov",
} as const;

export const externalUrls = {
  oNas: "https://spravbyt.sk/o-nas/",
  aktuality: "https://spravbyt.sk/aktuality/",
  onlineVstup: "https://spravbyt.sk/online-vstup-pre-vlastnikov/",
  naStiahnutie: "https://spravbyt.sk/na-stiahnutie/",
  teplo: "https://spravbyt.sk/teplo/",
  vodneAStocne: "https://spravbyt.sk/vodne-a-stocne/",
  kontakt: "https://spravbyt.sk/kontakt/",
  serviceVykon: "https://spravbyt.sk/o-nas#sub-1",
  serviceEkonomicky: "https://spravbyt.sk/o-nas#sub-2",
  serviceTechnicky: "https://spravbyt.sk/o-nas#sub-3",
  servicePravne: "https://spravbyt.sk/o-nas#sub-5",
} as const;

/**
 * CLIENT VERIFY — Conflicting portfolio figures exist across company pages.
 * Homepage historically listed: >91 objects, >3 200 flats, 187 non-residential.
 * O nás page lists: >127 objects, >3 992 flats, 265 non-residential.
 * Do not display these as verified trust metrics until the client confirms.
 */
export const unverifiedPortfolioStats = {
  objects: 91,
  flats: 3200,
  nonResidential: 187,
  source: "original homepage copy — requires client verification",
} as const;

export type NavItem =
  | {
      label: string;
      href: string;
      external?: boolean;
      emphasize?: boolean;
    }
  | {
      label: string;
      pending: true;
      note: string;
    };

export const primaryNav: NavItem[] = [
  { label: "Úvod", href: "/#uvod" },
  { label: "O nás", href: externalUrls.oNas, external: true },
  { label: "Online vstup", href: externalUrls.onlineVstup, external: true, emphasize: true },
  { label: "Kontakt", href: "/#kontakt" },
];

export const infoNav: NavItem[] = [
  { label: "Aktuality", href: externalUrls.aktuality, external: true },
  {
    label: "Oznamy",
    pending: true,
    note: "Cieľová stránka na spravbyt.sk/oznamy/ nie je dostupná (404).",
  },
  { label: "Na stiahnutie", href: externalUrls.naStiahnutie, external: true },
  { label: "Teplo", href: externalUrls.teplo, external: true },
  { label: "Vodné a stočné", href: externalUrls.vodneAStocne, external: true },
];

export const hero = {
  eyebrow: "SPRAVBYT S.R.O. · BANSKÁ BYSTRICA",
  headingBefore: "Správa bytových domov, ",
  headingEmphasis: "na ktorú sa môžete spoľahnúť",
  headingAfter: ".",
  supporting:
    "Od roku 1996 poskytujeme služby v oblasti správy bytových a nebytových priestorov v Banskej Bystrici a okolí.",
  primaryCta: { label: "Kontaktujte nás", href: "#kontakt" },
  secondaryCta: { label: "Naše služby", href: "#sluzby" },
  locationLabel: "Banská Bystrica a okolie",
} as const;

export const trust = {
  yearLabel: "Od roku 1996",
  description:
    "Skúsenosti, spoľahlivosť a osobný prístup pri správe bytových domov.",
} as const;

export const services = {
  eyebrow: "NAŠE SLUŽBY",
  heading: "Komplexná správa nehnuteľností.",
  supporting:
    "Zabezpečujeme jednotlivé oblasti správy bytových domov s dôrazom na spoľahlivosť, presnosť a dostupnosť.",
  items: [
    {
      number: "01",
      title: "Výkon správy",
      description: "Výkon správy zabezpečuje správca vlastnými kapacitami.",
      href: externalUrls.serviceVykon,
      icon: "building" as const,
    },
    {
      number: "02",
      title: "Ekonomický úsek",
      description: "Ekonomická agenda súvisiaca so správou bytových domov.",
      href: externalUrls.serviceEkonomicky,
      icon: "calculator" as const,
    },
    {
      number: "03",
      title: "Technický úsek",
      description: "Pravidelná kontrola prevádzky a technického stavu domu.",
      href: externalUrls.serviceTechnicky,
      icon: "wrench" as const,
    },
    {
      number: "04",
      title: "Právne záležitosti",
      description:
        "Riešenie právnych záležitostí v spolupráci s externým právnym zástupcom.",
      href: externalUrls.servicePravne,
      icon: "scale" as const,
    },
  ],
} as const;

export const about = {
  eyebrow: "O SPOLOČNOSTI",
  heading: "Skúsenosti, na ktorých môžete stavať.",
  paragraphs: [
    "Už od roku 1996 poskytujeme služby za účelom správy obytných domov, bytov, nebytových priestorov, garáží, polyfunkčných a prevádzkových priestorov.",
    "Na základe poznatkov nadobudnutých dlhoročnými skúsenosťami v danej oblasti sme vypracovali systém správy tak, aby čo najviac vyhovoval požiadavkám vlastníkov a zároveň bol v súlade s platnou legislatívou.",
  ],
  methods: [
    {
      number: "01",
      title: "Zmluva o výkone správy",
      description: "Pre vlastníkov bytov.",
    },
    {
      number: "02",
      title: "Mandátna zmluva",
      description: "Pre spoločenstvá vlastníkov bytov.",
    },
  ],
  moreHref: externalUrls.oNas,
  moreLabel: "Viac o spoločnosti",
} as const;

export const quickLinks = {
  heading: "Čo potrebujete vybaviť?",
  items: [
    {
      title: "Online vstup",
      description: "Prístup pre vlastníkov",
      href: externalUrls.onlineVstup,
      icon: "log-in" as const,
    },
    {
      title: "Dokumenty na stiahnutie",
      description: "Formuláre a podklady",
      href: externalUrls.naStiahnutie,
      icon: "download" as const,
    },
    {
      title: "Teplo",
      description: "Informácie o dodávke tepla",
      href: externalUrls.teplo,
      icon: "flame" as const,
    },
    {
      title: "Vodné a stočné",
      description: "Voda a stočné",
      href: externalUrls.vodneAStocne,
      icon: "droplets" as const,
    },
    {
      title: "Aktuality",
      description: "Aktuálne správy spoločnosti",
      href: externalUrls.aktuality,
      icon: "newspaper" as const,
    },
  ],
} as const;

export const contact = {
  heading: "Porozprávajme sa o správe vášho domu.",
  supporting:
    "V prípade vášho záujmu si s nami dohodnite osobné stretnutie, na ktorom vám zodpovieme na vaše otázky.",
  callLabel: "Zavolajte nám",
} as const;

export const footerNav = [
  { label: "Úvod", href: "/#uvod" },
  { label: "O nás", href: externalUrls.oNas, external: true },
  { label: "Služby", href: "/#sluzby" },
  { label: "Kontakt", href: "/#kontakt" },
  { label: "Online vstup", href: externalUrls.onlineVstup, external: true },
] as const;

export const footerUseful = [
  { label: "Na stiahnutie", href: externalUrls.naStiahnutie },
  { label: "Teplo", href: externalUrls.teplo },
  { label: "Vodné a stočné", href: externalUrls.vodneAStocne },
  { label: "Aktuality", href: externalUrls.aktuality },
] as const;
