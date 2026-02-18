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

export type HotelImage = {
  id?: string | number;
  hotel_image?: string;
};

type HotelFacilities = {
  id?: string;
  facility?: string;
};

export type HotelTypes = {
  id?: string;
  hotel_name: string;
  location: string;
  description: string;
  rating: number | null;
  reviews: number | null;
  price: number | null;
  facilities: (HotelFacilities | string)[];
  hotel_images: (HotelImage | File | string)[];
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
