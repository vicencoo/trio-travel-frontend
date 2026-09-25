// Serves the app's index.html for every route except "/" (a static file),
// with that page's title, meta tags, canonical and schema.org data already in
// the HTML, and real 301/404 status codes. The React app then takes over
// exactly as before.

import template from "./_template.js";
import { replaceHead, type SeoMeta } from "../src/seo/head.js";
import { NOT_FOUND_SEO, PAGE_SEO } from "../src/seo/pages.js";
import { getPackageSeo, getPropertySeo } from "../src/seo/detail.js";
import { BRAND } from "../src/seo/site.js";

const API_URL = (
  process.env.VITE_LOCAL || "https://trio-travel-backend-mysql.vercel.app"
).replace(/\/$/, "");

const STATIC_PAGES = new Map<string, SeoMeta>(
  Object.values(PAGE_SEO).map((page) => [page.path, page]),
);

// Used when the page can't be resolved (e.g. backend down): no canonical, so
// Google never sees another page's canonical on this URL
const FALLBACK_SEO: SeoMeta = {
  title: BRAND,
  description: PAGE_SEO.home.description,
};

const PRIVATE_SEO: SeoMeta = { ...FALLBACK_SEO, noindex: true };

type PageResult =
  | { status: 200 | 404; seo: SeoMeta }
  | { status: 301 | 308; location: string };

// Fetches one package/property; null when the backend says it doesn't exist
const fetchItem = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {
    signal: AbortSignal.timeout(5000),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${path} responded ${res.status}`);
  return res.json();
};

const resolveDetail = async (
  basePath: string,
  slug: string,
  apiPath: (id: string) => string,
  getSeo: typeof getPackageSeo | typeof getPropertySeo,
): Promise<PageResult> => {
  const id = slug.split("-").pop() ?? "";
  if (!/^\d+$/.test(id)) return { status: 404, seo: NOT_FOUND_SEO };

  const data = await fetchItem(apiPath(id));
  const seo = data && getSeo(data);
  if (!seo) return { status: 404, seo: NOT_FOUND_SEO };

  if (seo.slug !== slug)
    return { status: 301, location: `${basePath}/${seo.slug}` };

  return { status: 200, seo };
};

const resolvePage = async (path: string): Promise<PageResult> => {
  if (path !== "/" && path.endsWith("/"))
    return { status: 308, location: path.replace(/\/+$/, "") || "/" };

  const staticPage = STATIC_PAGES.get(path);
  if (staticPage) return { status: 200, seo: staticPage };

  if (path === "/authenticate" || path.startsWith("/admin"))
    return { status: 200, seo: PRIVATE_SEO };

  const [, section, slug, ...rest] = path.split("/");

  if (slug && !rest.length) {
    if (section === "pronat")
      return resolveDetail(
        "/pronat",
        slug,
        (id) => `/property?id=${id}`,
        getPropertySeo,
      );

    if (section === "paketa-turistike")
      return resolveDetail(
        "/paketa-turistike",
        slug,
        (id) => `/package?packageId=${id}`,
        getPackageSeo,
      );
  }

  return { status: 404, seo: NOT_FOUND_SEO };
};

const CACHE = {
  200: "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
  404: "public, max-age=0, s-maxage=60",
  error: "public, max-age=0, s-maxage=30",
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.searchParams.get("__path") ?? "/";

  let result: PageResult;
  let cache: string;

  try {
    result = await resolvePage(path);
    cache = result.status === 404 ? CACHE[404] : CACHE[200];
  } catch (err) {
    console.error(`SEO lookup failed for ${path}:`, err);
    result = { status: 200, seo: FALLBACK_SEO };
    cache = CACHE.error;
  }

  if ("location" in result) {
    return new Response(null, {
      status: result.status,
      headers: { Location: result.location, "Cache-Control": CACHE[200] },
    });
  }

  return new Response(replaceHead(template, result.seo), {
    status: result.status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": cache,
    },
  });
}
