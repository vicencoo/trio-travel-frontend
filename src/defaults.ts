import type {
  DestinationTypes,
  HotelTypes,
  PlaneTicket,
  Property,
  TouristPackage,
} from './types';

// export const DEFAULT_URL = 'http://localhost:8001';
// export const DEFAULT_URL = 'http://192.168.20.9:8001';
export const DEFAULT_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8001'
    : 'http://192.168.20.9:8001';
// 'http://172.20.10.4:8001';

export const DEFAULT_PROPERTY: Property = {
  id: '',
  listing_type: 'rent',
  property_type: '',
  title: '',
  description: '',
  city: '',
  area: '',
  street: '',
  price: null,
  space: null,
  bedrooms: null,
  toilets: null,
  floor_number: null,
  build_year: null,
  property_images: [],
};

export const DEFAULT_TICKET: PlaneTicket = {
  from: '',
  to: '',
  departure_airport: '',
  arrival_airport: '',
  price: null,
  ticket_images: [],
};

export const DEFAULT_PACKAGE: TouristPackage = {
  id: '',
  title: '',
  destination: '',
  price: null,
  duration: null,
  description: '',
  accomodation: '',
  meal_included: '',
  package_images: [],
};

export const DEFAULT_CONTACT = {
  name: '',
  email: '',
  phoneNumber: null,
  message: '',
};

export const HOTEL_DATA: HotelTypes = {
  hotel_name: '',
  location: '',
  description: '',
  rating: null,
  reviews: null,
  price: null,
  facilities: [],
  hotel_images: [],
};

export const DESTINATION_DATA: DestinationTypes = {
  city: '',
  country: '',
  slogan: '',
  destination_types: [],
  destination_images: [],
};
