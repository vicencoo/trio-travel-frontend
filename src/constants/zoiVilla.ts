// Zoi Villa Residence (Tiranë): the residence and its 15 apartments, shown on
// /rezidenca-zoi-villa. The data lives here (not in the backend) so the pages,
// vite.config.ts and the Vercel functions in /api can all read it. Keep this
// file free of React, browser APIs and "@/" imports.
//
// To update an apartment (e.g. mark it sold), change its `status` below.

export const ZOI_VILLA_PATH = "/rezidenca-zoi-villa";

// Photos and floor plans are served from the residence's own image folder.
// To host them on triotravel.al instead, copy them to /public/images/zoi-villa
// and set this to "/images/zoi-villa".
const IMAGES = "https://www.zoi-villa.al/images";

export type ZoiUnitStatus = "available" | "sold";
export type ZoiUnitType = "2+1" | "3+1";

export type ZoiUnit = {
  slug: string;
  stair: number;
  number: number;
  type: ZoiUnitType;
  status: ZoiUnitStatus;
  floor: number;
  orientation: string;
  /** Gross area in m² */
  area: number;
  /** Net (usable) area in m² */
  netArea: number;
  bedrooms: number;
  bathrooms: number;
  shortDescription: string;
  description: string;
  gallery: string[];
  floorPlan: string;
};

export const ZOI_VILLA = {
  name: "Zoi Villa Residence",
  city: "Tiranë",
  country: "Shqipëri",
  tagline: "Apartamente moderne 2+1 dhe 3+1 në Tiranë",
  intro:
    "Rezidencë private për banim, me apartamente moderne të projektuara për qetësi, privatësi dhe jetesë premium. Apartamentet janë të organizuara në 4 shkallë banimi, me 15 njësi gjithsej dhe 31 vende parkimi opsionale.",
  coverImage: `${IMAGES}/apartments.webp`,
  shareImage: `${IMAGES}/ZOI_Villa_Residence.webp`,
  stairs: 4,
  parkingSpots: 31,
  kitchen: "Open space",
  parking: "Opsional",
  price: "Me kërkesë",
  geo: { latitude: 41.3135505, longitude: 19.8560522 },
  features: [
    "Ndriçim natyral",
    "Organizim funksional",
    "Izolim termik dhe akustik",
    "Dritare me dopio xham",
    "Ashensor në ndërtesë",
    "Hyrje e sigurt",
    "Materiale cilësore ndërtimi",
  ],
} as const;

type UnitInput = Omit<ZoiUnit, "slug" | "gallery" | "floorPlan"> & {
  // Gallery file names inside /apartments/stair{n}/ (the shared photo first)
  photos: [string, string];
};

const unit = ({ photos, ...data }: UnitInput): ZoiUnit => {
  const folder = `${IMAGES}/apartments/stair${data.stair}`;
  return {
    ...data,
    slug: `shkalla-${data.stair}-apartamenti-${data.number}`,
    gallery: [
      `${IMAGES}/apartments/app-img.avif`,
      ...photos.map((photo) => `${folder}/${photo}`),
    ],
    floorPlan: `${folder}/app-${data.number}-plan.avif`,
  };
};

