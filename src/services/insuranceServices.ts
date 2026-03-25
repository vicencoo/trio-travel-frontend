import { axios } from '@/api';
import type { Insurance } from '@/types/types';

export const insuranceServices = {
  getAll: (params: { limit?: number; page?: number; searchQuery?: string }) =>
    axios('/admin/insurances', { params }),

  add: (data: Insurance) => axios.post('/admin/add-insurance', data),

  edit: (insuranceId: number, data: Insurance) =>
    axios.post('/admin/edit-insurance', data, { params: { insuranceId } }),

  expiringInsurances: (params: {
    days?: string | number;
    limit?: number;
    page?: number;
    searchQuery?: string;
  }) => axios('/admin/expiring-insurances', { params }),

  renewInsurance: (insuranceId: number, expiration_date: string | Date) =>
    axios.post(
      '/admin/renew-insurance',
      { expiration_date },
      {
        params: { insuranceId },
      },
    ),

  delete: (insuranceId: number) =>
    axios.post('/admin/delete-insurance', null, { params: { insuranceId } }),
};
