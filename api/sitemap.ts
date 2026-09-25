// Served at /sitemap.xml (see vercel.json). Built on every request from the
// backend, so new packages/properties appear without a redeploy.

import { createSlug } from "../src/utils/createSlug.js";
import { PAGE_SEO } from "../src/seo/pages.js";
import { SITE_URL } from "../src/seo/site.js";

const API_URL = (
  process.env.VITE_LOCAL || "https://trio-travel-backend-mysql.vercel.app"
).replace(/\/$/, "");

type SitemapEntry = {
  loc: string;
  lastmod?: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
};

type ApiItem = { id: number; title: string; updatedAt?: string };

const PAGE_SETTINGS: Record<
  keyof typeof PAGE_SEO,
  Pick<SitemapEntry, "changefreq" | "priority">
> = {
  home: { changefreq: "daily", priority: "1.0" },
  packages: { changefreq: "daily", priority: "0.9" },
  turkeyPackages: { changefreq: "daily", priority: "0.9" },
  properties: { changefreq: "daily", priority: "0.9" },
  destinations: { changefreq: "weekly", priority: "0.8" },
  planeTickets: { changefreq: "weekly", priority: "0.8" },
  contact: { changefreq: "monthly", priority: "0.7" },
};

const STATIC_PAGES: SitemapEntry[] = Object.entries(PAGE_SETTINGS).map(
  ([key, settings]) => ({
    loc: PAGE_SEO[key as keyof typeof PAGE_SEO].path,
    ...settings,
  }),
);

// Walks every page of a paginated list endpoint
const fetchAll = async (
  path: string,
  listKey: string,
  limitParam: string,
): Promise<ApiItem[]> => {
  const items: ApiItem[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const res = await fetch(
      `${API_URL}${path}?${limitParam}=100&page=${page}&status=active`,
    );
    if (!res.ok) throw new Error(`${path} responded ${res.status}`);

    const data = await res.json();
    items.push(...(data[listKey] ?? []));
    totalPages = data.pagination?.totalPages ?? 1;
    page++;
  } while (page <= totalPages);

  return items;
};

const toEntries = (
  items: ApiItem[],
  basePath: string,
): SitemapEntry[] => {
  const byId = new Map(items.map((item) => [item.id, item]));

  return [...byId.values()]
    .filter((item) => createSlug(item.title, item.id))
    .map((item) => ({
      loc: `${basePath}/${createSlug(item.title, item.id)}`,
      lastmod: item.updatedAt?.slice(0, 10),
      changefreq: "weekly",
      priority: "0.8",
    }));
};

const renderUrl = ({ loc, lastmod, changefreq, priority }: SitemapEntry) =>
  [
    "  <url>",
    `    <loc>${SITE_URL}${loc}</loc>`,
    lastmod && `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");

export async function GET() {
  const [packages, turkeyPackages, properties] = await Promise.allSettled([
    fetchAll("/packages", "packages", "packageLimit"),
    fetchAll("/turkey-packages", "packages", "packageLimit"),
    fetchAll("/properties", "properties", "limit"),
  ]);

  const valueOf = (result: PromiseSettledResult<ApiItem[]>) => {
    if (result.status === "fulfilled") return result.value;
    console.error("Sitemap fetch failed:", result.reason);
    return [];
  };

  const entries = [
    ...STATIC_PAGES,
    ...toEntries(
      [...valueOf(packages), ...valueOf(turkeyPackages)],
      "/paketa-turistike",
    ),
    ...toEntries(valueOf(properties), "/pronat"),
  ];

  const anyFailed = [packages, turkeyPackages, properties].some(
    (result) => result.status === "rejected",
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(renderUrl).join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Cache at the edge for an hour; retry sooner if the backend failed
      "Cache-Control": anyFailed
        ? "public, s-maxage=60"
        : "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
