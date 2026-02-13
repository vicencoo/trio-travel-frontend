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

export type HotelFieldError = {
  hotel_name?: string;
  location?: string;
  description?: string;
  rating?: string;
  reviews?: string;
  price?: string;
};

export type DestinationFieldError = {
  city?: string;
  country?: string;
  slogan?: string;
};
