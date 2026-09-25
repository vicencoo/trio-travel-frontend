import { FAQ_INFO } from "../constants/faq.js";
import {
  BRAND,
  ORGANIZATION_ID,
  SITE_URL,
  organizationSchema,
  websiteSchema,
} from "./site.js";

export type Schema = Record<string, unknown>;

export type Breadcrumb = {
  name: string;
  item: string;
};

const BREADCRUMB_LABELS: Record<string, string> = {
  "paketa-turistike": "Paketa Turistike",
  "paketa-turistike-turqi": "Paketa Turistike Turqi",
  destinacionet: "Destinacionet",
  "bileta-avioni": "Bileta Avioni",
  pronat: "Pronat",
  contact: "Kontakt",
};

const getPageName = (title: string) => title.split("|")[0].trim();

const getPathFromUrl = (url: string) => {
  try {
    return new URL(url).pathname;
  } catch {
    return "/";
  }
};

const buildAutomaticBreadcrumbs = (
  canonical: string,
  title: string,
): Breadcrumb[] => {
  const segments = getPathFromUrl(canonical).split("/").filter(Boolean);

  return [
    { name: BRAND, item: `${SITE_URL}/` },
    ...segments.map((segment, index) => ({
      name:
        index === segments.length - 1
          ? getPageName(title)
          : (BREADCRUMB_LABELS[segment] ?? segment.replace(/-/g, " ")),
      item: `${SITE_URL}/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];
};

const buildBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.item,
  })),
});

const faqPageSchema = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  about: { "@id": ORGANIZATION_ID },
  mainEntity: FAQ_INFO.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const withoutContext = (schema: Schema) => {
  const { ["@context"]: _context, ...schemaWithoutContext } = schema;
  void _context;
  return schemaWithoutContext;
};

// One JSON-LD @graph per page: the business, the website, the page's own
// schema, its breadcrumbs and (on the home page) the FAQ.
export const buildStructuredData = ({
  title,
  canonical,
  schema,
  breadcrumbs,
  includeFaq = false,
}: {
  title: string;
  canonical?: string;
  schema?: Schema | Schema[];
  breadcrumbs?: Breadcrumb[];
  includeFaq?: boolean;
}) => {
  const schemaItems = schema
    ? (Array.isArray(schema) ? schema : [schema]).map(withoutContext)
    : [];

  const breadcrumbSchema = canonical
    ? [
        buildBreadcrumbSchema(
          breadcrumbs ?? buildAutomaticBreadcrumbs(canonical, title),
        ),
      ]
    : [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      ...schemaItems,
      ...breadcrumbSchema,
      ...(includeFaq ? [faqPageSchema] : []),
    ],
  };
};
