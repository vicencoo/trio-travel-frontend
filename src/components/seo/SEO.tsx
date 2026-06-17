import { Helmet } from "react-helmet-async";
import type { SEOProps } from "./types";

const DEFAULT_KEYWORDS = [
  "Trio Travel Albania",
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
  "hotele",
  "pushime ne Shqiperi",
];

export const SEO = ({
  title,
  description,
  canonical,
  image = "https://www.triotravel.al/images/trio-travel-og.webp",
  keywords = DEFAULT_KEYWORDS,
  noindex = false,
}: SEOProps) => {
  return (
    <Helmet>
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

      <meta property="og:site_name" content="Trio Travel Albania" />
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

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Trio Travel Albania",
          url: "https://www.triotravel.al",
          logo: "https://www.triotravel.al/images/trio-travel-icon.webp",
          image,
          description,
          areaServed: "Albania",
          address: {
            "@type": "PostalAddress",
            addressCountry: "AL",
          },
        })}
      </script>
    </Helmet>
  );
};
