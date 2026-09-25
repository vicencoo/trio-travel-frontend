import { BRAND, DEFAULT_IMAGE } from "./site.js";
import {
  buildStructuredData,
  type Breadcrumb,
  type Schema,
} from "./structuredData.js";

export type SeoMeta = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  includeFaq?: boolean;
  schema?: Schema | Schema[];
  breadcrumbs?: Breadcrumb[];
};

export type HeadTag =
  | { tag: "meta"; attrs: Record<string, string> }
  | { tag: "link"; attrs: Record<string, string> };

// The <head> tags of a page. React renders them through Helmet and the
// server writes them into the HTML, so both always match.
export const buildHeadTags = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  keywords = [],
  noindex = false,
}: SeoMeta): HeadTag[] => {
  const meta = (attrs: Record<string, string>): HeadTag => ({
    tag: "meta",
    attrs,
  });
  const keywordList = keywords.filter(Boolean).join(", ");

  return [
    meta({ name: "description", content: description }),
    ...(keywordList ? [meta({ name: "keywords", content: keywordList })] : []),
    meta({
      name: "robots",
      content: noindex
        ? "noindex,nofollow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    }),
    ...(canonical
      ? [
          { tag: "link", attrs: { rel: "canonical", href: canonical } } as const,
          meta({ property: "og:url", content: canonical }),
        ]
      : []),
    meta({ property: "og:site_name", content: BRAND }),
    meta({ property: "og:locale", content: "sq_AL" }),
    meta({ property: "og:type", content: "website" }),
    meta({ property: "og:title", content: title }),
    meta({ property: "og:description", content: description }),
    meta({ property: "og:image", content: image }),
    meta({ property: "og:image:secure_url", content: image }),
    meta({ property: "og:image:alt", content: title }),
    meta({ name: "twitter:card", content: "summary_large_image" }),
    meta({ name: "twitter:title", content: title }),
    meta({ name: "twitter:description", content: description }),
    meta({ name: "twitter:image", content: image }),
    meta({ name: "twitter:image:alt", content: title }),
  ];
};

export const buildJsonLd = (seo: SeoMeta) =>
  JSON.stringify(buildStructuredData(seo));

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// JSON inside <script> only needs "<" escaped so it can't close the tag
const escapeJson = (json: string) => json.replace(/</g, "\\u003c");

export const SEO_START = "<!--seo-->";
export const SEO_END = "<!--/seo-->";

// HTML for index.html / server responses. data-rh lets Helmet replace these
// tags once the app has loaded.
export const renderHead = (seo: SeoMeta) => {
  const tags = buildHeadTags(seo).map(({ tag, attrs }) => {
    const attributes = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(" ");
    return `<${tag} data-rh="true" ${attributes} />`;
  });

  return [
    SEO_START,
    `<title>${escapeHtml(seo.title)}</title>`,
    ...tags,
    `<script data-rh="true" type="application/ld+json">${escapeJson(buildJsonLd(seo))}</script>`,
    SEO_END,
  ].join("\n    ");
};

// Swaps the SEO block of a rendered index.html for another page's tags
export const replaceHead = (html: string, seo: SeoMeta) => {
  const start = html.indexOf(SEO_START);
  const end = html.indexOf(SEO_END);
  if (start === -1 || end === -1) return html;

  return html.slice(0, start) + renderHead(seo) + html.slice(end + SEO_END.length);
};
