export const propertiesSchema = [
  {
    "@type": "CollectionPage",
    "@id": "https://www.triotravel.al/pronat#collection",
    name: "Prona në Shitje në Shqipëri",
    url: "https://www.triotravel.al/pronat",
    description:
      "Gjeni prona në shitje në Shqipëri, apartamente, vila dhe prona për investim në lokacionet më të kërkuara.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.triotravel.al#website",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
    },
  },
  {
    "@type": "RealEstateAgent",
    "@id": "https://www.triotravel.al#realestate",
    name: "Trio Travel & Immo",
    url: "https://www.triotravel.al/pronat",
    telephone: "+355696900916",
    areaServed: "Albania",
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
