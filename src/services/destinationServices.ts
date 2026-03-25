import { axios } from '@/api';

export const destinationServices = {
  getAll: (params?: { limit?: number; page?: number }) =>
    axios('/destinations', { params }),

  delete: (destination_id: number) =>
    axios.post('/admin/delete-destination', null, {
      params: { destination_id },
    }),

  add: (formData: FormData) => axios.post('/admin/add-destination', formData),

  edit: (destination_id: number, formData: FormData) =>
    axios.post('/admin/edit-destination', formData, {
      params: { destination_id },
    }),
};

//  ? `/admin/edit-destination?destination_id=${data.id}`
//         : '/admin/add-destination';
