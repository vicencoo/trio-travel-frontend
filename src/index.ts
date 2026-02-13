export const SIDEBAR_ITEMS = [
  { id: 1, text: 'Faqja Kryesore', path: '/' },
  { id: 2, text: 'Pronat', path: '/admin/manage-properties' },
  { id: 3, text: 'Biletat', path: '/admin/plane-tickets' },
  { id: 4, text: 'Paketat Turistike', path: '/admin/manage-packages' },
  { id: 5, text: 'Hotelet', path: '/admin/manage-hotels' },
  { id: 6, text: 'Destinacionet', path: '/admin/manage-destinations' },
];

export const HEADER_ITEMS = [
  { id: 1, name: 'faqja kryesore', path: '/' },
  { id: 2, name: 'pronat', path: '/properties' },
  { id: 3, name: 'bileta avioni', path: '/planeTickets' },
  { id: 4, name: 'paketa turistike', path: '/packages' },
  { id: 5, name: 'hotele', path: '/hotels' },
  { id: 6, name: 'destinacione', path: '/destinations' },
  { id: 7, name: 'kontakt', path: '/contact' },
];

export const PROPERTY_TYPE = [
  { label: 'Apartament', value: 'apartament' },
  { label: 'Garsonierë', value: 'garsoniere' },
  { label: 'Duplex', value: 'duplex' },
  { label: 'Penthouse', value: 'penthouse' },

  { label: 'Vilë', value: 'vile' },
  { label: 'Vilë Luksoze', value: 'vile_luksoze' },
  { label: 'Shtëpi Private', value: 'shtepi_private' },

  { label: 'Kapanon', value: 'kapanon' },
  { label: 'Zyrë', value: 'zyre' },
  { label: 'Dyqan', value: 'dyqan' },
  { label: 'Magazinë', value: 'magazine' },
  { label: 'Depo', value: 'depo' },

  { label: 'Resort', value: 'resort' },
  { label: 'Hotel', value: 'hotel' },
  { label: 'Bar / Restorant', value: 'bar_restorant' },
  { label: 'Bar / Kafe', value: 'bar_kafe' },

  { label: 'Tokë', value: 'toke' },
  { label: 'Truall', value: 'truall' },

  { label: 'Objekt në Ndërtim', value: 'ne_ndertim' },
  { label: 'Objekt Industrial', value: 'industrial' },
];

export const FAQ_INFO = [
  {
    id: 1,
    question: 'What travel services do you offer?',
    answer:
      'We offer a complete range of travel services including airline ticket bookings (domestic and international), travel packages, hotel reservations, visa assistance, and travel insurance.',
  },
  {
    id: 2,
    question:
      'Can you help me book flight tickets at the best available price?',
    answer:
      'Yes, we assist with booking flight tickets across multiple airlines and routes. Prices depend on availability, travel dates, and airline rules, and we aim to find the most suitable option for your needs.',
  },
  {
    id: 3,
    question: 'Do you offer holiday and tour packages?',
    answer:
      'Yes, we provide a variety of tour and holiday packages such as family trips, honeymoons, group tours, and customized travel plans based on your preferences.',
  },
  {
    id: 4,
    question: 'Can I change or cancel my flight or travel booking?',
    answer:
      'Changes and cancellations depend on airline and supplier policies. Some bookings are refundable or changeable with fees, while others are non-refundable. We clearly explain all terms before confirmation',
  },
  {
    id: 5,
    question: 'Do you assist with visas and travel documentation?',
    answer:
      'Yes, we provide guidance and assistance with visa applications, required travel documents, and related procedures, depending on the destination.',
  },
  {
    id: 6,
    question: 'Do you provide travel insurance and other add-on services?',
    answer:
      'Yes, we offer travel insurance as well as additional services such as seat selection, extra baggage, special meals, and special assistance requests, subject to airline and provider policies.',
  },
  {
    id: 7,
    question: 'How can I book your travel services?',
    answer:
      'You can book through our office or by phone. Payment options vary and may include bank transfer or cash, depending on the service booked.',
  },
];
