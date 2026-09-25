import { createSlug } from "../utils/createSlug.js";
import { seoDescription } from "../utils/seoDescription.js";
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./site.js";
import type { Schema } from "./structuredData.js";

// Only the fields SEO needs, so both the app types and raw API JSON fit
type SeoPackage = {
  id?: number;
  title?: string;
  destination?: string;
  price?: number | null;
  duration?: number | null;
  description?: string;
  status?: string;
  package_images?: unknown[];
};

type SeoProperty = {
  id?: number;
  title?: string;
  description?: string;
  property_type?: string;
  listing_type?: string;
  availability?: string;
  city?: string;
  street?: string;
  area?: string;
  price?: number | null;
  space?: number | null;
  bedrooms?: number | null;
  toilets?: number | null;
  build_year?: number | null;
  createdAt?: string | Date;
  created_at?: string | Date;
  status?: string;
  property_images?: unknown[];
};

export type DetailSeo = {
  slug: string;
  canonical: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
  schema: Schema;
  noindex: boolean;
};

const CITY_NAMES: Record<string, string> = {
  vlore: "Vlorë",
  vlora: "Vlorë",
  sarande: "Sarandë",
  tirane: "Tiranë",
  tirana: "Tiranë",
  durres: "Durrës",
  shkoder: "Shkodër",
  himare: "Himarë",
  kemer: "Kemer",
  antalya: "Antalya",
  malte: "Maltë",
};

