import type { Insurance } from '@/types/types';

export const DEFAULT_INSURANCE: Insurance = {
  client_name: '',
  contact_number: '',
  car_plate: '',
  expiration_date: new Date(),
};
