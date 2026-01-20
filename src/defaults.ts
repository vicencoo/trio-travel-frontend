export const DEFAULT_URL = 'http://localhost:8001';

export type PropertyData = {
  listeningType: string;
  propertyType: string;
  title: string;
  description: string;
  city: string;
  area: string;
  street: string;
  price: string;
  space: string;
  bedrooms: string;
  toilets: string;
  buildYear: string;
  propertyImages: (File | string)[];
};

export const DEFAULT_PROPERTY: PropertyData = {
  listeningType: 'rent',
  propertyType: '',
  title: '',
  description: '',
  city: '',
  area: '',
  street: '',
  price: '',
  space: '',
  bedrooms: '',
  toilets: '',
  buildYear: '',
  propertyImages: [],
};
