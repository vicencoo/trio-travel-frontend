import { DEFAULT_IMAGE, ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./site.js";
import type { Schema } from "./structuredData.js";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  image: string;
  keywords: string[];
  schema?: Schema | Schema[];
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
      "Trio Travel & Immo në Vlorë ofron paketa turistike, bileta avioni, prona në shitje dhe me qera, apartamente, vila dhe udhëtime të personalizuara.",
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
    includeFaq: true,
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
      "agjenci turistike Shqiperi",
    ],
    schema: collectionPage(
      "/paketa-turistike-turqi",
      "Paketa Turistike Turqi",
      "Paketa turistike për Turqi me resorte All Inclusive në Antalya, Kemer dhe Belek.",
      "Pushime në Turqi",
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
} satisfies Record<string, PageSeo>;

export const NOT_FOUND_SEO = {
  title: "Faqja nuk u gjet | Trio Travel & Immo",
  description: "Faqja që kërkuat nuk ekziston ose është hequr.",
  image: DEFAULT_IMAGE,
  keywords: [],
  noindex: true,
};
