import { House, KeyRound } from "@/icons";

export type ListingType = "all" | "rent" | "sale";

// The listing filter lives in the query string (/pronat?lloji=qira) so it can
// be linked to and shared. A query param is used instead of a sub-path because
// /pronat/:slug is already taken by the property detail pages.
export const LISTING_PARAM = "lloji";

const LISTING_TO_PARAM: Record<Exclude<ListingType, "all">, string> = {
  rent: "qira",
  sale: "shitje",
};

export const parseListingType = (value: string | null): ListingType => {
  if (value === LISTING_TO_PARAM.rent) return "rent";
  if (value === LISTING_TO_PARAM.sale) return "sale";
  return "all";
};

export const listingParamFor = (type: ListingType) =>
  type === "all" ? null : LISTING_TO_PARAM[type];

export const propertiesPathFor = (type: ListingType) => {
  const param = listingParamFor(type);
  return param ? `/pronat?${LISTING_PARAM}=${param}` : "/pronat";
};

export const PROPERTY_LISTING_LINKS = [
  {
    id: 1,
    type: "rent",
    title: "Prona me qira",
    text: "Apartamente, shtëpi dhe ambiente për qira",
    icon: KeyRound,
    path: propertiesPathFor("rent"),
  },
  {
    id: 2,
    type: "sale",
    title: "Prona në shitje",
    text: "Apartamente, vila dhe toka në shitje",
    icon: House,
    path: propertiesPathFor("sale"),
  },
] as const;
