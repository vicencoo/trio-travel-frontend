// SEO for the Zoi Villa Residence pages. Shared by the React app and the
// Vercel functions in /api, so: no React, no browser APIs, ".js" imports.

import {
  ZOI_UNITS,
  ZOI_VILLA,
  ZOI_VILLA_PATH,
  zoiFloorLabel,
  zoiUnitName,
  zoiUnitPath,
  type ZoiUnit,
} from "../constants/zoiVilla.js";
import { BRAND, ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./site.js";
import type { Breadcrumb } from "./structuredData.js";
import type { SeoMeta } from "./head.js";

export const ZOI_VILLA_URL = `${SITE_URL}${ZOI_VILLA_PATH}`;

const RESIDENCE_ID = `${ZOI_VILLA_URL}#residence`;

const residenceCrumbs: Breadcrumb[] = [
  { name: BRAND, item: `${SITE_URL}/` },
  { name: "Pronat", item: `${SITE_URL}/pronat` },
  { name: ZOI_VILLA.name, item: ZOI_VILLA_URL },
];

export const residenceSchema = {
  "@type": "ApartmentComplex",
  "@id": RESIDENCE_ID,
  name: ZOI_VILLA.name,
  url: ZOI_VILLA_URL,
  description: ZOI_VILLA.intro,
  image: ZOI_VILLA.shareImage,
  numberOfAccommodationUnits: ZOI_UNITS.length,
  numberOfAvailableAccommodationUnits: ZOI_UNITS.filter(
    (u) => u.status === "available",
  ).length,
  address: {
    "@type": "PostalAddress",
    addressLocality: ZOI_VILLA.city,
    addressCountry: "AL",
  },
  geo: { "@type": "GeoCoordinates", ...ZOI_VILLA.geo },
  amenityFeature: ZOI_VILLA.features.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export const ZOI_VILLA_SEO = {
  path: ZOI_VILLA_PATH,
  canonical: ZOI_VILLA_URL,
  title: "Zoi Villa Residence Tiranë | Apartamente 2+1 & 3+1 në Shitje",
  shareTitle: "ZOI VILLA RESIDENCE – APARTAMENTE NË SHITJE NË TIRANË",
  description:
    "Apartamente moderne 2+1 dhe 3+1 në shitje në Zoi Villa Residence, Tiranë. Shikoni fotot, planimetritë, sipërfaqet dhe disponueshmërinë me Trio Travel & Immo.",
  image: ZOI_VILLA.shareImage,
  keywords: [
    "Zoi Villa",
    "Zoi Villa Residence",
    "apartamente ne shitje Tirane",
    "apartament 2+1 Tirane",
    "apartament 3+1 Tirane",
    "rezidence Tirane",
    "apartamente te reja Tirane",
    "agjenci imobiliare",
  ],
  breadcrumbs: residenceCrumbs,
  schema: [
    {
      "@type": "CollectionPage",
      "@id": `${ZOI_VILLA_URL}#webpage`,
      name: ZOI_VILLA.name,
      url: ZOI_VILLA_URL,
      inLanguage: "sq-AL",
      isPartOf: { "@id": WEBSITE_ID },
      provider: { "@id": ORGANIZATION_ID },
      about: { "@id": RESIDENCE_ID },
    },
    residenceSchema,
  ],
};

export const getZoiUnitSeo = (unit: ZoiUnit) => {
  const canonical = `${SITE_URL}${zoiUnitPath(unit)}`;
  const name = zoiUnitName(unit);
  const isSold = unit.status === "sold";
  const title = `${name} – ${ZOI_VILLA.name}`;

  const description = `${isSold ? "E shitur: " : ""}Apartament ${unit.type} me ${unit.area} m² (${unit.netArea} m² neto), ${unit.bedrooms} dhoma gjumi, ${unit.bathrooms} tualete, ${zoiFloorLabel(unit.floor).toLowerCase()}, në ${ZOI_VILLA.name}, ${ZOI_VILLA.city}. Fotot, planimetria dhe çmimi me Trio Travel & Immo.`;

  return {
    canonical,
    title: `${title} | ${BRAND}`,
    shareTitle: `${title.toLocaleUpperCase("sq")} | ${BRAND}`,
    description,
    image: unit.gallery[1] ?? ZOI_VILLA.shareImage,
    keywords: [
      `apartament ${unit.type} Tirane`,
      "apartamente ne shitje Tirane",
      "Zoi Villa Residence",
      "Zoi Villa",
    ],
    breadcrumbs: [
      ...residenceCrumbs,
      { name: `Shkalla ${unit.stair}, Nr. ${unit.number}`, item: canonical },
    ],
    schema: {
      "@type": "RealEstateListing",
      "@id": `${canonical}#listing`,
      name: title,
      url: canonical,
      description,
      image: unit.gallery,
      isPartOf: { "@id": WEBSITE_ID },
      provider: { "@id": ORGANIZATION_ID },
      about: {
        "@type": "Apartment",
        name,
        containedInPlace: { "@id": RESIDENCE_ID },
        floorLevel: String(unit.floor),
        numberOfRooms: unit.bedrooms + 1,
        numberOfBedrooms: unit.bedrooms,
        numberOfBathroomsTotal: unit.bathrooms,
        floorSize: {
          "@type": "QuantitativeValue",
          value: unit.area,
          unitCode: "MTK",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: ZOI_VILLA.city,
          addressCountry: "AL",
        },
      },
      offers: {
        "@type": "Offer",
        url: canonical,
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        availability: isSold
          ? "https://schema.org/SoldOut"
          : "https://schema.org/InStock",
        seller: { "@id": ORGANIZATION_ID },
      },
    },
  } satisfies SeoMeta & { canonical: string };
};