export const ZOI_UNITS: ZoiUnit[] = [
  // Shkalla 1
  unit({
    stair: 1,
    number: 1,
    type: "2+1",
    status: "available",
    floor: 0,
    orientation: "Jug-Lindje",
    area: 125.9,
    netArea: 109.9,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription:
      "Apartament elegant me hapësira të bollshme dhe ndriçim natyral.",
    description:
      "Njësi banimi moderne, e përshtatshme për familje, me organizim praktik dhe ambient dite të hapur.",
    photos: ["app-1-stair.avif", "app-1-2-stair.avif"],
  }),
  unit({
    stair: 1,
    number: 2,
    type: "2+1",
    status: "available",
    floor: 1,
    orientation: "Perëndim",
    area: 126.1,
    netArea: 110,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription: "Apartament kompakt, ideal për çift ose investim.",
    description:
      "Njësi 2+1 me planimetri efikase, ballkon funksional dhe ambient të ndriçuar.",
    photos: ["app-2-stair.avif", "app-2-stair-2.avif"],
  }),
  unit({
    stair: 1,
    number: 3,
    type: "2+1",
    status: "available",
    floor: 1,
    orientation: "Lindje",
    area: 154.9,
    netArea: 135.17,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription:
      "Apartament familjar me orientim të mirë dhe shpërndarje praktike.",
    description:
      "Hapësirë e balancuar mes zonës së ditës dhe zonës së natës, me dy tualete.",
    photos: ["app-3-stair.avif", "app-3-stair-2.avif"],
  }),
  unit({
    stair: 1,
    number: 4,
    type: "2+1",
    status: "sold",
    floor: 2,
    orientation: "Jug-Perëndim",
    area: 125.1,
    netArea: 109.12,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription:
      "Apartament i madh për familje që kërkojnë komoditet maksimal.",
    description:
      "Njësi 2+1 me dy ballkone, hapësira të mëdha dhe orientim shumë të favorshëm.",
    photos: ["app-4-stair.avif", "app-4-stair-2.avif"],
  }),
  unit({
    stair: 1,
    number: 5,
    type: "3+1",
    status: "sold",
    floor: 2,
    orientation: "Veri-Lindje",
    area: 175.2,
    netArea: 152.84,
    bedrooms: 3,
    bathrooms: 2,
    shortDescription:
      "Apartament i qetë dhe funksional me organizim të pastër.",
    description:
      "Zgjidhje ideale për banim familjar, me tre dhoma gjumi dhe dy tualete.",
    photos: ["app-5-stair.avif", "app-5-stair-2.avif"],
  }),

  // Shkalla 2
  unit({
    stair: 2,
    number: 1,
    type: "2+1",
    status: "available",
    floor: 0,
    orientation: "Jug",
    area: 132.5,
    netArea: 115.65,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription:
      "Apartament i ndriçuar me orientim jugor dhe planimetri elegante.",
    description:
      "Njësi banimi e përshtatshme për familje, me hapësira të bollshme.",
    photos: ["app-1-stair.avif", "app-1-stair-2.avif"],
  }),
  unit({
    stair: 2,
    number: 2,
    type: "3+1",
    status: "available",
    floor: 0,
    orientation: "Jug-Perëndim",
    area: 175.1,
    netArea: 152.77,
    bedrooms: 3,
    bathrooms: 2,
    shortDescription: "Apartament premium me hapësira të mëdha.",
    description:
      "Njësi 3+1 për familje që kërkojnë standard të lartë banimi, komoditet dhe privatësi.",
    photos: ["app-2-stair.avif", "app-2-stair-2.avif"],
  }),

  // Shkalla 3
  unit({
    stair: 3,
    number: 1,
    type: "2+1",
    status: "available",
    floor: 1,
    orientation: "Lindje",
    area: 168.51,
    netArea: 108.8,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription:
      "Apartament praktik dhe i ngrohtë, ideal për banim ose investim.",
    description:
      "Njësi 2+1 me hapësira të bollshme dhe ndriçim të mirë natyral.",
    photos: ["app-1-stair.avif", "app-1-stair-2.avif"],
  }),
  unit({
    stair: 3,
    number: 2,
    type: "2+1",
    status: "available",
    floor: 2,
    orientation: "Jug-Lindje",
    area: 154.7,
    netArea: 135,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription: "Apartament i gjerë me orientim të shkëlqyer.",
    description:
      "Njësi 2+1 e projektuar për komoditet familjar, me zonë dite të hapur dhe dhoma të rregullta.",
    photos: ["app-2-stair.avif", "app-2-stair-2.avif"],
  }),
  unit({
    stair: 3,
    number: 3,
    type: "3+1",
    status: "available",
    floor: 2,
    orientation: "Perëndim",
    area: 163.9,
    netArea: 143,
    bedrooms: 3,
    bathrooms: 1,
    shortDescription: "Apartament i bollshëm 3+1 me organizim të qartë.",
    description:
      "Njësi e përshtatshme për familje të madhe, me tre dhoma gjumi dhe ambient dite komod.",
    photos: ["app-3-stair.avif", "app-3-stair-2.avif"],
  }),

  // Shkalla 4
  unit({
    stair: 4,
    number: 1,
    type: "2+1",
    status: "available",
    floor: 0,
    orientation: "Jug",
    area: 100.8,
    netArea: 88,
    bedrooms: 2,
    bathrooms: 1,
    shortDescription:
      "Apartament me orientim jugor dhe hapësira të organizuara mirë.",
    description:
      "Njësi moderne për familje, me sallon të hapur dhe dy dhoma gjumi.",
    photos: ["app-1-stair.avif", "app-1-stair-2.avif"],
  }),
  unit({
    stair: 4,
    number: 2,
    type: "3+1",
    status: "available",
    floor: 0,
    orientation: "Lindje",
    area: 193.2,
    netArea: 168.5,
    bedrooms: 3,
    bathrooms: 2,
    shortDescription: "Apartament i bollshëm 3+1 me organizim të qartë.",
    description:
      "Njësi e përshtatshme për familje të madhe, me tre dhoma gjumi dhe ambient dite komod.",
    photos: ["app-2-stair.avif", "app-2-stair-2.avif"],
  }),
  unit({
    stair: 4,
    number: 3,
    type: "2+1",
    status: "sold",
    floor: 1,
    orientation: "Jug-Perëndim",
    area: 112,
    netArea: 97.75,
    bedrooms: 2,
    bathrooms: 1,
    shortDescription: "Apartament i gjerë 2+1 me orientim shumë të favorshëm.",
    description: "Njësi e bollshme, me dy dhoma gjumi dhe ambient dite komod.",
    photos: ["app-3-stair.avif", "app-3-stair-2.avif"],
  }),
  unit({
    stair: 4,
    number: 4,
    type: "3+1",
    status: "sold",
    floor: 1,
    orientation: "Jug-Lindje",
    area: 179.77,
    netArea: 120,
    bedrooms: 3,
    bathrooms: 2,
    shortDescription: "Apartament premium 3+1 me sipërfaqe të madhe.",
    description:
      "Njësi ideale për familje të mëdha, me hapësira elegante, privatësi dhe orientim shumë të mirë.",
    photos: ["app-4-stair.avif", "app-4-stair-2.avif"],
  }),
  unit({
    stair: 4,
    number: 5,
    type: "2+1",
    status: "available",
    floor: 2,
    orientation: "Perëndim",
    area: 137.7,
    netArea: 120.15,
    bedrooms: 2,
    bathrooms: 2,
    shortDescription:
      "Apartament modern me pamje të hapur dhe ambient të rehatshëm.",
    description:
      "Njësi 2+1 me organizim efikas, dy tualete, dy dhoma gjumi dhe hapësira të përshtatshme për banim familjar.",
    photos: ["app-5-stair.avif", "app-5-stair-2.avif"],
  }),
];

export const ZOI_STAIRS = [...new Set(ZOI_UNITS.map((u) => u.stair))];

export const getZoiUnit = (slug: string | undefined) =>
  ZOI_UNITS.find((u) => u.slug === slug);

export const zoiUnitPath = (u: ZoiUnit) => `${ZOI_VILLA_PATH}/${u.slug}`;

export const zoiUnitName = (u: ZoiUnit) =>
  `Apartament ${u.type}, Shkalla ${u.stair}, Nr. ${u.number}`;

export const zoiFloorLabel = (floor: number) =>
  floor === 0 ? "Kati përdhe" : `Kati ${floor}`;

export const zoiStatusLabel = (status: ZoiUnitStatus) =>
  status === "sold" ? "E shitur" : "Në shitje";

export const formatArea = (value: number) =>
  `${value.toLocaleString("sq-AL", { maximumFractionDigits: 2 })} m²`;
