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
 * CLIENT VERIFY — conflicting portfolio figures across company pages.
 * Homepage historically: 91 objects / 3 200 flats / 187 non-residential.
 * O nás page: 127+ / 3 992+ / 265.
 * Values below are editable; do not invent reconciliations.
 */
export const portfolioFromONas = {
  foundedDate: "18. 3. 1996",
  objectsLabel: "127+",
  objectsCaption: "spravovaných objektov",
  flatsLabel: "3 992+",
  flatsCaption: "bytov",
  nonResidentialLabel: "265",
  nonResidentialCaption: "nebytových priestorov",
  area: "Banská Bystrica a okolie",
  priorities: "presnosť, spoľahlivosť, ústretovosť a prístupnosť",
  communities: 30,
  sourceNote: "from spravbyt.sk/o-nas — client confirmation required",
} as const;

export const unverifiedPortfolioStats = {
  objects: 91,
  flats: 3200,
  nonResidential: 187,
  source: "original homepage copy — alternate dataset for client review",
} as const;

/**
 * Homepage ticker notices. Prefer evergreen / still-relevant items.
 * CLIENT VERIFY: emergency-service change dated 01.12.2025 may need confirmation
 * that it remains the current provider. Do not invent notices.
 */
export const announcements = [
  {
    id: "havarijna-2025",
    title: "Havarijná služba — Chaban HSU",
    excerpt: "Kontakt 0903 530 977 (oznam z 01.12.2025, overiť aktuálnosť).",
    body: "Podľa oznamu na stránke Aktuality sa s účinnosťou od 01.12.2025 zmenil poskytovateľ havarijnej služby na Chaban HSU, s.r.o., Tajov 12, 976 34 Tajov.\n\nTelefonický kontakt uvedený v oznamu: 0903 530 977.\n\nProsím overte u správcu, či tento údaj zostáva aktuálny.",
    dateLabel: "Oznam",
    needsConfirmation: true,
  },
  {
    id: "dph-2025",
    title: "DPH v položke správa",
    excerpt: "V položke správa je zohľadnená sadzba DPH 23 %.",
    body: "Podľa oznamu na stránke Aktuality sa od 01.01.2025 v položke správa zohľadňuje sadzba DPH 23 % podľa novely zákona č. 222/2004 Z. z.\n\nÚprava poplatku bola podľa oznamu len o niekoľko centov mesačne.",
    dateLabel: "Oznam",
  },
  {
    id: "sidlo",
    title: "Prevádzka na Dlhej ulici",
    excerpt: "Dlhá ulica 2039/2, 974 05 Banská Bystrica.",
    body: "Prevádzka spoločnosti SPRAVBYT s.r.o. sa nachádza na adrese Dlhá ulica 2039/2, 974 05 Banská Bystrica.",
    dateLabel: "Sídlo",
  },
  {
    id: "aktuality-archiv",
    title: "Archív oznámení",
    excerpt: "Ďalšie oznamy a staršie texty na stránke Aktuality.",
    body: "Na homepage uvádzame len vybrané skrátené oznamy. Kompletný archív vrátane starších oznámení je na pôvodnej stránke Aktuality.",
    dateLabel: "Archív",
    externalHref: "https://spravbyt.sk/aktuality/",
  },
] as const;

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
    "Od roku 1996 poskytujeme služby správy nehnuteľností v Banskej Bystrici a okolí.",
  primaryCta: { label: "Kontaktujte nás", href: "#kontakt" },
  secondaryCta: { label: "Naše služby", href: "#sluzby" },
  locationLabel: "Banská Bystrica a okolie",
  imageSrc: "/banska-bystrica-hero.png",
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
      details: [
        "Prevádzku, opravy a údržbu spoločných častí zabezpečujeme dodávateľsky v mene a na účet vlastníkov.",
        "Pri obstarávaní služieb dojednávame čo najvýhodnejšie podmienky v prospech vlastníkov.",
        "Domový výbor alebo vchodoví zástupcovia prenášajú požiadavky vlastníkov a kontrolujú hospodárenie.",
      ],
    },
    {
      number: "02",
      title: "Ekonomický úsek",
      description: "Ekonomická agenda súvisiaca so správou bytových domov.",
      href: externalUrls.serviceEkonomicky,
      details: [
        "Evidencia zálohových platieb a vystavovanie evidenčných listov.",
        "Štvrťročné prehľady o tvorbe, čerpaní a zostatku FPOU.",
        "Ročné vyúčtovanie a správa o hospodárení domu.",
      ],
    },
    {
      number: "03",
      title: "Technický úsek",
      description: "Pravidelná kontrola prevádzky a technického stavu domu.",
      href: externalUrls.serviceTechnicky,
      details: [
        "Fyzické prehliadky spoločných častí a zariadení domu.",
        "Plány opráv, cenové ponuky a riešenie havarijných situácií.",
        "Zabezpečenie odborných prehliadok a predpísaných skúšok.",
      ],
    },
    {
      number: "04",
      title: "Právne záležitosti",
      description:
        "Riešenie právnych záležitostí v spolupráci s externým právnym zástupcom.",
      href: externalUrls.servicePravne,
      details: [
        "Zmluvná spolupráca s externým právnym zástupcom.",
        "Zastupovanie spravovaných objektov pri vymáhaní nedoplatkov.",
        "Právne poradenstvo pre správcu a spravované objekty.",
      ],
    },
  ],
} as const;

export const about = {
  eyebrow: "O SPOLOČNOSTI",
  heading: "Skúsenosti, na ktorých môžete stavať.",
  intro:
    "SPRAVBYT s.r.o. bola založená 18. 3. 1996 za účelom správy obytných domov, bytov, nebytových priestorov, garáží a polyfunkčných priestorov. Systém správy sme vypracovali tak, aby vyhovoval požiadavkám vlastníkov a bol v súlade s platnou legislatívou.",
  prioritiesLabel: "Naša priorita",
  priorities:
    "Presnosť, spoľahlivosť, ústretovosť a prístupnosť našich zamestnancov.",
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
  moreLabel: "Celý text O nás",
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
