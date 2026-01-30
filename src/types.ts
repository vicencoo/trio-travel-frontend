export type PropertyImage = {
  _id?: string;
  propertyImage?: string;
};

export type Property = {
  _id?: string;
  listeningType?: string;
  propertyType?: string;
  title?: string;
  description?: string;
  city?: string;
  street?: string;
  area?: string;
  price?: number | null;
  space?: number | null;
  bedrooms?: number | null;
  toilets?: number | null;
  floorNumber?: number | null;
  buildYear?: number | null;
  propertyImages?: (File | string | PropertyImage)[];
};

type Pagination = {
  totalProducts: number;
  totalPages: number;
};

export type PropertiesResponse = {
  properties: Property[];
  pagination: Pagination;
};

export type TicketImage = {
  _id: string;
  image: string;
};

export type PlaneTicket = {
  _id?: string;
  from?: string;
  to?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  price?: number | null;
  ticketImages?: (File | string | TicketImage)[];
};

export type PackageImages = {
  _id?: string;
  image: string;
};

export type TouristPackage = {
  _id?: string;
  title?: string;
  destination?: string;
  price?: number | null;
  duration?: number | null;
  description?: string;
  accomodation?: string;
  mealIncluded?: string;
  packageImages?: (PackageImages | File | string)[];
};

type PackagePagination = {
  totalPackages: number;
  totalPages: number;
};

export type PackageResponse = {
  packages: TouristPackage[];
  pagination: PackagePagination;
};

export type ContactTypes = {
  name: string;
  email: string;
  phoneNumber: number | null;
  message: string;
};

export type HotelImages = {
  _id?: string | number;
  hotelImage?: string;
};

export type HotelTypes = {
  _id?: string;
  hotelName: string;
  location: string;
  description: string;
  rating: number | null;
  reviews: number | null;
  price: number | null;
  facilities: string[];
  hotelImages: (HotelImages | File | string)[];
};

type HotelPagination = {
  allHotels: number;
  allPages: number;
};

export type HotelsResponse = {
  hotels: HotelTypes[];
  pagination: HotelPagination;
};
