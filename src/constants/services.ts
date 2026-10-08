// Content of the service landing pages (insurance, bill payments, fines,
// MoneyGram, e-Albania). Shared by the React pages and src/seo, so keep it
// free of React, browser APIs and "@/" aliases.

export type ServiceGroup = "insurance" | "payments" | "assistance";

export type ServiceIconKey =
  | "insurance"
  | "car"
  | "motorbike"
  | "boat"
  | "property"
  | "life"
  | "travel"
  | "bills"
  | "fines"
  | "moneygram"
  | "eAlbania";

export type ServiceFaq = {
  id: number;
  slug: string;
  question: string;
  answer: string;
};

export type ServicePage = {
  key: string;
  path: string;
  group: ServiceGroup;
  icon: ServiceIconKey;
  // Short label for menus, cards and breadcrumbs
  name: string;
  // One line for cards and menus
  summary: string;
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  intro: string;
  image: string;
  ogImage: string;
  imageAlt: string;
  highlights: { title: string; text: string }[];
  documents: string[];
  steps: string[];
  faqs: ServiceFaq[];
  whatsappMessage: string;
  // Other service pages listed under this one (used by /siguracione)
  children?: { heading: string; text: string; keys: string[] };
};

export const SERVICE_GROUPS: Record<
  ServiceGroup,
  { name: string; text: string }
> = {
  insurance: {
    name: "Siguracione Albsig",
    text: "Siguracione për automjete, motorra, mjete lundruese, prona, jetë dhe udhëtime.",
  },
  payments: {
    name: "Pagesa & Transferta",
    text: "Pagesa faturash dhe gjobash, si dhe dërgim e marrje parash me MoneyGram.",
  },
  assistance: {
    name: "Asistencë & Dokumente",
    text: "Ndihmë me aplikimet dhe dokumentet në portalin e-Albania.",
  },
};

const IMAGE_DIR = "/images/services";

const images = (name: string) => ({
  image: `${IMAGE_DIR}/${name}.webp`,
  ogImage: `${IMAGE_DIR}/${name}-og.webp`,
});

const faqs = (
  prefix: string,
  items: { slug: string; question: string; answer: string }[],
): ServiceFaq[] =>
  items.map((item, index) => ({
    id: index + 1,
    ...item,
    slug: `${prefix}-${item.slug}`,
  }));

const LOCAL_KEYWORDS = [
  "Trio Travel Vlore",
  "agjenci Vlore",
  "Kryqezimi Rinia Vlore",
];