const capitalize = (text: string) =>
  text
    .trim()
    .toLowerCase()
    .replace(/(^|[\s(-])(\p{L})/gu, (_, before, letter) => before + letter.toUpperCase());

// Also calms down titles typed in ALL CAPS
const sentenceCase = (text: string) => {
  const trimmed = text.trim();
  const clean =
    trimmed === trimmed.toUpperCase() ? trimmed.toLowerCase() : trimmed;
  return clean.charAt(0).toUpperCase() + clean.slice(1);
};

const placeName = (text: string | undefined) => {
  const clean = (text ?? "").trim();
  return CITY_NAMES[clean.toLowerCase()] ?? capitalize(clean);
};

const normalize = (text: string) =>
  text.toLowerCase().replace(/ë/g, "e").replace(/ç/g, "c");

// Collects the image URLs from any of the image shapes the API returns
const imageUrls = (images: unknown[] | undefined) =>
  (images ?? [])
    .map((image) => {
      if (typeof image === "string") return image;
      if (image && typeof image === "object") {
        const { image: packageImage, property_image } = image as {
          image?: unknown;
          property_image?: unknown;
        };
        const url = packageImage ?? property_image;
        return typeof url === "string" ? url : undefined;
      }
      return undefined;
    })
    .filter((url): url is string => !!url && url.startsWith("http"));

const withBrand = (name: string) => `${name} | Trio Travel & Immo`;

export const getPackageSeo = (data: SeoPackage): DetailSeo | null => {
  const slug = createSlug(data.title, data.id);
  if (!slug || !data.title) return null;

  const canonical = `${SITE_URL}/paketa-turistike/${slug}`;
  const name = capitalize(data.title);
  const destination = placeName(data.destination);
  const images = imageUrls(data.package_images);
  const image =
    images[0] ?? `${SITE_URL}/images/trio-travel-package-og.webp`;

  const titleName =
    destination && !normalize(name).includes(normalize(destination))
      ? `${name}, ${destination}`
      : name;

  const description = seoDescription(
    data.description,
    `Paketë turistike ${name}${destination ? ` në ${destination}` : ""} me Trio Travel & Immo. Rezervoni pushimet tuaja me asistencë të plotë.`,
  );

  return {
    slug,
    canonical,
    title: withBrand(titleName),
    description,
    image,
    // Drafts are still reachable by link but shouldn't be in Google
    noindex: data.status === "draft",
    keywords: [
      name,
      destination,
      `paketa turistike ${destination}`,
      `pushime ne ${destination}`,
      "paketa turistike",
      "oferta pushimesh",
      "agjenci turistike Vlore",
    ].filter((keyword) => keyword.trim()),
    schema: {
      "@type": "TouristTrip",
      "@id": `${canonical}#trip`,
      name,
      url: canonical,
      description,
      image: images.length ? images : image,
      touristType: ["Couple", "Family", "Group"],
      ...(destination && {
        itinerary: { "@type": "Place", name: destination },
      }),
      provider: { "@id": ORGANIZATION_ID },
      ...(data.price && {
        offers: {
          "@type": "Offer",
          url: canonical,
          price: data.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          seller: { "@id": ORGANIZATION_ID },
        },
      }),
    },
  };
};

// schema.org type for the building/land itself
const ACCOMMODATION_TYPES: Record<string, string> = {
  apartament: "Apartment",
  vile: "House",
  vila: "House",
  shtepi: "House",
};

const PROPERTY_TYPE_NAMES: Record<string, string> = {
  apartament: "Apartament",
  vile: "Vilë",
  vila: "Vilë",
  dyqan: "Dyqan",
  hotel: "Hotel",
  kapanon: "Kapanon",
  toke: "Tokë",
  truall: "Truall",
};

const availabilityFor = (availability: string | undefined) => {
  if (availability === "sold") return "https://schema.org/SoldOut";
  if (availability === "rented") return "https://schema.org/OutOfStock";
  return "https://schema.org/InStock";
};

export const getPropertySeo = (data: SeoProperty): DetailSeo | null => {
  const slug = createSlug(data.title, data.id);
  if (!slug || !data.title) return null;

  const canonical = `${SITE_URL}/pronat/${slug}`;
  const name = sentenceCase(data.title);
  const city = placeName(data.city);
  const isRent = data.listing_type === "rent";
  const type = (data.property_type ?? "").toLowerCase();
  const typeName = PROPERTY_TYPE_NAMES[type] ?? capitalize(type);
  const images = imageUrls(data.property_images);
  const image = images[0] ?? `${SITE_URL}/images/property-cover.webp`;
  const datePosted = data.createdAt ?? data.created_at;

  const titleName =
    city && !normalize(name).includes(normalize(city))
      ? `${name}, ${city}`
      : name;

  const description = seoDescription(
    data.description,
    `${typeName || "Pronë"} ${isRent ? "me qera" : "në shitje"}${city ? ` në ${city}` : ""} me Trio Travel & Immo.`,
  );

  const address = {
    "@type": "PostalAddress",
    addressLocality: city || undefined,
    streetAddress:
      [...new Set([data.street?.trim(), data.area?.trim()].filter(Boolean))]
        .join(", ") || undefined,
    addressCountry: "AL",
  };

  return {
    slug,
    canonical,
    title: withBrand(titleName),
    description,
    image,
    // Drafts are still reachable by link but shouldn't be in Google
    noindex: data.status === "draft",
    keywords: [
      name,
      city,
      data.area ?? "",
      `${typeName} ${isRent ? "me qera" : "ne shitje"} ${city}`,
      isRent ? "prona me qera" : "prona ne shitje",
      isRent ? "apartamente me qera Vlore" : "apartamente ne shitje Vlore",
      "agjenci imobiliare Vlore",
    ].filter((keyword) => keyword.trim()),
    schema: {
      "@type": "RealEstateListing",
      "@id": `${canonical}#listing`,
      name,
      url: canonical,
      description,
      image: images.length ? images : image,
      ...(datePosted && { datePosted: new Date(datePosted).toISOString() }),
      isPartOf: { "@id": WEBSITE_ID },
      provider: { "@id": ORGANIZATION_ID },
      about: {
        "@type": ACCOMMODATION_TYPES[type] ?? "Place",
        name,
        address,
        ...(ACCOMMODATION_TYPES[type] && {
          ...(data.space && {
            floorSize: {
              "@type": "QuantitativeValue",
              value: data.space,
              unitCode: "MTK",
            },
          }),
          ...(data.bedrooms && { numberOfBedrooms: data.bedrooms }),
          ...(data.toilets && { numberOfBathroomsTotal: data.toilets }),
          ...(data.build_year && { yearBuilt: data.build_year }),
        }),
      },
      ...(data.price && {
        offers: {
          "@type": "Offer",
          url: canonical,
          price: data.price,
          priceCurrency: "EUR",
          businessFunction: isRent
            ? "http://purl.org/goodrelations/v1#LeaseOut"
            : "http://purl.org/goodrelations/v1#Sell",
          availability: availabilityFor(data.availability),
          seller: { "@id": ORGANIZATION_ID },
        },
      }),
    },
  };
};
