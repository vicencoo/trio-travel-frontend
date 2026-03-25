import { axios } from '@/api';
import type { SoldTicket } from '@/types/types';

export const bookingServices = {
  getBookings: () => axios('/admin/get-bookings'),

  delete: (bookingId: number) =>
    axios.post('/admin/delete-booking', null, { params: { bookingId } }),

  add: (data: SoldTicket) => axios.post('/admin/add-booking', data),

  edit: (bookingId: number, data: SoldTicket) =>
    axios.post('/admin/edit-booking', data, { params: { bookingId } }),

  getCheckInTickets: (params: { date: Date }) =>
    axios('/admin/get-checkin-tickets', { params }),

  toggleStatus: (bookingId: number) =>
    axios.post('/admin/bookings/toggle-status', null, {
      params: { bookingId },
    }),
};
