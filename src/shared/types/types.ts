export type PropertyImage = {
  id?: string;
  property_image?: string;
};

export type Property = {
  id?: string;
  listing_type?: string;
  property_type?: string;
  title?: string;
  description?: string;
  city?: string;
  street?: string;
  area?: string;
  price?: number | null;
  space?: number | null;
  bedrooms?: number | null;
  toilets?: number | null;
  floor_number?: number | null;
  build_year?: number | null;
  property_images?: (File | string | PropertyImage)[];
  status: 'active' | 'draft';
};

export type TicketImage = {
  id: string;
  image: string;
};

export type PlaneTicket = {
  id?: string;
  from?: string;
  to?: string;
  departure_airport?: string;
  arrival_airport?: string;
  price?: number | null;
  ticket_images?: (File | string | TicketImage)[];
};

export type PackageImage = {
  id?: string;
  image: string;
};

export type TouristPackage = {
  id?: string;
  title?: string;
  destination?: string;
  price?: number | null;
  duration?: number | null;
  description?: string;
  accomodation?: string;
  meal_included?: string;
  package_images?: (PackageImage | File | string)[];
  status: 'active' | 'draft';
};

export type ContactTypes = {
  name: string;
  email: string;
  phoneNumber: number | null;
  message: string;
};

export type DestinationType = {
  id?: string;
  type?: string;
};

export type DestinationImages = {
  id?: string | number;
  destination_image?: string;
};

export type DestinationTypes = {
  id?: string;
  city?: string;
  country?: string;
  slogan?: string;
  destination_types: DestinationType[];
  destination_images: (DestinationImages | File | string)[];
};

export type User = {
  id?: number;
  email?: string;
  username?: string;
  role?: string;
};

export type SoldTicket = {
  id?: number;
  client_name: string;
  ticket_date: Date;
  ticket_code: string;
  ticket_price: string;
  status?: 'pending' | 'completed';
  createdAt?: Date;
};

export type Insurance = {
  id?: number;
  client_name: string;
  contact_number: string | number;
  car_plate: string;
  expiration_date: Date | string;
  createdAt?: Date | string;
};
