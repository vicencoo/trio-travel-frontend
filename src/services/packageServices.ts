import { axios } from '@/api';

export const packageServices = {
  getAll: (params: {
    packageLimit?: number;
    page?: number;
    searchQuery?: string;
    status?: string;
  }) => axios('/packages', { params }),

  getOne: (packageId: number) => axios('/package', { params: { packageId } }),

  renew: (packageId: number) =>
    axios.post('/admin/renew-package', null, { params: { packageId } }),

  publishOrDraft: (packageId: number) =>
    axios.post('/admin/package/publishOrDraftPackage', null, {
      params: { packageId },
    }),

  add: (formData: FormData) => axios.post('/admin/add-package', formData),

  edit: (packageId: number, formData: FormData) =>
    axios.post('/admin/edit-package', formData, { params: { packageId } }),

  delete: (packageId: number) =>
    axios.post('/admin/delete-package', null, { params: { packageId } }),
};
