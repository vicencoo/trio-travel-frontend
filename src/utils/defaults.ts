import type {
  LoginFieldError,
  SignupFieldError,
} from '@/shared/types/errorTypes';
import type {
  DestinationTypes,
  PlaneTicket,
  Property,
  TouristPackage,
  SoldTicket,
  Insurance,
} from '@/shared/types/types';

export const DEFAULT_URL =
  window.location.hostname === 'localhost'
    ? import.meta.env.VITE_LOCAL
    : import.meta.env.VITE_NETWORK;

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
  status: 'draft',
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
  status: 'draft',
};

export const DEFAULT_CONTACT = {
  name: '',
  email: '',
  phoneNumber: null,
  message: '',
};

export const DESTINATION_DATA: DestinationTypes = {
  city: '',
  country: '',
  slogan: '',
  destination_types: [],
  destination_images: [],
};

export const DEFAULT_SIGN_UP_DATA: SignupFieldError = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const DEFAULT_LOGIN_DATA: LoginFieldError = {
  email: '',
  password: '',
};

export const WORK_FORM_DEFAULT: SoldTicket = {
  client_name: '',
  ticket_date: new Date(),
  ticket_code: '',
  ticket_price: '',
};

export const DEFAULT_INSURANCE: Insurance = {
  client_name: '',
  contact_number: '',
  car_plate: '',
  expiration_date: new Date(),
};
