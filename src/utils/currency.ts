export type Currency = 'EUR' | 'ALL';

export const CURRENCY_OPTIONS = [
  { label: 'Euro (€)', value: 'EUR' },
  { label: 'Lek (ALL)', value: 'ALL' },
];

export const currencySymbol = (currency?: string | null) =>
  currency === 'ALL' ? ' Lekë' : '€';

export const formatPropertyPrice = (
  price: number | string | null | undefined,
  currency?: string | null,
) =>
  `${new Intl.NumberFormat('de-DE').format(Number(price))}${currencySymbol(currency)}`;
