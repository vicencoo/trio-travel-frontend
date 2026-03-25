import { axios } from '@/api';

export const propertyService = {
  getAll: (params: {
    limit?: number;
    page?: number;
    status?: string;
    searchQuery?: string;
    listingType?: 'all' | 'rent' | 'sale';
  }) => axios.get('/properties', { params }),

  getOne: (id: number) => axios('/property', { params: { id } }),

  add: (formData: FormData) => axios.post('/admin/add-property', formData),

  edit: (id: number, formData: FormData) =>
    axios.post('/admin/edit-property', formData, { params: { id } }),

  deleteProperty: (id: number) =>
    axios.post('/admin/delete-property', null, { params: { id } }),

  publishOrDraft: (id: number) =>
    axios.post('/admin/property/publishOrDraft', null, { params: { id } }),

  renewProperty: (id: string | number) =>
    axios.post('/admin/renew-property', null, { params: { id } }),
};