export const SERVICE_PAGES: ServicePage[] = [
  {
    key: "insurance",
    path: "/siguracione",
    group: "insurance",
    icon: "insurance",
    name: "Siguracione",
    summary: "Të gjitha llojet e siguracioneve Albsig në një vend.",
    title: "Siguracione Albsig në Vlorë | Trio Travel & Immo",
    description:
      "Siguracione Albsig në Vlorë: automjete, motorra, mjete lundruese, prona, jetë dhe udhëtime. Ofertë dhe policë e shpejtë te Trio Travel & Immo, Kryqëzimi Rinia.",
    keywords: [
      "siguracione Vlore",
      "siguracion Vlore",
      "sigurime Vlore",
      "agjenci sigurimesh Vlore",
      "Albsig Vlore",
      "siguracion Albsig",
      "siguracion makine",
      "siguracion shtepie",
      "siguracion jete",
      "siguracion udhetimi",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracione Albsig në Vlorë",
    intro:
      "Në Trio Travel & Immo bëni çdo lloj siguracioni me Albsig, pa radhë dhe pa humbur kohë. Ju shpjegojmë qartë mbulimet, krahasojmë opsionet sipas nevojës suaj dhe jua lëshojmë policën në zyrën tonë në Kryqëzimin Rinia, Vlorë.",
    ...images("siguracione"),
    imageAlt: "Siguracione Albsig në Vlorë te Trio Travel & Immo",
    highlights: [
      {
        title: "Automjete & motorra",
        text: "TPL i detyrueshëm, Kasko, Kartoni Jeshil për udhëtime jashtë vendit dhe siguracion motorri.",
      },
      {
        title: "Prona & mjete lundruese",
        text: "Siguracion për shtëpi, apartamente, biznese, varka, gomone dhe jahte.",
      },
      {
        title: "Jetë, shëndet & udhëtime",
        text: "Siguracion jete, aksidentesh personale dhe siguracion shëndetësor udhëtimi për vizë.",
      },
      {
        title: "Kujtesë për skadencën",
        text: "Ju njoftojmë para se t'ju skadojë polica, që të mos mbeteni pa mbulim.",
      },
    ],
    documents: [
      "Kartë identiteti ose pasaportë e vlefshme",
      "Dokumenti i pronësisë së mjetit ose pronës (sipas siguracionit)",
      "Polica e mëparshme, nëse e keni",
    ],
    steps: [
      "Na kontaktoni ose ejani në zyrë dhe na tregoni çfarë doni të siguroni.",
      "Ju shpjegojmë mbulimet dhe çmimin e saktë para se të vendosni.",
      "Plotësojmë dokumentet dhe ju lëshojmë policën Albsig menjëherë.",
    ],
    faqs: faqs("siguracione", [
      {
        slug: "cfare-siguracionesh",
        question: "Çfarë siguracionesh mund të bëj te Trio Travel & Immo?",
        answer:
          "Te ne mund të bëni siguracione Albsig për automjete (TPL, Kasko, Kartoni Jeshil), motorra, mjete lundruese, shtëpi dhe prona, siguracion jete dhe siguracion udhëtimi.",
      },
      {
        slug: "kompania",
        question: "Me cilën kompani sigurimi punoni?",
        answer:
          "Punojmë me Albsig, një nga kompanitë më të njohura të sigurimeve në Shqipëri. Polica ju lëshohet drejtpërdrejt në zyrën tonë në Vlorë.",
      },
      {
        slug: "sa-kohe",
        question: "Sa kohë duhet për të bërë një siguracion?",
        answer:
          "Për shumicën e siguracioneve, si TPL apo siguracioni i udhëtimit, polica lëshohet brenda pak minutash nëse keni dokumentet me vete.",
      },
      {
        slug: "skadenca",
        question: "A më njoftoni kur më skadon siguracioni?",
        answer:
          "Po. Mbajmë shënim skadencat e policave të klientëve tanë dhe ju kontaktojmë para afatit, që ta rinovoni në kohë.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua informacion për siguracionet Albsig. Çfarë më duhet për të bërë një policë?",
    children: {
      heading: "Llojet e siguracioneve",
      text: "Zgjidhni siguracionin që ju duhet për më shumë informacion",
      keys: [
        "carInsurance",
        "motorbikeInsurance",
        "boatInsurance",
        "propertyInsurance",
        "lifeInsurance",
        "travelInsurance",
      ],
    },
  },
  {
    key: "carInsurance",
    path: "/siguracion-automjeti",
    group: "insurance",
    icon: "car",
    name: "Siguracion Automjeti",
    summary: "TPL, Kasko dhe Kartoni Jeshil për makinën tuaj.",
    title: "Siguracion Makine në Vlorë – TPL, Kasko, Kartoni Jeshil | Trio Travel",
    description:
      "Bëni siguracion makine në Vlorë me Albsig: TPL i detyrueshëm, Kasko dhe Kartoni Jeshil për jashtë shtetit. Policë e shpejtë te Trio Travel & Immo.",
    keywords: [
      "siguracion makine",
      "siguracion makine Vlore",
      "siguracion automjeti",
      "siguracion automjeti Vlore",
      "TPL",
      "siguracion TPL",
      "TPL Vlore",
      "Kasko",
      "siguracion Kasko",
      "kartoni jeshil",
      "kartoni jeshil Vlore",
      "green card makine",
      "siguracion makine Albsig",
      "siguracion kamioni",
      "siguracion furgoni",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracion Automjeti në Vlorë",
    intro:
      "Siguroni makinën, furgonin ose kamionin tuaj me Albsig te Trio Travel & Immo. Bëjmë TPL-në e detyrueshme, Kaskon për mbrojtje të plotë dhe Kartonin Jeshil për të udhëtuar me makinë jashtë Shqipërisë, me policë të lëshuar në vend.",
    ...images("siguracion-automjeti"),
    imageAlt: "Siguracion automjeti TPL dhe Kasko në Vlorë",
    highlights: [
      {
        title: "TPL – siguracion i detyrueshëm",
        text: "Mbulon dëmet që i shkaktoni palëve të treta në aksident. Pa TPL të vlefshme nuk mund të qarkulloni.",
      },
      {
        title: "Kasko",
        text: "Mbron vetë makinën tuaj nga aksidentet, vjedhja, zjarri, xhamat e thyer dhe fatkeqësitë natyrore.",
      },
      {
        title: "Kartoni Jeshil",
        text: "Siguracioni ndërkombëtar që ju duhet për të hyrë me makinë në vendet e Evropës.",
      },
      {
        title: "Çdo lloj automjeti",
        text: "Makina private, furgonë, kamionë, autobusë dhe mjete pune ose biznesi.",
      },
    ],
    documents: [
      "Leja e qarkullimit e automjetit",
      "Kartë identiteti ose pasaportë e pronarit",
      "Polica e mëparshme (për rinovim ose Kasko)",
    ],
    steps: [
      "Na sillni lejen e qarkullimit dhe dokumentin e identitetit.",
      "Zgjidhni TPL, Kasko ose Kartonin Jeshil dhe periudhën e mbulimit.",
      "Paguani dhe merrni policën Albsig menjëherë.",
    ],
    faqs: faqs("siguracion-automjeti", [
      {
        slug: "tpl-detyrueshme",
        question: "A është i detyrueshëm siguracioni TPL?",
        answer:
          "Po. Në Shqipëri çdo automjet që qarkullon duhet të ketë siguracion TPL të vlefshëm. Ai mbulon dëmet që u shkaktohen të tjerëve në rast aksidenti.",
      },
      {
        slug: "tpl-apo-kasko",
        question: "Cili është ndryshimi mes TPL dhe Kasko?",
        answer:
          "TPL mbulon dëmet që u shkaktoni të tjerëve, ndërsa Kasko mbulon dëmet e makinës suaj, edhe kur faji është juaji. Shumë shoferë i kombinojnë të dyja.",
      },
      {
        slug: "kartoni-jeshil",
        question: "Kur më duhet Kartoni Jeshil?",
        answer:
          "Kur udhëtoni me makinë jashtë Shqipërisë, në vendet që e kërkojnë. E bëjmë për periudhën që ju duhet, para nisjes.",
      },
      {
        slug: "dokumente",
        question: "Çfarë dokumentesh duhen për siguracionin e makinës?",
        answer:
          "Mjafton leja e qarkullimit dhe dokumenti i identitetit të pronarit. Për Kasko mund t'ju kërkohen edhe foto të makinës.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua të bëj siguracion makine (TPL / Kasko / Kartoni Jeshil). Sa kushton dhe çfarë më duhet?",
  },
  {
    key: "motorbikeInsurance",
    path: "/siguracion-motorri",
    group: "insurance",
    icon: "motorbike",
    name: "Siguracion Motorri",
    summary: "TPL dhe mbrojtje për motorra dhe skuterë.",
    title: "Siguracion Motorri në Vlorë – TPL për Motor & Skuter | Trio Travel",
    description:
      "Siguracion motorri dhe skuteri në Vlorë me Albsig. TPL e detyrueshme dhe mbulime shtesë, me policë të shpejtë te Trio Travel & Immo.",
    keywords: [
      "siguracion motorri",
      "siguracion motorri Vlore",
      "siguracion motori",
      "siguracion skuteri",
      "TPL motorri",
      "siguracion motocikleti",
      "siguracion motorri Albsig",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracion Motorri në Vlorë",
    intro:
      "Edhe motorri dhe skuteri duhet të kenë siguracion të vlefshëm për të qarkulluar. Te Trio Travel & Immo bëni TPL-në e motorrit dhe mbulime shtesë me Albsig, shpejt dhe me të gjitha shpjegimet që ju duhen.",
    ...images("siguracion-motorri"),
    imageAlt: "Siguracion motorri dhe skuteri në Vlorë",
    highlights: [
      {
        title: "TPL për motorra",
        text: "Siguracioni i detyrueshëm që mbulon dëmet ndaj palëve të treta.",
      },
      {
        title: "Skuterë & motorra të mëdhenj",
        text: "Për çdo kubaturë, nga skuterët e qytetit tek motorrat e udhëtimit.",
      },
      {
        title: "Kartoni Jeshil",
        text: "Nëse udhëtoni me motorr jashtë Shqipërisë.",
      },
      {
        title: "Rinovim në kohë",
        text: "Ju kujtojmë para skadencës, që të mos ndëshkoheni me gjobë.",
      },
    ],
    documents: [
      "Leja e qarkullimit e motorrit",
      "Kartë identiteti ose pasaportë e pronarit",
    ],
    steps: [
      "Na sillni lejen e qarkullimit dhe ID-në.",
      "Zgjidhni periudhën e siguracionit.",
      "Merrni policën Albsig në vend.",
    ],
    faqs: faqs("siguracion-motorri", [
      {
        slug: "detyrueshme",
        question: "A duhet siguracion edhe për skuterin?",
        answer:
          "Po. Çdo mjet motorik që qarkullon në rrugë, përfshirë skuterët, duhet të ketë siguracion TPL të vlefshëm.",
      },
      {
        slug: "sa-kohe",
        question: "Për sa kohë mund ta bëj siguracionin e motorrit?",
        answer:
          "Mund të zgjidhni periudha të ndryshme mbulimi. Ju tregojmë opsionet dhe çmimin për secilën kur na kontaktoni.",
      },
      {
        slug: "jashte-shtetit",
        question: "A mund të udhëtoj me motorr jashtë Shqipërisë?",
        answer:
          "Po, por ju duhet Kartoni Jeshil. E bëjmë te ne bashkë me TPL-në.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua të bëj siguracion për motorrin / skuterin tim. Çfarë më duhet?",
  },
  {
    key: "boatInsurance",
    path: "/siguracion-mjete-lundruese",
    group: "insurance",
    icon: "boat",
    name: "Siguracion Mjete Lundruese",
    summary: "Siguracion për varka, gomone dhe jahte.",
    title: "Siguracion Varke, Gomoneje & Jahti në Vlorë | Trio Travel & Immo",
    description:
      "Siguracion për mjete lundruese në Vlorë me Albsig: varka, gomone, jahte dhe skaf. Mbulim për palët e treta dhe për vetë mjetin te Trio Travel & Immo.",
    keywords: [
      "siguracion mjete lundruese",
      "siguracion varke",
      "siguracion varke Vlore",
      "siguracion gomoneje",
      "siguracion jahti",
      "siguracion skafi",
      "siguracion detar",
      "sigurim mjeti lundrues",
      "siguracion mjete lundruese Albsig",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracion për Mjete Lundruese në Vlorë",
    intro:
      "Vlora jeton me detin, dhe varka, gomonja apo jahti juaj meritojnë mbrojtje të plotë. Te Trio Travel & Immo bëni siguracion me Albsig për mjete lundruese private dhe biznesi, para sezonit ose për gjithë vitin.",
    ...images("siguracion-mjete-lundruese"),
    imageAlt: "Siguracion për varka dhe jahte në Vlorë",
    highlights: [
      {
        title: "Përgjegjësia ndaj palëve të treta",
        text: "Mbulon dëmet që mjeti juaj mund t'u shkaktojë njerëzve ose mjeteve të tjera.",
      },
      {
        title: "Mbrojtje e vetë mjetit",
        text: "Dëme nga aksidentet, stuhitë, zjarri ose vjedhja, sipas policës që zgjidhni.",
      },
      {
        title: "Varka, gomone & jahte",
        text: "Për mjete private, peshkimi ose turizmi detar.",
      },
      {
        title: "Gati para sezonit",
        text: "Rregullojmë policën përpara verës, që të dilni në det pa merak.",
      },
    ],
    documents: [
      "Dokumenti i regjistrimit të mjetit lundrues",
      "Kartë identiteti ose pasaportë e pronarit",
      "Të dhënat e motorit dhe të mjetit (gjatësia, viti i prodhimit)",
    ],
    steps: [
      "Na dërgoni të dhënat e mjetit lundrues.",
      "Ju përgatisim ofertën me mbulimet që ju duhen.",
      "Nënshkruani dhe merrni policën Albsig.",
    ],
    faqs: faqs("siguracion-mjete-lundruese", [
      {
        slug: "cilat-mjete",
        question: "Cilat mjete lundruese mund të siguroj?",
        answer:
          "Varka, gomone, skafe dhe jahte, si për përdorim privat ashtu edhe për biznes, si turizmi apo peshkimi.",
      },
      {
        slug: "cfare-mbulon",
        question: "Çfarë mbulon siguracioni i varkës?",
        answer:
          "Mbulon përgjegjësinë ndaj palëve të treta dhe, sipas policës, edhe dëmet e vetë mjetit nga aksidentet, moti i keq, zjarri ose vjedhja.",
      },
      {
        slug: "kur",
        question: "Kur duhet ta bëj siguracionin e varkës?",
        answer:
          "Mirë është ta bëni para se të filloni lundrimin për sezonin. Ju ndihmojmë ta rregulloni shpejt që të jeni gati për verën.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua informacion për siguracion varke / gomoneje / jahti.",
  },
  {
    key: "propertyInsurance",
    path: "/siguracion-prone",
    group: "insurance",
    icon: "property",
    name: "Siguracion Prone",
    summary: "Mbrojtje për shtëpinë, apartamentin dhe biznesin.",
    title: "Siguracion Shtëpie & Prone në Vlorë – Zjarr, Tërmet | Trio Travel",
    description:
      "Siguracion shtëpie, apartamenti dhe biznesi në Vlorë me Albsig: zjarr, tërmet, përmbytje, vjedhje. Siguracion prone edhe për kredi bankare te Trio Travel & Immo.",
    keywords: [
      "siguracion shtepie",
      "siguracion shtepie Vlore",
      "siguracion prone",
      "siguracion apartamenti",
      "siguracion zjarri",
      "siguracion termeti",
      "siguracion per kredi",
      "siguracion biznesi",
      "siguracion dyqani",
      "siguracion prone Albsig",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracion Shtëpie & Prone në Vlorë",
    intro:
      "Shtëpia, apartamenti apo biznesi juaj janë investimi më i madh që keni. Me siguracionin e pronës nga Albsig te Trio Travel & Immo i mbroni nga zjarri, tërmeti, përmbytjet dhe vjedhja. Bëjmë edhe siguracionin që kërkon banka për kredinë e shtëpisë.",
    ...images("siguracion-prone"),
    imageAlt: "Siguracion shtëpie dhe prone në Vlorë",
    highlights: [
      {
        title: "Zjarr & tërmet",
        text: "Mbrojtje për ndërtesën nga rreziqet më të mëdha.",
      },
      {
        title: "Përmbytje & dëme nga uji",
        text: "Dëme nga tubacionet, shirat e rrëmbyeshëm dhe përmbytjet.",
      },
      {
        title: "Vjedhje & pajisje",
        text: "Mbulim edhe për mobiljet dhe pajisjet brenda pronës.",
      },
      {
        title: "Për kredi bankare",
        text: "Siguracioni i pronës që kërkohet nga bankat për kreditë hipotekore.",
      },
    ],
    documents: [
      "Kartë identiteti ose pasaportë e pronarit",
      "Certifikata e pronësisë ose kontrata e blerjes",
      "Adresa dhe sipërfaqja e pronës",
    ],
    steps: [
      "Na tregoni llojin e pronës dhe çfarë doni të mbuloni.",
      "Ju përgatisim ofertën Albsig sipas vlerës së pronës.",
      "Nënshkruani dhe merrni policën.",
    ],
    faqs: faqs("siguracion-prone", [
      {
        slug: "cfare-mbulon",
        question: "Çfarë mbulon siguracioni i shtëpisë?",
        answer:
          "Sipas policës që zgjidhni, mbulon dëmet nga zjarri, tërmeti, përmbytjet, rrjedhjet e ujit dhe vjedhja, si për ndërtesën ashtu edhe për sendet brenda saj.",
      },
      {
        slug: "kredi",
        question: "A mund të bëj te ju siguracionin e pronës për kredinë bankare?",
        answer:
          "Po. Bëjmë siguracionin e pronës që kërkojnë bankat për kreditë e shtëpisë dhe ju japim policën që i duhet bankës.",
      },
      {
        slug: "biznes",
        question: "A siguroni edhe dyqane dhe ambiente biznesi?",
        answer:
          "Po. Siguracioni i pronës vlen edhe për dyqane, zyra dhe ambiente biznesi, bashkë me mallrat dhe pajisjet brenda tyre.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua të bëj siguracion për shtëpinë / pronën time. Çfarë informacioni ju duhet?",
  },
  {
    key: "lifeInsurance",
    path: "/siguracion-jete",
    group: "insurance",
    icon: "life",
    name: "Siguracion Jete",
    summary: "Siguracion jete dhe aksidentesh personale.",
    title: "Siguracion Jete & Aksidentesh Personale në Vlorë | Trio Travel & Immo",
    description:
      "Siguracion jete dhe aksidentesh personale në Vlorë me Albsig. Mbroni familjen tuaj dhe bëni siguracionin e jetës për kredi te Trio Travel & Immo.",
    keywords: [
      "siguracion jete",
      "siguracion jete Vlore",
      "sigurim jete",
      "siguracion aksidentesh",
      "siguracion aksidentesh personale",
      "siguracion jete per kredi",
      "siguracion shendeti",
      "siguracion jete Albsig",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracion Jete në Vlorë",
    intro:
      "Siguracioni i jetës i jep familjes suaj siguri financiare në momentet më të vështira. Te Trio Travel & Immo ju shpjegojmë thjesht opsionet e Albsig për siguracion jete dhe aksidentesh personale, edhe kur kërkohet nga banka për kredi.",
    ...images("siguracion-jete"),
    imageAlt: "Siguracion jete dhe aksidentesh personale në Vlorë",
    highlights: [
      {
        title: "Siguracion jete",
        text: "Mbështetje financiare për familjen tuaj në rast fatkeqësie.",
      },
      {
        title: "Aksidente personale",
        text: "Mbulim për lëndimet dhe pasojat e aksidenteve, në punë ose në jetën e përditshme.",
      },
      {
        title: "Për kredi bankare",
        text: "Siguracioni i jetës që kërkohet nga bankat kur merrni kredi.",
      },
      {
        title: "Këshillim pa detyrim",
        text: "Ju shpjegojmë çdo kusht para se të nënshkruani.",
      },
    ],
    documents: [
      "Kartë identiteti ose pasaportë",
      "Të dhënat e përfituesve",
      "Dokumentet e kredisë, nëse siguracioni kërkohet nga banka",
    ],
    steps: [
      "Takohemi ose flasim në telefon për nevojat tuaja.",
      "Ju prezantojmë opsionet dhe çmimet e Albsig.",
      "Plotësojmë aplikimin dhe ju dorëzojmë policën.",
    ],
    faqs: faqs("siguracion-jete", [
      {
        slug: "kujt-i-duhet",
        question: "Kujt i duhet siguracioni i jetës?",
        answer:
          "Kujtdo që do të sigurojë mirëqenien financiare të familjes, si dhe atyre që marrin kredi, pasi shumë banka e kërkojnë.",
      },
      {
        slug: "aksidente",
        question: "Çfarë është siguracioni i aksidenteve personale?",
        answer:
          "Është një siguracion që ju dëmshpërblen për lëndimet ose paaftësinë nga një aksident, në punë ose jashtë saj.",
      },
      {
        slug: "kredi",
        question: "A mund të bëj te ju siguracionin e jetës për kredinë?",
        answer:
          "Po. Përgatisim siguracionin e jetës sipas kërkesave të bankës dhe ju japim policën që duhet t'i dorëzoni.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua informacion për siguracion jete / aksidentesh personale.",
  },
  {
    key: "travelInsurance",
    path: "/siguracion-udhetimi",
    group: "insurance",
    icon: "travel",
    name: "Siguracion Udhëtimi",
    summary: "Siguracion shëndetësor udhëtimi, edhe për vizë.",
    title: "Siguracion Udhëtimi & Shëndetësor për Vizë në Vlorë | Trio Travel",
    description:
      "Siguracion udhëtimi dhe siguracion shëndetësor për vizë Schengen, UK, SHBA e të tjera, me Albsig në Vlorë. Policë e gatshme brenda pak minutash te Trio Travel & Immo.",
    keywords: [
      "siguracion udhetimi",
      "siguracion udhetimi Vlore",
      "sigurim udhetimi",
      "siguracion shendetesor udhetimi",
      "siguracion per vize",
      "siguracion vize Schengen",
      "siguracion shendeti jashte shtetit",
      "travel insurance Albania",
      "siguracion udhetimi Albsig",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Siguracion Udhëtimi në Vlorë",
    intro:
      "Para çdo udhëtimi jashtë vendit, siguracioni shëndetësor ju mbron nga shpenzimet e papritura mjekësore. Shumë ambasada e kërkojnë për vizë. Te Trio Travel & Immo bëni siguracionin e udhëtimit me Albsig brenda pak minutash, bashkë me biletën ose paketën tuaj.",
    ...images("siguracion-udhetimi"),
    imageAlt: "Siguracion udhëtimi dhe shëndetësor për vizë",
    highlights: [
      {
        title: "Shpenzime mjekësore",
        text: "Mbulim për trajtimin mjekësor urgjent dhe shtrimin në spital jashtë vendit.",
      },
      {
        title: "Për vizë",
        text: "Polica që kërkojnë ambasadat për vizë Schengen dhe vende të tjera.",
      },
      {
        title: "Çdo destinacion",
        text: "Për pushime, punë, studime ose vizita familjare.",
      },
      {
        title: "Bashkë me biletën",
        text: "Rezervoni biletën ose paketën dhe siguracionin në të njëjtin vend.",
      },
    ],
    documents: [
      "Pasaporta e vlefshme",
      "Datat e udhëtimit dhe destinacioni",
    ],
    steps: [
      "Na tregoni destinacionin dhe datat e udhëtimit.",
      "Zgjidhni mbulimin që kërkon ambasada ose që ju përshtatet.",
      "Merrni policën Albsig gati për t'u printuar.",
    ],
    faqs: faqs("siguracion-udhetimi", [
      {
        slug: "vize",
        question: "A më duhet siguracion udhëtimi për vizë?",
        answer:
          "Për vizën Schengen dhe për shumë vende të tjera, ambasada kërkon siguracion shëndetësor udhëtimi. Ju bëjmë policën sipas kërkesave të ambasadës.",
      },
      {
        slug: "cfare-mbulon",
        question: "Çfarë mbulon siguracioni i udhëtimit?",
        answer:
          "Mbulon kryesisht shpenzimet mjekësore urgjente dhe shtrimin në spital gjatë qëndrimit jashtë vendit, sipas limitit të policës.",
      },
      {
        slug: "sa-shpejt",
        question: "Sa shpejt mund ta marr policën?",
        answer:
          "Zakonisht brenda pak minutash. Mjafton pasaporta dhe datat e udhëtimit.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Më duhet siguracion udhëtimi për ... (destinacioni) nga data ... deri më ...",
  },
  {
    key: "billPayments",
    path: "/pagesa-faturash",
    group: "payments",
    icon: "bills",
    name: "Pagesa Faturash",
    summary: "Paguani dritat, ujin dhe televizorin (DigitAlb).",
    title: "Pagesa Faturash në Vlorë – Drita, Ujë, DigitAlb | Trio Travel & Immo",
    description:
      "Paguani faturat e dritave (OSHEE), të ujit dhe të televizorit DigitAlb në Vlorë, te Trio Travel & Immo në Kryqëzimin Rinia. Shpejt, pa radhë, me mandat pagese.",
    keywords: [
      "pagesa faturash",
      "pagesa faturash Vlore",
      "pagesa drita",
      "pagesa drita Vlore",
      "pagesa e dritave",
      "pagesa OSHEE",
      "fatura OSHEE",
      "pagesa uji",
      "pagesa uji Vlore",
      "fatura e ujit",
      "ujesjelles Vlore pagesa",
      "pagesa DigitAlb",
      "rinovim DigitAlb",
      "pagesa televizori",
      "ku paguhen dritat ne Vlore",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Pagesa Faturash në Vlorë",
    intro:
      "Paguani të gjitha faturat në një vend, pa radhë të gjata dhe pa humbur kohë. Te Trio Travel & Immo paguani faturën e dritave (OSHEE), të ujit dhe abonimin e televizorit DigitAlb, dhe merrni menjëherë mandatin e pagesës.",
    ...images("pagesa-faturash"),
    imageAlt: "Pagesa faturash drita, ujë dhe DigitAlb në Vlorë",
    highlights: [
      {
        title: "Drita – OSHEE",
        text: "Pagesa e faturës së energjisë elektrike me kodin e kontratës ose faturën.",
      },
      {
        title: "Uji",
        text: "Pagesa e faturës së ujit dhe e detyrimeve të prapambetura.",
      },
      {
        title: "Televizori – DigitAlb",
        text: "Rinovim dhe pagesë e abonimit DigitAlb.",
      },
      {
        title: "Mandat pagese",
        text: "Për çdo pagesë merrni mandatin që vërteton se fatura është paguar.",
      },
    ],
    documents: [
      "Fatura ose kodi i kontratës (për dritat dhe ujin)",
      "Numri i kartës ose i abonimit DigitAlb",
    ],
    steps: [
      "Ejani me faturën ose kodin e kontratës/abonimit.",
      "Verifikojmë shumën që duhet paguar.",
      "Paguani dhe merrni mandatin e pagesës.",
    ],
    faqs: faqs("pagesa-faturash", [
      {
        slug: "cilat-fatura",
        question: "Cilat fatura mund të paguaj te Trio Travel & Immo?",
        answer:
          "Mund të paguani faturat e dritave (OSHEE), të ujit dhe abonimin e televizorit DigitAlb.",
      },
      {
        slug: "cfare-duhet",
        question: "Çfarë më duhet për të paguar dritat ose ujin?",
        answer:
          "Mjafton fatura ose kodi i kontratës. Me të gjejmë shumën e saktë që duhet paguar.",
      },
      {
        slug: "mandati",
        question: "A marr vërtetim për pagesën?",
        answer:
          "Po, për çdo pagesë ju japim mandatin e pagesës, i cili vërteton që fatura është shlyer.",
      },
      {
        slug: "per-te-tjeret",
        question: "A mund të paguaj faturën për dikë tjetër?",
        answer:
          "Po. Mjafton të keni faturën ose kodin e kontratës së personit për të cilin po paguani.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua të paguaj një faturë (drita / ujë / DigitAlb). Çfarë më duhet të sjell?",
  },
  {
    key: "finePayments",
    path: "/pagesa-gjobash",
    group: "payments",
    icon: "fines",
    name: "Pagesa Gjobash",
    summary: "Paguani gjobat e policisë rrugore dhe çdo gjobë tjetër.",
    title: "Pagesa Gjobash në Vlorë – Gjoba Policie & Automjeti | Trio Travel",
    description:
      "Paguani çdo lloj gjobe në Vlorë: gjoba të policisë rrugore, gjoba automjeti, parkimi dhe gjoba të tjera, te Trio Travel & Immo. Shpejt dhe me mandat pagese.",
    keywords: [
      "pagesa gjobash",
      "pagesa gjobash Vlore",
      "pagesa gjobe",
      "gjoba policia rrugore",
      "pagesa gjobe policia rrugore",
      "gjoba automjeti",
      "kontroll gjobash",
      "gjoba parkimi",
      "ku paguhen gjobat",
      "pagesa gjobash me targe",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Pagesa Gjobash në Vlorë",
    intro:
      "Keni marrë një gjobë? Te Trio Travel & Immo paguani të gjitha llojet e gjobave, nga ato të policisë rrugore e automjetit tek gjobat e tjera administrative. Ju ndihmojmë të gjeni shumën e saktë dhe ju japim mandatin e pagesës.",
    ...images("pagesa-gjobash"),
    imageAlt: "Pagesa gjobash të policisë rrugore në Vlorë",
    highlights: [
      {
        title: "Gjoba të policisë rrugore",
        text: "Gjoba për shpejtësi, parkim, dokumente ose shkelje të tjera në qarkullim.",
      },
      {
        title: "Gjoba automjeti",
        text: "Gjoba të lidhura me automjetin, që duhet të shlyhen p.sh. para kolaudimit apo shitjes.",
      },
      {
        title: "Çdo lloj gjobe",
        text: "Edhe gjoba të tjera administrative. Na pyesni dhe ju ndihmojmë.",
      },
      {
        title: "Mandat pagese",
        text: "Vërtetim zyrtar që gjoba është paguar.",
      },
    ],
    documents: [
      "Procesverbali i gjobës ose numri i saj",
      "Targa e automjetit (për gjobat e automjeteve)",
      "Kartë identiteti",
    ],
    steps: [
      "Na sillni procesverbalin ose targën e automjetit.",
      "Verifikojmë gjobat dhe shumën që duhet paguar.",
      "Paguani dhe merrni mandatin e pagesës.",
    ],
    faqs: faqs("pagesa-gjobash", [
      {
        slug: "cilat-gjoba",
        question: "Cilat gjoba mund të paguaj te ju?",
        answer:
          "Të gjitha llojet e gjobave: të policisë rrugore, të automjetit, të parkimit dhe gjoba të tjera administrative.",
      },
      {
        slug: "nuk-kam-procesverbal",
        question: "Nuk e kam procesverbalin. A mund ta paguaj gjobën?",
        answer:
          "Për gjobat e automjeteve, shpesh mjafton targa e makinës për të verifikuar gjobat. Ejani dhe ju ndihmojmë.",
      },
      {
        slug: "vertetim",
        question: "A marr vërtetim që gjoba është paguar?",
        answer:
          "Po, pas pagesës ju japim mandatin e pagesës, të cilin mund ta paraqisni kur t'ju kërkohet.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Dua të paguaj një gjobë. Çfarë më duhet të sjell?",
  },
  {
    key: "moneygram",
    path: "/moneygram-vlore",
    group: "payments",
    icon: "moneygram",
    name: "MoneyGram",
    summary: "Dërgoni dhe merrni para kudo në botë.",
    title: "MoneyGram në Vlorë – Dërgo & Merr Para | Trio Travel & Immo",
    description:
      "Pikë MoneyGram në Vlorë, Kryqëzimi Rinia. Dërgoni dhe merrni para nga e gjithë bota shpejt dhe në mënyrë të sigurt te Trio Travel & Immo.",
    keywords: [
      "MoneyGram",
      "MoneyGram Vlore",
      "MoneyGram Vlora",
      "MoneyGram Albania",
      "pike MoneyGram",
      "agjent MoneyGram Vlore",
      "dergim parash",
      "dergim parash Vlore",
      "transferte parash",
      "merr para nga jashte",
      "transferta parash nderkombetare",
      ...LOCAL_KEYWORDS,
    ],
    heading: "MoneyGram në Vlorë",
    intro:
      "Dërgoni ose merrni para nga familjarët dhe miqtë në të gjithë botën me MoneyGram. Te Trio Travel & Immo, në Kryqëzimin Rinia në Vlorë, transferta kryhet shpejt dhe në mënyrë të sigurt, me ndihmën e stafit tonë në çdo hap.",
    ...images("moneygram"),
    imageAlt: "Dërgim dhe marrje parash me MoneyGram në Vlorë",
    highlights: [
      {
        title: "Merrni para",
        text: "Tërhiqni paratë që ju dërgojnë nga jashtë me numrin e referencës dhe ID-në.",
      },
      {
        title: "Dërgoni para",
        text: "Dërgoni para drejt shumë vendeve të botës.",
      },
      {
        title: "Shpejt & e sigurt",
        text: "Transferta përmes rrjetit ndërkombëtar MoneyGram.",
      },
      {
        title: "Në qendër të Vlorës",
        text: "Kryqëzimi Rinia, nga e hëna në të shtunë.",
      },
    ],
    documents: [
      "Kartë identiteti ose pasaportë e vlefshme",
      "Numri i referencës së transfertës (për të marrë para)",
      "Emri i plotë dhe shteti i marrësit (për të dërguar para)",
    ],
    steps: [
      "Ejani në zyrë me dokumentin e identitetit.",
      "Për të marrë para, jepni numrin e referencës. Për të dërguar, të dhënat e marrësit.",
      "Transferta kryhet dhe ju merrni vërtetimin.",
    ],
    faqs: faqs("moneygram", [
      {
        slug: "marr-para",
        question: "Çfarë më duhet për të marrë para me MoneyGram?",
        answer:
          "Ju duhet një dokument identiteti i vlefshëm dhe numri i referencës së transfertës, që jua jep personi që i ka dërguar paratë.",
      },
      {
        slug: "dergoj-para",
        question: "Si mund të dërgoj para jashtë shtetit?",
        answer:
          "Ejani me dokumentin e identitetit dhe të dhënat e marrësit. Ne kryejmë transfertën dhe ju japim numrin e referencës për t'ia dërguar marrësit.",
      },
      {
        slug: "ku",
        question: "Ku ndodhet pika juaj MoneyGram në Vlorë?",
        answer:
          "Jemi në Kryqëzimin Rinia, Pallati i Kollozit, Vlorë, dhe punojmë nga e hëna në të shtunë.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Kam një pyetje për shërbimin MoneyGram (dërgim / marrje parash).",
  },
  {
    key: "eAlbania",
    path: "/sherbime-e-albania",
    group: "assistance",
    icon: "eAlbania",
    name: "Shërbime e-Albania",
    summary: "Aplikime, certifikata dhe dokumente online.",
    title: "Shërbime e-Albania në Vlorë – Aplikime & Certifikata | Trio Travel",
    description:
      "Ndihmë me shërbimet e-Albania në Vlorë: certifikata, vërtetime, aplikime online dhe dokumente me vulë elektronike, te Trio Travel & Immo.",
    keywords: [
      "e-Albania",
      "e-Albania Vlore",
      "sherbime e-Albania",
      "aplikim ne e-Albania",
      "ndihme per e-Albania",
      "certifikate familjare",
      "certifikate personale",
      "certifikate lindje e-Albania",
      "vertetim e-Albania",
      "aplikim online dokumente",
      ...LOCAL_KEYWORDS,
    ],
    heading: "Shërbime e-Albania në Vlorë",
    intro:
      "Shumë dokumente sot merren vetëm online, në portalin e-Albania, por jo të gjithë kanë kohë ose njohuri për ta bërë vetë. Te Trio Travel & Immo ju ndihmojmë të aplikoni, të shkarkoni dhe të printoni certifikatat dhe dokumentet që ju duhen.",
    ...images("sherbime-e-albania"),
    imageAlt: "Ndihmë për aplikime dhe certifikata në e-Albania",
    highlights: [
      {
        title: "Certifikata",
        text: "Certifikatë familjare, personale, lindjeje dhe të tjera nga Gjendja Civile.",
      },
      {
        title: "Vërtetime",
        text: "Vërtetime dhe dokumente me vulë elektronike, të vlefshme për institucionet.",
      },
      {
        title: "Aplikime online",
        text: "Plotësim dhe dorëzim i aplikimeve për shërbimet publike.",
      },
      {
        title: "Printim i dokumenteve",
        text: "Ju i merrni dokumentet gati, të printuara.",
      },
    ],
    documents: [
      "Kartë identiteti",
      "Kredencialet e llogarisë e-Albania, ose ju ndihmojmë të krijoni një llogari",
      "Dokumente shtesë, sipas shërbimit që kërkoni",
    ],
    steps: [
      "Na tregoni çfarë dokumenti ose shërbimi ju duhet.",
      "Bëjmë aplikimin bashkë në portalin e-Albania.",
      "Ju dorëzojmë dokumentin e printuar ose ju njoftojmë kur të jetë gati.",
    ],
    faqs: faqs("e-albania", [
      {
        slug: "cfare-sherbimesh",
        question: "Për çfarë shërbimesh e-Albania mund të më ndihmoni?",
        answer:
          "Për certifikata të Gjendjes Civile, vërtetime të ndryshme, aplikime online për shërbime publike dhe printimin e dokumenteve me vulë elektronike.",
      },
      {
        slug: "llogari",
        question: "Nuk kam llogari në e-Albania. Çfarë duhet të bëj?",
        answer:
          "Ejani me kartën e identitetit dhe ju ndihmojmë të krijoni llogarinë dhe ta përdorni për herë të parë.",
      },
      {
        slug: "vlefshmeria",
        question: "A janë të vlefshme dokumentet nga e-Albania?",
        answer:
          "Po. Dokumentet me vulë elektronike nga e-Albania pranohen nga institucionet publike në Shqipëri.",
      },
    ]),
    whatsappMessage:
      "Përshëndetje! Më duhet ndihmë për një shërbim në e-Albania.",
  },
];

export const getServicePage = (key: string) =>
  SERVICE_PAGES.find((service) => service.key === key);

// Travel and real estate already have their own pages; the services hub and
// footer list them next to the new services.
export const CORE_SERVICES = [
  {
    name: "Paketa Turistike",
    summary: "Pushime të organizuara dhe paketa të personalizuara.",
    path: "/paketa-turistike",
  },
  {
    name: "Bileta Avioni",
    summary: "Bileta avioni dhe oferta fluturimesh për çdo destinacion.",
    path: "/bileta-avioni",
  },
  {
    name: "Prona",
    summary: "Prona në shitje dhe me qera në Vlorë.",
    path: "/pronat",
  },
];
