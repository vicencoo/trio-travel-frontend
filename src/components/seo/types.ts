export type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: {
    name: string;
    item: string;
  }[];
};
