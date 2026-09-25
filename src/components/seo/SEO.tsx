import { Helmet } from "react-helmet-async";
import type { SEOProps } from "./types";
import { buildHeadTags, buildJsonLd } from "@/seo/head";

export const SEO = (props: SEOProps) => {
  return (
    <Helmet>
      <title>{props.title}</title>

      {buildHeadTags(props).map(({ tag, attrs }) =>
        tag === "link" ? (
          <link key={`link-${attrs.rel}`} {...attrs} />
        ) : (
          <meta key={attrs.name ?? attrs.property} {...attrs} />
        ),
      )}

      <script type="application/ld+json">{buildJsonLd(props)}</script>
    </Helmet>
  );
};
