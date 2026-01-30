import type { PlaneTicket } from './types';

export type AllTicketsResponse = {
  tickets: PlaneTicket[];
  minPrice?: number | null;
  averagePrice?: number | null;
  totalTickets?: number | null;
};
