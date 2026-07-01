import { Helmet } from "react-helmet-async";
import type { SEOProps } from "./types";

const DEFAULT_KEYWORDS = [
  "Trio Travel & Immo",
  "paketa turistike",
  "paketa turistike Shqiperi",
  "paketa turistike Turqi",
  "paketa turistike Dubai",
  "bileta avioni",
  "bileta avioni Tirane",
  "agjenci turistike Shqiperi",
  "agjenci turistike Tirane",
  "prona ne shitje",
  "apartamente ne shitje",
  "apartamente ne Sarande",
  "vila ne shitje",
  "real estate Albania",
  "pushime ne Shqiperi",
];

const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Trio Travel & Immo",
  url: "https://www.triotravel.al",
  logo: "https://www.triotravel.al/images/trio-travel-icon.webp",
  telephone: "+355696900916",
  image: "https://www.triotravel.al/images/trio-travel-og.webp",
  areaServed: "Albania",
  knowsLanguage: ["Albanian", "English", "Italian"],
  knowsAbout: [
    "Paketa Turistike",
    "Travel Planning",
    "Group Tours",
    "Flight Tickets",
    "Real Estate",
    "Property Investment",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sherbimet e Trio Travel & Immo",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Paketa Turistike",
      },
      {
        "@type": "OfferCatalog",
        name: "Bileta Avioni",
      },
      {
        "@type": "OfferCatalog",
        name: "Prona ne Shitje",
      },
      {
        "@type": "OfferCatalog",
        name: "Prona per Investim",
      },
    ],
  },
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

const buildAutomaticBreadcrumbs = (canonical: string, title: string) => {
  const path = getPathFromUrl(canonical);
  const segments = path.split("/").filter(Boolean);

  if (!segments.length) {
    return [
      {
        name: "Trio Travel & Immo",
        item: "https://www.triotravel.al",
      },
    ];
  }

  const breadcrumbs = [
    {
      name: "Trio Travel & Immo",
      item: "https://www.triotravel.al",
    },
  ];

  segments.forEach((segment, index) => {
    const item = `https://www.triotravel.al/${segments
      .slice(0, index + 1)
      .join("/")}`;
    const isLast = index === segments.length - 1;

    breadcrumbs.push({
      name: isLast
        ? getPageName(title)
        : BREADCRUMB_LABELS[segment] ?? segment.replace(/-/g, " "),
      item,
    });
  });

  return breadcrumbs;
};

const buildBreadcrumbSchema = (
  breadcrumbs: {
    name: string;
    item: string;
  }[]
) => ({
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.item,
  })),
});

const withoutContext = (schema: Record<string, unknown>) => {
  const { ["@context"]: _context, ...schemaWithoutContext } = schema;
  return schemaWithoutContext;
};

export const SEO = ({
  title,
  description,
  canonical,
  image = "https://www.triotravel.al/images/trio-travel-og.webp",
  keywords = DEFAULT_KEYWORDS,
  noindex = false,
  schema,
  breadcrumbs,
}: SEOProps) => {
  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs ?? buildAutomaticBreadcrumbs(canonical, title)
  );

  const schemaItems = schema
    ? Array.isArray(schema)
      ? schema.map(withoutContext)
      : [withoutContext(schema)]
    : [DEFAULT_SCHEMA];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [...schemaItems, breadcrumbSchema],
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.filter(Boolean).join(", ")} />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        }
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Trio Travel & Immo" />
      <meta property="og:locale" content="sq_AL" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
