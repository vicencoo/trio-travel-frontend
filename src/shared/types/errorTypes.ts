export type PackageFieldError = {
  title?: string;
  destination?: string;
  price?: string;
  duration?: string;
  description?: string;
  accomodation?: string;
  meal_included?: string;
};

export type PropertyFieldError = {
  title?: string;
  property_type?: string;
  description?: string;
  city?: string;
  street?: string;
  area?: string;
  price?: string;
  space?: string;
};

export type PlaneTicketFieldError = {
  from?: string;
  to?: string;
  departure_airport?: string;
  arrival_airport?: string;
  price?: string;
};

export type DestinationFieldError = {
  city?: string;
  country?: string;
  slogan?: string;
};

export type SignupFieldError = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type LoginFieldError = {
  email?: string;
  password?: string;
};

export type BookingFieldError = {
  client_name?: string;
  ticket_date?: string;
  ticket_code?: string;
  ticket_price?: string;
};

export type InsuranceFieldError = {
  client_name?: string;
  contact_number?: string;
  car_plate?: string;
};
