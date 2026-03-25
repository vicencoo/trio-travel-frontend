import { axios } from '@/api';

export const ticketServices = {
  getAll: (params: { limit?: number; page?: number; searchQuery?: string }) =>
    axios('/tickets', { params }),

  add: (formData: FormData) => axios.post('/admin/add-ticket', formData),

  edit: (ticketId: number, formData: FormData) =>
    axios.post('/admin/edit-ticket', formData, { params: { ticketId } }),

  delete: (ticketId: number) =>
    axios.post('/admin/delete-ticket', null, { params: { ticketId } }),
};
