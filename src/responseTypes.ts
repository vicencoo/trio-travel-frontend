import type {
  DestinationTypes,
  HotelTypes,
  PlaneTicket,
  Property,
  TouristPackage,
} from './types';

export type AllTicketsResponse = {
  tickets: PlaneTicket[];
  minPrice?: number | null;
  averagePrice?: number | null;
  totalTickets?: number | null;
};

type PropertyPagination = {
  totalProducts: number;
  totalPages: number;
};

export type PropertiesResponse = {
  properties: Property[];
  pagination: PropertyPagination;
};

type PackagePagination = {
  totalPackages: number;
  totalPages: number;
};

export type PackageResponse = {
  packages: TouristPackage[];
  pagination: PackagePagination;
};

type HotelPagination = {
  allHotels: number;
  allPages: number;
};

export type HotelsResponse = {
  hotels: HotelTypes[];
  pagination: HotelPagination;
};

type DestinationPagination = {
  allDestinations: number;
  allPages: number;
};

export type DestinationResponse = {
  destinations: DestinationTypes[];
  pagination: DestinationPagination;
};
