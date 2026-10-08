import {
  BRAND,
  DEFAULT_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from "./site.js";
import type { Breadcrumb, Schema } from "./structuredData.js";
import {
  SERVICE_PAGES,
  getServicePage,
  type ServicePage,
} from "../constants/services.js";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  image: string;
  keywords: string[];
  schema?: Schema | Schema[];
  breadcrumbs?: Breadcrumb[];
  includeFaq?: boolean;
};

const PACKAGE_IMAGE = `${SITE_URL}/images/trio-travel-package-og.webp`;

const canonicalFor = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

const collectionPage = (
  path: string,
  name: string,
  description: string,
  about: string,
): Schema => ({
  "@type": "CollectionPage",
  "@id": `${canonicalFor(path)}#webpage`,
  name,
  url: canonicalFor(path),
  description,
  inLanguage: "sq-AL",
  isPartOf: { "@id": WEBSITE_ID },
  provider: { "@id": ORGANIZATION_ID },
  about: { "@type": "Thing", name: about },
});

const page = (seo: Omit<PageSeo, "canonical">): PageSeo => ({
  ...seo,
  canonical: canonicalFor(seo.path),
});

export const PAGE_SEO = {
  home: page({
    path: "/",
    title: "Trio Travel & Immo | Agjenci Turistike & Prona në Vlorë",
    description:
      "Trio Travel & Immo në Vlorë: paketa turistike, bileta avioni, prona në shitje dhe me qera, siguracione Albsig, pagesa faturash e gjobash dhe MoneyGram.",
    image: DEFAULT_IMAGE,
    keywords: [
      "Trio Travel",
      "Trio Travel Albania",
      "Trio Travel Vlore",
      "paketa turistike",
      "paketa turistike Shqiperi",
      "paketa turistike Turqi",
      "bileta avioni",
      "oferta fluturimesh",
      "agjenci turistike Vlore",
      "agjenci turistike Shqiperi",
      "prona ne shitje",
      "apartamente ne shitje",
      "apartamente me qera Vlore",
      "vila ne shitje",
      "prona ne Vlore",
      "real estate Albania",
      "udhetime te personalizuara",
      "siguracione Vlore",
      "siguracion makine Vlore",
      "pagesa faturash Vlore",
      "pagesa gjobash Vlore",
      "MoneyGram Vlore",
      "e-Albania Vlore",
    ],
    schema: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Trio Travel & Immo | Agjenci Turistike & Prona në Vlorë",
      inLanguage: "sq-AL",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
    },
  }),

  packages: page({
    path: "/paketa-turistike",
    title: "Paketa Turistike & Oferta Pushimesh | Trio Travel & Immo",
    description:
      "Zbuloni paketa turistike me Trio Travel & Immo në Vlorë ose krijoni paketën tuaj të personalizuar sipas destinacionit, buxhetit dhe datave të udhëtimit.",
    image: PACKAGE_IMAGE,
    keywords: [
      "paketa turistike",
      "paketa turistike Shqiperi",
      "paketa turistike te personalizuara",
      "oferta udhetimi",
      "pushime ne Europe",
      "pushime ne Turqi",
      "agjenci turistike Vlore",
      "agjensi turistike Vlore",
      "agjenci turistike Shqiperi",
      "agjensi turistike Shqiperi",
      "udhetime te organizuara",
    ],
    schema: collectionPage(
      "/paketa-turistike",
      "Paketa Turistike",
      "Paketa turistike të organizuara dhe të personalizuara sipas destinacionit, buxhetit dhe datave të udhëtimit.",
      "Paketa turistike dhe oferta pushimesh",
    ),
  }),

  turkeyPackages: page({
    path: "/paketa-turistike-turqi",
    title: "Paketa Turistike Turqi, Antalya & Kemer | Trio Travel & Immo",
    description:
      "Paketa turistike për Turqi me Trio Travel & Immo: resorte All Inclusive në Antalya, Kemer, Belek dhe Side, me hotele 5 yje, fluturime dhe asistencë.",
    image: PACKAGE_IMAGE,
    keywords: [
      "paketa turistike Turqi",
      "paketa turistike ne Turqi",
      "pushime ne Turqi",
      "oferta Turqi",
      "pushime Antalya",
      "paketa Antalya",
      "paketa Kemer",
      "all inclusive Antalya",
      "paketa turistike nga Vlora",
      "agjenci turistike Vlore",
      "agjensi turistike Vlore",
      "agjenci turistike",
      "agjensi turistike",
      "agjenci turistike Shqiperi",
      "agjensi turistike Shqiperi",
    ],
    schema: collectionPage(
      "/paketa-turistike-turqi",
      "Paketa Turistike Turqi",
      "Paketa turistike për Turqi me resorte All Inclusive në Antalya, Kemer dhe Belek.",
      "Pushime në Turqi",
    ),
  }),

  christmasPackages: page({
    path: "/paketa-turistike-krishtlindje",
    title: "Paketa Turistike për Krishtlindje & Vit të Ri | Trio Travel & Immo",
    description:
      "Paketa turistike për Krishtlindje dhe Vit të Ri me Trio Travel & Immo: tregje festive, qytete magjike të Evropës, fluturime, hotele dhe asistencë nga Vlora.",
    image: `${SITE_URL}/images/christmas-banner.webp`,
    keywords: [
      "paketa turistike Krishtlindje",
      "paketa turistike per Krishtlindje",
      "paketa Viti i Ri",
      "pushime per Krishtlindje",
      "pushime per festat e fundvitit",
      "tregjet e Krishtlindjeve",
      "oferta Krishtlindje",
      "udhetime dimerore",
      "paketa turistike nga Vlora",
      "agjenci turistike Vlore",
      "agjensi turistike Vlore",
      "agjenci turistike Shqiperi",
      "agjensi turistike Shqiperi",
    ],
    schema: collectionPage(
      "/paketa-turistike-krishtlindje",
      "Paketa Turistike për Krishtlindje",
      "Paketa turistike për Krishtlindje dhe Vit të Ri me fluturime, hotele dhe itinerare festive.",
      "Pushime për Krishtlindje dhe Vit të Ri",
    ),
  }),

  novemberPackages: page({
    path: "/paketa-turistike-festat-e-nentorit",
    title: "Paketa Turistike për Festat e Nëntorit | Trio Travel & Immo",
    description:
      "Paketa turistike për festat e 28 dhe 29 Nëntorit me Trio Travel & Immo: qytete të Evropës, fundjava të shkurtra, fluturime, hotele dhe asistencë nga Vlora.",
    image: `${SITE_URL}/images/november-packages-desktop.webp`,
    keywords: [
      "paketa turistike festat e Nentorit",
      "paketa turistike 28 Nentori",
      "pushime per 28 Nentor",
      "pushime per festat e Nentorit",
      "oferta 28 dhe 29 Nentori",
      "udhetime ne Nentor",
      "fundjave ne Evrope",
      "paketa turistike nga Vlora",
      "agjenci turistike Vlore",
      "agjensi turistike Vlore",
      "agjenci turistike Shqiperi",
      "agjensi turistike Shqiperi",
    ],
    schema: collectionPage(
      "/paketa-turistike-festat-e-nentorit",
      "Paketa Turistike për Festat e Nëntorit",
      "Paketa turistike për festat e 28 dhe 29 Nëntorit me fluturime, hotele dhe itinerare të organizuara.",
      "Pushime për festat e Nëntorit",
    ),
  }),

  properties: page({
    path: "/pronat",
    title: "Prona në Shitje & me Qera në Vlorë | Trio Travel & Immo",
    description:
      "Apartamente, vila, dyqane, toka dhe prona për investim në shitje dhe me qera në Vlorë. Gjeni pronën tuaj me Trio Travel & Immo.",
    image: `${SITE_URL}/images/trio-travel-properties-og.webp`,
    keywords: [
      "prona ne shitje",
      "prona me qera",
      "prona ne Vlore",
      "apartamente ne shitje",
      "apartamente ne shitje Vlore",
      "apartamente me qera",
      "apartamente me qera Vlore",
      "vila ne shitje",
      "dyqane me qera Vlore",
      "toke ne shitje Vlore",
      "real estate Albania",
      "investime imobiliare",
      "agjenci imobiliare Vlore",
    ],
    schema: collectionPage(
      "/pronat",
      "Prona në Shitje & me Qera",
      "Apartamente, vila, dyqane, toka dhe prona për investim në shitje dhe me qera në Vlorë.",
      "Prona në shitje dhe me qera në Vlorë",
    ),
  }),

  destinations: page({
    path: "/destinacionet",
    title: "Destinacione Turistike & Pushime | Trio Travel & Immo",
    description:
      "Zbuloni destinacione turistike për pushime me Trio Travel & Immo. Eksploroni udhëtime në Europë, Turqi dhe destinacione të personalizuara sipas buxhetit tuaj.",
    image: PACKAGE_IMAGE,
    keywords: [
      "destinacione turistike",
      "destinacione udhetimi",
      "pushime",
      "pushime ne Europe",
      "pushime ne Turqi",
      "paketa turistike",
      "udhetime te personalizuara",
      "agjenci turistike Vlore",
      "agjenci turistike Shqiperi",
    ],
    schema: collectionPage(
      "/destinacionet",
      "Destinacione Turistike",
      "Destinacione turistike për pushime dhe udhëtime të personalizuara.",
      "Destinacione turistike dhe pushime",
    ),
  }),

  planeTickets: page({
    path: "/bileta-avioni",
    title: "Bileta Avioni & Oferta Fluturimesh | Trio Travel & Immo",
    description:
      "Gjeni bileta avioni dhe oferta fluturimesh për destinacione të ndryshme me Trio Travel & Immo. Rezervoni fluturimin tuaj me asistencë profesionale.",
    image: `${SITE_URL}/images/plane-ticket-cover.webp`,
    keywords: [
      "bileta avioni",
      "bileta avioni online",
      "rezervo bileta avioni",
      "oferta fluturimesh",
      "fluturime te lira",
      "agjenci turistike Vlore",
      "agjenci turistike Shqiperi",
      "fluturime europiane",
      "fluturime nderkombetare",
    ],
    schema: collectionPage(
      "/bileta-avioni",
      "Bileta Avioni & Oferta Fluturimesh",
      "Bileta avioni dhe oferta fluturimesh për destinacione në Europë dhe botë.",
      "Bileta avioni dhe fluturime",
    ),
  }),

  contact: page({
    path: "/contact",
    title: "Kontakt | Trio Travel & Immo në Vlorë",
    description:
      "Kontaktoni Trio Travel & Immo në Vlorë për paketa turistike, prona në shitje dhe me qera, bileta avioni dhe asistencë të personalizuar.",
    image: DEFAULT_IMAGE,
    keywords: [
      "kontakt trio travel",
      "trio travel vlore",
      "trio travel immo",
      "agjenci turistike vlore",
      "agjenci imobiliare vlore",
      "Kryqezimi Rinia Vlore",
    ],
    schema: {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#webpage`,
      url: `${SITE_URL}/contact`,
      name: "Kontakt",
      inLanguage: "sq-AL",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
    },
  }),

  faq: page({
    path: "/pyetje-te-shpeshta",
    title: "Pyetjet më të Shpeshta (FAQ) | Trio Travel & Immo",
    description:
      "Përgjigje për pyetjet më të shpeshta rreth biletave të avionit, paketave turistike, vizave, sigurimeve, pagesave të faturave dhe MoneyGram në Trio Travel & Immo, Vlorë.",
    image: DEFAULT_IMAGE,
    keywords: [
      "pyetje te shpeshta",
      "FAQ trio travel",
      "si te rezervoj bileta avioni",
      "anulimi i biletes se avionit",
      "asistence per viza",
      "sigurim udhetimi",
      "sigurim automjeti Vlore",
      "pagesa e faturave Vlore",
      "MoneyGram Vlore",
      "agjenci turistike Vlore",
    ],
    schema: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/pyetje-te-shpeshta#webpage`,
      url: `${SITE_URL}/pyetje-te-shpeshta`,
      name: "Pyetjet më të Shpeshta",
      inLanguage: "sq-AL",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      mainEntity: { "@id": `${SITE_URL}/pyetje-te-shpeshta#faq` },
    },
    includeFaq: true,
  }),

  services: page({
    path: "/sherbime",
    title: "Shërbimet Tona në Vlorë | Trio Travel & Immo",
    description:
      "Të gjitha shërbimet në një vend në Vlorë: paketa turistike, bileta avioni, prona, siguracione Albsig, pagesa faturash e gjobash, MoneyGram dhe e-Albania.",
    image: `${SITE_URL}/images/services/sherbime-og.webp`,
    keywords: [
      "sherbime Vlore",
      "agjenci sherbimesh Vlore",
      "siguracione Vlore",
      "pagesa faturash Vlore",
      "pagesa gjobash Vlore",
      "MoneyGram Vlore",
      "e-Albania Vlore",
      "agjenci turistike Vlore",
      "Trio Travel Vlore",
    ],
    schema: collectionPage(
      "/sherbime",
      "Shërbimet e Trio Travel & Immo",
      "Udhëtime, prona, siguracione, pagesa faturash e gjobash, MoneyGram dhe shërbime e-Albania në Vlorë.",
      "Shërbime në Vlorë",
    ),
  }),
} satisfies Record<string, PageSeo>;

