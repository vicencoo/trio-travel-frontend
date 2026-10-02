import { BadgeCheck, MapPin, Plane } from "@/icons";
import type { HomeBannerSliderTypes } from "@/components/homeBanners/types";

export const homePageBanners: HomeBannerSliderTypes["banners"] = [
  {
    id: 1,
    title: "Paketa turistike për Krishtlindje",
    badge: "Oferta për festat",
    image: "/images/christmas-banner.webp",
    mobileImage: "/images/christmas-banner-mobile.webp",
    text: `Festoni Krishtlindjet dhe Vitin e Ri në destinacionet më magjike, me fluturime, hotele dhe itinerare të përgatitura për ju.`,
    info: [
      { id: 1, icon: Plane, text: "Fluturime & hotele" },
      { id: 2, icon: MapPin, text: "Tregjet e Krishtlindjeve" },
      { id: 3, icon: BadgeCheck, text: "Paketa me asistencë" },
    ],
    buttonText: "Shiko paketat e Krishtlindjeve",
    buttonUrl: "/paketa-turistike-krishtlindje",
  },
  {
    id: 2,
    title: "Paketa turistike Turqi",
    badge: "Destinacion i kërkuar",
    image: "/images/turkey-banner.webp",
    mobileImage: "/images/turkey-banner-mobile.webp",
    text: `Shikoni ofertat për Stamboll, Antalya, Bodrum dhe qytete të tjera të Turqisë me hotele, fluturime dhe itinerare të përshtatura për familje, çifte ose grupe.`,
    info: [
      { id: 1, icon: Plane, text: "Fluturime & hotele" },
      { id: 2, icon: MapPin, text: "Antalya & Stamboll" },
      { id: 3, icon: BadgeCheck, text: "Paketa me asistencë" },
    ],
    buttonText: "Shiko paketa turistike Turqi",
    buttonUrl: "/paketa-turistike-turqi",
  },
];
