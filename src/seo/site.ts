// Everything in src/seo is shared by the React app, vite.config.ts and the
// Vercel functions in /api. Keep these files free of React, browser APIs and
// "@/" aliases, and write relative imports with a ".js" extension so they
// also run as plain Node ES modules.

export const SITE_URL = "https://www.triotravel.al";
export const BRAND = "Trio Travel & Immo";
export const DEFAULT_IMAGE = `${SITE_URL}/images/trio-travel-og.webp`;
export const LOGO = `${SITE_URL}/images/trio-travel-icon.webp`;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Kryqezimi Rinia, Pallati i Kollozit",
  addressLocality: "Vlorë",
  postalCode: "9400",
  addressCountry: "AL",
};

const service = (name: string, description: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

// The single description of the business. Every other schema points to it
// through { "@id": ORGANIZATION_ID } instead of repeating it.
export const organizationSchema = {
  "@type": ["TravelAgency", "RealEstateAgent"],
  "@id": ORGANIZATION_ID,
  name: BRAND,
  url: SITE_URL,
  logo: LOGO,
  image: DEFAULT_IMAGE,
  telephone: "+355696900916",
  email: "triotravel.imobiliare@gmail.com",
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.46430367,
    longitude: 19.48705107,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://instagram.com/trio_travel_immo_/",
    "https://facebook.com/agjensi.trio",
  ],
  areaServed: { "@type": "Country", name: "Albania" },
  priceRange: "€€",
  knowsLanguage: ["sq", "en", "it"],
  knowsAbout: [
    "Paketa Turistike",
    "Bileta Avioni",
    "Udhëtime të Personalizuara",
    "Prona në Shitje",
    "Prona me Qera",
    "Apartamente",
    "Vila",
    "Investime Imobiliare",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Shërbimet e ${BRAND}`,
    itemListElement: [
      service(
        "Paketa Turistike",
        "Paketa turistike të organizuara dhe të personalizuara për Turqi, Europë dhe destinacione të tjera.",
      ),
      service(
        "Bileta Avioni",
        "Rezervim biletash avioni dhe oferta fluturimesh për destinacione në Europë dhe botë.",
      ),
      service(
        "Prona në Shitje",
        "Apartamente, vila, toka dhe prona për investim në Vlorë dhe Shqipëri.",
      ),
      service(
        "Prona me Qera",
        "Apartamente, dyqane dhe ambiente biznesi me qera në Vlorë.",
      ),
    ],
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BRAND,
  url: SITE_URL,
  inLanguage: "sq-AL",
  publisher: { "@id": ORGANIZATION_ID },
};
