import { axios } from '@/api';

export const dashboardServices = {
  getCounts: () => axios('/admin/dashboard/get-data-counts'),

  getAnalytics: () => axios('/admin/dashboard/get-analytics'),
};
