import { FAQ_INFO } from "./faq";

export const faqPageSchema = {
  "@type": "FAQPage",
  "@id": "https://www.triotravel.al#faq",
  mainEntity: FAQ_INFO.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const homeSchema = [
  {
    "@type": "TravelAgency",
    "@id": "https://www.triotravel.al#travelagency",
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
  },
  faqPageSchema,
];

export const propertiesSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/pronat#collection",
    name: "Prona në Shitje në Shqipëri",
    url: "https://www.triotravel.al/pronat",
    description:
      "Gjeni prona në shitje në Shqipëri, apartamente, vila dhe prona për investim në lokacionet më të kërkuara.",
    inLanguage: "sq-AL",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.triotravel.al#website",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
    },
    about: {
      "@type": "Thing",
      name: "Prona në shitje, apartamente, vila dhe investime imobiliare në Shqipëri",
    },
    mainEntity: {
      "@id": "https://www.triotravel.al#realestate",
    },
  },
  {
    "@type": "RealEstateAgent",
    "@id": "https://www.triotravel.al#realestate",
    name: "Trio Travel & Immo",
    url: "https://www.triotravel.al/pronat",
    logo: "https://www.triotravel.al/images/trio-travel-icon.webp",
    image: "https://www.triotravel.al/images/trio-travel-properties-og.webp",
    telephone: "+355696900916",
    areaServed: {
      "@type": "Country",
      name: "Albania",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kryqezimi Rinia, Pallati i Kollozit",
      addressLocality: "Vlorë",
      postalCode: "9400",
      addressCountry: "AL",
    },
    knowsAbout: [
      "Prona në shitje",
      "Apartamente në shitje",
      "Vila në shitje",
      "Prona bregdetare",
      "Investime imobiliare",
      "Real Estate Albania",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prona në Shitje",
          description:
            "Shërbim për gjetjen dhe prezantimin e pronave në shitje në Shqipëri.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apartamente dhe Vila",
          description:
            "Apartamente, vila dhe prona të zgjedhura në lokacione të kërkuara.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prona për Investim",
          description: "Prona të përshtatshme për investim në Shqipëri.",
        },
      },
    ],
  },
];

export const packagesSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/paketa-turistike#collection",
    name: "Paketa Turistike",
    url: "https://www.triotravel.al/paketa-turistike",
    description:
      "Zbuloni paketa turistike me Trio Travel & Immo ose krijoni paketën tuaj të personalizuar sipas destinacionit, buxhetit dhe datave të udhëtimit.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.triotravel.al#website",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
    },
  },
  {
    "@type": "TravelAgency",
    "@id": "https://www.triotravel.al#travelagency",
    name: "Trio Travel & Immo",
    url: "https://www.triotravel.al",
    telephone: "+355696900916",
    areaServed: "Albania",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paketa Turistike dhe Udhëtime të Personalizuara",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paketa Turistike",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paketa të Personalizuara Udhëtimi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Udhëtime të Organizuara",
          },
        },
      ],
    },
  },
];

export const turkeyPackagesSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/paketa-turistike-turqi#collection",
    name: "Paketa Turistike Turqi",
    url: "https://www.triotravel.al/paketa-turistike-turqi",
    description:
      "Zbuloni paketa turistike për Turqi me oferta për Stamboll, Antalya, Bodrum dhe destinacione të tjera.",
    inLanguage: "sq-AL",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.triotravel.al#website",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
    },
    about: {
      "@type": "Place",
      name: "Turqi",
    },
  },
  {
    "@type": "TravelAgency",
    "@id": "https://www.triotravel.al#travelagency",
    name: "Trio Travel & Immo",
    url: "https://www.triotravel.al",
    telephone: "+355696900916",
    areaServed: "Albania",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paketa Turistike për Turqi",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Paketa turistike Stamboll",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Paketa turistike Antalya",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Paketa turistike Bodrum",
          },
        },
      ],
    },
  },
];

export const planeTicketsSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/bileta-avioni#collection",
    name: "Bileta Avioni & Oferta Fluturimesh",
    url: "https://www.triotravel.al/bileta-avioni",
    description:
      "Gjeni bileta avioni dhe oferta fluturimesh për destinacione të ndryshme me Trio Travel & Immo.",
    inLanguage: "sq-AL",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.triotravel.al#website",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
    },
    about: {
      "@type": "Thing",
      name: "Bileta avioni, fluturime dhe rezervime udhëtimi",
    },
    mainEntity: {
      "@id": "https://www.triotravel.al#travelagency",
    },
  },

  {
    "@type": "TravelAgency",
    "@id": "https://www.triotravel.al#travelagency",
    name: "Trio Travel & Immo",
    url: "https://www.triotravel.al",
    logo: "https://www.triotravel.al/images/trio-travel-icon.webp",
    image: "https://www.triotravel.al/images/plane-ticket-cover.webp",
    telephone: "+355696900916",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Kryqezimi Rinia, Pallati i Kollozit",
      addressLocality: "Vlorë",
      postalCode: "9400",
      addressCountry: "AL",
    },

    areaServed: {
      "@type": "Country",
      name: "Albania",
    },

    priceRange: "€€",

    knowsAbout: [
      "Bileta Avioni",
      "Oferta Fluturimesh",
      "Rezervime Fluturimesh",
      "Udhëtime Ndërkombëtare",
      "Udhëtime Europiane",
      "Planifikim Udhëtimi",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bileta Avioni dhe Oferta Fluturimesh",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bileta Avioni",
            description:
              "Rezervim biletash avioni për destinacione të ndryshme në Europë dhe botë.",
          },
        },

        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Oferta Fluturimesh",
            description:
              "Oferta fluturimesh sipas destinacionit dhe datave të udhëtimit.",
          },
        },

        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asistencë Udhëtimi",
            description:
              "Ndihmë për zgjedhjen, rezervimin dhe organizimin e fluturimit.",
          },
        },
      ],
    },
  },
];

export const destinationsSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/destinacionet#collection",
    name: "Destinacione Turistike",
    url: "https://www.triotravel.al/destinacionet",
    description:
      "Zbuloni destinacione turistike për pushime, udhëtime në Europë, Turqi, Dubai dhe paketa të personalizuara me Trio Travel & Immo.",
    inLanguage: "sq-AL",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.triotravel.al#website",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
    },
    about: {
      "@type": "Thing",
      name: "Destinacione turistike, pushime dhe udhëtime të personalizuara",
    },
    mainEntity: {
      "@id": "https://www.triotravel.al#travelagency",
    },
  },
  {
    "@type": "TravelAgency",
    "@id": "https://www.triotravel.al#travelagency",
    name: "Trio Travel & Immo",
    url: "https://www.triotravel.al",
    logo: "https://www.triotravel.al/images/trio-travel-icon.webp",
    image: "https://www.triotravel.al/images/trio-travel-package-og.webp",
    telephone: "+355696900916",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kryqezimi Rinia, Pallati i Kollozit",
      addressLocality: "Vlorë",
      postalCode: "9400",
      addressCountry: "AL",
    },
    areaServed: {
      "@type": "Country",
      name: "Albania",
    },
    knowsAbout: [
      "Destinacione turistike",
      "Paketa turistike",
      "Udhëtime të personalizuara",
      "Pushime në Europë",
      "Pushime në Turqi",
      "Pushime në Dubai",
      "Planifikim udhëtimi",
    ],
  },
];
