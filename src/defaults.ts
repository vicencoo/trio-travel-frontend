import type {
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

export const DEFAULT_PROPERTY: Property = {
  _id: '',
  listeningType: 'rent',
  propertyType: '',
  title: '',
  description: '',
  city: '',
  area: '',
  street: '',
  price: null,
  space: null,
  bedrooms: null,
  toilets: null,
  floorNumber: null,
  buildYear: null,
  propertyImages: [],
};

export const DEFAULT_TICKET: PlaneTicket = {
  from: '',
  to: '',
  departureAirport: '',
  arrivalAirport: '',
  price: null,
  ticketImages: [],
};

export const DEFAULT_PACKAGE: TouristPackage = {
  _id: '',
  title: '',
  destination: '',
  price: null,
  duration: null,
  description: '',
  accomodation: '',
  mealIncluded: '',
  packageImages: [],
};

export const DEFAULT_CONTACT = {
  name: '',
  email: '',
  phoneNumber: null,
  message: '',
};

export const HOTEL_DATA: HotelTypes = {
  hotelName: '',
  location: '',
  description: '',
  rating: null,
  reviews: null,
  price: null,
  facilities: [],
  hotelImages: [],
};