const SERVICES_CRUMB: Breadcrumb = {
  name: "Shërbime",
  item: `${SITE_URL}/sherbime`,
};

// Service pages live at the root (/siguracion-automjeti) so the URL holds
// the keyword; their breadcrumbs still show where they sit in the site.
const serviceBreadcrumbs = (service: ServicePage): Breadcrumb[] => {
  const parent = SERVICE_PAGES.find((other) =>
    other.children?.keys.includes(service.key),
  );

  return [
    { name: BRAND, item: `${SITE_URL}/` },
    SERVICES_CRUMB,
    ...(parent
      ? [{ name: parent.name, item: canonicalFor(parent.path) }]
      : []),
    { name: service.name, item: canonicalFor(service.path) },
  ];
};

const serviceSchema = (service: ServicePage): Schema[] => {
  const url = canonicalFor(service.path);

  return [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: service.heading,
      description: service.description,
      inLanguage: "sq-AL",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#service` },
      primaryImageOfPage: `${SITE_URL}${service.image}`,
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.heading,
      serviceType: service.name,
      description: service.intro,
      url,
      image: `${SITE_URL}${service.image}`,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "City", name: "Vlorë" },
      ...(service.children && {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.name,
          itemListElement: service.children.keys
            .map(getServicePage)
            .filter((child) => child !== undefined)
            .map((child) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: child.name,
                url: canonicalFor(child.path),
              },
            })),
        },
      }),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      inLanguage: "sq-AL",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
};

export const SERVICE_SEO: Record<string, PageSeo> = Object.fromEntries(
  SERVICE_PAGES.map((service) => [
    service.key,
    page({
      path: service.path,
      title: service.title,
      description: service.description,
      image: `${SITE_URL}${service.ogImage}`,
      keywords: service.keywords,
      schema: serviceSchema(service),
      breadcrumbs: serviceBreadcrumbs(service),
    }),
  ]),
);

export const NOT_FOUND_SEO = {
  title: "Faqja nuk u gjet | Trio Travel & Immo",
  description: "Faqja që kërkuat nuk ekziston ose është hequr.",
  image: DEFAULT_IMAGE,
  keywords: [],
  noindex: true,
};
