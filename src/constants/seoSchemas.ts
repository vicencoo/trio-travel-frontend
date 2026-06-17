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

export const planeTicketsSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/bileta-avioni#collection",
    name: "Bileta Avioni",
    url: "https://www.triotravel.al/bileta-avioni",
    description:
      "Gjeni bileta avioni dhe oferta fluturimesh të ndryshme me Trio Travel & Immo.",
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
      name: "Bileta Avioni dhe Oferta Fluturimesh",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bileta Avioni",
            description:
              "Rezervim biletash avioni për destinacione të ndryshme.",
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
            description: "Ndihmë për zgjedhjen dhe organizimin e fluturimit.",
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
    name: "Destinacione Udhëtimi",
    url: "https://www.triotravel.al/destinacionet",
    description:
      "Zbuloni destinacionet më të pëlqyera për pushime me Trio Travel & Immo.",
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
    knowsAbout: [
      "Destinacione turistike",
      "Paketa turistike",
      "Udhëtime të personalizuara",
      "Pushime në Europë",
      "Pushime në Turqi",
      "Pushime në Dubai",
    ],
  },
];
