import {
  CalendarClock,
  House,
  Layers,
  LayoutDashboard,
  LayoutList,
  MapPin,
  Package,
  Plane,
  ShieldCheck,
  TicketsPlane,
  Workflow,
} from '@/icons';

export const HEADER_ITEMS = [
  { id: 1, name: 'faqja kryesore', path: '/' },
  { id: 2, name: 'pronat', path: '/pronat' },
  { id: 3, name: 'bileta avioni', path: '/bileta-avioni' },
  { id: 4, name: 'paketa turistike', path: '/paketa-turistike' },
  { id: 5, name: 'destinacione', path: '/destinacionet' },
  { id: 6, name: 'kontakt', path: '/contact' },
];

export const SIDEBAR_ITEMS = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/admin/dashboard',
  },
  {
    icon: Layers,
    label: 'Menaxhimi i Datave',
    subItems: [
      { label: 'Pronat', icon: House, path: '/admin/manage-properties' },
      { label: 'Paketat', icon: Package, path: '/admin/manage-packages' },
      { label: 'Biletat', icon: Plane, path: '/admin/plane-tickets' },
      {
        label: 'Destinacionet',
        icon: MapPin,
        path: '/admin/manage-destinations',
      },
    ],
  },
  {
    icon: TicketsPlane,
    label: 'Check-in i Fluturimeve',
    path: '/admin/check-in-service',
  },
  {
    icon: Workflow,
    label: 'Menaxhimi i Biletave',
    path: '/admin/work-management',
  },
  {
    icon: ShieldCheck,
    label: 'Siguracionet',
    subItems: [
      {
        label: 'Menaxhimi i Siguracioneve',
        icon: LayoutList,
        path: '/admin/insurance-management',
      },
      {
        label: 'Skadencat e Siguracioneve',
        icon: CalendarClock,
        path: '/admin/insurance-expiration',
      },
    ],
  },
];
